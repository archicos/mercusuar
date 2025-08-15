"use client";
import { useState } from "react";
import items from "@/data/gallery.json";
import Modal from "@/components/Modal";

type Item = typeof items[number];

export default function GalleryPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section>
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((g) => (
            <button
                key={g.id}
                onClick={() => setOpenId(g.id)}
                className="bg-white rounded-xl border border-slate-200 shadow overflow-hidden text-left hover:-translate-y-0.5 hover:shadow-lg transition"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.image} alt={g.title} className="w-full h-44 object-cover" />
                <div className="p-3">
                <h3 className="font-semibold">{g.title}</h3>
                <p className="text-slate-600 text-sm">{g.location}</p>
                </div>
            </button>
            ))}
        </div>

        {items.map((g) => (
            <GalleryModal
            key={g.id}
            open={openId === g.id}
            onClose={() => setOpenId(null)}
            item={g}
            />
        ))}
        </section>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="grid grid-cols-[120px_1fr] gap-3 py-1">
        <div className="text-slate-500">{label}</div>
        <div className="font-medium">{value}</div>
        </div>
    );
}

function GalleryModal({
    open,
    onClose,
    item,
}: {
    open: boolean;
    onClose: () => void;
    item: Item;
}) {
    return (
        <Modal open={open} onClose={onClose} title={item.title}>
        <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover rounded-lg"
            />
            <p className="text-slate-700">{item.description}</p>
            <div className="bg-white rounded-lg border border-slate-200 shadow p-4">
            <h4 className="font-semibold mb-2">Info</h4>
            <Row label="Periode" value={item.period} />
            <Row label="Lokasi" value={item.location} />
            </div>
        </div>
        </Modal>
    );
}
