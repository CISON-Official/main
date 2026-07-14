import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CalendarBlank, 
  Clock, 
  MapPin, 
  UserIcon,
  CaretDown, 
  CheckCircle,
  GoogleLogo,
  MicrosoftOutlookLogo,
  DownloadSimple,
  CaretLeft,
  CaretRight
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

// Quick types for layout consistency
interface MetaItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

export default function EventPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-sky-500 selection:text-slate-900 px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 font-medium">
          <a href="https://cison.org.ng/" className="hover:text-sky-400 transition-colors">Home</a>
          <span>»</span>
          <a href="https://cison.org.ng/events/" className="hover:text-sky-400 transition-colors">Events</a>
          <span>»</span>
          <span className="text-slate-200 font-semibold truncate">Q3 Workshop</span>
        </nav>

        {/* Main Card Container */}
        <motion.article 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Header Banner Section */}
          <header className="relative bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 p-6 md:p-10 border-b border-slate-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-sky-500/5 to-transparent skew-x-12 pointer-events-none" />
            
            <a 
              href="https://cison.org.ng/events/" 
              className="inline-flex items-center gap-2 text-sky-400 text-sm font-medium hover:text-sky-300 transition-transform hover:-translate-x-1 mb-4"
            >
              <ArrowLeft size={16} weight="bold" />
              All Events
            </a>
            
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-3xl leading-tight">
              Q3 Planning, Research and Statistics Workshop
            </h1>
            <p className="text-lg md:text-xl text-sky-400 font-semibold mt-2 tracking-wide">
              Forecasting & Scenario Modeling for National Development
            </p>
          </header>

          {/* Two Column Layout Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
            
            {/* Left Content Column */}
            <main className="lg:col-span-2 space-y-8">
              <section className="space-y-3">
                <h3 className="text-lg font-bold tracking-wide text-slate-100 border-l-4 border-sky-400 pl-3">
                  Workshop Overview
                </h3>
                <p className="text-slate-400 leading-relaxed text-[15px] md:text-base">
                  Equip yourself with the critical tools needed to navigate complex economic landscapes and drive sustainable growth. This practical, high-impact workshop is designed for professionals eager to transform data into actionable insights for both national and sub-national planning. Led by renowned expert Dr. Ephraim Ogbonna from the University of Ibadan, you will gain hands-on, direct-application skills to instantly elevate your strategic capabilities.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold tracking-wide text-slate-100 border-l-4 border-sky-400 pl-3">
                  Why You Should Attend
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Direct Application",
                      desc: "Move past raw theory and master the actual art of forecasting for national and regional development."
                    },
                    {
                      title: "Boost Workplace Efficiency",
                      desc: "Acquire targeted skills that streamline your daily data tasks and reporting architectures."
                    },
                    {
                      title: "Maximize Productive Output",
                      desc: "Learn how scenario modeling directly drives institutional and productive efficiency in your current work environment."
                    }
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={22} weight="fill" className="text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-200 font-semibold">{benefit.title}</strong>
                        <span className="text-slate-400 text-sm md:text-[15px]">{benefit.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            {/* Right Sidebar Column */}
            <aside className="space-y-4">
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5 space-y-5">
                <MetaItem 
                  icon={<CalendarBlank size={20} weight="duotone" />} 
                  label="Date" 
                  value="August 10 – 13, 2026" 
                />
                <MetaItem 
                  icon={<Clock size={20} weight="duotone" />} 
                  label="Time" 
                  value="8:00 am – 5:00 pm" 
                />
                <MetaItem 
                  icon={<MapPin size={20} weight="duotone" />} 
                  label="Location" 
                  value="Port Harcourt, Nigeria" 
                />
                <MetaItem 
                  icon={<UserIcon size={20} weight="duotone" />} 
                  label="Facilitator" 
                  value={
                    <>
                      Dr. Ephraim Ogbonna
                      <span className="block text-xs text-slate-500 font-normal mt-0.5">University of Ibadan</span>
                    </>
                  } 
                />
              </div>

              {/* Export Dropdown Button Menu */}
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full bg-sky-400 hover:bg-sky-500 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] text-sm shadow-lg shadow-sky-500/10"
                >
                  <CalendarBlank size={18} weight="bold" />
                  Add to Calendar
                  <CaretDown size={14} weight="bold" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                      
                      <motion.div 
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-[110%] w-full bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-20 overflow-hidden"
                      >
                        <DropdownItem 
                          href="https://www.google.com/calendar/event?action=TEMPLATE&dates=20260810T080000/20260813T170000&text=Q3%20Planning%2C%20Research%20and%20Statistics%20Workshop&ctz=Africa/Lagos"
                          icon={<GoogleLogo size={16} weight="bold" />}
                          label="Google Calendar"
                        />
                        <DropdownItem 
                          href="https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2026-08-10T08:00:00+01:00&enddt=2026-08-13T17:00:00+01:00&subject=Q3%20Planning%2C%20Research%20and%20Statistics%20Workshop"
                          icon={<MicrosoftOutlookLogo size={16} weight="bold" />}
                          label="Outlook 365"
                        />
                        <DropdownItem 
                          href="https://cison.org.ng/event/q3-planning-research-and-statistics-workship/?ical=1"
                          icon={<DownloadSimple size={16} weight="bold" />}
                          label="Download iCalendar (.ics)"
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </aside>

          </div>
        </motion.article>

        {/* Component Footer Pagination Nav Context links */}
        <footer className="flex items-center justify-between mt-6 px-2 text-xs md:text-sm text-slate-500">
          <a href="https://cison.org.ng/event/q1-2026-prs/" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors max-w-[45%]">
            <CaretLeft size={14} weight="bold" />
            <span className="truncate">Q1: 2026 PRS Workshop</span>
          </a>
          <a href="https://cison.org.ng/event/q4-planning-research-and-statistics-workshop/" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors max-w-[45%] justify-end">
            <span className="truncate">Q4 Planning Workshop</span>
            <CaretRight size={14} weight="bold" />
          </a>
        </footer>

      </div>
    </div>
  );
}

/* Reusable Metadata Layout Card Element */
function MetaItem({ icon, label, value }: MetaItemProps) {
  return (
    <div className="flex gap-3 items-start">
      <div className="text-sky-400 bg-slate-900/80 p-2 rounded-lg border border-slate-800/60 mt-0.5 shrink-0">
        {icon}
      </div>
      <div>
        <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 leading-none mb-1">
          {label}
        </span>
        <span className="text-sm font-semibold text-slate-200">
          {value}
        </span>
      </div>
    </div>
  );
}

/* Reusable Internal Dropdown Navigation items */
function DropdownItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800/50 hover:text-sky-400 transition-colors"
    >
      <span className="text-slate-400 group-hover:text-sky-400">{icon}</span>
      {label}
    </a>
  );
}