import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

// 1. Definisikan tipe data untuk satu item Experience
type Experience = {
    role: string;
    company: string;
    logo: string;
    period: string;
    details: string[];
    skills: string[];
    link: string;
};

// ============================================================================
// Komponen Kartu untuk setiap item Experience (Child Component)
// ============================================================================
function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg transition-colors border border-transparent hover:border-primary-200 dark:hover:border-primary-900 hover:bg-secondary-50 dark:hover:bg-secondary-800">
        {/* Logo Perusahaan */}
        <div className="flex-shrink-0">
            <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="rounded-md object-contain h-12 w-12 bg-white" // bg-white untuk logo transparan
            />
        </div>

        {/* Detail Pengalaman */}
        <div className="flex-1">
            <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-secondary-700 dark:text-secondary-200">{experience.role}</h3>
                <p className="font-medium text-primary-500">{experience.company}</p>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-0.5">{experience.period}</p>
            </div>
            <a
                href={experience.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${experience.company} website`}
                className="text-secondary-400 hover:text-primary-500 transition-colors p-1"
            >
                <FiExternalLink size={18} />
            </a>
            </div>

            {/* Deskripsi dalam bentuk list */}
            <ul className="mt-2 text-sm text-secondary-600 dark:text-secondary-300 list-disc list-inside space-y-1">
            {experience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
            </ul>

            {/* Badge/Label untuk Skills */}
            <div className="flex flex-wrap gap-2 mt-3">
            {experience.skills.map((skill) => (
                <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full"
                >
                {skill}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
}

// ============================================================================
// Komponen Section utama untuk menampilkan semua Experience (Parent Component)
// ============================================================================
export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
    return (
        <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-bold mb-4 text-secondary-700 dark:text-secondary-200">
            Experience
        </h2>
        <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} experience={exp} />
            ))}
        </div>
        </section>
    );
}