// src/components/BeyondTheCodeSection.tsx

import { 
    FiCompass, FiShield, FiZap, FiMusic, FiMic, FiHeadphones, FiAward 
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Definisikan tipe data
type Fact = {
    title: string;
    description: string;
    icon: string;
    duration: string;
};

// Mapping ikon
const iconComponents: { [key: string]: IconType } = {
    FiCompass: FiCompass,
    FiShield: FiShield,
    FiZap: FiZap,
    FiMusic: FiMusic,
    FiMic: FiMic,
    FiHeadphones: FiHeadphones,
    Fallback: FiAward,
};

function FactCard({ fact }: { fact: Fact }) {
    const Icon = iconComponents[fact.icon] ?? iconComponents.Fallback;
    return (
        <div className="bg-secondary-50 dark:bg-secondary-800/50 p-6 rounded-xl border border-secondary-200 dark:border-secondary-700/50 flex flex-col items-start gap-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-md">
            <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
            <h3 className="font-bold text-secondary-700 dark:text-secondary-200">{fact.title}</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">{fact.description}</p>
        </div>
        {fact.duration && (
            <p className="mt-auto text-xs text-secondary-400 dark:text-secondary-500 pt-2">{fact.duration}</p>
        )}
        </div>
    );
}

export function BeyondTheCodeSection({ facts }: { facts: Fact[] }) {
    return (
        <section aria-labelledby="beyond-code-heading">
        <h2 id="beyond-code-heading" className="text-2xl font-bold mb-4 text-secondary-700 dark:text-secondary-200">
            Personal Facts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facts.map((fact) => (
            <FactCard key={fact.title} fact={fact} />
            ))}
        </div>
        </section>
    );
}