import type { Locale } from "@/lib/i18n";

/**
 *  SITE CONFIG
 *  Everything on the page comes from this one file. LocalizedText /
 *  LocalizedList fields hold one value per language — fill in en at
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

export type Project = {
  id: string;
  name: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  github: string;
  image: string;
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
    current: LocalizedText;
  };
  social: {
    github: SocialLink;
    linkedin: SocialLink;
    twitter: SocialLink;
  };
  roles: Role[];
  projects: Project[];
  themes: Theme[];
  defaultThemeId: string;
  //shown in the page footer — this template is free to reuse
  template: {
    authorName: string;
    authorUrl: string;
    repoUrl: string;
  };
};

export const siteConfig: SiteConfig = {
  fullName: "Bidyut Kundu",
  location: "Kolkata, India",
  email: "bidyut.kundu.dev@gmail.com",
  openToWork: true,
  resume: "/pdfs/Software_Engineer-Bidyut_Kundu.pdf",

  bio: {
    intro: {
      en: "3.5+ years building products at a startup, across the backend, the frontend, and everything in between.",
      fr: "3,5+ ans à construire des produits en startup, du backend au frontend et tout ce qu'il y a entre les deux.",
      es: "Más de 3,5 años construyendo productos en una startup, entre el backend, el frontend y todo lo demás.",
      bn: "একটি স্টার্টআপে ৩.৫+ বছর ধরে প্রোডাক্ট বানাচ্ছি — ব্যাকএন্ড, ফ্রন্টএন্ড এবং মাঝের সবকিছু।",
    },
    current: {
      en: "These days I'm focused on Opensource UI, a free React & Next.js component library — 1,000+ developers use it every month.",
      fr: "En ce moment, je me concentre sur Opensource UI, une bibliothèque de composants React & Next.js gratuite — utilisée par plus de 1 000 développeurs chaque mois.",
      es: "Ahora mismo estoy centrado en Opensource UI, una librería de componentes React y Next.js gratuita, usada por más de 1.000 desarrolladores cada mes.",
      bn: "আজকাল আমি Opensource UI নিয়ে কাজ করছি, একটি ফ্রি React ও Next.js কম্পোনেন্ট লাইব্রেরি — প্রতি মাসে ১,০০০+ ডেভেলপার এটি ব্যবহার করেন।",
    },
  },

  social: {
    github: { label: "GitHub", href: "https://github.com/bidyut10" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bidyut-kundu-4ba406242",
    },
    twitter: { label: "Twitter", href: "https://x.com/BidyutKundu12" },
  },

  roles: [
    {
      id: "software-developer",
      title: {
        en: "Software Developer",
        fr: "Développeur logiciel",
        es: "Desarrollador de software",
        bn: "সফটওয়্যার ডেভেলপার",
      },
      employment: {
        en: "Full-time",
        fr: "Temps plein",
        es: "Tiempo completo",
        bn: "পূর্ণকালীন",
      },
      range: "05.2025—06.2026",
      location: { en: "Remote", fr: "À distance", es: "Remoto", bn: "রিমোট" },
      highlights: {
        en: [
          "Migrated to Lambda microservices after a 50K+ request outage — 99.9% uptime, 60% lower cloud spend.",
          "Built async QR tracking across 10+ nodes via SQS — 80% fewer errors, 2+ hrs/day saved.",
        ],
        fr: [
          "Migration vers des microservices Lambda après une panne de 50K+ requêtes — 99,9 % de disponibilité, coûts cloud réduits de 60 %.",
          "Suivi QR asynchrone sur 10+ nœuds via SQS — 80 % d'erreurs en moins, 2h+/jour économisées.",
        ],
        es: [
          "Migración a microservicios Lambda tras una caída de 50K+ solicitudes — 99,9 % de disponibilidad, 60 % menos gasto en la nube.",
          "Seguimiento QR asíncrono en 10+ nodos vía SQS — 80 % menos errores, 2h+/día ahorradas.",
        ],
        bn: [
          "৫০K+ রিকোয়েস্ট আউটেজের পর Lambda মাইক্রোসার্ভিসে মাইগ্রেট করেছি — ৯৯.৯% আপটাইম, ৬০% কম ক্লাউড খরচ।",
          "SQS দিয়ে ১০+ নোড জুড়ে অ্যাসিঙ্ক QR ট্র্যাকিং তৈরি করেছি — ৮০% কম এরর, দিনে ২+ ঘণ্টা সাশ্রয়।",
        ],
      },
    },
    {
      id: "associate",
      title: {
        en: "Associate Software Developer",
        fr: "Développeur logiciel associé",
        es: "Desarrollador de software asociado",
        bn: "অ্যাসোসিয়েট সফটওয়্যার ডেভেলপার",
      },
      employment: {
        en: "Full-time",
        fr: "Temps plein",
        es: "Tiempo completo",
        bn: "পূর্ণকালীন",
      },
      range: "04.2023—05.2025",
      location: {
        en: "On-site",
        fr: "Sur site",
        es: "Presencial",
        bn: "অন-সাইট",
      },
      highlights: {
        en: [
          "Shipped full-stack features across React, Node.js, and PostgreSQL for production client systems.",
          "Owned API integrations, auth flows, and day-to-day debugging in an on-site engineering team.",
        ],
        fr: [
          "Développement de fonctionnalités full-stack (React, Node.js, PostgreSQL) pour des systèmes clients en production.",
          "Responsable des intégrations API, des flux d'authentification et du débogage au quotidien.",
        ],
        es: [
          "Desarrollo de funcionalidades full-stack (React, Node.js, PostgreSQL) para sistemas de clientes en producción.",
          "A cargo de integraciones API, flujos de autenticación y depuración diaria en un equipo presencial.",
        ],
        bn: [
          "প্রোডাকশন ক্লায়েন্ট সিস্টেমের জন্য React, Node.js ও PostgreSQL জুড়ে ফুল-স্ট্যাক ফিচার বানিয়েছি।",
          "অন-সাইট ইঞ্জিনিয়ারিং টিমে API ইন্টিগ্রেশন, অথ ফ্লো এবং দৈনন্দিন ডিবাগিংয়ের দায়িত্বে ছিলাম।",
        ],
      },
    },
  ],

  projects: [
    {
      id: "opensourceui",
      name: "Opensource UI",
      subtitle: {
        en: "Component Library",
        fr: "Bibliothèque de composants",
        es: "Librería de componentes",
        bn: "কম্পোনেন্ট লাইব্রেরি",
      },
      description: {
        en: "150+ React/Next.js components. 1K+ users and 10K+ page views in the first 4 weeks post-launch.",
        fr: "150+ composants React/Next.js. 1K+ utilisateurs et 10K+ vues en 4 semaines après le lancement.",
        es: "150+ componentes React/Next.js. Más de 1K usuarios y 10K vistas en las primeras 4 semanas.",
        bn: "১৫০+ React/Next.js কম্পোনেন্ট। লঞ্চের ৪ সপ্তাহে ১K+ ইউজার এবং ১০K+ পেজ ভিউ।",
      },
      github: "https://github.com/bidyut10/opensourceui",
      image: "/images/background6.webp",
      demo: "https://opensourceui.in",
      gradientFrom: "#f7d9c4",
      gradientTo: "#c9a0dc",
    },
    {
      id: "authscale",
      name: "Authscale",
      subtitle: {
        en: "Backend Starter CLI",
        fr: "CLI de démarrage backend",
        es: "CLI de arranque backend",
        bn: "ব্যাকএন্ড স্টার্টার CLI",
      },
      description: {
        en: "CLI generating a production-ready Express.js backend with built-in auth and security defaults.",
        fr: "CLI générant un backend Express.js prêt pour la production, avec auth et sécurité intégrées.",
        es: "CLI que genera un backend Express.js listo para producción, con auth y seguridad integradas.",
        bn: "একটি CLI যা বিল্ট-ইন অথ ও সিকিউরিটি সহ প্রোডাকশন-রেডি Express.js ব্যাকএন্ড তৈরি করে।",
      },
      github: "https://github.com/bidyut10/authscale",
      demo: "https://authscale.netlify.app",
      image: "/images/background7.webp",
      gradientFrom: "#c4e0f7",
      gradientTo: "#a0c9b8",
    },
    {
      id: "codewise",
      name: "Codewise",
      subtitle: {
        en: "AI Code Reviewer",
        fr: "Relecteur de code IA",
        es: "Revisor de código con IA",
        bn: "AI কোড রিভিউয়ার",
      },
      description: {
        en: "Uses Google Gemini to analyze GitHub commit diffs and generate structured code review feedback.",
        fr: "Utilise Google Gemini pour analyser les diffs GitHub et générer des retours de revue de code structurés.",
        es: "Usa Google Gemini para analizar diffs de GitHub y generar comentarios de revisión de código estructurados.",
        bn: "GitHub কমিট ডিফ বিশ্লেষণ করে স্ট্রাকচার্ড কোড রিভিউ ফিডব্যাক দিতে Google Gemini ব্যবহার করে।",
      },
      github: "https://github.com/bidyut10/code-reviewer",
      image: "/images/background5.webp",
      demo: "https://codewiseai.onrender.com",
      gradientFrom: "#d9e8b8",
      gradientTo: "#8fb8a8",
    },
    {
      id: "wcut",
      name: "Wcut",
      subtitle: {
        en: "URL Shortener",
        fr: "Raccourcisseur d'URL",
        es: "Acortador de URL",
        bn: "URL শর্টনার",
      },
      description: {
        en: "Converts long URLs into short links and handles redirection efficiently using in-memory caching.",
        fr: "Convertit les longues URLs en liens courts et gère la redirection efficacement via un cache en mémoire.",
        es: "Convierte URLs largas en enlaces cortos y gestiona la redirección eficientemente con caché en memoria.",
        bn: "লম্বা URL-কে ছোট লিঙ্কে পরিণত করে এবং ইন-মেমরি ক্যাশিং দিয়ে কার্যকরভাবে রিডাইরেক্ট করে।",
      },
      github: "https://github.com/bidyut10/urlShortner",
      demo: "https://wcut.netlify.app",
      image: "/images/background3.webp",
      gradientFrom: "#c4d4f7",
      gradientTo: "#7fa8d9",
    },
    {
      id: "paperdoc",
      name: "Paperdoc",
      subtitle: {
        en: "Invoice Generator",
        fr: "Générateur de factures",
        es: "Generador de facturas",
        bn: "ইনভয়েস জেনারেটর",
      },
      description: {
        en: "Generates professional invoices and receipts with customizable templates and payment options.",
        fr: "Génère des factures et reçus professionnels avec des modèles et options de paiement personnalisables.",
        es: "Genera facturas y recibos profesionales con plantillas y opciones de pago personalizables.",
        bn: "কাস্টমাইজেবল টেমপ্লেট ও পেমেন্ট অপশন সহ প্রফেশনাল ইনভয়েস ও রসিদ তৈরি করে।",
      },
      github: "https://github.com/bidyut10/corporate-inv",
      demo: "https://paperdoc.netlify.app",
      image: "/images/background.webp",
      gradientFrom: "#e0dcc4",
      gradientTo: "#a8a074",
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

  template: {
    authorName: "Bidyut",
    authorUrl: "https://bidyut.cc",
    repoUrl: "https://github.com/bidyut10",
  },
};
