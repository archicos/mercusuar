"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
    image: string;
    caption: string;
};

type JumbotronProps = {
    slides: Slide[];
};

const NavButton: React.FC<{ onClick: () => void; isPrev?: boolean }> = ({ onClick, isPrev }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-10 ${
        isPrev ? "left-3" : "right-3"
        }`}
        aria-label={isPrev ? "Previous slide" : "Next slide"}
    >
        {isPrev ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
    </button>
);

export function Jumbotron({ slides }: JumbotronProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = (api: EmblaCarouselType) => { 
        setSelectedIndex(api.selectedScrollSnap());
        };
        emblaApi.on("select", onSelect);
        return () => {
        emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="relative">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
            {slides.map((slide, index) => (
                <div className="relative flex-[0_0_100%] aspect-video" key={index}>
                <Image
                    src={slide.image}
                    alt={slide.caption}
                    fill={true}
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                    {slide.caption}
                </p>
                </div>
            ))}
            </div>
        </div>

        {/* Tombol Navigasi */}
        <NavButton onClick={scrollPrev} isPrev />
        <NavButton onClick={scrollNext} />

        {/* Indikator Titik (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex ? "w-4 bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
        </div>
    );
}