import CISON2026Conference from "@/components/announcements/2026conference";
import { ArticlesSection, EventBanner, FellowshipSection, HeroSlider, HotelsSection, ServicesSection, TeamSection, WhatElseSection } from "./components";
import { ScheduleSidebar } from "@/components/announcements/conference";
import { NewsAnnouncement } from "@/components/News";

export default function HomePage() {
    return (
        <>
            <main className="min-h-screen">
                <CISON2026Conference />
                <HeroSlider />
                <NewsAnnouncement />
                <ScheduleSidebar />
                <FellowshipSection />
                <HotelsSection />
                <ServicesSection />
                <WhatElseSection />
                <EventBanner />
                <TeamSection />
                <ArticlesSection />
            </main>
        </>
    );
}