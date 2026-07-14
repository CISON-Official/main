import { motion } from 'framer-motion';
import { ArrowLeftIcon, WarningIcon, TrendDownIcon, RecycleIcon } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Statistical404Page() {
    // Mock data for the broken distribution curve
    const dataPoints = [[1, 2]];

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 text-zinc-950 antialiased selection:bg-amber-500/30 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
            {/* Math Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] dark:opacity-25" />

            <main className="relative z-10 w-full max-w-xl">
                <Card className="border-zinc-200 bg-white/70 backdrop-blur-xl shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50">
                    <CardContent className="flex flex-col items-center p-8 text-center">

                        {/* Statistical Warning Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 flex items-center gap-2 rounded-full bg-amber-500/10 px-3 w-fit py-1 text-xs font-semibold text-amber-600 border border-amber-500/20 dark:text-amber-400"
                        >
                            <WarningIcon size={14} className="animate-pulse" />
                            <span>ERROR 404: OUTLIER DETECTED</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"
                        >
                            Standard Deviation Failure
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                        >
                            The coordinates you requested fall outside of our 99.7% confidence interval. This URI is a statistical impossibility—an unmapped anomaly in our distribution dataset.
                        </motion.p>

                        {/* Animated Interactive Graph (The "Broken" Distribution Curve) */}
                        <div className="relative my-8 flex h-44 w-full flex-col justify-end border-b border-l border-zinc-300 px-4 pb-1 dark:border-zinc-800">

                            {/* Broken Threshold Line */}
                            <div className="absolute bottom-0 left-[55%] top-0 border-r border-dashed border-red-500/50">
                                <span className="absolute -top-5 left-1 text-[10px] font-mono text-red-500">Critical Tail (404)</span>
                            </div>

                            {/* Data Bars */}
                            <div className="flex h-full w-full items-end justify-between gap-2 z-10">
                                {dataPoints.map((val, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${val}%` }}
                                        transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                                        className={`w-full rounded-t-sm transition-colors ${idx > 4
                                            ? 'bg-red-500/60 dark:bg-red-500/40'
                                            : 'bg-zinc-400 dark:bg-zinc-700'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Trajectory Drop-off Line */}
                            <svg className="absolute inset-0 h-full w-full stroke-zinc-950 dark:stroke-zinc-50 fill-none stroke-2 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <motion.path
                                    d="M 5,90 Q 25,10 50,40 T 95,95"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                />
                            </svg>

                            {/* Anomaly Indicator */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute bottom-[2%] right-[15%] flex flex-col items-center"
                            >
                                <TrendDownIcon size={20} className="text-red-500" />
                                <span className="font-mono text-[10px] text-red-500 font-bold">Null Pointer</span>
                            </motion.div>
                        </div>

                        {/* Statistical Metadata Grid */}
                        <div className="grid w-full grid-cols-3 gap-2 rounded-lg bg-zinc-100/50 p-3 font-mono text-xs text-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-400">
                            <div className="text-left">
                                <span className="block text-[10px] font-bold text-zinc-400 uppercase">P-Value</span>
                                <span>p &lt; 0.0001</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Z-Score</span>
                                <span className="text-red-500 font-semibold">+Infinity</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Sample Size</span>
                                <span>N = 0</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                            <Button
                                variant="outline"
                                className="w-full border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-900 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-50"
                                onClick={() => window.history.back()}
                            >
                                <ArrowLeftIcon size={16} className="mr-2" />
                                Recalibrate (Go Back)
                            </Button>

                            <Button
                                className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                                onClick={() => window.location.reload()}
                            >
                                <RecycleIcon size={16} className="mr-2" />
                                Re-sample URL
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
