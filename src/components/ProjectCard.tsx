// src/components/ProjectCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/projects/page"; // Impor tipe dari page

type ProjectCardProps = {
    project: Project;
    onSelect: () => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
    const techToShow = project.tech.slice(0, 4);
    const remainingTechCount = project.tech.length - techToShow.length;

    return (
        <motion.button
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={onSelect}
        className="group relative w-full text-left bg-white dark:bg-secondary-800 rounded-xl border border-secondary-200 dark:border-secondary-700 shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
        >
        {/* Gambar dengan rasio 16:9 */}
        <div className="aspect-w-16 aspect-h-9 w-full">
            <Image
            src={project.image}
            alt={project.title}
            fill={true}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-4">
            {/* Judul (maks 1 baris) */}
            <h3 className="font-bold text-secondary-700 dark:text-secondary-200 line-clamp-1">{project.title}</h3>
            {/* Deskripsi (maks 3 baris) */}
            <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 line-clamp-3 h-[60px]">{project.short}</p>
            {/* Tech Stack (maks 1 baris) */}
            <div className="flex flex-wrap items-center gap-2 mt-3 h-8">
            {techToShow.map(t => (
                <div key={t.name} className="flex items-center justify-center h-6 w-6 bg-secondary-100 dark:bg-secondary-700 rounded-full">
                <Image src={t.logo} alt={t.name} width={16} height={16} />
                </div>
            ))}
            {remainingTechCount > 0 && (
                <div className="flex items-center justify-center h-6 w-6 text-xs font-bold bg-secondary-200 dark:bg-secondary-600 text-secondary-600 dark:text-secondary-200 rounded-full">
                +{remainingTechCount}
                </div>
            )}
            </div>
        </div>
        </motion.button>
    );
}