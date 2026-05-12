"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRightIcon,
    UsersIcon,
    ChartBarIcon,
    IdentificationCardIcon,
    CertificateIcon,
    NewspaperIcon,
    PresentationIcon,
    GraduationCapIcon,
    MegaphoneIcon,
    TrophyIcon,
    DesktopIcon,
    BuildingsIcon,
    CurrencyNgnIcon,
    GitBranchIcon,
    SplitHorizontalIcon,
    IdentificationBadgeIcon,
    HouseIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RoutePath from "@/routes";
import Logo from "@/assets/logo.png"
import { Reveal } from "@/animate";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import SEO from "@/components/SEO";


interface Department {
    id: string;
    title: string;
    description: string;
    Icon: React.ElementType;
}

const registrarDept = {
    title: "Registrar's Department",
    subtitle: "Head of Administration",
    description:
        "The Chief Executive Officer (CEO), who is also the Head of Administration, as well as Secretary to Council, shall, with his/her staff be responsible for the day-to-day running of the Institute.",
};

const departments: Department[] = [
    {
        id: "hr-legal",
        title: "Human Resource / Legal",
        description:
            "Responsible for all details pertaining to the employment and remuneration of personnel by the Institute. Advises the Institute on legal matters.",
        Icon: UsersIcon,
    },
    {
        id: "statistics",
        title: "Statistics Department",
        description:
            "The Statistics Department keeps proper statistics of all activities and payments related to the Institute, its members and the Country.",
        Icon: ChartBarIcon,
    },
    {
        id: "membership",
        title: "Membership",
        description:
            "Provides support and services to members of the Institute. Feeds the Statistics Division of the Registrar's Office with membership registration statistics in all its ramifications.",
        Icon: IdentificationCardIcon,
    },
    {
        id: "accreditation",
        title: "Accreditation Affairs",
        description:
            "Deals with all accreditation matters and qualifications offered by the Institute, including examination of students at Foundation, Intermediate and Graduate Levels, leading to award of certificates. Supervises CPD, accreditation of Statistical Science courses, and award of professional membership grades: Associate Statistician (A.Stat.) and Chartered Statistician (C.Stat.).",
        Icon: CertificateIcon,
    },
    {
        id: "publications",
        title: "Programmes / Publications",
        description:
            "Designs, reviews and monitors the annual programmes of the Institute. Prompts the generation of quality research papers, special interest articles and commentary on statistics and allied subjects. Maintains, reviews and publishes materials in print and electronic bulletins, newsletters or the journal.",
        Icon: NewspaperIcon,
    },
    {
        id: "workshops",
        title: "Workshops and Conferences",
        description:
            "Provides coordination and support for all workshops and conferences organised centrally by various groups within the Institute.",
        Icon: PresentationIcon,
    },
    {
        id: "education",
        title: "Education, Careers and Recruitment",
        description:
            "Concerned with developing and encouraging the necessary skills for statistics within educational establishments using education strategy research and development, workshops, special events, and careers promotion materials. Includes organising competitions among schools and for young statisticians on statistics-related issues.",
        Icon: GraduationCapIcon,
    },
    {
        id: "pr-marketing",
        title: "Public Relations / Marketing",
        description:
            "Promotes and markets the Institute's programmes and policies to the general public. Responds to policy consultations and disseminates developments within the statistical community. Responsible for maintaining a Customer Service Centre (CSC).",
        Icon: MegaphoneIcon,
    },
    {
        id: "honours",
        title: "Honours and Awards",
        description:
            "Responsible for identifying, through laid-down procedures, promising or eminent people who have made significant contributions to the advancement of statistics and ensuring they are rewarded. Includes the CISON Award for Impact of Applied and Collaborative Work. Non-members of the Institute may also be nominated.",
        Icon: TrophyIcon,
    },
    {
        id: "ict",
        title: "Information and Communications Technology (ICT)",
        description:
            "Ensures that the Institute is run in a computer-mediated environment.",
        Icon: DesktopIcon,
    },
    {
        id: "chapters",
        title: "Chapters and Sections Committee",
        description:
            "Supports the organisation and coordination of meetings for State Chapters, subject-matter and industry-area interest groups as well as special-interest topics involving statisticians.",
        Icon: GitBranchIcon,
    },
    {
        id: "finance",
        title: "Finance and Audit",
        description:
            "Responsible for overseeing all aspects of the Institute's finances. These include the generation of income and examination of the quality of expenditure and budget performance. Also responsible for the Institute's investments and auditing of the accounts.",
        Icon: CurrencyNgnIcon,
    },
];

