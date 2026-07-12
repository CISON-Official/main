
import React from "react";
import { motion } from "framer-motion";
import { Users, SignIn, Compass, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const MentoringScheme: React.FC = () => {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/50 to-transparent dark:from-teal-950/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-teal-200/30 via-transparent to-transparent dark:from-teal-800/20" />

        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-teal-200 bg-teal-50/80 px-4 py-1.5 text-sm font-medium text-teal-700 dark:border-teal-800/50 dark:bg-teal-950/30 dark:text-teal-300"
            >
              <Compass weight="bold" className="mr-2 h-4 w-4" />
              Mentoring Scheme
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            Mentoring Scheme for{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Associate Statisticians
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6">
            <Card className="border-teal-200/50 bg-white/80 backdrop-blur-sm dark:border-teal-800/30 dark:bg-gray-900/80">
              <CardContent className="prose prose-lg max-w-none dark:prose-invert pt-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  CISON has instituted a mentoring scheme which would be like a
                  service to its Associate Statisticians. The scheme would
                  provide advice and guidance. Interested persons would need to
                  prepare themselves to apply for the Chartered Statistician
                  status. The advice would usually be provided by volunteer
                  mentors who are themselves Chartered Statisticians. Information
                  about the scheme is to be provided in a kind of{" "}
                  <a
                    href="http://www.rss.org.uk/uploadedfiles/userfiles/files/Prof_memb_-_Mentoring_notes_for_guidance.pdf"
                    className="text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guidance
                  </a>{" "}
                  Notes that would be available to both mentees and mentors.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button
              asChild
              size="lg"
              className="group bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400"
            >
              <a
                href="https://cison.org.ng/members/wp-login.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <Users weight="bold" className="h-5 w-5" />
                  Begin the Process – Register now!
                  <ArrowRight
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </Button>
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
            <Card className="border-teal-200/50 bg-white/80 backdrop-blur-sm dark:border-teal-800/30 dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
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
                  asChild
                  variant="default"
                  className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 sm:w-auto"
                >
                  <a
                    href="https://cison.org.ng/members/wp-login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SignIn weight="bold" className="mr-2 h-5 w-5" />
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

export default MentoringScheme;