import { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import RoutePath from '@/routes';
import LandingMeeting from "@/assets/landing/meeting-e1724103063780.webp";
import LandingLegal from "@/assets/landing/legal-approval.webp";
import LandingBlackMan from "@/assets/landing/black-man-using-a-desktop-e1724105770552.webp";
import LandingProExams from "@/assets/landing/pro-exams.webp";

const slides = [
    {
        id: 1,
        heading: 'Welcome to CISON',
        description: 'Chartered Institute of Statisticians of Nigeria',
        motto: 'Statistical Science, Knowledge and Professionalism',
        cta: 'Become a Registered Statistician',
        href: RoutePath.Membership,
        bg: 'from-emerald-950 via-slate-900 to-slate-950',
    },
    {
        id: 2,
        heading: '3rd International Conference & Pre-Conference Workshop',
        description: 'Intensive technical sessions, member induction and certification.',
        cta: 'Register Here',
        href: RoutePath.Conference2026,
        bg: 'from-slate-900 via-emerald-950 to-slate-950',
    },
    {
        id: 3,
        heading: 'JCISON Call for Papers',
        description:
            'The Journal of CISON invites researchers, academicians, and practitioners to submit original research papers, review articles, and case studies for our upcoming edition.',
        cta: 'Submit Your Paper',
        href: RoutePath.JCISONCallForPapers,
        bg: 'from-slate-950 via-slate-900 to-emerald-950',
    },
    {
        id: 4,
        heading: 'Q3 and Q4 PRS Registration',
        description:
            'Empowering Institutional Leaders and Technical professionals with data-driven methodologies and executive tools to shape the future of governance.',
        cta: 'Register for PRS',
        href: RoutePath.ThirdFourthQuarterPRS2026, 
        bg: 'from-blue-950 via-slate-900 to-slate-950',
    },
];


const servicesTabs = [
    {
        id: 'membership',
        number: '01',
        label: 'Membership Programme',
        heading: 'Membership Programme',
        image: LandingMeeting,
        items: [
            {
                title: 'Registered Statisticians',
                href: RoutePath.RegisteredStatistician,
                desc: 'Open to all with interest in statistics and the Institute.',
            },
            {
                title: 'Associate Statistician',
                href: RoutePath.AssociateStatistician,
                desc: 'An entry level of accreditation, preparatory for full C.Stat. accreditation.',
            },
            {
                title: 'Chartered Statistician',
                href: RoutePath.CharacterdStatistician,
                desc: 'The highest level of professional recognition awarded by CISON.',
            },
        ],
        cta: { label: 'All Membership Types', href: RoutePath.Membership },
    },
    {
        id: 'accreditation',
        number: '02',
        label: 'Accreditation Programmes',
        heading: 'Accreditation Programmes',
        image: LandingLegal,
        items: [
            {
                title: 'Professional Accreditation',
                href: RoutePath.ProfessionalAccreditation,
                desc: 'Two levels: Associate Statistician (A.Stat.) and Chartered Statistician (C.Stat.).',
            },
            {
                title: 'Professional Examination',
                href: RoutePath.ProfessionalExamination,
                desc: 'Ordinary Certificate, Higher Certificate and Graduate Certificate in Statistics.',
            },
            {
                title: 'Accreditation of Institutions',
                href: RoutePath.InstitutionalAccreditation,
                desc: 'CISON works with NBTE and NUC for tertiary institution course accreditation.',
            },
        ],
        cta: { label: 'Accreditation Overview', href: RoutePath.Accreditation },
    },
    {
        id: 'exams',
        number: '03',
        label: 'Professional Examinations',
        heading: 'Professional Examinations',
        image: LandingProExams,
        items: [
            {
                title: 'Foundation Level',
                href: '#',
                desc: 'Ordinary Certificate in Statistics — modular form with two modules.',
            },
            {
                title: 'Intermediate Level',
                href: "#",
                desc: 'Higher Certificate equivalent to first-year university course in statistics.',
            },
            {
                title: 'Graduate Level',
                href: "#",
                desc: 'Graduate Certificate equivalent to a good university degree in statistics.',
            },
        ],
        cta: { label: 'View Exam Details', href: RoutePath.ProfessionalExamination },
    },
    {
        id: 'cpd',
        number: '04',
        label: 'Professional Development (CPD)',
        heading: 'Professional Development',
        image: LandingBlackMan,
        items: [
            {
                title: 'Revalidation',
                href: RoutePath.ProfessionalExamination,
                desc: 'CISON conducts revalidation of the Chartered Statistician award every five years.',
            },
            {
                title: 'Mentoring Associates',
                href: RoutePath.MentoringScheme,
                desc: 'A structured mentoring scheme in service of Associate Statisticians.',
            },
            {
                title: 'CPD Policy',
                href: RoutePath.CPDPolicy,
                desc: 'Continuous professional review process required of all CISON members.',
            },
        ],
        cta: { label: 'CPD Policy', href: RoutePath.CPDPolicy },
    },
];

const whatElseLinks = [
    { name: 'Membership', href: RoutePath.Membership },
    { name: 'Registered Statistician', href: RoutePath.RegisteredStatistician },
    { name: 'Accreditation & Examinations', href: RoutePath.Accreditation },
    { name: 'Corporate Member', href: RoutePath.Corporate },
    { name: 'Examination Associate', href: RoutePath.ExaminationAssociate },
    { name: 'Student Member', href: RoutePath.Student },
    { name: 'How to Pay', href: RoutePath.HowToPay },
];

const accreditationLinks = [
    { name: 'Professional Accreditation', href: RoutePath.ProfessionalAccreditation },
    { name: 'Accreditation of Institutions', href: RoutePath.InstitutionalAccreditation },
    { name: 'Courses Accreditation', href: RoutePath.CourseAccreditation },
    { name: 'Professional Examination', href: RoutePath.ProfessionalExamination },
    { name: 'Consultancy Services', href: RoutePath.ConsultancyService },
    { name: 'Capacity Building', href: RoutePath.CPDPolicy },
    { name: 'Mentoring Scheme', href: RoutePath.MentoringScheme },
    { name: 'Curriculum Development', href: RoutePath.CurriculumDevelopment },
    { name: 'Conferences', href: RoutePath.Conference2026 },
];

// const _articles = [
//     {
//         category: 'Events · Latest',
//         title: 'List of Hotels for the 2nd CISON International Conference 2025, Asaba, Delta State.',
//         href: 'https://cison.org.ng/list-of-hotels-for-the-2nd-cison-international-conference-2025/',
//     },
//     {
//         category: 'Announcement · Jobs',
//         title: 'Vacancy Announcement',
//         href: 'https://cison.org.ng/vacancy-announcement/',
//     },
//     {
//         category: 'Latest · Membership',
//         title: '2026 Conference Programme',
//         href: 'https://cison.org.ng/2026-international-annual-conference/',
//     },
// ];


// ─── Hero Slider ──────────────────────────────────────────────────────────────

function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(2);

    const go = (idx: number) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent((idx + slides.length) % slides.length);
            setAnimating(false);
        }, 400);
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => go(current + 1), 5000);
        return () => clearTimeout(timerRef.current);
    }, [current]);

    const slide = slides[current];

    return (
        <section className="relative h-[92vh] min-h-140 flex items-center overflow-hidden">
            {/* Background */}
            <div className={`absolute inset-0 bg-linear-to-br ${slide.bg} transition-all duration-700`} />

            {/* Decorative grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Accent orb */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-400/5 rounded-full blur-2xl" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
                <div
                    className={`transition-all duration-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                >
                    <p className="text-emerald-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                        Chartered Institute of Statisticians of Nigeria
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
                        {slide.heading}
                    </h1>
                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-3">
                        {slide.description}
                    </p>
                    {slide.motto && (
                        <p className="text-emerald-400/80 text-sm italic mb-10">{slide.motto}</p>
                    )}
                    {!slide.motto && <div className="mb-10" />}
                    <a
                        href={slide.href}
                        className="inline-flex items-center gap-3 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                    >
                        {slide.cta}
                        <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 left-6 sm:left-10 flex items-center gap-4 z-10">
                <button
                    onClick={() => go(current - 1)}
                    className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                >
                    <CaretLeftIcon className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>
                <button
                    onClick={() => go(current + 1)}
                    className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                >
                    <CaretRightIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-10 right-6 sm:right-10 text-white/30 text-sm font-mono z-10">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </section>
    );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
    return (
        <p className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {label}
        </p>
    );
}

// ─── What We Do / Services ────────────────────────────────────────────────────

function ServicesSection() {
    const [active, setActive] = useState(0);
    const tab = servicesTabs[active];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                {/* Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
                    <div>
                        <SectionLabel label="What We Do" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">To meet your needs</h2>
                        <p className="text-muted-foreground mt-2 text-sm">
                            Accreditation, Membership, Examination, Awards, Events, Training, etc.
                        </p>
                    </div>
                </div>

                {/* Tab buttons */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {servicesTabs.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => setActive(i)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${active === i
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                                }`}
                        >
                            <span className="text-[10px] font-mono mr-1.5 opacity-60">{t.number}</span>
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-8">{tab.heading}</h3>
                        <div className="space-y-6">
                            {tab.items.map(item => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="group flex gap-4 p-4 rounded-xl border border-border hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all duration-200"
                                >
                                    <div className="w-1.5 h-full min-h-10 bg-emerald-500 rounded-full shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                            {item.title}
                                            <ArrowRightIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <a
                            href={tab.cta.href}
                            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all"
                        >
                            {tab.cta.label} <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right — image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl shadow-black/10 dark:shadow-black/30">
                        <img
                            src={tab.image}
                            alt={tab.heading}
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── What Else We Provide ─────────────────────────────────────────────────────

function WhatElseSection() {
    return (
        <section className="py-20 bg-muted/40 border-y border-border">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <SectionLabel label="What Else We Provide" />
                        <h3 className="text-xl font-bold text-foreground">More from CISON</h3>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            {whatElseLinks.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            {accreditationLinks.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Event Banner ─────────────────────────────────────────────────────────────

function EventBanner() {
    return (
        <section className="py-16 bg-background border-b border-border">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <SectionLabel label="Events" />
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground max-w-2xl leading-snug">
                            <a
                                href={RoutePath.Conference2026}
                                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                The 3rd Annual Conference and 3rd Pre-Conference Workshop of The Chartered Institute of Statisticians of Nigeria (CISON)
                            </a>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:items-end gap-3 shrink-0">
                        <a
                            href={RoutePath.Conference2026}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-500 transition-colors"
                        >
                            Register to Participate <ArrowRightIcon className="w-4 h-4" />
                        </a>
                        <a
                            href={RoutePath.JCISONCallForPapers}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                        >
                            Final Call for Papers
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Team CTA ─────────────────────────────────────────────────────────────────

function TeamSection() {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* Dark background with texture */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-emerald-950 to-slate-950" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
                <div className="max-w-2xl">
                    <SectionLabel label="Team" />
                    <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
                        Get to know the incredible individuals behind CISON
                    </h2>
                    <a
                        href={RoutePath.OurPeople}
                        className="inline-flex items-center gap-3 px-7 py-3.5 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 font-semibold rounded-xl text-sm transition-all duration-200"
                    >
                        Our People <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}


function ArticlesSection() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <div>
                        <SectionLabel label="Articles" />
                        <h2 className="text-3xl font-bold text-foreground">
                            Valuable insights that
                            <br /> empower your decision-making
                        </h2>
                    </div>
                    <a
                        href={RoutePath.ContactUs}
                        className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 flex items-center gap-2"
                    >
                        Subscribe to our Newsletter <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>

                {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <a
                            key={i}
                            href={article.href}
                            className="group block p-6 rounded-2xl border border-border hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/50 transition-all duration-200 bg-card"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                </div>
                                <span className="text-[11px] text-muted-foreground font-medium">{article.category}</span>
                            </div>
                            <h3 className="font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                                {article.title}
                            </h3>
                            <div className="flex items-center gap-1 mt-4 text-xs text-emerald-600 dark:text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Read more <ArrowRightIcon className="w-3 h-3" />
                            </div>
                        </a>
                    ))}
                </div> */}
            </div>
        </section>
    );
}


export {
    HeroSlider,
    ServicesSection,
    WhatElseSection,
    EventBanner,
    TeamSection,
    ArticlesSection,
}