import { motion, useScroll, useTransform } from 'framer-motion'
import {
    SignInIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    UsersIcon,
    BookOpenIcon,
    MedalIcon,
    BuildingsIcon,
    GraduationCapIcon,
    ArrowUpRightIcon,
    SealIcon,
    LightbulbIcon,
    ScalesIcon,
    ChartBarIcon,
} from '@phosphor-icons/react'
import { useRef } from 'react'
import SEO from '@/components/SEO'
import RoutePath from '@/routes'


const criteria = [
    {
        icon: ChartBarIcon,
        title: 'Breadth & Depth',
        desc: 'Courses must show approximate equivalence to CISON\'s Graduate Certificate in Statistics, ensuring comprehensive coverage of the discipline.',
        color: 'bg-green-50 text-green-700',
        border: 'border-green-200',
    },
    {
        icon: ScalesIcon,
        title: 'Quality Standards',
        desc: 'Professional judgement is formed from examination papers, staff CVs, and assessment data from internal and external reviews.',
        color: 'bg-green-50 text-green-700',
        border: 'border-green-200',
    },
    {
        icon: LightbulbIcon,
        title: 'Strong Foundation',
        desc: 'Mathematical and statistical fundamentals must be treated with sufficient depth to support further advanced study and professional practice.',
        color: 'bg-green-50 text-green-700',
        border: 'border-green-200',
    },
]

const process = [
    { step: '01', label: 'Submit Application', desc: 'Log in to the CISON members portal to begin the accreditation process for your institution.' },
    { step: '02', label: 'Document Review', desc: 'CISON reviews examination papers, staff CVs, and curriculum documentation against professional standards.' },
    { step: '03', label: 'Professional Assessment', desc: 'An expert panel evaluates the breadth, depth, and statistical content of the submitted course.' },
    { step: '04', label: 'Accreditation Decision', desc: 'CISON issues a formal accreditation decision in consultation with NBTE or NUC as appropriate.' },
]


function Hero() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-green-950">
            <motion.div style={{ y }} className="absolute inset-0">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, #16a34a22 0%, transparent 60%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom left, #14532d33 0%, transparent 50%)' }} />
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)',
                }} />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
                <motion.div style={{ opacity }}>
                    <motion.div
                        className="inline-flex items-center gap-2 text-green-300 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase mb-8"
                        style={{ background: 'rgba(21,128,61,0.3)', border: '1px solid rgba(74,222,128,0.4)', fontFamily: "'DM Mono', monospace" }}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    >
                        <SealIcon size={14} />
                        Courses Accreditation
                    </motion.div>

                    <motion.h1
                        className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight max-w-4xl mb-8"
                        style={{ fontFamily: "'Playfair Display', serif", lineHeight: '1.05' }}
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Accreditation of<br />
                        <span className="text-green-400">Tertiary Education</span><br />
                        Courses
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light"
                        style={{ color: 'rgba(187,247,208,0.8)' }}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The Chartered Institute of Statisticians of Nigeria sets the professional standard for Statistics courses at polytechnics and universities across Nigeria.
                    </motion.p>

                    <motion.div className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                        <a href="https://cison.org.ng/members/wp-login.php" target="_blank" rel="noreferrer"
                            className="group inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all">
                            Begin the Process
                            <ArrowUpRightIcon size={16} />
                        </a>
                        <a href="#criteria"
                            className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 px-7 py-3.5 rounded-full font-medium text-sm transition-all"
                            style={{ border: '1px solid rgba(74,222,128,0.5)' }}>
                            Learn More
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                    {[
                        { Icon: GraduationCapIcon, label: 'Universities', value: 'Undergraduate & Masters' },
                        { Icon: BuildingsIcon, label: 'Polytechnics', value: 'ND & HND Courses' },
                        { Icon: MedalIcon, label: 'Standard', value: 'CISON Graduate Cert.' },
                    ].map(({ Icon, label, value }) => (
                        <div key={label} className="flex flex-col gap-1">
                            <Icon size={24} className="text-green-400 mb-1" />
                            <div className="text-white text-xs tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</div>
                            <div className="text-[11px] leading-tight" style={{ color: 'rgba(134,239,172,0.6)' }}>{value}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, white, transparent)' }} />
        </section>
    )
}

