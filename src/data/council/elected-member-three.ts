import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Aiyedun-Stephen-Mosimabale-.jpg"

const ElectedMemberThree: PersonInterface = {
    name: "Aiyedun Stephen Mosimabale",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Aiyedun Stephen Mosimabale serves on the Governing Council of CISON as an elected member contributing to statistical administration, institutional policy discussions, and professional regulation initiatives.",
    expertise: [
      "Statistics",
      "Data Administration",
      "Institutional Governance"
    ],
    education: [],
    publications: [],
    appointments: [
      "Council Member, CISON"
    ],
    social: {}
  }

  export default ElectedMemberThree