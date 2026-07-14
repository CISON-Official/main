import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Professor-Julian-Ibezimako-Mbegbu-.jpg"

const ElectedMemberOne: PersonInterface = {
    name: "Prof. Julian Ibezimako Mbegbu",
    role: "Council Member, Elected",
    category: "Governing Council",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Prof. Julian Ibezimako Mbegbu is a distinguished Professor of Statistics at the University of Benin and serves as an Editorial Board Member of the Journal of the Chartered Institute of Statisticians of Nigeria. He is the pioneer Head of the Department of Statistics at the University of Benin and has contributed significantly to statistical research and education in Nigeria.",
    expertise: [
        "Probability Theory",
        "Distribution Theory",
        "Applied Statistics",
        "Statistical Methods",
        "Quality Technology",
        "Operational Research"
    ],
    education: [
        {
            degree: "BSc Statistics",
            institution: "University of Benin",
            year: "Unknown"
        },
        {
            degree: "MSc Statistics",
            institution: "University of Benin",
            year: "Unknown"
        },
        {
            degree: "PhD Applied Statistics",
            institution: "University of Benin",
            year: "Unknown"
        }
    ],
    publications: [
        {
            title: "Advanced Topics in Probability Distributions",
            journal: "Croatian Operational Research Review",
            year: "2018-2024",
            url: "https://crorgjournal.com"
        },
        {
            title: "Statistical Methods in Quality Control",
            journal: "Journal of Quality Technology (Taylor & Francis)",
            year: "2018-2024",
            url: "https://www.tandfonline.com"
        },
        {
            title: "Communications in Statistics-Theory and Methods",
            journal: "Taylor & Francis",
            year: "2018-2024",
            url: "https://www.tandfonline.com"
        },
        {
            title: "Applied Statistical Methods",
            journal: "Journal of Modern and Applied Statistical Methods (Wayne University)",
            year: "2018-2024",
            url: "https://digitalcommons.wayne.edu"
        },
        {
            title: "Data Science Applications",
            journal: "Annals of Data Science (Springer)",
            year: "2018-2024",
            url: "https://springer.com"
        },
        {
            title: "Statistical Simulation and Computation",
            journal: "Communications in Statistics-Simulation & Computation",
            year: "2018-2024",
            url: "https://www.tandfonline.com"
        },
        {
            title: "Applied Statistics in Modern Research",
            journal: "Journal of Applied Statistics (Taylor & Francis)",
            year: "2018-2024",
            url: "https://www.tandfonline.com"
        }
    ],
    appointments: [
        "Professor of Statistics, Department of Statistics, University of Benin",
        "Editor, Benin Journal of Statistics",
        "Co-Editor in Chief, Benin Journal of Physical Sciences",
        "Editor (Probability Theory and Distributions), Journal of the CISON",
        "Pioneer Head of Department of Statistics, University of Benin",
        "Senate Member, University of Benin",
        "Senior Research Fellow",
        "Supervisor of 14 PhD and numerous MPhil/MSc students",
        "External Examiner to Several Nigerian Universities",
        "Professorial Assessor for Nigerian Universities"
    ],
    social: {
        email: "julian.mbegbu@uniben.edu",
        linkedin: "julian-mbegbu"
    }
}
export default ElectedMemberOne;