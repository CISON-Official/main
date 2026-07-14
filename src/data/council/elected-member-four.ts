import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Bright-F.-Ajibade-PhD.-FNSA-FRSS.jpg"

const ElectedMemberFour: PersonInterface = {
    name: "Bright F. Ajibade PhD. FNSA, FRSS",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Bright F. Ajibade is a Fellow of the Nigerian Statistical Association and the Royal Statistical Society. He serves as an elected Council Member of CISON and contributes to statistical research, professional development, and institutional governance.",
    expertise: [
        "Applied Statistics",
        "Research",
        "Data Science",
        "Professional Statistics"
    ],
    education: [
        {
            degree: "PhD",
            institution: "",
            year: ""
        }
    ],
    publications: [
        {
            title: "Adaptive cluster sampling with model based approach for estimating total number of hidden COVID-19 carriers in Nigeria",
            journal: "SAGE Journals",
            year: "2020",
            url: "https://journals.sagepub.com"
        }
    ],
    appointments: [
        "Business Manager, Nigerian Statistical Association - 2016",
        "Fellow, Nigerian Statistical Association (FNSA)",
        "Fellow, Royal Statistical Society (FRSS)",
        "Statistician, Petroleum Training Institute, Warri (or Similar)",
        "Research Scientist in Applied Statistics"
    ],
    social: {
        email: "bright.ajibade@nsa.org.ng",
        linkedin: "bright-ajibade-phd"
    }
}

export default ElectedMemberFour