
import { CaretRightIcon, HouseIcon, ShieldIcon } from '@phosphor-icons/react';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import SEO from '@/components/SEO';
import RoutePath from '@/routes';

function Breadcrumb() {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono tracking-tight"
        >
            <a
                href="/"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
                <HouseIcon className="w-3.5 h-3.5" />
                Home
            </a>
            <CaretRightIcon className="w-3.5 h-3.5 opacity-40" />
            <span className="text-foreground font-semibold" aria-current="page">
                Privacy Policy
            </span>
        </nav>
    );
}

// --- Page Hero ---
function PageHero() {
    return (
        <div className="relative overflow-hidden bg-[#0f1117] border-b border-white/10">
            {/* Decorative skewed background bars */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="absolute left-[-10%] top-0 h-full w-[30%] bg-[#1e8c6e]/20 blur-2xl"
                    style={{ transform: "skewX(-18deg)" }}
                />
                <div
                    className="absolute left-[20%] top-0 h-full w-[20%] bg-[#1e8c6e]/10 blur-3xl"
                    style={{ transform: "skewX(-18deg)" }}
                />
                <div
                    className="absolute right-[-5%] top-0 h-full w-[25%] bg-white/5 blur-2xl"
                    style={{ transform: "skewX(-18deg)" }}
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-6 pb-16 flex flex-col gap-6">
                <Breadcrumb />

                <div className="flex flex-col gap-3 mt-4">
                    <Badge
                        variant="outline"
                        className="w-fit border-[#1e8c6e]/60 text-[#3ecfaa] bg-[#1e8c6e]/10 font-mono text-xs tracking-widest uppercase px-3 py-1"
                    >
                        <ShieldIcon className="w-3 h-3 mr-1.5" />
                        Privacy Policy
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                        Privacy Policy
                        <br />
                        <span className="text-[#3ecfaa]">for CISON</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

// --- Policy Section ---
interface PolicySectionProps {
    heading: string;
    children: React.ReactNode;
}

function PolicySection({ heading, children }: PolicySectionProps) {
    return (
        <div className="group flex flex-col gap-3">
            <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-[#1e8c6e] transition-colors">
                {heading}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
                {children}
            </p>
        </div>
    );
}

// --- Main Privacy Policy Page ---
export default function PrivacyPolicyPage() {

    return (
        <>
            <SEO title="Privacy Policy" description="Privacy Policy page for CISON; Understand Cison\' s commitment to data privacy. Explore our policies on information security, personal data collection, and compliance for PR and media services; " canonicalUrl={RoutePath.PrivacyPolicy} keywords="Data Protection, Statistical Institute of Nigeria, Member Information, Personal Data, Confidentiality Policy, CISON Membership, Data Collection, CISON privacy policy, Chartered Institute of Statisticians of Nigeria data protection, Nigeria statistical body privacy, CISON member data security, Registered Statistician privacy, Nigerian statistics professional data" />
            <div id="main-content" className="min-h-screen bg-background font-sans">
                <PageHero />

                <main role="main" className="max-w-5xl mx-auto px-6 md:px-12 py-14">
                    <div className="max-w-2xl flex flex-col gap-10">
                        <PolicySection heading="What information do we collect?">
                            When you interact with us, we may collect your name, address, email
                            address(es), telephone number(s), and, where appropriate, date of
                            birth.
                        </PolicySection>

                        <Separator className="opacity-40" />

                        <PolicySection heading="How do we collect information?">
                            We may collect information about you whenever you interact with us.
                            For example, when you contact us regarding our activities, register
                            as a supporter, send or receive information or sign a petition, you
                            specifically and knowingly provide us with your personal information.
                            We may also receive information about you from third parties – but
                            only if you have given them permission to share your information.
                        </PolicySection>

                        <Separator className="opacity-40" />

                        <PolicySection heading="Confidentiality">
                            We will not be responsible for the privacy of data collected by
                            websites not owned or managed by Charity, including those linked
                            through our website.
                        </PolicySection>

                        <Separator className="opacity-40" />

                        <PolicySection heading="Making a complaint">
                            If you are not satisfied with the response, please contact us at{" "}
                            <a
                                href="mailto:konstruktion@email.com"
                                className="text-[#1e8c6e] hover:underline font-medium transition-colors"
                            >
                                konstruktion@email.com
                            </a>{" "}
                            with the details explaining your concerns. We will review your
                            complaint and investigate if the right procedures have been followed
                            and respond back to you as appropriate. We aim to complete this
                            investigation within 15 working days of receiving your complaint;
                            however, in some cases it may take longer. If you are still
                            unsatisfied with the response, you may contact us again.
                        </PolicySection>
                    </div>
                </main>
            </div>
        </>
    );
}