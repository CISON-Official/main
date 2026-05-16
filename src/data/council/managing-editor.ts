import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/ATOI-NGOZI-VICTOR.webp"

const ManagingEditor: PersonInterface={
    name: "Dr. Atoi Ngozi Victor",
    role: "Managing Editor: Journal of CISON",
    category: "Editorial Board",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. Atoi Ngozi Victor is a seasoned statistician and financial analyst currently serving as Head of the Statistical Methods Office in the Statistics Department of the Central Bank of Nigeria (CBN). He is also the Managing Editor of the CBN Journal of Applied Statistics and a member of the Editorial Committee of the Economic and Financial Review of the Bank. Dr. Atoi specializes in Monetary and Financial Statistics, Time Series Econometric Modeling, and Big Data Analysis. He has participated in advanced IMF training programs in Washington DC and international data analytics programs in Indonesia.",
    expertise: [
      "Monetary Statistics",
      "Financial Statistics",
      "Econometric Modelling",
      "Big Data Analysis",
      "Statistical Software",
      "Time Series Analysis"
    ],
    education: [
      {
        degree: "BSc Statistics",
        institution: "University of Nigeria, Nsukka",
        year: ""
      },
      {
        degree: "MBA Finance",
        institution: "University of Jos",
        year: ""
      },
      {
        degree: "MSc Finance",
        institution: "Ebonyi State University",
        year: ""
      },
      {
        degree: "PhD Finance",
        institution: "Ebonyi State University",
        year: ""
      }
    ],
    publications: [],
    appointments: [
      "Managing Editor, Journal of CISON",
      "Managing Editor, CBN Journal of Applied Statistics",
      "Member, Editorial Committee of Economic and Financial Review (EFR)",
      "Faculty Member, CBN International Training Institute",
      "Head, Statistical Methods Office, CBN"
    ],
    social: {
      email: "managing-editor@cison.org.ng"
    }
  }
  export default ManagingEditor;