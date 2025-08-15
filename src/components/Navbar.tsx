'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Camera, PenSquare, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/projects', icon: Briefcase, label: 'Projects' },
    { href: '/gallery', icon: Camera, label: 'Gallery' },
    { href: '/blog', icon: PenSquare, label: 'Blog' },
];

export default function Navbar() {
    const [hovered, setHovered] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <motion.nav
            className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 shadow-lg backdrop-blur-md"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{ width: hovered ? 320 : 64, height: 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
            <AnimatePresence>
            {hovered ? (
                <motion.div
                className="flex items-center gap-4 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                exit={{ opacity: 0 }}
                >
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} legacyBehavior>
                    <a className={`flex flex-col items-center gap-1 text-sm font-medium transition-colors duration-300 ${pathname === item.href ? 'text-primary-400' : 'text-neutral-400 hover:text-primary-400'}`}>
                        <item.icon size={20} />
                        {item.label}
                    </a>
                    </Link>
                ))}
                </motion.div>
            ) : (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                >
                <Menu className="text-neutral-200" />
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
        </header>
    );
}