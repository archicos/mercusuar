// src/components/ProjectModal.tsx
"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiInfo, FiCode, FiAward, FiCalendar, FiMaximize, FiX } from "react-icons/fi";
import type { Project } from "@/app/projects/page";
import Modal from "@/components/Modal"; // Komponen Modal generik

const skillIcons = {
    "System Integration": FiCode,
    "Authentication": FiCode,
    "Data Modeling": FiCode,
    "UI/UX Design": FiAward,
    "SSG": FiAward,
    "Responsive Design": FiAward,
    "Component Architecture": FiAward,
    "Service Design": FiCode,
    "CI/CD": FiCode,
    "Containerization": FiCode,
    "API Gateway": FiCode,
    "API Integration": FiCode,
    "MVVM": FiAward,
    "Default": FiAward
};

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void; }) {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <>
        <Modal open={!fullscreen} onClose={onClose} title={project.title}>
            <div className="space-y-4">
            {/* Gambar dengan tombol fullscreen */}
            <div className="relative group aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <button onClick={() => setFullscreen(true)} className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FiMaximize className="text-white h-8 w-8" />
                </button>
            </div>

            <p className="text-secondary-600 dark:text-secondary-300">{project.description}</p>
            
            {/* Details & Tech Stack */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                    <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200"><FiInfo/>Details</h4>
                    <div className="mt-2 space-y-2 text-sm">
                        <p><strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Role:</strong> {project.role}</p>
                        <p><strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Period:</strong> {project.period}</p>
                        <p><strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Updated:</strong> {project.lastUpdated}</p>
                    </div>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                    <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200"><FiCode/>Technology</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {project.tech.map(t => (
                            <div key={t.name} className="flex items-center gap-2" title={t.name}>
                                <Image src={t.logo} alt={t.name} width={20} height={20}/>
                                <span className="text-sm text-secondary-600 dark:text-secondary-300">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div>
                <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200"><FiAward/>Skills & Concepts</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map(skill => {
                        const Icon = skillIcons[skill] || skillIcons.Default;
                        return (
                            <span key={skill} className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full">
                                <Icon/>{skill}
                            </span>
                        )
                    })}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 border-t border-secondary-200 dark:border-secondary-700 pt-4">
                {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-700 text-white hover:bg-secondary-900 transition-colors">
                    <FiGithub /> GitHub
                </a>
                )}
                {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                    <FiExternalLink /> Live Demo
                </a>
                )}
            </div>
            </div>
        </Modal>

        {/* Fullscreen Image Viewer */}
        {fullscreen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                onClick={() => setFullscreen(false)}
            >
            <Image src={project.image} alt={project.title} width={1920} height={1080} className="max-w-[90vw] max-h-[90vh] object-contain"/>
            <button onClick={() => setFullscreen(false)} className="absolute top-4 right-4 text-white hover:text-primary-300">
                <FiX size={32}/>
            </button>
            </motion.div>
        )}
        </>
    );
}