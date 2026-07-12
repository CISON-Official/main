import React, { useState, useEffect, type ReactNode } from "react";
import {
    CalendarBlankIcon,
    MapPinIcon,
    ClockIcon,
    MicrophoneIcon,
    LaptopIcon,
    HandshakeIcon,
    TrophyIcon,
    ArrowRightIcon,
    CheckCircleIcon,
} from "@phosphor-icons/react";

const T = {
    green: "#0B3D1E",
    greenMid: "#1A6635",
    greenLight: "#E8F5ED",
    gold: "#E8A020",
    goldLight: "#FEF3DC",
    teal: "#2A9D8F",
    tealLight: "#E0F5F3",
    cream: "#F5F0E8",
    ink: "#111816",
    muted: "#5A6B5E",
    white: "#ffffff",
    border: "#D8E4DB",
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

const TAG_STYLES = {
    keynote: { bg: "rgba(232,160,32,0.18)", color: "#E8A020" },
    panel: { bg: "rgba(42,157,143,0.18)", color: "#2A9D8F" },
    workshop: { bg: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)" },
    ceremony: { bg: "rgba(232,160,32,0.12)", color: "#f0c060" },
};

const SCHEDULE:any = {
    "Day 1 — Oct 12": [
        { time: "8:00 – 9:00", title: "Delegate Registration & Welcome Coffee", speaker: "Conference Secretariat", tag: null },
        { time: "9:00 – 10:30", title: "Workshop A: Statistical Modelling with R", speaker: "Technical Faculty, CISON", tag: "workshop" },
        { time: "10:30 – 12:00", title: "Workshop B: Python for Data Science", speaker: "Industry Practitioners", tag: "workshop" },
        { time: "14:00 – 16:00", title: "Workshop C: Official Statistics & SDGs", speaker: "National Bureau of Statistics Experts", tag: "workshop" },
    ],
    "Day 2 — Oct 13": [
        { time: "9:00 – 10:00", title: "Opening Ceremony & Presidential Address", speaker: "CISON President & Dignitaries", tag: "ceremony" },
        { time: "10:00 – 11:00", title: "Keynote: 50 Years of Statistical Leadership", speaker: "Distinguished Statistician — TBC", tag: "keynote" },
        { time: "11:30 – 13:00", title: "Panel: Nigeria's National Statistical System — Past & Future", speaker: "NBS, NISR & Policy Leaders", tag: "panel" },
        { time: "14:00 – 15:30", title: "Session: Big Data for Electoral Integrity", speaker: "INEC & Data Scientists", tag: "panel" },
    ],
    "Day 3 — Oct 14": [
        { time: "9:00 – 10:30", title: "Keynote: AI & the Future of Governance Data", speaker: "International Guest Speaker", tag: "keynote" },
        { time: "11:00 – 12:30", title: "Workshop: Machine Learning in Official Statistics", speaker: "Technical Faculty", tag: "workshop" },
        { time: "14:00 – 15:30", title: "Panel: Citizens & Data — Building Statistical Literacy", speaker: "Civil Society & Academia", tag: "panel" },
        { time: "16:00 – 17:00", title: "Poster & Research Presentations", speaker: "Paper Presenters", tag: "workshop" },
    ],
    "Day 4 — Oct 15": [
        { time: "9:00 – 10:30", title: "Keynote: Next 50 Years — Strategic Vision for Nigeria", speaker: "Policy Leader — TBC", tag: "keynote" },
        { time: "11:00 – 12:30", title: "Panel: Data-Driven Health & Development", speaker: "Health Economists & Statisticians", tag: "panel" },
        { time: "14:00 – 16:00", title: "Workshop: Advanced Survey Methodology", speaker: "Technical Faculty, CISON", tag: "workshop" },
        { time: "19:00 – 22:00", title: "Golden Jubilee Gala & Awards Night", speaker: "All Conference Delegates", tag: "ceremony" },
    ],
    "Day 5 — Oct 16": [
        { time: "9:00 – 10:30", title: "Closing Keynote: Africa's Statistical Future", speaker: "Pan-African Statistics Leader", tag: "keynote" },
        { time: "11:00 – 12:30", title: "Final Panel: From Legacy to Leadership — The Road Ahead", speaker: "CISON Executive & Past Presidents", tag: "panel" },
        { time: "14:00 – 15:00", title: "Closing Ceremony & Communiqué Release", speaker: "CISON President", tag: "ceremony" },
    ],
};

const REG_CARDS = [
    {
        tier: "Early Bird · Closes Jul 1",
        type: "CISON Member",
        price: "₦45,000",
        period: "per delegate · early bird",
        features: ["All plenary & panel sessions", "2 pre-conference workshops", "Conference materials", "Gala dinner access"],
        href: "https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/",
        cta: "Register — Member",
        featured: false,
    },
    {
        tier: "Most Popular",
        type: "Non-Member",
        price: "₦185,000",
        period: "per delegate · early bird",
        features: ["All plenary & panel sessions", "3 pre-conference workshops", "Conference materials & bag", "Gala dinner access"],
        href: "https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/",
        cta: "Register — Non-Member",
        featured: true,
    },
    {
        tier: "Group Rate",
        type: "Corporate / Group",
        price: "Contact Us",
        period: "5+ delegates · discounted",
        features: ["Dedicated group coordinator", "Custom workshop allocation", "Branded delegate packs", "Priority reserved seating"],
        href: "https://my.cison.org.ng/group-conference-registration/",
        cta: "Corporate Registration",
        featured: false,
    },
];


function useCountdown(targetDate:any) {
    const [timeLeft, setTimeLeft] = useState({ d: "--", h: "--", m: "--", s: "--" });

    useEffect(() => {
        const end = new Date(targetDate).getTime();
        const pad = (n:any) => String(n).padStart(2, "0");

        const tick = () => {
            const diff = end - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    d: pad(Math.floor(diff / 86400000)),
                    h: pad(Math.floor((diff % 86400000) / 3600000)),
                    m: pad(Math.floor((diff % 3600000) / 60000)),
                    s: pad(Math.floor((diff % 60000) / 1000)),
                });
            } else {
                setTimeLeft({ d: "00", h: "00", m: "00", s: "00" });
            }
        };

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function EarlyBirdStrip() {
    return (
        <div
            style={{
                background: T.gold,
                color: T.green,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "center",
                padding: "10px 16px",
                letterSpacing: "0.01em",
            }}
        >
            Early Bird Registration — Save 25% before{" "}
            <strong>July 1, 2026</strong>.{" "}
            <a
                href="https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/"
                style={{ color: T.green, fontWeight: 700, marginLeft: 6 }}
            >
                Register Now →
            </a>
        </div>
    );
}

function Hero() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "88vh",
                display: "flex",
                alignItems: "center",
                background: T.green,
                overflow: "hidden",
            }}
        >
            {/* Diagonal stripes */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "48%",
                    height: "100%",
                    background: T.greenMid,
                    clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "22%",
                    height: "100%",
                    background: T.gold,
                    opacity: 0.12,
                    clipPath: "polygon(60% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
            />
            {/* Giant 50 watermark */}
            <div
                style={{
                    position: "absolute",
                    right: "3%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(140px, 18vw, 220px)",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                50
            </div>

            <div style={{ position: "relative", zIndex: 2, maxWidth: 820, padding: "4rem 2.5rem" }}>
                <div
                    style={{
                        display: "inline-block",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        padding: "5px 14px",
                        borderRadius: 100,
                        marginBottom: "1.8rem",
                    }}
                >
                    3rd International Conference · CISON 2026
                </div>

                <h1
                    style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                        fontWeight: 900,
                        color: "#fff",
                        lineHeight: 1.05,
                        marginBottom: "0.8rem",
                    }}
                >
                    CISON Annual<br />
                    Conference{" "}
                    <em style={{ fontStyle: "italic", color: T.gold }}>2026</em>
                </h1>

                <p style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                    Chartered Institute of Statisticians of Nigeria
                </p>

                <p
                    style={{
                        fontFamily: "'Fraunces', serif",
                        fontStyle: "italic",
                        fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "2.2rem",
                        lineHeight: 1.6,
                        maxWidth: 540,
                    }}
                >
                    "From Legacy to Leadership:<br />
                    50 Years of Promoting Statistical Development In Nigeria"
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem", marginBottom: "2.6rem" }}>
                    {[
                        { icon: CalendarBlankIcon, text: "October 12–16, 2026" },
                        { icon: MapPinIcon, text: "Abuja, Nigeria" },
                        { icon: ClockIcon, text: "5 Days · Workshops, Panels & Awards" },
                    ].map(({ icon: Icon, text }) => (
                        <span key={text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", fontWeight: 500 }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold, flexShrink: 0 }} />
                            <Icon size={15} style={{ opacity: 0.7 }} />
                            {text}
                        </span>
                    ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                    <a
                        href="https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.85rem 2rem", borderRadius: 4, fontSize: "0.9rem", fontWeight: 600, background: T.gold, color: T.green, textDecoration: "none" }}
                    >
                        Individual Registration <ArrowRightIcon size={16} />
                    </a>
                    <a
                        href="https://my.cison.org.ng/group-conference-registration/"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.85rem 2rem", borderRadius: 4, fontSize: "0.9rem", fontWeight: 600, background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                    >
                        Corporate Registration
                    </a>
                </div>
            </div>
        </section>
    );
}

function Countdown() {
    const { d, h, m, s } = useCountdown("July 1, 2026 00:00:00 GMT+0100");

    return (
        <section style={{ background: T.ink, padding: "2.4rem 1.5rem" }}>
            <div
                style={{
                    maxWidth: 700,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                }}
            >
                <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
                        Early bird ends in
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        {[{ val: d, unit: "Days" }, { val: h, unit: "Hrs" }, { val: m, unit: "Min" }, { val: s, unit: "Sec" }].map(
                            ({ val, unit }, i) => (
                                <div key={unit} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                    {i > 0 && (
                                        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", color: "rgba(255,255,255,0.2)", marginTop: 4 }}>:</span>
                                    )}
                                    <div style={{ textAlign: "center" }}>
                                        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "2.4rem", fontWeight: 700, color: "#fff", lineHeight: 1, display: "block", minWidth: 64 }}>
                                            {val}
                                        </span>
                                        <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 4, display: "block" }}>
                                            {unit}
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div style={{ fontSize: "0.87rem", color: T.gold, fontWeight: 500 }}>
                    Save 25% · Deadline <strong>July 1, 2026</strong>
                </div>
            </div>
        </section>
    );
}

