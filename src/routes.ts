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
    JCISONCallForPapers: "/event/jcison-call-for-papers",

    // News
    News: "/news",
    InductionList2026: "/news/2026-induction-list",



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


export const legacyRedirectRules = [
    { from: "chartered", to: RoutePath.CharacterdStatistician },
    { from: 'charactered', to: RoutePath.CharacterdStatistician },
    { from: 'registered', to: RoutePath.RegisteredStatistician },
    { from: 'contact-us', to: RoutePath.ContactUs },
    { from: 'about-old', to: RoutePath.AboutUs },
    { from: "conference", to: RoutePath.Conference2026 },
    { from: "history", to: RoutePath.OurHistory },
    { from: "membership", to: RoutePath.Membership },
    { from: "Professional", to: RoutePath.ProfessionalExamination },
    { from: "privacy", to: RoutePath.PrivacyPolicy}
];

export default RoutePath;