function Overview() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 text-green-700 text-xs tracking-widest uppercase mb-5"
                            style={{ fontFamily: "'DM Mono', monospace" }}>
                            <div className="w-8 h-px bg-green-500" />
                            Our Mandate
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-green-950 leading-tight mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            Setting the benchmark for Statistics education
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            CISON is mandated to accredit Statistics courses at both polytechnics and universities, covering National Diploma and Higher National Diploma programmes, as well as Undergraduate and Master's level degrees.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            This process is carried out in close consultation with the National Board for Technical Education (NBTE) and National Universities Commission (NUC) respectively, ensuring alignment with national educational standards.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'National Diploma (ND) & Higher National Diploma (HND)',
                                'Undergraduate Degree programmes',
                                "Master's level Statistics programmes",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircleIcon size={18} weight="fill" className="text-green-600 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="relative"
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="bg-green-950 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full" style={{ background: 'rgba(21,128,61,0.2)', transform: 'translate(4rem, -4rem)' }} />
                            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', transform: 'translate(-2rem, 2rem)' }} />
                            <div className="relative z-10">
                                <BookOpenIcon size={32} className="text-green-400 mb-6" />
                                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Course Equivalence Standard
                                </h3>
                                <p className="leading-relaxed text-sm mb-6" style={{ color: 'rgba(187,247,208,0.7)' }}>
                                    Breadth and depth are assured by requiring approximate equivalence of HND and undergraduate courses with CISON's Graduate Certificate in Statistics.
                                </p>
                                <div className="border-t pt-6" style={{ borderColor: 'rgba(21,128,61,0.5)' }}>
                                    <div className="flex items-center gap-3 text-green-300 text-sm">
                                        <UsersIcon size={18} />
                                        <span>Evaluated by a professional expert panel</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-100 rounded-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Criteria() {
    return (
        <section id="criteria" className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="inline-flex items-center gap-2 text-green-700 text-xs tracking-widest uppercase mb-4"
                        style={{ fontFamily: "'DM Mono', monospace" }}>
                        <div className="w-8 h-px bg-green-500" />
                        Accreditation Criteria
                        <div className="w-8 h-px bg-green-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-green-950 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        What CISON evaluates
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {criteria.map(({ icon: Icon, title, desc, border }, i) => (
                        <motion.div key={title}
                            className={`bg-white rounded-2xl p-7 border ${border} transition-all`}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(21,128,61,0.12)' }}>
                            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-5">
                                <Icon size={22} weight="duotone" />
                            </div>
                            <h3 className="text-xl font-semibold text-green-950 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-10 bg-white border border-green-200 rounded-2xl p-7"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0 mt-1">
                            <CheckCircleIcon size={20} weight="duotone" className="text-green-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-950 mb-2">Key Principle: Foundation Must Not Be Shallow</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                CISON requires that the mathematical and statistical foundation of any course is treated with genuine depth — not superficially. The treatment must provide an adequate framework upon which further work, including work beyond the HND and undergraduate degree level, may be constructed.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function Process() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="mb-16"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="inline-flex items-center gap-2 text-green-700 text-xs tracking-widest uppercase mb-4"
                        style={{ fontFamily: "'DM Mono', monospace" }}>
                        <div className="w-8 h-px bg-green-500" />
                        The Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-green-950 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        How accreditation works
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-green-200 z-0" />
                    {process.map(({ step, label, desc }, i) => (
                        <motion.div key={step} className="relative z-10"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-green-200 bg-white mb-5 mx-auto lg:mx-0">
                                <span className="text-green-700 font-semibold text-lg" style={{ fontFamily: "'DM Mono', monospace" }}>{step}</span>
                            </div>
                            <h3 className="font-semibold text-green-950 mb-2 text-base">{label}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 flex flex-col sm:flex-row items-center gap-6 bg-green-950 text-white rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Ready to apply for accreditation?
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(187,247,208,0.7)' }}>
                            Start your application through the CISON members portal. Current and former members can sign in below.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <a href="https://cison.org.ng/members/wp-login.php" target="_blank" rel="noreferrer"
                            className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-medium text-sm transition-all whitespace-nowrap">
                            Begin the Process
                            <ArrowRightIcon size={15} />
                        </a>
                        <a href="https://cison.org.ng/members/wp-login.php" target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 text-green-300 px-6 py-3 rounded-full font-medium text-sm transition-all whitespace-nowrap"
                            style={{ border: '1px solid rgba(74,222,128,0.5)' }}>
                            <SignInIcon size={15} />
                            Sign In / Recover Account
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export default function App() {
    return (
        <>
            <SEO title='Courses Accreditation' canonicalUrl={RoutePath.CourseAccreditation} description='Accreditation of Tertiary Education Courses by CISON' />
            <Hero />
            <Overview />
            <Criteria />
            <Process />
        </>
    )
}