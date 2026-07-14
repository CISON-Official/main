import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Umaru-Baba-890x1024.jpeg"

const ElectedMemberTwo: PersonInterface = {
    name: "Dr. Umaru Baba",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Umaru Baba is an elected Council Member of CISON involved in institutional governance, professional statistics development, and national statistical policy advocacy.",
    expertise: [
        "Statistics",
        "Research",
        "Professional Governance"
    ],
    education: [],
    publications: [],
    appointments: [
        "Council Member, CISON"
    ],
    social: {}
}

export default ElectedMemberTwo;