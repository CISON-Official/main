import CISON2026Conference from "@/components/announcements/2026conference";
import { ArticlesSection, EventBanner, HeroSlider, ServicesSection, TeamSection, WhatElseSection } from "./components";
import SEO from "@/components/SEO";
import { ScheduleSidebar } from "@/components/announcements/conference";

export default function HomePage() {
    return (
        <>
            <SEO title="Home" canonicalUrl="/" description="Landing page for CISON" article={false} />
            <main className="min-h-screen">
                <CISON2026Conference />
                <HeroSlider />
                <ServicesSection />
                <WhatElseSection />
                <ScheduleSidebar />
                <EventBanner />
                <TeamSection />
                <ArticlesSection />
            </main>
        </>
    );
}