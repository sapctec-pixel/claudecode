'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Star, ShoppingCart } from 'lucide-react'

interface WishlistProduct {
  id: number
  name: string
  nameAr: string
  price: number
  oldPrice: number | null
  badge: string | null
  rating: number
  reviews: number
  category: string
  img: string
}

const INITIAL_WISHLIST: WishlistProduct[] = [
  { id: 1, name: 'Vaporesso XROS 4', nameAr: 'فيبوريسو زروس 4', price: 89, oldPrice: 120, badge: 'الأكثر مبيعاً', rating: 4.8, reviews: 234, category: 'بود سيستم', img: '/images/products/012077c02fb08e4e10b39e4efccd8d33_500x500.jpg' },
  { id: 2, name: 'Lost Mary BM600', nameAr: 'لوست ماري BM600', price: 35, oldPrice: null, badge: null, rating: 4.6, reviews: 189, category: 'ديسبوزابل', img: '/images/products/02d5c9c362eb88e1274a997e8b83c4f5_500x500.jpg' },
  { id: 3, name: 'Al Fakher Crown Bar', nameAr: 'الفاخر كراون بار', price: 45, oldPrice: 60, badge: 'عرض', rating: 4.7, reviews: 312, category: 'ديسبوزابل', img: '/images/products/034028758dec6cdbb49d5fae8c34e2f7_500x500.jpg' },
  { id: 4, name: 'Nasty Juice Salt 30ml', nameAr: 'ناستي جوس سولت', price: 28, oldPrice: null, badge: 'جديد', rating: 4.5, reviews: 87, category: 'سولت نيك', img: '/images/products/03db20b7394aa9a6d8415d1472906e4e_500x500.jpg' },
  { id: 5, name: 'GeekVape Aegis Legend 3', nameAr: 'جيك فيب ايجيس', price: 210, oldPrice: 280, badge: '-25%', rating: 4.9, reviews: 156, category: 'مود', img: '/images/products/03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg' },
  { id: 6, name: 'Smok RPM 5 Pro', nameAr: 'سموك RPM 5 برو', price: 165, oldPrice: null, badge: null, rating: 4.4, reviews: 98, category: 'كيت', img: '/images/products/05c568106e580221dffb7fbfd9ddf2d6_500x500.jpg' },
]

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>(INITIAL_WISHLIST)

  function removeItem(id: number) {
    setWishlist((prev) => prev.filter((p) => p.id !== id))
  }

  if (wishlist.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-black text-stone-900 mb-6">المفضلة</h1>
        <div className="bg-white border border-stone-200 rounded-2xl p-16 text-center">
          <Heart className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
          <h2 className="text-stone-900 font-bold text-lg mb-2">قائمة المفضلة فارغة</h2>
          <p className="text-stone-500 text-sm mb-6">لم تضف أي منتجات إلى المفضلة بعد</p>
          <Link
            href="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold px-8 py-3 rounded-xl transition"
          >
            تصفح المنتجات
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-stone-900">المفضلة</h1>
        <span className="text-stone-500 text-sm">{wishlist.length} منتج</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((p) => (
          <div
            key={p.id}
            className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative aspect-square bg-stone-100">
              <Image
                src={p.img}
                alt={p.nameAr}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {p.badge && (
                <span className="absolute top-2 right-2 bg-amber-600 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                  {p.badge}
                </span>
              )}
              {/* Remove button */}
              <button
                onClick={() => removeItem(p.id)}
                aria-label="إزالة من المفضلة"
                className="absolute top-2 left-2 z-10 w-8 h-8 bg-white/80 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors group/heart"
              >
                <Heart className="w-4 h-4 text-amber-700 group-hover/heart:text-stone-900 fill-amber-400 group-hover/heart:fill-white" />
              </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-stone-500 text-[11px] mb-0.5">{p.category}</p>
              <h3 className="text-sm font-semibold text-stone-900 leading-tight line-clamp-2">{p.nameAr}</h3>
              <p className="text-stone-600 text-[11px] mt-0.5">{p.name}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-700" />
                <span className="text-[11px] text-stone-600">{p.rating} ({p.reviews})</span>
              </div>

              {/* Price + add to cart */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold text-stone-900">{p.price}</span>
                  <span className="text-xs text-stone-600">ر.س</span>
                  {p.oldPrice && (
                    <span className="text-xs text-stone-400 line-through">{p.oldPrice}</span>
                  )}
                </div>
                <button className="flex items-center gap-1 text-[11px] font-semibold bg-amber-600 hover:bg-amber-700 px-3 py-1.5 rounded-lg transition">
                  <ShoppingCart className="w-3 h-3" />
                  أضف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
