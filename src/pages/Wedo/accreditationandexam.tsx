import { motion } from "framer-motion";
import { useState } from "react";
import {
    GraduationCapIcon,
    UsersIcon,
    CreditCardIcon,
    BookOpenIcon,
    ArrowUpRightIcon,
    TrophyIcon,
    ArrowRightIcon,
} from "@phosphor-icons/react";
import AnnouncementModal from "@/components/Announcements";
import SEO from "@/components/SEO";
import RoutePath from "@/routes";
import { fadeUp, Reveal } from "@/animate";
import { HeroBadge } from "@/components/Hero";


const ACCENT = "#10b981"; // emerald-500
const ACCENT_DARK = "#059669"; // emerald-600


const quickLinks = [
    {
        icon: TrophyIcon,
        title: "Professional Accreditation",
        href: RoutePath.ProfessionalAccreditation,
        desc: "Recognition for practicing statisticians",
    },
    {
        icon: GraduationCapIcon,
        title: "Professional Examinations",
        href: RoutePath.ProfessionalExamination,
        desc: "Three-level sequential examination suite",
    },
    {
        icon: UsersIcon,
        title: "Membership Types",
        href: RoutePath.Membership,
        desc: "A.Stat., C.Stat. and more pathways",
    },
    {
        icon: CreditCardIcon,
        title: "Annual Fees & Dues",
        href: RoutePath.AnnualFees,
        desc: "Schedule of professional membership fees",
    },
    {
        icon: BookOpenIcon,
        title: "Members Directory",
        href: "https://my.cison.org.ng/members/cison-members",
        external: true,
        desc: "Browse verified CISON members",
    },
];

const peers = [
    { abbr: "ASA", full: "American Statistical Association" },
    { abbr: "HKSS", full: "Hong Kong Statistical Society" },
    { abbr: "RSS", full: "Royal Statistical Society, London" },
    { abbr: "SSAI", full: "Statistical Society of Australia Inc." },
    { abbr: "SSC", full: "Statistical Society of Canada" },
];


const stagger = {
    animate: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};


function Hero() {
    return (
        <section
            className="relative overflow-hidden pt-20 pb-16"
            style={{
                background:
                    "linear-gradient(135deg, #0a0f0d 0%, #0d1a14 50%, #0a1410 100%)",
            }}
        >
            {/* Decorative grid */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Glowing orb */}
            <div
                className="pointer-events-none absolute -top-32 -right-32 w-150 h-150 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
                <HeroBadge title="Accreditation & Examinations" />

                <motion.h1
                    variants={fadeUp}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Accreditation Programmes
                    <br />
                    <span style={{ color: ACCENT }}>& Professional Examinations</span>
                </motion.h1>

                <motion.div
                    variants={fadeUp}
                    className="h-px w-24 mb-8"
                    style={{ background: ACCENT }}
                />

                <motion.p
                    variants={fadeUp}
                    className="max-w-2xl text-base sm:text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                >
                    CISON's accreditation and examination programmes are fashioned in the
                    best traditions of leading statistical bodies worldwide — offering a
                    suite of three sequential professional examination levels, alongside a
                    rigorous peer-reviewed accreditation pathway.
                </motion.p>
            </div>
        </section>
    );
}

