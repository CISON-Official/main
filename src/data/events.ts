import RoutePath from "@/routes";
import type { EventData } from "./base";

const INITIAL_EVENTS: EventData[] = [
    {
        id: "994152",
        name: "3rd CISON International Annual Conference (2026)",
        description: "Theme: From Legacy to Leadership: 50 Years of Promoting Statistical Development in Nigeria. Bringing together statisticians, data scientists, policymakers, and academics across Africa to discuss advancements in big data ecosystems, governance metrics, and executive AI capabilities.",
        url: RoutePath.Conference2026,
        startDate: "2026-10-12T09:00:00+01:00",
        endDate: "2026-10-16T17:00:00+01:00",
        location: {
            type: "Place",
            name: "Chida Hotel Event Centre, Utako, Abuja",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "October 12 - October 16",
        monthSection: "October 2026",
        dayNum: "12",
        weekday: "Mon"
    },
    {
        id: "994151",
        name: "Q3 Planning, Research and Statistics Workshop",
        description: "Forecasting & Scenario Modeling for National Development. Equip yourself with the critical tools needed to navigate complex economic landscapes and drive sustainable growth. This practical, high-impact workshop is designed for professionals eager to transform data into actionable insights for both national and sub-national planning. Led by renowned expert Dr. Ephraim Ogbonna from the University of Nigeria.",
        url: RoutePath.ThirdFourthQuarterPRS2026,
        startDate: "2026-08-10T08:00:00+01:00",
        endDate: "2026-08-13T17:00:00+01:00",
        displayDateRange: "August 10 @ 8:00 am - August 13 @ 5:00 pm",
        monthSection: "August 2026",
        dayNum: "10",
        weekday: "Mon"
    },
    {
        id: "994153",
        name: "Q4 Planning, Research and Statistics Workshop",
        description: "Fundamental Power BI for Executive PRS Dashboards. This intensive four-day workshop takes you from absolute beginner to advanced dashboard creator. Led by expert facilitator Dr. O.T. Arowolo from the Lagos State University of Science and Technology, you will master the crucial soft and technical skills needed to build dynamic PRS (Planning, Research, and Statistics) dashboards.",
        url: RoutePath.ThirdFourthQuarterPRS2026,
        startDate: "2026-11-09T00:00:00+01:00",
        endDate: "2026-11-12T23:59:59+01:00",
        location: {
            type: "Place",
            name: "Kano",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "November 9 - November 12",
        monthSection: "November 2026",
        dayNum: "09",
        weekday: "Mon"
    },
    {
        id: "994148",
        name: "Q1 2026 Planning, Research and Statistics (PRS) Workshop",
        description: "Advances in Statistics: AI, and Computational Tools. Bridging Traditional Analysis with Generative AI. This professional development workshop focuses on generative AI for predictive analysis, large language models, and practical data analysis mastery using R programming. Supported by expert instruction at the University of Lagos.",
        url: "https://my.cison.org.ng/q1-2026-planning-research-and-statistics-prs/",
        startDate: "2026-03-02T09:00:00+01:00",
        endDate: "2026-03-06T17:00:00+01:00",
        location: {
            type: "Place",
            name: "University of Lagos, Akoka, Yaba, Lagos",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "March 2 @ 9:00 am - March 6 @ 5:00 pm",
        monthSection: "March 2026",
        dayNum: "02",
        weekday: "Mon"
    },
    {
        id: "994147",
        name: "2nd CISON International Conference & Pre-Conference Workshop (2025)",
        description: "Theme: Big Data and Analytics in Nigeria: Developing A National Data Ecosystem for Enhanced National Prosperity. Features high-impact panel tracks on analytics implementations, predictive modelling frameworks, and corporate integration architectures.",
        url: "#",
        // url: "https://cison.org.ng/event/2nd-international-conference-2nd-pre-conference-workshop/",
        startDate: "2025-09-22T09:00:00+01:00",
        endDate: "2025-09-26T17:00:00+01:00",
        location: {
            type: "Place",
            name: "Dome Event Centre, Asaba, Delta State",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "September 22, 2025 - September 26, 2025",
        monthSection: "September 2025",
        dayNum: "22",
        weekday: "Mon"
    },
    {
        id: "994146",
        name: "1st CISON Annual Conference (2024)",
        description: "The maiden national conference of the institute following its enactment under Act No. 38 of 2022. Included final calls for research manuscripts across applied and theoretical statistics divisions to enhance data-driven governance strategies.",
        // url: "https://cison.org.ng/2024-cison-conference-final-call-for-papers/",
        url: "#",
        startDate: "2024-11-13T09:00:00+01:00",
        endDate: "2024-11-15T17:00:00+01:00",
        location: {
            type: "Place",
            name: "Exclusive Serene Hotel, Wuye, Abuja",
            address: {
                type: "PostalAddress",
                addressCountry: "Nigeria"
            }
        },
        displayDateRange: "November 13 - November 15, 2024",
        monthSection: "November 2024",
        dayNum: "13",
        weekday: "Wed"
    }
];

export default INITIAL_EVENTS;