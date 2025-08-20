// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/data/blog.json";
import ReactMarkdown from "react-markdown";
import { FiCalendar, FiUser, FiMapPin } from "react-icons/fi";

// Fungsi untuk mendapatkan data post berdasarkan slug
function getPostBySlug(slug: string) {
    return blogData.find((post) => post.slug === slug);
}

// Props untuk halaman dinamis
type PageProps = {
    params: {
        slug: string;
    };
};

export default function PostPage({ params }: PageProps) {
    const post = getPostBySlug(params.slug);

    // Jika post tidak ditemukan, tampilkan halaman 404
    if (!post) {
        notFound();
    }

    return (
        <main className="container mx-auto max-w-3xl px-4 py-8">
        <article>
            {/* Header Tulisan */}
            <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-800 dark:text-secondary-100 leading-tight">
                {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-secondary-500 dark:text-secondary-400 mt-4">
                <span className="flex items-center gap-1.5"><FiCalendar size={14}/>{post.date}</span>
                <span className="flex items-center gap-1.5"><FiUser size={14}/>{post.author}</span>
                <span className="flex items-center gap-1.5"><FiMapPin size={14}/>{post.location}</span>
            </div>
            </header>

            {/* Gambar Utama */}
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-8">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>

            {/* Konten Markdown */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Galeri Gambar Tambahan */}
            {post.images.length > 0 && (
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                {post.images.map((img, index) => (
                    <div key={index} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                    <Image src={img} alt={`${post.title} gallery image ${index + 1}`} fill className="object-cover" />
                    </div>
                ))}
                </div>
            </div>
            )}
        </article>
        </main>
    );
}