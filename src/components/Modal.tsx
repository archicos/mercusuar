'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

// Tipe props tidak berubah, sudah bagus.
interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
    return (
        <AnimatePresence>
        {open && (
            <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {/* 1. Overlay dengan warna yang konsisten */}
            <motion.div
                className="absolute inset-0 bg-secondary-900/70 backdrop-blur-sm"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* 2. Konten Modal dengan styling baru */}
            <motion.div
                className="relative w-full max-w-3xl rounded-xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 shadow-xl max-h-[90vh] flex flex-col"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                role="dialog"
                aria-modal="true"
            >
                {/* Header Modal */}
                <div className="flex items-center justify-between p-4 border-b border-secondary-200 dark:border-secondary-700 flex-shrink-0">
                {/* 3. Judul dengan warna primer */}
                <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400">{title}</h2>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full text-secondary-400 transition-colors hover:text-secondary-800 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>
                </div>

                {/* Body Modal (Bisa di-scroll) */}
                <div className="p-6 overflow-y-auto">
                {children}
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}