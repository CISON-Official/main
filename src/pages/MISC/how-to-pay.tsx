
import React from "react";
import { motion } from "framer-motion";
import {
  LayoutIcon,
  BankIcon,
  CreditCardIcon,
  ArrowRightIcon,
  SignInIcon,
  LockIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, Stagger } from "@/animate";



const HowToPayPage: React.FC = () => {
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
              <CreditCardIcon weight="bold" className="mr-2 h-4 w-4" />
              How to Pay
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
          >
            How to Make <span className="text-emerald-600 dark:text-emerald-400">Payments</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-2xl space-y-4 text-lg text-gray-600 dark:text-gray-300"
          >
            <p>
              We offer multiple secure payment options via{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                Paystack
              </strong>
              , including <strong>Card Payment</strong>,{" "}
              <strong>Bank Transfer</strong>, <strong>USSD</strong>, and other
              locally accepted payment methods.
            </p>
            <p>
              To proceed with any payment, you must{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                log in
              </strong>{" "}
              to your account or{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                register
              </strong>{" "}
              as a new member. Follow the steps below to complete your payment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STEPS SECTION (BENTO GRID) ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={Stagger}
          >
            {/* Step 1 */}
            <motion.div variants={fadeUp} whileHover="hover" initial="initial" animate="initial">
              <Card className="group relative h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm transition-all dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                    <SignInIcon weight="bold" className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 1: Log in or Register</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Existing Members:
                    </p>
                    <ul className="ml-4 list-disc space-y-1">
                      <li>
                        Click the <strong>Login</strong> button below and enter
                        your credentials.
                      </li>
                      <li>
                        If you’ve forgotten your password, use the{" "}
                        <strong>Forgot Password</strong> link to reset it.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      New Members:
                    </p>
                    <ul className="ml-4 list-disc space-y-1">
                      <li>
                        If you’re not yet registered, click the{" "}
                        <strong>Register</strong> button.
                      </li>
                      <li>
                        Fill out the registration form, verify your email, and
                        log in to your account.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} whileHover="hover" initial="initial" animate="initial">
              <Card className="group relative h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm transition-all dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                    <LayoutIcon weight="bold" className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 2: Navigate to Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>Once logged in:</p>
                  <ol className="ml-4 list-decimal space-y-2">
                    <li>
                      Go to your <strong>Member Dashboard</strong>.
                    </li>
                    <li>
                      Select the <strong>Make Payment</strong> option or visit
                      the relevant section for dues, fees, or event payments.
                    </li>
                    <li>
                      You’ll see the total amount payable, including any
                      outstanding payments.
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUp} whileHover="hover" initial="initial" animate="initial">
              <Card className="group relative h-full border-emerald-200/50 bg-white/80 backdrop-blur-sm transition-all dark:border-emerald-800/30 dark:bg-gray-900/80">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                    <BankIcon weight="bold" className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 3: Choose Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>On the payment page, you can choose:</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Card Payment:
                    </p>
                    <ul className="ml-4 list-disc space-y-1">
                      <li>
                        Enter your debit/credit card details and confirm the
                        transaction.
                      </li>
                      <li>
                        You’ll receive a confirmation email once your payment is
                        successful.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Bank Transfer:
                    </p>
                    <ul className="ml-4 list-disc space-y-1">
                      <li>
                        Select <strong>Bank Transfer</strong> as your payment
                        option.
                      </li>
                      <li>
                        Follow the instructions to transfer the specified amount.
                      </li>
                      <li>
                        Be sure to enter the correct reference number during the
                        transfer process.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <Button
              size="lg"
              className="group bg-emerald-600 px-8 text-base hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <a
                href="https://my.cison.org.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SignInIcon weight="bold" className="mr-2 h-5 w-5" />
                Login / Register
                <ArrowRightIcon
                  weight="bold"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <LockIcon weight="bold" className="h-4 w-4" />
              Secured by Paystack
              <span className="mx-2 h-4 w-px bg-gray-300 dark:bg-gray-700" />
              <CheckCircleIcon weight="bold" className="h-4 w-4 text-emerald-500" />
              100% Secure
            </div>
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

export default HowToPayPage;
