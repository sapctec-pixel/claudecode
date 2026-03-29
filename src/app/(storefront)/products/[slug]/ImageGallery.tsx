'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  altText: string
}

export function ImageGallery({ images, altText }: ImageGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-stone-200">
        <Image
          src={`/images/products/${images[activeIdx]}`}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
              activeIdx === i ? 'border-amber-600' : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <Image
              src={`/images/products/${img}`}
              alt={`${altText} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
