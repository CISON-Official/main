import { AnimatedSection } from "@/pages/About";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RoutePath from "@/routes";

export interface MVVCardProps {
    label: string;
    icon: React.ReactNode;
    quote: string;
    values?: string[];
    index: number;
}

export default function CTAStrip() {
    return (
        <AnimatedSection>
            <div className="bg-[#0d1e14] border-y border-[#1a7a5e]/30 py-12 px-6 md:px-14">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-lg text-white font-semibold text-center md:text-left">
                        We are here to address any questions you may have.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                            className="bg-[#1a7a5e] hover:bg-[#155f4a] text-white  tracking-wide"
                        >
                            <a href={RoutePath.ContactUs}>Contact us now</a>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#3dd9a8]/40 text-[#3dd9a8] hover:bg-[#1a7a5e]/20  tracking-wide"
                        >
                            <a href="https://cison.org.ng/membership-types/">
                                Become a Member
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export function MVVCard({ label, icon, quote, values, index }: MVVCardProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 border border-border rounded-2xl p-7 bg-card hover:border-[#1a7a5e]/60 transition-colors duration-300 group"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl dark:bg-[#0d1e14] border border-[#1a7a5e]/40 flex items-center justify-center text-[#3dd9a8] group-hover:bg-[#1a7a5e]/20 transition-colors">
                    {icon}
                </div>
                <span className="text-xs  tracking-widest uppercase text-[#3dd9a8]">
                    {label}
                </span>
            </div>

            {values ? (
                <ul className="flex flex-col gap-2 mt-1">
                    {values.map((v) => (
                        <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3dd9a8] flex-shrink-0" />
                            <span className="font-semibold text-foreground">{v}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {quote}
                </p>
            )}
        </motion.div>
    );
}
