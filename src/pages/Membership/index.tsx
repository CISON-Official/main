import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Certificate,
    Medal,
    Buildings,
    ArrowRight,
    Student,
    UserCircleCheck,
    ChartLineUp,
    Star,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { Reveal } from "@/animate";
import CTAStrip from "@/components/cta";

const fees = [
    {
        sn: "1",
        item: "Annual Dues",
        student: "₦5,000",
        member: "₦20,000",
        retired: "₦15,000",
        corporate: "₦200,000",
    },
    {
        sn: "2",
        item: "Membership Transition Fee",
        student: "—",
        member: "₦20,000",
        retired: "₦20,000",
        corporate: "₦50,000",
    },
    {
        sn: "3",
        item: "Development Levy",
        student: "—",
        member: "₦20,000",
        retired: "₦20,000",
        corporate: "N/A",
    },
    {
        sn: "4",
        item: "New Members Registration Fee *",
        student: "—",
        member: "₦50,000",
        retired: "₦50,000",
        corporate: "N/A",
        highlight: true,
    },
];

// ── Membership tiers ──────────────────────────────────────────────────────────
const tiers = [
    {
        id: "registered",
        icon: Certificate,
        label: "Registered",
        title: "Registered Membership",
        tag: "Entry Point",
        tagColor: "green",
        body: "The basic entry point for CISON membership, open to all those with interest in statistics and the Institute's objectives.",
        items: [
            { icon: Student, text: "Student Member — for undergraduates & postgraduates" },
            { icon: UserCircleCheck, text: "Registered Statistician — open entry for professionals" },
            { icon: ChartLineUp, text: "After 2 years → Associate Statistician (A.Stat.)" },
        ],
        cta: "Become a Registered Member",
        href: "https://my.cison.org.ng/member-registration/",
        featured: false,
    },
    {
        id: "professional",
        icon: Medal,
        label: "Professional",
        title: "Professional Membership",
        tag: "Most Popular",
        tagColor: "green",
        body: "After two years, an Associate Statistician may begin sequential examinations toward the Chartered Statistician status, provided they have five years of practical experience.",
        items: [
            { icon: ChartLineUp, text: "Examination Associate — actively pursuing C.Stat." },
            { icon: Star, text: "Chartered Statistician (C.Stat.) — upon Graduate Certificate" },
            { icon: Medal, text: "Fellow — elected for outstanding Institute advancement" },
        ],
        cta: "Begin the Process",
        href: "https://my.cison.org.ng/member-registration/",
        featured: true,
    },
    {
        id: "corporate",
        icon: Buildings,
        label: "Corporate",
        title: "Corporate Membership",
        tag: "For Organisations",
        tagColor: "slate",
        body: "For businesses and organisations seeking to engage with the forefront of the statistics and data science community in Nigeria.",
        items: [
            { icon: Buildings, text: "Institutional membership for companies & agencies" },
            { icon: ChartLineUp, text: "Enhanced professional development & networking" },
            { icon: Star, text: "Industry influence and community engagement" },
        ],
        cta: "Become a Corporate Member",
        href: "https://my.cison.org.ng/member-registration/",
        featured: false,
    },
];


// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ theme }: { theme: string }) {
    const dark = theme === "dark";
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
                }`}
        >
            {/* large dot-grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: dark
                        ? "radial-gradient(circle, rgba(34,197,94,0.12) 1px, transparent 1px)"
                        : "radial-gradient(circle, rgba(21,128,61,0.10) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* green glow blob */}
            <div
                className={`absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full pointer-events-none blur-[120px] ${dark ? "bg-green-900/30" : "bg-green-200/60"
                    }`}
            />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full"
                style={{ y, opacity }}
            >
                <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
                    <div>
                        <Reveal custom={0}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-6 h-px bg-[#22c55e]" />
                                <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                                    Membership
                                </span>
                            </div>
                        </Reveal>

                        <Reveal custom={1}>
                            <h1
                                className={`text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6 ${dark ? "text-white" : "text-[#0a1a10]"
                                    }`}
                            >
                                Join Nigeria's
                                <br />
                                <span className="text-[#22c55e]">Statistical</span>
                                <br />
                                Community
                            </h1>
                        </Reveal>

                        <Reveal custom={2}>
                            <p
                                className={`text-base md:text-lg leading-relaxed max-w-lg mb-10 ${dark ? "text-white/55" : "text-green-900/60"
                                    }`}
                            >
                                CISON brings together professionals in statistics and data science across
                                Nigeria — publishing journals, organising awards, and supporting associations
                                spanning academia, government, and industry.
                            </p>
                        </Reveal>

                        <Reveal custom={3}>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#tiers"
                                    className="group inline-flex items-center gap-2 bg-[#22c55e] text-white font-bold px-6 py-3 text-sm hover:bg-[#16a34a] transition-colors duration-300"
                                >
                                    Explore Membership
                                    <ArrowRight
                                        size={14}
                                        weight="bold"
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                                <a
                                    href="#fees"
                                    className={`inline-flex items-center gap-2 border font-bold px-6 py-3 text-sm transition-colors duration-300 ${dark
                                        ? "border-white/20 text-white/70 hover:border-[#22c55e] hover:text-[#22c55e]"
                                        : "border-green-300 text-green-800 hover:border-[#22c55e] hover:text-[#22c55e]"
                                        }`}
                                >
                                    View Fees
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* stat pills */}
                    <Reveal custom={2} className="hidden md:block">
                        <div className="flex flex-col gap-4">
                            {[
                                { n: "3", label: "Membership Tiers" },
                                { n: "C.Stat.", label: "Top Designation" },
                                { n: "5 yrs", label: "Experience Required" },
                            ].map(({ n, label }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className={`px-7 py-5 border-l-4 border-[#22c55e] ${dark ? "bg-white/5" : "bg-white/80"
                                        }`}
                                >
                                    <p
                                        className={`text-3xl font-black ${dark ? "text-white" : "text-[#0a1a10]"}`}
                                    >
                                        {n}
                                    </p>
                                    <p
                                        className={`text-xs mt-0.5 ${dark ? "text-white/45" : "text-green-900/50"
                                            }`}
                                    >
                                        {label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </motion.div>

            {/* bottom divider */}
            <div
                className={`absolute bottom-0 inset-x-0 h-24 ${dark
                    ? "bg-linear-to-t from-[#071209] to-transparent"
                    : "bg-linear-to-t from-[#f0fdf4] to-transparent"
                    }`}
            />
        </section>
    );
}

// ── Membership Tiers ──────────────────────────────────────────────────────────
function TierCard({
    tier,
    theme,
    index,
}: {
    tier: (typeof tiers)[0];
    theme: string;
    index: number;
}) {
    const dark = theme === "dark";
    const Icon = tier.icon;

    return (
        <Reveal custom={index * 0.12} className="h-full">
            <div
                className={`relative h-full flex flex-col border transition-all duration-500 group hover:-translate-y-1 ${tier.featured
                    ? dark
                        ? "border-[#22c55e] bg-[#0d2218]"
                        : "border-[#22c55e] bg-white shadow-xl shadow-green-200/60"
                    : dark
                        ? "border-white/10 bg-[#0d1a12] hover:border-[#22c55e]/50"
                        : "border-green-100 bg-white hover:border-[#22c55e]/60 shadow-sm"
                    }`}
            >
                {/* featured ribbon */}
                {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[10px] font-black px-3 py-1 tracking-widest uppercase">
                        Most Popular
                    </div>
                )}

                {/* colored bar top */}
                <div
                    className={`h-1 w-full ${tier.featured ? "bg-[#22c55e]" : dark ? "bg-white/10" : "bg-green-100"
                        }`}
                />

                <div className="p-8 flex flex-col flex-1 gap-6">
                    {/* icon + heading */}
                    <div className="flex items-start gap-4">
                        <div
                            className={`shrink-0 w-11 h-11 flex items-center justify-center ${tier.featured
                                ? "bg-[#22c55e] text-white"
                                : dark
                                    ? "bg-[#22c55e]/15 text-[#22c55e]"
                                    : "bg-green-100 text-green-700"
                                }`}
                        >
                            <Icon size={22} weight="duotone" />
                        </div>
                        <div>
                            <p
                                className={`text-[10px] tracking-[0.2em] uppercase font-bold mb-1 ${dark ? "text-[#22c55e]" : "text-green-600"
                                    }`}
                            >
                                {tier.label}
                            </p>
                            <h3
                                className={`text-lg font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                                    }`}
                            >
                                {tier.title}
                            </h3>
                        </div>
                    </div>

                    {/* body */}
                    <p
                        className={`text-sm leading-relaxed ${dark ? "text-white/55" : "text-green-900/60"
                            }`}
                    >
                        {tier.body}
                    </p>

                    {/* items */}
                    <ul className="space-y-3 flex-1">
                        {tier.items.map(({ icon: ItemIcon, text }) => (
                            <li key={text} className="flex items-start gap-3">
                                <ItemIcon
                                    size={15}
                                    weight="bold"
                                    className="text-[#22c55e] shrink-0 mt-0.5"
                                />
                                <span
                                    className={`text-xs leading-relaxed ${dark ? "text-white/60" : "text-green-900/70"
                                        }`}
                                >
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a
                        href={tier.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn mt-2 flex items-center justify-center gap-2 font-bold text-sm py-3 px-5 transition-all duration-300 ${tier.featured
                            ? "bg-[#22c55e] text-white hover:bg-[#16a34a]"
                            : dark
                                ? "border border-white/20 text-white/70 hover:border-[#22c55e] hover:text-[#22c55e]"
                                : "border border-green-200 text-green-800 hover:border-[#22c55e] hover:text-[#22c55e]"
                            }`}
                    >
                        {tier.cta}
                        <ArrowRight
                            size={13}
                            weight="bold"
                            className="group-hover/btn:translate-x-1 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </Reveal>
    );
}

