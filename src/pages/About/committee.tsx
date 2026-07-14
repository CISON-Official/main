import { useState } from "react";
import Committees, { type CommitteeType, type Members } from "@/data/committee";
import { ArrowDownIcon, EnvelopeSimpleIcon, HouseIcon, IdentificationBadgeIcon, PhoneIcon, StarIcon, UserIcon, UsersIcon, type Icon as PhsIcon } from "@phosphor-icons/react";
import RoutePath from "@/routes";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import { motion } from "framer-motion";
import CTAStrip from "@/components/cta";
import SEO from "@/components/SEO";
import { Reveal } from "@/animate";

function MemberList({ members }: { members: Members[] }) {
    return (
        <ul className="mt-3 space-y-1.5">
            {members.map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-50">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-fulltext-emerald-600 text-[10px] font-semibold">
                        {i + 1}
                    </span>
                    <span className="flex-1 leading-snug">{m.name}</span>
                    {m.phone && (
                        <a
                            href={`tel:${m.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                        >
                            <PhoneIcon className="h-3.5 w-3.5" />
                            <span className=" text-[11px]">{m.phone}</span>
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
}

function RoleBadge({ icon: Icon, label, name, phone, email }: { icon?: PhsIcon, label?: string, name?: string, phone?: string, email?: string }) {
    return (
        <Reveal className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 px-4 py-3 dark:text-white">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                {Icon && <Icon className="h-4 w-4" />}
            </span>
            <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-700">{label}</p>
                <p className="text-sm font-semibold leading-tight mt-0.5">{name}</p>
                <div className="mt-1.5 flex flex-wrap gap-3">
                    {phone && (
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors">
                            <PhoneIcon className="h-3.5 w-3.5" />
                            <span className="font-mono text-[11px]">{phone}</span>
                        </a>
                    )}
                    {email && (
                        <a href={`mailto:${email}`} className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors">
                            <EnvelopeSimpleIcon className="h-3.5 w-3.5" />
                            <span className="text-[11px]">{email}</span>
                        </a>
                    )}
                </div>
            </div>
        </Reveal>
    );
}

function SubcommitteePanel({ sub }: { sub: CommitteeType }) {
    const [open, setOpen] = useState(true);
    const [tab, setTab] = useState("info");
    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="text-sm font-semibold text-slate-700">{sub.title}</span>
                <ArrowDownIcon className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                    <CommitteeBody committee={sub} tab={tab} setTab={setTab} />
                </div>
            )}
        </div>
    );
}

function CommitteeBody({ committee, tab, setTab }: { committee: CommitteeType, tab: string, setTab: (tab: string) => void }) {
    if (committee.editorial) {
        return (
            <div className="space-y-3">
                {committee.editorial.map((e, i) => (
                    <RoleBadge key={i} icon={StarIcon} label={e.role} name={e.name} phone={e.phone} email={e.email} />
                ))}
            </div>
        );
    }

    return (
        <div>
            {/* tab bar */}
            <div className="flex gap-1 rounded-lg  p-1 mb-4">
                {["info", "members"].map(t => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all capitalize ${tab === t
                            ? "bg-white dark:bg-gray-800 dark:text-white text-emerald-700 shadow-sm"
                            : "text-slate-500 dark:text-slate-200 hover:text-slate-700"
                            }`}
                    >
                        {t === "info" ? "Contact & Roles" : `Members (${(committee.members || []).length})`}
                    </button>
                ))}
            </div>

            {tab === "info" && (
                <div className="space-y-3">
                    {committee.chair && (
                        <RoleBadge icon={StarIcon} label="Chairperson" name={committee.chair} phone={committee.chairPhone} email={undefined} />
                    )}
                    {committee.secretary && (
                        <RoleBadge icon={UserIcon} label="Secretary" name={committee.secretary} phone={committee.secretaryPhone} email={undefined} />
                    )}
                    {committee.email && (
                        <a
                            href={`mailto:${committee.email}`}
                            className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 hover:bg-emerald-100 transition-colors"
                        >
                            <EnvelopeSimpleIcon className="h-4 w-4 shrink-0" />
                            <span className="font-medium">{committee.email}</span>
                        </a>
                    )}
                    {committee.note && (
                        <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 leading-relaxed">
                            {committee.note}
                        </p>
                    )}
                    {/* subcommittees (Workshops) */}
                    {committee.subcommittees && (
                        <div className="space-y-2 mt-2">
                            {committee.subcommittees.map(sub => (
                                <SubcommitteePanel key={sub.id} sub={sub} />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {tab === "members" && (
                <div>
                    {committee.members && committee.members.length > 0
                        ? <MemberList members={committee.members} />
                        : <p className="text-sm text-slate-400 italic">See Contact & Roles tab.</p>
                    }
                </div>
            )}
        </div>
    );
}

function CommitteeCard({ committee }: { committee: CommitteeType }) {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("info");

    const subtotal = committee.subcommittees?.reduce((a, s) => a + (s.members?.length ?? 0), 0);
    const directCount = committee.members?.length ?? committee.editorial?.length ?? 0;

    const memberCount = subtotal ?? directCount;
    return (
        <div className={`rounded-2xl border shadow-sm transition-shadow duration-300 overflow-hidden ${open ? "shadow-md border-emerald-200" : "border-slate-200 hover:border-slate-300"}`}>
            <button
                onClick={() => setOpen(o => !o)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
                <div className="flex items-center gap-3 min-w-0">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${open ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                        <UsersIcon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{committee.title}</h3>
                        {!committee.subcommittees && (
                            <p className="text-xs text-slate-400 mt-0.5">
                                {memberCount} member{memberCount !== 1 ? "s" : ""}
                            </p>
                        )}
                    </div>
                </div>
                <ArrowDownIcon className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180 text-emerald-600" : ""}`} />
            </button>

            {open && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <CommitteeBody committee={committee} tab={tab} setTab={setTab} />
                </div>
            )}
        </div>
    );
}

function BigDescription() {
    return (
        <div className="mt-8  border border-gray-200 rounded-xl p-6 black:text-white text-black dark:text-white">
            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm  leading-relaxed"
            >
                To facilitate the work of the Institute, the following committees have been established and will continue to evolve as need arises.
            </motion.p>
        </div>
    )
}

export default function CisonCommittees() {
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
            label: "Committee",
            href: RoutePath.Committee,
            icon: UsersIcon
        }
    ];
    return (
        <>
            <SEO title="Our Committees | Chartered Institute of Statisticians of Nigeria (CISON)" description="Steering Progress Through Data" canonicalUrl={RoutePath.Committee} />
            <PageHero title="Our Committees" subtitle="Steering Progress" catchy="Through Data" breadcrumb={<Breadcrumb Elements={crumbles} />} />
            <main role="main" className="max-w-7xl mx-auto px-6 md:px-14 py-14 flex flex-col gap-14">
                <BigDescription />
                {/* cards */}
                <div className="space-y-3">
                    {Committees.map(c => (
                        <CommitteeCard key={c.id} committee={c} />
                    ))}
                </div>
            </main>
            <CTAStrip />
        </>
    );
}