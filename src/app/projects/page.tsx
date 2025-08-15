"use client";
import { useState } from "react";
import projects from "@/data/projects.json";
import Modal from "@/components/Modal";
import Badge from "@/components/Badge";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Menggunakan FiGithub untuk ikon GitHub
import Image from "next/image"; // Menggunakan Next/Image untuk optimisasi

// Tipe Project, sama seperti sebelumnya
type Project = typeof projects[number];

export default function ProjectsPage() {
    // 1. Ubah state untuk menyimpan objek project, bukan hanya ID
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section>
            <h1 className="text-3xl font-bold mb-6 text-neutral-50">Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <button
                        key={p.id}
                        // 2. Perbarui onClick untuk menyimpan seluruh objek
                        onClick={() => setSelectedProject(p)}
                        className="bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg overflow-hidden text-left hover:-translate-y-1 hover:shadow-primary-900/50 transition-transform duration-300"
                    >
                        <div className="relative w-full h-44">
                            <Image 
                                src={p.image} 
                                alt={p.title} 
                                layout="fill" 
                                objectFit="cover" 
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-neutral-100">{p.title}</h3>
                            <p className="text-sm text-neutral-400 mt-1">{p.short}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {p.tech.slice(0, 3).map((t) => (
                                    <Badge key={t}>{t}</Badge>
                                ))}
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* 3. Render SATU modal secara kondisional di luar loop */}
            {selectedProject && (
                <ProjectModal
                    open={true} // Selalu true jika selectedProject ada isinya
                    onClose={() => setSelectedProject(null)} // Fungsi untuk menutup modal
                    project={selectedProject}
                />
            )}
        </section>
    );
}

// Komponen Row tidak perlu diubah, tapi kita perbaiki stylingnya untuk dark mode
function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="grid grid-cols-[100px_1fr] gap-3 py-1.5 border-b border-neutral-800 last:border-b-0">
            <div className="text-neutral-400 text-sm">{label}</div>
            <div className="font-medium text-neutral-200">{value}</div>
        </div>
    );
}

// Komponen ProjectModal tidak perlu diubah logikanya, hanya styling disesuaikan
function ProjectModal({
    open,
    onClose,
    project,
}: {
    open: boolean;
    onClose: () => void;
    project: Project;
}) {
    // Gunakan prop 'open' untuk mengontrol visibilitas Modal
    // atau biarkan komponen Modal yang mengaturnya
    return (
        <Modal open={open} onClose={onClose} title={project.title}>
            <div className="space-y-6">
                <div className="relative w-full h-56">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <p className="text-neutral-300">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4">
                        <h4 className="font-semibold mb-2 text-neutral-100">Details</h4>
                        <Row label="Periode" value={project.period} />
                        <Row label="Role" value={project.role} />
                    </div>
                    <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4">
                        <h4 className="font-semibold mb-2 text-neutral-100">Tech Stack & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {[...project.tech, ...project.skills].map((item) => (
                                <Badge key={item}>{item}</Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 border-t border-neutral-800 pt-4">
                    {project.links.github && (
                        <a
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition"
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGithub /> GitHub
                        </a>
                    )}
                    {project.links.demo && (
                        <a
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition"
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </Modal>
    );
}