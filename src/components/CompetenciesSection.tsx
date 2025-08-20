import { FiSmartphone, FiClipboard, FiMic, FiUsers, FiCpu } from "react-icons/fi";

// 1. Definisikan tipe data untuk satu item Competency
type Competency = {
    name: string;
    icon: string; // Nama ikon sebagai string
};

// 2. Buat mapping dari nama ikon (string) ke komponen ikon React
const iconComponents: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    FiSmartphone: FiSmartphone,
    FiClipboard: FiClipboard,
    FiMic: FiMic,
    FiUsers: FiUsers,
    // Tambahkan fallback icon jika ikon tidak ditemukan
    Fallback: FiCpu,
};

// ============================================================================
// Komponen Section utama untuk menampilkan semua Competencies
// ============================================================================
export function CompetenciesSection({ competencies }: { competencies: Competency[] }) {
    return (
        <section aria-labelledby="competencies-heading">
        <h2 id="competencies-heading" className="text-2xl font-bold mb-4 text-secondary-700 dark:text-secondary-200">
            Competencies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {competencies.map((competency) => {
            // Ambil komponen ikon yang sesuai dari mapping
            const IconComponent = iconComponents[competency.icon] ?? iconComponents.Fallback;
            
            return (
                <div
                key={competency.name}
                className="
                    flex items-center gap-3 p-3 
                    bg-secondary-50 dark:bg-secondary-800 
                    rounded-lg 
                    border border-secondary-200 dark:border-secondary-700
                    transition-all duration-300
                    hover:scale-105 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700"
                >
                <IconComponent size={20} className="text-primary-500" />
                <span className="font-medium text-secondary-600 dark:text-secondary-300">
                    {competency.name}
                </span>
                </div>
            );
            })}
        </div>
        </section>
    );
}