import { CaretRightIcon, type Icon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { Badge } from "./ui/badge";

type BreadcrumbType = {
    label: string;
    href?: string;
    icon?: Icon;
}

function Crumb({ element }: { element: BreadcrumbType }) {
    return (
        <a
            href={element.href || "#"}
            className="flex items-center gap-1 hover:text-white transition-colors"
        >
            {element.icon && <element.icon className="w-3.5 h-3.5" />}
            {element.label}
        </a>
    )
}
function Breadcrumb({ Elements }: { Elements: BreadcrumbType[] }) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-white/50 tracking-tight"
        >
            {Elements.map((element, index) => (
                <div key={index} className="flex items-center gap-1.5">
                    <Crumb element={element} />
                    {index+1 !== Elements.length && (
                        <CaretRightIcon className="w-3.5 h-3.5 opacity-40" />
                    )}
                </div>
            ))}
        </nav>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function PageHero({ breadcrumb, title, subtitle, catchy }: { breadcrumb: ReactElement, title: string, subtitle: string, catchy: string }) {
    return (
        <div className="relative overflow-hidden bg-[#0b1120] border-b border-white/10 min-h-85 flex items-end">
            {/* Decorative skewed bars */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[-12%] top-0 h-full w-[32%] bg-[#1a7a5e]/25 blur-3xl origin-top"
                    style={{ transform: "skewX(-16deg)" }}
                />
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[18%] top-0 h-full w-[22%] bg-[#1a7a5e]/12 blur-2xl origin-top"
                    style={{ transform: "skewX(-16deg)" }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="absolute right-0 top-0 h-full w-[40%] bg-linear-to-l from-[#0f2236]/60 to-transparent"
                />
                {/* grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto w-full px-6 md:px-14 pt-10 pb-16 flex flex-col gap-7">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {breadcrumb}
                </motion.div>

                <div className="flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Badge
                            variant="outline"
                            className="w-fit border-[#2cba8e]/50 text-[#3dd9a8] bg-[#1a7a5e]/15  text-xs tracking-widest uppercase px-3 py-1"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            {title}
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
                    >
                        {subtitle}
                        <br />
                        <span className="text-[#3dd9a8]">{catchy}</span>
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

export { Breadcrumb, PageHero, Crumb, type BreadcrumbType };