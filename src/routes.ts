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
    ExaminationAssociate: "/membership/examination-associate",
    RegisteredStatistician: "/membership/registered-statistician",
    AssociateStatistician: "/membership/associate-statistician",
    CharacterdStatistician: "/membership/charactered-statistician",


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

    // Documents
    CISONAct: "/pdf/CISON-Act-2022-compressed.pdf",
    CISONBookOfAbstracts: "/pdf/CISON Book of Abstracts FINAL-1.pdf",
    CISON2025ConferenceProceeding: "/pdf/2025-CONFERENCE-PROCEEDINGS_FINAL-DRAFT.pdf",
    CISON2024ConferenceProceeding: "/pdf/2024-PROCEEDINGS-SUBMITTED-FOR-PUBLICATION_UPDATED.pdf",

    
    // Privacy
    Privacy: "/privacy",
    ContactUs: '/contact',
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
    MentoringScheme: "/about/mentoring",
    ConsultancyService: "/about/consultancy-service",
    Fellows: "/about/fellows",

    // Event
    Event: "/event",
    Conference2026: "/event/2026-conference-preconference",
    SingleEvent: "/event/:eventid",
    SecondQuarterPrs2026: "/event/2nd-quarter-prs-2026",
    ThirdFourthQuarterPRS2026: "/event/3rd-4th-quarter-prs-2026",
    JCISONCallForPapers:"/event/jcison-call-for-papers",



    // People
    OurPeople: "/our-people",

    // Former 
    CrownPrinceAbubakarBelloAfegbua: "/about/crown-prince-abubakar-bello-afegbua",

    // Misc
    HowToPay: "/misc/how-to-pay",
    AnnualFees: "/misc/annual-fees",
    Donate: "/donate",

    WP_ADMIN: "/wp-admin",

};

type RouteMapType = { name: string, href?: string, description?: string, children?: RouteMapType[] }

export const legacyRedirectRules = [
    { from: 'charactered', to: RoutePath.CharacterdStatistician },
    { from: 'registered-statistician', to: RoutePath.RegisteredStatistician },
    { from: 'contact-us', to: RoutePath.ContactUs },
    { from: 'about-old', to: RoutePath.AboutUs }
  ];


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