import RoutePath from "@/routes";
import type { EventData } from "./base";

const INITIAL_EVENTS: EventData[] = [
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
    }
];

export default INITIAL_EVENTS;