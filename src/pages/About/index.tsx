
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HouseIcon, EyeIcon, TargetIcon, BookOpenIcon, IdentificationBadgeIcon } from "@phosphor-icons/react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fadeUp } from "@/animate";
import RoutePath from "@/routes";
import CTAStrip from "@/components/cta";
import { Breadcrumb, type BreadcrumbType } from "@/components/Hero";
import CompressedCISONACTS from "@/assets/pdf/CISON-Act-2022-compressed.pdf";


export function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={delay}
            variants={fadeUp}
            className={className}
        >
            {children}
        </motion.div>
    );
}




function PageHero() {

    const crumbles: BreadcrumbType[] = [
        {
            label: "Home",
            href: '/',
            icon: HouseIcon
        },
        {
            label: "About CISON",
            href: RoutePath.AboutUs,
            icon: IdentificationBadgeIcon
        },
    ];
    return (
        <div className="relative overflow-hidden bg-[#0b1120] border-b border-white/10 min-h-[340px] flex items-end">
            {/* Decorative skewed bars */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[-12%] top-0 h-full w-[32%] bg-[#1a7a5e]/25 blur-3xl origin-top"
                    style={{ transform: "skewX(-16deg)" }}
                />
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[18%] top-0 h-full w-[22%] bg-[#1a7a5e]/12 blur-2xl origin-top"
                    style={{ transform: "skewX(-16deg)" }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#0f2236]/60 to-transparent"
                />
                {/* grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto w-full px-6 md:px-14 pt-10 pb-16 flex flex-col gap-7">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumb Elements={crumbles} />
                </motion.div>

                <div className="flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Badge
                            variant="outline"
                            className="w-fit border-[#2cba8e]/50 text-[#3dd9a8] bg-[#1a7a5e]/15  text-xs tracking-widest uppercase px-3 py-1"
                        >
                            About CISON
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
                    >
                        Our Vision, Mission,
                        <br />
                        <span className="text-[#3dd9a8]">and History</span>
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <AnimatedSection className="max-w-3xl">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-bold">
                        The Chartered Institute of Statisticians of Nigeria (CISON)
                    </strong>{" "}
                    is the successor statistical body to the{" "}
                    <a
                        href="https://nsang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a7a5e] hover:text-[#3dd9a8] font-semibold underline-offset-4 hover:underline transition-colors"
                    >
                        Nigerian Statistical Association (NSA)
                    </a>
                    .
                </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-3xl mt-6" delay={1}>
                <p className="text-base text-muted-foreground leading-relaxed">
                    The NSA was established in 1976 as a non-profit making professional
                    body comprising of Statisticians, Economists, Planners,
                    Econometricians, Demographers, Analysts and Corporate organizations
                    with interest in Statistics. The Association was committed to the
                    development of statistical theory and practice in Nigeria. Successive
                    Governing Councils of the NSA advocated for an Institute like CISON
                    responsible for the accreditation of statisticians in the country.
                    Consequently, CISON was established to determine what standards of
                    knowledge and skills are to be attained by persons seeking to become
                    members of the Institute.
                </p>
            </AnimatedSection>
        </section>
    );
}

// ─── Quote Banner ─────────────────────────────────────────────────────────────

function QuoteBanner() {
    return (
        <AnimatedSection>
            <div className="relative overflow-hidden bg-[#0d1e14] border-y border-[#1a7a5e]/30 py-14">
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, #3dd9a8 0px, #3dd9a8 1px, transparent 1px, transparent 24px)",
                    }}
                    aria-hidden="true"
                />
                <motion.blockquote
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-3xl mx-auto px-8 text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-white italic leading-snug">
                        &ldquo;Statistical Science, Knowledge and Professionalism&rdquo;
                    </p>
                    <div className="mt-5 flex justify-center">
                        <span className="inline-block w-12 h-0.5 bg-[#3dd9a8] rounded-full" />
                    </div>
                </motion.blockquote>
            </div>
        </AnimatedSection>
    );
}

// ─── Mission / Vision / Values ────────────────────────────────────────────────

interface MVVCardProps {
    label: string;
    icon: React.ReactNode;
    quote: string;
    values?: string[];
    index: number;
}

function MVVCard({ label, icon, quote, values, index }: MVVCardProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 border border-border rounded-2xl p-7 bg-card hover:border-[#1a7a5e]/60 transition-colors duration-300 group"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl dark:bg-[#0d1e14] border border-[#1a7a5e]/40 flex items-center justify-center text-[#3dd9a8] group-hover:bg-[#1a7a5e]/20 transition-colors">
                    {icon}
                </div>
                <span className="text-xs  tracking-widest uppercase text-[#3dd9a8]">
                    {label}
                </span>
            </div>

            {values ? (
                <ul className="flex flex-col gap-2 mt-1">
                    {values.map((v) => (
                        <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3dd9a8] flex-shrink-0" />
                            <span className="font-semibold text-foreground">{v}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {quote}
                </p>
            )}
        </motion.div>
    );
}

function MVVSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MVVCard
                    index={0}
                    label="Our Mission"
                    icon={<TargetIcon className="w-5 h-5" />}
                    quote='"To advance statistical science and practice in Nigeria through professional excellence and innovation."'
                />
                <MVVCard
                    index={1}
                    label="Our Vision"
                    icon={<EyeIcon className="w-5 h-5" />}
                    quote="'To be Nigeria's leading professional body for statisticians, driving excellence and impact in statistical practice.'"
                />
                <MVVCard
                    index={2}
                    label="Our Core Values"
                    icon={<BookOpenIcon className="w-5 h-5" />}
                    quote=""
                    values={["Integrity", "Excellence", "Service"]}
                />
            </div>
        </section>
    );
}

// ─── History Timeline ─────────────────────────────────────────────────────────

const timelineEvents = [
    {
        year: "1976",
        label: "NSA Founded",
        body: "NSA was established in 1976 as a non-profit making professional body comprising of Statisticians, Economists, Planners, Econometricians, Demographers, Analysts and Corporate organizations with interest in Statistics.",
        left: true,
    },
    {
        year: "2001",
        label: "Steps towards professionalization",
        body: "It was not until 2001 that the first concrete steps were taken towards the establishment of a professional body for the accreditation of members of the NSA, under the leadership of Professor O. S. Adegboye, who launched CISON on the occasion of the Silver Jubilee of NSA.",
        left: false,
    },
    {
        year: "2007",
        label: "Public Hearing on CISON",
        body: "The Governing Council of the NSA, under Christopher M. Okafor as President, organized a one-day sensitization workshop on the proposed Act of the CISON on August 20, 2007, at Hill Station Hotel, Jos, Plateau State.",
        left: true,
    },
    {
        year: "2023",
        label: "The CISON Act",
        body: 'Dr. Ebuh and his team pursued the passage of the CISON Bill, culminating in the "Chartered Institute of Statisticians of Nigeria (Establishment) Act, 2022" signed into law by President Muhammadu Buhari on February 16, 2023, published in the Federal Republic of Nigeria Official Gazette No. 230, Vol. 110.',
        left: false,
    },
];

function TimelineEvent({
    year,
    label,
    body,
    left,
    index,
}: {
    year: string;
    label: string;
    body: string;
    left: boolean;
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: left ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`grid md:grid-cols-2 gap-0 items-start ${left ? "" : "direction-rtl"}`}
        >
            {left ? (
                <>
                    {/* Year col */}
                    <div className="flex flex-col items-end pr-10 pb-10 md:pb-0 border-r border-[#1a7a5e]/30 relative">
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                            className="absolute right-0 top-1 w-3 h-3 rounded-full bg-[#3dd9a8] translate-x-1/2 ring-4 ring-[#0b1120]"
                        />
                        <span className="text-4xl font-black text-[#3dd9a8] ">
                            {year}
                        </span>
                        <span className="text-sm font-semibold text-foreground mt-1 text-right">
                            {label}
                        </span>
                    </div>
                    {/* Body col */}
                    <div className="pl-10 pb-12">
                        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Body col */}
                    <div className="pr-10 pb-12 text-right border-r border-[#1a7a5e]/30 relative">
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                            className="absolute right-0 top-1 w-3 h-3 rounded-full bg-[#3dd9a8] translate-x-1/2 ring-4 ring-[#0b1120]"
                        />
                        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                    {/* Year col */}
                    <div className="pl-10 pb-10 md:pb-0 flex flex-col items-start">
                        <span className="text-4xl font-black text-[#3dd9a8] ">
                            {year}
                        </span>
                        <span className="text-sm font-semibold text-foreground mt-1">
                            {label}
                        </span>
                    </div>
                </>
            )}
        </motion.div>
    );
}

function HistorySection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <AnimatedSection className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    Our History
                </h2>
            </AnimatedSection>

            <div className="flex flex-col">
                {timelineEvents.map((e, i) => (
                    <TimelineEvent key={e.year} {...e} index={i} />
                ))}
            </div>

            <AnimatedSection className="mt-8">
                <Button
                    variant="outline"
                    className="border-[#1a7a5e]/60 text-[#3dd9a8] hover:bg-[#1a7a5e]/15 hover:text-[#3dd9a8] hover:border-[#3dd9a8]/60  tracking-wide"
                >
                    <a href="https://cison.org.ng/about/our-history/">
                        Read the full History →
                    </a>
                </Button>
            </AnimatedSection>
        </section>
    );
}

