import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { NavBar } from "@/components/nav-bar";
import { ActiveSection } from "@/components/active-section";
import { WorkSection } from "@/components/work-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-4 sm:h-dvh sm:px-5">
          <NavBar />
          <ActiveSection />
          <WorkSection />
          <ProjectsSection />
          <AboutSection />
        </main>
      </LocaleProvider>
    </ThemeProvider>
  );
}
