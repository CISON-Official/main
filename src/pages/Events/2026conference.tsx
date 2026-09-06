import { useState, type ReactNode } from "react";
import {
    ArrowRightIcon,
    CalendarBlankIcon,
    CheckCircleIcon,
    ClockIcon,
    GraduationCapIcon,
    HandshakeIcon,
    LaptopIcon,
    MapPinIcon,
    MicrophoneIcon,
    PhoneIcon,
    TrophyIcon,
    WalletIcon,
} from "@phosphor-icons/react";


const T = {
    green: "#0B3D1E",
    greenMid: "#1A6635",
    gold: "#E8A020",
};

// ─── Data ──────────────────────────────────────────────────────────────────
const STATS = [
    { num: "1,200+", label: "2025 Attendees" },
    { num: "8+", label: "Expert Speakers" },
    { num: "10+", label: "Sessions & Workshops" },
    { num: "50", label: "Years of CISON" },
    { num: "3rd", label: "Edition — Bigger & Bolder" },
];

const FEATURES = [
    {
        icon: MicrophoneIcon,
        title: "World-Class Keynote Speakers",
        text: "Nigeria's foremost statisticians and global data leaders share insights on the national statistical vision.",
    },
    {
        icon: LaptopIcon,
        title: "Hands-On Technical Workshops",
        text: "Deep-dives on AI, statistical modelling, big data tools, and official statistics methodology.",
    },
    {
        icon: HandshakeIcon,
        title: "High-Impact Networking",
        text: "Meet peers, government officials, and multinational partners in a curated environment.",
    },
    {
        icon: TrophyIcon,
        title: "Awards & Recognition",
        text: "Excellence awards celebrating 50 years of outstanding contributions to statistical development.",
    },
];

const THEMES = [
    {
        num: "01",
        title: "Historical Retrospective",
        text: "50 years of Nigeria's statistical systems — evolution, milestones, and turning points.",
    },
    {
        num: "02",
        title: "Democratic Integrity & Data Science",
        text: "Big Data and analytics for credible elections and political accountability.",
    },
    {
        num: "03",
        title: "Smart Governance & AI",
        text: "Real-time indicators, artificial intelligence, and data-driven public administration.",
    },
    {
        num: "04",
        title: "The Human Element of Data",
        text: "Citizens' engagement, statistical literacy, and building a data-informed society.",
    },
    {
        num: "05",
        title: "Future Frontiers & Strategic Vision",
        text: "The next 50 years — a strategic vision for Nigeria's National Statistical System.",
    },
];

const REG_CARDS = [
    {
        tier: "Full Delegate",
        type: "CISON Member",
        price: "₦150,000",
        period: "per delegate",
        features: [
            "All plenary & panel sessions",
            "2 pre-conference workshops",
            "Conference materials",
            "Gala dinner access",
        ],
        href: "https://my.cison.org.ng/2026-conference-and-preconference-registration/",
        cta: "Register — Member",
        featured: false,
    },
    {
        tier: "Most Popular",
        type: "Non-Member",
        price: "₦195,000",
        period: "per delegate",
        features: [
            "All plenary & panel sessions",
            "3 pre-conference workshops",
            "Conference materials & bag",
            "Gala dinner access",
        ],
        href: "https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/",
        cta: "Register — Non-Member",
        featured: true,
    },
    {
        tier: "Corporate / Group",
        type: "Group Rate",
        price: "₦150,000",
        period: "10+ delegates",
        features: [
            "Dedicated group coordinator",
            "Custom workshop allocation",
            "Branded delegate packs",
            "Priority reserved seating",
        ],
        href: "https://my.cison.org.ng/group-conference-registration/",
        cta: "Corporate Registration",
        featured: false,
    },
];

const PRECONFERENCE_META = [
    { icon: CalendarBlankIcon, label: "Dates", value: "12 – 13 October 2026" },
    { icon: ClockIcon, label: "Daily Schedule", value: "9:00 AM – 5:00 PM" },
    { icon: MapPinIcon, label: "Venue", value: "3J's Hotels & Apartments, Utako, Abuja" },
];

const PRECONFERENCE_CONTACTS = [
    { role: "Editor-in-Chief", phone: "0803 393 0082" },
    { role: "Managing Editor", phone: "0806 157 2108" },
    { role: "Associate Editor", phone: "0814 458 5757" },
];


