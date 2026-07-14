import CTAStrip from "@/components/cta"
import SEO from "@/components/SEO"
import RoutePath from "@/routes"
import { ArrowRightIcon, ArrowsClockwiseIcon, CertificateIcon, SignInIcon, StarIcon, UserCircleCheckIcon } from "@phosphor-icons/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cpdFeatures = [
    { icon: ArrowsClockwiseIcon, title: 'Continuous Review', desc: 'All practising statisticians and members are required to view CPD as a vital part of their personal professional review process.' },
    { icon: StarIcon, title: 'Enhances Credibility', desc: 'The CPD process enhances the credibility of the statistical profession and maintains modern standards in a rapidly evolving field.' },
    { icon: CertificateIcon, title: 'Five-Year Re-accreditation', desc: 'Re-accreditations are conducted at five-yearly intervals, based on minimum criteria prescribed by CISON for all professionally qualified members.' },
    { icon: UserCircleCheckIcon, title: 'Maintained Professional Certificate', desc: 'Holders of the C.Stat. status may apply periodically for a Maintained Professional Certificate (MPC) as formal recognition of CPD engagement.' },
]

const cpdTimeline = [
    { year: 'Year 0', title: 'Achieve C.Stat. Status', desc: 'Member attains the Chartered Statistician designation through CISON\'s professional pathway.' },
    { year: 'Ongoing', title: 'Engage in CPD Activities', desc: 'Participate in conferences, workshops, courses, and self-directed learning aligned with professional standards.' },
    { year: 'Year 5', title: 'Apply for MPC', desc: 'Submit evidence of CPD activities to CISON to apply for the Maintained Professional Certificate.' },
    { year: 'Renewal', title: 'Continued Re-accreditation', desc: 'Re-accreditation continues at five-yearly intervals for the duration of active professional practice.' },
]

