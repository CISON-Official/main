import type { PersonInterface } from "@/data/base";
import RoutePath from "@/routes";
import Image from "@/assets/council/Prof.-S.-U.-Gulumbe.webp"

const VicePresident: PersonInterface = {
    name: "Prof. S. U. Gulumbe",
    role: "Vice President",
    category: "Academic Leadership",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Professor Shehu Usman Gulumbe is a Professor of Statistics at Usmanu Danfodiyo University, Sokoto, specializing in Statistical Pattern Recognition, Computational Statistics, Statistical Computing, and Multivariate Data Analysis. He has served in the Nigerian university system since 1984 and has held several academic and administrative positions including Examination Officer, Head of Department, Dean, and Director. Prof. Gulumbe currently serves as Director of UDUS Consultancy Service and Vice-President of CISON. He has authored numerous peer-reviewed publications spanning statistical learning, risk modeling, neural networks, multivariate analysis, financial statistics, and epidemiological modeling.",
    expertise: [
        "Statistical Computing",
        "Pattern Recognition",
        "Multivariate Data Analysis",
        "Computational Statistics",
        "Financial Risk Modelling",
        "Machine Learning"
    ],
    education: [
        {
            degree: "BSc Mathematics",
            institution: "Usmanu Danfodiyo University, Sokoto",
            year: ""
        },
        {
            degree: "MSc Statistics",
            institution: "University of Ilorin",
            year: ""
        },
        {
            degree: "PhD Statistics",
            institution: "University of Strathclyde, United Kingdom",
            year: ""
        }
    ],
    publications: [
        {
            title: "On some Solutions of the Multivariate Behrens Fisher Problem",
            journal: "Journal of Mathematical Sciences and Computational Mathematics",
            year: "2021"
        },
        {
            title: "Efficiency and Consistency Assessment of Value at Risk Methods for Selected Banks Data",
            journal: "Journal of Advances in Mathematics and Computer Science",
            year: "2020"
        },
        {
            title: "Maternal mortality ratio in selected rural communities in Kebbi State, Northwest Nigeria",
            journal: "BMC Pregnancy and Childbirth",
            year: "2018"
        },
        {
            title: "Forecasting volatility of Nigerian Crude price using NARX Inputs model",
            journal: "Imperial Journal of Interdisciplinary Research",
            year: "2016"
        },
        {
            title: "Developing effective statistical system for policy making",
            journal: "CBN Statistics Department Retreat",
            year: "2010"
        }
    ],
    appointments: [
        "Vice-President, CISON",
        "Director, UDUS Consultancy Service",
        "Professor of Statistics, Usmanu Danfodiyo University",
        "Former Vice-President I, Nigerian Statistical Association",
        "Former Vice-President II, Nigerian Statistical Association",
        "Former Dean and Head of Department"
    ],
    social: {
        email: "usman.gulumbe@udusok.edu.ng"
    }
}
export default VicePresident;