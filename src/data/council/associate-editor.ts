import RoutePath from "@/routes";
import type { PersonInterface } from "../base";
import Image from "@/assets/council/Dr-OlaOluwa-S.-Yaya.webp"


const AssociateEditor: PersonInterface = {
    name: "Dr OlaOluwa S. Yaya",
    role: "Associate Editor: Journal of CISON",
    category: "Editorial Board",
    img: Image,
    backHref: RoutePath.OurPeople,
    bio: "Dr. OlaOluwa Simon Yaya is an Associate Professor, researcher, and Associate Editor of the Journal of CISON. He contributes to statistical research, academic publishing, and peer-review coordination within the institute’s editorial board.",
    expertise: [
        "Time Series Econometrics",
        "Stationarity Testing",
        "GARCH Models",
        "Volatility Estimation",
        "Cryptocurrency Analysis",
        "Stock Market Analysis",
        "Structural Breaks",
        "Asymmetric Error Innovations"
    ],
    education: [
        {
            degree: "BSc Statistics",
            institution: "University of Ibadan",
            year: "Unknown"
        },
        {
            degree: "MSc Statistics",
            institution: "University of Ibadan",
            year: "Unknown"
        },
        {
            degree: "PhD Time Series Econometrics",
            institution: "University of Ibadan",
            year: "Unknown"
        }
    ],
    publications: [
        {
            title: "Another Look at the Stationarity of Inflation rates in OECD countries: Application of Structural break-GARCH-based unit root tests",
            journal: "Journal of the CISON",
            year: "2018",
            url: "https://journal.cison.org.ng"
        },
        {
            title: "Autoregressive time series modelling with asymmetric error innovations",
            journal: "Transactions of the Nigerian Association of Mathematical Physics",
            year: "2018",
            url: "https://namp.org"
        },
        {
            title: "Median Realized Variation as a Robust Volatility Measure for estimating Heterogeneous Autoregressive model",
            journal: "Nigerian Journal of Securities Market",
            year: "2018",
            url: "https://nigeriansecurities.org"
        },
        {
            title: "Risks transmission between US stocks and precious metals: Frequency TVP-VAR connectedness, asymmetry and investment strategies",
            journal: "Resources Policy",
            year: "2022",
            url: "https://sciencedirect.com"
        },
        {
            title: "Impact of Oil shocks on US dollar Exchange rate volatility: GARCH-MIDAS touch",
            journal: "Resources Policy",
            year: "2022",
            url: "https://sciencedirect.com"
        },
        {
            title: "Cointegration and Dynamic Connectedness of Volatility in Cryptocurrency pairs",
            journal: "Journal of the CISON",
            year: "2023-2025",
            url: "https://journal.cison.org.ng"
        }
    ],
    appointments: [
        "Reader in Statistics and Time Series Econometrics, Department of Statistics, University of Ibadan",
        "University Professor, Global Humanistic University, Curacao",
        "Associate Editor, Journal of the Chartered Institute of Statisticians of Nigeria",
        "Editor (Time Series Econometrics), Journal of the CISON",
        "Lecturer, Distance Learning Centre, University of Ibadan (STA 331: Statistical Computing III)",
        "Member, Department of Statistics, University of Ibadan",
        "Researcher, Center for Econometric & Allied Research (CEAR), University of Ibadan"
    ],
    social: {
        email: "os.yaya@cear.org.ng",
        linkedin: "olaoluwa-yaya",
        twitter: "@OlaoluwaYaya"
    }
}
export default AssociateEditor;