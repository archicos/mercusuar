"use client";
import { useState, useMemo } from "react";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectFilters } from "@/components/ProjectFilters";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiDownload } from "react-icons/fi";
import { Grid, Globe, Smartphone, Server } from "lucide-react";

export type Project = (typeof projectsData)[number];

const categories = [
    { name: "All", icon: Grid },
    { name: "Web", icon: Globe },
    { name: "Mobile", icon: Smartphone },
    { name: "Backend", icon: Server },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(
        () =>
        activeFilter === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === activeFilter),
        [activeFilter]
    );
    
    const lastUpdated = "August 22, 2025";

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* --- 1. Perbarui tata letak Header Halaman --- */}
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-3xl font-bold text-secondary-700 dark:text-secondary-100">Projects</h1>
                <p className="mt-2 text-secondary-600 dark:text-secondary-400">
                A collection of projects I've worked on, from mobile apps to backend systems.
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
                <FiClock size={14} />
                <span>Last updated on {lastUpdated}</span>
                </div>
            </div>
            
            {/* --- 2. Tombol Download dengan Desain Baru & Responsif --- */}
            <a
                href="/documents/Archico - Portfolio.pdf" // <-- GANTI DENGAN PATH FILE PDF ANDA
                download
                aria-label="Download Full Portfolio"
                className="
                flex-shrink-0 inline-flex items-center justify-center gap-2 font-semibold 
                border-2 bg-primary-600 text-white
                dark:border-primary-500 dark:text-primary-500 
                h-11 px-4 sm:w-auto sm:px-4 rounded-full
                transition-all duration-300
                hover:bg-primary-700 hover:text-white 
                dark:hover:bg-primary-700 dark:hover:text-white
                focus:outline-none focus-visible:ring-2 
                focus-visible:ring-primary-500 focus-visible:ring-offset-2 
                dark:focus-visible:ring-offset-secondary-900"
            >
                <FiDownload size={18} />
                <span className="sm:inline">Download Portfolio</span>
            </a>
        </div>
        
        {/* Filter */}
        <ProjectFilters 
            categories={categories} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
        />

        {/* ... sisa kode tidak berubah ... */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <AnimatePresence>
                {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} onSelect={() => setSelectedProject(p)} />
                ))}
            </AnimatePresence>
        </motion.div>
        <AnimatePresence>
            {selectedProject && (
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
            )}
        </AnimatePresence>
        </main>
    );
}