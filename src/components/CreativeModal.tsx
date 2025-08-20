'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiExternalLink,
    FiInfo,
    FiTool,
    FiAward,
    FiMaximize,
    FiX,
} from 'react-icons/fi';
import type { CreativeWork } from '@/app/creative/page';
import Modal from '@/components/Modal'; // Pastikan komponen Modal generik ada

// Mapping untuk ikon-ikon di bagian skills
const skillIcons: Record<string, React.ComponentType> = {
    'Brand Identity': FiAward,
    'Logo Design': FiAward,
    'UI/UX Principles': FiAward,
    Cinematography: FiAward,
    'Color Grading': FiAward,
    'Sound Design': FiAward,
    'Graphic Design': FiAward,
    Typography: FiAward,
    'Visual Hierarchy': FiAward,
    'User Research': FiAward,
    Wireframing: FiAward,
    Prototyping: FiAward,
    'Design System': FiAward,
    Default: FiAward, // Ikon fallback
};

export function CreativeModal({ work, onClose }: { work: CreativeWork; onClose: () => void }) {
    const [fullscreen, setFullscreen] = useState(false);

    // Ambil link primer dari data
    const primaryLink = work.links.primary;

    return (
        <>
        {/* ======================================================================== */}
        {/* Modal Utama */}
        {/* ======================================================================== */}
        <Modal open={!fullscreen} onClose={onClose} title={work.title}>
            <div className="space-y-6">
            {/* Gambar dengan tombol fullscreen */}
            <div className="relative group aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <button
                onClick={() => setFullscreen(true)}
                className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="View image fullscreen"
                >
                <FiMaximize className="text-white h-8 w-8 drop-shadow-lg" />
                </button>
            </div>

            {/* Deskripsi */}
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{work.description}</p>

            {/* Detail & Tools */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary-50 dark:bg-secondary-900 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200">
                    <FiInfo />
                    Details
                </h4>
                <div className="mt-2 space-y-2 text-sm">
                    <p>
                    <strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Role:</strong> {work.role}
                    </p>
                    <p>
                    <strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Period:</strong> {work.period}
                    </p>
                    <p>
                    <strong className="text-secondary-500 dark:text-secondary-400 w-20 inline-block">Updated:</strong> {work.lastUpdated}
                    </p>
                </div>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-900 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200">
                    <FiTool />
                    Tools Used
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                    {work.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2" title={tool.name}>
                        <Image src={tool.logo} alt={tool.name} width={20} height={20} />
                        <span className="text-sm text-secondary-600 dark:text-secondary-300">{tool.name}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Skills & Concepts */}
            <div>
                <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200">
                <FiAward />
                Skills & Concepts
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                {work.skills.map((skill) => {
                    const Icon = skillIcons[skill] || skillIcons.Default;
                    return (
                    <span
                        key={skill}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full"
                    >
                        <Icon />
                        {skill}
                    </span>
                    );
                })}
                </div>
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-3 border-t border-secondary-200 dark:border-secondary-700 pt-4">
                {primaryLink && (
                <a
                    href={primaryLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary-800"
                >
                    <FiExternalLink /> {primaryLink.label}
                </a>
                )}
            </div>
            </div>
        </Modal>

        {/* ======================================================================== */}
        {/* Tampilan Gambar Fullscreen */}
        {/* ======================================================================== */}
        <AnimatePresence>
            {fullscreen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                onClick={() => setFullscreen(false)} // Klik di mana saja untuk menutup
            >
                <motion.div
                layoutId={`creative-image-${work.id}`} // Animasi dari kartu (opsional)
                className="relative"
                >
                <Image
                    src={work.image}
                    alt={work.title}
                    width={1920}
                    height={1080}
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                />
                </motion.div>
                <button
                onClick={() => setFullscreen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close fullscreen image"
                >
                <FiX size={32} />
                </button>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}