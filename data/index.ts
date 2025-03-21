export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects-section" },
  { name: "Experience", link: "#experience-section" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Aspiring ethical hacker with a passion for offensive security.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/matrix.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "No system is truly secure",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Cross-Platform Remote Administration Tool",
    description: "Python",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to reach out to me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SillyRAT - Cross Platform RAT",
    des: "A remote administration tool built in Python.",
    img: "/sillyrat.png",
    iconLists: ["/python.svg", "/windows.svg", "/linux.svg", "/apple.svg"],
    link: "https://github.com/hash3liZer/SillyRAT",
  },
  {
    id: 2,
    title: "FileFlow - File Sharing App",
    des: "A peer to peer file sharing app built with Python and PeerJS.",
    img: "/imagebetter.svg",
    iconLists: ["/aws.svg", "/linux.svg", "/python.svg", "/javascript.svg"],
    link: "https://fileflow.aqib.cloud",
  },
  {
    id: 3,
    title: "Homelab Dashboard",
    des: "A dashboard to monitor my homelab servers and services.",
    img: "/dashboard.png",
    iconLists: ["/proxmox.svg", "/linux.svg", "/docker.svg"],
    link: "https://gethomepage.dev",
  },
  {
    id: 4,
    title: "Authentik - Self-hosted IDP",
    des: "Self hosted Authentik to manage users in my homelab.",
    img: "/authentik.png",
    iconLists: ["/proxmox.svg", "/linux.svg", "/go.svg", "/authentik.svg"],
    link: "https://goauthentik.io",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Penetration Tester",
    desc: "Conducted penetration testing on networks and infrastructure to identify vulnerabilities.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    detailDesc: "More detailed info about this role... this is some more text to test the overflow of the card. I am not sure how it will look but I hope it looks good. I am trying to make it look good. I am going to keep typing until I am satisfied with the length of the text. I hope this is enough text to test the overflow of the card.",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    detailDesc: "Additional background and responsibilities...",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    detailDesc: "Additional background and responsibilities...",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    detailDesc: "More detailed info about this role...",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/spoofer8",
  },
];
