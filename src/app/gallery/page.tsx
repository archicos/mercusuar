"use client";
import { useState } from "react";
import galleryData from "@/data/gallery.json";
import { GalleryCard } from "@/components/GalleryCard";
import { GalleryModal } from "@/components/GalleryModal";
import { AnimatePresence } from "framer-motion";
import { FiClock } from "react-icons/fi";

export type GalleryItem = (typeof galleryData)[number];

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const lastUpdated = "August 20, 2025";

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header Halaman */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary-700 dark:text-secondary-100">Gallery</h1>
            <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            A collection of moments captured through my lens.
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
            <FiClock size={14} />
            <span>Last updated on {lastUpdated}</span>
            </div>
        </div>

        {/* Grid Foto */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} onSelect={() => setSelectedItem(item)} />
            ))}
        </div>

        {/* Modal Detail Foto */}
        <AnimatePresence>
            {selectedItem && (
            <GalleryModal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
            )}
        </AnimatePresence>
        </main>
    );
}