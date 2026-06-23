// import CompressedCISONACTS from "@/assets/pdf/CISON-Act-2022-compressed.pdf";

const RoutePath = {
    // What we do
    Accreditation: '/accreditation',
    ProfessionalAccreditation: '/accreditation/professional',
    InstitutionalAccreditation: '/accreditation/institutional',
    ProgrammaticAccreditation: '/accreditation/programmatic',
    SpecializedReviews: '/accreditation/reviews',
    CurriculumDevelopment: '/accreditation/curriculum',
    CourseAccreditation: '/accreditation/courses',
    CPDPolicy: '/accreditation/continous-professional-development-policy',

    Examinations: '/examinations',
    ProfessionalExamination: '/examinations/professional',
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
    AboutUs: '/about',
    Objective: "/about/objective",
    OurHistory: '/about/history',
    StructureAndGovernance: '/about/structure-and-governance',
    Leadership: '/about/leadership',
    StrategicPlan: '/about/strategic-plan',
    ElectedCouncilMembers: '/about/council-members',
    Departments: '/about/departments',
    Committee: "/about/committee",
    CISONAct: "/pdf/CISON-Act-2022-compressed.pdf",

    ContactUs: '/contact',

    // Privacy
    Privacy: "/privacy",
    PrivacyPolicy: "/privacy/policy",
    TermsOfService: "privacy/terms-of-service",

    // Council Members
    President: "/about/council/president",
    VicePresident: "/about/council/vice-president",
    Registrar: "/about/council/registrar",
    ElectedMemberOne: "/about/council/elected-member-one",
    ElectedMemberTwo: "/about/council/elected-member-two",
    ElectedMemberThree: "/about/council/elected-member-three",
    ElectedMemberFour: "/about/council/elected-member-four",
    ElectedMemberFive: "/about/council/elected-member-five",
    ElectedMemberSix: "/about/council/elected-member-six",
    CBNRepresentative: "/about/council/cbn-represntative",
    NPCRepresentative: "/about/council/npc-representative",
    NBSRepresentative: "/about/council/nbs-representative",
    EditorInChief: "/about/council/editor-in-chief",
    ManagingEditor: "/about/council/managing-editor",
    AssociateEditor: "/about/council/Associate-Editor",




    // PRS
    PRS: "/prs",
    SecondQuarterPrs2026: "/prs/2nd-quarter-prs-2026",

    // People
    OurPeople: "/our-people",

    // Former 
    CrownPrinceAbubakarBelloAfegbua: "/about/crown-prince-abubakar-bello-afegbua"

};

type RouteMapType = { name: string, href?: string, description?: string, children?: RouteMapType[] }

export const HeaderRouteMap: RouteMapType[] = [
    {
        name: 'What We Do',
        children: [
            {
                name: 'Accreditation',
                href: RoutePath.Accreditation,
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

export default RoutePath;