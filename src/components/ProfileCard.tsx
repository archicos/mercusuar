// src/components/ProfileCard.tsx
import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiDownload } from "react-icons/fi"; // Tambah FiDownload

type Social = {
    label: string;
    icon: string;
    url: string;
};

// Definisikan tipe yang diperbarui untuk menyertakan cvPath
type Profile = {
    name: string;
    title: string;
    summary: string;
    cvPath: string; // Path ke file CV Anda
    location: string;
    socials: { label: string; icon: string; url: string; }[];
};

const iconComponents: Record<string, React.ComponentType<{ size?: number }>> = {
    github: FiGithub,
    linkedin: FiLinkedin,
    instagram: FiInstagram,
    mail: FiMail,
};

export function ProfileCard({ profile }: { profile: Profile }) {
    return (
        <div className="p-6 bg-white dark:bg-secondary-800 rounded-2xl border border-secondary-200 dark:border-secondary-700 shadow-sm">
        <div className="flex flex-col items-center text-center">
            <Image
            src="/images/home/profile.jpg"
            alt="Profile"
            width={160}
            height={160}
            priority={true}
            className="rounded-full mb-4 object-cover ring-4 ring-primary-200 dark:ring-primary-900/50"
            />
            <h1 className="text-2xl font-bold text-secondary-700 dark:text-secondary-100">{profile.name}</h1>
            <p className="text-primary-600 dark:text-primary-500 font-medium">{profile.title}</p>
            <p className="text-secondary-500 dark:text-secondary-400 mt-3 text-sm leading-relaxed">{profile.summary}</p>

            {/* --- BARU: Tombol Download CV --- */}
            <a 
            href={profile.cvPath} 
            download 
            className="mt-5 inline-flex items-center gap-2 w-full justify-center px-4 py-2 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
            <FiDownload size={16} />
            Download CV
            </a>

            <div className="w-full border-t border-secondary-200 dark:border-secondary-700 my-5" />

            <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400">
            <FiMapPin />
            {profile.location}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-5">
            {profile.socials.map((social) => {
                const Icon = iconComponents[social.icon] ?? FiGithub;
                return (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary-100 hover:bg-primary-100 dark:bg-secondary-700 dark:hover:bg-primary-900/50 text-secondary-500 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-300 transition-all duration-300">
                    <Icon size={18} />
                </a>
                );
            })}
            </div>
        </div>
        </div>
    );
}