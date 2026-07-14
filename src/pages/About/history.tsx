import { Reveal } from "@/animate";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import RoutePath from "@/routes";
import { ArchiveIcon, DownloadIcon, HouseIcon, IdentificationBadgeIcon, PlusIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import History from "@/assets/pdf/History-of-CISON.pdf";
import SEO from "@/components/SEO";

interface AccordionItem {
    id: string;
    index: number;
    title: string;
    content: React.ReactNode;
}

const historyItems: AccordionItem[] = [
    {
        id: "intro",
        index: 1,
        title: "Introduction",
        content: (
            <>
                <p>
                    The Chartered Institute of Statisticians of Nigeria (CISON) is the successor statistical body to the Nigerian Statistical Association (NSA). The NSA was established in 1976 as a non-profit making professional body comprising of Statisticians, Economists, Planners, Econometricians, Demographers, Analysts and Corporate organizations with interest in Statistics. The Association was committed to the development of statistical theory and practice in Nigeria. However, successive Governing Councils of the NSA had advocated for an Institute like CISON that would be responsible for the accreditation of statisticians in the country. Consequently, CISON was established to determine what standards of knowledge and skills are to be attained by persons seeking to become members of the Institute.
                </p>
                <p>
                    In the past, a lot of efforts was put in place by past Governing Councils of the NSA towards the accreditation of members as professional statisticians. To that effect, such names as the Nigerian Statistical Institute and the Institute of Statisticians of Nigeria were bandied. The envisaged Institute was also meant to conduct specialized trainings in statistics, conduct professional examinations, certify successful candidates in various areas of statistics and keep a roaster of statistical resource persons/specialists that the nation could call upon if and when the need arises.
                </p>
            </>
        ),
    },
    {
        id: "professionalization",
        index: 2,
        title: "Concrete steps towards professionalization",
        content: (
            <>
                <p>
                    It was not until 2001 that the first concrete steps were taken towards the establishment of a professional body for the accreditation of members of the NSA. This was under the leadership of the then President of NSA, Professor O. S. Adegboye, who launched the Chartered Institute of Statisticians of Nigeria (CISON) on the occasion of the Silver Jubilee of NSA held in the Federal Capital Territory (FCT), Abuja, Nigeria.
                </p>
                <p>
                    Prior to that event, the then Secretary of the NSA, Mr. C. M. Okafor, had obtained a copy of the Act of the Institute of Chartered Accountants of Nigeria (ICAN). Thereafter, Prof. B. A. Oyejola in 2001 led a team that adapted the ICAN's Act to suit that of CISON. By 2004, the NSA acquired a temporary office of CISON at the Department of Statistics, University of Nigeria, Nsukka (UNN).
                </p>
            </>
        ),
    },
    {
        id: "public-hearing",
        index: 3,
        title: "Initial Public Hearing on CISON",
        content: (
            <p>
                In its efforts at realising the noble objectives of CISON and ensuring a buy-in of the general public and the members of the National Assembly, the Governing Council of the NSA, under the leadership of Mr. Christopher M. Okafor as President, organized a one-day sensitization workshop on the proposed Act of the CISON, on August 20, 2007, at Hill Station Hotel, Jos, Plateau State. Prominent personalities invited to the occasion included the Director-General, National Bureau of Statistics (NBS), Dr. V.O. Akinyosoye, who was the Chairman of the occasion; the Chairman, Senate Committee on National Planning, Economic Affairs & Poverty Alleviation; the Chairman, House Committee on National Planning & Economic Development; and members of the Governing Council of the NSA. The comments received from participants formed the basis for the revision of the draft bill which was eventually sent to the National Assembly for deliberations.
            </p>
        ),
    },
    {
        id: "subsequent-attempts",
        index: 4,
        title: "Subsequent Attempts at the Establishment of CISON",
        content: (
            <>
                <p>
                    Successive Governing Councils of the NSA continued to pursue the passage of the CISON Bill with varying degrees of success. After succeeding Mr. Okafor as President of NSA in 2008, Mr. B. O. Amobi concluded the processes and ensured the registration of the NSA at the Corporate Affairs Commission (CAC), as this was a prerequisite for the establishment of CISON.
                </p>
                <p>
                    In 2014, the Governing Council of the NSA under the leadership of Dr. M. M. Tumala approved that Mr. C.M. Okafor be engaged as a consultant to draw up the road map for the transition of NSA to CISON. The consultant undertook extensive desk research, surveying five entities that have chartered or professional statistical bodies: the American Statistical Association (ASA), the Hong Kong Statistical Society (HKSS), the Royal Statistical Society (RSS) of London, the Statistical Society of Australia Incorporated (SSAI) and the Statistical Society of Canada (SSC).
                </p>
            </>
        ),
    },
    {
        id: "final-efforts",
        index: 5,
        title: "Final Efforts to Pass the CISON Bill at the National Assembly",
        content: (
            <p>
                Following the submission of the above report that outlined the roadmap for the transition of NSA to CISON, the NSA Governing Council, under the leadership of Dr. M. M. Tumala, fought for the passage of the CISON Bill in both houses of the National Assembly. The Bill was eventually passed by the 8th National Assembly, but it became part of the 46 Bills left for the assent of the then in-coming administration of President Muhammadu Buhari in 2015. Unfortunately, it was not assented to by Mr. President and so, the new President of NSA, Prof. S. I. Onyeagu had to start the process all over again. Despite his spirited efforts, the Bill remained with the National Assembly till the expiration of his tenure as President of NSA in 2021.
            </p>
        ),
    },
    {
        id: "cison-act",
        index: 6,
        title: "The CISON Act",
        content: (
            <p>
                After his election as President of NSA in 2021, Dr. Ebuh, with the support of his team, pursued the passage of the CISON Bill into law with dogged determination. This effort culminated in the passage of the CISON Bill into an Act, the{" "}
                <em className="text-foreground">"Chartered Institute of Statisticians of Nigeria (Establishment) Act, 2022"</em>{" "}
                which was signed into law by His Excellency, Muhammadu Buhari, GCFR, President and Commander-in-Chief of the Armed Forces, Federal Republic of Nigeria on the 16th day of February, 2023. The CISON Act has since been published in the Federal Republic of Nigeria Official Gazette No. 230, Vol. 110 of 1st March, 2023 in the City of Lagos. With this, NSA ceased to exist but transited to the Chartered Institute of Statisticians of Nigeria (CISON).
            </p>
        ),
    },
    {
        id: "inauguration",
        index: 7,
        title: "Inauguration of the Governing Council of CISON",
        content: (
            <>
                <p>
                    To give practical expression to the new Act, the Governing Council of CISON was inaugurated on March 15, 2024 with the immediate past President of NSA, Dr. Godday U. Ebuh, and immediate Vice President, Prof. S. U. Gulumbe, transiting to become the first President and Vice President of CISON, respectively. By the provision of the Act, the President is also the Chairman of Council.
                </p>
                <p>The Council consists of:</p>
                <ul className="list-none space-y-1.5 mt-2">
                    {[
                        "Minister responsible for Education or his representative",
                        "Minister responsible for National Planning Commission or his representative",
                        "Head of Service of the Federation or his representative",
                        "Governor of the Central Bank of Nigeria or his representative",
                        "Statistician General of the Federation or his representative",
                        "Chairman, National Population Commission or his representative",
                        "Eight persons elected by the Institute who must be Chartered members",
                        "President and Vice-President of the Institute",
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6dd249] shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    The Registrar is Christopher M. Okafor, a two-term President of the NSA (2003–2008). He is the Chief Executive Officer (CEO), Head of Administration, and Secretary to Council, responsible for the day-to-day running of the Institute.
                </p>
            </>
        ),
    },
];

function HistoryAccordion({ items }: { items: AccordionItem[] }) {
    const [openId, setOpenId] = useState<string | null>(items[0].id);

    return (
        <div className="flex flex-col divide-y divide-border/60 border border-border/60 rounded-2xl overflow-hidden">
            {items.map((item, i) => {
                const isOpen = openId === item.id;
                return (
                    <Reveal key={item.id} delay={i * 0.06}>
                        <div className="group">
                            <button
                                onClick={() => setOpenId(isOpen ? null : item.id)}
                                className={`w-full flex items-center gap-4 px-7 py-5 text-left transition-colors duration-200 ${isOpen ? "" : "bg-card hover:bg-muted/40"
                                    }`}
                                aria-expanded={isOpen}
                            >
                                {/* Index pill */}
                                <span
                                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black font-mono transition-colors duration-200 ${isOpen ? "bg-[#6dd249] text-[#080e18]" : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {item.index}
                                </span>
                                <span className={`flex-1 font-bold text-sm md:text-base tracking-tight transition-colors ${isOpen ? "text-[#6dd249]" : "text-foreground"}`}>
                                    {item.title}
                                </span>
                                <motion.span
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`shrink-0 transition-colors ${isOpen ? "text-[#6dd249]" : "text-muted-foreground"}`}
                                >
                                    <PlusIcon className="w-4 h-4" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-7 py-6 border-t border-[#6dd249]/10 text-sm text-muted-foreground leading-relaxed space-y-4">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                );
            })}
        </div>
    );
}

function MainContent() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
                {/* Left: accordion */}
                <div className="flex flex-col gap-8">
                    <Reveal>
                        <div className="flex items-center gap-4">
                            <h3
                                className="text-2xl md:text-3xl font-black text-foreground tracking-tight"
                                style={{ fontFamily: "'Georgia', serif" }}
                            >
                                The History of CISON
                            </h3>
                            {/* Decorative slash */}
                            <div className="hidden md:block opacity-30">
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 17.7768741 44.236648" width="13">
                                    <path d="m16.8432936 0 .9335805.35836795-.179184.46679021-16.4849257 42.94469964-.17918397.4667902-.93358043-.358368.17918398-.4667902 16.48492572-42.94469959z" fill="#6dd249" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>

                    <HistoryAccordion items={historyItems} />
                </div>

                {/* Right: sticky download + timeline summary */}
                <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                    {/* Download card */}
                    <Reveal delay={0.2}>
                        <div className="rounded-2xl border border-[#6dd249]/30 p-6 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#6dd249]/15 border border-[#6dd249]/30 flex items-center justify-center">
                                    <DownloadIcon className="w-4 h-4 text-[#6dd249]" />
                                </div>
                                <span className="font-bold text-sm text-foreground">CISON History PDF</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Download the complete history of CISON as a PDF document for offline reading and reference.
                            </p>
                            <Button
                                className="w-full bg-[#6dd249] hover:bg-[#5bb83d] text-[#080e18] font-bold text-xs tracking-widest uppercase"
                            >
                                <a href={History} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3">
                                    <DownloadIcon className="w-3.5 h-3.5 mr-2" />
                                    Get the PDF
                                </a>
                            </Button>
                        </div>
                    </Reveal>

                    {/* Timeline summary */}
                    <Reveal delay={0.3}>
                        <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-4">
                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Key Milestones</span>
                            <div className="flex flex-col">
                                {[
                                    { year: "1976", label: "NSA Founded" },
                                    { year: "2001", label: "CISON Launched" },
                                    { year: "2004", label: "First Secretariat" },
                                    { year: "2007", label: "Public Hearing" },
                                    { year: "2014", label: "Transition Roadmap" },
                                    { year: "2023", label: "Act Signed into Law" },
                                    { year: "2024", label: "Council Inaugurated" },
                                ].map((m, i) => (
                                    <div key={m.year} className="flex items-start gap-3 group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2 h-2 rounded-full bg-[#6dd249] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                                            {i < 6 && <div className="w-px h-6 bg-[#6dd249]/20 mt-1" />}
                                        </div>
                                        <div className="pb-3">
                                            <span className="text-[10px] font-black font-mono text-[#6dd249]">{m.year}</span>
                                            <p className="text-xs text-muted-foreground">{m.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default function OurHistoryPage() {
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
            label: "Our History",
            href: RoutePath.OurHistory,
            icon: ArchiveIcon
        }
    ]
    return (
        <>
            <SEO title="CISON History | Founding, Growth & Milestones of the Institute" description="Explore the rich history of the Chartered Institute of Statisticians of Nigeria (CISON) – from its founding to its key milestones in advancing statistical professionalism in Nigeria." canonicalUrl={RoutePath.OurHistory} />
            <PageHero breadcrumb={<Breadcrumb Elements={crumbles} />} subtitle={"Charting a Legacy of"} catchy={"Excellence in Statistics"} title="Our History" />
            <MainContent />

        </>
    );
}