import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Dr.-Uchenna-Ogoke-.jpg"

const ElectedMemberSix: PersonInterface =
{
    name: "Dr. Uchenna Ogoke",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Uchenna P. Ogoke is an elected Council Member of CISON and actively contributes to the Women in Statistics and Data Science (WSDS) initiative of the institute. Her work focuses on promoting gender inclusion and professional development in data science and statistics.",
    expertise: [
        "Statistics",
        "Women in Data Science",
        "Professional Administration",
        "Statistical Capacity Building"
    ],
    education: [
        {
            degree: "BSc (Ed) Mathematics",
            institution: "University of Nigeria, Nsukka",
            year: "Unknown"
        },
        {
            degree: "MSc Statistics",
            institution: "University of Port Harcourt",
            year: "Unknown"
        },
        {
            degree: "PhD Statistics",
            institution: "University of Port Harcourt",
            year: "Unknown"
        }
    ],
    publications: [],
    appointments: [
        "Senior Lecturer, Department of Mathematics and Statistics, University of Port Harcourt",
        "Member, Nigerian Statistical Association",
        "Member, Nigerian Mathematical Society",
        "Member, International Biometric Society, Washington DC, USA",
        "Member, International Statistical Institute"
    ],
    social: {
        email: "uchenna.ogoke@uniport.edu.ng",
        linkedin: "uchenna-ogoke"
    }
}
export default ElectedMemberSix;