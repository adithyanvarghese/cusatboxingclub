import React from 'react';
import Image from 'next/image';

interface SectionDividerProps {
  imageSrc?: string;
  altText?: string;
  height?: string;
}

export default function SectionDivider({
  imageSrc = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop",
  altText = "CUSAT Boxing Arena Action in South Kalamassery Ernakulam",
  height = "h-72 sm:h-96 md:h-[450px]"
}: SectionDividerProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="100vw"
        quality={75}
        loading="lazy"
        className="object-cover object-center filter contrast-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707] opacity-80" />
      <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
    </section>
  );
}
