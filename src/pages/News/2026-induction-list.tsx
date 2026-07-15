import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    GraduationCapIcon,
    UserIcon,
    CertificateIcon,
    UserCheckIcon,
    NotebookIcon,
    InfoIcon
} from '@phosphor-icons/react';
import SEO from '@/components/SEO';
import RoutePath from '@/routes';
import { Franklin } from '@/authors';


const INDUCTEE_IDS = [
    "20240083", "20240404", "20240519", "20240704", "20240906", "20241321", "20250011", "20250012", "20250018", "20250043",
    "20250044", "20250050", "20250058", "20250060", "20250091", "20250093", "20250095", "20250099", "20250107", "20250115", "20250122",
    "20250129", "20250153", "20250213", "20250170", "20250202", "20250203", "20250204", "20250206", "20250234", "20250188", "20250243",
    "20250259", "20250258", "20250261", "20250263", "20250270", "20250273", "20250278", "20250279", "20250280", "20250281", "20250286",
    "20250290", "20250292", "20250299", "20250300", "20250342", "20250521", "20250579", "20250645", "20250734", "20260303", "20250761",
    "20250898", "20260188", "20251154", "20251162", "20260016", "20260020", "20260043", "20260065", "20260084", "20260085", "20260102",
    "20260184", "20260190", "20260202", "20260214", "20260216", "20260238", "20260263", "20260276", "20260279", "20260322", "20260326",
    "20260335", "20260336", "20260346", "20260386", "20260407", "20260416", "20260435", "20260472", "20260544", "20260561", "20260550",
];

export default function InductionPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredInductees = useMemo(() => {
        return INDUCTEE_IDS.filter(id =>
            id.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <SEO title="Induction list" description='Verify official CISON inducted members. View eligibility criteria, certificate issuance protocols, and advanced professional exam pathways for new inductees.' canonicalUrl={RoutePath.InductionList2026} publishedTime={new Date("15/07/2026").toString()} author={Franklin.pageName} keywords={"CISON induction list, CISON membership verification, CISON inducted members, CISON professional registry,how to become a recognized member of CISON, CISON membership induction requirements, CISON professional examination eligibility, CISON member screening, registration,CISON membership certificate collection"} />
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Intro Section (Shadcn-style Card) */}
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCapIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" weight="duotone" />
                        <h1 className="text-3xl font-bold tracking-tight">CISON Induction List</h1>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-lg leading-relaxed">
                        The formal induction ceremony marks the official entry of qualified candidates into the institute.
                        Inductees are presented with their official certificates, certifying their status as recognized
                        members of CISON and granting them the academic eligibility required to progress further within the professional framework.
                    </p>

                    {/* Qualification & Privileges Grid */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="flex gap-3 items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                            <CertificateIcon className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                            <div>
                                <h3 className="font-semibold text-sm">Certificate Issuance</h3>
                                <p className="text-xs text-slate-500 mt-1">Qualified to receive official CISON membership certificates.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                            <NotebookIcon className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                            <div>
                                <h3 className="font-semibold text-sm">Exam Advancement</h3>
                                <p className="text-xs text-slate-500 mt-1">Eligible to progress and write advanced professional examinations.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                            <UserCheckIcon className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                            <div>
                                <h3 className="font-semibold text-sm">Official Recognition</h3>
                                <p className="text-xs text-slate-500 mt-1">Registered as fully recognized, active members of CISON.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
                {/* List Section */}
                <section className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Class of 2026 Inductees</h2>
                            <p className="text-sm text-slate-500 mt-0.5">Showing {filteredInductees.length} verified members</p>
                        </div>

                        {/* Search Input (Shadcn-style Input) */}
                        <div className="relative w-full sm:w-72">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search Member ID..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 text-sm rounded-md border border-slate-200 bg-white shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:focus-visible:ring-slate-700"
                            />
                        </div>
                    </div>

                    {/* Inductee Cards Grid */}
                    <motion.div
                        layout
                        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredInductees.map((id) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    key={id}
                                    className="group relative flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                                        <UserIcon className="h-5 w-5" weight="bold" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Inductee</span>
                                        <span className="font-mono text-sm font-semibold tracking-tight text-slate-700 dark:text-slate-300">{id}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredInductees.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 border border-dashed border-slate-200 rounded-xl dark:border-slate-800"
                        >
                            <p className="text-slate-400 text-sm">No member matching "{searchQuery}" was found.</p>
                        </motion.div>
                    )}
                </section>

                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-950/40 dark:bg-emerald-950/10"
                >
                    <div className="flex gap-3">
                        <InfoIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" weight="bold" />
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p>
                                To be induced, you have to register as a member of CISON; complete your profile; and be financially up to date. Then you will be screened.
                            </p>
                            <p className="font-medium text-slate-700 dark:text-slate-300">
                                Induction is for new members. Transiting members do not need induction.
                            </p>
                        </div>
                    </div>
                </motion.footer>

            </div>
        </main>
    );
}
