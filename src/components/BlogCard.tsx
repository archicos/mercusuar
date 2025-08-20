// src/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiUser } from "react-icons/fi";

// Impor tipe data dari file JSON jika perlu, atau definisikan di sini
type Post = {
    slug: string;
    title: string;
    date: string;
    author: string;
    coverImage: string;
    excerpt: string;
};

export function BlogCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
        <article className="group grid md:grid-cols-3 gap-6 items-center transition-colors hover:bg-secondary-50 dark:hover:bg-secondary-800 p-4 rounded-lg">
            {/* Gambar */}
            <div className="md:col-span-1 aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
            <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            </div>
            {/* Konten Teks */}
            <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-secondary-700 dark:text-secondary-200 group-hover:text-primary-500 transition-colors">
                {post.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-secondary-500 dark:text-secondary-400 mt-2">
                <span className="flex items-center gap-1.5"><FiCalendar size={14}/>{post.date}</span>
                <span className="flex items-center gap-1.5"><FiUser size={14}/>{post.author}</span>
            </div>
            <p className="mt-2 text-secondary-600 dark:text-secondary-300 line-clamp-2">
                {post.excerpt}
            </p>
            </div>
        </article>
        </Link>
    );
}