'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

// 1. Definisikan props yang benar di sini
interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
    return (
        // 2. Gunakan 'open' untuk mengontrol AnimatePresence
        <AnimatePresence>
        {open && (
            <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Konten Modal */}
            <motion.div
                className="relative w-full max-w-3xl rounded-lg border border-neutral-700 bg-neutral-900 shadow-xl max-h-[90vh] flex flex-col"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                role="dialog"
                aria-modal="true"
            >
                {/* Header Modal */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-800 flex-shrink-0">
                {/* 3. Tampilkan title di sini */}
                <h2 className="text-xl font-bold text-neutral-50">{title}</h2>
                <button
                    onClick={onClose}
                    className="text-neutral-400 transition-colors hover:text-white"
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