import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Ngozi-Agboegbulem.jpg"

const Registrar: PersonInterface = {
    name: "Mrs. Ngozi Theresa Agboegbulem",
    role: "Registrar and Secretary of the Governing Council",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Mrs. Ngozi Theresa Agboegbulem is a distinguished economist, statistician, and administrator with more than three decades of experience at the Central Bank of Nigeria (CBN), where she retired as Deputy Director. Her expertise spans macroeconomic statistics, survey management, government finance statistics, external sector statistics, statistical reporting, and institutional administration. She currently serves as Registrar and Secretary of the Governing Council of CISON, where she oversees operational administration, strategic coordination, and institutional governance. She has received advanced professional training from the International Monetary Fund (IMF) and UNITAR and is recognized for her advocacy for evidence-based national development.",
    expertise: [
        "Macroeconomic Statistics",
        "Economic Research",
        "Survey Management",
        "Government Finance Statistics",
        "External Sector Statistics",
        "Institutional Administration"
    ],
    education: [
        {
            degree: "B.Sc Economics",
            institution: "University of Jos",
            year: ""
        },
        {
            degree: "M.Sc Economics",
            institution: "University of Lagos",
            year: ""
        }
    ],
    publications: [
        {
            title: "An Empirical Analysis of the Macroeconomic Impact of Public Debt in Nigeria",
            journal: "Independent Research Publication",
            year: "",
            url: "https://independent.academia.edu/NgoziTIAgboegbulem"
        }
    ],
    appointments: [
        "Registrar and Secretary of Governing Council, CISON",
        "Former Deputy Director, Central Bank of Nigeria",
        "Former Head, Real & Government Finance Statistics Division, CBN",
        "Former Head, External Sector Statistics Division, CBN",
        "Former Head, Survey Management Division, CBN",
        "Member, Finance Committee, CISON"
    ],
    social: {}
}

export default Registrar;