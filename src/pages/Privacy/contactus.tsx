import React, { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  CaretDownIcon, 
  PaperPlaneRightIcon,
  ChatsIcon,
  CheckCircleIcon
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

// Form Fields Structure definition
interface ContactFormState {
  firstName: string;
  surname: string;
  email: string;
  reason: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: '',
    surname: '',
    email: '',
    reason: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate active form submission tracking
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-900 px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- HERO HEADER --- */}
        <header className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <ChatsIcon size={14} weight="duotone" /> Contact CISON
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Reach Out to Us
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Use the web form below to contact us. We will respond to you shortly. Rest assured, your personal details will only be used to address your inquiry.
          </p>
        </header>

        {/* --- MAIN CONTENT SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE FORM (7/12) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-100 mb-6">
              Send Us a Message
            </h2>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-xs font-semibold text-slate-400">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="surname" className="text-xs font-semibold text-slate-400">Surname</label>
                      <input 
                        type="text" 
                        id="surname"
                        placeholder="Your last name"
                        value={formData.surname}
                        onChange={e => setFormData({...formData, surname: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="reason" className="text-xs font-semibold text-slate-400">Reason for Contacting *</label>
                      <div className="relative">
                        <select 
                          id="reason"
                          required
                          value={formData.reason}
                          onChange={e => setFormData({...formData, reason: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 appearance-none focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                        >
                          <option value="" disabled hidden>Select option</option>
                          <option value="Membership">Membership</option>
                          <option value="Committees">Committees</option>
                          <option value="Election">Election</option>
                          <option value="Enquiry">Enquiry</option>
                          <option value="Courses">Courses</option>
                          <option value="Payment Problem">Payment Problem</option>
                          <option value="Other">Other</option>
                        </select>
                        <CaretDownIcon size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message *</label>
                    <textarea 
                      id="message"
                      required
                      rows={6}
                      placeholder="Type your message details here..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot field from Elementor wrapper hidden for security optimization */}
                  <input type="text" name="field_6b7e3cc" className="hidden" tabIndex={-1} autoComplete="off" />

                  <button 
                    type="submit"
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] text-sm shadow-lg shadow-emerald-400/5"
                  >
                    <PaperPlaneRightIcon size={16} weight="bold" />
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                >
                  <CheckCircleIcon size={48} weight="fill" className="text-emerald-400" />
                  <h3 className="text-lg font-bold text-slate-100">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-400 max-w-xs">
                    Thank you for contacting CISON. An administrator will respond to your vector query via email shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT COLUMN: RESTRUCTURED OFFICE METADATA CORNER (5/12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address Context Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400 border-b border-slate-800/60 pb-3">
                <MapPinIcon size={24} weight="duotone" />
                <h3 className="font-bold text-slate-100">National Secretariat</h3>
              </div>
              <div className="text-sm text-slate-300 space-y-2 leading-relaxed">
                <p className="font-bold text-slate-200">CISON New Secretariat Address:</p>
                <p>
                  5th Floor Jibril Aminu House,<br />
                  <span className="text-emerald-400 font-medium">National Commission for Colleges of Education (NCCE)</span>,<br />
                  Opposite <span className="text-slate-400">ECOWAS Secretariat</span>,
                </p>
                <p className="text-xs text-slate-400 pt-1 font-mono">
                  Plot 829 Central Area, Cadastral Zone A01, Ralph Shodeinde Street, Garki, Abuja.
                </p>
              </div>
            </div>

            {/* Direct Dial Gateways Array */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
              
              {/* Category: Membership */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <PhoneIcon size={14} /> Membership Enquiries
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a href="tel:+2347014432794" className="bg-slate-950/60 border border-slate-800/60 hover:border-emerald-500/30 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-between group transition-colors">
                    <span>0701 443 2794</span>
                    <span className="text-xs text-slate-600 group-hover:text-emerald-400 font-normal">&rarr;</span>
                  </a>
                  <a href="tel:+2348066877275" className="bg-slate-950/60 border border-slate-800/60 hover:border-emerald-500/30 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-between group transition-colors">
                    <span>0806 687 7275</span>
                    <span className="text-xs text-slate-600 group-hover:text-emerald-400 font-normal">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Category: General Options */}
              <div className="space-y-3 border-t border-slate-800/60 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <PhoneIcon size={14} /> Other Enquiries
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a href="tel:+2349035417479" className="bg-slate-950/60 border border-slate-800/60 hover:border-emerald-500/30 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-between group transition-colors">
                    <span>0903 541 7479</span>
                    <span className="text-xs text-slate-600 group-hover:text-emerald-400 font-normal">&rarr;</span>
                  </a>
                  <a href="tel:+2348035879831" className="bg-slate-950/60 border border-slate-800/60 hover:border-emerald-500/30 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-between group transition-colors">
                    <span>0803 587 9831</span>
                    <span className="text-xs text-slate-600 group-hover:text-emerald-400 font-normal">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}