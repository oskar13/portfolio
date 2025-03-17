"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  interval?: number; // Slide duration in milliseconds (default 5000ms)
}

export default function Slideshow({ images, interval = 5000 }: SlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-auto h-[400px] flex justify-center items-center overflow-hidden mb-4">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          width={600}
          height={300}
          alt="Slideshow Image"
          className={`absolute h-full w-auto object-contain rounded-lg transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
