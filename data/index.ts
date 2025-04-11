export const navItems = [
  { name: "Home", link: "/" },
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
    detailDesc: "● Utilised many tools to test the security of the digital infrastructure of the school\no Involved capturing WiFi handshakes using an Evil Twin WiFi access point.\no Involved enumerating the network using Nmap.\no Involved brute forcing weak passwords for surveillance cameras using Hydra.\no Finally, writing up all of my findings and areas of weak security into a write-up and handing it over to the headteacher, explaining the necessary changes required to enhance their security.",
  },
  {
    id: 2,
    title: "Bookkeeping & IT Assistant",
    desc: "Configured many services to ensure a smooth workflow for the company.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    detailDesc: "● Creating a website to advertise accounting solutions.\n● Configuring a Linux server to host work-related backups and remote access to programs.\n\to Utilised Syncthing to securely sync important documents to the server for backups.\n\to Utilised Kasm Workspaces to securely host an RDP server.\n● Configured a multitude of programs on Proxmox, such as Nextcloud in order to backup sensitive files to my rack-mounted Intel Xeon server.\n● Self-hosted Authentik (an open source identity provider) and configured it to use SSO on all of the applications on my server.\n● Self-hosted Vaultwarden to manage credentials and Jellyfin as a media server.\n● Utilised Cloudflare Tunnels in order to make all of my self-hosted programs accessible outside of my network without compromising on security.\n● Keying in invoices into Sage Accounts and Microsoft Excel.\n● Configuring networking and deployment of various programs to increase efficiency.",
  },
  {
    id: 3,
    title: "Lead Programmer",
    desc: "The lead programmer for a team of 5 developers on the AstroPi project.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    detailDesc: "● Working under time pressure in order to meet deadlines.\n● Setting up a cloud coding environment in order to collaborate with writing Python code.\n\to Self hosting a VNC to collaborate on a single VS Code instance.\n● Communicating efficiently with peers in order to write efficient code.\n\to Setting up times to meet/call to work on the project.\n\to Brainstorming ideas on how to achieve our goals.\n● Writing clear and concise code with relevant comments in order to make debugging simple.\n● Optimising code to achieve the most efficiency.",
  },
  {
    id: 4,
    title: "Head IT Manager",
    desc: "Head IT Manager for a secondary school, responsible for the IT department.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    detailDesc: "● Responsible for introducing new automations to improve the efficiency of the school.\n● Responsible for organising school prefects, assigning duties, head meetings, and speaking with teachers to discuss any issues.\n● Used Python to create graphical programs that are currently being used for behaviour management and reward tracking throughout both primary and secondary.\n\to Utilised Tkinter to make the GUI feel modern and polished.\n● Helped to set up and manage the Chromebooks whilst also maintaining the highest security to protect the privacy of the students.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/spoofer8",
  },
];
