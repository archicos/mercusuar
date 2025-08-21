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
            // Definisikan palet warna kustom
            primary: {
                '50': '#f0f4f8',
                '100': '#d9e2ec',
                '200': '#bcccdc',
                '300': '#9fb5cc',
                '400': '#829eb9',
                '500': '#6588a6',
                '600': '#506d89', // Warna utama yang bagus untuk tombol & link
                '700': '#40576d',
                '800': '#304152',
                '900': '#202c37',
            },
            // PALET BARU: Stone (Abu-abu Batu yang Hangat & Andal)
            secondary: {
                '50': '#fafaf9',   // Background light
                '100': '#f5f5f4',
                '200': '#e7e5e4',  // Border light
                '300': '#d6d3d1',
                '400': '#a8a29e',  // Teks sekunder light
                '500': '#78716c',
                '600': '#57534e',  // Teks utama light
                '700': '#44403c',  // Border dark
                '800': '#292524',  // Background card dark
                '900': '#1c1917',  // Background body dark
            },
            // PALET BARU: Golden Light (Aksen untuk Kreativitas & Inovasi)
            accent: {
                '50': '#fefce8',
                '100': '#fef9c3',
                '200': '#fef08a',
                '300': '#fde047',
                '400': '#facc15', // Warna aksen utama
                '500': '#eab308',
                '600': '#ca8a04',
                '700': '#a16207',
                '800': '#854d0e',
                '900': '#713f12',
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