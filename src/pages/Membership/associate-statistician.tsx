import React from "react";
import { motion } from "framer-motion";
import { ChartBarIcon, ArrowRightIcon, SignInIcon, CurrencyNgnIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { fadeUp, Stagger } from "@/animate";
import RoutePath from "@/routes";



const AssociateStatisticianPage: React.FC = () => {
    return (
        <main className="relative overflow-hidden bg-white dark:bg-gray-950">
            {/* ===== HERO SECTION ===== */}
            <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                {/* Decorative background */}
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent dark:from-emerald-800/20" />

                <motion.div
                    className="mx-auto max-w-4xl"
                    initial="hidden"
                    animate="show"
                    variants={Stagger}
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-3">
                        <Badge
                            variant="outline"
                            className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
                        >
                            <ChartBarIcon weight="bold" className="mr-2 h-4 w-4" />
                            Associate Statistician
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
                    >
                        Be Officially Recognized.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
                    >
                        Individuals who have the necessary academic qualifications to be
                        Chartered Statisticians but do not have at least five years of
                        practical experience are encouraged to apply for the qualification
                        of Associate Statistician (<strong className="text-emerald-600 dark:text-emerald-400">A.Stat.</strong>), after two years'
                        membership of the CISON.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Button

                            size="lg"
                            className="group relative overflow-hidden bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                        >
                            <a
                                href={RoutePath.ProfessionalAccreditation}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative flex items-center gap-2">
                                    Requirements for the Chartered Statistician
                                    <ArrowRightIcon
                                        weight="bold"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </a>
                        </Button>

                        <Button

                            size="lg"
                            variant="outline"
                            className="group border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-800/50 dark:text-emerald-300 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-200"
                        >
                            <a
                                href="https://my.cison.org.ng/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative flex items-center gap-2">
                                    Begin the Process
                                    <ArrowRightIcon
                                        weight="bold"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ===== MEMBER & FEES SECTIONS (Bento Grid) ===== */}
            <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Already a Member? Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                        >
                            <Card className="h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl">
                                        <Badge
                                            variant="secondary"
                                            className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                                        >
                                            Already a Member?
                                        </Badge>
                                        <span className="text-gray-400">→</span>
                                        <span className="text-base font-normal text-gray-600 dark:text-gray-300">
                                            Current and Former Members
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button

                                        variant="default"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                                    >
                                        <a
                                            href="https://my.cison.org.ng/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SignInIcon weight="bold" className="mr-2 h-5 w-5" />
                                            Sign in or Recover your Account Here
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Annual Fees Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl">
                                        <Badge
                                            variant="secondary"
                                            className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                                        >
                                            Annual Fees
                                        </Badge>
                                        <span className="text-gray-400">→</span>
                                        <span className="text-base font-normal text-gray-600 dark:text-gray-300">
                                            Dues, Levies, etc.
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-gray-50 dark:bg-gray-800/50">
                                                    <TableHead className="w-16">S/N</TableHead>
                                                    <TableHead>ITEM</TableHead>
                                                    <TableHead className="text-right">MEMBER</TableHead>
                                                    <TableHead className="text-right">RETIRED</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {[
                                                    { sn: 1, item: "Annual Dues", member: "₦20,000.00", retired: "₦15,000.00" },
                                                    { sn: 2, item: "Membership Transition Fee", member: "₦20,000.00", retired: "₦20,000.00" },
                                                    { sn: 3, item: "CISON’s Development Levy", member: "₦10,000.00", retired: "₦10,000.00" },
                                                ].map((row) => (
                                                    <TableRow key={row.sn}>
                                                        <TableCell>{row.sn}.</TableCell>
                                                        <TableCell className="font-medium">{row.item}</TableCell>
                                                        <TableCell className="text-right">{row.member}</TableCell>
                                                        <TableCell className="text-right">{row.retired}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Discover detailed information about annual fees for all{" "}
                                        <strong className="text-emerald-600 dark:text-emerald-400">
                                            Chartered Statisticians
                                        </strong>{" "}
                                        and their combination packages. Additionally, find out about
                                        the available payment methods.
                                    </p>

                                    <Button

                                        variant="outline"
                                        className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800/50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
                                    >
                                        <a href={RoutePath.AnnualFees}>
                                            <CurrencyNgnIcon weight="bold" className="mr-2 h-5 w-5" />
                                            All CISON Fees & Dues
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DECORATIVE DIVIDER (optional) ===== */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <hr className="border-gray-200/60 dark:border-gray-800/60" />
            </div>
        </main>
    );
};

export default AssociateStatisticianPage;