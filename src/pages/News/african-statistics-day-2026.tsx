import { NewspaperIcon } from "@phosphor-icons/react";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import { Reveal } from "@/animate";
import RoutePath from "@/routes";
import flyerImage from "@/assets/events/african_statistics_day_2026.jpeg";

export default function AfricanStatisticsDay2026Page() {
    const crumbs: BreadcrumbType[] = [
        { label: "Home", href: "/" },
        { label: "News", href: RoutePath.News, icon: NewspaperIcon },
        { label: "African Statistics Day 2026", href: RoutePath.AfricanStatisticsDay2026 },
    ];

    return (
        <div id="main-content" className="min-h-screen bg-background text-foreground">
            <PageHero
                breadcrumb={<Breadcrumb Elements={crumbs} />}
                title="News"
                subtitle="CISON Celebrates"
                catchy="African Statistics Day 2026"
            />

            <main role="main">
                <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-10 lg:gap-12 items-start">
                        <div className="flex flex-col gap-8">
                            <Reveal>
                                <div className="rounded-2xl border border-[#1a7a5e]/30 bg-[#1a7a5e]/5 p-6 md:p-7">
                                    <p className="text-xs tracking-widest uppercase text-[#1a7a5e] dark:text-[#3dd9a8] font-semibold mb-2">
                                        Theme
                                    </p>
                                    <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                                        Institutionalising Water and Sanitation Statistics for Sustainable and Climate-Resilient Development in Africa.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.05}>
                                <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                                    <p>
                                        On this special occasion of African Statistics Day 2026, the Chartered Institute of Statisticians of Nigeria (CISON) joins statisticians, data professionals, policymakers, and stakeholders across Africa to celebrate the power of statistics in driving sustainable development.
                                    </p>
                                    <p>
                                        Statistics is the backbone of informed decision-making, good governance, and national progress. Today, we reaffirm our commitment to promoting statistical excellence, professionalism, data integrity, and evidence-based policy in Nigeria and across Africa.
                                    </p>
                                    <p>
                                        We celebrate all statisticians whose dedication, accuracy, and hard work continue to shape a better future for our continent.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="border-t border-border pt-6">
                                    <p className="text-xl font-bold text-foreground">Happy African Statistics Day 2026!</p>
                                    <p className="mt-1 text-muted-foreground">From all of us at CISON</p>
                                </div>
                            </Reveal>
                        </div>

                        <aside className="lg:sticky lg:top-24">
                            <Reveal delay={0.15}>
                                <div className="rounded-2xl border border-border bg-card p-3">
                                    <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
                                        <img
                                            src={flyerImage}
                                            alt="African Statistics Day 2026 flyer"
                                            className="block w-full h-auto object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </Reveal>
                        </aside>
                    </div>
                </section>
            </main>
        </div>
    );
}
