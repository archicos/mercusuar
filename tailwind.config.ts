import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            // Gunakan variabel CSS dari layout.tsx
            sans: ["var(--font-sans)", "sans-serif"],
            mono: ["var(--font-geist-mono)", "ui-monospace"],
        },
        colors: {
            // PALET BARU: Abyss Teal (Biru Laut Dalam yang Hidup & Elegan)
            primary: {
                '50': '#ecfeff',
                '100': '#cffafe',
                '200': '#a5f3fc',
                '300': '#67e8f9',
                '400': '#22d3ee',
                '500': '#06b6d4', // Warna hover & aksen cerah
                '600': '#0891b2', // Warna utama untuk tombol & link
                '700': '#0e7490', // Warna yang lebih pekat & profesional
                '800': '#155e75',
                '900': '#164e63',
            },
            // PALET BARU: Cool Slate (Abu-abu Kebiruan yang Modern)
            secondary: {
                '50': '#f8fafc',   // Background light
                '100': '#f1f5f9',
                '200': '#e2e8f0',  // Border light
                '300': '#cbd5e1',
                '400': '#94a3b8',  // Teks sekunder light
                '500': '#64748b',
                '600': '#475569',  // Teks utama light
                '700': '#334155',  // Border dark
                '800': '#1e293b',  // Background card dark
                '900': '#0f172a',  // Background body dark
            },
            // PALET BARU: Warm Amber (Aksen Hangat untuk Kreativitas)
            accent: {
                '50': '#fffbeb',
                '100': '#fef3c7',
                '200': '#fde68a',
                '300': '#fcd34d',
                '400': '#fbbf24', // Warna aksen utama
                '500': '#f59e0b',
                '600': '#d97706',
                '700': '#b45309',
                '800': '#92400e',
                '900': '#78350f',
            },
        },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'), 
        // require('@tailwindcss/line-clamp'), 
    ],
};
export default config;