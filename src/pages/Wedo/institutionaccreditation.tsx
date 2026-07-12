import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Buildings,
  BookOpen,
  GraduationCap,
  Users,
  ArrowRight,
  ArrowSquareOut,
  ClipboardText,
  Certificate,
  ShieldCheck,
  Handshake,
  ListChecks,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { Reveal } from "@/animate";
import CTAStrip from "@/components/cta";

const whatWeAccredit = [
  {
    icon: Buildings,
    title: "Training Institutions",
    body: "Private and public training centres actively preparing candidates for CISON's professional examinations at any level.",
  },
  {
    icon: GraduationCap,
    title: "Special Training Sites",
    body: "Specialised facilities offering structured instruction aligned with CISON's foundation, intermediate, or graduate curricula.",
  },
  {
    icon: Users,
    title: "Tertiary Institutions",
    body: "In collaboration with NBTE and NUC, CISON can facilitate course accreditation at universities and polytechnics offering statistics programmes.",
  },
];

const guidelines = [
  {
    icon: Certificate,
    title: "Staff Qualifications",
    body: "Instructors must hold recognised academic or professional qualifications in statistics, commensurate with the examination level being taught.",
  },
  {
    icon: BookOpen,
    title: "Depth of Course Materials",
    body: "The syllabus coverage must match CISON's published curriculum — ensuring completeness across all modules relevant to each examination stage.",
  },
  {
    icon: ClipboardText,
    title: "Teaching Resources",
    body: "Institutions must demonstrate access to adequate learning resources, reference materials, and practice assessment tools aligned with CISON standards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    body: "Accredited institutions are expected to maintain ongoing quality standards and remain open to periodic review by CISON's accreditation body.",
  },
  {
    icon: Handshake,
    title: "Regulatory Alignment",
    body: "Where applicable, institutions should operate in compliance with relevant regulatory bodies including NBTE and NUC guidelines.",
  },
  {
    icon: ListChecks,
    title: "Assessment Integrity",
    body: "Training institutions must uphold examination integrity and not engage in any activities that could compromise the fairness of CISON professional assessments.",
  },
];

const examLevels = [
  { code: "OC", label: "Ordinary Certificate", sub: "Foundation Level", color: "#22c55e" },
  { code: "HC", label: "Higher Certificate", sub: "Intermediate Level", color: "#16a34a" },
  { code: "GC", label: "Graduate Certificate", sub: "Graduate Level", color: "#15803d" },
];


// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ theme }: { theme: string }) {
  const dark = theme === "dark";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
        }`}
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: dark
            ? "radial-gradient(circle, rgba(34,197,94,0.10) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(21,128,61,0.09) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ambient glow */}
      <div
        className={`absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full pointer-events-none blur-[150px] ${dark ? "bg-green-900/20" : "bg-green-200/50"
          }`}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full"
        style={{ y, opacity }}
      >
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* left copy */}
          <div>
            <Reveal custom={0}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-px bg-[#22c55e]" />
                <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                  Institutions Accreditation
                </span>
              </div>
            </Reveal>

            <Reveal custom={1}>
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight mb-6 ${dark ? "text-white" : "text-[#0a1a10]"
                  }`}
              >
                Accreditation of
                <br />
                <span className="text-[#22c55e]">Special Training</span>
                <br />
                Institutions
              </h1>
            </Reveal>

            <Reveal custom={2}>
              <p
                className={`text-base md:text-lg leading-relaxed max-w-xl mb-10 ${dark ? "text-white/55" : "text-green-900/60"
                  }`}
              >
                CISON works with NBTE and NUC to accredit institutions preparing
                candidates for professional statistical examinations — setting clear
                standards for staff qualifications and course material depth.
              </p>
            </Reveal>

            <Reveal custom={3}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#guidelines"
                  className="group inline-flex items-center gap-2 bg-[#22c55e] text-white font-bold px-6 py-3 text-sm hover:bg-[#16a34a] transition-colors duration-300"
                >
                  View Guidelines
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="https://my.cison.org.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 border font-bold px-6 py-3 text-sm transition-colors duration-300 ${dark
                      ? "border-white/20 text-white/70 hover:border-[#22c55e] hover:text-[#22c55e]"
                      : "border-green-300 text-green-800 hover:border-[#22c55e] hover:text-[#22c55e]"
                    }`}
                >
                  Begin the Process
                  <ArrowSquareOut size={13} weight="bold" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* right — exam level pills */}
          <Reveal custom={1} className="hidden md:flex flex-col gap-4">
            <p
              className={`text-[10px] tracking-[0.22em] uppercase font-black mb-2 ${dark ? "text-white/30" : "text-green-900/40"
                }`}
            >
              Examination Levels Covered
            </p>
            {examLevels.map(({ code, label, sub, color }, i) => (
              <motion.div
                key={code}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-5 p-5 border-l-4 ${dark ? "bg-white/5" : "bg-white shadow-sm shadow-green-100"
                  }`}
                style={{ borderLeftColor: color }}
              >
                <span
                  className="text-2xl font-black w-12 shrink-0"
                  style={{ color }}
                >
                  {code}
                </span>
                <div>
                  <p
                    className={`text-sm font-black ${dark ? "text-white" : "text-[#0a1a10]"}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${dark ? "text-white/40" : "text-green-900/50"}`}
                  >
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </motion.div>

      <div
        className={`absolute bottom-0 inset-x-0 h-28 ${dark
            ? "bg-linear-to-t from-[#071209] to-transparent"
            : "bg-linear-to-t from-[#f0fdf4] to-transparent"
          }`}
      />
    </section>
  );
}

