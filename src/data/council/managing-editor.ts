import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/ATOI-NGOZI-VICTOR.webp"

const ManagingEditor: PersonInterface = {
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
  publications: [
    {
      title: "Return and volatility spillovers between Nigeria and selected stock markets: Evidence from a diagonal BEKK-AMGARCH Model",
      journal: "",
      year: "2024",
      url: "https://www.researchgate.net/publication/381583624_Return_and_volatility_spillovers_between_Nigeria_and_selected_stock_markets_Evidence_from_a_diagonal_BEKK-AMGARCH_Model"
    },
    {
      title: "Dynamic Passthrough of Oil Price and Exchange Rate to Inflation in Nigeria: A Time-Varying Parameter Structural Vector Autoregressive (TVP-SVAR) Approach",
      journal: " Social Science Research Network",
      year: "2023",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4462550",
    },
    {
      title: "RETURNS AND VOLATILITY SPILLOVER BETWEEN NIGERIA AND SELECTED GLOBAL STOCK MARKETS: A DIEBOLD- YILMAZ APPROACH",
      journal: "",
      year: "2023",
      url: "https://www.researchgate.net/publication/370818478_RETURNS_AND_VOLATILITY_SPILLOVER_BETWEEN_NIGERIA_AND_SELECTED_GLOBAL_STOCK_MARKETS_A_DIEBOLD-_YILMAZ_APPROACH#read"
    },
    {
      title: "Assessing the Drivers of Steady State Economic Growth in Nigeria",
      journal: "",
      year: "2023",
      url: "https://www.researchgate.net/publication/375330698_Assessing_the_Drivers_of_Steady_State_Economic_Growth_in_Nigeria",
    },
    {
      title: "Oil-growth nexus in Nigeria: An ADL-MIDAS approach",
      journal: "Resources Policy",
      year: "2022",
      url: "https://doi.org/10.1016/j.resourpol.2022.102754"
    },
    {
      title: "International monetary policy spillovers to emerging economies in Sub-Saharan Africa: A Global VAR Analysis",
      journal: "Scientific African",
      year: "2021",
      url: "https://www.scopus.com/scopus/inward/record.url?partnerID=10&rel=3.0.0&view=basic&eid=2-s2.0-85122829279&md5=6fc8b3237d74f5b298fd0410fb52d0f8"
    },
    {
      title: "Purchasing Power Parity Approach to Exchange Rate Misalignment in Nigeria",
      year: "2021",
      journal: "Central Bank of Nigeria Journal of Applied Statistics",
      url: "https://doi.org/10.33429/Cjas.12121.3/6"
    }
  ],
  appointments: [
    "Managing Editor, Journal of CISON",
    "Managing Editor, CBN Journal of Applied Statistics",
    "Member, Editorial Committee of Economic and Financial Review (EFR)",
    "Faculty Member, CBN International Training Institute",
    "Head, Statistical Methods Office, CBN"
  ],
  social: {
    email: "managing-editor@cison.org.ng",
    linkedin: "https://www.linkedin.com/in/victor-atoi-1985462aa/",

  }
}
export default ManagingEditor;