// src/components/GalleryModal.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiCalendar,
    FiCamera,
    FiMapPin,
    FiMaximize,
    FiUser,
    FiX,
} from "react-icons/fi";
import type { GalleryItem } from "@/app/gallery/page";
import Modal from "@/components/Modal";

export function GalleryModal({ item, onClose }: { item: GalleryItem; onClose: () => void; }) {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <>
        <Modal open={!fullscreen} onClose={onClose} title={item.title}>
            <div className="flex flex-col md:flex-row gap-6">
            {/* Kolom Kiri: Gambar */}
            <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative group w-full max-h-[70vh] flex items-center justify-center">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={800}
                    className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                <button
                    onClick={() => setFullscreen(true)}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="View image fullscreen"
                >
                    <FiMaximize className="text-white h-8 w-8 drop-shadow-lg" />
                </button>
                </div>
            </div>

            {/* Kolom Kanan: Detail Foto */}
            <div className="w-full md:w-1/2 space-y-4">
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{item.description}</p>
                
                <div className="border-t border-secondary-200 dark:border-secondary-700 pt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                    <FiCalendar className="h-4 w-4 mt-0.5 text-secondary-500"/>
                    <div><strong className="block text-secondary-700 dark:text-secondary-200">Date Taken</strong>{item.dateTaken}</div>
                </div>
                <div className="flex items-start gap-3">
                    <FiMapPin className="h-4 w-4 mt-0.5 text-secondary-500"/>
                    <div><strong className="block text-secondary-700 dark:text-secondary-200">Location</strong>
                    <a href={item.locationLink} target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">{item.location}</a>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <FiUser className="h-4 w-4 mt-0.5 text-secondary-500"/>
                    <div><strong className="block text-secondary-700 dark:text-secondary-200">Photographer</strong>{item.photographer}</div>
                </div>
                </div>
                
                <div className="border-t border-secondary-200 dark:border-secondary-700 pt-4">
                <h4 className="flex items-center gap-2 font-semibold text-secondary-700 dark:text-secondary-200 mb-2"><FiCamera/>Tech Specs</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <span><strong>Model:</strong> {item.exif.model}</span>
                    <span><strong>Lens:</strong> {item.exif.lens}</span>
                    <span><strong>Aperture:</strong> {item.exif.aperture}</span>
                    <span><strong>Shutter:</strong> {item.exif.shutterSpeed}</span>
                    <span><strong>ISO:</strong> {item.exif.iso}</span>
                </div>
                </div>
            </div>
            </div>
        </Modal>

        {/* Tampilan Gambar Fullscreen */}
        <AnimatePresence>
            {fullscreen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                onClick={() => setFullscreen(false)}
            >
                <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                />
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