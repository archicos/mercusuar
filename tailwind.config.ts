import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
        fontFamily: {
            sans: ['var(--font-geist-sans)'],
            mono: ['var(--font-geist-mono)'],
        },
        colors: {
            primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6', // Warna biru utama
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
            },
        },
        keyframes: {
            "fade-in": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
            },
            "slide-in-up": {
                "0%": { transform: "translateY(20px)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
            },
        },
        animation: {
            "fade-in": "fade-in 0.5s ease-out forwards",
            "slide-in-up": "slide-in-up 0.5s ease-out forwards",
        },
        },
    },
    plugins: [],
} satisfies Config