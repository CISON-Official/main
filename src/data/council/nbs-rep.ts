import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Anyakora_NBS.webp"


const NBSRepresentative: PersonInterface = {
    name: "Augustine Chuks Anyakorah",
    role: "Council Member – Represents NBS",
    category: "NBS Representatives",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Augustine Chuks Anyakorah serves as the representative of the National Bureau of Statistics (NBS) on the Governing Council of CISON, contributing to official statistics, national data management, and inter-agency collaboration.",
    expertise: [
        "Official Statistics",
        "Public Sector Data",
        "Data Management",
        "National Surveys"
    ],
    education: [],
    publications: [],
    appointments: [
        "Council Member Representing NBS, CISON"
    ],
    social: {}
}
export default NBSRepresentative;