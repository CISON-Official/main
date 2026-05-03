
import { ArrowSquareOutIcon, FacebookLogoIcon, LinkedinLogoIcon, MailboxIcon, PhoneIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import Logo from "@/assets/logo.jpg"
import RoutePath from '@/routes';

const footerWhatWeDo = [
  { name: 'Professional Accreditation', href: 'https://cison.org.ng/professional-accreditation/' },
  { name: 'Accreditation of Institutions', href: 'https://cison.org.ng/accreditation-and-examination/institutions-accreditation/' },
  { name: 'Courses Accreditation', href: 'https://cison.org.ng/accreditation-and-examination/courses-accreditation/' },
  { name: 'Professional Examination', href: 'https://cison.org.ng/professional-examination/' },
  { name: 'Consultancy Services', href: 'https://cison.org.ng/accreditation-and-examination/consultancy-services/' },
  { name: 'Capacity Building', href: 'https://cison.org.ng/continuing-professional-development-cpd-policy/' },
  { name: 'Mentoring Scheme', href: 'https://cison.org.ng/accreditation-and-examination/mentoring-scheme/' },
  { name: 'Curriculum Development', href: 'https://cison.org.ng/accreditation-and-examination/curriculum-development/' },
];

const footerWhoWeAre = [
  { name: 'About CISON', href: RoutePath.AboutUs },
  { name: 'Our History', href: 'https://cison.org.ng/about/our-history/' },
  { name: 'Our Objectives', href: 'https://cison.org.ng/about/our-objectives/' },
  { name: 'Governance', href: 'https://cison.org.ng/about/structure-and-governance/' },
  { name: 'Departments', href: 'https://cison.org.ng/departments-and-activities/' },
  { name: 'Our Committees', href: 'https://cison.org.ng/committees/' },
  { name: 'Contact CISON', href: 'https://cison.org.ng/contact/' },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Contact bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
          <a
            href="tel:+2347014432794"
            className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
          >
            <PhoneIcon className="w-4 h-4 text-emerald-500" />
            +234 701 443 2794
          </a>
          <a
            href="https://cison.org.ng/contact/"
            className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
          >
            <MailboxIcon className="w-4 h-4 text-emerald-500" />
            info@cison.org.ng
          </a>
        </div>
      </div>

      {/* Brand tagline */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid sm:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center shadow-lg">
                <img className="text-white font-black text-sm" src={Logo} alt="CISON Footer Logo" />
              </div>
              <span className="font-bold text-white text-lg">CISON</span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Chartered Institute of Statisticians of Nigeria — promoting excellence in statistical science across all sectors.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-2xl sm:text-3xl font-bold text-slate-200 leading-tight">
              Statistical Science,
              <br />
              Knowledge and Professionalism.
            </p>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">What We Do</p>
            <ul className="space-y-2.5">
              {footerWhatWeDo.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-xs hover:text-emerald-400 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">Who We Are</p>
            <ul className="space-y-2.5">
              {footerWhoWeAre.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-xs hover:text-emerald-400 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">News & Events</p>
            <ul className="space-y-2.5">
              <li><a href="/events" className="text-xs hover:text-emerald-400 transition-colors">Events</a></li>
              <li><a href="/news" className="text-xs hover:text-emerald-400 transition-colors">CISON News</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">Terms & Policies</p>
            <ul className="space-y-2.5">
              <li><a href={RoutePath.Privacy} className="text-xs hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li>
                <a href="https://nsang.org/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-emerald-400 transition-colors flex items-center gap-1">
                  NSA Website <ArrowSquareOutIcon className="w-3 h-3" />
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.LinkedinLogoIcon.com/company/#" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                <LinkedinLogoIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://TwitterLogoIcon.com/#" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                <TwitterLogoIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://web.FacebookLogoIcon.com/profile.php?id=61560745762908" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                <FacebookLogoIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 Chartered Institute of Statisticians of Nigeria (CISON). All rights reserved.</p>
          <a href="https://nsang.org/" target="_blank" rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            Nigerian Statistical Association <ArrowSquareOutIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;