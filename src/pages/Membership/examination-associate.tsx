import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  ArrowRightIcon,
  SignInIcon,
  CurrencyNgnIcon,
  UserSwitchIcon,
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
import RoutePath from "@/routes";
import { fadeUp, Stagger } from "@/animate";


const ExaminationAssociatePage: React.FC = () => {
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
              <GraduationCapIcon weight="bold" className="mr-2 h-4 w-4" />
              Examination Associate
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
            className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 space-y-4"
          >
            <p>
              After the two years of membership, an{" "}
              <a
                href="https://cison.org.ng/portal/associate-statistician/"
                className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                Associate Statistician
              </a>{" "}
              is eligible to begin the sequential examinations to earn the{" "}
              <a
                href="https://cison.org.ng/portal/chartered-statistician/"
                className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                Chartered Statistician
              </a>{" "}
              status, provided s/he has five years of practical experience in
              applying statistics. At this stage, they will be reclassified as{" "}
              <a
                href="https://cison.org.ng/portal/examination-associate/"
                className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                Examination Associates
              </a>{" "}
              if they start the process.
            </p>
            <p>
              Upon successfully earning the <strong>Graduate Certificate</strong>
              , they are designated as{" "}
              <a
                href="https://cison.org.ng/portal/chartered-statistician/"
                className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                Chartered Statisticians
              </a>
              .
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
                  <UserSwitchIcon weight="bold" className="h-5 w-5" />
                  Registered Now!
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
                  >
                    <a
                      href="https://cison.org.ng/members/wp-login.php"
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
                          <TableHead className="text-right">MEMBERS</TableHead>
                          <TableHead className="text-right">RETIRED</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { sn: 1, item: "Annual Dues", member: "₦20,000.00", retired: "₦15,000.00" },
                          { sn: 2, item: "Membership Transition Fee", member: "₦20,000.00", retired: "₦20,000.00" },
                          { sn: 3, item: "CISON’s Development Levy", member: "₦10,000.00", retired: "₦10,000.00" },
                          { sn: 4, item: "New Members Registration Fee *", member: "₦30,000.00", retired: "₦30,000.00" },
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
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">
                    * New Members are not required to pay Membership Transition fee of N20,000.00.
                  </p>

                  <Button
                    variant="outline"
                    className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800/50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
                  >
                    <a href={RoutePath.AnnualFees}>
                      <CurrencyNgnIcon weight="bold" className="mr-2 h-5 w-5" />
                      All Fees
                    </a>
                  </Button>
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

export default ExaminationAssociatePage;