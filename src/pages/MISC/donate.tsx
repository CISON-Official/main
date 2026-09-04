import React from "react";
import { motion } from "framer-motion";
import {
  HeartIcon,
  ArrowRightIcon,
  GraduationCapIcon,
  BooksIcon,
  UsersIcon,
  GlobeIcon,
  ChartLineUpIcon,
  LightbulbIcon,
  BuildingsIcon,
  CpuIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, Stagger } from "@/animate";

const whyDonateItems = [
  {
    icon: GraduationCapIcon,
    title: "Advance Statistical Education",
    description:
      "Fund scholarships and training programmes that empower the next generation of statisticians across Nigeria's universities and polytechnics.",
  },
  {
    icon: BooksIcon,
    title: "Support Research & Innovation",
    description:
      "Enable cutting-edge research in data science, econometrics, and official statistics that directly informs national policy and development.",
  },
  {
    icon: UsersIcon,
    title: "Build Professional Capacity",
    description:
      "Sponsor workshops, continuous professional development programmes, and professional examinations that raise the bar for statisticians nationwide.",
  },
  {
    icon: GlobeIcon,
    title: "Strengthen the Profession",
    description:
      "Support CISON's advocacy for global recognition, professional standards, and the enforcement of the CISON Act across all sectors.",
  },
];

const fundUsageItems = [
  {
    icon: TrendUpIcon,
    title: "Student Scholarships & Bursaries",
    description:
      "Financial support for undergraduate and postgraduate students pursuing degrees in statistics and related disciplines.",
  },
  {
    icon: ChartLineUpIcon,
    title: "Annual International Conferences",
    description:
      "Funding world-class conferences that bring together statisticians, data scientists, and policymakers from across the globe.",
  },
  {
    icon: LightbulbIcon,
    title: "Training & Capacity Building",
    description:
      "Developing and delivering training programmes, CPD workshops, and professional certification courses for practicing statisticians.",
  },
  {
    icon: CpuIcon,
    title: "Infrastructure & Digital Transformation",
    description:
      "Investing in technology, digital tools, and modern infrastructure to position CISON at the forefront of the data revolution.",
  },
];

const DonatePage: React.FC = () => {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent dark:from-emerald-800/20" />

        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="show"
          variants={Stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Badge
              variant="outline"
              className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
            >
              <HeartIcon weight="fill" className="mr-2 h-4 w-4" />
              Donate to CISON
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            Support the Future of{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Statistical Excellence
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-2xl mx-auto space-y-4 text-lg text-gray-600 dark:text-gray-300"
          >
            <p>
              For over 50 years, the{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                Chartered Institute of Statisticians of Nigeria (CISON)
              </strong>{" "}
              has been the cornerstone of statistical professionalism in Nigeria — setting standards, building capacity, and driving data-informed development.
            </p>
            <p>
              Your generous contribution helps us continue this vital mission.
              Every donation, no matter the size, makes a real difference.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button
              size="lg"
              className="group bg-emerald-600 px-8 text-base hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <a
                href="https://my.cison.org.ng/donation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <HeartIcon weight="fill" className="mr-2 h-5 w-5" />
                Donate Now
                <ArrowRightIcon
                  weight="bold"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT CISON SECTION ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={Stagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
              >
                <BuildingsIcon weight="bold" className="mr-2 h-4 w-4" />
                About CISON
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 sm:text-4xl"
            >
              Who We Are
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-8 space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            >
              <p>
                The Chartered Institute of Statisticians of Nigeria (CISON) is the
                apex professional body for statisticians in Nigeria, established
                by an Act of the National Assembly (CISON Act, 2022). We are
                mandated to regulate, promote, and advance the practice of
                statistics across all sectors of the Nigerian economy.
              </p>
              <p>
                With a membership spanning academia, government, private sector,
                and international organisations, CISON plays a pivotal role in
                shaping Nigeria's national statistical system. From accrediting
                institutions and courses to conducting professional examinations
                and hosting international conferences, we are at the forefront of
                ensuring that data-driven decision-making becomes the norm — not
                the exception.
              </p>
              <p>
                Our work directly supports national development goals, from the
                Sustainable Development Goals (SDGs) to economic planning,
                governance, and accountability. But we cannot do it alone. We
                need your support to expand our reach and deepen our impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY DONATE SECTION ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={Stagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
              >
                <HeartIcon weight="fill" className="mr-2 h-4 w-4" />
                Why Donate
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 sm:text-4xl"
            >
              Your Contribution Matters
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Donations to CISON directly fuel the growth of statistical
              excellence in Nigeria. Here is why your support is critical.
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={Stagger}
            >
              {whyDonateItems.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="group h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-lg dark:border-emerald-800/30 dark:bg-gray-900/80 dark:hover:border-emerald-700/50">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                        <item.icon weight="bold" className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW FUNDS WILL BE USED SECTION ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={Stagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
              >
                <ChartLineUpIcon weight="bold" className="mr-2 h-4 w-4" />
                Impact
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 sm:text-4xl"
            >
              Where Your Donation Goes
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Every naira donated is invested in programmes and initiatives that
              build a stronger statistical profession for Nigeria.
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={Stagger}
            >
              {fundUsageItems.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="group h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-lg dark:border-emerald-800/30 dark:bg-gray-900/80 dark:hover:border-emerald-700/50">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                        <item.icon weight="bold" className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 sm:p-12 text-center dark:from-emerald-700 dark:to-emerald-800"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={Stagger}
          >
            <motion.div variants={fadeUp}>
              <HeartIcon
                weight="fill"
                className="mx-auto h-12 w-12 text-emerald-200 mb-6"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Your Contribution Makes a Difference
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto"
            >
              Whether you are an individual, corporation, or institution, your
              support empowers CISON to shape the future of statistics in Nigeria
              and beyond.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Button
                size="lg"
                className="group bg-white px-8 text-base text-emerald-700 hover:bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-100 dark:hover:bg-emerald-900"
              >
                <a
                  href="https://my.cison.org.ng/donation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <HeartIcon weight="fill" className="mr-2 h-5 w-5" />
                  Donate Now
                  <ArrowRightIcon
                    weight="bold"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm text-emerald-200"
            >
              Secure donation via Paystack. All transactions are encrypted.
            </motion.p>
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

export default DonatePage;
