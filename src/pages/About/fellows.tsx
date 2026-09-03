import React from "react";
import { motion } from "framer-motion";
import {
  SignInIcon,
  MedalIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  ArrowsLeftRightIcon,
  TrophyIcon,
  ListChecksIcon,
  ShieldCheckIcon,
  WalletIcon,
  SealCheckIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/animate";
import GroupPhoto from "@/assets/misc/2025-conference/WhatsApp Image 2026-04-12 at 12.00.40 AM (1).jpeg";
import HonoraryPhoto from "@/assets/misc/2025-conference/WhatsApp Image 2026-04-12 at 12.00.21 AM (2).jpeg";
import HeroPhoto from "@/assets/misc/2025-conference/WhatsApp Image 2026-04-12 at 12.00.28 AM.jpeg";



const Fellows: React.FC = () => {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent dark:from-emerald-800/20" />

        <motion.div
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            College of <span className="text-emerald-600 dark:text-emerald-400">Fellows</span>
          </motion.h1>

          {/* Hero image — landscape ~1200×600 */}
          <motion.div variants={fadeUp} className="mt-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30">
              <img
                src={HeroPhoto}
                alt="CISON Fellowship ceremony"
                className="w-full aspect-[2/1] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FELLOWSHIP FRAMEWORK SECTION ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
          >
            {/* Intro */}
            <div
              className="mx-auto max-w-4xl mb-14"
            >
              <div className="flex justify-center">
                <Badge
                  variant="outline"
                  className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
                >
                  <TrophyIcon weight="bold" className="mr-2 h-4 w-4" />
                  Fellowship Framework
                </Badge>
              </div>

              <p className="mt-5 text-xl sm:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed">
                Fellowship constitutes the{" "}
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                  highest professional membership category
                </span>{" "}
                of the Institute, conferred only upon persons who satisfy the requirements
                prescribed under the Act and the Framework.
              </p>

              <p className="mx-auto mt-6 max-w-4xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                There shall be a College of Fellows made up of chartered statisticians who have
                been financially up-to-date members for not less than 15 years and are active in
                the practice and promotion of the profession of statistics. Candidates must clear
                any arrears owed in at least the five years preceding their installation. Chapters
                nominate qualified members and send their names to Council for ratification — no
                one approaches the national body except through their local chapter. Based on
                criteria determined by Council, the number of fellows installed in any year is
                set. The Institute may also install persons considered worthy, or "champions
                of statistics", as honorary fellows.
              </p>
            </div>


            {/* Group photo — landscape ~1200×600 */}
            <div className="mx-auto max-w-4xl mb-14">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30">
                <img
                  src={GroupPhoto}
                  alt="CISON Fellows group photo"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute bottom-4 left-5 text-sm font-medium text-white/90 drop-shadow-sm">
                  College of Fellows — CISON
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-14">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                  <MedalIcon weight="bold" className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50">
                    Categories &amp; Eligibility
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                    Four pathways to Fellowship within the Institute
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                  <CardHeader>
                    <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      <BriefcaseIcon weight="bold" className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                      Professional Practice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Full Member of CISON in good standing</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Minimum 10 years&rsquo; post-qualification experience</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Minimum 5 years as a CISON Registered Statistician with membership certificate</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Evidence of significant professional contribution</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                  <CardHeader>
                    <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      <GraduationCapIcon weight="bold" className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                      Qualification &amp; Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Doctorate or equivalent qualification</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Significant contribution to statistical science</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Distinguished professional standing</li>
                      <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />Minimum 2 years as a CISON Registered Statistician with membership certificate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="sm:col-span-2 border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                  <CardHeader>
                    <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      <ArrowsLeftRightIcon weight="bold" className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                      Fellowship by Transition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Strictly open to existing Fellows of the defunct Nigerian Statistical
                      Association (NSA).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Honorary Fellowship */}
            <div className="mb-14">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                  <TrophyIcon weight="bold" className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50">
                    Honorary Fellowship
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                    Recognising distinction and extraordinary contribution
                  </p>
                </div>
              </div>

              {/* Honorary ceremony image — landscape ~1200×600 */}
              <div className="mb-8 relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30">
                <img
                  src={HonoraryPhoto}
                  alt="Honorary Fellowship conferment ceremony"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute bottom-4 left-5 text-sm font-medium text-white/90 drop-shadow-sm">
                  Honorary Fellowship Conferment
                </span>
              </div>

              <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardContent className="pt-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    An Honorary Fellow of CISON should be someone whose distinction and
                    contribution justify recognition by CISON even though the person has not
                    necessarily followed the normal professional pathway to Fellowship. A person may
                    be considered for Honorary Fellowship where the person:
                  </p>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <ShieldCheckIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          Outstanding reputation &amp; integrity
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          The nominee should be demonstrably a fit and proper person whose conduct
                          is consistent with the dignity of CISON.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <GraduationCapIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          Exceptional contribution to statistics
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          Includes contributions to statistical science &amp; research, education
                          &amp; training, official statistics, data science &amp; evidence-based
                          decision-making, statistical policy, or advancement of statistical
                          methodology.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <TrophyIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          Exceptional contribution to Nigeria through statistics
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          Particularly relevant for non-statisticians — a senior public servant,
                          policymaker, academic, business leader or international development
                          professional who has advanced statistics in Nigeria could qualify.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <SealCheckIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          Distinguished contribution to CISON or the profession
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          Supporting CISON&rsquo;s establishment or growth, promoting professional
                          standards, supporting capacity building, facilitating major programmes, or
                          providing sustained institutional or professional leadership.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <TrophyIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          Distinction above ordinary membership
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          Honorary Fellowship should not be awarded merely because someone is
                          influential, wealthy, politically prominent, a senior government official,
                          or has attended CISON programmes.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <BriefcaseIcon weight="bold" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                          15 years of distinguished service
                        </h3>
                        <p className="mt-1.5 text-lg text-gray-600 dark:text-gray-400">
                          Should ordinarily have at least 15 years of distinguished
                          professional/public service, supported by achievement — not simply years
                          served. This guideline is not an absolute statutory requirement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-6 dark:border-emerald-800/30 dark:bg-emerald-950/30">
                    <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed">
                      The Council may confer Honorary Fellowship on any person who has made
                      exceptional contributions to statistics, national development, academia,
                      public policy, governance, science, research or related fields. Conferment is
                      subject to approval by the Council.
                    </p>
                    <ul className="mt-5 space-y-3 text-lg text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3"><SealCheckIcon weight="bold" className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />An Honorary Fellow shall not automatically qualify as a statutory Fellow under section 1(5) of the Act unless all statutory requirements are satisfied.</li>
                      <li className="flex gap-3"><SealCheckIcon weight="bold" className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />Honorary Fellows shall not vote or contest elections, hold elective office or practice as Chartered Statisticians solely by virtue of the honorary award.</li>
                      <li className="flex gap-3"><SealCheckIcon weight="bold" className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />Honorary Fellows are exempted from CPD requirements.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Requirements */}
            <motion.div variants={fadeUp} className="mb-14 grid gap-6 md:grid-cols-2">
              <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardHeader>
                  <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <ListChecksIcon weight="bold" className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    Additional Fellowship Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Evidence of:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Professional leadership",
                      "Publications",
                      "Mentorship",
                      "Statistical innovation",
                      "Service to CISON",
                      "National or international recognition",
                      "Contribution to statistical development",
                    ].map(item => (
                      <li key={item} className="flex gap-3 text-lg text-gray-700 dark:text-gray-300">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardHeader>
                  <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <ShieldCheckIcon weight="bold" className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    Personality Requirement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    Every applicant for Fellowship shall satisfy the Council that he or she:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                    {[
                      "Possesses good character and professional integrity",
                      "Has not been convicted of fraud, dishonesty or professional misconduct",
                      "Is not under any subsisting disciplinary sanction",
                      "Has complied with continuing professional development requirements",
                      "Has maintained satisfactory professional and ethical standing",
                      "Possesses demonstrable contributions to statistical development, research, administration or practice",
                    ].map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fees */}
            <motion.div variants={fadeUp} className="mb-14">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                  <WalletIcon weight="bold" className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50">
                    Fellowship Fees
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                    Schedule of fees by fellowship pathway
                  </p>
                </div>
              </div>

              <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardContent className="overflow-x-auto p-0">
                  <table className="w-full text-left text-lg">
                    <thead>
                      <tr className="border-b border-emerald-200/50 bg-emerald-50/80 dark:border-emerald-800/30 dark:bg-emerald-950/30">
                        <th className="px-5 py-4 font-semibold text-gray-900 dark:text-gray-50">S/N</th>
                        <th className="px-5 py-4 font-semibold text-gray-900 dark:text-gray-50">ITEM</th>
                        <th className="px-5 py-4 font-semibold text-emerald-700 dark:text-emerald-400">Transition</th>
                        <th className="px-5 py-4 font-semibold text-emerald-700 dark:text-emerald-400">
                          Professional Practice &amp; Qualification &amp; Experience
                        </th>
                        <th className="px-5 py-4 font-semibold text-emerald-700 dark:text-emerald-400">Honorary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Application Fee", "N20,000", "N50,000", "N100,000"],
                        ["NSA Transitional Migration fee", "N20,000", "N0", "N0"],
                        ["Assessment Fee", "N20,000", "N250,000", "N350,000"],
                        ["Enrolment / Registration Fee", "N10,000", "N100,000", "N150,000"],
                        ["Insignia / Induction Fee", "N130,000", "N200,000", "N200,000"],
                      ].map(([item, transition, prof, hon], i) => (
                        <tr
                          key={item}
                          className="border-b border-gray-200/60 dark:border-gray-800/60"
                        >
                          <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{i + 1}</td>
                          <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{item}</td>
                          <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{transition}</td>
                          <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{prof}</td>
                          <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{hon}</td>
                        </tr>
                      ))}
                      <tr className="bg-emerald-50/60 font-semibold dark:bg-emerald-950/40">
                        <td className="px-5 py-4 text-gray-900 dark:text-gray-50" colSpan={2}>Total</td>
                        <td className="px-5 py-4 text-gray-900 dark:text-gray-50">N200,000</td>
                        <td className="px-5 py-4 text-gray-900 dark:text-gray-50">N600,000</td>
                        <td className="px-5 py-4 text-gray-900 dark:text-gray-50">N800,000</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>

            {/* Conferment */}
            <motion.div variants={fadeUp}>
              <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                      <SealCheckIcon weight="bold" className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-50">
                        Conferment of Fellowship
                      </h2>
                      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Fellowship shall take effect upon formal conferment by the President of the
                        Institute following approval by the Governing Council and completion of all
                        registration requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== ALREADY A MEMBER SECTION ===== */}
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
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-300">
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
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200/60 dark:border-gray-800/60" />
      </div>
    </main>
  );
};

export default Fellows;