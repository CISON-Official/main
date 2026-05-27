import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    BookOpen,
    GraduationCap,
    Certificate,
    Medal,
    UserCircleCheck,
    ArrowRight,
    ChartBar,
    Globe,
    Buildings,
    CheckCircle,
    ArrowSquareOut,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { Reveal } from "@/animate";
import CTAStrip from "@/components/cta";

// ── Certificate Levels ────────────────────────────────────────────────────────
const levels = [
    {
        code: "OC",
        label: "Foundation Level",
        title: "Ordinary Certificate",
        icon: Certificate,
        color: "#22c55e",
        audience: "Entry-level professionals & career changers",
        description:
            "Designed for those with little or no formal statistical training. The Ordinary Certificate provides the foundational knowledge of applied statistics required to enter the profession, structured into two modules that may be taken independently.",
        highlights: [
            "2 modules — sittable separately or together",
            "Each module: 3-hour written paper",
            "Unlimited 'shelf life' for module passes",
            "Open to all educational backgrounds",
        ],
    },
    {
        code: "HC",
        label: "Intermediate Level",
        title: "Higher Certificate",
        icon: Medal,
        color: "#16a34a",
        audience: "Graduates converting from other disciplines",
        description:
            "Equivalent to the first year of a typical university statistics course — with some topics extending into second-year territory. Ideal for those converting to statistics from other disciplines who seek structured progression.",
        highlights: [
            "8 modules — 1.5-hour paper each",
            "Pass any 6 including modules 1–4",
            "Electives from modules 5–8",
            "Recognised by Nigerian universities",
        ],
    },
    {
        code: "GC",
        label: "Graduate Level",
        title: "Graduate Certificate",
        icon: GraduationCap,
        color: "#15803d",
        audience: "Candidates targeting C.Stat. designation",
        description:
            "Equivalent to a good university degree in statistics. Accepted by Nigerian universities as satisfying MSc entry requirements. Upon completion, holders are eligible to apply for the Chartered Statistician (C.Stat.) designation.",
        highlights: [
            "5 modules — 3-hour paper, 5 of 8 questions",
            "Module marks banked indefinitely",
            "Nationally & internationally recognised",
            "Gateway to C.Stat. professional status",
        ],
    },
];

