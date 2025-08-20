import Image from "next/image";

// 1. Definisikan tipe data untuk satu item TechStack
type TechStack = {
    name: string;
    logo: string;
};

export function TechStackSection({ stacks }: { stacks: TechStack[] }) {
    return (
        <section aria-labelledby="tech-stack-heading">
        <h2 id="tech-stack-heading" className="text-2xl font-bold mb-4 text-secondary-700 dark:text-secondary-200">
            Tech Stacks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stacks.map((stack) => (
            <div
                key={stack.name}
                className="
                flex items-center gap-3 p-3 
                bg-secondary-50 dark:bg-secondary-800 
                rounded-lg 
                border border-secondary-200 dark:border-secondary-700
                transition-all duration-300
                hover:scale-105 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700"
            >
                <Image
                src={stack.logo}
                alt={stack.name}
                width={24}
                height={24}
                className="h-6 w-6" // Pastikan ukuran konsisten
                />
                <span className="font-medium text-secondary-600 dark:text-secondary-300">
                {stack.name}
                </span>
            </div>
            ))}
        </div>
        </section>
    );
}