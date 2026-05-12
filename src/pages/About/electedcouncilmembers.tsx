"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRightIcon,
    NewspaperIcon,
    TagIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
    FacebookLogoIcon,
    LinkIcon,
    CheckIcon,
    ChatCircleDotsIcon,
    IdentificationBadgeIcon,
    HouseIcon,
    PersonArmsSpreadIcon
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, PageHero, type BreadcrumbType } from "@/components/Hero";
import RoutePath from "@/routes";
import { Reveal } from "@/animate";
import SEO from "@/components/SEO";


interface RelatedPost {
    title: string;
    href: string;
    categories: string[];
}


const post = {
    title: "List of Elected Council Members",
    author: "Portal Crafter",
    authorHref: "https://cison.org.ng/author/cison/",
    date: "November 6, 2024",
    time: "11:03 pm",
    categories: [
        { label: "Announcement", href: "https://cison.org.ng/category/announcement/" },
        { label: "Latest", href: "https://cison.org.ng/category/latest/" },
    ],
    readTime: "2 min read",
    content: {
        intro: "The following is the new list of Elected Council Members.",
        members: [
            "Prof. Julian Mbegbu",
            "Dr. Umaru Baba",
            "Assoc. Prof. Uchenna Ogoke",
            "Dr. Bright Ajibade",
            "Mr. Bello Jaafaru",
            "Mr. Stephen Aiyedun",
        ],
        signoff: "Thank you.",
        signatory: "Registrar/Secretary, Election Committee.",
    },
};

const relatedPosts: RelatedPost[] = [
    {
        title: "List of Hotels for the 2nd CISON International Conference 2025, Asaba, Delta State.",
        href: "https://cison.org.ng/list-of-hotels-for-the-2nd-cison-international-conference-2025/",
        categories: ["Events", "Latest"],
    },
    {
        title: "2024 Conference Programme",
        href: "https://cison.org.ng/2024-conference-programme/",
        categories: ["Latest", "Membership"],
    },
    {
        title: "Election Announcement",
        href: "https://cison.org.ng/election-announcement/",
        categories: ["Announcement", "Latest"],
    },
];


