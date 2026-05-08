import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ArrowSquareOutIcon, BookOpenIcon, BuildingIcon, CaretRightIcon, HouseIcon, IdentificationBadgeIcon, TreeEvergreenIcon, UsersIcon } from "@phosphor-icons/react";
import { Reveal } from "@/animate";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import RoutePath from "@/routes";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Person {
    name: string;
    role: string;
    href: string;
    img: string;
}


// ─── Person Card ──────────────────────────────────────────────────────────────

function PersonCard({
    person,
    index,
}: {
    person: Person;
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.a
            ref={ref}
            href={person.href}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-[#6dd249]/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#6dd249]/5"
        >
            {/* Photo */}
            <div className="relative overflow-hidden aspect-[387/460] bg-muted">
                <motion.img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-7 h-7 rounded-full bg-[#6dd249] flex items-center justify-center">
                        <ArrowSquareOutIcon className="w-3 h-3 text-[#06080f]" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 p-5">
                <h3 className="font-bold text-sm md:text-base text-foreground leading-snug group-hover:text-[#6dd249] transition-colors duration-200 tracking-tight">
                    {person.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{person.role}</p>
            </div>
        </motion.a>
    );
}

// ─── People Grid Section ──────────────────────────────────────────────────────

function PeopleSection({
    id,
    sectionLabel,
    heading,
    subheading,
    icon,
    people,
}: {
    id?: string;
    sectionLabel: string;
    heading: string;
    subheading?: string;
    icon: React.ReactNode;
    people: Person[];
    sectionIndex: number;
}) {
    return (
        <section id={id} className="flex flex-col gap-8">
            <Reveal delay={0}>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#6dd249]/10 border border-[#6dd249]/25 flex items-center justify-center text-[#6dd249] flex-shrink-0">
                            {icon}
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/80 font-semibold">
                            {sectionLabel}
                        </span>
                    </div>
                    <div className="flex items-end gap-4 flex-wrap">
                        <h2
                            className="text-2xl md:text-3xl font-black text-foreground tracking-tight"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            {heading}
                        </h2>
                        {subheading && (
                            <>
                                <div className="hidden md:block opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 17.7768741 44.236648" width="12">
                                        <path d="m16.8432936 0 .9335805.35836795-.179184.46679021-16.4849257 42.94469964-.17918397.4667902-.93358043-.358368.17918398-.4667902 16.48492572-42.94469959z" fill="#6dd249" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-muted-foreground">{subheading}</span>
                            </>
                        )}
                    </div>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {people.map((person, i) => (
                    <PersonCard key={person.name} person={person} index={i} />
                ))}
            </div>
        </section>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const councilMembers: Person[] = [
    {
        name: "Dr. Godday Ebuh",
        role: "President and Chairman Governing Council",
        href: "https://cison.org.ng/our-people/dr-godday-ebuh/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Dr-Godday-Uwawunkoye-Ebuh-President-CISON.webp",
    },
    {
        name: "Prof. S. U. Gulumbe",
        role: "Vice-President, CISON",
        href: "https://cison.org.ng/our-people/prof-s-u-gulumbe/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/10/Prof.-S.-U.-Gulumbe.webp",
    },
    {
        name: "Mrs. Ngozi Theresa Agboegbulem",
        role: "Registrar and Secretary of the Governing Council",
        href: "https://cison.org.ng/our-people/mrs-ngozi-theresa-agboegbulem/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/06/Ngozi-Agboegbulem.jpg",
    },
];

const electedMembers: Person[] = [
    {
        name: "Prof. Julian Ibezimako Mbegbu",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/professor-julian-ibezimako-mbegbu/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Professor-Julian-Ibezimako-Mbegbu-.jpg",
    },
    {
        name: "Dr. Umaru Baba",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/umaru-baba/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Umaru-Baba.jpeg",
    },
    {
        name: "Aiyedun Stephen Mosimabale",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/aiyedun-stephen-mosimabale/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Aiyedun-Stephen-Mosimabale-.jpg",
    },
    {
        name: "Bright F. Ajibade PhD. FNSA, FRSS",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/bright-f-ajibade-phd-fnsa-frss/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Bright-F.-Ajibade-PhD.-FNSA-FRSS.jpg",
    },
    {
        name: "Bello Jaafar",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/bello-jaafar/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Bello-Jaafar.jpg",
    },
    {
        name: "Dr. Uchenna Ogoke",
        role: "Council Member, Elected",
        href: "https://cison.org.ng/our-people/dr-uchenna-ogoke/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2025/03/Dr.-Uchenna-Ogoke-.jpg",
    },
];

const institutionalReps: Person[] = [
    {
        name: "Dr. Michael Mba",
        role: "Council Member – Represents CBN",
        href: "https://cison.org.ng/our-people/dr-michael-mba/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Dr.-Michael-Mba.webp",
    },
    {
        name: "Crown Prince Abubakar Bello Afegbua",
        role: "Council Member – Represents NPC",
        href: "https://cison.org.ng/our-people/crown-prince-abubakar-bello-afegbua/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Crown-Prince-Abubakar-Bello-Afegbua.webp",
    },
    {
        name: "Augustine Chuks Anyakorah",
        role: "Council Member – Represents NBS",
        href: "https://cison.org.ng/our-people/augustine-chuks-anyakorah/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Anyakora_NBS.webp",
    },
];

const editorialBoard: Person[] = [
    {
        name: "Prof Polycarp Chigbu",
        role: "Editor-in-Chief: Journal of CISON",
        href: RoutePath.EditorInChief,
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/10/The_editor_in_chief.jpg",
    },
    {
        name: "Dr. Atoi Ngozi Victor",
        role: "Managing Editor: Journal of CISON",
        href: "https://cison.org.ng/our-people/atoi-ngozi-victor/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/ATOI-NGOZI-VICTOR.webp",
    },
    {
        name: "Dr OlaOluwa S. Yaya",
        role: "Associate Editor: Journal of CISON",
        href: "https://cison.org.ng/our-people/dr-olaoluwa-s-yaya/",
        img: "https://cison.org.ng/portal/wp-content/uploads/2024/08/Dr-OlaOluwa-S.-Yaya.webp",
    },
];

// ─── Quick nav tabs ───────────────────────────────────────────────────────────

const navItems = [
    { label: "Council", href: "#council" },
    { label: "Elected", href: "#elected" },
    { label: "Institutional", href: "#institutional" },
    { label: "Editorial", href: "#editorial" },
];

function SectionNav() {
    return (
        <Reveal>
            <div className="flex flex-wrap gap-2 pt-2 pb-6 border-b border-border/40">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 text-xs font-mono tracking-wide text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40 hover:bg-[#6dd249]/5 transition-all duration-200"
                    >
                        <CaretRightIcon className="w-3 h-3" />
                        {item.label}
                    </a>
                ))}
            </div>
        </Reveal>
    );
}

// ─── Main Content ─────────────────────────────────────────────────────────────

function MainContent() {
    return (
        <main role="main" className="max-w-6xl mx-auto px-6 md:px-14 py-14 flex flex-col gap-20">
            <SectionNav />

            <PeopleSection
                id="council"
                sectionLabel="CISON Governing Council"
                heading="Council Members"
                icon={<UsersIcon className="w-4 h-4" />}
                people={councilMembers}
                sectionIndex={0}
            />

            <Separator className="opacity-20" />

            <PeopleSection
                id="elected"
                sectionLabel="Elected Members"
                heading="Elected Council Members"
                icon={<BuildingIcon className="w-4 h-4" />}
                people={electedMembers}
                sectionIndex={1}
            />

            <Separator className="opacity-20" />

            <PeopleSection
                id="institutional"
                sectionLabel="Institutional Representatives"
                heading="Institutional Council Members"
                icon={<BuildingIcon className="w-4 h-4" />}
                people={institutionalReps}
                sectionIndex={2}
            />

            <Separator className="opacity-20" />

            <PeopleSection
                id="editorial"
                sectionLabel="Editorial Board"
                heading="The CISON Journal"
                subheading="Editorial Leadership"
                icon={<BookOpenIcon className="w-4 h-4" />}
                people={editorialBoard}
                sectionIndex={3}
            />
        </main>
    );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function OurPeoplePage() {
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
            label: "Leadership",
            href: RoutePath.Leadership,
            icon: TreeEvergreenIcon
        }
    ];
    return (
        <div id="page" className="min-h-screen bg-background font-sans">
            <PageHero
                title="Our People" subtitle="Come meet" catchy="Our People" breadcrumb={<Breadcrumb Elements={crumbles} />} />
            <MainContent />

        </div>
    );
}