import type { SEOProps } from "./base";
import RoutePath from "@/routes";
import templateImageFile from '@/assets/events/attending_conference_event_flyer.jpeg';
import { Franklin } from "@/authors";
import President from "./council/president";
import VicePresident from "./council/vice-president";
import Registrar from "./council/registrar";
import ElectedMemberOne from "./council/elected-member-one";
import ElectedMemberTwo from "./council/elected-member-two";
import ElectedMemberThree from "./council/elected-member-three";
import ElectedMemberFour from "./council/elected-member-four";
import ElectedMemberFive from "./council/elected-member-five";
import ElectedMemberSix from "./council/elected-member-six";
import NBSRepresentative from "./council/nbs-rep";
import CBNRepresentative from "./council/cbn-rep";
import NPCRepresentative from "./council/npc-rep";
import EditorInChief from "./council/editor-in-chief";
import ManagingEditor from "./council/managing-editor";
import AssociateEditor from "./council/associate-editor";


const CouncilSEO = (): Record<string, SEOProps>[] => {
    return [
        { person: President, route: RoutePath.President },
        { person: VicePresident, route: RoutePath.VicePresident },
        { person: Registrar, route: RoutePath.Registrar },
        { person: ElectedMemberOne, route: RoutePath.ElectedMemberOne },
        { person: ElectedMemberTwo, route: RoutePath.ElectedMemberTwo },
        { person: ElectedMemberThree, route: RoutePath.ElectedMemberThree },
        { person: ElectedMemberFour, route: RoutePath.ElectedMemberFour },
        { person: ElectedMemberFive, route: RoutePath.ElectedMemberFive },
        { person: ElectedMemberSix, route: RoutePath.ElectedMemberSix },
        { person: NBSRepresentative, route: RoutePath.NBSRepresentative },
        { person: CBNRepresentative, route: RoutePath.CBNRepresentative },
        { person: NPCRepresentative, route: RoutePath.NPCRepresentative },
        { person: EditorInChief, route: RoutePath.EditorInChief },
        { person: ManagingEditor, route: RoutePath.ManagingEditor },
        { person: AssociateEditor, route: RoutePath.AssociateEditor },
    ].map(({ person, route }) => {
        return {
            [`${route}`]: {
                title: person.name,
                description: person.bio,
                canonicalUrl: route,
                ogImage: person.img,
            }
        };
    });
};


