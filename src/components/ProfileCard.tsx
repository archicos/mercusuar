import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";

type Social = {
    label: string;
    icon: string;
    url: string;
};

type Profile = {
    name: string;
    title: string;
    summary: string;
    location: string;
    socials: Social[];
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
            {/* Foto Profil */}
            <Image
            src="/images/home/profile.jpg" // Pastikan path ini benar
            alt="Profile"
            width={160}
            height={160}
            priority={true} // Prioritaskan gambar ini untuk dimuat
            className="rounded-full mb-4 object-cover ring-4 ring-primary-200 dark:ring-primary-900"
            />

            {/* Informasi Dasar */}
            <h1 className="text-2xl font-bold text-secondary-700 dark:text-secondary-100">{profile.name}</h1>
            <p className="text-primary-500 font-medium">{profile.title}</p>
            <p className="text-secondary-500 dark:text-secondary-400 mt-3 text-sm leading-relaxed">{profile.summary}</p>

            {/* Lokasi */}
            <div className="flex items-center gap-2 mt-4 text-sm text-secondary-500 dark:text-secondary-400">
            <FiMapPin />
            {profile.location}
            </div>

            {/* Ikon Sosial Media */}
            <div className="flex flex-wrap justify-center gap-3 mt-5">
            {profile.socials.map((social) => {
                // Ambil komponen ikon yang sesuai dari mapping, fallback ke FiGithub jika tidak ada
                const Icon = iconComponents[social.icon] ?? FiGithub;
                return (
                <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="
                    flex items-center justify-center 
                    h-10 w-10 
                    rounded-full 
                    bg-secondary-100 hover:bg-primary-100 
                    dark:bg-secondary-700 dark:hover:bg-primary-900/50
                    text-secondary-500 hover:text-primary-500 
                    dark:text-secondary-400 dark:hover:text-primary-300
                    transition-all duration-300"
                >
                    <Icon size={18} />
                </a>
                );
            })}
            </div>
        </div>
        </div>
    );
}