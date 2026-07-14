
import React from 'react';
import { motion } from 'framer-motion';
import {
    TrophyIcon, ArrowRightIcon,
    CaretRightIcon,
    UserIcon,
    CurrencyNgnIcon,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import RoutePath from '@/routes';


const HeroSection: React.FC = () => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full bg-linear-to-r from-green-50 to-white py-16 md:py-24"
    >
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                    <TrophyIcon size={18} weight="fill" className="text-green-600" />
                    <span>Chartered Statistician</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Become Recognized and Chartered!
                </h1>
            </div>
        </div>
    </motion.section>
);

const RequirementsSection: React.FC = () => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 md:px-6 md:py-16"
    >
        <div className="mx-auto max-w-4xl">
            <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                    To be considered for accreditation to the{' '}
                    <strong className="text-green-700">Chartered Statistician (C.Stat.)</strong> status,
                    the applicant is expected to have been a member of the Chartered Institute of
                    Statisticians of Nigeria for at least two (2) years and has earned the{' '}
                    <strong className="text-green-700">A.Stat. accreditation</strong>. The candidate
                    should also have a CISON accredited degree and has been working in a statistical
                    role with at least five (5) years of work experience.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    In exceptional circumstances, long standing members with sufficient theoretical
                    and applied statistical knowledge and considered highly competent by the{' '}
                    <strong className="text-green-700">Accreditation Committee</strong> based on
                    their statistical role and at least ten (10) years practical experience applying
                    statistics, could be admitted to the{' '}
                    <strong className="text-green-700">C.Stat.</strong> status.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    This would include asking them a series of competency-based questions as part of
                    their application or asking them to produce some statistical reports.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
                <Button
                    variant="default"
                    className="group bg-green-600 px-6 py-6 text-base text-white hover:bg-green-700"
                >
                    <a href={RoutePath.ProfessionalAccreditation}>
                        <span className="flex items-center gap-2">
                            <span>Requirements for the Chartered Statistician).</span>
                            <ArrowRightIcon
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </span>
                    </a>
                </Button>
                <Button
                    variant="outline"
                    className="group border-green-600 px-6 py-6 text-base text-green-600 hover:bg-green-50"
                >
                    <a
                        href="https://my.cison.org.ng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="flex items-center gap-2">
                            <span>Begin the Process</span>
                            <ArrowRightIcon
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </span>
                    </a>
                </Button>
            </motion.div>
        </div>
    </motion.section>
);

const MembershipSection: React.FC = () => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-green-50 py-12 md:py-16"
    >
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-gray-900">Already a Member?</h3>
                    <CaretRightIcon
                        size={28}
                        weight="bold"
                        className="hidden text-green-600 md:block"
                    />
                    <span className="text-lg font-medium text-gray-700">
                        Current and Former Members
                    </span>
                </div>
                <Button
                    variant="default"
                    className="w-full bg-green-600 px-6 py-6 text-base text-white hover:bg-green-700 md:w-auto"
                >
                    <a
                        href="https://my.cison.org.ng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="flex items-center gap-2">
                            <UserIcon size={20} />
                            <span>Sign in or Recover your Account Here</span>
                        </span>
                    </a>
                </Button>
            </div>
        </div>
    </motion.section>
);

const FeesSection: React.FC = () => {
    const feesData = [
        { sn: 1, item: 'Annual Dues', member: '₦20,000.00', retired: '₦15,000.00' },
        { sn: 2, item: 'Membership Transition Fee', member: '₦20,000.00', retired: '₦20,000.00' },
        { sn: 3, item: "CISON's Development Levy", member: '₦10,000.00', retired: '₦10,000.00' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 py-12 md:px-6 md:py-16"
        >
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-gray-900">Annual Fees</h3>
                    <CaretRightIcon
                        size={28}
                        weight="bold"
                        className="hidden text-green-600 md:block"
                    />
                    <span className="text-lg font-medium text-gray-700">Dues, Levies, etc.</span>
                </div>

                <Card className="overflow-hidden border-0 shadow-md">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-green-50">
                                    <TableHead className="w-16 font-semibold">S/N</TableHead>
                                    <TableHead className="font-semibold">ITEM</TableHead>
                                    <TableHead className="text-right font-semibold">MEMBER</TableHead>
                                    <TableHead className="text-right font-semibold">RETIRED MEMBER</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {feesData.map((fee) => (
                                    <TableRow key={fee.sn} className="hover:bg-gray-50">
                                        <TableCell className="font-medium">{fee.sn}.</TableCell>
                                        <TableCell>{fee.item}</TableCell>
                                        <TableCell className="text-right">{fee.member}</TableCell>
                                        <TableCell className="text-right">{fee.retired}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="prose prose-green mt-8 max-w-none">
                    <p className="text-lg text-gray-700">
                        Discover detailed information about annual fees for all{' '}
                        <strong>Chartered Statisticians</strong> and their combination packages.
                        Additionally, find out about the available payment methods.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-6"
                >
                    <Button
                        variant="default"
                        className="bg-green-600 px-6 py-6 text-base text-white hover:bg-green-700"
                    >
                        <a href={RoutePath.AnnualFees}>
                            <span className="flex items-center gap-2">
                                <CurrencyNgnIcon size={20} />
                                <span>All CISON Fees &amp; Dues</span>
                                <ArrowRightIcon
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </span>
                        </a>
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};

// --- Main Component (replace content between Header and Footer) ---
export const CharteredStatisticianPage: React.FC = () => {
    return (
        <main className="flex-1 bg-white">
            <HeroSection />
            <RequirementsSection />
            <MembershipSection />
            <FeesSection />
        </main>
    );
};

export default CharteredStatisticianPage;
