import React from "react";
import { motion } from "framer-motion";
import {
    StudentIcon,
    ArrowRightIcon,
    SignInIcon,
    UsersIcon,
} from "@phosphor-icons/react";
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



const StudentMemberPage: React.FC = () => {
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
                    animate="visible"
                    variants={Stagger}
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-3">
                        <Badge
                            variant="outline"
                            className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
                        >
                            <StudentIcon weight="bold" className="mr-2 h-4 w-4" />
                            Student Member
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
                    >
                        Explore Our Membership Options
                    </motion.h1>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 max-w-2xl space-y-4 text-lg text-gray-600 dark:text-gray-300"
                    >
                        <p>
                            Student members are those in at least the HND classes for
                            Polytechnics and 200 levels for Universities.
                        </p>
                        <p>
                            Students are to pay an annual membership fee of{" "}
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                                ₦5,000.00
                            </span>
                            . This entitles them to have access to e-copies of our Newsletters
                            and Journals. However, they may wish to identify with the local
                            chapters of CISON, where they reside. If they want to attend the
                            annual conference, then they must be ready to pay the applicable
                            conference fees.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-8">
                        <Button
                            size="lg"
                            className="group relative overflow-hidden bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                        >
                            <a
                                href="https://cison.org.ng/members/wp-login.php"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative flex items-center gap-2">
                                    <UsersIcon weight="bold" className="h-5 w-5" />
                                    Register Now!
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
                            whileInView="visible"
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
                                    // No href – kept as a button per original spec
                                    >
                                        <SignInIcon weight="bold" className="mr-2 h-5 w-5" />
                                        Sign in or Recover your Account Here
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Annual Fees Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
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
                                                    <TableHead className="text-right">STUDENT</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {[
                                                    { sn: 1, item: "Annual Dues", amount: "₦5,000.00" },
                                                    {
                                                        sn: 2,
                                                        item: "Membership Transition Fee *",
                                                        amount: "₦0.00",
                                                    },
                                                    {
                                                        sn: 3,
                                                        item: "CISON’s Development Levy",
                                                        amount: "₦0.00",
                                                    },
                                                    {
                                                        sn: 4,
                                                        item: "New Members Registration Fee",
                                                        amount: "₦0.00",
                                                    },
                                                    {
                                                        sn: 5,
                                                        item: "Conference fee – Onsite",
                                                        amount: "₦100,000.00",
                                                    },
                                                    {
                                                        sn: 6,
                                                        item: "Conference fee – Virtual",
                                                        amount: "₦80,000.00",
                                                    },
                                                    {
                                                        sn: 7,
                                                        item: "Pre-Conference Workshop",
                                                        amount: "₦75,000.00",
                                                    },
                                                ].map((row) => (
                                                    <TableRow key={row.sn}>
                                                        <TableCell>{row.sn}.</TableCell>
                                                        <TableCell className="font-medium">{row.item}</TableCell>
                                                        <TableCell className="text-right">{row.amount}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400">
                                        * New Members are not required to pay Membership Transition
                                        fee.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DECORATIVE DIVIDER ===== */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <hr className="border-gray-200/60 dark:border-gray-800/60" />
            </div>
        </main>
    );
};

export default StudentMemberPage;