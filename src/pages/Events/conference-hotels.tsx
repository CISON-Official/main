import { BuildingIcon, PhoneIcon, MapPinIcon, CurrencyNgnIcon } from "@phosphor-icons/react";
import { PageHero, type BreadcrumbType } from "@/components/Hero";
import { Reveal } from "@/animate";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// ─── Data ────────────────────────────────────────────────────────────────────

const UTAKO_JABI_HOTELS = [
    { sn: 1, name: "Top Rank Hotel", location: "Plot 245 POW Mafemi, Off Solomon Way, Utako, Abuja", phone: "8106807110", price: "₦45,000" },
    { sn: 2, name: "Presken Hotel (formerly Grand Cubana Hotel)", location: "6 Ebitu Ukiwe Street, Jabi, Abuja", phone: "8133380666", price: "₦50,625" },
    { sn: 3, name: "Sandralia Hotel", location: "1 Solomon Way, Utako, Abuja", phone: "8179080119", price: "₦80,000" },
    { sn: 4, name: "The Nordic Abuja", location: "Plot 795, Off Shehu Musa Yar'Adua Way, Utako, Abuja", phone: "8099944480", price: "₦310,000" },
    { sn: 5, name: "3JS Hotel", location: "31 POW Mafemi Crescent, Utako, Abuja", phone: "8181034141", price: "₦45,750" },
    { sn: 6, name: "Alpha Plus Apartments", location: "91 Ebitu Ukiwe Street, Jabi", phone: "9062440821", price: "₦80,000" },
    { sn: 7, name: "SV Chrome Hotel", location: "101A Ebitu Ukiwe Street, Jabi", phone: "9032673034", price: "₦140,000" },
    { sn: 8, name: "Marrison Residence", location: "28 Anthony Enahoro Street, Utako", phone: "7032181951", price: "₦40,000" },
    { sn: 9, name: "Aden 360 Hotel", location: "20 Anthony Enahoro Street, Utako", phone: "8037706714", price: "₦30,000" },
    { sn: 10, name: "Hotel De Bentley", location: "892 Ngozi Okonjo Iweala Way, Utako", phone: "8067595321", price: "₦50,000" },
    { sn: 11, name: "Nordic Hospitality", location: "No. 14 Patrich Bokkor Crescent, Utako", phone: "7080266555", price: "₦35,000" },
    { sn: 12, name: "Nordic Villa", location: "52 Mike Akhigbe Way, Jabi", phone: "9096776766", price: "₦124,000" },
    { sn: 13, name: "Pennyslvania Hotel", location: "42 IBM Haruna Street, Utako", phone: "8068600219", price: "₦50,000" },
];

type RoomType = { type: string; price: string };

