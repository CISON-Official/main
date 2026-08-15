import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, PhoneIcon, ShieldCheckIcon, VideoIcon } from '@phosphor-icons/react';
import type { Panelist } from './types';
import { EnvelopeIcon } from '@phosphor-icons/react/dist/ssr';

export const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-emerald-50 via-slate-200 to-white dark:from-emerald-950 dark:via-neutral-900 dark:to-neutral-950 pt-24 pb-16 px-6 border-b border-neutral-100 dark:border-neutral-800">
            {/* Optional decorative background glow layers separated from the core container */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_40%)] pointer-events-none" />
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base font-medium text-purple-700 bg-purple-50 px-4 py-1.5 rounded-full mb-6"
                >
                    Women In CISON Is Inviting You To Her Exciting Maiden Event
                </motion.p>

                {/* Main Subject Typography */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative mb-6"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-purple-900 tracking-tight flex flex-col md:flex-row items-center justify-center gap-3">
                        <span>Women <span className="text-sm align-middle bg-purple-900 text-white rounded-full px-2.5 py-1 text-center font-bold">in</span></span>
                        <span className="text-emerald-700">Statistics:</span>
                    </h1>
                </motion.div>

                {/* Strategic Focus */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-block bg-amber-500 text-neutral-950 font-bold px-6 py-2 rounded-full shadow-md text-sm md:text-base tracking-wide"
                >
                    • Driving Evidence Based Change. •
                </motion.div>

                {/* Core Pillars */}
                <p className="mt-8 text-neutral-500 text-xs md:text-sm font-medium tracking-wider uppercase flex flex-wrap justify-center gap-x-4 gap-y-1">
                    <span>Empowering Women.</span>
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Strengthening Statistics.</span>
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Transforming Society.</span>
                </p>
            </div>
        </section>
    );
};

export const EventDetails: React.FC = () => {
    return (
        <section className="py-16 l-50 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Date Container */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className=" p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col items-center text-center"
                >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                        <CalendarIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase text-neutral-400 dark:text-neutral-50 font-bold tracking-wider">Date</span>
                    <p className="text-lg font-bold text-neutral-800 dark:text-neutral-50 mt-1">August 27th, 2026</p>
                </motion.div>

                {/* Time Container */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className=" p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col items-center text-center"
                >
                    <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                        <ClockIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase text-neutral-400 dark:text-neutral-50 font-bold tracking-wider">Time</span>
                    <p className="text-lg font-bold text-neutral-800 dark:text-neutral-50 mt-1">11:00 AM</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-50 font-medium">West Central Africa</p>
                </motion.div>

                {/* Conceptual Focus */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col items-center text-center md:col-span-1"
                >
                    <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                        <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase text-neutral-400 dark:text-neutral-50 font-bold tracking-wider">Panel Discussion Topic</span>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-50 mt-2 leading-relaxed max-w-xs">
                        "Challenges and Opportunities for Women and Girls in the field of Statistics."
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

const panelistsData: Panelist[] = [
    {
        name: "Prof. Onyebuchi Happiness Obiora-Iloounoh",
        role: "Professor",
        institution: "Dept of Statistics, Nnamdi Azikiwe University Awka.",
        image: "/api/placeholder/150/150"
    },
    {
        name: "Dr. Uchenna Petronilla Ogoke",
        role: "Doctor",
        institution: "Dept. of Mathematics and Statistics, University of Port Harcourt.",
        image: "/api/placeholder/150/150"
    },
    {
        name: "Miss Monica Jatau",
        role: "Representative",
        institution: "Nasarawa State Ministry of Finance, Budget and Planning.",
        image: "/api/placeholder/150/150"
    }
];

export const Panelists: React.FC = () => {
    return (
        <section className="py-20 px-6 dark:border-t-neutral-600 dark:border-t ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-md">Expert Perspectives</span>
                    <h2 className="text-3xl font-black text-neutral-950 mt-3">Event Panelists</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {panelistsData.map((panelist, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-2xl p-6 border border-neutral-200/60 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                                <img src={panelist.image} alt={panelist.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-bold text-amber-600 mb-1">{index + 1}. Panelist</span>
                            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50 leading-tight max-w-55 mb-2">
                                {panelist.name}
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-50 leading-relaxed max-w-50">
                                {panelist.institution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const AccessHub: React.FC = () => {
    return (
        <section className="py-16 dark:bg-neutral-950 dark:text-white px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_40%)]" />
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Virtual Room Link Details */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-10 mb-12 shadow-xl"
                >
                    <div className="flex items-center gap-3 mb-6 text-purple-400">
                        <VideoIcon className="w-6 h-6" />
                        <h3 className="text-lg font-bold">Virtual Access & Link Information</h3>
                    </div>
                    <p className="text-xs text-neutral-400 font-mono break-all bg-neutral-950 p-3.5 rounded-xl border border-neutral-800/80 mb-6">
                        https://us06web.zoom.us/j/
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                            <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Meeting ID</span>
                            <span className="text-neutral-200 font-mono tracking-wider font-bold">893 4337 2186</span>
                        </div>
                        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                            <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Passcode</span>
                            <span className="text-neutral-200 font-mono tracking-wider font-bold">970658</span>
                        </div>
                    </div>
                </motion.div>

                {/* Directly Contact Committees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
                        <PhoneIcon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-neutral-200">Pst. Prof. Joy C Nwabueze</p>
                            <span className="text-xs text-neutral-500 font-medium">Chairperson</span>
                            <a href="tel:08068164190" className="block text-sm text-emerald-400 font-mono font-semibold mt-1 hover:underline">08068164190</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
                        <PhoneIcon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-neutral-200">Dr. U. P. Ogoke</p>
                            <span className="text-xs text-neutral-500 font-medium">Secretary</span>
                            <a href="tel:08035400184" className="block text-sm text-emerald-400 font-mono font-semibold mt-1 hover:underline">08035400184</a>
                        </div>
                    </div>
                </div>

                {/* Global Closing Affirmation */}
                <div className="text-center pt-4 border-t border-neutral-900 flex flex-col items-center">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="text-neutral-400 text-sm font-serif italic tracking-wide">
                        “Empowered Women. Stronger Statistics. Brighter Society.”
                    </p>
                </div>

            </div>
        </section>
    );
};