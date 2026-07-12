
import React from "react";
import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
};

const ConsultancyServicesPage: React.FC = () => {
    return (
        <main className="relative overflow-hidden bg-white dark:bg-gray-950">
            <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent dark:from-emerald-800/20" />

                <motion.div
                    className="mx-auto max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-3">
                        <Badge
                            variant="outline"
                            className="border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300"
                        >
                            <Handshake weight="bold" className="mr-2 h-4 w-4" />
                            Consultancy Services
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl lg:text-6xl"
                    >
                        Statistical <span className="text-emerald-600 dark:text-emerald-400">Consultancy</span> Services
                    </motion.h1>

                    <motion.div variants={fadeUp} className="mt-6">
                        <Card className="border-emerald-200/50 bg-white/80 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-gray-900/80">
                            <CardContent className="prose prose-lg max-w-none dark:prose-invert pt-6">
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                        <strong>Consultancy Services</strong>
                                </ol>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    The Professional Services Committee might bring some income to
                                    the Institute by providing statistical consultancy services to
                                    the public on projects of wide public interest. The Committee
                                    should be in a position to work out details and recommend to
                                    Council for approval, on the modalities for its being
                                    compensated for services rendered to the public.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="group bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                        >
                            <a href="https://cison.org.ng/contact/" target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center gap-2">
                                    Request a Consultation
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

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <hr className="border-gray-200/60 dark:border-gray-800/60" />
            </div>
        </main>
    );
};

export default ConsultancyServicesPage;
