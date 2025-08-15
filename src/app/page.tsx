import profile from "@/data/profile.json";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  mail: FiMail,
};

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-[320px_1fr] gap-8">
      {/* Profile Card */}
      <aside className="bg-white rounded-xl border border-slate-200 shadow p-6 h-fit md:sticky md:top-28">
        <div className="flex flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile.svg"
            alt="Profile"
            className="rounded-xl mb-4 w-40 h-40 object-cover"
          />
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-blue-700 font-medium">{profile.title}</p>
          <p className="text-slate-600 mt-3">{profile.bio}</p>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-slate-600">
            <span className="inline-flex items-center gap-2">
              <FiMapPin /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiPhone /> {profile.phone}
            </span>
          </div>

          <div className="flex gap-2 mt-4">
            {profile.socials.map((s) => {
              const Icon = icons[s.icon] ?? FiGithub;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-100 transition text-sm"
                  aria-label={s.label}
                >
                  <Icon />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Right content */}
      <div className="space-y-8">
        {/* Experience */}
        <section className="bg-white rounded-xl border border-slate-200 shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-3">
            {profile.experience.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 rounded-lg hover:bg-blue-50"
              >
                <div>
                  <p className="font-medium">
                    {exp.role} — <span className="text-blue-700">{exp.company}</span>
                  </p>
                  <p className="text-slate-600">{exp.details}</p>
                </div>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl border border-slate-200 shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-3">
            {profile.education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 rounded-lg hover:bg-blue-50"
              >
                <div>
                  <p className="font-medium">
                    {edu.degree} — <span className="text-blue-700">{edu.institution}</span>
                  </p>
                  <p className="text-slate-600">{edu.details}</p>
                </div>
                <span className="text-sm text-slate-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-xl border border-slate-200 shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.skills.map((s, i) => (
              <div key={i} className="p-3 rounded-lg bg-blue-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-sm text-blue-700">{s.level}%</span>
                </div>
                <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
