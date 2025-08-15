"use client";
import { useState } from "react";
import posts from "@/data/blog.json";
import Modal from "@/components/Modal";

type Post = typeof posts[number];

export default function BlogPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section>
        <h1 className="h1 mb-6">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((b) => (
            <button
                key={b.id}
                onClick={() => setOpenId(b.id)}
                className="card overflow-hidden text-left hover:-translate-y-1 hover:shadow-xl transition"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt={b.title} className="thumb" />
                <div className="p-4">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.date}</p>
                <p className="muted mt-1 line-clamp-3">{b.excerpt}</p>
                </div>
            </button>
            ))}
        </div>

        {posts.map((b) => (
            <BlogModal
            key={b.id}
            open={openId === b.id}
            onClose={() => setOpenId(null)}
            post={b}
            />
        ))}
        </section>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="grid grid-cols-[120px_1fr] gap-3 py-1">
        <div className="text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
        </div>
    );
}

function BlogModal({
    open,
    onClose,
    post,
}: {
    open: boolean;
    onClose: () => void;
    post: Post;
}) {
    return (
        <Modal open={open} onClose={onClose} title={post.title}>
        <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src={post.image}
            alt={post.title}
            className="w-full h-56 object-cover rounded-xl"
            />
            <div className="glass rounded-xl p-4">
            <Row label="Tanggal" value={post.date} />
            <Row label="Periode" value={post.period} />
            <Row label="Lokasi" value={post.location} />
            </div>
            <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
        </div>
        </Modal>
    );
}
