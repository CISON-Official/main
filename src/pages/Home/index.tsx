// import CISON2026Conference from "@/components/announcements/2026conference";
import { ArticlesSection, HeroSlider, ServicesSection, TeamSection, WhatElseSection } from "./components";
// import { ScheduleSidebar } from "@/components/announcements/conference";
import { NewsAnnouncement } from "@/components/News";

export default function HomePage() {
    return (
        <>
            <main className="min-h-screen">
                <HeroSlider />
                <NewsAnnouncement />
                {/* <ScheduleSidebar /> */}
                {/* <FellowshipSection /> */}
                {/* <HotelsSection /> */}
                <ServicesSection />
                <WhatElseSection />
                {/* <EventBanner /> */}
                <TeamSection />
                <ArticlesSection />
            </main>
        </>
    );
}