
export interface Publication {
    title: string;
    journal: string;
    year: string;
    url?: string;
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Social {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    facebook?: string;
}

export interface PersonInterface {
    name: string;
    role: string;
    category: string;
    img: string;
    backHref: string;
    bio: string;
    expertise: string[];
    education: Education[];
    publications: Publication[];
    appointments: string[];
    social: Social;
    fellowship?: string;
    membersince?: Number;
};

export interface EventLocation {
    type: string;
    name: string;
    address: {
        type: string;
        addressCountry: string;
    };
}

export interface EventData {
    id: string;
    name: string;
    description: string;
    url: string;
    startDate: string;
    endDate: string;
    location?: EventLocation;
    displayDateRange: string;
    monthSection: string;
    dayNum: string;
    weekday: string;
}
