import SEO from "@/components/SEO";
import { AccessHub, EventDetails, Hero, Panelists } from "./_components";
import RoutePath from "@/routes";

export default function App() {
    return (
        <div className="min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
            <SEO
                title="Maiden Event Driving Evidence Based Change"
                description="Join the Women in CISON virtual maiden event addressing challenges and opportunities for women and girls in the field of statistics."
                canonicalUrl={RoutePath.WomenStatsEvent2026}
                publishedTime="2026-08-27T11:00:00+01:00"
                keywords="Women in Statistics Nigeria, CISON 2026, Chartered Institute of Statisticians of Nigeria, Women in CISON, Evidence Based Change, statistics seminar Nigeria, female statisticians webinar"
            />


            <Hero />
            <EventDetails />
            <Panelists />
            <AccessHub />
        </div>
    );
}