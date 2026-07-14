import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Dr.-Michael-Mba.webp"

const CBNRepresentative: PersonInterface = {
    name: "Dr. Michael Mba",
    role: "Council Member: Represents CBN",
    category: "CBN Representatives",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Michael K. Mba is the Deputy Director and Divisional Head of the Statistical Systems Management Division at the Central Bank of Nigeria. He serves as Editor of the CBN Journal of Applied Statistics and as Managing Editor of the Journal of the CISON. With over 20 years of experience in macroeconomic statistics and data management, he is a leading figure in Nigeria's statistical landscape.",
    expertise: [
        "Macroeconomic Statistics",
        "Data Management",
        "Statistical Systems",
        "Real Sector Statistics",
        "Policy-Driven Research",
        "Data Analytics",
        "Information Security",
        "International Collaboration"
    ],
    education: [
        {
            degree: "BSc Statistics",
            institution: "University of Nigeria, Nsukka",
            year: "Unknown"
        },
        {
            degree: "M. Engr Information Technology",
            institution: "University of Nigeria, Nsukka",
            year: "Unknown"
        },
        {
            degree: "PhD Public Policy & Administration",
            institution: "Walden University, Minneapolis",
            year: "Unknown"
        }
    ],
    publications: [
        {
            title: "Editor, CBN Journal of Applied Statistics",
            journal: "Central Bank of Nigeria",
            year: "2015-Present",
            url: "https://dc.cbn.gov.ng/jas/"
        },
        {
            title: "Articles on Macroeconomic Statistics",
            journal: "CBN Journal of Applied Statistics",
            year: "2015-2025",
            url: "https://dc.cbn.gov.ng/jas/"
        }
    ],
    appointments: [
        "Deputy Director, Central Bank of Nigeria",
        "Divisional Head, Statistical Systems Management Division, CBN - Since July 2002",
        "Managing Editor, Journal of the CISON",
        "Editor, CBN Journal of Applied Statistics",
        "Head, Real Sector Statistics, CBN",
        "Head, Statistical Systems Management Division, CBN",
        "Head, Money and Banking Statistics, CBN",
        "Head, Statistical Methods Office, CBN",
        "Technical Coordinator, Nigerian Real Estate Data Collation & Management Programme",
        "Survey Automation & Analytics Project Coordinator, CBN",
        "Online Facilitator, Blavatnik School of Government, University of Oxford",
        "Online Facilitator, Pearson Education",
        "Peer Reviewer, Nigerian Journal of Stock Market",
        "Peer Mentor, Walden University (Statistics and Quantitative Techniques)",
        "Certified Lead Implementer, ISO 27001:2013 (Information Security Management)"
    ],
    social: {
        email: "michael.mba@cbn.gov.ng",
        linkedin: "dr-michael-kalu-mba"
    }
}
export default CBNRepresentative;