const MABUSHI_WUSE_HOTELS: {
    name: string;
    address: string;
    rooms: number;
    phone: string;
    note?: string;
    roomTypes: RoomType[];
}[] = [
    {
        name: "Chida Hotel",
        address: "224 Solomon Lar Road, Mabushi, Abuja",
        rooms: 50,
        phone: "07035534269 (General Manager)",
        roomTypes: [
            { type: "Ambassadorial Plus", price: "₦100,000" },
            { type: "Superior Plus", price: "₦80,000" },
            { type: "Deluxe (Twin) Plus", price: "₦80,000" },
            { type: "Executive Plus", price: "₦70,000" },
        ],
    },
    {
        name: "Aden 360 by Intra",
        address: "20 Anthony Enahoro St, Mabushi",
        rooms: 25,
        phone: "08037706714 (Resource Manager)",
        roomTypes: [
            { type: "Standard Room", price: "₦30,000" },
            { type: "Classic Room", price: "₦37,000" },
            { type: "Executive Deluxe", price: "₦45,000" },
            { type: "Junior Suite", price: "₦55,000" },
            { type: "VIP Suite", price: "₦85,000" },
        ],
    },
    {
        name: "Alexis Hotel & Conference Centre (Omni Grand Hotel)",
        address: "693 Obafemi Awolowo Way",
        rooms: 40,
        phone: "08061955254",
        note: "Prices are with complementary. Without complementary, the room price will reduce by ₦10,000.",
        roomTypes: [
            { type: "Standard", price: "₦60,000" },
            { type: "Executive", price: "₦70,000" },
            { type: "Deluxe", price: "₦80,000" },
            { type: "Diplomatic", price: "₦130,000" },
            { type: "Royal", price: "₦140,000" },
        ],
    },
    {
        name: "Auris Court Suites And Apartments",
        address: "Plot 550, Cadastral Zone B06, Mabushi",
        rooms: 9,
        phone: "08133593532 (Godsgift)",
        roomTypes: [
            { type: "Standard Room", price: "₦35,000" },
            { type: "Executive Room", price: "₦40,000" },
            { type: "Deluxe Suite", price: "₦45,000" },
            { type: "Deluxe Suite 2", price: "₦50,000" },
            { type: "Studio Suite", price: "₦55,000" },
        ],
    },
    {
        name: "Diamond Suites Hotel",
        address: "19 Moses Majekodunmi Cres, Mabushi",
        rooms: 18,
        phone: "07039567994 (Paula Nice — Owner)",
        roomTypes: [
            { type: "Diamond Kings", price: "₦25,100" },
            { type: "Diamond Supreme", price: "₦30,100" },
            { type: "Diamond Pent Chalet", price: "₦35,100" },
            { type: "Diamond Executive", price: "₦40,100" },
            { type: "Diamond De-Lux", price: "₦45,100" },
            { type: "Diamond Royal Chalet", price: "₦50,100" },
        ],
    },
    {
        name: "Canopy Hotels Ltd",
        address: "24 Moses Majekodunmi Cres, Mabushi",
        rooms: 28,
        phone: "07089069756",
        note: "No discount.",
        roomTypes: [
            { type: "Standard Room", price: "₦15,000" },
            { type: "Royal Room", price: "₦18,000" },
            { type: "Superior Room", price: "₦22,000" },
            { type: "Executive Room", price: "₦28,000" },
            { type: "Deluxe Room", price: "₦35,000" },
            { type: "Super Deluxe", price: "₦40,000" },
            { type: "Business Suite", price: "₦45,000" },
        ],
    },
    {
        name: "Lake Greenfield Hotel & Towers",
        address: "7 Celina Ayom Crescent, behind NAF Conference Centre, Kado, Abuja",
        rooms: 101,
        phone: "07074920035 (Mr Mohammed)",
        roomTypes: [
            { type: "Deluxe", price: "₦300,000" },
            { type: "Executive", price: "₦490,000" },
            { type: "VIP", price: "₦570,000" },
            { type: "Premium", price: "₦650,000" },
            { type: "Presidential", price: "₦1,200,000" },
        ],
    },
    {
        name: "Centurion Apartments",
        address: "30A Kitwe St, Wuse Zone 4",
        rooms: 14,
        phone: "08024745595 (Manager)",
        roomTypes: [
            { type: "Standard Room", price: "₦60,000" },
            { type: "Deluxe Room", price: "₦80,000" },
            { type: "Super Deluxe Room", price: "₦100,000" },
            { type: "Platinum Deluxe Room", price: "₦120,000" },
            { type: "1 Bedroom", price: "₦160,000" },
        ],
    },
];

