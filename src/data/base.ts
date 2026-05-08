
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
};
