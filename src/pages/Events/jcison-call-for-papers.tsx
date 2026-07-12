
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  FilesIcon, 
  GlobeIcon, 
  SealCheckIcon, 
  CurrencyCircleDollarIcon, 
  EnvelopeSimpleIcon, 
  ArrowUpRightIcon,
  BookmarkSimpleIcon
} from '@phosphor-icons/react';
import JCISONImage from "@/assets/cover_issue_2_en_US.jpg";

export default function CallForPapers() {
  
  const features = [
    { text: "No Article Processing Charges", icon: <CurrencyCircleDollarIcon size={20} weight="duotone" />, gold: true },
    { text: "Open Access Platform", icon: <GlobeIcon size={20} weight="duotone" />, gold: false },
    { text: "Double-Blind Peer Reviewed", icon: <SealCheckIcon size={20} weight="duotone" />, gold: false }
  ];

  const indexingPills = ["CrossRef", "Google Scholar", "ResearchGate"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* --- HEADER BANNER --- */}
        <header className="border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500 via-emerald-500 to-amber-500" />
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 rounded-full border border-amber-500/20 mb-4">
            <FilesIcon size={14} weight="duotone" /> Call For Papers
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-slate-100 leading-tight max-w-4xl mx-auto">
            Journal of the Chartered Institute of Statisticians of Nigeria <span className="text-amber-400 font-serif italic">(JCISON)</span>
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
            <span><strong>ISSN:</strong> 0331 – 9504</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span><strong>DOI:</strong> doi.org/10.61259/21.24.150724</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-emerald-400"><strong>Volume 36, 2024</strong></span>
          </div>
        </header>

        {/* --- MAIN STRUCTURE SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT INTERACTIVE ARRAYS: CONTENT BLOCKS (7/12) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Scope Block */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 relative overflow-hidden group shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                <BookmarkSimpleIcon size={14} weight="fill" /> Scope
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                The Journal welcomes submissions in <strong className="text-slate-100 font-semibold">Theoretical and Applied Statistics</strong> across all fields of study and research. We encourage contributions that advance statistical science and its practical applications.
              </p>
            </motion.section>

            {/* About Block */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 relative overflow-hidden shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                <BookOpenIcon size={14} weight="fill" /> About the Journal
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                JCISON is published both <strong className="text-slate-100 font-semibold">online and in print</strong>. It operates as a fully open-access journal with a rigorous <strong className="text-slate-100 font-semibold">double-blind peer review</strong> process, an annual publication cycle, and <strong className="text-amber-400 font-semibold">zero Article Processing Charges</strong> for all authors.
              </p>
            </motion.section>

            {/* Indexing Section */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">Indexing & Abstracting</h2>
              <div className="flex flex-wrap gap-2">
                {indexingPills.map((pill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-emerald-500/5 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 tracking-wide"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Feature Quick Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((feature, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                  key={idx} 
                  className={`p-4 rounded-xl border flex items-center gap-3 shadow-md ${
                    feature.gold 
                      ? 'bg-amber-500/5 border-amber-500/20 text-amber-400' 
                      : 'bg-slate-900 border-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className={feature.gold ? 'text-amber-400' : 'text-emerald-400'}>
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold tracking-tight leading-tight">{feature.text}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN: COVER AND ACTIONS (5/12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Journal Image Cover Box */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 flex items-center justify-center shadow-lg"
            >
              <div className="relative group max-w-55 rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <img 
                  src={JCISONImage} 
                  alt="JCISON Journal Volume Cover Preview" 
                  className="w-full h-auto object-cover"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Submission Coordination Card */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 space-y-5 shadow-lg"
            >
              <h3 className="text-sm font-bold tracking-wider uppercase text-slate-200 pb-2 border-b border-slate-800">
                Submit Your Manuscript
              </h3>

              {/* URL Gateway Link */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">Submission Guidelines</span>
                <a 
                  href="https://journal.cison.org.ng/index.php/jotc/gen_policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline break-all inline-flex items-center gap-1 group"
                >
                  journal.cison.org.ng/index.php/jotc/gen_policy
                  <ArrowUpRightIcon size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Direct Mail Targeting Hub */}
              <div className="space-y-3 pt-2 border-t border-slate-800/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block items-center gap-1">
                    <EnvelopeSimpleIcon size={12} /> Email Manuscript To
                  </span>
                  <a 
                    href="mailto:associate-editor@cison.org.ng" 
                    className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    associate-editor@cison.org.ng
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">CC Recipients</span>
                  <div className="flex flex-col space-y-1 text-xs font-medium text-slate-400">
                    <a href="mailto:editorinchief@cison.org.ng" className="hover:text-emerald-400 transition-colors">
                      editorinchief@cison.org.ng
                    </a>
                    <a href="mailto:managing-editor@cison.org.ng" className="hover:text-emerald-400 transition-colors">
                      managing-editor@cison.org.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Link Trigger Action Button */}
              <a 
                href="https://journal.cison.org.ng/index.php/jotc/gen_policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-[0.99] shadow-lg shadow-emerald-500/5 mt-2"
              >
                View Submission Guidelines
                <ArrowUpRightIcon size={14} weight="bold" />
              </a>

            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}