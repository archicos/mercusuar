"use client";
import { useState, useMemo } from "react";
import creativeData from "@/data/creative.json";
import { CreativeCard } from "@/components/CreativeCard";
import { CreativeModal } from "@/components/CreativeModal";
import { ProjectFilters } from "@/components/ProjectFilters"; // Bisa kita gunakan kembali
import { motion, AnimatePresence } from "framer-motion";
import { FiClock } from "react-icons/fi";
import { Brush, Clapperboard, Film, Instagram, LayoutGrid, Linkedin, Monitor, PencilRuler, Smartphone } from "lucide-react";

export type CreativeWork = (typeof creativeData)[number];

// Kategori baru untuk halaman Creative
const categories = [
    { name: "All", icon: LayoutGrid },
    { name: "Logo", icon: PencilRuler },
    { name: "Poster", icon: Brush },
    { name: "Video", icon: Clapperboard },
    { name: "Film", icon: Film },
    { name: "Instagram", icon: Instagram },
    { name: "LinkedIn", icon: Linkedin },
    { name: "UI/UX", icon: Monitor },
    { name: "Vertical", icon: Smartphone },
];

export default function CreativePage() {
    const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredWorks = useMemo(
        () =>
        activeFilter === "All"
            ? creativeData
            : creativeData.filter((p) => p.category === activeFilter),
        [activeFilter]
    );
    
    const lastUpdated = "August 18, 2025";

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header Halaman */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary-700 dark:text-secondary-100">Creative Works</h1>
            <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            A showcase of my work in graphic design, video editing, and UI/UX.
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
            <FiClock size={14} />
            <span>Last updated on {lastUpdated}</span>
            </div>
        </div>
        
        {/* Filter (menggunakan kembali komponen yang sama) */}
        <ProjectFilters 
            categories={categories} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
        />

        {/* Grid Proyek */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <AnimatePresence>
            {filteredWorks.map((work) => (
                <CreativeCard key={work.id} work={work} onSelect={() => setSelectedWork(work)} />
            ))}
            </AnimatePresence>
        </motion.div>

        {/* Modal Detail Proyek */}
        <AnimatePresence>
            {selectedWork && (
            <CreativeModal
                work={selectedWork}
                onClose={() => setSelectedWork(null)}
            />
            )}
        </AnimatePresence>
        </main>
    );
}