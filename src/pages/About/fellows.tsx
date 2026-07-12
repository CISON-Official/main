import React from "react";
import { motion } from "framer-motion";
import { SignInIcon, MedalIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, Stagger } from "@/animate";



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
          initial="hidden"
          animate="visible"
          variants={Stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
            >
              <MedalIcon weight="bold" className="mr-2 h-4 w-4" />
              Fellows
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            College of <span className="text-emerald-600 dark:text-emerald-400">Fellows</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6"
          >
            <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
              <CardContent className="prose prose-lg max-w-none dark:prose-invert pt-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  There shall be a College of Fellows to be made up of chartered
                  statisticians who must have been financially up-to-date
                  members for not less than 15 years and must be seen to be
                  active in the practice and promotion of the profession of
                  statistics. If they are in arrears of payment of their dues
                  and they are nominated, they must first of all clear such dues
                  owed in at least the five years preceding that date before
                  they are installed as fellows. To be installed as fellows,
                  Chapters will nominate those they think are qualified to be
                  fellows and send their names to Council. The implication is
                  that if a person does not participate in the activities of the
                  local chapter, s/he will not be nominated. Nobody should come
                  directly to the national body except through the chapters.
                  This practice will make members to be active at the local
                  level. However, it would be the responsibility of Council to
                  ratify those nominations. Based on some criteria to be
                  determined by Council, the number of those to be made fellows
                  in any particular year would be determined. The Institute
                  could also install persons considered worthy or “champions of
                  statistics” as honorary fellows.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ALREADY A MEMBER SECTION ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
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