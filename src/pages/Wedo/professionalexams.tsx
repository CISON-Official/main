import { motion } from "framer-motion";
import {
    CertificateIcon,
    MedalIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    LockIcon,
    GavelIcon,
    ArrowCircleRightIcon,
    ArrowRightIcon,
} from "@phosphor-icons/react";
import { fadeUp, Reveal } from "@/animate";
import { HeroBadge } from "@/components/Hero";
import CTAStrip from "@/components/cta";

// ── Data ─────────────────────────────────────────────────────────────────────
const levels = [
    {
        icon: CertificateIcon,
        level: "Foundation Level",
        title: "Ordinary Certificate",
        color: "var(--accent-gold)",
        body: `The Ordinary Certificate in Statistics is offered in a modular form consisting of two modules which may be taken singly or together. Each module is examined by a 3-hour written paper and separately certificated. The certificate as a whole is awarded on successful completion of both modules. The "shelf life" of modules leading to this certificate is unlimited.`,
    },
    {
        icon: MedalIcon,
        level: "Intermediate Level",
        title: "Higher Certificate",
        color: "var(--accent-green)",
        body: `The Higher Certificate in Statistics contains work equivalent to the first year of a typical university statistics course — some topics extend into second-year territory. Offered in modular form, it consists of 8 modules examined by 1.5-hour papers each. Candidates who pass six modules — including modules 1–4 plus two electives from modules 5–8 — are awarded the Higher Certificate.`,
    },
    {
        icon: UserCircleIcon,
        level: "Graduate Level",
        title: "Graduate Certificate",
        color: "var(--accent-sky)",
        body: `The Graduate Certificate in Statistics is equivalent to a good university degree in statistics and is expected to satisfy entry requirements for Masters programmes at Nigerian universities. It consists of five modules, each a 3-hour written paper requiring answers to five of eight questions. Candidates who complete all five modules are awarded the Graduate Certificate and become eligible to apply for the status of Chartered Statistician (C.Stat.).`,
        note: `To help candidates choose the right level, the Institute offers academic assessment services and exemptions. Candidates who receive exemptions and pass the remaining papers are awarded an overall Pass for that level. To obtain a Credit or Distinction, the examination must be taken in full.`,
    },
];

const infoCards = [
    {
        icon: ShieldCheckIcon,
        title: "Value of Accreditation",
        body: `Accreditation signals to the wider public that Statistics is a rigorous professional discipline. Accredited statisticians are recognised by peers as combining education, experience, competence, and commitment to ethics at a professional level. The Chartered Statistician qualification reassures employers, contractors, and collaborators of the holder's expertise and serves as a mark of accomplishment to society at large.`,
    },
    {
        icon: LockIcon,
        title: "Confidentiality",
        body: `Applications and maintenance reports accessed by the Accreditation Committee must be stored confidentially. Their contents may not be released without the member's consent. In the case of an appeal, the Governing Council may access papers relevant to the appeal.`,
    },
    {
        icon: GavelIcon,
        title: "Disciplinary Issues",
        body: `Accreditation may be revoked by the Governing Council on recommendation of the Accreditation Committee if an Accredited Statistician refuses or neglects to comply with CISON Rules, acts in a manner prejudicial to the Institute or the statistical profession, or supplies incorrect information in an application. A member whose accreditation has been revoked may appeal within four weeks of receiving notification.`,
    },
    {
        icon: ArrowCircleRightIcon,
        title: "Accreditation Appeals",
        body: `An appeal against an unsuccessful application may only be made on the basis of a procedural error. The applicant has four weeks from the date of notification to lodge an appeal with the Registrar. Appeals are ratified by the Governing Council, whose decision is final.`,
    },
];


function Hero() {
    return (
        <section
            className="relative overflow-hidden pt-20 pb-16"
            style={{
                background:
                    "linear-gradient(135deg, #0a0f0d 0%, #0d1a14 50%, #0a1410 100%)",
            }}
        >
            {/* Decorative grid */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Glowing orb */}
            <div
                className="pointer-events-none absolute -top-32 -right-32 w-150 h-150 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
                <HeroBadge title="Professional Examination" />

                <motion.h1
                    variants={fadeUp}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Take the Path
                    <br />
                    <span style={{ color: "#10b981" }}>to Excellence</span>
                </motion.h1>

                <motion.div
                    variants={fadeUp}
                    className="h-px w-24 mb-8"
                    style={{ background: "#10b981" }}
                />

                <motion.p
                    variants={fadeUp}
                    className="max-w-2xl text-base sm:text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                >
                    Examinations at the Foundation, Intermediate, and Graduate Levels leading to the award of professional statistics certificates recognised across Nigeria.
                </motion.p>
            </div>
        </section>
    );
}


