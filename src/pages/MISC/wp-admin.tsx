
import { motion } from 'framer-motion';
import { SmileyBlankIcon, ShieldWarningIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AccessDeniedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 text-zinc-950 antialiased selection:bg-red-500/30 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Theme Sensitive Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 dark:bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] dark:opacity-25" />

      <main className="relative z-10 w-full max-w-lg">
        <Card className="border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
          <CardContent className="flex flex-col items-center p-8 text-center">
            
            {/* Warning Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 border border-red-500/20 dark:text-red-400"
            >
              <ShieldWarningIcon size={14} className="animate-pulse" />
              <span>403: UNPRIVILEGED ACCESS</span>
            </motion.div>

            {/* Demeaning Message */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-black tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50"
            >
              You wanted to access the backend?
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-lg font-medium text-red-600 dark:text-red-400"
            >
              Funny. This is not the backend.
            </motion.p>

            {/* Dancing Stickman / Loser Animation */}
            <div className="relative my-12 flex h-48 w-48 items-center justify-center">
              {/* Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-red-500/5 blur-3xl" />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [-8, 8, -8],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.6, 
                  ease: "easeInOut" 
                }}
                className="flex flex-col items-center"
              >
                {/* Loser Sign 'L' */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="absolute -top-4 font-black text-6xl text-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)] dark:text-red-500 dark:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                >
                  L
                </motion.div>

                {/* Head */}
                <SmileyBlankIcon size={64} weight="duotone" className="text-zinc-500 dark:text-zinc-400" />
                
                {/* Torso & Waving Limbs */}
                <svg width="80" height="100" viewBox="0 0 80 100" className="text-zinc-500 fill-none stroke-current stroke-3 stroke-linecap-round stroke-linejoin-round dark:text-zinc-400">
                  {/* Spine */}
                  <line x1="40" y1="0" x2="40" y2="50" />
                  
                  {/* Left Arm */}
                  <motion.line 
                    x1="40" y1="15" x2="15" y2="5" 
                    animate={{ y2: [5, 25, 5] }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Right Arm */}
                  <motion.line 
                    x1="40" y1="15" x2="65" y2="35" 
                    animate={{ y2: [35, 15, 35] }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "easeInOut", delay: 0.15 }}
                  />
                  
                  {/* Left Leg */}
                  <motion.line 
                    x1="40" y1="50" x2="20" y2="90" 
                    animate={{ x2: [90, 80, 90] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Right Leg */}
                  <motion.line 
                    x1="40" y1="50" x2="60" y2="90" 
                    animate={{ y2: [90, 80, 90] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Demeaning Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm text-zinc-500 dark:text-zinc-400"
            >
              Nice try, script kiddie. Go back to inspecting elements.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-8 w-full"
            >
              <Button 
                variant="outline" 
                className="w-full border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-900 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-50"
                onClick={() => window.history.back()}
              >
                <ArrowLeftIcon size={16} className="mr-2" />
                Return to Safety
              </Button>
            </motion.div>

          </CardContent>
        </Card>
      </main>
    </div>
  );
}