function PeerBodiesStrip() {
    return (
        <Reveal>
            <div
                className="border-y"
                style={{
                    borderColor: "rgba(16,185,129,0.15)",
                    background: "rgba(16,185,129,0.03)",
                }}
            >
                <div className="max-w-5xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
                    <span
                        className="text-xs font-semibold tracking-widest uppercase shrink-0"
                    >
                        Modelled after
                    </span>
                    {peers.map((p, i) => (
                        <motion.span
                            key={p.abbr}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 * i, duration: 0.4 }}
                            title={p.full}
                            className="text-sm font-semibold"
                        >
                            {p.abbr}
                        </motion.span>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}

function AboutSection() {

    return (
        <Reveal>
            <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
                    {/* Left label */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p
                            className="text-xs font-bold tracking-widest uppercase mb-3"
                            style={{ color: ACCENT, letterSpacing: "0.15em" }}
                        >
                            Overview
                        </p>
                        <div
                            className="w-8 h-px mb-4"
                            style={{ background: ACCENT }}
                        />
                        <p
                            className="text-sm leading-relaxed"
                        >
                            Designations awarded:
                            <br />
                            <strong className="text-white/70">A.Stat.</strong> — Associate Statistician
                            <br />
                            <strong className="text-white/70">C.Stat.</strong> — Chartered Statistician
                        </p>
                        <p
                            className="text-xs mt-3 italic"
                        >
                            Note: A.Stat. and C.Stat. may not be held simultaneously.
                        </p>
                    </motion.div>

                    {/* Right body */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p
                            className="text-base sm:text-lg leading-relaxed mb-6"
                        >
                            The accreditation programmes and professional examinations of the
                            CISON are fashioned in the best traditions of the{" "}
                            <em>American Statistical Association (ASA)</em>, the{" "}
                            <em>Hong Kong Statistical Society (HKSS)</em>, the{" "}
                            <em>Royal Statistical Society (RSS)</em> of London, the{" "}
                            <em>Statistical Society of Australia Incorporated (SSAI)</em>, and
                            the <em>Statistical Society of Canada (SSC)</em>.
                        </p>
                        <p
                            className="text-base sm:text-lg leading-relaxed mb-6"
                        >
                            To that effect, CISON offers a suite of professional examinations
                            in statistics, involving three sequential levels of examinations as
                            practised by the RSS and HKSS. Those seeking professional
                            accreditation submit materials reviewed by members of the
                            Accreditation Committee — peers who evaluate submissions based on
                            CISON's published Guidelines for Accreditation.
                        </p>

                        <div
                            className="rounded-xl p-5 flex items-start gap-4"
                            style={{
                                background: "rgba(16,185,129,0.06)",
                                border: "1px solid rgba(16,185,129,0.18)",
                            }}
                        >
                            <ArrowRightIcon
                                className="shrink-0 mt-0.5"
                                size={16}
                                style={{ color: ACCENT }}
                            />
                            <p
                                className="text-sm leading-relaxed"
                            >
                                Successful candidates are awarded the designation of{" "}
                                <strong className="text-gray-400/80">
                                    "accredited professional statistician"
                                </strong>{" "}
                                — in two categories:{" "}
                                <strong style={{ color: ACCENT }}>Associate Statistician (A.Stat.)</strong>{" "}
                                and{" "}
                                <strong style={{ color: ACCENT }}>Chartered Statistician (C.Stat.)</strong>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Reveal>
    );
}

function QuickLinkCard({ item, index }: { item: any, index: any }) {
    const Icon = item.icon;
    return (
        <motion.a
            //@ts-ignore
            variants={cardVariant}
            key={index}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
            }}
            whileHover={{
                y: -4,
                borderColor: "rgba(16,185,129,0.4)",
                background: "rgba(16,185,129,0.06)",
                transition: { duration: 0.2 },
            }}
        >
            {/* Icon */}
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-500/20"
                style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                }}
            >
                <Icon size={20} style={{ color: ACCENT }} />
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3
                    className="font-semibold text-sm mb-1 group-hover:text-emerald-400 transition-colors duration-200"
                >
                    {item.title}
                </h3>
                <p className="text-xs leading-relaxed">
                    {item.desc}
                </p>
            </div>

            {/* Arrow */}
            <ArrowUpRightIcon
                size={14}
                className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: ACCENT }}
            />

            {/* Bottom accent line */}
            <motion.div
                className="absolute bottom-0 left-6 right-6 h-px rounded-full"
                style={{ background: ACCENT, scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
            />
        </motion.a>
    );
}

function QuickLinksSection() {

    return (
        <section
            className="py-16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-10"
                >
                    <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: ACCENT, letterSpacing: "0.15em" }}
                    >
                        Quick Access
                    </p>
                    <h2
                        className="text-2xl font-bold dark:text-white"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Key Services & Resources
                    </h2>
                </motion.div>
                <Reveal>
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate={"animate"}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {quickLinks.map((item, i) => (
                            <QuickLinkCard key={item.title} item={item} index={i} />
                        ))}
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}