// ── Fees Table ────────────────────────────────────────────────────────────────
function FeesSection({ theme }: { theme: string }) {
    const dark = theme === "dark";
    const cols = ["Item", "Student", "Member", "Retired", "Corporate"];

    return (
        <section
            id="fees"
            className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <Reveal className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-px bg-[#22c55e]" />
                        <span className="text-[#22c55e] text-xs tracking-[0.2em] uppercase font-bold">
                            Annual Fees
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2
                            className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                                }`}
                        >
                            Dues, Levies &amp; Fees
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://my.cison.org.ng/member-registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#22c55e] text-white font-bold text-xs px-5 py-3 hover:bg-[#16a34a] transition-colors"
                            >
                                Register Now
                                <ArrowRight size={12} weight="bold" />
                            </a>
                            <a
                                href="https://my.cison.org.ng/shop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 border font-bold text-xs px-5 py-3 transition-colors ${dark
                                    ? "border-white/20 text-white/60 hover:border-[#22c55e] hover:text-[#22c55e]"
                                    : "border-green-300 text-green-800 hover:border-[#22c55e]"
                                    }`}
                            >
                                Pay Fees
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* table */}
                <Reveal custom={1}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr
                                    className={`${dark ? "bg-[#22c55e]/15 text-[#22c55e]" : "bg-[#22c55e] text-white"
                                        }`}
                                >
                                    {cols.map((col) => (
                                        <th
                                            key={col}
                                            className="text-left text-xs tracking-[0.15em] uppercase font-black px-5 py-4 first:rounded-none last:rounded-none"
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {fees.map((row, i) => (
                                    <motion.tr
                                        key={row.sn}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                                        className={`border-b transition-colors ${dark
                                            ? "border-white/5 hover:bg-white/5"
                                            : "border-green-100 hover:bg-green-50"
                                            } ${row.highlight ? (dark ? "bg-[#22c55e]/5" : "bg-green-50/80") : ""}`}
                                    >
                                        <td
                                            className={`px-5 py-4 font-medium ${dark ? "text-white/80" : "text-[#0a1a10]"
                                                } ${row.highlight ? "text-[#22c55e] font-bold italic" : ""}`}
                                        >
                                            {row.item}
                                        </td>
                                        {[row.student, row.member, row.retired, row.corporate].map((v, ci) => (
                                            <td
                                                key={ci}
                                                className={`px-5 py-4 font-mono text-sm ${v === "—" || v === "N/A"
                                                    ? dark
                                                        ? "text-white/25"
                                                        : "text-green-300"
                                                    : dark
                                                        ? "text-white/70"
                                                        : "text-green-900"
                                                    }`}
                                            >
                                                {v}
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p
                        className={`mt-4 text-xs italic ${dark ? "text-white/35" : "text-green-700/60"}`}
                    >
                        * New Members are not required to pay the Membership Transition fee of ₦20,000.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}


// ── Root Page ─────────────────────────────────────────────────────────────────
export default function CisonMembershipPage() {
    const { theme, isDark } = useTheme();
    let dark = isDark;

    return (
        <>


            <div className={`transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-white"}`}>
                <Hero theme={theme} />

                {/* Membership Tiers */}
                <section
                    id="tiers"
                    className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-white"
                        }`}
                >
                    <div className="max-w-6xl mx-auto px-6 md:px-12">
                        <Reveal className="mb-14">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-px bg-[#22c55e]" />
                                <span className="text-[#22c55e] text-xs tracking-[0.2em] uppercase font-bold">
                                    Membership Options
                                </span>
                            </div>
                            <h2
                                className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                                    }`}
                            >
                                Choose Your Path
                            </h2>
                            <p
                                className={`mt-4 max-w-xl text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/55"
                                    }`}
                            >
                                CISON offers various membership options catering to students, working
                                statisticians, and organisations across Nigeria.
                            </p>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-6 items-stretch">
                            {tiers.map((tier, i) => (
                                <TierCard key={tier.id} tier={tier} theme={theme} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey section */}
                <section
                    className={`py-24 transition-colors duration-500 ${dark ? "bg-[#0a1a10]" : "bg-[#f0fdf4]"
                        }`}
                >
                    <div className="max-w-6xl mx-auto px-6 md:px-12">
                        <Reveal className="mb-14">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-px bg-[#22c55e]" />
                                <span className="text-[#22c55e] text-xs tracking-[0.2em] uppercase font-bold">
                                    Membership Journey
                                </span>
                            </div>
                            <h2
                                className={`text-4xl font-black ${dark ? "text-white" : "text-[#0a1a10]"}`}
                            >
                                Your Path to C.Stat.
                            </h2>
                        </Reveal>

                        <div className="relative">
                            {/* connecting line */}
                            <div
                                className={`absolute left-6 top-0 bottom-0 w-px ${dark ? "bg-[#22c55e]/20" : "bg-green-200"
                                    } hidden md:block`}
                            />

                            <div className="space-y-0">
                                {[
                                    {
                                        step: "01",
                                        title: "Registered Statistician / Student Member",
                                        desc: "Begin your journey. Open to anyone with an interest in statistics.",
                                        time: "Day 1",
                                    },
                                    {
                                        step: "02",
                                        title: "Associate Statistician (A.Stat.)",
                                        desc: "Awarded automatically after two continuous years of membership.",
                                        time: "Year 2",
                                    },
                                    {
                                        step: "03",
                                        title: "Examination Associate",
                                        desc: "Begin the sequential Professional Examinations with 5+ years practical experience.",
                                        time: "Year 2+",
                                    },
                                    {
                                        step: "04",
                                        title: "Chartered Statistician (C.Stat.)",
                                        desc: "Awarded upon successful completion of the Graduate Certificate examinations.",
                                        time: "Goal",
                                    },
                                ].map(({ step, title, desc, time }, i) => (
                                    <Reveal key={step} custom={i * 0.1}>
                                        <div
                                            className={`flex gap-8 py-8 border-b ${dark ? "border-white/5" : "border-green-100"
                                                } last:border-0`}
                                        >
                                            <div className="relative shrink-0 w-12 flex flex-col items-center">
                                                <div className="w-12 h-12 bg-[#22c55e] flex items-center justify-center">
                                                    <span className="text-white font-black text-xs">{step}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-2">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3
                                                        className={`text-base font-black ${dark ? "text-white" : "text-[#0a1a10]"
                                                            }`}
                                                    >
                                                        {title}
                                                    </h3>
                                                    <span
                                                        className={`text-[10px] font-bold px-2 py-0.5 ${dark
                                                            ? "bg-[#22c55e]/15 text-[#22c55e]"
                                                            : "bg-green-100 text-green-700"
                                                            }`}
                                                    >
                                                        {time}
                                                    </span>
                                                </div>
                                                <p
                                                    className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/60"
                                                        }`}
                                                >
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <FeesSection theme={theme} />
            </div>
            <CTAStrip />
        </>
    );
}