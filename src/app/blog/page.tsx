// src/app/blog/page.tsx
import blogData from "@/data/blog.json";
import { BlogCard } from "@/components/BlogCard";
import { FiClock } from "react-icons/fi";

export default function BlogPage() {
    const lastUpdated = "August 20, 2025";

    return (
        <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header Halaman */}
        <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-secondary-700 dark:text-secondary-100">My Blog</h1>
            <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            Sharing my journey in software, technology, and creative pursuits.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
            <FiClock size={14} />
            <span>Last updated on {lastUpdated}</span>
            </div>
        </div>

        {/* Daftar Postingan Blog */}
        <div className="space-y-8">
            {blogData.map((post) => (
            <BlogCard key={post.slug} post={post} />
            ))}
        </div>
        </main>
    );
}