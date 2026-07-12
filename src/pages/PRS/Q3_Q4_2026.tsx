
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MagnifyingGlass,
    Calendar,
    MapPin,
    Clock,
    CaretDown,
    List,
    CalendarBlank,
    Rows,
    Export,
    ArrowRight
} from '@phosphor-icons/react';

// --- Types ---
interface EventLocation {
    type: string;
    name: string;
    address: {
        type: string;
        addressCountry: string;
    };
}

interface EventData {
    id: string;
    name: string;
    description: string;
    url: string;
    startDate: string;
    endDate: string;
    location?: EventLocation;
    displayDateRange: string;
    monthSection: string;
    dayNum: string;
    weekday: string;
}

// --- Parsed Data From Legacy Content ---
const INITIAL_EVENTS: EventData[] = [
    {
        id: "994151",
        name: "Q3 Planning, Research and Statistics Workshop",
        description: "Forecasting & Scenario Modeling for National Development. Equip yourself with the critical tools needed to navigate complex economic landscapes and drive sustainable growth. This practical, high-impact workshop is designed for professionals eager to transform data into actionable insights for both national and sub-national planning. Led by renowned expert Dr. Ephraim Ogbonna from the University of Nigeria.",
        url: "https://cison.org.ng/event/q3-planning-research-and-statistics-workship/",
        startDate: "2026-08-10T08:00:00+01:00",
        endDate: "2026-08-13T17:00:00+01:00",
        displayDateRange: "August 10 @ 8:00 am - August 13 @ 5:00 pm",
        monthSection: "August 2026",
        dayNum: "10",
        weekday: "Mon"
    },
    {
        id: "994153",
        name: "Q4 Planning, Research and Statistics Workshop",
        description: "Fundamental Power BI for Executive PRS Dashboards. This intensive four-day workshop takes you from absolute beginner to advanced dashboard creator. Led by expert facilitator Dr. O.T. Arowolo from the Lagos State University of Science and Technology, you will master the crucial soft and technical skills needed to build dynamic PRS (Planning, Research, and Statistics) dashboards.",
        url: "https://cison.org.ng/event/q4-planning-research-and-statistics-workshop/",
        startDate: "2026-11-09T00:00:00+01:00",
        endDate: "2026-11-12T23:59:59+01:00",
        location: {
            type: "Place",
            name: "Kano",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "November 9 - November 12",
        monthSection: "November 2026",
        dayNum: "09",
        weekday: "Mon"
    }
];

export default function EventsArchivePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentView, setCurrentView] = useState<'list' | 'month' | 'day'>('list');
    const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false);
    const [isSubscribeDropdownOpen, setIsSubscribeDropdownOpen] = useState(false);

    // Filter logic
    const filteredEvents = useMemo(() => {
        return INITIAL_EVENTS.filter(event =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (event.location?.name && event.location.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    // Group items by month section safely
    const groupedEvents = useMemo(() => {
        const groups: { [key: string]: EventData[] } = {};
        filteredEvents.forEach(event => {
            if (!groups[event.monthSection]) {
                groups[event.monthSection] = [];
            }
            groups[event.monthSection].push(event);
        });
        return groups;
    }, [filteredEvents]);

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
            <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Top Control Bar / Header Section */}
                <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">

                    {/* Search Form component resembling Shadcn input style */}
                    <div className="relative flex flex-1 max-w-md items-center">
                        <MagnifyingGlass className="absolute left-3 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search for events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-10 w-full rounded-md border border-slate-200 bg-white pl-10 pr-4 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                        />
                    </div>

                    {/* Controls View & Filter Switchers */}
                    <div className="flex flex-wrap items-center gap-3">

                        {/* View Selector Selector dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsViewDropdownOpen(!isViewDropdownOpen)}
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                            >
                                {currentView === 'list' && <List className="h-4 w-4" />}
                                {currentView === 'month' && <CalendarBlank className="h-4 w-4" />}
                                {currentView === 'day' && <Rows className="h-4 w-4" />}
                                <span className="capitalize">{currentView} View</span>
                                <CaretDown className="h-3 w-3 opacity-50" />
                            </button>

                            <AnimatePresence>
                                {isViewDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsViewDropdownOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-slate-800 dark:bg-slate-900"
                                        >
                                            {(['list', 'month', 'day'] as const).map((view) => (
                                                <button
                                                    key={view}
                                                    onClick={() => {
                                                        setCurrentView(view);
                                                        setIsViewDropdownOpen(false);
                                                    }}
                                                    className={`flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-slate-800 ${currentView === view ? 'bg-slate-100 font-medium dark:bg-slate-800' : ''
                                                        }`}
                                                >
                                                    {view === 'list' && <List className="h-4 w-4" />}
                                                    {view === 'month' && <CalendarBlank className="h-4 w-4" />}
                                                    {view === 'day' && <Rows className="h-4 w-4" />}
                                                    <span className="capitalize">{view}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Inline Indicator Date range context */}
                        <div className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                            Upcoming
                        </div>

                    </div>
                </div>

                {/* Content Area Rendering Structured Events */}
                {filteredEvents.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-24 text-center"
                    >
                        <Calendar className="h-12 w-12 text-slate-300 dark:text-slate-700 mb-4" />
                        <h3 className="text-lg font-semibold">No events found</h3>
                        <p className="text-sm text-slate-500 mt-1">Try adjusting your keyword filter keywords.</p>
                    </motion.div>
                ) : (
                    <div className="space-y-12">
                        {Object.keys(groupedEvents).map((monthSection) => (
                            <div key={monthSection} className="space-y-6">

                                {/* Month Separator Header Column */}
                                <div className="sticky top-0 z-10 bg-gradient-to-b from-slate-50 via-slate-50/95 to-slate-50/0 py-2 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/0">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        {monthSection}
                                    </h3>
                                </div>

                                {/* Container for Cards belonging to section */}
                                <div className="grid gap-6">
                                    {groupedEvents[monthSection].map((event, index) => (
                                        <motion.div
                                            key={event.id}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:p-6"
                                        >
                                            {/* Left Tag Element: Numerical Date View block */}
                                            <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1 sm:border-r sm:border-slate-100 sm:pr-6 dark:sm:border-slate-800 min-w-[70px]">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 sm:block">
                                                    {event.weekday}
                                                </span>
                                                <span className="text-3xl font-bold tabular-nums tracking-tight text-slate-900 dark:text-slate-50 sm:block sm:text-4xl">
                                                    {event.dayNum}
                                                </span>
                                            </div>

                                            {/* Right Details Block Layout Elements */}
                                            <div className="flex flex-1 flex-col justify-between gap-4">
                                                <div className="space-y-2">

                                                    {/* Top row meta indicators */}
                                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                                        <span className="inline-flex items-center gap-1">
                                                            <Clock className="h-3.5 w-3.5" />
                                                            {event.displayDateRange}
                                                        </span>
                                                        {event.location && (
                                                            <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400">
                                                                <MapPin className="h-3.5 w-3.5" />
                                                                {event.location.name}{event.location.address?.addressCountry ? `, ${event.location.address.addressCountry}` : ''}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Event Title Link Anchor */}
                                                    <h4 className="text-lg font-bold leading-snug tracking-tight text-slate-900 group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-blue-400 sm:text-xl">
                                                        <a href={event.url} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                                                            <span className="absolute inset-0" aria-hidden="true" />
                                                            {event.name}
                                                        </a>
                                                    </h4>

                                                    {/* Description text content excerpt block */}
                                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3 pt-1">
                                                        {event.description}
                                                    </p>
                                                </div>

                                                {/* Action footer context metrics inside standard card template */}
                                                <div className="flex items-center justify-end border-t border-slate-50 pt-3 dark:border-slate-800/50">
                                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                                        View Event details
                                                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                                    </span>
                                                </div>

                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom Context Subscription Action Drawer Row element */}
                <div className="mt-16 flex items-center justify-center border-t border-slate-200 pt-8 dark:border-slate-800">
                    <div className="relative">
                        <button
                            onClick={() => setIsSubscribeDropdownOpen(!isSubscribeDropdownOpen)}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                        >
                            <Export className="h-4 w-4" />
                            Subscribe to calendar
                            <CaretDown className="h-3 w-3 opacity-50" />
                        </button>

                        <AnimatePresence>
                            {isSubscribeDropdownOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setIsSubscribeDropdownOpen(false)} />
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute bottom-full left-1/2 z-20 mb-2 w-48 -translate-x-1/2 origin-bottom rounded-md border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                                    >
                                        {['Google Calendar', 'iCalendar', 'Outlook 365', 'Outlook Live'].map((provider) => (
                                            <button
                                                key={provider}
                                                onClick={() => setIsSubscribeDropdownOpen(false)}
                                                className="flex w-full items-center rounded-sm px-3 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                            >
                                                {provider}
                                            </button>
                                        ))}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </main>
        </div>
    );
}

