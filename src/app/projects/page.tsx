"use client";
import { useState, useMemo } from "react";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectFilters } from "@/components/ProjectFilters";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock } from "react-icons/fi";
import { Grid, Globe, Smartphone, Server } from "lucide-react";

// Definisikan tipe Project agar konsisten
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
    
    const lastUpdated = "August 20, 2025";

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header Halaman */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary-700 dark:text-secondary-100">Projects</h1>
            <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            A collection of projects I've worked on, from mobile apps to backend systems.
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
            <FiClock size={14} />
            <span>Last updated on {lastUpdated}</span>
            </div>
        </div>
        
        {/* Filter */}
        <ProjectFilters 
            categories={categories} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
        />

        {/* Grid Proyek */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <AnimatePresence>
            {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} onSelect={() => setSelectedProject(p)} />
            ))}
            </AnimatePresence>
        </motion.div>

        {/* Modal Detail Proyek */}
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