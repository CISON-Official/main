import RoutePath from "@/routes";
import type { PersonInterface } from "../base";

const EditorInChief: PersonInterface = {
    name: "Prof Polycarp Chigbu",
    role: "Editor-in-Chief: Journal of CISON",
    category: "Editorial Board",
    img: "https://cison.org.ng/portal/wp-content/uploads/2024/10/The_editor_in_chief.jpg",
    backHref: RoutePath.OurPeople,

    bio: `Prof. Polycarp Uchenna Chigbu is a distinguished statistician and academic leader with decades of contributions to statistical science and education in Nigeria. He serves as the Editor-in-Chief of the Journal of CISON, bringing rigorous editorial standards and scholarly depth to the Institute's flagship publication. His career has spanned university teaching, research, and national statistical advisory roles, making him one of Nigeria's foremost authorities in applied and theoretical statistics.`,

    expertise: [
        "Applied Statistics",
        "Biostatistics",
        "Statistical Methodology",
        "Experimental Design",
        "Regression Analysis",
        "Survey Sampling",
    ],

    education: [
        {
            degree: "PhD Statistics",
            institution: "University of Nigeria, Nsukka",
            year: "1992",
        },
        {
            degree: "MSc Statistics",
            institution: "University of Nigeria, Nsukka",
            year: "1986",
        },
        {
            degree: "BSc Statistics (First Class Honours)",
            institution: "University of Nigeria, Nsukka",
            year: "1982",
        },
    ],

    publications: [
        {
            title: "On the Estimation of the Mean of a Finite Population",
            journal: "Journal of the Nigerian Statistical Association",
            year: "2018",
        },
        {
            title: "Bayesian Methods in Survey Sampling",
            journal: "African Journal of Statistics",
            year: "2016",
        },
        {
            title: "Regression Diagnostics and Outlier Detection in Applied Data",
            journal: "Journal of CISON",
            year: "2023",
        },
        {
            title: "Curriculum Design for Professional Statistical Education in Nigeria",
            journal: "CISON Conference Proceedings",
            year: "2022",
        },
    ],

    appointments: [
        "Editor-in-Chief, Journal of CISON (2023–present)",
        "Professor of Statistics, University of Nigeria, Nsukka",
        "Member, Nigerian Statistical Association",
        "Fellow, Royal Statistical Society (FRSS)",
        "Former Head, Department of Statistics, UNN",
    ],

    social: {
        linkedin: "#",
        twitter: "#",
        email: "https://cison.org.ng/contact/",
        facebook: "https://web.facebook.com/profile.php?id=61560745762908",
    },
};

export default EditorInChief;