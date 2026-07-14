export interface Members {
    name: string;
    phone: string;
}
export interface Editor {
    role?: string;
    name?: string;
    phone?: string;
    email?: string
}
export interface CommitteeType {
    id: string;
    title: string;
    email: string | null;
    chair?: string;
    chairPhone?: string;
    secretary?: string;
    secretaryPhone?: string;
    note?: string;
    members?: Members[];
    subcommittees?: CommitteeType[];
    editorial?: Editor[];
}


const Committees: CommitteeType[] = [
    {
        id: "accreditation",
        title: "Accreditation Committee",
        email: "accreditationcmte@cison.org.ng",
        chair: "Prof. Sunday Ogbonmwan",
        chairPhone: "08056752390",
        secretary: "Dr. Michael Mba",
        secretaryPhone: "08065351406",
        members: [
            { name: "Prof. B. A. Oyejola", phone: "08035068594" },
            { name: "Prof. P. E. Chigbu", phone: "08033930082" },
            { name: "Prof. Peter Osanaiye", phone: "08035619093" },
            { name: "Prof. Joy Nwabueze", phone: "08068164190" },
            { name: "Prof. Olubusoye", phone: "08058258883 / 08138840067" },
            { name: "Prof. Julian Mbegbu", phone: "08020740989" },
            { name: "Prof. Ekaette Inyang Enang", phone: "08034003354" },
            { name: "Prof. Ethelbert C. Nduka", phone: "08037253778" },
            { name: "Prof. H. R. Bakari", phone: "08033998453" },
            { name: "Prof. H Garba Dikko", phone: "08034536799" },
            { name: "Assoc. Prof. Monday Osagie Adenomon", phone: "07036990145" },
            { name: "Dr. Chigozie Edson Utazi", phone: "+447956985992" },
            { name: "Assoc. Prof. OlaOluwa S. Yaya", phone: "08144585757 / 07082742507" },
            { name: "Dr. Abidemi K. Awopeju", phone: "08038638878" },
            { name: "Mr Henry Chukwuemeka Chukwueloka", phone: "08061211524" },
            { name: "Prof. Gafar Matanmi Oyeyemi", phone: "08068241885" },
        ],
    },
    {
        id: "membership",
        title: "Membership Committee",
        email: "membershipcmte@cison.org.ng",
        chair: "Prof. S. U. Gulumbe",
        chairPhone: "08035879831",
        secretary: "Prof. E. J. Ekpenyong",
        secretaryPhone: "08033872647",
        note: "* Prof. Gulumbe replaces Dr. A. O. Adenuga following his recent appointment by the Lagos State Government.",
        members: [
            { name: "Prof. M. A. Bamanga", phone: "08035395390" },
            { name: "Dr. Ajibade Bright", phone: "07060902373" },
            { name: "Dr. O. T. Arowolo", phone: "08031911319" },
            { name: "Dr. Charles Aronu", phone: "08064063711" },
            { name: "Henry Chukwueloka", phone: "08061211524" },
        ],
    },
    {
        id: "chapters",
        title: "Chapters & Sections Committee",
        email: "candscmte@cison.org.ng",
        chair: "Prof. Sydney Onyeagu",
        chairPhone: "08036758066",
        secretary: "Dr. Abidemi K. Awopeju",
        secretaryPhone: "08038638878",
        members: [
            { name: "Prof. F. A. Okafor", phone: "08057282029" },
            { name: "Assoc. Prof. Monday Osagie Adenomon", phone: "07036990145" },
            { name: "Bello Jafaar", phone: "08038545728" },
            { name: "Prof. E. Teju Jolayemi", phone: "08038131036" },
            { name: "Prof. R. A. Ipinyomi", phone: "08065716578" },
            { name: "Dr. Michael Mba", phone: "08065351406" },
            { name: "Prof. Yakubu Musa", phone: "07030168606" },
        ],
    },
    {
        id: "workshops",
        title: "Workshops & Conferences",
        email: null,
        subcommittees: [
            {
                id: "noc",
                title: "National Organizing Committee (NOC)",
                email: "noc@cison.org.ng",
                chair: "Dr. B. O. Amobi",
                chairPhone: "08144174684 / 08033388364",
                secretary: "Dr. Victor Ngozi Atoi",
                secretaryPhone: "08061572108",
                members: [
                    { name: "Dr Baba Umaru", phone: "08022961710" },
                    { name: "Mrs. Grace Abioye", phone: "08037877085" },
                    { name: "Mr. Jafaar Bello", phone: "08038545728" },
                    { name: "Mrs Timidayo Chilaka", phone: "08113091150" },
                    { name: "Mr. Stephen Dauda", phone: "08053580450" },
                    { name: "Dr. F. E. Adaka", phone: "08033764892" },
                    { name: "Dr. Bright Ajibade", phone: "07060902373" },
                    { name: "Prof. Polycarp E. Chigbu", phone: "08033930082" },
                    { name: "Mr. Stephen Aiyedun", phone: "08176264041" },
                    { name: "Dr. (Mrs.) Uchenna P. Ogoke", phone: "08035400184" },
                    { name: "Prof. Nwobi Felix", phone: "08037169173" },
                    { name: "Mr. Mimiko Daniel Oluwaseun", phone: "08184276168" },
                ],
            },
            {
                id: "loc",
                title: "Local Organizing Committee (LOC)",
                email: "loc@cison.org.ng",
                chair: "Dr. Baba Umaru",
                chairPhone: "08022961710",
                secretary: "Mr. Stephen Dauda",
                secretaryPhone: "08053580450",
                members: [
                    { name: "Mrs. Grace Abioye (Vice-Chairperson)", phone: "08037877085" },
                    { name: "Mr. Joseph Arinze", phone: "07037842805" },
                    { name: "Mrs. Theresa U. Ogike", phone: "09110813053" },
                    { name: "Dr. Atoi Ngozi", phone: "08061572108" },
                    { name: "Mr. Amechi Igweze", phone: "08149979645" },
                    { name: "Dr. Udoh Elijah", phone: "08037136637" },
                    { name: "Prof. Sarah Anyanwu", phone: "08036130284" },
                    { name: "Dr. Omoregie David", phone: "09051515290" },
                    { name: "Dr. Olaitan Rafiu", phone: "08034528318" },
                    { name: "Mr. Ichedi Sunday", phone: "08037051701" },
                    { name: "Miss Bernice Umemezia Adaeze", phone: "08101084849 / 09055710841" },
                    { name: "Miss Chinwe Onuzo", phone: "08167914528" },
                    { name: "Alhaji Gambo Muntaka", phone: "08092611982" },
                ],
            },
        ],
    },
    {
        id: "finance",
        title: "Finance Committee",
        email: null,
        chair: "Prof. Mrs. Ngozi Egbuna",
        chairPhone: "08183137578",
        secretary: "Dr. Rafiu Olaitan",
        secretaryPhone: "08034528318",
        members: [
            { name: "Mr. Emeka Okafor", phone: "08064793785" },
            { name: "Dr. Joseph Tawose", phone: "08033808155" },
            { name: "Mrs Abioye Grace", phone: "08037877085" },
            { name: "Dr. Taiwo Ajilore", phone: "08034018007" },
            { name: "Mr. Idowu Peters", phone: "08058589859" },
            { name: "Mrs Ngozi Agboegbulem T.", phone: "08099282230" },
        ],
    },
    {
        id: "wsds",
        title: "Women in Statistics & Data Science (WSDS)",
        email: null,
        chair: "Prof. Mrs. Joy Nwabueze",
        chairPhone: "08068164190",
        secretary: "Dr. Mrs. Uchenna P. Ogoke",
        secretaryPhone: "08035400184",
        members: [
            { name: "Prof. Mrs. Ekaette Inyang Enang", phone: "08034003354" },
            { name: "Prof. Angela Chukwu", phone: "08033471273" },
            { name: "Prof. Edith Uzoma Umeh", phone: "08035503383" },
            { name: "Dr. Mrs. Angela Sere-Ejembi", phone: "07067275169" },
            { name: "Prof. Mrs. Ngozi Egbuna", phone: "08183137578" },
            { name: "Mrs. Grace Abioye", phone: "08037877085" },
            { name: "Monica Jautau", phone: "08036813433" },
            { name: "Prof. Chinelo Igwenagu", phone: "08063305243" },
            { name: "Mrs Temidayo Chilaka", phone: "08033310774" },
            { name: "Prof. Mrs Obiorah Happiness", phone: "08060518823" },
            { name: "Dr. Mrs Chioma Nwosu", phone: "08033431527" },
            { name: "Dr. Mrs Blessing Gaiya", phone: "08034503993" },
            { name: "Prof. Mrs Mary Pascal Iwundu", phone: "08037059610" },
        ],
    },
    {
        id: "editorial",
        title: "Editorial Committee",
        email: "editorinchief@cison.org.ng",
        members: [],
        editorial: [
            { role: "Editor-in-Chief", name: "Prof. Polycarp E. Chigbu", phone: "08033930082", email: "editorinchief@cison.org.ng" },
            { role: "Managing Editor", name: "Dr. Victor Ngozi Atoi", phone: "08061572108", email: "managing-editor@cison.org.ng" },
            { role: "Associate Editor", name: "Assoc. Prof. OlaOluwa S. Yaya", phone: "08144585757 / 07082742507", email: "associate-editor@cison.org.ng" },
        ],
    },
    {
        id: "elections",
        title: "Elections Committee",
        email: "elections@cison.org.ng",
        chair: "Prof. Sydney Onyeagu",
        chairPhone: "08036758066",
        secretary: "Christopher M. Okafor (Registrar)",
        secretaryPhone: "08066877275",
        members: [
            { name: "Dr. M. M. Tumala", phone: "08033573611 / 09052203040" },
            { name: "Dr. B. O. Amobi", phone: "08144174684 / 08033388364" },
            { name: "Prof. Kayode Ayinde", phone: "08035850519" },
            { name: "Prof. Joseph E. Osemwenkhae", phone: "08037378121" },
            { name: "Prof. H. R. Bakari", phone: "08033998453" },
        ],
    },
];

export default Committees;
