import NewsAnnouncementData from "@/data/news";
import { motion } from "framer-motion";

export function NewsAnnouncement() {
    const duplicatedData = [...NewsAnnouncementData, ...NewsAnnouncementData, ...NewsAnnouncementData];

    return (
        <div className="w-full overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800">
            <div
                className="relative flex items-center h-16 w-full px-6"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
                }}
            >
                <motion.div
                    className="flex flex-row gap-12 items-center whitespace-nowrap pr-12 cursor-pointer"
                    animate={{ x: [0, "-33.33%"] }}
                    whileHover={{ animationPlayState: "paused" }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {duplicatedData.map((e, index) => (
                        <div
                            key={`${e.title}-${index}`}
                            className="flex items-center text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 shrink-0"
                        >
                            {e.route ? (
                                <a href={e.route} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors">
                                    {e.title}
                                </a>
                            ) : (
                                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors">{e.title}</span>
                            )}
                            <span className="ml-12 text-slate-400 dark:text-slate-500 no-underline inline-block">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
