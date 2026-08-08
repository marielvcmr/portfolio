// src/data/projectsData.js

export const projectData = [
  {
    id: "flowsheet",
    name: "FlowSheet",
    iconType: "image",
    iconContent: "flowsheet-logo.png", // Nombre del logo en assets/logos/
    about: "System to manage projects and employees",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
    images: ["flowsheet-login.png", "flowsheet-dashboard.png"], 
    stack: [
      "Node.js + Express.js (Backend)",
      "React.js + Vite (Frontend)",
      "PostgreSQL (Database)"
    ],
    repo: "https://github.com"
  },
  {
    id: "mi-chinita",
    name: "Mi Chinita",
    iconType: "emoji",
    iconContent: "🦷", // Emoji literal directamente
    about: "System to manage a Dental Clinic",
    description: "Detailed system built to coordinate medical scheduling, dentist shifts, dental records, and inventory tracking for clinical operations.",
    images: [], 
    stack: ["React.js", "Firebase"],
    repo: "https://github.com"
  },
  {
    id: "ia-captcha",
    name: "IA for a Captcha",
    iconType: "emoji",
    iconContent: "🤖",
    about: "IA that deciphers a 4-digit captcha",
    description: "A machine learning algorithm trained to segment, preprocess, and process highly distorted images to accurately break 4-digit alphanumerical security strings.",
    images: [],
    stack: ["Python", "TensorFlow", "OpenCV"],
    repo: "https://github.com"
  }
];
