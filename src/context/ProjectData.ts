export type ProjectType = {
    id: string;
    title: string;
    description: string;
    images: string[],
    link: string,
    github_link?: string,
    default_image_index: number;
}

export const PROJECTS: ProjectType[] = [
    {
        id: "yu747a71-g6b9-4b71-8768-123256trc005",
        title: "Etafilia",
        description: "Etafilia adalah platform gratis untuk mengelola katalog produk untuk UMKM dan meningkatkan penjualan melalui analisis pengunjung dan integrasi affiliate marketing.",
        images: [
            "/images/projects/eta-1.png",
            "/images/projects/eta-2.png",
            "/images/projects/eta-3.png",
            "/images/projects/eta-4.png",
            "/images/projects/eta-5.png",
            "/images/projects/eta-6.png",
            "/images/projects/eta-7.png",
        ],
        link: "https://www.etafilia.com",
        default_image_index: 0
    },
    {
        id: "42944e71-a2b9-4b71-9148-16124297c005",
        title: "Green Housefit",
        description: "Green House Gedung Selaru Universitas Telkom memanfaatkan AI dan otomatisasi untuk mengoptimalkan pertumbuhan tanaman anggur dan meningkatkan hasil panen.",
        images: [
            "/images/projects/greenhouse-1.png",
            "/images/projects/greenhouse-2.png",
            "/images/projects/greenhouse-3.png",
            "/images/projects/greenhouse-4.png",
        ],
        link: "https://greenhousefit.my.id/",
        github_link: "",
        default_image_index: 0
    },
    {
        id: "42ghia76-c2b9-4b71-9008-1290o297c005",
        title: "AAI Express",
        description: "A logistics platform simplifying delivery bookings and management, ensuring a seamless shipping experience for users.",
        images: [
            "/images/projects/aai-1.png",
            "/images/projects/aai-2.png",
            "/images/projects/aai-3.png",
            "/images/projects/aai-4.png",
        ],
        link: "https://aaiexpress.com",
        github_link: "",
        default_image_index: 0
    },
    {
        id: "420fd351-5fed-4e49-9628-4c7a32110ab4",
        title: "KORMI",
        description: "KOMITE OLAHRAGA REKREASI MASYARAKAT INDONESIA (KORMI) Provinsi Kalimantan Utara",
        images: [
            "/images/projects/kormi-1.png",
            "/images/projects/kormi-2.png",
            "/images/projects/kormi-3.png",
            "/images/projects/kormi-4.png",
            "/images/projects/kormi-5.png",
            "/images/projects/kormi-6.png",
        ],
        link: "https://kormi-kaltra.netlify.app",
        github_link: "",
        default_image_index: 0,
    },
    {
        id: "420fd351-5fed-4e49-9628-4c7a32110ab4",
        title: "EPICURANT",
        description: "Epicuran adalah platform berbagi resep yang memungkinkan pengguna memposting, menjelajahi, dan menyimpan resep masakan dari komunitas kuliner.",
        images: [
            "/images/projects/epi-2.png",
            "/images/projects/epi-1.png",
        ],
        link: "https://epicuran-frontend.vercel.app",
        github_link: "",
        default_image_index: 0,
    },
    {
        id: "a6beab01-59e4-4f2f-9c3e-bbfca09f0ef9",
        title: "Bang R dan Kak L - Official.",
        description: "The Bang R dan Kak L - Official website is a platform designed to reward its users through a point-based system.",
        images: [
            "/images/projects/banr-1.png",
            "/images/projects/banr-2.png",
            "/images/projects/banr-3.png",
            "/images/projects/banr-4.png",
            "/images/projects/banr-5.png",
        ],
        link: "https://bangrdankakloffcial.com",
        github_link: "",
        default_image_index: 0,
    },
]