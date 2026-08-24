import RoutePath from "@/routes";

export interface NewsInterface {
    title: string;
    description?: string;
    route?: string;
    expiry: Date;
}
const NewsAnnouncementData:NewsInterface[] = [
    {
        title:"3rd CISON International Annual Conference (2026)",
        route: RoutePath.Conference2026,
        description:"Intensive technical sessions, member induction and certification.",
        expiry: new Date("2026/10/12"),
    },
    {
        title:"Q3 and Q4 PRS Registration",
        route: RoutePath.ThirdFourthQuarterPRS2026,
        description: "Empowering Institutional Leaders and Technical professionals with data-driven methodologies and executive tools to shape the future of governance.",
        expiry: new Date("2026/10/12"),
    },
    {
        title:"JCISON Call for Papers",
        description: "The Journal of CISON invites researchers, academicians, and practitioners to submit original research papers, review articles, and case studies for our upcoming edition.",
        route: RoutePath.JCISONCallForPapers,
        expiry: new Date("2026/12/31"),
    },
    {
        title:"2026 Induction List",
        route:RoutePath.InductionList2026,
        description: "CISON has officially released the comprehensive list of approved inductees for the upcoming 2026 Annual International Conference.",
        expiry: new Date("2026/10/12"),
    },
    {
        title:"Women In Statistics",
        route: RoutePath.WomenStatsEvent2026,
        expiry: new Date("2026/10/12"),
    },
    
]
export default NewsAnnouncementData;