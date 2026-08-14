/**
 * UI-chrome translations: nav/section labels only. Actual content
 * (bio, role details, project copy) is localized directly in config.ts
 * as LocalizedText objects.
 */

export type Locale = "en" | "fr" | "es" | "bn";

export const locales: { id: Locale; flag: string; label: string }[] = [
  { id: "en", flag: "🇬🇧", label: "English" },
  { id: "fr", flag: "🇫🇷", label: "Français" },
  { id: "es", flag: "🇪🇸", label: "Español" },
  { id: "bn", flag: "🇮🇳", label: "বাংলা" },
];

export const defaultLocale: Locale = "en";

export const dict = {
  en: { active: "Currently", work: "Work", projects: "Projects", resume: "Resume", openToWork: "Open to work", getInTouch: "Copy email", copied: "Copied!" },
  fr: { active: "Actuellement", work: "Expérience", projects: "Projets", resume: "CV", openToWork: "Disponible", getInTouch: "Copier l'e-mail", copied: "Copié !" },
  es: { active: "Actualmente", work: "Experiencia", projects: "Proyectos", resume: "CV", openToWork: "Disponible", getInTouch: "Copiar correo", copied: "¡Copiado!" },
  bn: { active: "বর্তমানে", work: "অভিজ্ঞতা", projects: "প্রজেক্টস", resume: "রিজিউমে", openToWork: "কাজের জন্য উপলব্ধ", getInTouch: "ইমেইল কপি করুন", copied: "কপি হয়েছে!" },
} satisfies Record<Locale, Record<string, string>>;

export type DictKey = keyof (typeof dict)["en"];