// ── Curriculum Aims ───────────────────────────────────────────────────────────
const aims = [
    {
        icon: BookOpen,
        title: "Comprehensive Applied Statistics",
        body: "The syllabus leads candidates through applied statistical theory and practice at three progressive levels, each building on the previous.",
    },
    {
        icon: Globe,
        title: "National & International Recognition",
        body: "The Graduate Certificate is of such quality as to be widely recognised by employers in the public and private sectors, both nationally and internationally.",
    },
    {
        icon: Buildings,
        title: "MSc Entry Qualification",
        body: "Successful completion of the Graduate Certificate satisfies the entry requirements for admission to MSc courses in Statistics at Nigerian universities.",
    },
    {
        icon: UserCircleCheck,
        title: "Aligned with RSS Standards",
        body: "The curriculum is developed along the lines of the Royal Statistical Society's examinations, ensuring internationally benchmarked professional education.",
    },
    {
        icon: ChartBar,
        title: "Accessible to All Backgrounds",
        body: "Suitable for career changers and those with no formal statistical training — anyone with diligence and the requisite background can progress through the sequential levels.",
    },
    {
        icon: CheckCircle,
        title: "Fixed Annual Examination Cycle",
        body: "Examinations are held at a fixed month each year as determined by Council, giving candidates a clear, predictable schedule to plan their studies.",
    },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ theme }: { theme:string }) {
    const dark = theme === "dark";
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
                }`}
        >
            {/* dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: dark
                        ? "radial-gradient(circle, rgba(34,197,94,0.10) 1px, transparent 1px)"
                        : "radial-gradient(circle, rgba(21,128,61,0.09) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            {/* glow */}
            <div
                className={`absolute -top-32 -left-32 w-[55vw] h-[55vw] rounded-full pointer-events-none blur-[140px] ${dark ? "bg-green-900/25" : "bg-green-200/50"
                    }`}
            />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full"
                style={{ y, opacity }}
            >
                <div className="max-w-3xl">
                    <Reveal custom={0}>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-px bg-[#22c55e]" />
                            <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                                Curriculum Development
                            </span>
                        </div>
                    </Reveal>

                    <Reveal custom={1}>
                        <h1
                            className={`text-5xl md:text-7xl font-black leading-[0.92] tracking-tight mb-6 ${dark ? "text-white" : "text-[#0a1a10]"
                                }`}
                        >
                            Curriculum for
                            <br />
                            <span className="text-[#22c55e]">Professional</span>
                            <br />
                            Examinations
                        </h1>
                    </Reveal>

                    <Reveal custom={2}>
                        <p
                            className={`text-base md:text-lg leading-relaxed max-w-2xl mb-10 ${dark ? "text-white/55" : "text-green-900/60"
                                }`}
                        >
                            Developed along the lines of the RSS examinations, the CISON curriculum
                            provides professional statistical education at three progressive levels —
                            accessible to career changers, self-taught practitioners, and those
                            seeking to formalise their expertise.
                        </p>
                    </Reveal>

                    <Reveal custom={3}>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#levels"
                                className="group inline-flex items-center gap-2 bg-[#22c55e] text-white font-bold px-6 py-3 text-sm hover:bg-[#16a34a] transition-colors duration-300"
                            >
                                Explore the Curriculum
                                <ArrowRight
                                    size={14}
                                    weight="bold"
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                            <a
                                href="https://cison.org.ng/members/wp-login.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 border font-bold px-6 py-3 text-sm transition-colors duration-300 ${dark
                                        ? "border-white/20 text-white/70 hover:border-[#22c55e] hover:text-[#22c55e]"
                                        : "border-green-300 text-green-800 hover:border-[#22c55e] hover:text-[#22c55e]"
                                    }`}
                            >
                                Begin the Process
                                <ArrowSquareOut size={13} weight="bold" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* floating badge row */}
                <div className="mt-16 flex flex-wrap gap-4">
                    {[
                        { n: "3", sub: "Certificate Levels" },
                        { n: "RSS", sub: "Aligned Standard" },
                        { n: "MSc", sub: "Entry Qualification" },
                    ].map(({ n, sub }, i) => (
                        <Reveal key={sub} custom={0.4 + i * 0.1}>
                            <div
                                className={`flex items-center gap-4 px-5 py-4 border-l-4 border-[#22c55e] ${dark ? "bg-white/5" : "bg-white shadow-sm shadow-green-100"
                                    }`}
                            >
                                <span
                                    className={`text-2xl font-black ${dark ? "text-white" : "text-[#0a1a10]"}`}
                                >
                                    {n}
                                </span>
                                <span
                                    className={`text-xs leading-tight ${dark ? "text-white/45" : "text-green-900/50"
                                        }`}
                                >
                                    {sub}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </motion.div>

            <div
                className={`absolute bottom-0 inset-x-0 h-28 ${dark
                        ? "bg-linear-to-t from-[#071209] to-transparent"
                        : "bg-linear-to-t from-[#f0fdf4] to-transparent"
                    }`}
            />
        </section>
    );
}

// ── Introduction Strip ────────────────────────────────────────────────────────
function IntroStrip({ theme }: { theme:string }) {
    const dark = theme === "dark";
    return (
        <section
            className={`py-20 transition-colors duration-500 ${dark ? "bg-[#0a1a10]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
                    <Reveal>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-px bg-[#22c55e]" />
                            <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                                Overview
                            </span>
                        </div>
                        <h2
                            className={`text-3xl md:text-4xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                                }`}
                        >
                            A Sequential Path to Professional Excellence
                        </h2>
                    </Reveal>

                    <Reveal custom={1}>
                        <div className={`space-y-4 text-sm leading-relaxed ${dark ? "text-white/55" : "text-green-900/65"}`}>
                            <p>
                                The CISON curriculum for professional examinations is developed along the
                                lines of the Royal Statistical Society's (RSS) examinations. It enables
                                prospective candidates to acquire professional statistical education at
                                the foundation, intermediate, and graduate levels.
                            </p>
                            <p>
                                The courses are also suitable for those who wish to convert to statistics
                                from other disciplines, and for those who have had little or no formal
                                statistical training — but who, through diligence and with the requisite
                                background, can progress through a sequential level of training and
                                examinations to acquire the relevant professional certificates.
                            </p>
                            <p>
                                The highest examinable qualification — the CISON Graduate Certificate —
                                is of such quality as to be widely recognised and respected, both
                                nationally and internationally, by employers in the public and private
                                sectors, and is a veritable entry requirement for admission to an MSc
                                course in Statistics.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// ── Certificate Level Card ────────────────────────────────────────────────────
function LevelCard({
    level,
    theme,
    reverse,
}: {
    level: (typeof levels)[0];
    theme:string;
    index: number;
    reverse: boolean;
}) {
    const dark = theme === "dark";
    const Icon = level.icon;

    return (
        <Reveal custom={0}>
            <div
                className={`grid md:grid-cols-2 gap-0 border transition-colors duration-500 ${dark ? "border-white/10 bg-[#0a1a10]" : "border-green-100 bg-white shadow-sm"
                    }`}
            >
                {/* colored panel */}
                <div
                    className={`p-10 md:p-14 flex flex-col justify-between ${reverse ? "md:order-2" : ""}`}
                    style={{ background: `${level.color}10`, borderRight: `1px solid ${level.color}25` }}
                >
                    <div>
                        <div
                            className="w-14 h-14 flex items-center justify-center mb-6"
                            style={{ background: `${level.color}20` }}
                        >
                            <Icon size={28} weight="duotone" style={{ color: level.color }} />
                        </div>

                        <div
                            className="inline-block text-[10px] tracking-[0.2em] uppercase font-black px-3 py-1 mb-4"
                            style={{ background: `${level.color}20`, color: level.color }}
                        >
                            {level.label}
                        </div>

                        <h3
                            className={`text-3xl md:text-4xl font-black leading-tight mb-3 ${dark ? "text-white" : "text-[#0a1a10]"
                                }`}
                        >
                            {level.title}
                        </h3>

                        <p
                            className={`text-xs font-semibold mb-6 ${dark ? "text-white/40" : "text-green-900/45"
                                }`}
                        >
                            {level.audience}
                        </p>

                        <p
                            className={`text-sm leading-relaxed ${dark ? "text-white/55" : "text-green-900/65"
                                }`}
                        >
                            {level.description}
                        </p>
                    </div>

                    <div
                        className="mt-8 text-5xl font-black opacity-10 select-none"
                        style={{ color: level.color }}
                    >
                        {level.code}
                    </div>
                </div>

                {/* highlights panel */}
                <div
                    className={`p-10 md:p-14 flex flex-col justify-center ${reverse ? "md:order-1" : ""
                        } ${dark ? "bg-[#0d1a12]" : "bg-[#f8fdf8]"}`}
                >
                    <p
                        className={`text-[10px] tracking-[0.2em] uppercase font-black mb-6 ${dark ? "text-white/30" : "text-green-900/40"
                            }`}
                    >
                        Key Details
                    </p>
                    <ul className="space-y-4">
                        {level.highlights.map((hl, i) => (
                            <motion.li
                                key={hl}
                                initial={{ opacity: 0, x: reverse ? -16 : 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                                className="flex items-start gap-3"
                            >
                                <div
                                    className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5"
                                    style={{ background: `${level.color}20` }}
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: level.color }}
                                    />
                                </div>
                                <span
                                    className={`text-sm leading-snug ${dark ? "text-white/65" : "text-green-900/70"
                                        }`}
                                >
                                    {hl}
                                </span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <a
                            href="https://cison.org.ng/members/wp-login.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-bold text-sm transition-colors duration-300"
                            style={{ color: level.color }}
                        >
                            Begin at this level
                            <ArrowRight
                                size={14}
                                weight="bold"
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

// ── Aims Grid ─────────────────────────────────────────────────────────────────
function AimsGrid({ theme }: { theme:string }) {
    const dark = theme === "dark";
    return (
        <section
            className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <Reveal className="mb-14">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-px bg-[#22c55e]" />
                        <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                            Curriculum Aims
                        </span>
                    </div>
                    <h2
                        className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                            }`}
                    >
                        What the Programme
                        <br />
                        Sets Out to Achieve
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#22c55e]/15">
                    {aims.map(({ icon: AimIcon, title, body }, i) => (
                        <Reveal key={title} custom={i * 0.08}>
                            <div
                                className={`p-8 h-full group hover:bg-[#22c55e]/5 transition-colors duration-300 ${dark ? "bg-[#071209]" : "bg-white"
                                    }`}
                            >
                                <div
                                    className={`w-10 h-10 flex items-center justify-center mb-5 ${dark ? "bg-[#22c55e]/15" : "bg-green-100"
                                        }`}
                                >
                                    <AimIcon
                                        size={20}
                                        weight="duotone"
                                        className="text-[#22c55e]"
                                    />
                                </div>
                                <h4
                                    className={`text-sm font-black mb-3 ${dark ? "text-white" : "text-[#0a1a10]"
                                        }`}
                                >
                                    {title}
                                </h4>
                                <p
                                    className={`text-xs leading-relaxed ${dark ? "text-white/45" : "text-green-900/55"
                                        }`}
                                >
                                    {body}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}


// ── Root Page ─────────────────────────────────────────────────────────────────
export default function CisonCurriculumPage() {
    const {isDark, theme} = useTheme();
    let dark = isDark;

    return (
        <>

            <div className={`transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-white"}`}>
                
                <Hero theme={theme} />
                <IntroStrip theme={theme} />

                {/* Certificate Levels */}
                <section
                    id="levels"
                    className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
                        }`}
                >
                    <div className="max-w-6xl mx-auto px-6 md:px-12">
                        <Reveal className="mb-14">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-px bg-[#22c55e]" />
                                <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                                    Three Levels
                                </span>
                            </div>
                            <h2
                                className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                                    }`}
                            >
                                Certificate Programmes
                            </h2>
                            <p
                                className={`mt-4 max-w-xl text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/55"
                                    }`}
                            >
                                Each level builds on the last, forming a clear, structured path from
                                foundational knowledge to Chartered Statistician status.
                            </p>
                        </Reveal>

                        <div className="space-y-6">
                            {levels.map((level, i) => (
                                <LevelCard
                                    key={level.code}
                                    level={level}
                                    theme={theme}
                                    index={i}
                                    reverse={i % 2 !== 0}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <AimsGrid theme={theme} />
                <CTAStrip />
                
            </div>
        </>
    );
}