// ── Level Card ────────────────────────────────────────────────────────────────
function LevelCard({
    icon: Icon,
    level,
    title,
    color,
    body,
    note,
    index,
}: (typeof levels)[0] & { index: number }) {
    return (
        <Reveal custom={index * 0.15} className="h-full">
            <div className="group relative h-full border bg-card p-8 md:p-10 border-white/25 transition-colors duration-500 flex flex-col">
                {/* colored top accent */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-0.75"
                    style={{ background: color }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="shrink-0 w-12 h-12 flex items-center justify-center"
                        style={{ background: `${color}18`, border: `1px solid ${color}40` }}
                    >
                        <Icon size={24} weight="duotone" style={{ color }} />
                    </div>
                    <div>
                        <p className="text-xs tracking-[0.18em] uppercase font-semibold mb-1" style={{ color }}>
                            {level}
                        </p>
                        <h3 className="text-xl font-black dark:text-white">{title}</h3>
                    </div>
                </div>

                <p className="dark:text-white/55 text-sm leading-relaxed flex-1">{body}</p>

                {note && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="dark:text-white/40 text-xs leading-relaxed italic">{note}</p>
                    </div>
                )}
            </div>
        </Reveal>
    );
}

// ── Revalidation ─────────────────────────────────────────────────────────────
function Revalidation() {
    return (
        <section className="py-24 bg-emerald-900">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                    <Reveal>
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold mb-4 text-white">
                                <span className="w-6 h-px bg-(--accent-gold) text-white inline-block" />
                                C.Stat.
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Revalidation for the Chartered Statistician
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal custom={1}>
                        <div className="space-y-4 text-white text-sm leading-relaxed">
                            <p>
                                The Accreditation Committee of CISON, with the support of Council, conducts the revalidation of the Chartered Statistician (C.Stat.) award on a <strong className="dark:text-white/80">five-yearly basis</strong>. A detailed process reflecting current best practice has been developed to increase the value of the award for Chartered Statisticians and the beneficiaries of their services.
                            </p>
                            <p>
                                Once someone ceases to be a member of the Institute, their accredited qualification is rescinded. It may be restored on resumption of membership within five years. An accredited member may also voluntarily terminate accreditation, with reinstatement at the discretion of the Committee and Council.
                            </p>
                            <p>
                                Accredited Statisticians must provide to the Accreditation Committee every five years a summary of their activities, evidence of ethical professional competency, and the name of one referee — to demonstrate continuing contact with statistics appropriate to their practice.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// ── Info Cards ────────────────────────────────────────────────────────────────
function InfoCards() {
    return (
        <section className="py-24 ">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <Reveal className="mb-14">
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                        <span className="w-6 h-px inline-block" />
                        Governance & Policy
                    </span>
                    <h2 className="text-4xl font-black dark:text-white">Accreditation Framework</h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 gap-px bg-white/10">
                    {infoCards.map(({ icon: Icon, title, body }, i) => (
                        <Reveal key={title} custom={i * 0.1}>
                            <div className="bg-black/10 p-8 md:p-10 h-full group transition-colors duration-400">
                                <div className="flex items-center gap-3 mb-5">
                                    <Icon
                                        size={22}
                                        weight="duotone"
                                        className="text-(--accent-green) shrink-0"
                                    />
                                    <h3 className="dark:text-white font-bold text-base">{title}</h3>
                                </div>
                                <p className="dark:text-white/50 text-sm leading-relaxed">{body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function CisonExaminationPage() {
    return (
        <>

            <Hero />

            {/* Levels section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <Reveal className="mb-14">
                        <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                            <span className="w-6 h-px  inline-block" />
                            Examination Structure
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
                            Three Sequential Levels
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-px bg-white/50">
                        {levels.map((level, i) => (
                            <LevelCard key={level.title} {...level} index={i} />
                        ))}
                    </div>

                    <Reveal custom={1} className="mt-12 text-center">
                        <a
                            href="https://my.cison.org.ng/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 border border-(--accent-green) text-(--accent-green) font-bold px-7 py-4 text-sm tracking-wide hover:bg-(--accent-green) hover:text-(--navy) transition-all duration-300"
                        >
                            Begin the Process
                            <ArrowRightIcon
                                weight="bold"
                                size={16}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                    </Reveal>
                </div>
            </section>

            <Revalidation />
            <InfoCards />
            <CTAStrip />
        </>
    );
}