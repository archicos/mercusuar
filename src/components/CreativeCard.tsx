// src/components/CreativeCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import type { CreativeWork } from "@/app/creative/page";

type CreativeCardProps = {
    work: CreativeWork;
    onSelect: () => void;
};

export function CreativeCard({ work, onSelect }: CreativeCardProps) {
    const toolsToShow = work.tools.slice(0, 4);
    const remainingToolsCount = work.tools.length - toolsToShow.length;

    return (
        <motion.button
        layout
        // ... (animasi sama seperti ProjectCard) ...
        onClick={onSelect}
        className="group relative w-full text-left bg-white dark:bg-secondary-800 rounded-xl border border-secondary-200 dark:border-secondary-700 shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
        >
        <div className="aspect-w-16 aspect-h-9 w-full">
            <Image src={work.image} alt={work.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
            <h3 className="font-bold text-secondary-700 dark:text-secondary-200 line-clamp-1">{work.title}</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 line-clamp-3 h-[60px]">{work.short}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 h-8">
            {toolsToShow.map(t => (
                <div key={t.name} className="flex items-center justify-center h-6 w-6 bg-secondary-100 dark:bg-secondary-700 rounded-full">
                <Image src={t.logo} alt={t.name} width={16} height={16} />
                </div>
            ))}
            {remainingToolsCount > 0 && (
                <div className="flex items-center justify-center h-6 w-6 text-xs font-bold bg-secondary-200 dark:bg-secondary-600 text-secondary-600 dark:text-secondary-200 rounded-full">
                +{remainingToolsCount}
                </div>
            )}
            </div>
        </div>
        </motion.button>
    );
}