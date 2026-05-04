import CTAStrip, { MVVCard } from "@/components/cta";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import RoutePath from "@/routes";
import { TriangleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatedSection } from ".";
import SEO from "@/components/SEO";

const objectives = [
    { num: "01", text: "Advancing the use of statistics in medical research", featured: true },
    { num: "02", text: "Analysing socio-economic issues", featured: true },
    { num: "03", text: "Encouraging and developing statistical computing to enhance statistical practice", featured: true },
    { num: "04", text: "Promoting and developing statistics education for both the public and the profession", featured: true },
    { num: "05", text: "Promoting Total Quality Management (TQM) techniques and practices", featured: true },
    { num: "06", text: "Promoting the correct use and interpretation of statistics by the populace", featured: true },
    { num: "07", text: "Providing leadership and direction to the public in matters of statistical theory and application", featured: true },
    { num: "08", text: "Strengthening capacity in environmental statistics to support green economies and address climate change challenges", featured: true },
    { num: "09", text: "Undertaking research and encouraging statistical and economic forecasting to illuminate problems", featured: true },
    { num: "10", text: "Driving and encouraging efforts in Data Science and Big Data Analytics", featured: true },
    { num: "11", text: "Uplifting standards used in the production of statistics within the National Statistical System (NSS)", featured: true },
];


const stats = [
    { num: "11", label: "Core Objectives" },
    { num: "2022", label: "Established by Act" },
    { num: "NSS", label: "National Scope" },
    { num: "CPD", label: "Continuous Development" },
];

function ObjectiveCard({ num, text, featured }: { num: string, text: string, featured: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`p-5 cursor-default transition-colors duration-150 bg-inherit ${featured
                ? " hover:bg-emerald-100"
                : " hover:bg-gray-50"
                }`}
        >
            <div
                className={`font-serif text-3xl leading-none mb-2.5 transition-colors duration-150 ${featured
                    ? "text-emerald-600"
                    : hovered
                        ? "text-emerald-600"
                        : "text-gray-200"
                    }`}

            >
                {num}
            </div>
            <p
                className={`text-sm leading-relaxed font-light dark:text-white ${featured ? "text-emerald-900" : "text-gray-500"
                    }`}
            >
                {text}
            </p>
        </div>
    );
}

export default function CISONObjectives() {
    const crumbles: BreadcrumbType[] = [
        {
            label: "Home",
            href: '/'
        },
        {
            label: "About",
            href: RoutePath.AboutUs
        },
        {
            label: "Our Objective",
            href: RoutePath.Objectives
        }
    ]
    return (
        <>
            <SEO title="Our Objective" description="Aims and Objectives of the Chartered Institute of Statisticians of Nigeria (CISON)" canonicalUrl={RoutePath.Objectives} />

            <PageHero title="Our Objectives" subtitle="Charting the Path to" breadcrumb={<Breadcrumb Elements={crumbles} />} catchy="Success" />

            <AnimatedSection className="max-w-5xl mx-auto px-6 md:px-12 py-14">
                <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {stats.map((value, index) => (
                            <MVVCard label={value.num} icon={<TriangleIcon />} index={index} quote={value.label} />
                        ))}
                    </div>
                </section>

                <div className="mt-8  border border-gray-200 rounded-xl p-6">
                    <p className="text-sm text-gray-500 dark:text-white leading-relaxed font-light">
                        CISON is conceptualised as both a{" "}
                        <strong className="text-gray-800 dark:text-emerald-400 font-medium">learned institute for statistics</strong>{" "}
                        and a{" "}
                        <strong className="text-gray-800 dark:text-emerald-400 font-medium">professional community of statisticians</strong>{" "}
                        that promotes the development of statistical theory and practice in Nigeria.
                        The institute sharpens professional education in statistics, facilitating
                        production of specialists in high-quality data — necessary for{" "}
                        <strong className="text-gray-800 dark:text-emerald-400 font-medium">evidence-based decision making</strong>{" "}
                        and policy design. Members adhere to a code of conduct enshrined in the{" "}
                        <strong className="text-gray-800 dark:text-emerald-400 font-medium">CISON Establishment Act, 2022</strong>,
                        exchange research findings on latest advancements, and drive statistical culture advocacy.
                    </p>
                </div>

                {/* Objectives Header */}
                <div className="px-6 pt-8 pb-3 mt-4">
                    <p className="text-md text-gray-400 font-light">
                        To achieve all these, members exert their energy and skills across the following areas:
                    </p>
                </div>

                {/* Objectives Grid */}
                <div
                    className="mx-6 border border-gray-200 rounded-xl overflow-hidden bg-inherit"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1px",
                        // background: "#e5e7eb",
                    }}
                >
                    {objectives.map((obj) => (
                        <ObjectiveCard key={obj.num} {...obj} />
                    ))}
                </div>

            </AnimatedSection>
            <CTAStrip />
        </>
    );
}