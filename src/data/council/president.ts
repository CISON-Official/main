import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Dr-Godday-Uwawunkoye-Ebuh-President-CISON.webp"

const President: PersonInterface = {
    name: "Dr. Godday Ebuh",
    role: "President",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Godday Uwawunkonye Ebuh is the pioneer President and Chairman of the Governing Council of the Chartered Institute of Statisticians of Nigeria (CISON). He played a major role in the transition from the Nigerian Statistical Association (NSA) to CISON and has consistently advocated for the advancement of statistical science and data-driven policymaking in Nigeria.",
    expertise: [
        "Statistics",
        "Data Policy",
        "Professional Regulation",
        "Statistical Administration",
        "Big Data Advocacy"
    ],
    education: [
        {
            degree: "BSc Statistics",
            institution: "Nnamdi Azikiwe University, Awka",
            year: "Unknown"
        },
        {
            degree: "MSc Statistics",
            institution: "Nnamdi Azikiwe University, Awka",
            year: "Unknown"
        },
        {
            degree: "PhD Statistics",
            institution: "Unknown Institution",
            year: "Unknown"
        },
        {
            degree: "MBA Management",
            institution: "Unknown Institution",
            year: "Unknown"
        }
    ],
    publications: [
        {
            title: "Inflation Persistence in Nigerian Economy",
            journal: "Central Bank of Nigeria Journal",
            year: "2015",
            url: "https://cbn.gov.ng"
        },
        {
            title: "Data-Driven Policy Making for National Development",
            journal: "Journal of the Nigerian Statistical Association",
            year: "2023",
            url: "https://nsang.org"
        },
        {
            title: "Big Data Analytics for Economic Policy",
            journal: "African Journal of Statistics",
            year: "2024",
            url: "https://cison.org.ng"
        }
    ],
    appointments: [
        "President, Chartered Institute of Statisticians of Nigeria (CISON) - 2023 to Present",
        "President, Nigerian Statistical Association (NSA) - 2021 to Present",
        "Senior Economist, Central Bank of Nigeria - 2015 to Present",
        "1st Vice President, NSA - 2016 to 2021",
        "Former Lecturer, Department of Statistics, Nnamdi Azikiwe University, Awka",
        "Fellow, Nigerian Statistical Association",
        "Fellow, African Scientific Institute",
        "Member, American Consumers Opinion",
        "Member, Nigerian Institute of Management",
        "Member, African Technology Policy Studies Network"
    ],
    social: {
        email: "president@cison.org.ng",
        linkedin: "godday-ebuh",
        twitter: "@GeoddayEbuh"
    }
}

export default President;