function StatsBar() {
    return (
        <section style={{ borderBottom: `1px solid #E0E8E2` }} className="dark:bg-black bg-white dark:text-white">
            <div className="mx-auto w-full max-w-270 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
                {STATS.map((s, i) => (
                    <div
                        key={s.label}
                        className={`py-[2.2rem] px-6 text-center ${i < STATS.length - 1 ? 'border-r border-[#E8EDE9]' : 'border-r-0'}`}
                    >
                        <div className="dark:text-white text-green-600 text-4xl font-bold">
                            {s.num}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: T.muted, marginTop: 5, fontWeight: 500 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Eyebrow({ children, light = false }: {children: ReactNode, light: Boolean}) {
    return (
        <div
            style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: light ? T.gold : T.teal,
                marginBottom: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
            }}
        >
            <span style={{ width: 20, height: 2, background: light ? T.gold : T.teal, flexShrink: 0, display: "inline-block" }} />
            {children}
        </div>
    );
}

function SectionHeading({ children, light = false, style = {} }:{children: React.ReactNode, light: Boolean, style:any}) {
    return (
        <h2
            style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: light ? "#fff" : T.green,
                lineHeight: 1.15,
                marginBottom: "1rem",
                ...style,
            }}
        >
            {children}
        </h2>
    );
}

function AboutSection() {
    return (
        <section style={{ padding: "5.5rem 1.5rem", background: T.white }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
                <div>
                    <Eyebrow light={false}>About the Conference</Eyebrow>
                    <SectionHeading style={"mike"} light={false}>Nigeria's Premier Statistics & Data Analytics Summit</SectionHeading>
                    <p style={{ fontSize: "1.02rem", color: T.muted, lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem" }}>
                        The CISON Annual Conference unites statisticians, data scientists, policymakers, academics, and industry leaders across Africa. Our 2026 edition moves to Abuja — Nigeria's governance heartland — as we mark 50 years of shaping the national statistical system.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {FEATURES.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    padding: "1.2rem",
                                    borderRadius: 6,
                                    background: T.greenLight,
                                    borderLeft: `3px solid ${T.greenMid}`,
                                }}
                            >
                                <Icon size={22} color={T.greenMid} weight="duotone" style={{ flexShrink: 0, marginTop: 1 }} />
                                <div>
                                    <div style={{ fontSize: "0.92rem", fontWeight: 600, color: T.green, marginBottom: 3 }}>{title}</div>
                                    <div style={{ fontSize: "0.83rem", color: T.muted, lineHeight: 1.6 }}>{text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual card */}
                <div
                    style={{
                        background: T.green,
                        borderRadius: 8,
                        padding: "2.5rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: 380,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: T.greenMid, clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }} />
                    <div style={{ position: "absolute", top: 0, right: 0, width: "22%", height: "100%", background: T.gold, opacity: 0.25, clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} />
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: "7rem", fontWeight: 900, color: "rgba(255,255,255,0.08)", lineHeight: 1, position: "relative", zIndex: 1 }}>
                        50
                    </div>
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ display: "inline-block", background: T.gold, color: T.green, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2, marginBottom: "1rem" }}>
                            Golden Jubilee
                        </div>
                        <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "0.6rem" }}>
                            Five decades of statistical leadership in Nigeria
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                            From the founding of CISON to shaping national data policy — a legacy of rigour, service, and development.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ThemesSection() {
    return (
        <section style={{ padding: "5.5rem 1.5rem", background: T.cream }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                <Eyebrow light={false}>Key Themes</Eyebrow>
                <SectionHeading light={false} style={"any"}>What We'll Explore</SectionHeading>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.2rem" }}>
                    {THEMES.map((t) => (
                        <div
                            key={t.num}
                            style={{
                                background: T.white,
                                border: `1px solid ${T.border}`,
                                borderRadius: 6,
                                padding: "1.6rem 1.4rem",
                                transition: "border-color 0.2s, transform 0.2s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.greenMid; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "none"; }}
                        >
                            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, color: "#C8DFCE", lineHeight: 1, marginBottom: "0.7rem" }}>
                                {t.num}
                            </div>
                            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: T.green, marginBottom: 4, lineHeight: 1.3 }}>{t.title}</div>
                            <div style={{ fontSize: "0.8rem", color: T.muted, lineHeight: 1.6 }}>{t.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ScheduleSection() {
    const days = Object.keys(SCHEDULE);
    const [activeDay, setActiveDay] = useState(days[0]);

    return (
        <section style={{ padding: "5.5rem 1.5rem", background: T.green }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                <Eyebrow light>Programme</Eyebrow>
                <SectionHeading style light>Conference Schedule</SectionHeading>
                <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 600, marginBottom: "2.5rem" }}>
                    Five days of keynotes, technical workshops, panel discussions, and the Golden Jubilee Gala.
                </p>

                {/* Day tabs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "2rem" }}>
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            style={{
                                padding: "7px 18px",
                                borderRadius: 4,
                                fontSize: "0.82rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                border: `1px solid ${activeDay === day ? T.gold : "rgba(255,255,255,0.12)"}`,
                                background: activeDay === day ? T.gold : "rgba(255,255,255,0.07)",
                                color: activeDay === day ? T.green : "rgba(255,255,255,0.55)",
                                transition: "all 0.15s",
                            }}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule items */}
                <div>
                    {SCHEDULE[activeDay].map((item:any, i:any) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                gap: "1.5rem",
                                padding: "1rem 0",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div style={{ fontSize: "0.78rem", fontWeight: 600, color: T.teal, minWidth: 100, flexShrink: 0, paddingTop: 2 }}>
                                {item.time}
                            </div>
                            <div>
                                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "#fff", marginBottom: 3, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                                    {item.title}
                                    {item.tag && (
                                        <span
                                            style={{
                                                display: "inline-block",
                                                fontSize: 10,
                                                fontWeight: 700,
                                                padding: "2px 8px",
                                                borderRadius: 100,
                                                background: TAG_STYLES[item.tag as keyof typeof TAG_STYLES]?.bg || "#e4e4e7",
                                                color: TAG_STYLES[item.tag as keyof typeof TAG_STYLES]?.color || "#71717a",
                                                textTransform: "capitalize",
                                            }}

                                        >
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{item.speaker}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RegistrationSection() {
    return (
        <section id="registration" style={{ padding: "5.5rem 1.5rem", background: T.ink }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                <Eyebrow light>Registration</Eyebrow>
                <SectionHeading style light>Secure Your Place</SectionHeading>
                <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: 600, marginBottom: "2.5rem" }}>
                    Early bird pricing available until July 1, 2026. All registrations include access to all plenary sessions, workshops, and the Gala dinner.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1.2rem", marginBottom: "2rem" }}>
                    {REG_CARDS.map((card) => (
                        <div
                            key={card.type}
                            style={{
                                borderRadius: 8,
                                padding: "2rem 1.5rem",
                                border: `1px solid ${card.featured ? T.gold : "rgba(255,255,255,0.1)"}`,
                                background: card.featured ? T.gold : "rgba(255,255,255,0.05)",
                            }}
                        >
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: card.featured ? "rgba(11,61,30,0.6)" : "rgba(255,255,255,0.45)", marginBottom: "0.7rem" }}>
                                {card.tier}
                            </div>
                            <div style={{ fontWeight: 600, fontSize: "1rem", color: card.featured ? T.green : "#fff", marginBottom: "1rem" }}>
                                {card.type}
                            </div>
                            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.2rem", fontWeight: 700, color: card.featured ? T.green : "#fff", lineHeight: 1 }}>
                                {card.price}
                            </div>
                            <div style={{ fontSize: "0.78rem", color: card.featured ? "rgba(11,61,30,0.55)" : "rgba(255,255,255,0.45)", marginTop: 3, marginBottom: "1.2rem" }}>
                                {card.period}
                            </div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                {card.features.map((f) => (
                                    <div key={f} style={{ fontSize: "0.82rem", color: card.featured ? "rgba(11,61,30,0.8)" : "rgba(255,255,255,0.7)", marginBottom: 6, display: "flex", gap: 6, alignItems: "flex-start" }}>
                                        <CheckCircleIcon size={14} color={card.featured ? T.green : T.teal} weight="bold" style={{ flexShrink: 0, marginTop: 1 }} />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <a
                                href={card.href}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    padding: "0.8rem",
                                    borderRadius: 4,
                                    fontWeight: 600,
                                    fontSize: "0.88rem",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    border: "none",
                                    background: card.featured ? T.green : "rgba(255,255,255,0.1)",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
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

function SponsorsSection() {
    const sponsors = ["Gold Sponsor", "Silver Sponsor", "NBS Nigeria", "Media Partner"];
    return (
        <section style={{ padding: "5.5rem 1.5rem", background: T.white }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                <Eyebrow light>Partners & Sponsors</Eyebrow>
                <SectionHeading style light >Supported By</SectionHeading>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                    {sponsors.map((s) => (
                        <div key={s} style={{ border: `1px solid ${T.border}`, borderRadius: 6, padding: "1rem 1.8rem", fontSize: "0.87rem", fontWeight: 600, color: T.muted, background: T.cream }}>
                            {s}
                        </div>
                    ))}
                    <div style={{ border: `1.5px dashed ${T.teal}`, borderRadius: 6, padding: "1rem 1.8rem", fontSize: "0.87rem", fontWeight: 600, color: T.teal, background: T.tealLight, cursor: "pointer" }}>
                        Become a Sponsor →
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section style={{ background: T.green, padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "100%", background: T.greenMid, clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "12%", height: "100%", background: T.gold, opacity: 0.3, clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "0.8rem", lineHeight: 1.1 }}>
                    Join 1,200+ delegates<br />in Abuja this October
                </h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", marginBottom: "2.2rem", lineHeight: 1.7 }}>
                    Be part of the moment Nigeria's statistical community marks 50 years of leadership — and charts the next half-century.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }}>
                    <a href="https://my.cison.org.ng/3rd-workshop-preconference-and-conference-registration/" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.85rem 2rem", borderRadius: 4, fontSize: "0.9rem", fontWeight: 600, background: T.gold, color: T.green, textDecoration: "none" }}>
                        Register Now — Save 25% <ArrowRightIcon size={16} />
                    </a>
                    <a href="#registration" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.85rem 2rem", borderRadius: 4, fontSize: "0.9rem", fontWeight: 600, background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
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
            <EarlyBirdStrip />
            <Hero />
            <Countdown />
            <StatsBar />
            <AboutSection />
            <ThemesSection />
            <ScheduleSection />
            <RegistrationSection />
            <SponsorsSection />
            <CTASection />
        </>
    );
}