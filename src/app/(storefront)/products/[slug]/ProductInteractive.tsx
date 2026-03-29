'use client'

import { useState } from 'react'
import { Zap, Minus, Plus } from 'lucide-react'
import { CartIcon, HeartIcon, ShareIcon } from '@/components/ui/gamer-icons'

interface ProductInteractiveProps {
  flavors: string[]
  initialPrice: number
  oldPrice: number | null
}

export function ProductInteractive({ flavors, initialPrice, oldPrice }: ProductInteractiveProps) {
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0] ?? '')
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const discount = oldPrice
    ? Math.round(((oldPrice - initialPrice) / oldPrice) * 100)
    : null

  function handleAddToCart() {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="space-y-5">
      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-black text-stone-900">{initialPrice}</span>
        <span className="text-sm text-stone-600">ر.س</span>
        {oldPrice && (
          <>
            <span className="text-lg text-stone-400 line-through">{oldPrice} ر.س</span>
            <span className="bg-amber-600/20 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-600/30">
              -{discount}%
            </span>
          </>
        )}
      </div>

      {/* Flavor Selector */}
      {flavors.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-stone-700 mb-2.5">
            النكهة:{' '}
            <span className="text-stone-900">{selectedFlavor}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {flavors.map((flavor) => (
              <button
                key={flavor}
                onClick={() => setSelectedFlavor(flavor)}
                className={`text-sm px-4 py-2 rounded-xl border transition ${
                  selectedFlavor === flavor
                    ? 'bg-amber-600 border-amber-600 text-stone-900 font-semibold'
                    : 'bg-stone-100 border-stone-200 text-stone-600 hover:border-zinc-500 hover:text-stone-900'
                }`}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-sm font-semibold text-stone-700 mb-2.5">الكمية</p>
        <div className="flex items-center gap-0 w-fit rounded-xl border border-stone-200 overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-stone-200 transition text-stone-600 hover:text-stone-900"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 h-10 flex items-center justify-center bg-white font-bold text-stone-900 text-sm">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-stone-200 transition text-stone-600 hover:text-stone-900"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleAddToCart}
          className={`flex-1 flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl transition ${
            addedToCart
              ? 'bg-green-600 text-stone-900'
              : 'bg-amber-600 hover:bg-amber-700 text-stone-900'
          }`}
        >
          <CartIcon size={20} />
          {addedToCart ? 'تمت الإضافة ✓' : 'أضف للسلة'}
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition">
          <Zap className="w-5 h-5" />
          اشتري الآن
        </button>
      </div>

      {/* Wishlist + Share */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition ${
            wishlisted
              ? 'border-amber-600/50 text-amber-700 bg-amber-600/10'
              : 'border-stone-200 text-stone-600 hover:border-zinc-500 hover:text-stone-900'
          }`}
        >
          <HeartIcon size={16} className={wishlisted ? 'fill-amber-500 text-amber-500' : ''} />
          {wishlisted ? 'في المفضلة' : 'أضف للمفضلة'}
        </button>
        <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:border-zinc-500 hover:text-stone-900 transition">
          <ShareIcon size={16} />
          مشاركة
        </button>
      </div>
    </div>
  )
}
