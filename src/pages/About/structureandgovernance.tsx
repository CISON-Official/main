import { Reveal } from "@/animate";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import SEO from "@/components/SEO";
import RoutePath from "@/routes";
import { Separator } from "@base-ui/react";
import { BookOpenIcon, BuildingIcon, DiamondsFourIcon, HouseIcon, IdentificationBadgeIcon, Shield, StackIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const councilMembers = [
    { role: "Minister responsible for Education", note: "or his representative" },
    { role: "Minister responsible for National Planning Commission", note: "or his representative" },
    { role: "Head of Service of the Federation", note: "or his representative" },
    { role: "Governor of the Central Bank of Nigeria", note: "or his representative" },
    { role: "Statistician General of the Federation", note: "or his representative" },
    { role: "Chairman, National Population Commission", note: "or his representative" },
    { role: "Eight persons elected by the Institute", note: "who must be Chartered members" },
    { role: "President and Vice President of the Institute", note: "" },
];


const pillars = [
    {
        icon: <BuildingIcon className="w-5 h-5" />,
        title: "Chapters",
        desc: "Organised in States and the Federal Capital Territory, serving as regional hubs for statistical professionals.",
    },
    {
        icon: <StackIcon className="w-5 h-5" />,
        title: "Sections",
        desc: "Subject-matter and industry-area interest groups covering statistical sub-disciplines and sectors.",
    },
    {
        icon: <BookOpenIcon className="w-5 h-5" />,
        title: "Committees",
        desc: "Coordinate meetings, publications, education, career development, and special-interest topics, subject to Council approval.",
    },
];

function GovernanceContent() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 flex flex-col gap-20">

            {/* ── Intro + Council composition ──────────────────────────── */}
            <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 items-start">
                {/* Left: intro text */}
                <Reveal className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-[#6dd249]" />
                        <h2
                            className="text-2xl md:text-3xl font-black text-foreground tracking-tight"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            Leadership
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            The structure and governance of CISON shall be as entrenched in the{" "}
                            <em className="text-foreground font-medium">Act</em> and any other Bye-Laws that might
                            be enacted from time to time. The Governing Council shall be the main governance body
                            of the Institute and shall be chaired by the President, who is also the Chairman of
                            Council.
                        </p>
                        <p>
                            The Council shall consist of a total of{" "}
                            <strong className="text-foreground">fifteen persons</strong>, who shall either be
                            Fellows or Associate members, appointed, or elected as the case may be.
                        </p>
                        <p>
                            In addition to the above, the Registrar is the Chief Executive Officer (CEO) and Head
                            of Administration, as well as Secretary to Council. S/he shall be responsible for the
                            day-to-day running of the Institute.
                        </p>
                        <p>
                            Furthermore, CISON is organised into Chapters, Sections and Committees with the
                            Governing Council at the apex of the organisation.
                        </p>
                    </div>
                </Reveal>

                {/* Divider */}
                <div className="hidden lg:block w-px self-stretch bg-border/60" />

                {/* Right: council list */}
                <Reveal delay={0.15} className="flex flex-col gap-5">
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/80 font-semibold">
                        Council Composition
                    </p>

                    <ol className="flex flex-col divide-y divide-border/40">
                        {councilMembers.map((m, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-start gap-3 py-3 group"
                            >
                                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#6dd249]/10 border border-[#6dd249]/30 flex items-center justify-center text-[10px] font-black font-mono text-[#6dd249] group-hover:bg-[#6dd249]/20 transition-colors">
                                    {i + 1}
                                </span>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-foreground leading-snug">
                                        {m.role}
                                    </span>
                                    {m.note && (
                                        <span className="text-xs text-muted-foreground italic">{m.note}</span>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </Reveal>
            </div>

            <Separator className="opacity-20" />

            {/* ── Org structure pillars ────────────────────────────────── */}
            <div className="flex flex-col gap-10">
                <Reveal className="flex flex-col gap-2">
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/80 font-semibold">
                        Areas of Activities
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-black text-foreground tracking-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Organisational Structure
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-3 gap-5">
                    {pillars.map((p, i) => (
                        <Reveal key={p.title} delay={i * 0.12}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 overflow-hidden group hover:border-[#6dd249]/40 transition-colors duration-300"
                            >
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#6dd249]/5 rounded-bl-[80px] group-hover:bg-[#6dd249]/10 transition-colors duration-300" />

                                <div className="w-10 h-10 rounded-xl bg-[#6dd249]/10 border border-[#6dd249]/30 flex items-center justify-center text-[#6dd249]">
                                    {p.icon}
                                </div>
                                <h3 className="font-black text-lg text-foreground tracking-tight">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Separator className="opacity-20" />

            {/* ── Governance apex diagram ──────────────────────────────── */}
            <Reveal className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/80 font-semibold">
                        Governance Hierarchy
                    </p>
                    <h2
                        className="text-2xl font-black text-foreground tracking-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Apex Structure
                    </h2>
                </div>

                {/* Visual hierarchy */}
                <div className="flex flex-col items-center gap-0 max-w-xl mx-auto w-full">
                    {[
                        { label: "Governing Council", sub: "Apex governance body", accent: true, w: "w-full" },
                        { label: "President & Vice President", sub: "Chairman of Council", accent: false, w: "w-[88%]" },
                        { label: "Registrar", sub: "CEO · Head of Administration · Secretary to Council", accent: false, w: "w-[72%]" },
                        { label: "Chapters · Sections · Committees", sub: "Regional & special-interest groups", accent: false, w: "w-[58%]" },
                    ].map((tier, i) => (
                        <div key={tier.label} className="flex flex-col items-center w-full">
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.7 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className={`${tier.w} rounded-xl px-5 py-4 flex flex-col gap-0.5 text-center ${tier.accent
                                    ? "bg-[#6dd249] text-[#06080f]"
                                    : "bg-card border border-border/60 hover:border-[#6dd249]/40 transition-colors"
                                    }`}
                            >
                                <span className={`font-black text-sm ${tier.accent ? "text-[#06080f]" : "text-foreground"}`}>
                                    {tier.label}
                                </span>
                                <span className={`text-xs ${tier.accent ? "text-[#06080f]/70" : "text-muted-foreground"}`}>
                                    {tier.sub}
                                </span>
                            </motion.div>
                            {i < 3 && (
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.12 + 0.4 }}
                                    className="w-px h-5 bg-[#6dd249]/30 origin-top"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

export default function StructureAndGovernancePage() {
    const crumbles: BreadcrumbType[] = [
        {
            label: "Home",
            href: '/',
            icon: HouseIcon
        },
        {
            label: "About",
            href: RoutePath.AboutUs,
            icon: IdentificationBadgeIcon
        },
        {
            label: "Structure and Governance",
            href: RoutePath.StructureAndGovernance,
            icon: DiamondsFourIcon
        }
    ]
    return (
        <>
            <SEO title="Structure and Governance | Leadership and Institutional Framework" description="Understand the organizational structure of CISON, including its governing council, committees, and leadership roles that guide the institute’s strategic direction and integrity." canonicalUrl={RoutePath.StructureAndGovernance} />
            <PageHero title="Structure and Governance" subtitle="A framework for" catchy="Professional Excellence" breadcrumb={<Breadcrumb Elements={crumbles} />} />
            <GovernanceContent />
        </>
    );
}