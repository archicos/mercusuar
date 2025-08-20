// src/components/ProjectFilters.tsx
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

// Definisikan tipe data yang diterima komponen
type Category = {
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

type ProjectFiltersProps = {
    categories: Category[];
    activeFilter: string;
    setActiveFilter: (category: string) => void;
};

export function ProjectFilters({ categories, activeFilter, setActiveFilter }: ProjectFiltersProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 flex-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {categories.map(({ name, icon: Icon }) => {
            const isActive = activeFilter === name;
            return (
            <button
                key={name}
                onClick={() => setActiveFilter(name)}
                // 2. PERUBAHAN UNTUK KONTRAST WARNA:
                //    - Logika styling disederhanakan dan diterapkan langsung pada tombol.
                className={`
                flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full 
                transition-colors duration-300 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary-900
                ${
                    isActive
                    ? 'bg-primary-500 text-white' // Aktif: Background tosca, teks putih.
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }
                `}
            >
                <Icon size={16} />
                <span>{name}</span>
            </button>
            );
        })}
        </div>
    );
}