"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/img/rmevent/1.png",
  "/img/rmevent/2.png",
  "/img/rmevent/3.png",
  "/img/rmevent/4.png",
  "/img/rmevent/5.png",
  "/img/rmevent/6.png",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-auto h-[400px] flex justify-center items-center overflow-hidden mb-4">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          width={600} // Set a larger width to maintain aspect ratio
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
