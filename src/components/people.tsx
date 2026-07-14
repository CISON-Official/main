"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowLeftIcon, BookOpenIcon, CertificateIcon, EnvelopeIcon, FacebookLogoIcon, GlobeIcon, GraduationCapIcon, LinkedinLogoIcon, NewspaperIcon, PhoneIcon, TwitterLogoIcon, UsersIcon } from "@phosphor-icons/react";
import { Reveal } from "@/animate";
import type { PersonInterface } from "@/data/base";
import SEO from "./SEO";



function StickyBar({ person }: { person: PersonInterface }) {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [280, 360], [0, 1]);
    const y = useTransform(scrollY, [280, 360], [-8, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#06080f]/90 backdrop-blur-md"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-14 h-14 flex items-center justify-between gap-4">
                <a
                    href={person.backHref}
                    className="flex items-center gap-2 text-xs text-white/40 hover:text-[#6dd249] transition-colors "
                >
                    <ArrowLeftIcon size={14} />
                    Our People
                </a>
                <span className="text-sm font-bold text-white/80 truncate">{person.name}</span>
                <div className="flex items-center gap-2">
                    {[
                        { Icon: LinkedinLogoIcon, href: person.social.linkedin },
                        { Icon: TwitterLogoIcon, href: person.social.twitter },
                    ].map(({ Icon, href }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#6dd249] hover:border-[#6dd249]/30 transition-all"
                        >
                            <Icon size={11} weight="fill" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Profile Hero ─────────────────────────────────────────────────────────────

function ProfileHero({ person }: { person: PersonInterface }) {
    return (
        <div className="relative overflow-hidden bg-[#06080f] border-b border-white/8">
            {/* BG bars */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {[
                    { left: "5%", h: "60%", delay: 0.05 },
                    { left: "9%", h: "40%", delay: 0.1 },
                    { left: "13%", h: "75%", delay: 0.07 },
                ].map((b, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 1.1, delay: b.delay, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 w-[3px] origin-bottom bg-[#6dd249]/15"
                        style={{ left: b.left, height: b.h }}
                    />
                ))}
                <div className="absolute bottom-0 left-0 w-[55%] h-[40%] bg-[#6dd249]/6 blur-[90px]" />
                <div
                    className="absolute inset-0 opacity-[0.022]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 52px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 52px)",
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 md:px-14 pt-20 pb-14">
                {/* Back link */}
                <motion.a
                    href={person.backHref}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 text-xs text-white/35 hover:text-[#6dd249]  tracking-widest uppercase mb-10 transition-colors group"
                >
                    <motion.span whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
                        <ArrowLeftIcon size={13} />
                    </motion.span>
                    Back to our people
                </motion.a>

                <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[387/460]">
                            <img
                                src={person.img}
                                alt={person.name}
                                className="w-full h-full object-cover object-top"
                                fetchPriority="high"
                            />
                            {/* Corner green accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6dd249]" />
                        </div>
                        {/* Category badge floating */}
                        <div className="absolute -top-3 -right-3">
                            <Badge className="bg-[#6dd249] text-[#06080f]  text-[9px] tracking-[0.18em] uppercase font-black px-2.5 py-1 shadow-lg">
                                {person.category}
                            </Badge>
                        </div>
                    </motion.div>

                    {/* Info */}
                    <div className="flex flex-col gap-6 pt-1">
                        <div className="flex flex-col gap-3">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Badge
                                    variant="outline"
                                    className="w-fit border-[#6dd249]/40 text-[#6dd249]/80 bg-transparent  text-[10px] tracking-[0.2em] uppercase"
                                >
                                    CISON · Our People
                                </Badge>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.06]"
                                style={{ fontFamily: "'Georgia', serif" }}
                            >
                                {person.name}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.38 }}
                                className="text-base text-[#6dd249] font-semibold "
                            >
                                {person.role}
                            </motion.p>
                        </div>

                        {/* Short bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.46 }}
                            className="text-sm text-white/50 leading-relaxed max-w-xl"
                        >
                            {person.bio.slice(0, 220)}…
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.54 }}
                            className="flex items-center gap-3 flex-wrap"
                        >
                            {[
                                { Icon: LinkedinLogoIcon, href: person.social.linkedin, label: "LinkedIn" },
                                { Icon: TwitterLogoIcon, href: person.social.twitter, label: "Twitter" },
                                { Icon: EnvelopeIcon, href: person.social.email, label: "Email" },
                                { Icon: FacebookLogoIcon, href: person.social.facebook, label: "Facebook" },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={label !== "Email" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 text-white/40 hover:text-[#6dd249] hover:border-[#6dd249]/40 hover:bg-[#6dd249]/5 transition-all duration-200 text-xs "
                                >
                                    <Icon size={14} weight="fill" />
                                    {label}
                                </a>
                            ))}
                        </motion.div>

                        {/* Quick stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.62 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            {[
                                { label: "Publications", value: `${person.publications.length}+` },
                                { label: "Expertise Areas", value: `${person.expertise.length}` },
                                { label: "Appointments", value: `${person.appointments.length}` },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col gap-0.5">
                                    <span className="text-xl font-black text-[#6dd249] ">{s.value}</span>
                                    <span className="text-[10px] text-white/35  tracking-widest uppercase">{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Expertise Tags ───────────────────────────────────────────────────────────

function ExpertiseTags({ person }: { person: PersonInterface }) {
    return (
        <Reveal className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <GraduationCapIcon size={18} className="text-[#6dd249]" weight="fill" />
                <span className="text-[10px]  tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                    Areas of Expertise
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {person.expertise.map((e, i) => (
                    <motion.span
                        key={e}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        className="px-3 py-1.5 rounded-full border border-[#6dd249]/25 bg-[#6dd249]/6 text-xs font-semibold text-[#6dd249]/90 hover:border-[#6dd249]/50 hover:bg-[#6dd249]/12 transition-colors cursor-default"
                    >
                        {e}
                    </motion.span>
                ))}
            </div>
        </Reveal>
    );
}



function EducationSection({ person }: { person: PersonInterface }) {
    return (
        <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <CertificateIcon size={18} className="text-[#6dd249]" weight="fill" />
                <span className="text-[10px]  tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                    Education
                </span>
            </div>
            <div className="flex flex-col">
                {person.education.length > 0 && person.education.map((ed, i) => (
                    <motion.div
                        key={ed.degree}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-4 group"
                    >
                        <div className="flex flex-col items-center flex-shrink-0 mt-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#6dd249] group-hover:scale-125 transition-transform" />
                            {i < person.education.length - 1 && (
                                <div className="w-px h-8 bg-[#6dd249]/20 mt-1" />
                            )}
                        </div>
                        <div className="pb-4">
                            <p className="text-sm font-bold text-foreground leading-snug">{ed.degree}</p>
                            <p className="text-xs text-muted-foreground">{ed.institution}</p>
                            <p className="text-[10px]  text-[#6dd249]/60 mt-0.5">{ed.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Reveal>
    );
}

// ─── Publications ─────────────────────────────────────────────────────────────

function PublicationsSection({ person }: { person: PersonInterface }) {
    return (
        <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <NewspaperIcon size={18} className="text-[#6dd249]" weight="fill" />
                <span className="text-[10px]  tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                    Selected Publications
                </span>
            </div>
            <div className="flex flex-col divide-y divide-border/40">
                {person.publications.map((pub, i) => (
                    <motion.div
                        key={pub.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex items-start justify-between gap-6 py-4 group"
                    >
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-[#6dd249] transition-colors">
                                {pub.title}
                            </p>
                            <p className="text-xs text-muted-foreground italic">{pub.journal}</p>
                        </div>
                        <span className="text-xs font-black  text-[#6dd249]/60 flex-shrink-0">
                            {pub.year}
                        </span>
                    </motion.div>
                ))}
            </div>
        </Reveal>
    );
}

// ─── Appointments ─────────────────────────────────────────────────────────────

function AppointmentsSection({ person }: { person: PersonInterface }) {
    return (
        <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <UsersIcon size={18} className="text-[#6dd249]" weight="fill" />
                <span className="text-[10px]  tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                    Appointments & Affiliations & Achievements
                </span>
            </div>
            <ul className="flex flex-col gap-2">
                {person.appointments.map((a, i) => (
                    <motion.li
                        key={a}
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.07 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground group"
                    >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6dd249]/50 group-hover:bg-[#6dd249] flex-shrink-0 transition-colors" />
                        {a}
                    </motion.li>
                ))}
            </ul>
        </Reveal>
    );
}

// ─── Full Bio ─────────────────────────────────────────────────────────────────

function FullBioSection({ person }: { person: PersonInterface }) {
    const [expanded, setExpanded] = useState(false);
    const preview = person.bio.slice(0, 320) + "…";

    return (
        <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <BookOpenIcon size={18} className="text-[#6dd249]" weight="fill" />
                <span className="text-[10px]  tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                    About {person.name.split(" ")[0]} {person.name.split(" ").pop()}
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {expanded ? person.bio : preview}
                </p>
                <button
                    onClick={() => setExpanded((v) => !v)}
                    className="self-start text-xs  text-[#6dd249] hover:underline transition-all"
                >
                    {expanded ? "Show less ↑" : "Read more ↓"}
                </button>
            </div>

            {/* Social grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                    { Icon: LinkedinLogoIcon, href: person.social.linkedin, label: "LinkedIn Profile" },
                    { Icon: TwitterLogoIcon, href: person.social.twitter, label: "Twitter / X" },
                    { Icon: EnvelopeIcon, href: person.social.email, label: "Send a Message" },
                    { Icon: FacebookLogoIcon, href: person.social.facebook, label: "Facebook" },
                ].map(({ Icon, href, label }) => (
                    <a
                        key={label}
                        href={href}
                        target={label !== "Send a Message" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border/60 text-xs font-semibold text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40 hover:bg-[#6dd249]/5 transition-all duration-200 group"
                    >
                        <Icon size={15} weight="fill" className="group-hover:text-[#6dd249] transition-colors" />
                        {label}
                    </a>
                ))}
            </div>
        </Reveal>
    );
}

// ─── Main Content with Tabs ───────────────────────────────────────────────────

function ProfileContent({ person }: { person: PersonInterface }) {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-14 py-14">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
                {/* Main column — tabbed */}
                <div className="flex flex-col gap-10">
                    <Tabs defaultValue="about" className="w-full">
                        <Reveal>
                            <TabsList className="bg-muted/40 border border-border/40 rounded-xl p-1 w-full md:w-auto mb-8 h-auto flex-wrap">
                                {[
                                    { value: "about", label: "About" },
                                    { value: "publications", label: "Publications" },
                                    { value: "appointments", label: "Appointments" },
                                ].map((tab) => (
                                    <TabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                        className="text-xs  tracking-wide data-[state=active]:bg-[#6dd249] data-[state=active]:text-[#06080f] data-[state=active]:font-black rounded-lg px-4 py-2"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Reveal>

                        <TabsContent value="about" className="flex flex-col gap-10 mt-0">
                            <FullBioSection person={person} />
                            <Separator className="opacity-20" />
                            <ExpertiseTags person={person} />
                            <Separator className="opacity-20" />
                            <EducationSection person={person} />
                        </TabsContent>

                        <TabsContent value="publications" className="mt-0">
                            <PublicationsSection person={person} />
                        </TabsContent>

                        <TabsContent value="appointments" className="mt-0">
                            <AppointmentsSection person={person} />
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar */}
                <aside className="flex flex-col gap-6 lg:sticky lg:top-20">
                    {/* Contact card */}
                    <Reveal delay={0.1}>
                        <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-5">
                            <span className="text-[10px]  tracking-[0.2em] uppercase text-[#6dd249]/75 font-semibold">
                                Contact
                            </span>
                            <div className="flex flex-col gap-3">
                                <a
                                    href={person.social.email}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#6dd249] transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#6dd249]/10 border border-[#6dd249]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6dd249]/20 transition-colors">
                                        <EnvelopeIcon size={14} className="text-[#6dd249]" weight="fill" />
                                    </div>
                                    Send a message
                                </a>
                                <a
                                    href="tel:+2347014432794"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#6dd249] transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#6dd249]/10 border border-[#6dd249]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6dd249]/20 transition-colors">
                                        <PhoneIcon size={14} className="text-[#6dd249]" weight="fill" />
                                    </div>
                                    +234 701 443 2794
                                </a>
                            </div>
                            <Button
                                className="w-full bg-[#6dd249] hover:bg-[#5bb83d] text-[#06080f] font-bold  text-xs tracking-widest uppercase mt-1"
                            >
                                <a href={person.social.email}>Get in Touch</a>
                            </Button>
                        </div>
                    </Reveal>

                    {/* Journal card */}
                    <Reveal delay={0.18}>
                        <div className="rounded-2xl border border-[#6dd249]/25  p-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <BookOpenIcon size={16} className="text-[#6dd249]" weight="fill" />
                                <span className="text-[10px]  tracking-[0.2em] uppercase text-[#6dd249]/75 font-black">
                                    Journal of CISON
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                                The Journal of the Chartered Institute of Statisticians of Nigeria (CISON) is a peer-reviewed, high-impact academic publication dedicated to advancing the science, methodology, and practical application of statistics.
                            </p>
                            <a
                                href="https://journal.cison.org.ng"
                                className="flex items-center gap-1.5 text-xs text-[#6dd249] hover:underline "
                            >
                                <GlobeIcon size={12} weight="fill" />
                                View Journal
                            </a>
                        </div>
                    </Reveal>

                    {/* Quick facts */}
                    <Reveal delay={0.24}>
                        <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-4">
                            <span className="text-[10px]  tracking-[0.2em] uppercase text-[#6dd249]/75 font-semibold">
                                Quick Facts
                            </span>
                            <div className="flex flex-col divide-y divide-border/40">
                                {[
                                    { label: "Role", value: person.role },
                                    { label: "Institution", value: person.education.length > 0 ? person.education[0].institution : null },
                                    { label: "Fellowship", value: person.fellowship ? person.fellowship : "CISON" },
                                    { label: "Member Since", value: String(person.membersince) ? String(person.membersince) : "2023" },
                                ].map((f) => (
                                    <div key={f.label} className="flex justify-between items-center py-2.5 text-xs gap-10">
                                        <span className="text-muted-foreground">{f.label}</span>
                                        <span className="font-semiboldw-20 truncate text-foreground">{f.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Back button */}
                    <Reveal delay={0.3}>
                        <Button
                            variant="outline"
                            className="w-full border-border/60 text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40  text-xs tracking-widest"
                        >
                            <a href={person.backHref} className="flex items-center gap-2">
                                <ArrowLeftIcon size={13} />
                                Back to Our People
                            </a>
                        </Button>
                    </Reveal>
                </aside>
            </div>
        </div>
    );
}




export default function PersonDetailPage({ person, route }: { person: PersonInterface, route: string }) {
    return (
        <div id="page" className="min-h-screen bg-background">
            <SEO title={person.name} description={person.bio} canonicalUrl={route} ogImage={person.img} />
            <StickyBar person={person} />
            <ProfileHero person={person} />
            <main role="main">
                <ProfileContent person={person} />
            </main>
        </div>
    );
}