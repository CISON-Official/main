import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Hammed_Titilayo_Tawakalitu-1.png"

const NPCRepresentative: PersonInterface = {
    name: "Mrs. Hammed T. Titilayo",
    role: "Council Member: Represents NPC",
    category: "NPC Representative",
    img: Image,
    backHref: RoutePath.OurPeople,

    bio: `
Mrs. Hammed T. Titilayo is an experienced statistician and demographic
data specialist with extensive involvement in census operations,
population studies, survey sampling, and demographic surveys.
She currently serves as Census Manager at the National Population
Commission (NPC) of Nigeria, where she has contributed to several
national and international census and survey initiatives.
    `,

    expertise: [
        "Census Statistics",
        "Population and Housing Census",
        "Demographic Analysis",
        "Population Studies",
        "Survey Sampling",
        "Survey Methodology",
    ],

    education: [
        {
            degree: "Ph.D. Statistics (In View)",
            institution: "Nasarawa State University, Keffi",
            year: "Present"
        },
        {
            degree: "M.Sc. Statistics",
            institution: "Nasarawa state university, Keffi",
            year: "2023"
        },
        {
            degree: "B.Sc. Statistics",
            institution: "Not Publicly Specified",
            year: "2000"
        },
        // {
        //     degree: "Professional Certifications in Statistics, Census and Survey Methods",
        //     institution: "Johns Hopkins University; U.S. Bureau of the Census",
        //     year: "Various"
        // }
    ],

    publications: [
        // No verified personal publications found publicly.
        // Add publications when publication titles can be verified.
    ],

    appointments: [
        "Census Manager, National Population Commission (Nigeria)",
        "State Coordinator for Census and Survey Field Operations",
        "Facilitator, Survey Sampling and Census Management Workshops",
        "Participant, 2006 Nigeria Population and Housing Census",
        "Participant, 2022/2023 Nigeria Population and Housing Census Preparatory Activities",
        "Technical Contributor, Nigeria AIDS Indicator and Impact Survey (NAIIS)",
        "Technical Contributor, Nigeria Demographic and Health Survey (NDHS)",
        "International Census Monitor, 2021 Ghana Population and Housing Census",
        "Contributor to Preparations for Cameroon 4th General Population and Housing Census (GPHC)"
    ],

    social: {
        email: "",
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: ""
    },

    fellowship: "",

    membersince: 2000
};
export default NPCRepresentative;