import RoutePath from "@/routes";
import type { PersonInterface } from "@/data/base";
import Image from "@/assets/council/Crown-Prince-Abubakar-Bello-Afegbua.webp"

const CrownPrinceAbubakarBelloAfegbua: PersonInterface = {
    name: "Crown Prince Abubakar Bello Afegbua",
    role: "Former Council Member Representing NPC",
    category: "Former NPC Representatives",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Crown Prince Abubakar Bello Afegbua serves as the representative of the National Population Commission (NPC) on the Governing Council of CISON. His work centers on demographic statistics, population data systems, and public-sector collaboration.",
    expertise: [
        "Population Statistics",
        "Demographic Analysis",
        "Public Administration"
    ],
    education: [],
    publications: [],
    appointments: [
        "Crown Prince, Traditional Ruler",
        "Patron, Chartered Institute of Statisticians of Nigeria",
        "Community Leader"
    ],
    social: {
        email: "crownprince@traditional.gov.ng"
    }
}
export default CrownPrinceAbubakarBelloAfegbua;