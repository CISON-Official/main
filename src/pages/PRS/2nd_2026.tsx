export default function CisonWorkshopPage() {
    const stats = [
        { label: 'Workshop Days', value: '4+' },
        { label: 'Hands-on Sessions', value: '12+' },
        { label: 'Research Modules', value: '8+' },
        { label: 'Professional Networking', value: '100%' },
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-yellow-50 text-gray-900 overflow-hidden">
            {/* Floating Decorations */}
            <div className="fixed top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="fixed bottom-10 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl pointer-events-none"></div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#facc15,_transparent_35%)]"></div>

                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Chartered Institute of Statisticians of Nigeria (CISON)
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                            2026 Professional Development Workshop
                        </h1>

                        <p className="mt-6 text-xl text-green-100 leading-relaxed max-w-2xl">
                            Planning Research & Statistics (PRS)
                        </p>

                        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl">
                            <h2 className="text-2xl font-bold text-yellow-300 mb-3">
                                Theme
                            </h2>
                            <p className="text-lg leading-relaxed text-green-50">
                                Basic Structural Modelling for Social and Business Research.
                            </p>
                            <p className="mt-3 text-green-200 italic">
                                Gain practical knowledge for direct application.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="https://my.cison.org.ng/2nd-prs-individual-registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-green-950 font-bold px-8 py-4 rounded-2xl shadow-xl"
                            >
                                Register as Individual
                            </a>

                            <a
                                href="https://my.cison.org.ng/2nd-quarter-prs-student-registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-green-100 transition-all duration-300 text-green-900 font-bold px-8 py-4 rounded-2xl shadow-xl"
                            >
                                Student Registration
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-yellow-400/30 blur-3xl rounded-full"></div>
                            <img
                                src="/mnt/data/WhatsApp Image 2026-05-06 at 1.43.01 AM.jpeg"
                                alt="CISON Professional Development Workshop"
                                className="relative w-full max-w-lg rounded-[2rem] shadow-2xl border-4 border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="text-xl font-black text-green-900 mb-2">
                                    {item.value}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Info */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
                        <div className="text-lg mb-4">📅</div>
                        <h3 className="text-lg font-bold text-green-900 mb-2">Date</h3>
                        <p className="text-sm text-gray-700">15th – 18th June, 2026</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
                        <div className="text-lg mb-4">🕘</div>
                        <h3 className="text-lg font-bold text-green-900 mb-2">Time</h3>
                        <p className="text-sm text-gray-700">9:00 AM Daily</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
                        <div className="text-lg mb-4">📍</div>
                        <h3 className="text-lg font-bold text-green-900 mb-2">Venue</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            IT Suite, Directorate of ICT,<br />
                            Nasarawa State University,<br />
                            Keffi, Nigeria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Attend */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800"></div>
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-white">
                    <div className="text-center mb-16">
                        <div className="inline-flex px-6 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 font-bold mb-6">
                            WHY ATTEND?
                        </div>

                        <h2 className="text-5xl font-black mb-6">
                            Advance Your Statistical & Research Skills
                        </h2>

                        <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                            Gain practical exposure to structural modelling methodologies, statistical interpretation, and applied research techniques directly relevant to academia, government institutions, and industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Practical Learning',
                                icon: '📊',
                                desc: 'Hands-on sessions focused on real-world social and business datasets.'
                            },
                            {
                                title: 'Expert Facilitation',
                                icon: '🎓',
                                desc: 'Learn directly from experienced academics and research professionals.'
                            },
                            {
                                title: 'Research Development',
                                icon: '📚',
                                desc: 'Improve your ability to structure and interpret advanced research models.'
                            },
                            {
                                title: 'Professional Networking',
                                icon: '🤝',
                                desc: 'Connect with researchers, statisticians, lecturers, and professionals.'
                            },
                            {
                                title: 'Industry Applications',
                                icon: '🏢',
                                desc: 'Apply modelling techniques to corporate and institutional projects.'
                            },
                            {
                                title: 'Career Advancement',
                                icon: '🚀',
                                desc: 'Enhance your portfolio and professional competence in analytics.'
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                                    {item.title}
                                </h3>
                                <p className="text-green-100 text-lg leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilitator & Fees */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
                    {/* Facilitator */}
                    <div className="bg-gradient-to-br from-green-900 to-green-700 text-white rounded-[2rem] p-10 shadow-2xl">
                        <div className="inline-block bg-yellow-500 text-green-950 font-bold px-5 py-2 rounded-full mb-6">
                            FACILITATOR
                        </div>

                        <h2 className="text-4xl font-black mb-4">
                            Dr. K. A. Awopeju
                        </h2>

                        <p className="text-xl text-green-100 leading-relaxed">
                            Nnamdi Azikiwe University, Awka.
                        </p>

                        <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                                Workshop Focus
                            </h3>

                            <ul className="space-y-3 text-green-50 text-lg">
                                <li>• Structural Modelling Techniques</li>
                                <li>• Social Research Applications</li>
                                <li>• Business Research Analysis</li>
                                <li>• Practical Hands-on Sessions</li>
                                <li>• Statistical Interpretation & Reporting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fees */}
                    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-[2rem] p-10 shadow-2xl border border-yellow-100">
                        <h2 className="text-4xl font-black text-green-900 mb-8">
                            Registration Fees
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-green-900">Participants</h3>
                                    <p className="text-gray-600">Individual registration</p>
                                </div>
                                <div className="text-3xl font-black text-yellow-600">₦120,000</div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-green-900">Corporate Sponsorship</h3>
                                    <p className="text-gray-600">Minimum of 10 participants</p>
                                </div>
                                <div className="text-3xl font-black text-yellow-600">₦100,000</div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-green-900">Undergraduate Students</h3>
                                    <p className="text-gray-600">Student category</p>
                                </div>
                                <div className="text-3xl font-black text-yellow-600">₦80,000</div>
                            </div>
                        </div>

                        <div className="mt-10 grid sm:grid-cols-3 gap-4">
                            <a
                                href="https://my.cison.org.ng/2nd-prs-individual-registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-900 hover:bg-green-800 transition-all duration-300 text-white text-center py-4 rounded-2xl font-bold shadow-lg"
                            >
                                Individual
                            </a>

                            <a
                                href="https://my.cison.org.ng/corporate-prs-2nd-quarter-registration/#gf_14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-green-950 text-center py-4 rounded-2xl font-bold shadow-lg"
                            >
                                Corporate
                            </a>

                            <a
                                href="https://my.cison.org.ng/2nd-quarter-prs-student-registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-100 hover:bg-green-200 transition-all duration-300 text-green-900 text-center py-4 rounded-2xl font-bold shadow-lg"
                            >
                                Students
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Details */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-[2rem] text-white p-10 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8">Payment Details</h2>

                            <div className="space-y-5 text-xl">
                                <div>
                                    <span className="font-bold text-yellow-300">Account Name:</span> CISON
                                </div>

                                <div>
                                    <span className="font-bold text-yellow-300">Bank:</span> First Bank
                                </div>

                                <div>
                                    <span className="font-bold text-yellow-300">Account Number:</span> 2045147966
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <h3 className="text-3xl font-bold text-yellow-300 mb-5">
                                Need Assistance?
                            </h3>

                            <div className="space-y-3 text-lg">
                                <p>07060902373</p>
                                <p>07074524630</p>
                                <p>08020740989</p>
                                <p>09035417497</p>
                                <p>07036990145</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* Gallery Style Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <div className="inline-flex px-6 py-2 rounded-full bg-green-100 text-green-900 font-bold mb-5">
                        WORKSHOP EXPERIENCE
                    </div>

                    <h2 className="text-5xl font-black text-green-900 mb-6">
                        Experience a Modern Research Workshop
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Interactive sessions, collaborative learning, advanced statistical insights, and practical demonstrations tailored for researchers and professionals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 auto-rows-[250px]">
                    <div className="lg:row-span-2 bg-gradient-to-br from-green-900 to-green-700 rounded-[2rem] p-10 text-white flex flex-col justify-end shadow-2xl">
                        <div className="text-6xl mb-6">📈</div>
                        <h3 className="text-4xl font-black mb-4">
                            Advanced Statistical Modelling
                        </h3>
                        <p className="text-green-100 text-lg leading-relaxed">
                            Learn practical techniques applicable to social science, business analytics, and institutional research.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between">
                        <div className="text-5xl">🧠</div>
                        <div>
                            <h3 className="text-3xl font-black text-green-950 mb-3">
                                Practical Sessions
                            </h3>
                            <p className="text-green-900 text-lg">
                                Real-world examples and hands-on modelling exercises.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-green-100 flex flex-col justify-between">
                        <div className="text-5xl">💼</div>
                        <div>
                            <h3 className="text-3xl font-black text-green-900 mb-3">
                                Corporate Applications
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Apply data-driven decision making techniques in organizations.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-gradient-to-r from-green-800 to-green-600 rounded-[2rem] p-10 text-white shadow-2xl flex items-center justify-between gap-8 flex-wrap">
                        <div>
                            <div className="text-yellow-300 font-bold mb-3 text-lg">
                                PROFESSIONAL DEVELOPMENT
                            </div>
                            <h3 className="text-4xl font-black mb-4 max-w-2xl">
                                Designed for Researchers, Analysts, Students & Institutions
                            </h3>
                        </div>

                        <a
                            href="https://my.cison.org.ng/2nd-prs-individual-registration/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-green-950 px-8 py-4 rounded-2xl font-black shadow-xl"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-[2rem] p-12 shadow-2xl text-center">
                    <h2 className="text-5xl font-black text-green-950 mb-6">
                        Register for the Workshop Today
                    </h2>

                    <p className="text-xl text-green-900 max-w-3xl mx-auto leading-relaxed mb-10">
                        Build practical expertise in structural modelling for social and business research through intensive hands-on learning sessions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <a
                            href="https://my.cison.org.ng/2nd-prs-individual-registration/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950 hover:bg-green-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
                        >
                            Individual Registration
                        </a>

                        <a
                            href="https://my.cison.org.ng/corporate-prs-2nd-quarter-registration/#gf_14"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
                        >
                            Corporate Registration
                        </a>

                        <a
                            href="https://my.cison.org.ng/2nd-quarter-prs-student-registration/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
                        >
                            Student Registration
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