export default function CPDPage() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <>
            <SEO title="CPD Policy" canonicalUrl={RoutePath.CPDPolicy} description="Continuing Professional Development (CPD) Policy" />
            {/* Hero */}
            <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--hero-bg)' }}>
                <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(22,163,74,0.18) 0%, transparent 55%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(15,61,15,0.5) 0%, transparent 50%)' }} />
                    <div className="absolute inset-0 opacity-[0.025]" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 1px,transparent 32px),repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 32px)'
                    }} />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
                    <motion.div style={{ opacity }}>
                        <motion.div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs tracking-widest uppercase font-mono-dm text-emerald-500 border-2 border-emerald-500 bg-emerald-100 dark:text-white dark:border-white dark:bg-emerald-500"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <CertificateIcon size={13} /> CPD Policy
                        </motion.div>

                        <motion.h1 className="font-display dark:text-white text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.04] max-w-4xl mb-8"
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                            Continuing<br />
                            <span className="text-green-400">Professional</span><br />
                            Development
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            CISON requires its professionally qualified members to engage in a continuous process of professional review, maintaining modern standards and enhancing the credibility of the statistical profession in Nigeria.
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <a href="https://my.cison.org.ng" target="_blank" rel="noreferrer"
                                className="group inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all">
                                Access CPD Portal <ArrowRightIcon size={16} />
                            </a>
                            <a href="#cpd-features" className="inline-flex items-center gap-2 dark:text-green-300 hover:text-green-200 px-7 py-3.5 rounded-full font-medium text-sm transition-all text-green-700 "
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                        {[
                            { value: '5yr', label: 'Re-accreditation Cycle' },
                            { value: 'MPC', label: 'Professional Certificate' },
                            { value: 'C.Stat.', label: 'Chartered Statistician' },
                            { value: 'CPD', label: 'Committee Established' },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-green-400 font-display text-2xl font-semibold mb-1">{value}</div>
                                <div className="text-[11px] leading-tight font-mono-dm">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
            </section>

            {/* Policy Content */}
            <section className="py-24 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-5 font-mono-dm" style={{ color: 'var(--text-muted)' }}>
                                <div className="w-8 h-px" style={{ background: 'var(--text-muted)' }} /> Our Policy
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-8" style={{ color: 'var(--text-primary)' }}>
                                Keeping professionals at the forefront
                            </h2>

                            {/* Pull quote */}
                            <blockquote className="relative pl-6 mb-8 py-1"
                                style={{ borderLeft: '3px solid var(--blockquote-border)' }}>
                                <p className="font-display text-lg italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                    "All practising statisticians and other members would be required to view the CPD as a vital part of their personal review process."
                                </p>
                            </blockquote>

                            <p className="leading-relaxed mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
                                A Continuing Professional Development (CPD) Committee of CISON has been established to enable the development of the profession and the maintenance of modern standards.
                            </p>
                            <p className="leading-relaxed mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
                                This process also enhances the credibility of the profession. CISON therefore requires its professionally qualified members to follow a process of continuous professional review through the CPD.
                            </p>

                            <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border-light)' }}>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--tag-bg)' }}>
                                        <CertificateIcon size={20} weight="duotone" style={{ color: 'var(--text-secondary)' }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Maintained Professional Certificate (MPC)</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            Holders of Chartered Statistician (C.Stat.) status may apply periodically for an MPC as formal recognition of having engaged in appropriate CPD activities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-5 font-mono-dm" style={{ color: 'var(--text-muted)' }}>
                                <div className="w-8 h-px" style={{ background: 'var(--text-muted)' }} /> CPD Journey
                            </div>
                            <h3 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--text-primary)' }}>Your professional development pathway</h3>

                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'var(--border-mid)' }} />
                                <div className="flex flex-col gap-0">
                                    {cpdTimeline.map(({ year, title, desc }, i) => (
                                        <motion.div key={year} className="relative pl-16 pb-10 last:pb-0"
                                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.12 }}>
                                            <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-mono-dm font-semibold"
                                                style={{ background: 'var(--bg-card)', border: '2px solid var(--border-mid)', color: 'var(--text-secondary)', zIndex: 1 }}>
                                                {year.length > 4 ? <span className="text-[9px]">{year}</span> : year}
                                            </div>
                                            <div className="rounded-xl p-4 transition-colors" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                                                <h4 className="font-semibold text-sm mb-1.5" style={{ color: 'var(--text-primary)' }}>{title}</h4>
                                                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="cpd-features" className="py-24 transition-colors duration-300" style={{ background: 'var(--surface)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-4 font-mono-dm" style={{ color: 'var(--text-muted)' }}>
                            <div className="w-8 h-px" style={{ background: 'var(--text-muted)' }} /> Key Components <div className="w-8 h-px" style={{ background: 'var(--text-muted)' }} />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                            What CPD means for members
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {cpdFeatures.map(({ icon: Icon, title, desc }, i) => (
                            <motion.div key={title} className="rounded-2xl p-7 flex gap-5 transition-all"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -3 }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--tag-bg)', color: 'var(--text-secondary)' }}>
                                    <Icon size={22} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="rounded-2xl p-10 md:p-16 text-center text-white overflow-hidden relative"
                        style={{ background: 'var(--bg-dark)' }}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 1px,transparent 28px)'
                        }} />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs tracking-widest uppercase font-mono-dm border-green-600 border-2 text-emerald-500"
                            >
                                <ArrowsClockwiseIcon size={13} /> Already a C.Stat. Member?
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5 max-w-2xl mx-auto leading-tight text-black dark:text-white">
                                Track your CPD and apply for your MPC
                            </h2>
                            <p className="mb-8 max-w-xl mx-auto leading-relaxed font-black text-emerald-600" >
                                Sign in to the CISON members portal to manage your CPD record, log professional development activities, and apply for your Maintained Professional Certificate.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="https://my.cison.org.ng" target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all">
                                    Sign In to Members Portal <ArrowRightIcon size={15} />
                                </a>
                                <a href="https://my.cison.org.ng" target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 px-8 py-3.5 rounded-full font-medium text-sm transition-all"
                                    style={{ border: '1px solid rgba(74,222,128,0.4)' }}>
                                    <SignInIcon size={15} /> Recover Your Account
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTAStrip />
        </>
    )
}