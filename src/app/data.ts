type PersonalInformationType = {
    brandName: string;
    name: string;
    bio: string;
    contacts: {
        key: string;
        name: string;
        link: string;
    }[];
};

export const personalInformation: PersonalInformationType = {
    brandName: "ZennMode",
    name: "Ahmad Zaini Nijar",
    bio: "I’m a Software Engineer with over two years of experience in both front-end and back-end development. I love turning ideas into efficient, scalable applications and tackling complex problems head-on. Always learning, always improving—I stay up-to-date with the latest tech to deliver the best results for every project.",
    contacts: [
        {
            key: "email",
            name: "zaininijar7610@gmail.com",
            link: "mailto:zaininijar7610@gmail.com",
        },
        {
            key: "whatsapp",
            name: "6282286947001",
            link: "https://wa.me/6282286947001",
        },
        {
            key: "github",
            name: "zaininijar",
            link: "https://github.com/zaininijar",
        },
        {
            key: "linkedin",
            name: "zaininijar",
            link: "https://linkedin.com/in/zaininijar",
        },
        {
            key: "twitter",
            name: "zaininijar",
            link: "https://twitter.com/zaininijar",
        },
        {
            key: "instagram",
            name: "zaini.nijar",
            link: "https://instagram.com/zaini.nijar",
        },
    ],
};
