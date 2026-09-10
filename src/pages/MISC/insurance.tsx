import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HouseIcon, ShieldIcon, HeartIcon, TrendUpIcon, UserCirclePlusIcon, StarIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { fadeUp } from "@/animate";
import RoutePath from "@/routes";
import CTAStrip from "@/components/cta";
import { Breadcrumb, type BreadcrumbType } from "@/components/Hero";


function AnimatedSection({
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


// ─── Hero ─────────────────────────────────────────────────────────────────────

function PageHero() {
    const crumbles: BreadcrumbType[] = [
        { label: "Home", href: "/", icon: HouseIcon },
        { label: "Group Insurance Scheme", href: RoutePath.Insurance, icon: ShieldIcon },
    ];
    return (
        <div className="relative overflow-hidden bg-[#0b1120] border-b border-white/10 min-h-[340px] flex items-end">
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
                            className="w-fit border-[#2cba8e]/50 text-[#3dd9a8] bg-[#1a7a5e]/15 text-xs tracking-widest uppercase px-3 py-1"
                        >
                            Member Benefits
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
                    >
                        CISON Group
                        <br />
                        <span className="text-[#3dd9a8]">Insurance Scheme</span>
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
                    is committed to the professional development and welfare of its members. The{" "}
                    <strong className="text-foreground font-bold">
                        CISON Group Insurance Scheme
                    </strong>{" "}
                    provides members with access to affordable insurance protection through a
                    collective arrangement.
                </p>
            </AnimatedSection>
        </section>
    );
}

// ─── Key Benefits ─────────────────────────────────────────────────────────────

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

function BenefitCard({ icon, title, description, index }: BenefitCardProps) {
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
                <div className="w-12 h-12 rounded-xl dark:bg-[#0d1e14] border border-[#1a7a5e]/40 flex items-center justify-center text-[#3dd9a8] group-hover:bg-[#1a7a5e]/20 transition-colors">
                    {icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}

function BenefitsSection() {
    const benefits = [
        {
            icon: <TrendUpIcon className="w-5 h-5" />,
            title: "Affordable Insurance Protection",
            description:
                "Members can access insurance coverage at competitive rates through the strength of a group scheme, potentially making protection more affordable than individual policies.",
        },
        {
            icon: <UserCirclePlusIcon className="w-5 h-5" />,
            title: "Group Life Assurance",
            description:
                "In the unfortunate event of the death of an insured member, a \u20A6500,000.00 life insurance cover will be paid to a nominated beneficiary. All who are covered would be required to nominate such beneficiary.",
        },
        {
            icon: <HeartIcon className="w-5 h-5" />,
            title: "Enhanced Member Welfare",
            description:
                "The scheme demonstrates CISON\u2019s commitment to the welfare of its members by providing practical financial protection alongside professional membership benefits.",
        },
        {
            icon: <StarIcon className="w-5 h-5" />,
            title: "Greater Value for CISON Membership",
            description:
                "The insurance scheme adds another valuable benefit to CISON membership, giving members access to collective insurance solutions tailored to their professional community.",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <AnimatedSection className="mb-12">
                <Badge
                    variant="outline"
                    className="w-fit border-[#1a7a5e]/50 text-[#3dd9a8] dark:bg-[#0d1e14] text-xs tracking-widest uppercase mb-4"
                >
                    Key Benefits
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    Why Join the Scheme
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                    <BenefitCard key={benefit.title} {...benefit} index={i} />
                ))}
            </div>
        </section>
    );
}

// ─── Highlight Banner ─────────────────────────────────────────────────────────

function HighlightBanner() {
    return (
        <AnimatedSection>
            <div className="relative overflow-hidden bg-[#0d1e14] border-y border-[#1a7a5e]/30 py-16">
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, #3dd9a8 0px, #3dd9a8 1px, transparent 1px, transparent 24px)",
                    }}
                    aria-hidden="true"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-3xl mx-auto px-8 text-center"
                >
                    <ShieldIcon className="w-12 h-12 text-[#3dd9a8] mx-auto mb-6" />
                    <p className="text-2xl md:text-3xl font-bold text-white italic leading-snug">
                        &ldquo;Professional Excellence, Member Protection, Collective Strength.&rdquo;
                    </p>
                    <div className="mt-5 flex justify-center">
                        <span className="inline-block w-12 h-0.5 bg-[#3dd9a8] rounded-full" />
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

// ─── Life Assurance Detail ────────────────────────────────────────────────────

function LifeAssuranceSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <div className="grid md:grid-cols-2 gap-14 items-start">
                <AnimatedSection className="flex flex-col gap-6">
                    <Badge
                        variant="outline"
                        className="w-fit border-[#1a7a5e]/50 dark:text-[#3dd9a8] dark:bg-[#0d1e14] text-xs tracking-widest uppercase"
                    >
                        Group Life Assurance
                    </Badge>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        Cover for Your Loved Ones
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The CISON Group Insurance Scheme includes a Group Life Assurance cover
                        for all insured members. In the unfortunate event of the death of an
                        insured member, a <strong className="text-foreground">\u20A6500,000.00</strong> life
                        insurance cover will be paid to a nominated beneficiary.
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        All members covered under the scheme are required to nominate a
                        beneficiary to ensure that the benefit is paid to the right person.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={RoutePath.ContactUs}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a7a5e] hover:bg-[#155f4a] text-white text-sm font-semibold rounded-md transition-colors"
                        >
                            Contact Us for Details
                        </a>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={1}>
                    <div className="rounded-2xl border border-[#1a7a5e]/30 bg-[#0d1e14]/60 p-8 flex flex-col gap-4">
                        <span className="text-xs text-[#3dd9a8] tracking-widest uppercase">
                            Scheme Details
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                            {[
                                ["Scheme Type", "Group Insurance"],
                                ["Cover", "Group Life Assurance"],
                                ["Benefit Amount", "\u20A6500,000.00 per member"],
                                ["Beneficiary", "Nominated by each member"],
                                ["Eligibility", "All CISON members"],
                                ["Administered by", "CISON"],
                            ].map(([k, v]) => (
                                <li
                                    key={k}
                                    className="flex justify-between items-start gap-4 border-b border-border/40 pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="font-semibold text-foreground/70 whitespace-nowrap">
                                        {k}
                                    </span>
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

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function InsurancePage() {
    return (
        <div id="main-content" className="min-h-screen bg-background text-foreground font-sans">
            <PageHero />
            <main role="main">
                <IntroSection />
                <Separator className="opacity-20" />
                <BenefitsSection />
                <Separator className="opacity-20" />
                <HighlightBanner />
                <Separator className="opacity-20" />
                <LifeAssuranceSection />
                <CTAStrip />
            </main>
        </div>
    );
}
