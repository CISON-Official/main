import { useState, useRef, useCallback, useEffect } from 'react';
import templateImageFile from '@/assets/events/attending_conference_event_flyer.jpeg';
import {
    ArrowClockwiseIcon,
    CheckCircleIcon,
    DownloadIcon,
    ShareIcon,
    WarningCircleIcon,
    WhatsappLogoIcon,
    XLogoIcon,
    FacebookLogoIcon,
    LinkedinLogoIcon,
    TelegramLogoIcon,
    EnvelopeSimpleIcon,
    CopyIcon,
    CheckIcon,
    XIcon as CloseIcon,
    DeviceMobileIcon,
    MagnifyingGlassPlusIcon,
    TrashIcon,
    CalendarBlankIcon,
    MapPinIcon,
    GlobeIcon,
    SparkleIcon,
    ChartBarIcon,
} from '@phosphor-icons/react';
import SEO from '@/components/SEO';
import type { PanTracker } from '@/data/base';

// ---- Frame geometry, measured directly from the flyer artwork -----------
// The template's natural size is 1024x1536. These are expressed as
// FRACTIONS of the canvas width/height so they stay correct no matter
// what pixel size the template actually decodes at.
const OVAL = {
    cxFrac: 0.5073,      // horizontal center of the white oval
    cyFrac: 0.4359,      // vertical center of the white oval
    radiusXFrac: 0.2534, // horizontal radius (to the inner edge of the ring)
    radiusYFrac: 0.2145, // vertical radius
};

const NAME_BOX = {
    centerYFrac: 0.759,  // vertical center of the "I HAVE REGISTERED!" box
    maxWidthFrac: 0.62,  // safe text width inside the box (with margin)
};

// Reposition/zoom preview box — kept at the same aspect ratio as the real
// oval frame (rx:ry ≈ 0.7875) so crop math transfers 1:1 to the final canvas.
const PREVIEW_W = 220;
const PREVIEW_H = 280;
const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;
const PAN_KEY_STEP = 8; // px moved per arrow-key press
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8MB

// ---- Sharing content ------------------------------------------------------
const EVENT_URL = 'https://www.cison.org.ng/conference2026';
const SHARE_MESSAGE = "CISON is hosting and celebrating its 50th anniversary, and I have registered to attend. If you want to attend, go to the link.";
const shareTextWithLink = `${SHARE_MESSAGE} ${EVENT_URL}`;

const buildShareTargets = () => {
    const encodedText = encodeURIComponent(SHARE_MESSAGE);
    const encodedTextWithLink = encodeURIComponent(shareTextWithLink);
    const encodedUrl = encodeURIComponent(EVENT_URL);

    return [
        { id: 'whatsapp', label: 'WhatsApp', icon: WhatsappLogoIcon, color: '#25D366', href: `https://wa.me/?text=${encodedTextWithLink}` },
        { id: 'x', label: 'X', icon: XLogoIcon, color: '#e2e8f0', href: `https://twitter.com/intent/tweet?text=${encodedTextWithLink}` },
        { id: 'facebook', label: 'Facebook', icon: FacebookLogoIcon, color: '#1877F2', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}` },
        { id: 'linkedin', label: 'LinkedIn', icon: LinkedinLogoIcon, color: '#0A66C2', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
        { id: 'telegram', label: 'Telegram', icon: TelegramLogoIcon, color: '#26A5E4', href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}` },
        { id: 'email', label: 'Email', icon: EnvelopeSimpleIcon, color: '#94a3b8', href: `mailto:?subject=${encodeURIComponent('CISON 3rd International Conference — 50th Anniversary')}&body=${encodedTextWithLink}` },
    ];
};

// ---- Conference details, taken from the flyer -----------------------------
const CONFERENCE = {
    theme: 'From Legacy to Leadership: 50 years of promoting statistical development in Nigeria.',
    dates: '12th – 16th October 2026',
    venue: 'Chida International Hotel Event Center, Abuja, Nigeria',
    website: 'www.cison.org.ng/conference2026',
    highlights: ['3rd Pre-Conference', '3rd International Conference', '50th Anniversary'],
    partners: ['National Bureau of Statistics', 'TETFund', 'CBN'],
};


