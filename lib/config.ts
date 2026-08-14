import type { Locale } from "@/lib/i18n";

/**
 *  SITE CONFIG
 *  Everything on the page comes from this one file. LocalizedText /
 *  LocalizedList fields hold one value per language. Fill in en at
 *  minimum, the rest are optional-but-expected.
*/

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type Theme = {
  id: string;
  label: string;
  bg: string;
  fg: string;
  muted: string;
  border: string;
  accent: string;
  accentFg: string;
  swatch: string;
};

export type Role = {
  id: string;
  title: LocalizedText;
  employment: LocalizedText;
  range: string;
  location: LocalizedText;
  highlights: LocalizedList;
};

export type ActiveEntry = {
  id: string;
  range: string;
  location: LocalizedText;
  highlights: LocalizedList;
  link: SocialLink;
};

export type Project = {
  id: string;
  name: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  github: string;
  images: string[];
  demo: string;
  gradientFrom: string;
  gradientTo: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  fullName: string;
  location: string;
  email: string;
  openToWork: boolean;
  resume: string;
  bio: {
    intro: LocalizedText;
  };
  social: {
    github: SocialLink;
    linkedin: SocialLink;
    twitter: SocialLink;
  };
  active: ActiveEntry[];
  roles: Role[];
  projects: Project[];
  themes: Theme[];
  defaultThemeId: string;
};

