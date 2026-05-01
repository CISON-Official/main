const Route: Record<string, string> = {
    Accreditation: '/accreditation',
    InstitutionalAccreditation: '/accreditation/institutional',
    ProgrammaticAccreditation: '/accreditation/programmatic',
    SpecializedReviews: '/accreditation/reviews',

    ProfessionalExams: '/examinations',
    RegulatoryProfessional: '/examinations/rp',
    SeniorRegulatory: '/examinations/sr',
    ExamSchedule: '/examinations/schedule',

    Membership: '/membership',
    Individual: '/membership/individual',
    Corporate: '/membership/corporate',
    Student: '/membership/student',


    // News & Insights',
    Journal: '/journal',
    PressReleases: '/press',
    Blog: '/blog',

    //   About Us
    OurHistory: '/about/history',
    Leadership: '/about/leadership',
    StrategicPlan: '/about/strategic-plan',
    ContactUs: '/contact',
};

type RouteMapType = { name: string, href?: string, description?: string, children?: RouteMapType[] }

export const HeaderRouteMap: RouteMapType[] = [
    {
        name: 'What We Do',
        children: [
            {
                name: 'Accreditation',
                href: '/accreditation',
                children: [
                    { name: 'Institutional Accreditation', href: '/accreditation/institutional' },
                    { name: 'Programmatic Accreditation', href: '/accreditation/programmatic' },
                    { name: 'Specialized Reviews', href: '/accreditation/reviews' },
                ],
            },
            {
                name: 'Professional Exams',
                href: '/examinations',
                children: [
                    { name: 'Regulatory Professional (RP)', href: '/examinations/rp' },
                    { name: 'Senior Regulatory (SR)', href: '/examinations/sr' },
                    { name: 'Exam Schedule', href: '/examinations/schedule' },
                ],
            },
            {
                name: 'Membership',
                href: '/membership',
                children: [
                    { name: 'Individual', href: '/membership/individual' },
                    { name: 'Corporate', href: '/membership/corporate' },
                    { name: 'Student', href: '/membership/student' },
                ],
            },
        ],
    },
    {
        name: 'News & Insights',
        children: [
            { name: 'Journal', href: '/journal', description: 'Peer-reviewed regulatory research' },
            { name: 'Press Releases', href: '/press', description: 'Official announcements' },
            { name: 'Blog', href: '/blog', description: 'Expert opinions' },
        ],
    },
    {
        name: 'About Us',
        children: [
            { name: 'Our History', href: '/about/history' },
            { name: 'Leadership', href: '/about/leadership' },
            { name: 'Strategic Plan', href: '/about/strategic-plan' },
        ],
    },
    {
        name: 'Contact Us',
        href: '/contact',
    },
] as const;

export default Route;