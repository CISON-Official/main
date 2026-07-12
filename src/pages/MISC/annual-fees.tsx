import React from "react";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  ArrowRightIcon,
  SignInIcon,
  UserPlusIcon,
  CreditCardIcon,
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
import RoutePath from "@/routes";


const AnnualFeesPage: React.FC = () => {
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
              <CurrencyDollarIcon weight="bold" className="mr-2 h-4 w-4" />
              Annual Fees
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            Levies, Dues and other Ancillary Fees.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Discover detailed information about annual fees for all individual
            membership types and their combination packages. Additionally, find
            out about the available payment methods.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== FEES TABLE SECTION ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
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
              <CardContent className="space-y-6">
                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-800/50">
                        <TableHead className="w-16">S/N</TableHead>
                        <TableHead>ITEM</TableHead>
                        <TableHead className="text-right">STUDENT</TableHead>
                        <TableHead className="text-right">MEMBER</TableHead>
                        <TableHead className="text-right">RETIRED</TableHead>
                        <TableHead className="text-right">CORPORATE</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          sn: 1,
                          item: "Annual Dues",
                          student: "₦5,000.00",
                          member: "₦20,000.00",
                          retired: "₦15,000.00",
                          corporate: "₦200,000.00",
                        },
                        {
                          sn: 2,
                          item: "Membership Transition Fee",
                          student: "N/A",
                          member: "₦20,000.00",
                          retired: "₦20,000.00",
                          corporate: "N/A",
                        },
                        {
                          sn: 3,
                          item: "CISON’s Development Levy",
                          student: "₦5,000.00",
                          member: "₦20,000.00",
                          retired: "₦20,000.00",
                          corporate: "N/A",
                        },
                        {
                          sn: 4,
                          item: "New Members Registration Fee *",
                          student: "₦10,000.00",
                          member: "₦50,000.00",
                          retired: "₦50,000.00",
                          corporate: "₦50,000.00",
                        },
                      ].map((row) => (
                        <TableRow key={row.sn}>
                          <TableCell>{row.sn}.</TableCell>
                          <TableCell className="font-medium">{row.item}</TableCell>
                          <TableCell className="text-right">{row.student}</TableCell>
                          <TableCell className="text-right">{row.member}</TableCell>
                          <TableCell className="text-right">{row.retired}</TableCell>
                          <TableCell className="text-right">{row.corporate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">
                  * New Members are not required to pay Membership Transition fee
                  of N20,000.00.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Also see the available{" "}
                    <a
                      href={RoutePath.HowToPay}
                      className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
                    >
                      Methods of Payment
                    </a>
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="group bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                  >
                    <a
                      href="https://my.cison.org.ng/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <UserPlusIcon weight="bold" className="mr-2 h-5 w-5" />
                      Register Now!
                      <ArrowRightIcon
                        weight="bold"
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800/50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
                  >
                    <a
                      href="https://my.cison.org.ng/members/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CreditCardIcon weight="bold" className="mr-2 h-5 w-5" />
                      Pay Your Fees
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ===== ALREADY A MEMBER? SECTION ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 sm:w-auto"
                >
                  <a
                    href="https://my.cison.org.ng"
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
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200/60 dark:border-gray-800/60" />
      </div>
    </main>
  );
};

export default AnnualFeesPage;