// ── Overview prose ────────────────────────────────────────────────────────────
function Overview({ theme }: { theme: string }) {
  const dark = theme === "dark";
  return (
    <section
      className={`py-24 transition-colors duration-500 ${dark ? "bg-[#0a1a10]" : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-14 items-start">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#22c55e]" />
              <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
                Overview
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
                }`}
            >
              Why Institutional
              <br />
              Accreditation Matters
            </h2>
          </Reveal>

          <Reveal custom={1}>
            <div
              className={`space-y-5 text-sm leading-relaxed ${dark ? "text-white/55" : "text-green-900/65"
                }`}
            >
              <p>
                CISON, in consultation with the National Board for Technical Education
                (NBTE) and the National Universities Commission (NUC), works toward
                the accreditation of statistics-related courses at tertiary institutions
                across Nigeria.
              </p>
              <p>
                For Training Institutions and Special Training Sites engaged in
                preparing students for CISON's professional examinations, the Institute
                draws up clear guidelines covering two primary areas: the qualifications
                of teaching staff, and the depth and breadth of course materials offered
                to candidates at each examination stage.
              </p>
              <p>
                Accreditation signals to prospective students and employers alike that
                a training centre meets the rigorous standards expected by Nigeria's
                foremost professional statistics body — ensuring quality instruction
                and examination readiness.
              </p>

              {/* pull quote */}
              <div
                className={`mt-6 pl-5 border-l-4 border-[#22c55e] italic ${dark ? "text-white/40" : "text-green-900/50"
                  }`}
              >
                "CISON could draw up guidelines for such institutions, in terms of
                the qualifications of their staff and the depth of materials to be
                offered to candidates preparing for various stages of the examinations."
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── What We Accredit ──────────────────────────────────────────────────────────
function WhatWeAccredit({ theme }: { theme: string }) {
  const dark = theme === "dark";
  return (
    <section
      className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#22c55e]" />
            <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
              Scope
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
              }`}
          >
            What CISON Accredits
          </h2>
          <p
            className={`mt-4 max-w-lg text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/55"
              }`}
          >
            Accreditation applies across three categories of institutions engaged
            in statistics education and professional exam preparation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {whatWeAccredit.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} custom={i * 0.1}>
              <div
                className={`group relative h-full p-8 border transition-all duration-400 hover:-translate-y-1 ${dark
                    ? "border-white/10 bg-[#0a1a10] hover:border-[#22c55e]/50"
                    : "border-green-100 bg-white hover:border-[#22c55e]/60 shadow-sm"
                  }`}
              >
                {/* animated top line */}
                <motion.div
                  className="absolute top-0 left-0 h-0.75 bg-[#22c55e]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: "100%" }}
                />

                <div
                  className={`w-12 h-12 flex items-center justify-center mb-6 ${dark ? "bg-[#22c55e]/15" : "bg-green-100"
                    }`}
                >
                  <Icon size={24} weight="duotone" className="text-[#22c55e]" />
                </div>

                <h3
                  className={`text-lg font-black mb-3 ${dark ? "text-white" : "text-[#0a1a10]"
                    }`}
                >
                  {title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/60"
                    }`}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Guidelines Grid ───────────────────────────────────────────────────────────
function Guidelines({ theme }: { theme: string }) {
  const dark = theme === "dark";
  return (
    <section
      id="guidelines"
      className={`py-24 transition-colors duration-500 ${dark ? "bg-[#0a1a10]" : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#22c55e]" />
            <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
              Accreditation Standards
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
              }`}
          >
            Institutional Guidelines
          </h2>
          <p
            className={`mt-4 max-w-xl text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/55"
              }`}
          >
            Institutions seeking CISON accreditation must meet standards across
            the following areas to ensure candidate preparation is of the highest quality.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#22c55e]/15">
          {guidelines.map(({ icon: GIcon, title, body }, i) => (
            <Reveal key={title} custom={i * 0.07}>
              <div
                className={`p-8 h-full group hover:bg-[#22c55e]/5 transition-colors duration-300 ${dark ? "bg-[#0a1a10]" : "bg-white"
                  }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${dark ? "bg-[#22c55e]/15" : "bg-green-100"
                    }`}
                >
                  <GIcon size={20} weight="duotone" className="text-[#22c55e]" />
                </div>
                <h4
                  className={`text-sm font-black mb-3 ${dark ? "text-white" : "text-[#0a1a10]"
                    }`}
                >
                  {title}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${dark ? "text-white/45" : "text-green-900/55"
                    }`}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Regulatory Partners strip ─────────────────────────────────────────────────
function Partners({ theme }: { theme: string }) {
  const dark = theme === "dark";
  const partners = [
    { abbr: "NBTE", full: "National Board for Technical Education" },
    { abbr: "NUC", full: "National Universities Commission" },
    { abbr: "CISON", full: "Chartered Institute of Statisticians of Nigeria" },
  ];

  return (
    <section
      className={`py-16 border-y transition-colors duration-500 ${dark ? "bg-[#071209] border-white/10" : "bg-[#f0fdf4] border-green-100"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 text-center">
          <p
            className={`text-xs tracking-[0.22em] uppercase font-bold ${dark ? "text-white/35" : "text-green-900/45"
              }`}
          >
            Regulatory Framework — Working With
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {partners.map(({ abbr, full }, i) => (
            <Reveal key={abbr} custom={i * 0.1}>
              <div
                className={`flex flex-col items-center text-center p-6 border ${dark ? "border-white/10 bg-white/5" : "border-green-100 bg-white shadow-sm"
                  }`}
              >
                <span
                  className={`text-3xl font-black mb-2 ${dark ? "text-white" : "text-[#0a1a10]"
                    }`}
                >
                  {abbr}
                </span>
                <span
                  className={`text-xs leading-snug ${dark ? "text-white/40" : "text-green-900/50"
                    }`}
                >
                  {full}
                </span>
                <div className="mt-3 w-8 h-0.5 bg-[#22c55e]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process Steps ─────────────────────────────────────────────────────────────
function ProcessSteps({ theme }: { theme: string }) {
  const dark = theme === "dark";
  const steps = [
    {
      n: "01",
      title: "Expression of Interest",
      desc: "Submit a formal expression of interest to CISON, outlining your institution's profile, target examination levels, and existing infrastructure.",
    },
    {
      n: "02",
      title: "Documentation Review",
      desc: "CISON reviews submitted staff credentials, course materials, and facility documentation against published accreditation guidelines.",
    },
    {
      n: "03",
      title: "Site Assessment",
      desc: "An accreditation panel may conduct an on-site or remote assessment to verify conditions and discuss any gaps identified in the review.",
    },
    {
      n: "04",
      title: "Accreditation Award",
      desc: "Institutions meeting all requirements receive CISON accreditation for the relevant examination levels, valid for a defined period subject to renewal.",
    },
  ];

  return (
    <section
      className={`py-24 transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-[#f0fdf4]"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#22c55e]" />
            <span className="text-[#22c55e] text-xs tracking-[0.22em] uppercase font-bold">
              How It Works
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-[#0a1a10]"
              }`}
          >
            The Accreditation Process
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map(({ n, title, desc }, i) => (
            <Reveal key={n} custom={i * 0.1}>
              <div
                className={`flex gap-6 p-8 border h-full transition-colors duration-400 ${dark
                    ? "border-white/10 bg-[#0a1a10] hover:border-[#22c55e]/40"
                    : "border-green-100 bg-white hover:border-[#22c55e]/50 shadow-sm"
                  }`}
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#22c55e] flex items-center justify-center">
                    <span className="text-white font-black text-xs">{n}</span>
                  </div>
                </div>
                <div>
                  <h4
                    className={`text-base font-black mb-2 ${dark ? "text-white" : "text-[#0a1a10]"
                      }`}
                  >
                    {title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-green-900/60"
                      }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



export default function CisonInstitutionsAccreditationPage() {
  const { isDark, theme } = useTheme();
  let dark = isDark;

  return (
    <>
      <div className={`transition-colors duration-500 ${dark ? "bg-[#071209]" : "bg-white"}`}>
        <Hero theme={theme} />
        <Overview theme={theme} />
        <WhatWeAccredit theme={theme} />
        <Partners theme={theme} />
        <Guidelines theme={theme} />
        <ProcessSteps theme={theme} />
        <CTAStrip />
      </div>
    </>
  );
}