const SEO_DATA: Record<string, SEOProps> = {
    "/": {
        title: "CISON - Chartered Institute of Statisticians of Nigeria",
        description: "Welcome to the official portal of the Chartered Institute of Statisticians of Nigeria.",

    },
    [`${RoutePath.AboutUs}`]: {
        title: "About CISON",
        description: "About CISON as a statistical association",
        canonicalUrl: RoutePath.AboutUs
    },
    [`${RoutePath.Attending2026Conference}`]: {
        title: "I am Attending - Attendee Card Generator",
        description: "Join CISON's 3rd International Conference and 50th Anniversary celebration, 12th – 16th October 2026 at Chida International Hotel Event Center, Abuja, Nigeria. Register, then generate and share your personalized 'I Have Registered' flyer.",
        keywords: 'CISON,Chartered Institute of Statisticians of Nigeria,CISON conference 2026,CISON 50th anniversary, Nigeria statistics conference, statisticians Nigeria, Abuja conference October 2026, I am attending flyer',
        ogImage: templateImageFile,

    },
    [`${RoutePath.Committee}`]: {
        title: "Our Committees | Chartered Institute of Statisticians of Nigeria (CISON)",
        description: "Steering Progress Through Data",
        canonicalUrl: RoutePath.Committee
    },
    [`${RoutePath.Departments}`]: {
        description: "Explore the various departments within the Chartered Institute of Statisticians of Nigeria (CISON), each driving core programs in statistics, training, membership, and national development.",
        title: "CISON Departments | Functional Units and Core Divisions",
        canonicalUrl: RoutePath.Departments
    },
    [`${RoutePath.ElectedCouncilMembers}`]: {
        title: "Elected Coucil Members",
        description: "The follow are the new elected CISON Council Members",
        canonicalUrl: RoutePath.ElectedCouncilMembers
    },
    [`${RoutePath.Fellows}`]: {
        title: "College of Fellows | Chartered Institute of Statisticians of Nigeria (CISON)",
        description: "Learn about the CISON College of Fellows - chartered statisticians with 15+ years of active membership, nominated by chapters and ratified by Council for their distinguished contribution to the practice and promotion of statistics in Nigeria.",
        canonicalUrl: RoutePath.Fellows,
        keywords: "CISON fellows, college of fellows, chartered statisticians, honorary fellows, statistics fellowship Nigeria, CISON honorary membership, statistics profession recognition, chapter nominations, CISON council ratification, champions of statistics, professional statistics body Nigeria, statistical excellence award, CISON membership upgrade",
    },
    [`${RoutePath.OurHistory}`]: {
        title: "CISON History | Founding, Growth & Milestones of the Institute",
        description: "Explore the rich history of the Chartered Institute of Statisticians of Nigeria (CISON) – from its founding to its key milestones in advancing statistical professionalism in Nigeria.",
        canonicalUrl: RoutePath.OurHistory,
    },
    [`${RoutePath.Leadership}`]: {
        title: "Our People",
        description: "All members of CISON in Leadership capacity",
        canonicalUrl: RoutePath.Leadership,
        keywords: "leadership, leaders, Council, council members, ,who we are, CISON governance, governing council, executive committee, statistical board, Nigeria statisticians, CISON board, Dr Godday Ebuh, Prof S U Gulumbe, CISON president, CISON registrar, Ngozi Agboegbulem, Christopher M Okafor, Nigerian Statistical Association, NSA, professional statisticians, chartered statisticians, statistical society, Nigeria data experts, data science leadership, national statistical system, NBS Nigeria, National Bureau of Statistics, National Population Commission, NPC representative, CBN research team, Central Bank of Nigeria statistics, EFCC corporate partner, NIPSS delegation, data driven governance, institutional editorial board, CISON elected members, pioneer state chairmen, Plateau state chapter, FCT Abuja chapter, statistical regulation, data ethics board, accredited data analysts, Act No 38, CISON Act 2022, President Muhammadu Buhari signed bill, official gazette data, statistical practice enforcement, continuing professional development, CPD programme, mandatory training board, statistical examination council, member induction committee, charter certification board, registered statisticians, associate statistician, A Stat, C Stat accreditation, research fellows, data analytics professors, academic statisticians, public sector analysts, private sector data consultants, statistical policy makers, macroeconomic analysts, demographic experts, survey methodology experts, biostatisticians, econometricians, operational research leaders, data infrastructure committee, technical sessions committee, pre conference workshop planners, annual conference executives, Chida Hotel Abuja event organizers, membership transition committee, development levy board, institutional partnerships, academic accreditation team, statistical curriculum developers, professional ethics panel, disciplinary committee, data integrity enforcement, regional coordinators, zonal executives, state statistical chiefs, public health analysts, data scientists Nigeria, tech infrastructure advisors, digital data governance, census planners, population data board, economic planning council, Federal Commissioners, state chapter executives, statistical management team, institutional trustees, board of fellows, honorary fellows, tracking metrics leadership"
    },
    [`${RoutePath.Objective}`]: {
        title: "Our Objective",
        description: "Aims and Objectives of the Chartered Insititute of Statisticians of Nigeria (CISON)",
        canonicalUrl: RoutePath.Objective,
    },
    [`${RoutePath.StructureAndGovernance}`]: {
        title: "Structure and Governance | Leadership and institutional Framework",
        description: "Understand the organizational structure of CISON, including its governing council, committees, and leadership roles that guide the institute’s strategic direction and integrity.",
        canonicalUrl: RoutePath.StructureAndGovernance
    },
    [`${RoutePath.Conference2026}`]: {
        title: "2026 International Conference",
        description: "Join global data experts, policy makers, and academics at the CISON 2026 International Conference to explore cutting-edge statistical methodologies, data science innovations, and economic governance strategies.",
        canonicalUrl: RoutePath.Conference2026,
        keywords: "CISON 2026, international conference, statistics conference Nigeria, data science summit 2026, chartered statisticians event, global data experts, statistical methodology, economic research conference, big data analytics, machine learning application, AI in statistics, national statistical system, NBS Nigeria partnership, annual statistical convention, data driven governance, research paper presentation, abstract submission 2026, keynote speakers, panel discussions, pre conference workshop, statistical computing, econometrics panel, biostatistics forum, data ethics seminar, digital transformation, data analytics training, professional networking, census methodology, demographic research, macroeconomic forecasting, financial econometrics, operational research, sampling techniques, survey data management, qualitative analysis, quantitative research methods, academic journal publication, conference proceedings, CISON act implementation, data regulation Nigeria, professional development, CPD credits, membership induction, statistical society, African data scientists, global statistical framework, evidence based policy, sustainable development goals, SDG monitoring, health informatics, public sector statistics, private sector data insights, business intelligence, tech infrastructure, cloud computing for data, predictive modeling, statistical modeling workshop, statistical software training, SPSS R Python workshops, data visualization techniques, GIS spatial analysis, environmental statistics, agricultural data analytics, educational statistics, social statistics framework, institutional partnership, academic collaboration, university research presentation, research fellows, board of fellows, doctoral thesis forum, masterclass data science, data security protocols, privacy preservation, blockchain in data, open data initiatives, smart cities metrics, industrial statistics, quality control metrics, reliability engineering, mathematical statistics, probability theory, stochastic processes, time series analysis, multivariate data analysis, data mining techniques, survey enumeration, national population metrics, trade statistics, labor market analytics, consumer price index tracking, inflation modeling, risk assessment analytics, actuarial science forum, statistical consultation services, tech innovators Nigeria, West African data hub, CISON conference registry",
    },
    [`${RoutePath.WomenStatsEvent2026}`]: {
        title: "Maiden Event Driving Evidence Based Change",
        description: "Join the Women in CISON virtual maiden event:addressing challenges and opportunities for women and girls in the field of statistics.",
        canonicalUrl: RoutePath.WomenStatsEvent2026,
        publishedTime: "2026-08-27T11:00:00+01:00",
        keywords: "Women in Statistics Nigeria, CISON 2026, Chartered:Institute of Statisticians of Nigeria, Women in CISON, Evidence Based Change, statistics seminar Nigeria, female statisticians webinar",
    },
    [`${RoutePath.InductionList2026}`]: {
        title: "Induction List",
        description: 'Verify official CISON inducted members. View eligibility criteria, certificate issuance protocols, and advanced professional exam pathways for new inductees.',
        canonicalUrl: RoutePath.InductionList2026,
        publishedTime: new Date("15/07/2026").toString(),
        author: Franklin.pageName,
        keywords: "CISON induction list, CISON membership verification, CISON inducted members, CISON professional registry,how to become a recognized member of CISON, CISON membership induction requirements, CISON professional examination eligibility, CISON member screening, registration,CISON membership certificate collection",
    },
    [`${RoutePath.CPDPolicy}`]: {
        title: "Continous Professional Development ",
        description: "About CISON as a statistical association",
        canonicalUrl: RoutePath.CPDPolicy,
    },
    [`${RoutePath.PrivacyPolicy}`]: {
        title: "Privacy Policy",
        description: "Privacy Policy page for CISON; Understand Cison\' s commitment to data privacy. Explore our policies on information security, personal data collection, and compliance for PR and media services; ",
        canonicalUrl: RoutePath.PrivacyPolicy,
        keywords: "Data Protection, Statistical Institute of Nigeria, Member Information, Personal Data, Confidentiality Policy, CISON Membership, Data Collection, CISON privacy policy, Chartered Institute of Statisticians of Nigeria data protection, Nigeria statistical body privacy, CISON member data security, Registered Statistician privacy, Nigerian statistics professional data",
    },
    [`${RoutePath.Accreditation}`]: {
        title: "Accreditation and Examinations | Chartered Institute of Statisticians of Nigeria (CISON)",
        canonicalUrl: RoutePath.Accreditation,
        description: "Accreditation Programmes and Professional Examinations",
    },
    [`${RoutePath.Donate}`]: {
        title: "Donate to CISON",
        description: "Support the Chartered Institute of Statisticians of Nigeria (CISON). Your donation funds scholarships, conferences, training programmes, and capacity building that advance statistical excellence in Nigeria.",
        canonicalUrl: RoutePath.Donate,
        keywords: "donate CISON, support statisticians Nigeria, CISON donation, contribute to statistics Nigeria, fund statistical education, CISON charity, professional statisticians Nigeria support, statistical development Nigeria",
    },
    [`${RoutePath.CourseAccreditation}`]: {
        title: 'Courses Accreditation',
        canonicalUrl: RoutePath.CourseAccreditation,
        description: 'Accreditation of Tertiary Education Courses by CISON',
    },
    ...Object.assign({}, ...CouncilSEO()),
};

export default SEO_DATA;