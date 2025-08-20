// src/components/GalleryCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/app/gallery/page";
import { FiEye } from "react-icons/fi";

type GalleryCardProps = {
    item: GalleryItem;
    onSelect: () => void;
};

export function GalleryCard({ item, onSelect }: GalleryCardProps) {
    return (
        <motion.button
        onClick={onSelect}
        className="group relative block w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
        >
        <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiEye className="text-white h-8 w-8" />
        </div>
        </motion.button>
    );
}