const NAME_MAX_LENGTH = 40;

// Shared card styling so every section reads as part of the same page.
const CARD = 'w-full p-6 lg:p-8';

export default function AttendingCardGenerator() {
    const [name, setName] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const [imgNaturalSize, setImgNaturalSize] = useState<{ w: number, h: number } | null>(null); // { w, h }
    const [crop, setCrop] = useState({ zoom: MIN_ZOOM, panX: 0, panY: 0 });
    const [isGenerated, setIsGenerated] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusIsError, setStatusIsError] = useState(false);
    const [isSharePanelOpen, setIsSharePanelOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [canShareFiles, setCanShareFiles] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const sharePanelRef = useRef<HTMLInputElement>(null);
    const previewBoxRef = useRef<HTMLInputElement>(null);
    const dragStateRef = useRef<PanTracker>(null); // { startX, startY, startPanX, startPanY }

    useEffect(() => {
        try {
            const probe = new File([new Blob(['x'])], 'probe.png', { type: 'image/png' });
            setCanShareFiles(!!(navigator.canShare && navigator.canShare({ files: [probe] })));
        } catch {
            setCanShareFiles(false);
        }
        setImgNaturalSize({ w: 0, h: 0 });
    }, []);

    useEffect(() => {
        if (!isSharePanelOpen) return;
        const handleClickOutside = (e: any) => {
            if (sharePanelRef.current && !sharePanelRef.current.contains(e.target)) {
                setIsSharePanelOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSharePanelOpen]);

    // Load an image and resolve once it's actually ready, whether it's
    // coming fresh from the network or already sitting in the browser's
    // cache (in which case 'onload' may never fire if attached after src
    // is set).
    const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
        if (img.complete && img.naturalWidth > 0) resolve(img);
    });

    // Whenever a new photo is loaded, read its natural size (needed for the
    // reposition/zoom math) and reset any previous crop.
    useEffect(() => {
        if (!imageSrc) {
            setImgNaturalSize(null);
            return;
        }
        let cancelled = false;
        loadImage(imageSrc).then((img) => {
            if (cancelled) return;
            setImgNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
            setCrop({ zoom: MIN_ZOOM, panX: 0, panY: 0 });
        });
        return () => { cancelled = true; };
    }, [imageSrc]);

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setStatusIsError(true);
            setStatusMessage("That file doesn't look like an image. Please choose a photo.");
            return;
        }

        if (file.size > MAX_UPLOAD_BYTES) {
            setStatusIsError(true);
            setStatusMessage('That photo is over 8MB. Please choose a smaller file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event: any) => {
            setImageSrc(event.target.result);
            setIsGenerated(false);
            setStatusMessage('');
            setStatusIsError(false);
        };
        reader.onerror = () => {
            setStatusIsError(true);
            setStatusMessage('Could not read that image. Please try another file.');
        };
        reader.readAsDataURL(file);
        e.target.value = ''; // allow re-selecting the same file later
    };

    const handleRemovePhoto = () => {
        setImageSrc(null);
        setImgNaturalSize(null);
        setCrop({ zoom: MIN_ZOOM, panX: 0, panY: 0 });
        setIsGenerated(false);
        setStatusMessage('');
        setStatusIsError(false);
    };

    const handleStartOver = () => {
        setName('');
        handleRemovePhoto();
    };

    // ---- Reposition / zoom math ---------------------------------------
    const getMaxPan = useCallback((zoom: any) => {
        if (!imgNaturalSize) return { maxX: 0, maxY: 0 };
        const baseScale = Math.max(PREVIEW_W / imgNaturalSize.w, PREVIEW_H / imgNaturalSize.h);
        const scale = baseScale * zoom;
        const dispW = imgNaturalSize.w * scale;
        const dispH = imgNaturalSize.h * scale;
        return {
            maxX: Math.max(0, (dispW - PREVIEW_W) / 2),
            maxY: Math.max(0, (dispH - PREVIEW_H) / 2),
        };
    }, [imgNaturalSize]);

    const clampPan = useCallback((panX: any, panY: any, zoom: any) => {
        const { maxX, maxY } = getMaxPan(zoom);
        return {
            panX: Math.min(maxX, Math.max(-maxX, panX)),
            panY: Math.min(maxY, Math.max(-maxY, panY)),
        };
    }, [getMaxPan]);

    const handleZoomChange = (e: any) => {
        const zoom = parseFloat(e.target.value);
        setCrop((prev) => ({ zoom, ...clampPan(prev.panX, prev.panY, zoom) }));
    };

    const handlePointerDown = (e: any) => {
        if (!imgNaturalSize) return;
        previewBoxRef.current?.setPointerCapture?.(e.pointerId);
        dragStateRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            startPanX: crop.panX,
            startPanY: crop.panY,
        };
    };

    const handlePointerMove = (e: any) => {
        if (!dragStateRef.current) return;
        const { startX, startY, startPanX, startPanY } = dragStateRef.current;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        setCrop((prev) => ({ ...prev, ...clampPan(startPanX + dx, startPanY + dy, prev.zoom) }));
    };

    const handlePointerUp = (e: any) => {
        dragStateRef.current = null;
        previewBoxRef.current?.releasePointerCapture?.(e.pointerId);
    };

    // Keyboard support (arrow keys pan, +/- zoom) so the reposition control
    // isn't mouse/touch only.
    const handlePreviewKeyDown = (e: any) => {
        if (!imgNaturalSize) return;
        const deltas = {
            ArrowLeft: [-PAN_KEY_STEP, 0],
            ArrowRight: [PAN_KEY_STEP, 0],
            ArrowUp: [0, -PAN_KEY_STEP],
            ArrowDown: [0, PAN_KEY_STEP],
        };
        if (Object.hasOwn(deltas, e.key)) {
            e.preventDefault();
            const [dx, dy] = deltas[e.key as keyof typeof deltas];
            setCrop((prev) => ({ ...prev, ...clampPan(prev.panX + dx, prev.panY + dy, prev.zoom) }));
        } else if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            setCrop((prev) => {
                const zoom = Math.min(MAX_ZOOM, prev.zoom + 0.1);
                return { zoom, ...clampPan(prev.panX, prev.panY, zoom) };
            });
        } else if (e.key === '-' || e.key === '_') {
            e.preventDefault();
            setCrop((prev) => {
                const zoom = Math.max(MIN_ZOOM, prev.zoom - 0.1);
                return { zoom, ...clampPan(prev.panX, prev.panY, zoom) };
            });
        }
    };

    const previewDisplay = (() => {
        if (!imgNaturalSize) return null;
        const baseScale = Math.max(PREVIEW_W / imgNaturalSize.w, PREVIEW_H / imgNaturalSize.h);
        const scale = baseScale * crop.zoom;
        return { w: imgNaturalSize.w * scale, h: imgNaturalSize.h * scale };
    })();

    // Draw `img` into the ellipse centered at (cx, cy) with radii (rx, ry),
    // applying the same pan/zoom the person set in the reposition preview.
    const drawImageIntoEllipse = (ctx: any, img: any, cx: any, cy: any, rx: any, ry: any, cropState: any) => {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        const frameW = rx * 2;
        const frameH = ry * 2;
        const baseScale = Math.max(frameW / img.width, frameH / img.height);
        const scale = baseScale * cropState.zoom;
        const drawW = img.width * scale;
        const drawH = img.height * scale;

        const panXFinal = cropState.panX * (frameW / PREVIEW_W);
        const panYFinal = cropState.panY * (frameH / PREVIEW_H);

        const offsetX = cx - drawW / 2 + panXFinal;
        const offsetY = cy - drawH / 2 + panYFinal;
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        ctx.restore();
    };

    const drawName = (ctx: any, canvas: any, cleanedName: any) => {
        const textX = canvas.width / 2;
        const textY = canvas.height * NAME_BOX.centerYFrac;
        const maxTextWidth = canvas.width * NAME_BOX.maxWidthFrac;

        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let fontSize = Math.round(canvas.width * 0.045);
        ctx.font = `bold ${fontSize}px sans-serif`;

        while (ctx.measureText(cleanedName).width > maxTextWidth && fontSize > 14) {
            fontSize -= 2;
            ctx.font = `bold ${fontSize}px sans-serif`;
        }

        ctx.fillText(cleanedName, textX, textY);
    };

    const generateCard = useCallback(async () => {
        if (!name.trim() || !imageSrc) {
            setStatusIsError(true);
            setStatusMessage('Please enter a name and upload a photo first.');
            return;
        }

        setIsGenerating(true);
        setStatusIsError(false);
        setStatusMessage('');

        try {
            const [templateImg, userImg] = await Promise.all([
                loadImage(templateImageFile),
                loadImage(imageSrc),
            ]);

            const canvas = canvasRef.current;
            if (canvas) {

                const ctx = canvas.getContext('2d');

                if (ctx) {

                    canvas.width = templateImg.naturalWidth || 1024;
                    canvas.height = templateImg.naturalHeight || 1536;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);

                    const cx = canvas.width * OVAL.cxFrac;
                    const cy = canvas.height * OVAL.cyFrac;
                    const rx = canvas.width * OVAL.radiusXFrac;
                    const ry = canvas.height * OVAL.radiusYFrac;

                    drawImageIntoEllipse(ctx, userImg, cx, cy, rx, ry, crop);
                    drawName(ctx, canvas, name.trim().toUpperCase());

                    setIsGenerated(true);
                    setStatusMessage('Your flyer is ready — download or share it below.');
                }
            }
        } catch (err) {
            console.error(err);
            setStatusIsError(true);
            setStatusMessage('Something went wrong generating the flyer. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    }, [name, imageSrc, crop]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const safeName = name.trim().replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'guest';
        const link = document.createElement('a');
        link.download = `${safeName}-cison-flyer.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    // Native device share sheet — the only path that can attach the actual
    // generated image file, since social web-intents (below) can only carry
    // text + a link, not a picture.
    const handleNativeShare = async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.toBlob(async (blob) => {
            if (!blob) return;
            const file = new File([blob], 'cison-attending.png', { type: 'image/png' });

            try {
                await navigator.share({
                    files: [file],
                    title: 'I Have Registered!',
                    text: shareTextWithLink,
                });
                setIsSharePanelOpen(false);
            } catch (err:any) {
                if (err?.name !== 'AbortError') console.error(err);
            }
        }, 'image/png');
    };

    const handleCopyMessage = async () => {
        try {
            await navigator.clipboard.writeText(shareTextWithLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error(err);
            setStatusIsError(true);
            setStatusMessage('Could not copy the message — please copy it manually.');
        }
    };

    const canGenerate = name.trim().length > 0 && !!imageSrc && !isGenerating;
    const shareTargets = buildShareTargets();

    return (
        <div className="min-h-screen ">
            <SEO
                title="I'm Attending"
                description="Join CISON's 3rd International Conference and 50th Anniversary celebration, 12th – 16th October 2026 at Chida International Hotel Event Center, Abuja, Nigeria. Register, then generate and share your personalized 'I Have Registered' flyer."
                canonicalUrl="/conference2026"
                ogImage={templateImageFile}
                keywords={'CISON,Chartered Institute of Statisticians of Nigeria,CISON conference 2026,CISON 50th anniversary, Nigeria statistics conference, statisticians Nigeria, Abuja conference October 2026, I am attending flyer'}
            />
            <header className="flex flex-col items-center text-center px-6 pt-10 pb-6 lg:pt-16 lg:pb-10">
                <div className="flex items-center gap-2 mb-2">
                    <ChartBarIcon className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-500" weight="fill" />
                    <span className="text-sm lg:text-base font-bold tracking-wide uppercase ">CISON</span>
                </div>
                <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight">
                    3rd International Conference<br />
                    <span className="text-emerald-500">&amp; 50th Anniversary</span>
                </h1>
                <p className=" text-xs lg:text-sm mt-2 max-w-xs lg:max-w-md">
                    Chartered Institute of Statisticians of Nigeria — Statistical Science, Knowledge and Professionalism
                </p>
            </header>

            <main className="mx-auto flex flex-col items-center gap-6 lg:gap-8 px-6 pb-6 lg:pb-16 max-w-md lg:max-w-5xl">

                {/* Conference details + About CISON sit side by side once there's room */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">

                    {/* ---------------- Conference details ---------------- */}
                    <section className={CARD} aria-labelledby="conference-heading">
                        <div className="flex items-center gap-2 mb-1">
                            <SparkleIcon className="w-5 h-5 text-emerald-500" weight="fill" />
                            <h2 id="conference-heading" className="text-lg font-bold">Conference Details</h2>
                        </div>
                        <p className=" text-sm italic mb-4 leading-relaxed">"{CONFERENCE.theme}"</p>

                        <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-3">
                                <CalendarBlankIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold  uppercase">Date</p>
                                    <p className="text-sm ">{CONFERENCE.dates}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPinIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold  uppercase">Venue</p>
                                    <p className="text-sm ">{CONFERENCE.venue}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <GlobeIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold  uppercase">Register / Learn more</p>
                                    <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                                        Here
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {CONFERENCE.highlights.map((h) => (
                                <span key={h} className="text-[11px] border border-slate-700 rounded-full px-3 py-1 ">
                                    {h}
                                </span>
                            ))}
                        </div>

                        <p className="text-[11px] ">
                            Partners/Sponsors: {CONFERENCE.partners.join(' · ')}
                        </p>
                    </section>

                    {/* ---------------- About CISON ---------------- */}
                    <section className={CARD} aria-labelledby="about-heading">
                        <h2 id="about-heading" className="text-lg font-bold mb-1 text-emerald-500">About CISON</h2>
                        <p className=" text-xs mb-4 uppercase tracking-wide">Statistical Science, Knowledge and Professionalism</p>
                        <p className="text-sm  leading-relaxed mb-3">
                            The Chartered Institute of Statisticians of Nigeria (CISON) is the country's chartered
                            professional body for statisticians, formally established in 2023 under the CISON
                            Establishment Act of 2022. It sets the standards of knowledge and skill required to
                            practice as a statistician in Nigeria, and accredits members at the Associate Statistician
                            (A.Stat.) and Chartered Statistician (C.Stat.) levels.
                        </p>
                        <p className="text-sm  leading-relaxed">
                            This year's conference marks CISON's 50th anniversary, reflecting five decades of work
                            promoting statistical development and professionalism across Nigeria.
                        </p>
                    </section>

                </div>{/* end Conference/About grid */}

                {/* ---------------- Generator card ---------------- */}
                <section className={`${CARD} lg:max-w-3xl lg:mx-auto`} aria-labelledby="generator-heading">
                    <h2 id="generator-heading" className="text-xl lg:text-2xl font-bold text-center mb-1">Generate Your 2026 Flyer</h2>
                    <p className=" text-xs text-center mb-6"></p>

                    <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 lg:items-start">
                        <div>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <label htmlFor="attendee-name" className="block text-xs font-semibold  uppercase">Full Name</label>
                                        <span className="text-[10px] ">{name.length}/{NAME_MAX_LENGTH}</span>
                                    </div>
                                    <input
                                        id="attendee-name"
                                        type="text"
                                        maxLength={NAME_MAX_LENGTH}
                                        value={name}
                                        onChange={(e) => { setName(e.target.value); setIsGenerated(false); }}
                                        placeholder="Type your name here"
                                        className="w-full border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold  mb-1 uppercase">Profile Photo</label>

                                    {!imageSrc ? (
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            aria-label="Upload your photo"
                                            className="w-full border border-dashed border-slate-700 rounded-xl py-4  text-sm font-medium hover:border-emerald-500 transition"
                                        >
                                            Upload Your Picture
                                        </button>
                                    ) : (
                                        <div className=" border border-slate-700 rounded-xl p-3">
                                            <div className="flex items-center  justify-center mb-3">
                                                <div
                                                    ref={previewBoxRef}
                                                    onPointerDown={handlePointerDown}
                                                    onPointerMove={handlePointerMove}
                                                    onPointerUp={handlePointerUp}
                                                    onPointerCancel={handlePointerUp}
                                                    onKeyDown={handlePreviewKeyDown}
                                                    tabIndex={0}
                                                    aria-label="Reposition your photo. Drag, or use arrow keys to pan and +/- to zoom."
                                                    style={{ width: PREVIEW_W, height: PREVIEW_H, touchAction: 'none' }}
                                                    className="relative mx-auto overflow-hidden rounded-[50%] border-2 border-emerald-600 cursor-grab active:cursor-grabbing shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                                >
                                                    {imgNaturalSize && previewDisplay && (
                                                        <img
                                                            src={imageSrc}
                                                            alt=""
                                                            draggable={false}
                                                            style={{
                                                                position: 'absolute',
                                                                left: '50%',
                                                                top: '50%',
                                                                width: previewDisplay.w,
                                                                height: previewDisplay.h,
                                                                transform: `translate(calc(-50% + ${crop.panX}px), calc(-50% + ${crop.panY}px))`,
                                                                maxWidth: 'none',
                                                                pointerEvents: 'none',
                                                                userSelect: 'none',
                                                            }}
                                                        />
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={() => fileInputRef.current?.click()}
                                                        aria-label="Change photo"
                                                        className="p-2 rounded-lg  transition"
                                                        title="Change photo"
                                                    >
                                                        <ArrowClockwiseIcon className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={handleRemovePhoto}
                                                        aria-label="Remove photo"
                                                        className="p-2 rounded-lg hover:bg-red-900/60  transition"
                                                        title="Remove photo"
                                                    >
                                                        <TrashIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 px-1">
                                                <MagnifyingGlassPlusIcon className="w-4 h-4  shrink-0" />
                                                <input
                                                    type="range"
                                                    min={MIN_ZOOM}
                                                    max={MAX_ZOOM}
                                                    step={0.01}
                                                    value={crop.zoom}
                                                    onChange={handleZoomChange}
                                                    aria-label="Zoom photo"
                                                    className="w-full accent-emerald-500"
                                                />
                                            </div>
                                            <p className="text-[10px]  text-center mt-1">Drag the photo to reposition, use the slider to zoom</p>
                                        </div>
                                    )}

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        aria-hidden="true"
                                    />

                                    <p className="text-[11px]  mt-2 px-1 leading-relaxed">
                                        Your name and photo stay on your device — this tool draws the flyer locally in your browser and doesn't upload anything anywhere.
                                    </p>
                                </div>
                            </div>

                            {!isGenerated ? (
                                <button
                                    onClick={generateCard}
                                    disabled={!canGenerate}
                                    className="w-full bg-emerald-600 disabled:opacity-40 font-semibold py-3 rounded-xl hover:bg-emerald-500 transition text-sm flex items-center justify-center gap-2"
                                >
                                    <ArrowClockwiseIcon className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                                    {isGenerating ? 'Generating…' : 'Compile Flyer'}
                                </button>
                            ) : (
                                <div className="relative">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setIsSharePanelOpen((v) => !v)}
                                            className="bg-emerald-600 font-semibold p-3 rounded-xl flex justify-center items-center gap-2 hover:bg-emerald-500 transition text-sm"
                                        >
                                            <ShareIcon className="w-4 h-4" /> Share Flyer
                                        </button>
                                        <button onClick={handleDownload} aria-label="Download flyer" className="p-3 rounded-xl transition" title="Download">
                                            <DownloadIcon className="w-5 h-5" />
                                        </button>
                                        <button onClick={generateCard} aria-label="Regenerate flyer" className="p-3 rounded-xl transition" title="Regenerate">
                                            <ArrowClockwiseIcon className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {isSharePanelOpen && (
                                        <div
                                            ref={sharePanelRef}
                                            className="absolute z-10 left-0 right-0 mt-3 border border-slate-700 rounded-2xl shadow-2xl p-1 dark:bg-black bg-white"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <p className="text-xs font-semibold  uppercase">Share to</p>
                                                <button onClick={() => setIsSharePanelOpen(false)} aria-label="Close share panel" className="  transition">
                                                    <CloseIcon className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {canShareFiles ? (
                                                <>
                                                    <button
                                                        onClick={handleNativeShare}
                                                        className="w-full mb-1.5 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 transition rounded-xl px-3 py-3 text-sm font-semibold"
                                                    >
                                                        <DeviceMobileIcon className="w-5 h-5" />
                                                        Share flyer image…
                                                    </button>
                                                    <p className="text-[11px]  mb-4 px-1">
                                                        Opens your device's share sheet with the picture attached — pick WhatsApp, Messages, Mail, or any app you have installed.
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-[11px]  mb-3 px-1 leading-relaxed">
                                                    This browser can't attach the image directly to a share. Download the flyer below, then attach it manually in whichever app you use.
                                                </p>
                                            )}

                                            <p className="text-[11px] font-semibold  uppercase mb-2 px-1">
                                                Or share the announcement (text + link only)
                                            </p>
                                            <div className="grid grid-cols-3 gap-2 mb-3">
                                                {shareTargets.map(({ id, label, icon: Icon, color, href }) => (
                                                    <a
                                                        key={id}
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => setIsSharePanelOpen(false)}
                                                        className="flex flex-col items-center gap-1.5 border border-slate-800 rounded-xl py-3 transition"
                                                    >
                                                        <Icon className="w-6 h-6" style={{ color }} weight="fill" />
                                                        <span className="text-[11px] ">{label}</span>
                                                    </a>
                                                ))}
                                            </div>

                                            <button
                                                onClick={handleCopyMessage}
                                                className="w-full flex items-center justify-center gap-2 border border-slate-800 rounded-xl py-2.5 text-xs font-medium  transition"
                                            >
                                                {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                                                {copied ? 'Copied!' : 'Copy message + link'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>{/* end left column: form + actions */}

                        <div className="lg:sticky lg:top-6">
                            <div className="mt-6 lg:mt-0 border-t lg:border-t-0 border-slate-800 pt-6 lg:pt-0 flex flex-col items-center">
                                <div className="w-full max-w-65 rounded-xl flex items-center justify-center overflow-hidden border border-slate-700 aspect-1024/1536">
                                    <canvas ref={canvasRef} className={`w-full h-full object-contain ${!isGenerated && 'hidden'}`} />
                                    {!isGenerated && <span className="text-xs  p-4 text-center">Live preview appears here</span>}
                                </div>
                                {statusMessage && (
                                    <p className={`mt-4 text-xs font-medium flex items-center gap-1 text-center ${statusIsError ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {statusIsError ? <WarningCircleIcon className="w-4 h-4 shrink-0" /> : <CheckCircleIcon className="w-4 h-4 shrink-0" />}
                                        {statusMessage}
                                    </p>
                                )}
                                {(name || imageSrc) && (
                                    <button
                                        onClick={handleStartOver}
                                        className="mt-3 text-[11px]   underline underline-offset-2"
                                    >
                                        Start over
                                    </button>
                                )}
                            </div>
                        </div>{/* end right column: live preview */}
                    </div>{/* end lg:grid form/preview split */}
                </section>
            </main>


        </div>
    );
}