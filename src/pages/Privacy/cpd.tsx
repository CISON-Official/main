import SEO from "@/components/SEO";
import RoutePath from "@/routes";
import { AnimatedSection } from "../About";

export default function CPDPage() {
    return (
        <div id="main-content" className="min-h-screen bg-background text-foreground font-sans">
            <SEO title="About CISON" description="About CISON as a statistical association" canonicalUrl={RoutePath.AboutUs} />
            <main role="main">
                <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                            <AnimatedSection className="max-w-3xl">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground font-bold">
                                        The Chartered Institute of Statisticians of Nigeria (CISON)
                                    </strong>{" "}
                                    is the successor statistical body to the{" "}
                                    <a
                                        href="https://nsang.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1a7a5e] hover:text-[#3dd9a8] font-semibold underline-offset-4 hover:underline transition-colors"
                                    >
                                        Nigerian Statistical Association (NSA)
                                    </a>
                                    .
                                </p>
                            </AnimatedSection>
                
                            <AnimatedSection className="max-w-3xl mt-6" delay={1}>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    The NSA was established in 1976 as a non-profit making professional
                                    body comprising of Statisticians, Economists, Planners,
                                    Econometricians, Demographers, Analysts and Corporate organizations
                                    with interest in Statistics. The Association was committed to the
                                    development of statistical theory and practice in Nigeria. Successive
                                    Governing Councils of the NSA advocated for an Institute like CISON
                                    responsible for the accreditation of statisticians in the country.
                                    Consequently, CISON was established to determine what standards of
                                    knowledge and skills are to be attained by persons seeking to become
                                    members of the Institute.
                                </p>
                            </AnimatedSection>
                        </section>
            </main>
        </div>
    )
}