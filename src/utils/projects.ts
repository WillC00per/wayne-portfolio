export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  staticImage: string;
  animatedImage: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: "truck-delivery-automation",
    title: "Truck Delivery Automation",
    description: "End-to-end automation system including inventory management, PO generation, and business analytics.",
    tech: [
      "React JS", "Node JS", "MUI", "Bootstrap", "SQLite", "ExcelJS", "Express", "JSPDF"
    ],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "ics-system-csc",
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%.",
    tech: [
      "React JS", "Node JS", "SQL", "ExcelJS"
    ],
    staticImage: "/images/ics-system.png",
    animatedImage: "/images/ics-system.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "science-quest",
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students.",
    tech: [
      "Unity", "C#", "MUI", "Bootstrap"
    ],
    staticImage: "/images/science-quest.jpg",
    animatedImage: "/images/science-quest.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "siyensaya-gamified-elearning",
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students.",
    tech: [
      "Node JS", "React JS", "MongoDB", "Express", "Unity", "Bootstrap"
    ],
    staticImage: "/images/siyensaya-static.jpg",
    animatedImage: "/images/siyensaya.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "manga-recommendation-ai",
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress).",
    tech: [
      "Next JS", "Tailwind", "React JS"
    ],
    staticImage: "/images/manga-static.jpg",
    animatedImage: "/images/manga.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "pba-website-restoration",
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress).",
    tech: [
      "Next JS", "TypeScript", "APIInteg"
    ],
    staticImage: "/images/pba-static.jpg",
    animatedImage: "/images/pba.gif",
    live: "#",
    github: "#"
  },
  {
    slug: "pokedex-api",
    title: "Poke Dex API",
    description: "A modern Pokédex app using Android Studio and Firebase.",
    tech: [
      "Android Studio", "Firebase"
    ],
    staticImage: "/images/pokedex-static.jpg",
    animatedImage: "/images/pokedex.gif",
    live: "#",
    github: "#"
  }
];
