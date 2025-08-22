// src/app/page.tsx
import profile from "@/data/profile.json";
import { ProfileCard } from "@/components/ProfileCard";
import { Jumbotron } from "@/components/Jumbotron";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { BeyondTheCodeSection } from "@/components/BeyondTheCodeSection";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">
        {/* Kolom Kiri (Profil) */}
        <aside className="lg:sticky lg:top-8 h-fit">
          <ProfileCard profile={profile} />
        </aside>

        {/* Kolom Kanan (Konten Utama) */}
        <div className="flex flex-col gap-12">
          <Jumbotron slides={profile.jumbotronSlides} />
          <ExperienceSection experiences={profile.experience} />
          <EducationSection educations={profile.education} />
          <TechStackSection stacks={profile.techStacks} />
          <CompetenciesSection competencies={profile.competencies} />
          <BeyondTheCodeSection facts={profile.beyondTheCode} />
        </div>
      </div>
    </main>
  );
}