function RegistrarBlock() {
    return (
        <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#6dd249]/30  p-8 flex flex-col md:flex-row gap-7 items-start">
                {/* Decorative corner */}
                <div
                    className="absolute top-0 right-0 w-24 h-24 bg-[#6dd249]/8 rounded-bl-[80px]"
                    aria-hidden="true"
                />
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6dd249]/15 border border-[#6dd249]/30 flex items-center justify-center text-[#6dd249]">
                    <BuildingsIcon size={22} weight="fill" />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                            Office of the Registrar / CEO
                        </span>
                        <h2
                            className="text-xl md:text-2xl font-black text-foreground tracking-tight"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            {registrarDept.title}
                        </h2>
                        <span className="text-xs font-semibold text-muted-foreground font-mono">
                            {registrarDept.subtitle}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {registrarDept.description}
                    </p>
                </div>
            </div>
        </Reveal>
    );
}

function DeptCard({
    dept,
    index,
}: {
    dept: Department;
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 overflow-hidden hover:border-[#6dd249]/45 hover:bg-muted/20 transition-all duration-300 cursor-default"
        >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#6dd249]/5 rounded-bl-[60px] group-hover:bg-[#6dd249]/10 transition-colors duration-300" />

            <div className="w-10 h-10 rounded-xl bg-[#6dd249]/10 border border-[#6dd249]/25 flex items-center justify-center text-[#6dd249] flex-shrink-0 group-hover:bg-[#6dd249]/20 transition-colors duration-300">
                <dept.Icon size={18} weight="fill" />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-black text-base text-foreground tracking-tight group-hover:text-[#6dd249] transition-colors duration-200">
                    {dept.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {dept.description}
                </p>
            </div>
        </motion.div>
    );
}

// ─── Departments Grid ─────────────────────────────────────────────────────────

function DepartmentsGrid() {
    return (
        <section className="flex flex-col gap-8">
            <Reveal>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                        Area of Activities / Departments
                    </span>
                    <div className="flex-1 h-px bg-border/40" />
                    <span className="text-xs font-mono text-muted-foreground">
                        {departments.length} departments
                    </span>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {departments.map((dept, i) => (
                    <DeptCard key={dept.id} dept={dept} index={i} />
                ))}
            </div>
        </section>
    );
}



function CTASection() {
    return (
        <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute left-0 top-0 h-full w-[55%] bg-gradient-to-r from-[#6dd249]/5 to-transparent" />
                    <div className="absolute right-0 top-0 w-40 h-40 opacity-40">
                        <img
                            src={Logo}
                            alt=""
                            className="w-full h-full object-contain opacity-20"
                        />
                    </div>
                </div>

                <div className="relative px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
                    <div className="flex flex-col gap-3 max-w-xl">
                        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold">
                            Get in touch
                        </span>
                        <p className="text-base md:text-lg font-semibold text-foreground leading-snug">
                            Thank you for your interest in CISON. Whether you want to be a member,
                            partner with us or simply have a question, please don't hesitate to contact us.
                        </p>
                    </div>
                    <Button
                        className="flex-shrink-0 bg-[#6dd249] hover:bg-[#5bb83d] text-[#06080f] font-black font-mono text-xs tracking-widest uppercase shadow-lg shadow-[#6dd249]/20"
                    >
                        <a href={RoutePath.ContactUs} className="flex items-center gap-2">
                            Contact us
                            <ArrowRightIcon size={14} weight="bold" />
                        </a>
                    </Button>
                </div>
            </div>
        </Reveal>
    );
}


function BigDescription() {
    return (
        <div className="mt-8  border border-gray-200 rounded-xl p-6 black:text-white text-black">
            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm  leading-relaxed"
            >
                Each area of activity is headed by a Council Member who works hand-in-hand
                with a staff of the Institute. They are expected to synergise and develop
                theme-based business plans for their areas of jurisdiction.
            </motion.p>
        </div>
    )
}

function MainContent() {
    return (
        <main role="main" className="max-w-7xl mx-auto px-6 md:px-14 py-14 flex flex-col gap-14">
            <BigDescription />
            <RegistrarBlock />
            <Separator className="opacity-20" />
            <DepartmentsGrid />
            <Separator className="opacity-20" />
            <CTASection />
        </main>
    );
}



export default function DepartmentsPage() {
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
            label: "Departments",
            href: RoutePath.Departments,
            icon: SplitHorizontalIcon
        }
    ]
    return (
        <div id="page" className="min-h-screen bg-background">
            <SEO description="Explore the various departments within the Chartered Institute of Statisticians of Nigeria (CISON), each driving core programs in statistics, training, membership, and national development." title="CISON Departments | Functional Units and Core Divisions" canonicalUrl={RoutePath.Departments} />
            <PageHero title="Departments" subtitle="Departments and" catchy="Areas of Activities" breadcrumb={<Breadcrumb Elements={crumbles} />} />
            <MainContent />
        </div>
    );
}