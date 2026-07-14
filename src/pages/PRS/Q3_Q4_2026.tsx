import React, { useState } from 'react';
import { 
  CalendarBlankIcon, 
  CheckCircleIcon, 
  UserIcon, 
  StudentIcon, 
  CoatHangerIcon,
  WebcamIcon,
  NetworkIcon,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Person1 from "@/assets/people/citations.jpeg";
import Person2 from "@/assets/people/citations-1.jpeg";
// --- Types ---
interface WorkshopData {
  id: string;
  quarter: string;
  title: string;
  subtitle: string;
  dates: string;
  facilitator: {
    name: string;
    institution: string;
    image: string;
  };
  outcomes: string[];
  registrationLinks: {
    virtual: string;
    individual: string;
    student: string;
    corporate: string;
  };
}

// --- Mocking Data parsed from the input HTML markup ---
const workshops: WorkshopData[] = [
  {
    id: "Q3PRSregistration",
    quarter: "Q3 PRS Workshop",
    title: "Forecasting and Scenario Modeling for National and Sub-National Development",
    subtitle: "Empowering Institutional Leaders and Technical professionals with data-driven methodologies.",
    dates: "10th to 13th, August, 2026",
    facilitator: {
      name: "DR. Ephraim Ogbonna",
      institution: "University of Ibadan, Oyo State",
      image: Person1
    },
    outcomes: [
      "Master the Art of forecasting for National Development",
      "Apply specific skills to improve daily tasks efficiency",
      "Enhance productive efficiency in professional work environments"
    ],
    registrationLinks: {
      virtual: "https://my.cison.org.ng/q3-prs-virtual-registration/",
      individual: "https://my.cison.org.ng/q3-prs-individual-registration/",
      student: "https://my.cison.org.ng/q3-prs-student-registration/",
      corporate: "https://my.cison.org.ng/q3-prs-corporate-registration/"
    }
  },
  {
    id: "Q4PRSregistration",
    quarter: "Q4 PRS Workshop",
    title: "Fundamental Power BI for Executive PRS Dashboards",
    subtitle: "Obtain high-impact structural data parsing methodologies and dashboard presentation patterns.",
    dates: "9th - 12th November, 2026",
    facilitator: {
      name: "DR. O. T. Arowolo",
      institution: "Lagos State University of Science and Technology, Ikorodu, Lagos",
      image: Person2
    },
    outcomes: [
      "Obtain professional Soft skills for Advanced Professional Dashboards",
      "Facilitate speedy presentation and stakeholder decision making",
      "Boost productive Efficiency in data-heavy work environments"
    ],
    registrationLinks: {
      virtual: "https://my.cison.org.ng/q4-prs-virtual-registration/",
      individual: "https://my.cison.org.ng/q4-prs-individual-registration/",
      student: "https://my.cison.org.ng/q4-prs-student-registration/",
      corporate: "https://my.cison.org.ng/q4-prs-corporate-registration/"
    }
  }
];

export default function PrsWorkshops() {
  const [activeTab, setActiveTab] = useState<string>("Q3PRSregistration");

  const activeWorkshop = workshops.find(w => w.id === activeTab) || workshops[0];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById('workshop-showcase');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 py-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Planning, Research and Statistics
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
            Q3 & Q4 PRS Registration Portal
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Empowering Institutional Leaders and Technical professionals with data-driven methodologies and executive tools to shape the future of governance.
          </p>

          {/* Core Navigation Quick Jumps */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => scrollToSection("Q3PRSregistration")}
              className="px-5 py-3 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-400/10 transition-all active:scale-[0.98]"
            >
              Go to Q3 PRS Registration
            </button>
            <button 
              onClick={() => scrollToSection("Q4PRSregistration")}
              className="px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all active:scale-[0.98]"
            >
              Go to Q4 PRS Registration
            </button>
          </div>
        </div>
      </header>

      {/* --- LIVE INTERACTIVE HUB --- */}
      <main id="workshop-showcase" className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        
        {/* Quarter Selectors Toggle */}
        <div className="flex bg-slate-900 p-1.5 border border-slate-800 rounded-xl max-w-md mx-auto relative z-10 shadow-inner">
          {workshops.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveTab(w.id)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === w.id 
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {w.quarter}
            </button>
          ))}
        </div>

        {/* Selected Workshop Display Wrapper */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-slate-900/60 border border-slate-900 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          {/* Main Context Left Side Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CalendarBlankIcon size={18} weight="duotone" />
                {activeWorkshop.dates}
              </div>
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-slate-100">
                {activeWorkshop.title}
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {activeWorkshop.subtitle}
              </p>
            </div>

            {/* Learning Outcomes Checklist Container */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 border-l-2 border-emerald-400 pl-2">
                Learning Outcomes
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {activeWorkshop.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-900/80">
                    <CheckCircleIcon size={20} weight="fill" className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-[15px] text-slate-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilitator Sub-Card Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-950/30 p-4 rounded-xl border border-slate-900">
              <img 
                src={activeWorkshop.facilitator.image} 
                alt={activeWorkshop.facilitator.name}
                className="w-14 h-14 rounded-xl object-cover border border-slate-800 bg-slate-900 shrink-0" 
              />
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                  <CoatHangerIcon size={14} /> Facilitator
                </div>
                <div className="text-base font-bold text-slate-200">
                  {activeWorkshop.facilitator.name}
                </div>
                <div className="text-xs text-slate-400">
                  {activeWorkshop.facilitator.institution}
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Registration Links Box */}
          <div className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-center pb-2 border-b border-slate-900">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Secure Access Window
                </span>
                <p className="text-xs text-slate-400 mt-1">Select appropriate pathway track to apply</p>
              </div>

              <div className="space-y-3">
                <RegistrationButton 
                  href={activeWorkshop.registrationLinks.virtual} 
                  icon={<WebcamIcon size={18} />} 
                  label="Register Virtually" 
                  primary
                />
                <RegistrationButton 
                  href={activeWorkshop.registrationLinks.individual} 
                  icon={<UserIcon size={18} />} 
                  label="Register Individually" 
                />
                <RegistrationButton 
                  href={activeWorkshop.registrationLinks.student} 
                  icon={<StudentIcon size={18} />} 
                  label="Register as a Student" 
                />
                <RegistrationButton 
                  href={activeWorkshop.registrationLinks.corporate} 
                  icon={<NetworkIcon size={18} />} 
                  label="Corporate Registration" 
                />
              </div>
            </div>

            <p className="text-[11px] text-center text-slate-500 leading-normal">
              Upon successful registration, onboarding packets and matching virtual streaming credentials will be piped to your active profile vector.
            </p>
          </div>
        </motion.div>
      </main>

     
    </div>
  );
}

function RegistrationButton({ 
  href, 
  icon, 
  label, 
  primary = false 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  primary?: boolean; 
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm flex items-center gap-3 transition-all active:scale-[0.99] ${
        primary 
          ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-md shadow-emerald-400/5' 
          : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800/80'
      }`}
    >
      <span className={primary ? 'text-slate-950' : 'text-slate-400'}>{icon}</span>
      {label}
    </a>
  );
}