// ─── CISON Bill ───────────────────────────────────────────────────────────────

function CISONBillSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <div className="grid md:grid-cols-2 gap-14 items-start">
                <AnimatedSection className="flex flex-col gap-6">
                    <Badge
                        variant="outline"
                        className="w-fit border-[#1a7a5e]/50 dark:text-[#3dd9a8] dark:bg-[#0d1e14]  text-xs tracking-widest uppercase"
                    >
                        Chartered by Legislation
                    </Badge>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        The CISON Bill
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The CISON Bill was passed into an Act, the{" "}
                        <em>
                            "Chartered Institute of Statisticians of Nigeria (Establishment)
                            Act, 2022"
                        </em>{" "}
                        and signed into law by His Excellency, Muhammadu Buhari, GCFR on
                        February 16, 2023. The CISON Act has since been published in the
                        Federal Republic of Nigeria Official Gazette No. 230, Vol. 110 of
                        1st March, 2023 in the City of Lagos. Under Government Notice No.
                        83 it is published as Act No. 38 at pages A761–788. With this, NSA
                        ceased to exist but transited to the Chartered Institute of
                        Statisticians of Nigeria (CISON).
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button
                            className="dark:bg-[#1a7a5e] hover:bg-[#155f4a] dark:text-white  tracking-wide hover:text-white rounded-md outline-8 outline-emerald-400"
                            variant="ghost"
                        >
                            <a
                                href={CompressedCISONACTS}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row gap-2 dark:bg-[#1a7a5e] hover:bg-[#155f4a] dark:text-white  tracking-wide"
                            >
                                <BookOpenIcon className="flex flex-row" />
                                Get the CISON
                            </a>
                        </Button>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={1}>
                    <div className="rounded-2xl border border-[#1a7a5e]/30 bg-[#0d1e14]/60 p-8 flex flex-col gap-4">
                        <span className="text-xs  text-[#3dd9a8] tracking-widest uppercase">
                            Key Facts
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                            {[
                                ["Date signed", "16 February 2023"],
                                ["Signed by", "President Muhammadu Buhari, GCFR"],
                                ["Gazette No.", "230, Vol. 110 — 1st March 2023"],
                                ["Act No.", "38 at pages A761–788"],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between items-start gap-4 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <span className="font-semibold text-foreground/70 whitespace-nowrap">{k}</span>
                                    <span className="text-right">{v}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Leadership ───────────────────────────────────────────────────────────────

const leaders = [
    {
        name: "Dr. Godday Ebuh",
        role: "President and Chairman Governing Council",
        href: "https://cison.org.ng/our-people/dr-godday-ebuh/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Dr-Godday-Uwawunkoye-Ebuh-President-CISON.webp",
    },
    {
        name: "Prof. S. U. Gulumbe",
        role: "Vice-President, CISON",
        href: "https://cison.org.ng/our-people/prof-s-u-gulumbe/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/10/Prof.-S.-U.-Gulumbe.webp",
    },
];

function LeaderCard({
    name,
    role,
    href,
    img,
    index,
}: {
    name: string;
    role: string;
    href: string;
    img: string;
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.a
            ref={ref}
            href={href}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border hover:border-[#1a7a5e]/60 bg-card transition-colors duration-300"
        >
            <div className="overflow-hidden aspect-[4/5] bg-muted">
                <motion.img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className="p-5 flex flex-col gap-1">
                <h3 className="font-bold text-foreground group-hover:text-[#3dd9a8] transition-colors">
                    {name}
                </h3>
                <p className="text-xs text-muted-foreground">{role}</p>
            </div>
        </motion.a>
    );
}

function LeadershipSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <AnimatedSection className="mb-3">
                <Badge
                    variant="outline"
                    className="w-fit border-[#1a7a5e]/50 text-[#3dd9a8] dark:bg-[#0d1e14]  text-xs tracking-widest uppercase "
                >
                    Meet our leaders
                </Badge>
            </AnimatedSection>

            <AnimatedSection className="mb-10" delay={0.5}>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                    CISON Leadership
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {leaders.map((l, i) => (
                    <LeaderCard key={l.name} {...l} index={i} />
                ))}
            </div>

            <AnimatedSection className="mt-10">
                <Button
                    variant="outline"
                    className="border-[#1a7a5e]/60 text-[#3dd9a8] hover:bg-[#1a7a5e]/15  tracking-wide"
                >
                    <a href="https://cison.org.ng/our-people/">View CISON Leadership →</a>
                </Button>
            </AnimatedSection>
        </section>
    );
}
// ─── Page Root ────────────────────────────────────────────────────────────────

export default function AboutCISONPage() {
    return (
        <div id="main-content" className="min-h-screen bg-background text-foreground font-sans">
            <SEO title="About CISON" description="About CISON as a statistical association" canonicalUrl={RoutePath.About} />
            <PageHero />
            <main role="main">
                <IntroSection />
                <Separator className="opacity-20" />
                <QuoteBanner />
                <MVVSection />
                <Separator className="opacity-20" />
                <HistorySection />
                <Separator className="opacity-20" />
                <CISONBillSection />
                <Separator className="opacity-20" />
                <LeadershipSection />
                <CTAStrip />
            </main>
        </div>
    );
}