const breadcrumb: BreadcrumbType[] = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/event" },
    { label: "Conference Hotels" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function UtakoJabiSection() {
    return (
        <Reveal>
            <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                <div className="mb-8">
                    <p className="font-bold tracking-[0.2em] uppercase flex items-center gap-2 mb-3 text-[#2a9d8f] dark:text-[#e8a020] text-xs">
                        <span className="w-5 h-0.5 shrink-0 inline-block bg-[#2a9d8f] dark:bg-[#e8a020]" />
                        List 1
                    </p>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                        Hotels in Utako &amp; Jabi District
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl">
                        Standard room rates for hotels in the Utako and Jabi areas of Abuja. All prices are per night.
                    </p>
                </div>

                <div className="rounded-lg border border-border overflow-hidden">
                    <Table>
                        <TableHeader className="bg-[#0b1120] dark:bg-[#1a7a5e]/20">
                            <TableRow className="border-b border-white/10 hover:bg-transparent">
                                <TableHead className="text-white/70 font-semibold text-xs w-12">S/N</TableHead>
                                <TableHead className="text-white/70 font-semibold text-xs">Hotel Name</TableHead>
                                <TableHead className="text-white/70 font-semibold text-xs hidden md:table-cell">Location</TableHead>
                                <TableHead className="text-white/70 font-semibold text-xs">
                                    <span className="flex items-center gap-1"><PhoneIcon size={12} /> Phone</span>
                                </TableHead>
                                <TableHead className="text-white/70 font-semibold text-xs text-right">
                                    <span className="flex items-center gap-1 justify-end"><CurrencyNgnIcon size={12} /> Std. Room</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {UTAKO_JABI_HOTELS.map((hotel) => (
                                <TableRow key={hotel.sn} className="border-b border-border/50 hover:bg-muted/30">
                                    <TableCell className="font-medium text-muted-foreground">{hotel.sn}</TableCell>
                                    <TableCell className="font-semibold text-foreground">{hotel.name}</TableCell>
                                    <TableCell className="text-muted-foreground hidden md:table-cell text-xs">
                                        <span className="flex items-start gap-1.5">
                                            <MapPinIcon size={12} className="shrink-0 mt-0.5 opacity-50" />
                                            {hotel.location}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-xs">{hotel.phone}</TableCell>
                                    <TableCell className="text-right font-bold text-[#1a7a5e] dark:text-[#3dd9a8]">
                                        {hotel.price}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <p className="mt-4 text-xs text-muted-foreground italic">
                    * Prices listed are for standard rooms. Contact hotels directly for other room types and availability.
                </p>
            </section>
        </Reveal>
    );
}

function MabushiWuseSection() {
    return (
        <Reveal>
            <section className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                <div className="mb-8">
                    <p className="font-bold tracking-[0.2em] uppercase flex items-center gap-2 mb-3 text-[#2a9d8f] dark:text-[#e8a020] text-xs">
                        <span className="w-5 h-0.5 shrink-0 inline-block bg-[#2a9d8f] dark:bg-[#e8a020]" />
                        List 2
                    </p>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                        Hotels in Mabushi &amp; Wuse Area
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl">
                        Hotels in the Mabushi and Wuse areas of Abuja with multiple room type options. All prices are per night.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {MABUSHI_WUSE_HOTELS.map((hotel) => (
                        <div
                            key={hotel.name}
                            className="rounded-lg border border-border bg-card p-5 hover:border-[#1a7a5e]/40 dark:hover:border-[#3dd9a8]/30 transition-colors"
                        >
                            {/* Hotel Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-9 h-9 rounded-md bg-[#1a7a5e]/10 dark:bg-[#1a7a5e]/20 flex items-center justify-center shrink-0">
                                    <BuildingIcon size={18} className="text-[#1a7a5e] dark:text-[#3dd9a8]" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-foreground text-sm leading-tight">{hotel.name}</h3>
                                    <p className="text-xs text-muted-foreground mt-1 flex items-start gap-1">
                                        <MapPinIcon size={11} className="shrink-0 mt-0.5 opacity-50" />
                                        {hotel.address}
                                    </p>
                                </div>
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <BuildingIcon size={11} className="opacity-50" />
                                    {hotel.rooms} rooms
                                </span>
                                <span className="flex items-center gap-1">
                                    <PhoneIcon size={11} className="opacity-50" />
                                    {hotel.phone}
                                </span>
                            </div>

                            {/* Note */}
                            {hotel.note && (
                                <div className="mb-3 px-3 py-2 rounded bg-[#e8a020]/8 dark:bg-[#e8a020]/10 border border-[#e8a020]/20 text-xs text-[#b88415] dark:text-[#e8a020]">
                                    {hotel.note}
                                </div>
                            )}

                            {/* Room Types */}
                            <div className="rounded-md border border-border overflow-hidden">
                                <div className="grid grid-cols-[1fr_auto] text-xs">
                                    <div className="px-3 py-2 bg-muted/50 font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">
                                        Room Type
                                    </div>
                                    <div className="px-3 py-2 bg-muted/50 font-semibold text-muted-foreground uppercase tracking-wider text-[10px] text-right">
                                        Price
                                    </div>
                                    {hotel.roomTypes.map((room, idx) => (
                                        <div key={room.type} className={`contents ${idx % 2 === 0 ? "" : ""}`}>
                                            <div className={`px-3 py-2.5 text-foreground border-t border-border/50 ${idx % 2 === 0 ? "bg-transparent" : "bg-muted/20"}`}>
                                                {room.type}
                                            </div>
                                            <div className={`px-3 py-2.5 text-right font-bold text-[#1a7a5e] dark:text-[#3dd9a8] border-t border-border/50 ${idx % 2 === 0 ? "bg-transparent" : "bg-muted/20"}`}>
                                                {room.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-6 text-xs text-muted-foreground italic">
                    * Prices listed are per night. Contact hotels directly for availability and booking arrangements.
                </p>
            </section>
        </Reveal>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ConferenceHotelsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHero
                breadcrumb={
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50 tracking-tight">
                        {breadcrumb.map((el, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <a
                                    href={el.href || "#"}
                                    className="flex items-center gap-1 hover:text-white transition-colors truncate max-w-[10ch] sm:max-w-[40ch] lg:max-w-[100ch]"
                                >
                                    {el.label}
                                </a>
                                {i + 1 !== breadcrumb.length && (
                                    <span className="text-white/30">/</span>
                                )}
                            </div>
                        ))}
                    </nav>
                }
                title="2026 Conference"
                subtitle="Conference Hotel"
                catchy="Accommodations"
            />

            <main role="main">
                <Reveal>
                    <section className="max-w-6xl mx-auto px-6 md:px-14 pt-14 pb-4">
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                            Below is a list of approved hotels near the conference venues in Abuja. Delegates are encouraged to book
                            early as rooms are subject to availability. For group bookings or inquiries, please contact the hotels directly.
                        </p>
                    </section>
                </Reveal>

                <UtakoJabiSection />

                <div className="max-w-6xl mx-auto px-6 md:px-14">
                    <div className="border-t border-border/50" />
                </div>

                <MabushiWuseSection />
            </main>
        </div>
    );
}
