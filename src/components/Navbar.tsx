'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Briefcase, Camera, PenSquare, Sparkles } from 'lucide-react';

// 1. Struktur data menu yang sudah diperbarui
const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/projects', icon: Briefcase, label: 'Projects' },
    { href: '/creative', icon: Sparkles, label: 'Creative' },
    { href: '/gallery', icon: Camera, label: 'Gallery' },
    { href: '/blog', icon: PenSquare, label: 'Blog' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
            <nav className="rounded-full border border-secondary-200/50 dark:border-secondary-700/50 bg-white/70 dark:bg-secondary-800/50 p-2 shadow-lg backdrop-blur-md">
                <ul className="flex items-center justify-center gap-1 sm:gap-2"> {/* Sedikit mengurangi gap di mobile */}
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                    <li key={item.href} className="relative">
                        <Link
                        href={item.href}
                        className={`
                            flex items-center gap-2 rounded-full 
                            p-3 sm:px-4 sm:py-2  // <-- PERUBAHAN DI SINI: Padding berbeda untuk mobile & desktop
                            text-sm font-medium transition-colors duration-300 
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 
                            ${
                            isActive
                                ? 'text-primary-600 dark:text-primary-300'
                                : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-500'
                            }
                        `}
                        >
                        <item.icon size={18} />
                        {/* PERUBAHAN DI SINI: Label hanya tampil di layar 'sm' ke atas */}
                        <span className="hidden sm:inline">{item.label}</span>
                        </Link>

                        {isActive && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 z-[-1] bg-primary-100 dark:bg-primary-900/50"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                        )}
                    </li>
                    );
                })}
                </ul>
            </nav>
        </header>
    );
}