function ExamLevelsSection() {

    const levels = [
        {
            num: "01",
            title: "Foundation",
            desc: "Core statistical theory and methods. Entry point to professional examinations.",
        },
        {
            num: "02",
            title: "Intermediate",
            desc: "Applied statistics, data analysis, and specialist modules.",
        },
        {
            num: "03",
            title: "Advanced",
            desc: "Professional practice, research methods, and leadership in statistical science.",
        },
    ];
    return (
        <section
            className="py-16"
            style={{
                background: "rgba(16,185,129,0.03)",
                borderTop: "1px solid rgba(16,185,129,0.1)",
                borderBottom: "1px solid rgba(16,185,129,0.1)",
            }}
        >
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-10"
                >
                    <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ letterSpacing: "0.15em" }}
                    >
                        Examination Structure
                    </p>
                    <h2
                        className="text-2xl font-bold dark:text-white"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Three Sequential Levels
                    </h2>
                </motion.div>
                <Reveal>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {levels.map((l, i) => (
                            <motion.div
                                key={l.num}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1 * i,
                                    duration: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative rounded-2xl p-6 overflow-hidden"
                                style={{
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                {/* Large number watermark */}
                                <span
                                    className="absolute -top-3 -right-1 text-8xl font-black leading-none select-none pointer-events-none"
                                    style={{ color: "rgba(16,185,129,0.06)" }}
                                >
                                    {l.num}
                                </span>
                                <p
                                    className="text-xs font-bold tracking-widest uppercase mb-3"
                                    style={{ color: ACCENT, letterSpacing: "0.14em" }}
                                >
                                    Level {l.num}
                                </p>
                                <h3 className="text-lg font-bold dark:text-white mb-2">{l.title}</h3>
                                <p
                                    className="text-sm leading-relaxed"
                                >
                                    {l.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function CtaSection() {

    const [info, changeInfo] = useState(false);
    function handleClose() {
        changeInfo(false);
    }

    const [title, setTitle] = useState("");
    const [details, setdetails] = useState("");

    function NotAvailable() {
        return (info && <AnnouncementModal title={title} onClose={handleClose}>
            <div> {details} </div>
        </AnnouncementModal>
        )
    }

    function displayExamination() {
        setTitle("Examination")
        setdetails("Examination is not avaiable right now")
        changeInfo(true)
    }

    function displayAccreditation() {
        setTitle("Accreditation")
        setdetails("Accreditation is not available right now")
        changeInfo(true)
    }
    return (
        <Reveal>
            <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
                <NotAvailable />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-10 sm:p-14 overflow-hidden text-center"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.04) 100%)",
                        border: "1px solid rgba(16,185,129,0.2)",
                    }}
                >
                    {/* Background orb */}
                    <div
                        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
                        }}
                    />

                    <p
                        className="text-xs font-bold tracking-widest uppercase mb-4"
                        style={{ color: ACCENT, letterSpacing: "0.15em" }}
                    >
                        Ready to begin?
                    </p>
                    <h2
                        className="text-3xl font-bold dark:text-white mb-4"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Begin Your Professional Journey
                    </h2>
                    <p
                        className="max-w-lg mx-auto text-base mb-8"

                    >
                        Join Nigeria's premier body of professional statisticians. Pursue your
                        A.Stat. or C.Stat. designation and gain international recognition.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm dark:text-white transition-all duration-200"
                            style={{ background: ACCENT_DARK }}
                            whileHover={{ scale: 1.03, background: "#10b981" }}
                            whileTap={{ scale: 0.97 }}
                            onClick={displayAccreditation}
                        >
                            Apply for Accreditation
                            <ArrowUpRightIcon size={15} />
                        </motion.a>
                        <motion.a
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                            style={{
                                color: ACCENT,
                                border: "1px solid rgba(16,185,129,0.35)",
                                background: "rgba(16,185,129,0.06)",
                            }}
                            whileHover={{
                                background: "rgba(16,185,129,0.12)",
                                borderColor: "rgba(16,185,129,0.6)",
                                scale: 1.02,
                            }}
                            whileTap={{ scale: 0.97 }}
                            onClick={displayExamination}
                        >
                            View Examinations
                            <ArrowRightIcon size={15} />
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </Reveal>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AccreditationPage() {
    return (
        <div>
            <SEO title="Accreditation and Examinations | Chartered Institute of Statisticians of Nigeria (CISON)" canonicalUrl={RoutePath.Accreditation} description="Accreditation Programmes and Professional Examinations" />
            <Hero />
            <PeerBodiesStrip />
            <AboutSection />
            <ExamLevelsSection />
            <QuickLinksSection />
            <CtaSection />
        </div>
    );
}