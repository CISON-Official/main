
import { motion } from 'framer-motion';
import {
    CalendarIcon,
    MapPinIcon,
    ClockIcon,
    CurrencyNgnIcon,
    GlobeIcon,
} from '@phosphor-icons/react';
import ConferenceImage from "@/assets/landing/conference_picture.jpeg";
import RoutePath from '@/routes';
import { Separator } from '../ui/separator';

interface ScheduleSidebarProps {
    fadeInUp?: any;
}

export function ScheduleSidebar({ fadeInUp }: ScheduleSidebarProps) {

    const defaultFadeInUp = fadeInUp || {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="space-y-8 mx-auto flex justify-center items-center gap-5 my-5">

            {/* Schedule Card */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={defaultFadeInUp}
                className="border-emerald-300 border-2 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden"
            >
                <motion.img src={ConferenceImage} alt='Conference image' className='w-120 h-170' />
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={defaultFadeInUp}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
                <h4 className="text-lg font-bold uppercase tracking-wider mb-6 pb-2 border-b border-white/20">Schedule</h4>

                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-xl"><CalendarIcon size={20} weight="fill" /></div>
                        <div>
                            <span className="text-xs uppercase dark:text-emerald-200 text-emerald-700 block">Date</span>
                            <span className="font-bold text-sm md:text-base">12th – 16th Oct, 2026</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-xl "><MapPinIcon size={20} weight="fill" /></div>
                        <div>
                            <span className="text-xs uppercase dark:text-emerald-200 text-emerald-700 block">Venue</span>
                            <span className="font-bold text-sm md:text-base block">Chida Hotels Event Centre</span>
                            <span className="text-xs dark:text-emerald-100 text-emerald-500 block">Plot 226 Solomon Lar Way, Utako, Abuja, Nigeria</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-xl"><ClockIcon size={20} weight="fill" /></div>
                        <div>
                            <span className="text-xs uppercase dark:text-emerald-200 text-emerald-700 block">Time</span>
                            <span className="font-bold text-sm md:text-base">9:00AM to 5:00PM Daily</span>
                        </div>
                    </div>
                </div>

                <Separator className={"my-4"}/>
                {/* Participation Fees Card */}
                <h4 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                    <CurrencyNgnIcon size={22} className="text-emerald-600 dark:text-emerald-400" weight="bold" /> Participation Fees
                </h4>

                <div className="space-y-4 text-sm">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/30 rounded-xl">
                        <div className="flex justify-between font-bold text-amber-800 dark:text-amber-400">
                            <span>Early Bird</span>
                            <span>₦120,000</span>
                        </div>
                        <span className="text-xs text-amber-600/80 dark:text-amber-500/80 block mt-0.5">On or before 30 Jun 2026</span>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                        <span className="text-slate-500 dark:text-slate-400">Late Registration</span>
                        <span className="text-slate-800 dark:text-white">₦150,000</span>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                        <span className="text-slate-500 dark:text-slate-400">Virtual Access</span>
                        <span className="text-slate-800 dark:text-white">₦80,000</span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <GlobeIcon size={14} /> International Participants
                        </span>
                        <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
                            <span>Early Bird (30 Jun)</span>
                            <span className="font-bold text-slate-800 dark:text-white">$80</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                            <span>Regular</span>
                            <span className="font-bold text-slate-800 dark:text-white">$100</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                    <a
                        href={RoutePath.Conference2026}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 break-all"
                    >
                        Register
                    </a>
                </div>
            </motion.section>



        </div>
    );
}
