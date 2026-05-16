import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ArrowSquareOutIcon, BookOpenIcon, BuildingIcon, CaretRightIcon, HouseIcon, IdentificationBadgeIcon, TreeEvergreenIcon, UsersIcon } from "@phosphor-icons/react";
import { Reveal } from "@/animate";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import RoutePath from "@/routes";
import EditorInChief from "@/data/council/editor-in-chief";
import ManagingEditor from "@/data/council/managing-editor";
import AssociateEditor from "@/data/council/associate-editor";
import ElectedMemberSix from "@/data/council/elected-member-six";
import ElectedMemberFive from "@/data/council/elected-member-five";
import ElectedMemberFour from "@/data/council/elected-member-four";
import CBNRepresentative from "@/data/council/cbn-rep";
import NPCRepresentative from "@/data/council/npc-rep";
import NBSRepresentative from "@/data/council/nbs-rep";
import ElectedMemberThree from "@/data/council/elected-member-three";
import ElectedMemberTwo from "@/data/council/elected-member-two";
import ElectedMemberOne from "@/data/council/elected-member-one";
import Registrar from "@/data/council/registrar";
import VicePresident from "@/data/council/vice-president";
import President from "@/data/council/president";

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



const councilMembers: Person[] = [
    {
        name: President.name,
        role: President.role,
        href: RoutePath.President,
        img: President.img,
    },
    {
        name: VicePresident.name,
        role: VicePresident.role,
        href: RoutePath.VicePresident,
        img: VicePresident.img,
    },
    {
        name: Registrar.name,
        role: Registrar.role,
        href: RoutePath.Registrar,
        img: Registrar.img,
    },
];

const electedMembers: Person[] = [
    {
        name: ElectedMemberOne.name,
        role: ElectedMemberOne.role,
        href: RoutePath.ElectedMemberOne,
        img: ElectedMemberOne.img,
    },
    {
        name: ElectedMemberTwo.name,
        role: ElectedMemberTwo.role,
        href: RoutePath.ElectedMemberTwo,
        img: ElectedMemberTwo.img,
    },
    {
        name: ElectedMemberThree.name,
        role: ElectedMemberThree.role,
        href: RoutePath.ElectedMemberThree,
        img: ElectedMemberThree.img,
    },
    {
        name: ElectedMemberFour.name,
        role: ElectedMemberFour.role,
        href: RoutePath.ElectedMemberFour,
        img: ElectedMemberFour.img,
    },
    {
        name: ElectedMemberFive.name,
        role: ElectedMemberFive.role,
        href: RoutePath.ElectedMemberFive,
        img: ElectedMemberFive.img,
    },
    {
        name: ElectedMemberSix.name,
        role: ElectedMemberSix.role,
        href: RoutePath.ElectedMemberSix,
        img: ElectedMemberSix.img,
    },
];

const institutionalReps: Person[] = [
    {
        name: CBNRepresentative.name,
        role: CBNRepresentative.role,
        href: RoutePath.CBNRepresentative,
        img: CBNRepresentative.img,
    },
    {
        name: NPCRepresentative.name,
        role: NPCRepresentative.role,
        href: RoutePath.NPCRepresentative,
        img: NPCRepresentative.img,
    },
    {
        name: NBSRepresentative.name,
        role: NBSRepresentative.role,
        href: RoutePath.NBSRepresentative,
        img: NBSRepresentative.img,
    },
];

const editorialBoard: Person[] = [
    {
        name: EditorInChief.name,
        role: EditorInChief.role,
        href: RoutePath.EditorInChief,
        img: EditorInChief.img,
    },
    {
        name: ManagingEditor.name,
        role: ManagingEditor.role,
        href: RoutePath.ManagingEditor,
        img: ManagingEditor.img,
    },
    {
        name: AssociateEditor.name,
        role: AssociateEditor.role,
        href: RoutePath.AssociateEditor,
        img: AssociateEditor.img,
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