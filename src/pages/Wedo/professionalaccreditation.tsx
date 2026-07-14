import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScalesIcon,
  CertificateIcon,
  FileTextIcon,
  CheckCircleIcon,
  CaretRightIcon,
  UserCheckIcon,
  ClockIcon,
} from "@phosphor-icons/react";
import { fadeUp, Reveal } from "@/animate";
import CTAStrip from "@/components/cta";

const C = {
  cream: "#FAF8F3",
  paper: "#F4F1EA",
  ink: "#1A1A14",
  inkMid: "#4A4A3A",
  inkLight: "#8A8A72",
  green: "#1B5E3B",
  greenMid: "#2D7A52",
  greenLight: "#E8F5EE",
  greenGlow: "rgba(27,94,59,0.08)",
  rule: "rgba(27,94,59,0.15)",
  gold: "#B8960C",
};


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-5 h-px" style={{ background: C.green }} />
      <span
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color: C.green, fontFamily: "'DM Mono', monospace" }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-24"
      style={{ background: C.cream }}
    >
      {/* Ruled lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: `${i * 18 + 5}%`,
              height: "1px",
              background: C.rule,
              opacity: i === 0 || i === 5 ? 0.5 : 0.25,
            }}
          />
        ))}
      </div>

      {/* Top right accent block */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${C.greenGlow} 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp}>
          <SectionLabel>Professional Accreditation</SectionLabel>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] mb-6"
              style={{
                fontFamily: "'Cormorant Garant', Georgia, serif",
                color: C.ink,
                letterSpacing: "-0.02em",
              }}
            >
              Professional
              <br />
              Recognition &{" "}
              <em style={{ color: C.green, fontStyle: "italic" }}>Levels</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: C.inkMid }}
            >
              CISON offers two levels of professional accreditation — open
              exclusively to full members of the Institute — providing
              peer-recognised credentials in statistical practice.
            </motion.p>
          </div>

          {/* Stat pills */}
          <motion.div
            variants={fadeUp}
            className="flex lg:flex-col gap-3 flex-wrap"
          >
            {[
              { label: "Years for A.Stat.", val: "+2" },
              { label: "Years for C.Stat.", val: "+5" },
              { label: "Renewal cycle", val: "5yr" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-xl"
                style={{
                  background: C.greenLight,
                  border: `1px solid ${C.rule}`,
                }}
              >
                <p
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Cormorant Garant', serif",
                    color: C.green,
                  }}
                >
                  {s.val}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: C.inkLight, fontFamily: "'DM Mono', monospace" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Credential Cards ─────────────────────────────────────────────────────────
function CredentialCards() {

  const credentials = [
    {
      abbr: "A.Stat.",
      full: "Associate Statistician",
      level: "Entry Level",
      years: "+2 years",
      fee: "No charge",
      renewable: "Every 5 years",
      color: C.greenMid,
      bg: C.greenLight,
      desc: "The entry gateway to professional accreditation. Preparatory for full C.Stat. status. Quick to apply — no fee required.",
    },
    {
      abbr: "C.Stat.",
      full: "Chartered Statistician",
      level: "Full Accreditation",
      years: "+5 years",
      fee: "Application fee applies",
      renewable: "Every 5 years",
      color: C.green,
      bg: C.ink,
      desc: "Full professional accreditation conferring the most recognised designation in Nigerian statistical practice. Portfolio-based, not examination-based.",
      dark: true,
    },
  ];

  return (
    <section
      className="py-20"
      style={{ background: C.paper, borderTop: `1px solid ${C.rule}` }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {credentials.map((c, _) => (

              <motion.div
                key={c.abbr}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: c.dark ? C.ink : C.cream,
                  border: `1px solid ${c.dark ? "rgba(255,255,255,0.1)" : C.rule}`,
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: c.dark ? C.greenMid : C.green }}
                />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2"
                        style={{
                          color: c.dark ? C.greenMid : C.green,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {c.level}
                      </span>
                      <h2
                        className="text-4xl font-bold"
                        style={{
                          fontFamily: "'Cormorant Garant', serif",
                          color: c.dark ? "#FAF8F3" : C.ink,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {c.abbr}
                      </h2>
                      <p
                        className="text-sm mt-1"
                        style={{ color: c.dark ? "rgba(250,248,243,0.6)" : C.inkLight }}
                      >
                        {c.full}
                      </p>
                    </div>
                    <CertificateIcon
                      size={36}
                      weight="duotone"
                      style={{ color: c.dark ? C.greenMid : C.green, opacity: 0.7 }}
                    />
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: c.dark ? "rgba(250,248,243,0.7)" : C.inkMid }}
                  >
                    {c.desc}
                  </p>

                  {/* Meta grid */}
                  <div
                    className="grid grid-cols-2 gap-3 pt-6"
                    style={{ borderTop: `1px solid ${c.dark ? "rgba(255,255,255,0.1)" : C.rule}` }}
                  >
                    {[
                      { label: "Min. Experience", val: c.years },
                      { label: "Application Fee", val: c.fee },
                      { label: "Renewal", val: c.renewable },
                      { label: "Type", val: "Portfolio-based" },
                    ].map((m) => (
                      <div key={m.label}>
                        <p
                          className="text-xs mb-0.5"
                          style={{
                            color: c.dark ? "rgba(250,248,243,0.4)" : C.inkLight,
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {m.label}
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: c.dark ? "#FAF8F3" : C.ink }}
                        >
                          {m.val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <motion.p
            className="text-sm mt-6 text-center"
            style={{ color: C.inkLight, fontFamily: "'DM Mono', monospace" }}
          >
            ⚠ A.Stat. and C.Stat. designations may not be held simultaneously
          </motion.p>
        </Reveal>
      </div>
    </section >
  );
}

// ─── Overview Block ───────────────────────────────────────────────────────────
function Overview() {

  const astatItems = [
    "Contact information",
    "A brief cover letter explaining interest in applying for A.Stat. status",
    "A Curriculum Vitae (CV)",
    "List of degrees earned and courses taken",
    "Candidate's demographic information",
  ];

  const recognises = [
    "Advanced statistical training and knowledge",
    "Experience in applying statistical expertise competently",
    "Maintaining appropriate professional development",
    "Agreeing to abide by ethical standards of practice",
    "Being able to communicate effectively",
  ];

  return (
    <section
      className="py-20"
      style={{ background: C.cream, borderTop: `1px solid ${C.rule}` }}
    >
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            {/* Left sidebar */}
            <motion.div >
              <SectionLabel>Overview</SectionLabel>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  color: C.ink,
                  lineHeight: 1.15,
                }}
              >
                How Accreditation Works
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: C.inkMid }}>
                Accreditation is a voluntary, portfolio-based credential reviewed
                by the Accreditation Committee — constituted by the Governing
                Council of CISON, composed entirely of Chartered Statisticians or
                equivalents.
              </p>

              <div
                className="mt-8 p-4 rounded-xl"
                style={{ background: C.greenLight, border: `1px solid ${C.rule}` }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: C.green, fontFamily: "'DM Mono', monospace" }}
                >
                  Eligibility
                </p>
                <p className="text-sm" style={{ color: C.inkMid }}>
                  Must be a CISON member for at least{" "}
                  <strong style={{ color: C.ink }}>2 years</strong> before
                  applying for A.Stat.
                </p>
              </div>
            </motion.div>

            {/* Right content */}
            <div className="space-y-12">
              <motion.div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: C.greenLight }}
                  >
                    <FileTextIcon size={16} weight="bold" style={{ color: C.green }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Cormorant Garant', serif", color: C.ink }}
                  >
                    A.Stat. Application Requirements
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: C.inkMid }}>
                  The A.Stat. application is designed to be quick and easy —
                  there is no charge for applying. Your application must include:
                </p>
                <ul className="space-y-2.5">
                  {astatItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircleIcon
                        size={16}
                        weight="fill"
                        className="mt-0.5 shrink-0"
                        style={{ color: C.green }}
                      />
                      <span className="text-sm" style={{ color: C.inkMid }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Divider */}
              <div className="h-px" style={{ background: C.rule }} />

              {/* What accreditation recognises */}
              <motion.div
              //  {...reveal(inView, 0.2)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: C.greenLight }}
                  >
                    <ScalesIcon size={16} weight="bold" style={{ color: C.green }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Cormorant Garant', serif", color: C.ink }}
                  >
                    What Accreditation Recognises
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: C.inkMid }}>
                  In line with ASA guidelines, CISON accreditation is a voluntary
                  credential that provides peer recognition for all of the
                  following:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {recognises.map((item, i) => (
                    <Reveal>
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg"
                        style={{ background: C.paper, border: `1px solid ${C.rule}` }}
                      >
                        <CaretRightIcon
                          size={12}
                          weight="bold"
                          className="mt-1 shrink-0"
                          style={{ color: C.green }}
                        />
                        <span className="text-sm" style={{ color: C.inkMid }}>
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ─── C.Stat Requirements ──────────────────────────────────────────────────────
function CStatRequirements() {
  const [activeTab, setActiveTab] = useState<"standard" | "exceptional">("standard");

  const standardRoutes = [
    {
      num: "01",
      title: "First/Second Class Degree + 5 Years",
      desc: "A first or second class University Degree and/or an appropriate Higher Degree in Statistics (or a subject with substantial statistical content) in Nigeria, plus five years practical experience.",
    },
    {
      num: "02",
      title: "Overseas Degree + 5 Years",
      desc: "An appropriate Overseas Degree (Masters level in some cases) in Statistics or a subject with substantial statistical coverage, plus five years practical experience in Nigeria.",
    },
    {
      num: "03",
      title: "CISON Graduate Diploma + 5 Years",
      desc: "The Graduate Diploma of the CISON, plus five years practical experience in applying statistics.",
    },
    {
      num: "04",
      title: "Third Class Degree + CISON Certificate + 5 Years",
      desc: "A third class or Pass University Degree plus the Graduate Certificate of the CISON and five years practical experience in applying statistics.",
    },
  ];

  const exceptionalRoutes = [
    "Breadth of knowledge and understanding equivalent to at least the standard requirements",
    "A minimum of ten years practical experience applying statistics",
    "Candidates may be asked competency-based questions or to produce statistical reports as part of their application",
  ];

  return (
    <section
      className="py-20"
      style={{
        background: C.ink,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-px" style={{ background: C.greenMid }} />
          <span
            className="text-xs font-semibold tracking-[0.18em] uppercase"
            style={{ color: C.greenMid, fontFamily: "'DM Mono', monospace" }}
          >
            Requirements for Chartered Statistician
          </span>
        </div>

        <motion.h2
          //   {...reveal(inView, 0)}
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{
            fontFamily: "'Cormorant Garant', serif",
            color: "#FAF8F3",
            letterSpacing: "-0.02em",
          }}
        >
          Pathways to{" "}
          <em style={{ color: C.greenMid, fontStyle: "italic" }}>C.Stat.</em>
        </motion.h2>

        <motion.p
          //   {...reveal(inView, 0.06)}
          className="text-sm mb-10 max-w-xl"
          style={{ color: "rgba(250,248,243,0.55)" }}
        >
          To be considered for C.Stat., applicants must meet at least{" "}
          <em>one</em> of the following criteria.
        </motion.p>

        <Reveal>
          <div className="flex gap-2 mb-8">
            {(["standard", "exceptional"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background:
                    activeTab === tab ? C.greenMid : "rgba(255,255,255,0.06)",
                  color:
                    activeTab === tab ? "#FAF8F3" : "rgba(250,248,243,0.5)",
                  border: `1px solid ${activeTab === tab ? C.greenMid : "rgba(255,255,255,0.1)"}`,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                }}
              >
                {tab === "standard" ? "Standard Routes" : "Exceptional Circumstances"}
              </button>
            ))}
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          {activeTab === "standard" ? (
            <div
              key="standard"
              className="grid sm:grid-cols-2 gap-4"
            >
              {standardRoutes.map((r, i) => (
                <div
                  key={`${r.num} + ${i}`}
                  className="p-6 rounded-xl relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="absolute top-4 right-4 text-5xl font-black leading-none select-none"
                    style={{
                      color: "rgba(45,122,82,0.12)",
                      fontFamily: "'Cormorant Garant', serif",
                    }}
                  >
                    {r.num}
                  </span>
                  <p
                    className="text-xs mb-3"
                    style={{
                      color: C.greenMid,
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Route {r.num}
                  </p>
                  <h4
                    className="text-base font-bold mb-3"
                    style={{
                      fontFamily: "'Cormorant Garant', serif",
                      color: "#FAF8F3",
                      fontSize: "18px",
                    }}
                  >
                    {r.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(250,248,243,0.55)" }}
                  >
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div
              key="exceptional"
              className="p-8 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.greenMid}40`,
              }}
            >
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(250,248,243,0.65)" }}
              >
                Under exceptional circumstances, applicants who do not fulfil
                the degree requirements may still be accredited if they can
                demonstrate both of the following:
              </p>
              <ul className="space-y-4">
                {exceptionalRoutes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${C.greenMid}30`, border: `1px solid ${C.greenMid}50` }}
                    >
                      <span
                        className="text-xs font-bold"
                        style={{ color: C.greenMid, fontFamily: "'DM Mono', monospace" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(250,248,243,0.7)" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── A.Stat Requirements ──────────────────────────────────────────────────────
function AStatRequirements() {

  return (
    <section
      className="py-20"
      style={{ background: C.paper, borderTop: `1px solid ${C.rule}` }}
    >
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 lg:px-12" >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
            //   {...reveal(inView, 0)}
            >
              <SectionLabel>Associate Statistician</SectionLabel>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-5"
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  color: C.ink,
                  letterSpacing: "-0.02em",
                }}
              >
                Requirements for{" "}
                <em style={{ color: C.green, fontStyle: "italic" }}>A.Stat.</em>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.inkMid }}>
                Individuals who hold the academic qualifications required for
                Chartered Statistician status but lack the minimum five years of
                practical experience are encouraged to apply for the Associate
                Statistician designation — the natural stepping stone to full
                C.Stat. accreditation.
              </p>
            </motion.div>

            <motion.div
            //   {...reveal(inView, 0.1)}
            >
              <div
                className="rounded-2xl p-8"
                style={{ background: C.cream, border: `1px solid ${C.rule}` }}
              >
                <UserCheckIcon
                  size={32}
                  weight="duotone"
                  style={{ color: C.green, marginBottom: "16px" }}
                />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garant', serif", color: C.ink }}
                >
                  Who Should Apply
                </h3>
                <ul className="space-y-3">
                  {[
                    "Holds qualifications equivalent to C.Stat. academic requirements",
                    "Has been a CISON member for at least 2 years",
                    "Has less than 5 years of practical statistical experience",
                    "Wishes to demonstrate commitment to professional development",
                  ].map((item, i) => (
                    <Reveal>
                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: C.green }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: C.inkMid }}>
                          {item}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <div
                  className="mt-6 pt-6 flex items-center gap-2"
                  style={{ borderTop: `1px solid ${C.rule}` }}
                >
                  <ClockIcon size={14} style={{ color: C.inkLight }} />
                  <p
                    className="text-xs"
                    style={{ color: C.inkLight, fontFamily: "'DM Mono', monospace" }}
                  >
                    After 2 years' CISON membership
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ─── Member CTA ───────────────────────────────────────────────────────────────

export default function ProfessionalAccreditationPage() {
  return (
    <>
      <Hero />
      <CredentialCards />
      <Overview />
      <CStatRequirements />
      <AStatRequirements />
      <CTAStrip />
    </>
  );
}