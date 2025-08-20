import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

// 1. Definisikan tipe data untuk satu item Education
type Education = {
    degree: string;
    institution: string;
    logo: string;
    period: string;
    details: string[];
    link: string;
};

// ============================================================================
// Komponen Kartu untuk setiap item Education (Child Component)
// ============================================================================
function EducationCard({ education }: { education: Education }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg transition-colors border border-transparent hover:border-primary-200 dark:hover:border-primary-900 hover:bg-secondary-50 dark:hover:bg-secondary-800">
        {/* Logo Institusi */}
        <div className="flex-shrink-0">
            <Image
            src={education.logo}
            alt={`${education.institution} logo`}
            width={48}
            height={48}
            className="rounded-md object-contain h-12 w-12 bg-white" // bg-white untuk logo transparan
            />
        </div>

        {/* Detail Pendidikan */}
        <div className="flex-1">
            <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-secondary-700 dark:text-secondary-200">{education.degree}</h3>
                <p className="font-medium text-primary-500">{education.institution}</p>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-0.5">{education.period}</p>
            </div>
            <a
                href={education.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${education.institution} website`}
                className="text-secondary-400 hover:text-primary-500 transition-colors p-1"
            >
                <FiExternalLink size={18} />
            </a>
            </div>

            {/* Deskripsi dalam bentuk list */}
            <ul className="mt-2 text-sm text-secondary-600 dark:text-secondary-300 list-disc list-inside space-y-1">
            {education.details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
            </ul>
        </div>
        </div>
    );
}

// ============================================================================
// Komponen Section utama untuk menampilkan semua Education (Parent Component)
// ============================================================================
export function EducationSection({ educations }: { educations: Education[] }) {
    return (
        <section aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-bold mb-4 text-secondary-700 dark:text-secondary-200">
            Education
        </h2>
        <div className="flex flex-col gap-4">
            {educations.map((edu) => (
            <EducationCard key={edu.institution} education={edu} />
            ))}
        </div>
        </section>
    );
}