function ShareBar() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href).catch(() => { });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mr-1">
                Share
            </span>
            {[
                { Icon: LinkedinLogoIcon, label: "LinkedIn", href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}` },
                { Icon: TwitterLogoIcon, label: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}` },
                { Icon: FacebookLogoIcon, label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
            ].map(({ Icon, label, href }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${label}`}
                    className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40 transition-all"
                >
                    <Icon size={12} weight="fill" />
                </a>
            ))}
            <button
                onClick={handleCopy}
                aria-label="Copy link"
                className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40 transition-all"
            >
                {copied ? <CheckIcon size={12} weight="bold" className="text-[#6dd249]" /> : <LinkIcon size={12} weight="bold" />}
            </button>
        </div>
    );
}


function ArticleBody() {
    return (
        <article className="max-w-4xl mx-auto px-6 md:px-10 py-12 flex flex-col gap-10">
            {/* Intro */}
            <Reveal>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                    {post.content.intro}
                </p>
            </Reveal>

            {/* Member list */}
            <Reveal delay={0.08}>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#6dd249]/75 font-semibold mb-1">
                        Elected Members
                    </span>
                    <ol className="flex flex-col divide-y divide-border/40 border border-border/40 rounded-2xl overflow-hidden">
                        {post.content.members.map((member, i) => (
                            <motion.li
                                key={member}
                                initial={{ opacity: 0, x: -14 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center gap-4 px-5 py-4 bg-card hover:bg-muted/30 transition-colors group"
                            >
                                <span className="w-7 h-7 rounded-full bg-[#6dd249]/10 border border-[#6dd249]/25 flex items-center justify-center text-[11px] font-black font-mono text-[#6dd249] flex-shrink-0 group-hover:bg-[#6dd249]/20 transition-colors">
                                    {i + 1}
                                </span>
                                <span className="text-sm font-semibold text-foreground">{member}</span>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </Reveal>

            {/* Signoff */}
            <Reveal delay={0.12}>
                <div className="flex flex-col gap-1 border-l-2 border-[#6dd249]/40 pl-5">
                    <p className="text-sm text-muted-foreground italic">{post.content.signoff}</p>
                    <p className="text-xs font-semibold text-muted-foreground font-mono">{post.content.signatory}</p>
                </div>
            </Reveal>

            <Separator className="opacity-20" />

            {/* Tags + Share */}
            <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    {/* Tags */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <TagIcon size={14} className="text-muted-foreground" weight="fill" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mr-1">
                            Categories
                        </span>
                        {post.categories.map((c) => (
                            <a key={c.label} href={c.href}>
                                <Badge
                                    variant="outline"
                                    className="border-border/60 text-muted-foreground hover:text-[#6dd249] hover:border-[#6dd249]/40 text-[10px] font-mono tracking-wide transition-colors"
                                >
                                    {c.label}
                                </Badge>
                            </a>
                        ))}
                    </div>

                    <ShareBar />
                </div>
            </Reveal>
        </article>
    );
}


function CommentsSection() {
    const [open, setOpen] = useState(false);

    return (
        <Reveal>
            <div className="max-w-4xl mx-auto px-6 md:px-10 pb-6">
                <div className="rounded-2xl border border-border/60 overflow-hidden">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-card hover:bg-muted/30 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-[#6dd249]/10 border border-[#6dd249]/25 flex items-center justify-center text-[#6dd249]">
                                <ChatCircleDotsIcon size={15} weight="fill" />
                            </div>
                            <span className="text-sm font-bold text-foreground">
                                What do you think?
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">
                                Show comments / Leave a comment
                            </span>
                        </div>
                        <motion.span
                            animate={{ rotate: open ? 90 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-muted-foreground"
                        >
                            <ArrowRightIcon size={14} />
                        </motion.span>
                    </button>

                    <motion.div
                        initial={false}
                        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-6 border-t border-border/40 bg-muted/20">
                            <p className="text-sm text-muted-foreground text-center py-4 italic">
                                Comments are managed through the CISON portal. Please log in to leave a comment.
                            </p>
                            <div className="flex justify-center">
                                <Button
                                    className="bg-[#6dd249] hover:bg-[#5bb83d] text-[#06080f] font-bold font-mono text-xs tracking-widest uppercase"
                                >
                                    <a href={RoutePath.ContactUs}>Get in Touch</a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Reveal>
    );
}

function RelatedNews() {
    return (
        <section className="border-t border-border/40 py-12">
            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-8">
                <Reveal>
                    <div className="flex items-center gap-3">
                        <NewspaperIcon size={18} className="text-[#6dd249]" weight="fill" />
                        <h3
                            className="text-xl font-black text-foreground tracking-tight"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            Related News
                        </h3>
                    </div>
                </Reveal>

                <div className="grid sm:grid-cols-3 gap-5">
                    {relatedPosts.map((rp, i) => (
                        <Reveal key={rp.href} delay={i * 0.1}>
                            <motion.a
                                href={rp.href}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="group flex flex-col gap-3 p-5 rounded-2xl border border-border/60 bg-card hover:border-[#6dd249]/45 hover:bg-muted/20 transition-all h-full"
                            >
                                <div className="flex flex-wrap gap-1.5">
                                    {rp.categories.map((cat) => (
                                        <span
                                            key={cat}
                                            className="text-[9px] font-mono tracking-widest uppercase text-[#6dd249]/65 border border-[#6dd249]/20 px-2 py-0.5 rounded-full"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm font-semibold text-foreground group-hover:text-[#6dd249] transition-colors leading-snug">
                                    {rp.title}
                                </p>
                                <div className="mt-auto flex items-center gap-1.5 text-xs text-[#6dd249]/60 group-hover:text-[#6dd249] transition-colors font-mono">
                                    Read more
                                    <ArrowRightIcon size={11} />
                                </div>
                            </motion.a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default function NewsPostPage() {
    const crumbles: BreadcrumbType[] = [
        {
            label: "Home",
            href: '/',
            icon: HouseIcon
        },
        {
            label: "About",
            href: RoutePath.AboutUs,
            icon: IdentificationBadgeIcon
        },
        {
            label: "Elected Council Members",
            href: RoutePath.ElectedCouncilMembers,
            icon: PersonArmsSpreadIcon
        }
    ];
    return (
        <div id="page" className="min-h-screen bg-background ">
            <SEO title="Elected Coucil Members" description="The follow are the new elected CISON Council Members" canonicalUrl={RoutePath.ElectedCouncilMembers} />
            <PageHero title="Elected Coucil Members" subtitle="List of Elected" catchy="Council Members" breadcrumb={<Breadcrumb Elements={crumbles} />} />
            <ArticleBody />
            <CommentsSection />
            <RelatedNews />
        </div>
    );
}