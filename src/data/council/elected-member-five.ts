import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Bello-Jaafar.jpg"


const ElectedMemberFive: PersonInterface = {
    name: "Bello Jaafar",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Bello Jaafar serves as an elected Council Member of CISON and contributes to institutional governance, policy discussions, and strategic professional administration.",
    expertise: [
        "Statistics",
        "Governance",
        "Institutional Administration"
    ],
    education: [],
    publications: [],
    appointments: [
        "Council Member, CISON"
    ],
    social: {}
}
export default ElectedMemberFive;