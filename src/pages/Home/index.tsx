import { ArticlesSection, EventBanner, HeroSlider, ServicesSection, TeamSection, WhatElseSection } from "./components";
import SEO from "@/components/SEO";

export default function HomePage() {
    return (
        <>
        <SEO title="Home" canonicalUrl="/" description="Landing page for CISON" article={false} />
        <main className="min-h-screen">
            <HeroSlider />
            <ServicesSection />
            <WhatElseSection />
            <EventBanner />
            <TeamSection />
            <ArticlesSection />
        </main>
        </>
    );
}