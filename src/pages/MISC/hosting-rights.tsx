import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HouseIcon, EnvelopeIcon, CalendarBlankIcon, MapPinIcon, UsersThreeIcon, VanIcon, MegaphoneIcon, MailboxIcon } from "@phosphor-icons/react";
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
        { label: "Hosting Rights", href: RoutePath.HostingRights, icon: MapPinIcon },
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
                            State Chapters
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
                    >
                        Invitation to Host
                        <br />
                        <span className="text-[#3dd9a8]">CISON Conferences 2027–2030</span>
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    return (
        <AnimatedSection className="max-w-6xl mx-auto px-6 md:px-14 pt-16">
            <div className="flex items-start gap-3 mb-6">
                <EnvelopeIcon className="w-6 h-6 text-[#3dd9a8] mt-1 shrink-0" />
                <div className="flex flex-col gap-4 max-w-3xl">
                    <p className="text-xs tracking-widest uppercase text-[#3dd9a8]">
                        Subject
                    </p>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                        INVITATION TO APPLY FOR HOSTING RIGHTS FOR CISON INTERNATIONAL
                        CONFERENCES, 2027&nbsp;–&nbsp;2030
                    </h2>
                </div>
            </div>
        </AnimatedSection>
    );
}

// ─── Conference Table ─────────────────────────────────────────────────────────

const conferenceYears = [
    { year: "2027", title: "4th CISON Pre-Conference Workshop and International Conference" },
    { year: "2028", title: "5th CISON Pre-Conference Workshop and International Conference" },
    { year: "2029", title: "6th CISON Pre-Conference Workshop and International Conference" },
    { year: "2030", title: "7th CISON Pre-Conference Workshop and International Conference" },
];

function ConferenceTableSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-14">
            <AnimatedSection className="max-w-3xl mb-10">
                <p className="text-base text-muted-foreground leading-relaxed">
                    The President and the Governing Council of the{" "}
                    <strong className="text-foreground font-bold">
                        Chartered Institute of Statisticians of Nigeria (CISON)
                    </strong>{" "}
                    are pleased to inform all State Chapters of the Institute that the window for
                    applications to host the Institute&rsquo;s International Conference and
                    Pre-Conference Workshop for the years 2027, 2028, 2029 and 2030 is now open.
                    Accordingly, interested State Chapters are hereby invited to submit their
                    expressions of interest to host the following editions:
                </p>
            </AnimatedSection>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-[#1a7a5e]/30"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-[#0d1e14] text-left">
                                <th className="px-6 py-4 text-[#3dd9a8] text-xs tracking-widest uppercase font-semibold w-32">
                                    Year
                                </th>
                                <th className="px-6 py-4 text-[#3dd9a8] text-xs tracking-widest uppercase font-semibold">
                                    Conference
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {conferenceYears.map((row, index) => (
                                <tr
                                    key={row.year}
                                    className={`border-t border-border/40 ${index % 2 === 0 ? "bg-card" : "bg-card/50"}`}
                                >
                                    <td className="px-6 py-4 font-mono font-bold text-[#3dd9a8]">
                                        {row.year}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-foreground">
                                        {row.title}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </section>
    );
}

// ─── Purpose ──────────────────────────────────────────────────────────────────

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

function InfoCard({ icon, title, description, index }: InfoCardProps) {
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

function PurposeSection() {
    const cards = [
        {
            icon: <CalendarBlankIcon className="w-5 h-5" />,
            title: "Equitable Opportunities",
            description:
                "The initiative is intended to provide State Chapters with equitable opportunities to host the Institute\u2019s flagship annual professional event, while allowing adequate time for strategic planning, resources mobilisation and stakeholder engagement, among others.",
        },
        {
            icon: <VanIcon className="w-5 h-5" />,
            title: "Showcase Professional Capacity",
            description:
                "Hosting the CISON International Conference provides a State Chapter with an important opportunity to showcase its professional capacity and strengthen institutional visibility.",
        },
        {
            icon: <UsersThreeIcon className="w-5 h-5" />,
            title: "Meaningful Engagement",
            description:
                "Hosting fosters meaningful engagement among statisticians, policymakers, academics, industry professionals and other stakeholders.",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <AnimatedSection className="mb-12">
                <Badge
                    variant="outline"
                    className="w-fit border-[#1a7a5e]/50 text-[#3dd9a8] dark:bg-[#0d1e14] text-xs tracking-widest uppercase mb-4"
                >
                    Purpose of the Hosting Arrangement
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    Why Host the CISON Conference
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <InfoCard key={card.title} {...card} index={i} />
                ))}
            </div>
        </section>
    );
}

// ─── Application ──────────────────────────────────────────────────────────────

function ApplicationSection() {
    return (
        <section className="border-t border-border">
            <div className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                <div className="grid md:grid-cols-2 gap-14 items-start">
                    <AnimatedSection className="flex flex-col gap-6">
                        <Badge
                            variant="outline"
                            className="w-fit border-[#1a7a5e]/50 dark:text-[#3dd9a8] dark:bg-[#0d1e14] text-xs tracking-widest uppercase"
                        >
                            Application for Hosting Rights
                        </Badge>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                            How to Apply
                        </h2>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            State Chapters wishing to host any of the above conferences are
                            requested to submit a formal{" "}
                            <strong className="text-foreground font-bold">expression of interest</strong>{" "}
                            to the Registrar, indicating their preferred year of hosting and
                            providing relevant information on their proposed arrangements and
                            capacity to host.
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Where more than one State Chapter expresses interest in a particular
                            year, the Governing Council shall study the applications and determine
                            the host after due considerations.
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The early opening of the hosting window is intended to ensure that
                            successful host chapters have sufficient lead time to commence
                            preparations and deliver conferences that meet the professional
                            standards and expectations of the Institute.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={1}>
                        <div className="rounded-2xl border border-[#1a7a5e]/30 bg-[#0d1e14]/60 p-8 flex flex-col gap-4">
                            <span className="text-xs text-[#3dd9a8] tracking-widest uppercase">
                                Application Summary
                            </span>
                            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                                {[
                                    ["Hosting Years", "2027, 2028, 2029 & 2030"],
                                    ["Applicants", "CISON State Chapters"],
                                    ["Submission", "Expression of interest to the Registrar"],
                                    ["Preferred Year", "Indicated in the application"],
                                    ["Decision", "Governing Council determination"],
                                    ["Submit via", "Contact CISON"],
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

                            <a
                                href={RoutePath.ContactUs}
                                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1a7a5e] hover:bg-[#155f4a] text-white text-sm font-semibold rounded-md transition-colors"
                            >
                                <MailboxIcon className="w-4 h-4" />
                                Submit Expression of Interest
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── Closing Quote ────────────────────────────────────────────────────────────

function ClosingSection() {
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
                    <MegaphoneIcon className="w-12 h-12 text-[#3dd9a8] mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-bold text-white italic leading-snug">
                        Thank you for your continued commitment to the
                        <br />
                        Chartered Institute of Statisticians of Nigeria (CISON).
                    </p>
                    <div className="mt-5 flex justify-center">
                        <span className="inline-block w-12 h-0.5 bg-[#3dd9a8] rounded-full" />
                    </div>
                </motion.blockquote>
            </div>
        </AnimatedSection>
    );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function HostingRightsPage() {
    return (
        <div id="main-content" className="min-h-screen bg-background text-foreground font-sans">
            <PageHero />
            <main role="main">
                <IntroSection />
                <ConferenceTableSection />
                <Separator className="opacity-20" />
                <PurposeSection />
                <Separator className="opacity-20" />
                <ApplicationSection />
                <ClosingSection />
                <CTAStrip />
            </main>
        </div>
    );
}