// ─── Shared building blocks ────────────────────────────────────────────────
function Eyebrow({ children, light = false, className = "" }: { children: ReactNode, light?: boolean, className?: string }) {
    return (
        <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
                light ? "text-white/80" : "text-emerald-600 dark:text-emerald-400"
            } ${className}`}
        >
            <span className={`w-6 h-px shrink-0 ${light ? "bg-[#E8A020]" : "bg-emerald-500 dark:bg-emerald-400"}`} />
            {children}
        </div>
    );
}

function SectionHeading({ children, className = "" }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={`font-serif text-3xl sm:text-4xl font-bold ${className}`}>
            {children}
        </h2>
    );
}

function CopyField({ label, value }: { label: string, value: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            /* clipboard unavailable */
        }
    };

    return (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/60">
            <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</div>
                <div className="truncate font-mono text-sm font-semibold text-gray-900 dark:text-white">{value}</div>
            </div>
            <button
                type="button"
                onClick={copy}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    copied
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}


// ─── Sections ──────────────────────────────────────────────────────────────
function Hero() {
    return (
        <section
            className="relative flex min-h-[88vh] items-center overflow-hidden"
            style={{ background: T.green }}
        >
            {/* Diagonal stripes */}
            <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{ background: T.greenMid, clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <div
                className="absolute inset-y-0 right-0 w-[22%]"
                style={{ background: T.gold, opacity: 0.12, clipPath: "polygon(60% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            {/* Giant 50 watermark */}
            <div
                className="pointer-events-none absolute right-[3%] top-1/2 select-none font-serif font-black leading-none"
                style={{ fontSize: "clamp(140px, 18vw, 220px)", color: "rgba(255,255,255,0.06)", transform: "translateY(-50%)" }}
            >
                50
            </div>

            <div className="relative z-10 max-w-3xl px-6 py-16 sm:px-12">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: T.gold }} />
                    3rd International Conference · CISON 2026
                </div>

                <h1
                    className="mb-3 font-serif font-black leading-[1.05] text-white"
                    style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}
                >
                    CISON Annual
                    <br />
                    Conference <em className="italic" style={{ color: T.gold }}>2026</em>
                </h1>

                <p className="mb-2 text-sm font-medium uppercase tracking-[0.04em] text-white/65">
                    Chartered Institute of Statisticians of Nigeria
                </p>

                <p className="mb-8 max-w-xl font-serif text-lg italic leading-relaxed text-white/70">
                    "From Legacy to Leadership:<br />
                    50 Years of Promoting Statistical Development In Nigeria"
                </p>

                <div className="mb-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/80">
                    {([
                        { icon: CalendarBlankIcon, text: "October 12–16, 2026" },
                        { icon: MapPinIcon, text: "Abuja, Nigeria" },
                        { icon: ClockIcon, text: "5 Days · Workshops, Panels & Awards" },
                    ] as const).map(({ icon: Icon, text }) => (
                        <span key={text} className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: T.gold }} />
                            <Icon size={16} className="opacity-80" />
                            {text}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="https://my.cison.org.ng/2026-conference-and-preconference-registration/"
                        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition hover:brightness-105"
                        style={{ background: T.gold, color: T.green }}
                    >
                        Member Registration <ArrowRightIcon size={16} weight="bold" />
                    </a>
                    <a
                        href="https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/"
                        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition hover:brightness-105"
                        style={{ background: T.gold, color: T.green }}
                    >
                        Non-Member Registration <ArrowRightIcon size={16} weight="bold" />
                    </a>
                    <a
                        href="https://my.cison.org.ng/group-conference-registration/"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
                    >
                        Corporate Registration
                    </a>
                </div>

                <p className="mt-7 text-sm text-white/70">
                    Also open:{" "}
                    <a href="#preconference" className="font-semibold underline underline-offset-4 hover:text-white" style={{ color: T.gold }}>
                        Pre-Conference Workshop
                    </a>{" "}
                    — Advanced Spatial Data Analysis (Oct 12–13).
                </p>
            </div>
        </section>
    );
}

function StatsBar() {
    return (
        <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-gray-100 sm:grid-cols-3 lg:grid-cols-5 dark:bg-gray-800">
                {STATS.map((s) => (
                    <div key={s.label} className="bg-white px-6 py-8 text-center dark:bg-gray-950">
                        <div className="font-serif text-3xl font-black text-emerald-700 dark:text-emerald-400">
                            {s.num}
                        </div>
                        <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="py-20 px-6 sm:px-10">
            <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2 md:gap-16">
                <div>
                    <Eyebrow>About the Conference</Eyebrow>
                    <SectionHeading className="mb-6 text-gray-900 dark:text-white">
                        Nigeria's Premier Statistics &amp; Data Analytics Summit
                    </SectionHeading>
                    <p className="mb-10 max-w-xl leading-[1.8] text-gray-600 dark:text-gray-300">
                        The CISON Annual Conference unites statisticians, data scientists, policymakers,
                        academics, and industry leaders across Africa. Our 2026 edition moves to Abuja —
                        Nigeria's governance heartland — as we mark 50 years of shaping the national
                        statistical system.
                    </p>

                    <div className="flex flex-col gap-4">
                        {FEATURES.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 rounded-xl border border-emerald-200/60 bg-emerald-50/40 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                    <Icon size={22} weight="bold" />
                                </span>
                                <div>
                                    <h3 className="text-[0.95rem] font-semibold text-emerald-950 dark:text-emerald-100">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Golden Jubilee visual */}
                <div
                    className="relative flex min-h-96 flex-col justify-between overflow-hidden rounded-2xl p-8"
                    style={{ background: T.green }}
                >
                    <div
                        className="absolute inset-y-0 right-0 w-3/5"
                        style={{ background: T.greenMid, clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    />
                    <div
                        className="absolute inset-y-0 right-0 w-1/4"
                        style={{ background: T.gold, opacity: 0.25, clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    />
                    <div className="relative z-10 font-serif font-black leading-none text-white/10" style={{ fontSize: "7rem" }}>
                        50
                    </div>
                    <div className="relative z-10">
                        <span
                            className="mb-4 inline-block rounded px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                            style={{ background: T.gold, color: T.green }}
                        >
                            Golden Jubilee
                        </span>
                        <h3 className="mb-2 font-serif text-2xl font-bold leading-snug text-white">
                            Five decades of statistical leadership in Nigeria
                        </h3>
                        <p className="text-sm leading-relaxed text-white/60">
                            From the founding of CISON to shaping national data policy — a legacy of
                            rigour, service, and development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ThemesSection() {
    return (
        <section className="relative overflow-hidden py-20" style={{ background: T.green }}>
            <div
                className="absolute inset-y-0 right-0 w-1/3 opacity-40"
                style={{ background: T.greenMid, clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <Eyebrow light className="justify-center">Key Themes</Eyebrow>
                <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white sm:text-4xl">
                    What We'll Explore
                </h2>
                <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
                    {THEMES.map((t) => (
                        <div
                            key={t.num}
                            className="rounded-2xl bg-white p-6 shadow-xl shadow-black/10 transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="font-serif text-4xl font-black text-emerald-200">{t.num}</div>
                            <h3 className="mt-2 text-base font-semibold text-emerald-950">{t.title}</h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{t.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PreConferenceSection() {
    return (
        <section id="preconference" className="border-y border-border bg-muted/40 py-20 px-6 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <Eyebrow>Pre-Conference Workshop</Eyebrow>
                    <h2 className="mb-6 text-gray-900 dark:text-white">
                        <SectionHeading>
                            Advanced Techniques for Spatial Data Analysis and Interactive Visualisation
                        </SectionHeading>
                    </h2>
                    <p className="leading-[1.8] text-gray-600 dark:text-gray-300">
                        A two-day intensive workshop delivered ahead of the main conference — equipping
                        participants with modern spatial and spatiotemporal modelling skills and hands-on
                        tools for interactive data visualisation.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Overview & fees */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                        {PRECONFERENCE_META.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4 border-b border-gray-100 py-4 first:pt-0 last:border-b-0 dark:border-gray-800">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                                    <Icon size={20} weight="bold" />
                                </span>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</div>
                                    <div className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-100">{value}</div>
                                </div>
                            </div>
                        ))}

                        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/40">
                            <div className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                                Workshop Fee
                            </div>
                            <div className="mt-1 font-serif text-3xl font-black text-amber-900 dark:text-amber-300">₦80,000</div>
                            <p className="mt-1 text-sm text-amber-800/80 dark:text-amber-200/70">
                                Covers conference materials and lunch.
                            </p>
                        </div>
                    </div>

                    {/* Facilitator */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                <GraduationCapIcon size={28} weight="bold" />
                            </span>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                    <span className="h-0.5 w-5 bg-emerald-500 dark:bg-emerald-400" /> Facilitator
                                </div>
                                <h3 className="mt-1 font-serif text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                                    Associate Professor Chigozie Edson Utazi
                                </h3>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                            University of Southampton, United Kingdom
                        </div>

                        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            A prominent statistician, researcher, and academic specialising in spatial
                            and spatiotemporal modelling — bringing world-class expertise to a practical,
                            interactive learning experience.
                        </p>
                    </div>

                    {/* Payment */}
                    {/* <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:col-span-2">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                <WalletIcon size={20} weight="bold" />
                            </span>
                            <div>
                                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                                    Registration &amp; Payment
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Pay the ₦80,000 fee by bank transfer, then confirm with the Editorial Committee below.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <CopyField label="Bank" value="Zenith Bank" />
                            <CopyField label="Account Name" value="Chartered Institute of Statisticians of Nigeria" />
                            <CopyField label="Account Number" value="1310081653" />
                        </div>
                    </div> */}

                    {/* Contacts */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                <PhoneIcon size={20} weight="bold" />
                            </span>
                            <div>
                                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                                    Inquiries &amp; Confirmation
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Editorial Committee</p>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {PRECONFERENCE_CONTACTS.map(({ role, phone }) => (
                                <li key={role} className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-800">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
                                    <a
                                        href={`tel:${phone.replace(/\s+/g, "")}`}
                                        className="font-mono text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400"
                                    >
                                        {phone}
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

function RegistrationSection() {
    return (
        <section id="registration" className="py-20 px-6 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <Eyebrow>Registration</Eyebrow>
                <h2 className="mb-6 text-gray-900 dark:text-white">
                    <SectionHeading>Secure Your Place</SectionHeading>
                </h2>
                <p className="mb-10 max-w-2xl leading-[1.8] text-gray-600 dark:text-gray-300">
                    All registrations include access to plenary sessions, workshops, conference
                    materials, and the Gala dinner.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {REG_CARDS.map((card) => (
                        <div
                            key={card.type}
                            className={`flex flex-col rounded-2xl border p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 ${
                                card.featured
                                    ? "border-amber-300/70 bg-linear-to-b from-amber-50 to-white shadow-amber-500/10 ring-1 ring-amber-200/60 dark:border-amber-800/60 dark:from-amber-950/40 dark:to-gray-900"
                                    : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span
                                    className={`text-[11px] font-bold uppercase tracking-[0.15em] ${
                                        card.featured
                                            ? "text-amber-700 dark:text-amber-400"
                                            : "text-emerald-600 dark:text-emerald-400"
                                    }`}
                                >
                                    {card.tier}
                                </span>
                            </div>

                            <div className="mt-3 text-base font-semibold text-gray-900 dark:text-white">
                                {card.type}
                            </div>

                            <div
                                className={`mt-4 font-serif text-3xl font-black leading-none ${
                                    card.featured
                                        ? "text-emerald-950 dark:text-emerald-300"
                                        : "text-emerald-700 dark:text-emerald-400"
                                }`}
                            >
                                {card.price}
                            </div>
                            <div className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{card.period}</div>

                            <ul className="mb-8 mt-6 flex-1 space-y-2.5">
                                {card.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <CheckCircleIcon
                                            size={16}
                                            weight="bold"
                                            className={`mt-0.5 shrink-0 ${
                                                card.featured ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"
                                            }`}
                                        />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={card.href}
                                className={`block rounded-lg p-3 text-center text-sm font-semibold no-underline transition-all hover:opacity-90 active:scale-[0.98] ${
                                    card.featured
                                        ? "text-emerald-950 shadow-sm shadow-amber-500/30"
                                        : "text-white"
                                }`}
                                style={card.featured ? { background: T.gold } : { background: T.green }}
                            >
                                {card.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="relative overflow-hidden py-20 text-center" style={{ background: T.green }}>
            <div
                className="absolute inset-y-0 right-0 w-1/3"
                style={{ background: T.greenMid, clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <div
                className="absolute inset-y-0 right-0 w-[12%]"
                style={{ background: T.gold, opacity: 0.3, clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <div className="relative z-10 mx-auto max-w-2xl px-6">
                <h2 className="mb-3 font-serif text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                    Join 1,200+ delegates<br />in Abuja this October
                </h2>
                <p className="mb-8 text-base leading-[1.7] text-white/65">
                    Be part of the moment Nigeria's statistical community marks 50 years of leadership
                    — and charts the next half-century.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <a
                        href="https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/"
                        className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition hover:brightness-105"
                        style={{ background: T.gold, color: T.green }}
                    >
                        Register Now <ArrowRightIcon size={16} weight="bold" />
                    </a>
                    <a
                        href="#registration"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
                    >
                        View Pricing
                    </a>
                </div>
            </div>
        </section>
    );
}


export default function CisonConference2026() {
    return (
        <>
            <Hero />
            <StatsBar />
            <AboutSection />
            <ThemesSection />
            <PreConferenceSection />
            <RegistrationSection />
            <CTASection />
        </>
    );
}