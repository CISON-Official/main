import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon, XIcon, MagnifyingGlassIcon, ArrowSquareOutIcon, UserIcon, CaretDownIcon } from '@phosphor-icons/react';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from "@/assets/logo.png";
import RoutePath from '@/routes';


// ─── Route Data (extracted from CISON HTML) ───────────────────────────────────

const routes = [
    { name: 'Home', href: '/' },
    {
        name: 'Who We Are',
        children: [
            { name: 'About CISON', href: RoutePath.AboutUs },
            { name: 'Our Objectives', href: RoutePath.Objective },
            { name: 'Our History', href: RoutePath.OurHistory },
            { name: 'Structure and Governance', href: RoutePath.StructureAndGovernance },
            { name: 'Leadership', href: RoutePath.Leadership },
            { name: 'List of Elected Council Members', href: RoutePath.ElectedCouncilMembers },
            { name: 'Departments', href: RoutePath.Departments },
            { name: 'Our Committees', href: RoutePath.Committee },
            { name: 'The CISON Act', href: RoutePath.CISONAct },
        ],
    },
    {
        name: 'What We Do',
        children: [
            {
                name: 'Accreditation & Examinations',
                href: RoutePath.Accreditation,
                children: [
                    { name: 'Professional Accreditation', href: RoutePath.ProfessionalAccreditation },
                    { name: 'Professional Examination', href: RoutePath.ProfessionalExamination },
                ],
            },
            { name: 'Curriculum Development', href: RoutePath.CurriculumDevelopment },
            { name: 'Institutions Accreditation', href: RoutePath.InstitutionalAccreditation },
            { name: 'Courses Accreditation', href: RoutePath.CourseAccreditation },
            { name: 'CPD Policy', href: 'https://cison.org.ng/continuing-professional-development-cpd-policy/' },
            { name: 'Consultancy Services', href: 'https://cison.org.ng/accreditation-and-examination/consultancy-services/' },
            { name: 'Mentoring Scheme', href: 'https://cison.org.ng/accreditation-and-examination/mentoring-scheme/' },
            { name: 'Fellows', href: 'https://cison.org.ng/fellows/' },
        ],
    },
    {
        name: 'Membership',
        children: [
            { name: 'Special Announcement', href: 'https://cison.org.ng/special-announcement/' },
            {
                name: 'Membership Types',
                href: RoutePath.Membership,
                children: [
                    { name: 'Chartered Statistician', href: 'https://cison.org.ng/chartered-statistician/' },
                    { name: 'Associate Statistician', href: 'https://cison.org.ng/associate-statistician/' },
                    { name: 'Examination Associate', href: 'https://cison.org.ng/examination-associate/' },
                    { name: 'Registered Statistician', href: 'https://cison.org.ng/registered-statistician/' },
                    { name: 'Student Member', href: 'https://cison.org.ng/student-member/' },
                    { name: 'Corporate Member', href: 'https://cison.org.ng/portal/membership-types/#corporate' },
                ],
            },
            { name: 'Annual Fees', href: 'https://cison.org.ng/annual-fees-and-dues/' },
            { name: 'How to Pay', href: 'https://cison.org.ng/how-to-pay/' },
            { name: 'Membership Verification', href: 'https://my.cison.org.ng/verify-certificate/', external: true },
            { name: 'Member Login', href: 'https://cison.org.ng/members/', external: true },
        ],
    },
    {
        name: 'News & Events',
        href: '/event',
        children: [
            { name: 'News', href: '/portal/news' },
            { name: 'Upcoming Events', href: 'https://cison.org.ng/events/' },
            { name: 'Vacancy Announcement', href: 'https://cison.org.ng/vacancy-announcement/' },
        ],
    },
    {
        name: 'Publications',
        children: [
            {
                name: 'Conference Proceedings',
                children: [
                    { name: '1st Annual CISON Conference Proceedings', href: 'https://cison.org.ng/portal/wp-content/uploads/2025/08/2024-PROCEEDINGS-SUBMITTED-FOR-PUBLICATION_UPDATED.pdf' },
                    { name: '2025 Conference Proceedings', href: 'https://cison.org.ng/portal/wp-content/uploads/2026/03/2025-CONFERENCE-PROCEEDINGS_FINAL-DRAFT.pdf' },
                ],
            },
            { name: 'Journal of The CISON', href: 'https://journal.cison.org.ng/', external: true },
            { name: 'CISON Book of Abstract', href: 'https://drive.google.com/file/d/1x9vBMq9IcFrclTKZU26bGxSF3WaF5lOy/view?usp=sharing', external: true },
            { name: 'Newsletter', href: 'https://my.cison.org.ng/members/wp-content/private/NewsLetter/cison_newsletter_maiden_edition.pdf' },
        ],
    },
    { name: 'Contact', href: RoutePath.ContactUs },
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

type RouteItem = {
    name: string;
    href?: string;
    external?: boolean;
    children?: RouteItem[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function NavAnchor({ item, className, onClick }: { item: RouteItem; className?: string; onClick?: () => void }) {
    const isExternal = item.external || item.href?.startsWith('http');
    const props = isExternal
        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
        : {};
    return (
        <a href={item.href ?? '#'} className={className} onClick={onClick} {...props}>
            {item.name}
            {isExternal && <ArrowSquareOutIcon className="inline ml-1 w-3 h-3 opacity-50" />}
        </a>
    );
}

// ─── Desktop Nested Item (flyout to right or left depending on space) ─────────

function DesktopNestedItem({ item }: { item: RouteItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [flyLeft, setFlyLeft] = useState(false);

    // Determine flyout direction when opening
    useEffect(() => {
        if (open && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            // If less than 220px to the right of viewport, fly left instead
            setFlyLeft(window.innerWidth - rect.right < 220);
        }
    }, [open]);

    const isExternal = item.external || item.href?.startsWith('http');

    return (
        <div
            ref={ref}
            // className="absolute"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* The row itself — clickable link + caret indicator */}
            <div className="flex items-center justify-between gap-1 px-3 py-2 text-sm text-foreground/75 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors cursor-pointer">
                {item.href ? (
                    <a
                        href={item.href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex-1 flex items-center gap-1"
                        onClick={e => e.stopPropagation()}
                    >
                        {item.name}
                        {isExternal && <ArrowSquareOutIcon className="inline ml-1 w-3 h-3 opacity-50" />}
                    </a>
                ) : (
                    <span className="flex-1">{item.name}</span>
                )}
                <CaretDownIcon className="w-3.5 h-3.5 -rotate-90 shrink-0 opacity-60" />
            </div>

            {/* Flyout submenu */}
            {open && item.children && item.children.length > 0 && (
                <div
                    className={`absolute top-0 z-20 ${flyLeft ? 'left-53' : 'right-53'} min-w-70 `}
                >
                    <div className="bg-background border border-border rounded-xl shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
                        <div className="p-1.5">
                            {item.children.map(child => (
                                <NavAnchor
                                    key={child.name}
                                    item={child}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/75 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────

function DesktopDropdown({ item }: { item: RouteItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
            >
                {item.name}
                <CaretDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute top-full left-0 pt-2 z-50 min-w-55">
                    <div className="bg-background border border-border rounded-xl shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
                        <div className="p-1.5">
                            {item.children?.map(child =>
                                child.children ? (
                                    <DesktopNestedItem key={child.name} item={child} />
                                ) : (
                                    <NavAnchor
                                        key={child.name}
                                        item={child}
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/75 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Mobile Accordion Item ────────────────────────────────────────────────────

function MobileAccordion({ item, depth = 0, onNavigate }: { item: RouteItem; depth?: number; onNavigate: () => void }) {
    const [open, setOpen] = useState(false);
    const indent = depth > 0 ? 'ml-4 border-l border-border pl-3' : '';

    if (!item.children) {
        return (
            <NavAnchor
                item={item}
                className={`block py-2.5 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors ${indent}`}
                onClick={onNavigate}
            />
        );
    }

    return (
        <div className={indent}>
            <button
                onClick={() => setOpen(v => !v)}
                className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
                {item.href ? (
                    <a
                        href={item.href}
                        onClick={e => e.stopPropagation()}
                        className="hover:underline"
                        {...(item.external || item.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                        {item.name}
                    </a>
                ) : (
                    <span>{item.name}</span>
                )}
                <CaretDownIcon className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="pb-1">
                    {item.children.map(child => (
                        <MobileAccordion key={child.name} item={child} depth={depth + 1} onNavigate={onNavigate} />
                    ))}
                </div>
            )}
        </div>
    );
}


function SearchBar({ onClose }: { onClose: () => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => { inputRef.current?.focus(); }, []);

    return (
        <div className="flex items-center gap-3 flex-1">
            <MagnifyingGlassIcon className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
                ref={inputRef}
                type="text"
                placeholder="Search CISON…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                onKeyDown={e => e.key === 'Escape' && onClose()}
            />
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <XIcon className="w-4 h-4" />
            </button>
        </div>
    );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileOpen(false);
        setSearchOpen(false);
    }, [location]);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const topNavItems = (routes as unknown as RouteItem[]).filter(r => r.name !== 'Home' && r.name !== 'Contact');

    return (
        <>
            <header
                className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
                        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/5'
                        : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
                    }
        `}
            >
                {/* Top utility bar */}
                <div className="hidden lg:flex items-center justify-end gap-4 px-6 py-1.5 border-b border-border/50 text-xs text-muted-foreground bg-muted/30">
                    <Link to="https://cison.org.ng/membership-types/" className="hover:text-foreground transition-colors">
                        Become a Member
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link to="https://my.cison.org.ng" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                        <UserIcon className="w-3 h-3" /> Members Login
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link to={RoutePath.ContactUs} className="hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Main nav bar */}
                <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8 gap-4">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 shrink-0 mr-2">
                        <img src={Logo} alt="CISON Logo" className="w-17 h-17" />
                        <div className="leading-none">
                            <p className="font-bold text-lg text-foreground tracking-tight">CISON</p>
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    {!searchOpen && (
                        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
                            {topNavItems.map(item =>
                                item.children ? (
                                    <DesktopDropdown key={item.name} item={item} />
                                ) : (
                                    <NavAnchor
                                        key={item.name}
                                        item={item}
                                        className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                                    />
                                )
                            )}
                        </nav>
                    )}

                    {/* Search bar (replaces nav on desktop when open) */}
                    {searchOpen && (
                        <div className="hidden lg:flex flex-1 items-center mx-4 px-4 py-2 rounded-xl border border-border bg-muted/40">
                            <SearchBar onClose={() => setSearchOpen(false)} />
                        </div>
                    )}

                    {/* Right actions */}
                    <div className="flex items-center gap-1 ml-auto">
                        <button
                            onClick={() => setSearchOpen(v => !v)}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                            aria-label="Search"
                        >
                            <MagnifyingGlassIcon className="w-4 h-4" />
                        </button>

                        <ThemeToggle />

                        <Link
                            to="https://cison.org.ng/members/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-600 transition-colors shadow-sm"
                        >
                            Member Login
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors ml-1"
                            onClick={() => setMobileOpen(v => !v)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <XIcon className="w-5 h-5" /> : <HamburgerIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile search bar */}
                {searchOpen && (
                    <div className="lg:hidden px-4 pb-3">
                        <div className="flex items-center px-3 py-2.5 rounded-xl border border-border bg-muted/40">
                            <SearchBar onClose={() => setSearchOpen(false)} />
                        </div>
                    </div>
                )}
            </header>

            {/* Mobile menu overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileOpen(false)}
                    aria-hidden
                />
            )}

            {/* Mobile drawer */}
            <aside
                className={`
          fixed top-0 right-0 z-50 h-full w-[min(340px,90vw)] bg-background shadow-2xl
          transform transition-transform duration-300 ease-out lg:hidden
          flex flex-col
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
                aria-label="Mobile navigation"
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-700 to-emerald-500 flex items-center justify-center">
                            <span className="text-white font-black text-xs">CI</span>
                        </div>
                        <span className="font-bold text-sm text-foreground">CISON</span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>
                </div>

                {/* Scrollable nav items */}
                <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                    {(routes as unknown as RouteItem[]).map(item => (
                        <MobileAccordion key={item.name} item={item} onNavigate={() => setMobileOpen(false)} />
                    ))}
                </nav>

                {/* Drawer footer */}
                <div className="px-5 py-4 border-t border-border space-y-2">
                    <Link
                        to="https://cison.org.ng/members/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-600 transition-colors"
                    >
                        <UserIcon className="w-4 h-4" /> Member Login
                    </Link>
                    <Link
                        to="https://cison.org.ng/membership-types/"
                        className="flex items-center justify-center w-full py-2.5 text-sm font-medium rounded-lg border border-border text-foreground/80 hover:bg-muted/50 transition-colors"
                    >
                        Become a Member
                    </Link>
                    <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-muted-foreground">Toggle theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            </aside>

            {/* Spacer so content doesn't hide under fixed header */}
            <div className="h-16 lg:h-24.5" aria-hidden />
        </>
    );
}

export default Navbar;