export const siteConfig: SiteConfig = {
  fullName: "Omer Aviram",
  location: "Gainesville, FL",
  email: "omeravi2005@gmail.com",
  openToWork: false,
  resume: "/pdfs/Omer_Aviram_Resume_2026_August.pdf",

  bio: {
    intro: {
      en: "University of Florida Computer Science student who spent summer 2026 as Snapback Sports' Software Development & Content Intern, shipping Snapback Saturdays and running its content channels to 23.9M+ impressions.",
      fr: "Étudiant en informatique à l'Université de Floride, stagiaire Développement & Contenu chez Snapback Sports à l'été 2026, où j'ai livré Snapback Saturdays et piloté les canaux de contenu jusqu'à 23,9M+ d'impressions.",
      es: "Estudiante de Ciencias de la Computación en la Universidad de Florida, pasante de Desarrollo y Contenido en Snapback Sports durante el verano de 2026, donde lancé Snapback Saturdays y gestioné sus canales de contenido hasta 23,9M+ de impresiones.",
      bn: "ফ্লোরিডা বিশ্ববিদ্যালয়ের কম্পিউটার সায়েন্স শিক্ষার্থী, ২০২৬ সালের গ্রীষ্মে Snapback Sports-এ সফটওয়্যার ডেভেলপমেন্ট ও কনটেন্ট ইন্টার্ন হিসেবে কাজ করেছি, Snapback Saturdays তৈরি করেছি এবং কনটেন্ট চ্যানেলগুলো ২৩.৯M+ ইম্প্রেশনে পৌঁছে দিয়েছি।",
    },
  },

  social: {
    github: { label: "GitHub", href: "" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/omeraviram",
    },
    twitter: { label: "Twitter", href: "" },
  },

  active: [
    {
      id: "snapback-saturdays-fall",
      range: "08.2026–12.2026",
      location: {
        en: "On the road · college campuses",
        fr: "Sur la route · campus universitaires",
        es: "De viaje · campus universitarios",
        bn: "সফরে · কলেজ ক্যাম্পাস",
      },
      highlights: {
        en: [
          "Maintaining and shipping features on the Snapback Saturdays site all season.",
          "Filming and editing a weekly hype video, and traveling to college football games nationwide to shoot and edit gameday content.",
        ],
        fr: [
          "Maintenance et nouvelles fonctionnalités du site Snapback Saturdays tout au long de la saison.",
          "Montage d'une vidéo hype chaque semaine et déplacements à des matchs de football universitaire dans tout le pays pour filmer et monter le contenu du jour de match.",
        ],
        es: [
          "Mantenimiento y desarrollo continuo del sitio de Snapback Saturdays durante toda la temporada.",
          "Filmación y edición de un video hype semanal, y viajes a partidos de fútbol americano universitario por todo el país para grabar y editar contenido del día del partido.",
        ],
        bn: [
          "পুরো মৌসুম জুড়ে Snapback Saturdays সাইট মেইনটেইন ও নতুন ফিচার যোগ করছি।",
          "প্রতি সপ্তাহে একটি হাইপ ভিডিও শুট ও এডিট করছি, এবং সারাদেশে কলেজ ফুটবল গেমে গিয়ে গেমডে কনটেন্ট শুট ও এডিট করছি।",
        ],
      },
      link: {
        label: "@snapbackinterns on Instagram",
        href: "https://www.instagram.com/snapbackinterns/",
      },
    },
  ],

  roles: [
    {
      id: "snapback-sports",
      title: {
        en: "Software Development & Content Intern",
        fr: "Stagiaire Développement & Contenu",
        es: "Pasante de Desarrollo y Contenido",
        bn: "সফটওয়্যার ডেভেলপমেন্ট ও কনটেন্ট ইন্টার্ন",
      },
      employment: {
        en: "Internship",
        fr: "Stage",
        es: "Pasantía",
        bn: "ইন্টার্নশিপ",
      },
      range: "06.2026–08.2026",
      location: {
        en: "New York, NY",
        fr: "New York, NY",
        es: "Nueva York, NY",
        bn: "নিউ ইয়র্ক, এনওয়াই",
      },
      highlights: {
        en: [
          "Built Snapback Saturdays, a college football fan hub (React, Firebase, Cloudflare Workers/D1) with trip planning, a live 16-stop schedule, and a unified content hub.",
          "Built four browser games (17-0, Chain, Highest Bid, and Higher or Lower) shipped into the Snapback Trivia app and played by 100,000+ users at games.snapbacksports.com.",
          "Led content strategy for @snapbackinterns across TikTok, Instagram, and Twitter: 3.7K followers, 23.9M impressions, 453K likes.",
        ],
        fr: [
          "Développement de Snapback Saturdays, un hub pour fans de football universitaire (React, Firebase, Cloudflare Workers/D1) avec planification de voyage, un calendrier en direct sur 16 étapes et un hub de contenu unifié.",
          "Développement de quatre jeux navigateur (17-0, Chain, Highest Bid et Higher or Lower) intégrés à l'app Snapback Trivia et joués par plus de 100 000 utilisateurs sur games.snapbacksports.com.",
          "Pilotage de la stratégie de contenu de @snapbackinterns sur TikTok, Instagram et Twitter : 3,7K abonnés, 23,9M d'impressions, 453K likes.",
        ],
        es: [
          "Desarrollo de Snapback Saturdays, un hub para fanáticos del fútbol americano universitario (React, Firebase, Cloudflare Workers/D1) con planificación de viajes, un calendario en vivo de 16 paradas y un hub de contenido unificado.",
          "Desarrollo de cuatro juegos de navegador (17-0, Chain, Highest Bid y Higher or Lower) integrados en la app Snapback Trivia y jugados por más de 100,000 usuarios en games.snapbacksports.com.",
          "Estrategia de contenido de @snapbackinterns en TikTok, Instagram y Twitter: 3,7K seguidores, 23,9M de impresiones, 453K me gusta.",
        ],
        bn: [
          "Snapback Saturdays তৈরি করেছি, কলেজ ফুটবল ফ্যানদের জন্য একটি হাব (React, Firebase, Cloudflare Workers/D1), ট্রিপ প্ল্যানিং, ১৬টি স্টপ জুড়ে লাইভ শিডিউল এবং একটি একীভূত কনটেন্ট হাব সহ।",
          "চারটি ব্রাউজার গেম (17-0, Chain, Highest Bid ও Higher or Lower) তৈরি করেছি, যা Snapback Trivia অ্যাপে যুক্ত হয়েছে এবং games.snapbacksports.com-এ ১,০০,০০০+ ইউজার খেলেছেন।",
          "TikTok, Instagram ও Twitter-এ @snapbackinterns-এর কনটেন্ট স্ট্র্যাটেজি পরিচালনা করেছি: ৩.৭K ফলোয়ার, ২৩.৯M ইম্প্রেশন, ৪৫৩K লাইক।",
        ],
      },
    },
    {
      id: "littleone-care",
      title: {
        en: "Full Stack Developer Intern",
        fr: "Stagiaire développeur full-stack",
        es: "Pasante de desarrollo full-stack",
        bn: "ফুল স্ট্যাক ডেভেলপার ইন্টার্ন",
      },
      employment: {
        en: "Internship",
        fr: "Stage",
        es: "Pasantía",
        bn: "ইন্টার্নশিপ",
      },
      range: "05.2025–08.2025",
      location: {
        en: "Tel Aviv, Israel",
        fr: "Tel Aviv, Israël",
        es: "Tel Aviv, Israel",
        bn: "তেল আভিভ, ইসরায়েল",
      },
      highlights: {
        en: [
          "Designed and built the company website with a responsive UI across desktop and mobile.",
          "Built and optimized back-end services with Node.js, React Native, and MongoDB for scalable APIs.",
        ],
        fr: [
          "Conception et développement du site web de l'entreprise avec une interface responsive sur ordinateur et mobile.",
          "Développement et optimisation de services back-end avec Node.js, React Native et MongoDB pour des API évolutives.",
        ],
        es: [
          "Diseño y desarrollo del sitio web de la empresa con una interfaz responsive en escritorio y móvil.",
          "Desarrollo y optimización de servicios back-end con Node.js, React Native y MongoDB para APIs escalables.",
        ],
        bn: [
          "ডেস্কটপ ও মোবাইল জুড়ে রেসপন্সিভ UI সহ কোম্পানির ওয়েবসাইট ডিজাইন ও তৈরি করেছি।",
          "স্কেলেবল API-এর জন্য Node.js, React Native ও MongoDB দিয়ে ব্যাকএন্ড সার্ভিস তৈরি ও অপ্টিমাইজ করেছি।",
        ],
      },
    },
    {
      id: "tamid-group",
      title: {
        en: "Technical Consultant",
        fr: "Consultant technique",
        es: "Consultor técnico",
        bn: "টেকনিক্যাল কনসালট্যান্ট",
      },
      employment: {
        en: "Part-time",
        fr: "Temps partiel",
        es: "Medio tiempo",
        bn: "খণ্ডকালীন",
      },
      range: "08.2024–04.2025",
      location: {
        en: "Gainesville, FL",
        fr: "Gainesville, Floride",
        es: "Gainesville, FL",
        bn: "গেইন্সভিল, ফ্লোরিডা",
      },
      highlights: {
        en: [
          "Built back-end functionality for an Israeli startup (DoroTech) based on Figma designs and product requirements.",
          "Researched Israeli companies to identify technology pain points and propose solutions.",
        ],
        fr: [
          "Développement de fonctionnalités back-end pour une startup israélienne (DoroTech) à partir de maquettes Figma et des besoins produit.",
          "Recherche sur des entreprises israéliennes pour identifier des points de friction technologiques et proposer des solutions.",
        ],
        es: [
          "Desarrollo de funcionalidades back-end para una startup israelí (DoroTech) a partir de diseños en Figma y requisitos del producto.",
          "Investigación de empresas israelíes para identificar puntos de dolor tecnológicos y proponer soluciones.",
        ],
        bn: [
          "Figma ডিজাইন ও প্রোডাক্ট রিকোয়ারমেন্টের ভিত্তিতে একটি ইসরায়েলি স্টার্টআপের (DoroTech) জন্য ব্যাকএন্ড ফাংশনালিটি তৈরি করেছি।",
          "প্রযুক্তিগত সমস্যা চিহ্নিত করতে এবং সমাধান প্রস্তাব করতে ইসরায়েলি কোম্পানিগুলো নিয়ে গবেষণা করেছি।",
        ],
      },
    },
  ],

  projects: [
    {
      id: "snapback-saturdays",
      name: "Snapback Saturdays",
      subtitle: {
        en: "College Football Fan Hub",
        fr: "Hub fans de football universitaire",
        es: "Hub para fanáticos del fútbol universitario",
        bn: "কলেজ ফুটবল ফ্যান হাব",
      },
      description: {
        en: "Flight, hotel, and gameday planning for every college football game, a live schedule across 16 stops, and a unified content hub for Snapback Sports.",
        fr: "Planification des vols, hôtels et jours de match pour chaque match de football universitaire, un calendrier en direct sur 16 étapes, et un hub de contenu unifié pour Snapback Sports.",
        es: "Planificación de vuelos, hoteles y días de partido para cada juego de fútbol americano universitario, un calendario en vivo de 16 paradas, y un hub de contenido unificado para Snapback Sports.",
        bn: "প্রতিটি কলেজ ফুটবল গেমের জন্য ফ্লাইট, হোটেল ও গেমডে প্ল্যানিং, ১৬টি স্টপ জুড়ে লাইভ শিডিউল, এবং Snapback Sports-এর জন্য একীভূত কনটেন্ট হাব।",
      },
      github: "",
      images: [
        "/images/snapback-saturdays-home.jpg",
        "/images/snapback-saturdays-stadium.jpg",
      ],
      demo: "https://snapbacksaturdays.com",
      gradientFrom: "#f5c99b",
      gradientTo: "#3d4f7a",
    },
    {
      id: "crave",
      name: "Crave",
      subtitle: {
        en: "Meal Plan App",
        fr: "App de forfaits repas",
        es: "App de plan de comidas",
        bn: "মিল প্ল্যান অ্যাপ",
      },
      description: {
        en: "Off-campus meal plan app for UF students, built with 30+ Gainesville restaurants. Launching soon.",
        fr: "App de forfait repas hors campus pour les étudiants de l'UF, développée avec plus de 30 restaurants de Gainesville. Lancement prochain.",
        es: "App de plan de comidas fuera del campus para estudiantes de la UF, creada con más de 30 restaurantes de Gainesville. Próximo lanzamiento.",
        bn: "UF শিক্ষার্থীদের জন্য অফ-ক্যাম্পাস মিল প্ল্যান অ্যাপ, ৩০+ গেইন্সভিল রেস্টুরেন্টের সাথে তৈরি। শীঘ্রই আসছে।",
      },
      github: "",
      images: ["/images/crave-brand.jpg", "/images/crave-campaign.jpg"],
      demo: "",
      gradientFrom: "#f7d9c4",
      gradientTo: "#e8926a",
    },
    {
      id: "tailgator",
      name: "TailGator",
      subtitle: {
        en: "Nightlife Tracker",
        fr: "Suivi de la vie nocturne",
        es: "Rastreador de vida nocturna",
        bn: "নাইটলাইফ ট্র্যাকার",
      },
      description: {
        en: "Crowdsourced platform tracking wait times and cover fees at nightlife spots in real time. Launching soon.",
        fr: "Plateforme collaborative suivant en temps réel les temps d'attente et les frais d'entrée des lieux nocturnes. Lancement prochain.",
        es: "Plataforma colaborativa que rastrea en tiempo real los tiempos de espera y las tarifas de entrada en lugares nocturnos. Próximo lanzamiento.",
        bn: "নাইটলাইফ স্পটগুলোতে রিয়েল-টাইমে ওয়েট টাইম ও কভার ফি ট্র্যাক করা ক্রাউডসোর্সড প্ল্যাটফর্ম। শীঘ্রই আসছে।",
      },
      github: "",
      images: ["/images/tailgator-list.jpg", "/images/tailgator-post.jpg"],
      demo: "",
      gradientFrom: "#c9a0dc",
      gradientTo: "#4a3f6b",
    },
  ],

  defaultThemeId: "paper",

  themes: [
    {
      id: "paper",
      label: "Paper",
      bg: "#f5f4f0",
      fg: "#1a1a1a",
      muted: "#8c8a84",
      border: "#dedcd5",
      accent: "#e9e7e0",
      accentFg: "#1a1a1a",
      swatch: "#f5f4f0",
    },
    {
      id: "fog",
      label: "Fog",
      bg: "#eceef2",
      fg: "#1b2330",
      muted: "#7c8698",
      border: "#d6dae2",
      accent: "#dde2ea",
      accentFg: "#1b2330",
      swatch: "#dde2ea",
    },
    {
      id: "moss",
      label: "Moss",
      bg: "#eef1e7",
      fg: "#20261a",
      muted: "#7d8a6c",
      border: "#d9ddc9",
      accent: "#e0e5d2",
      accentFg: "#20261a",
      swatch: "#c9d2b3",
    },
    {
      id: "ink",
      label: "Ink",
      bg: "#15161a",
      fg: "#eeece6",
      muted: "#83828c",
      border: "#2a2b31",
      accent: "#212227",
      accentFg: "#eeece6",
      swatch: "#15161a",
    },
  ],
};
