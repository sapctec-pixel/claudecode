'use client'

import { useState } from 'react'
import { StarIcon } from '@/components/ui/gamer-icons'

interface Review {
  id: number
  name: string
  rating: number
  date: string
  text: string
}

interface Spec {
  label: string
  value: string
}

interface ProductTabsProps {
  description: string
  specs: Spec[]
  reviews: Review[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          size={14}
          className={i <= rating ? 'fill-amber-400 text-amber-700' : 'fill-zinc-700 text-zinc-700'}
        />
      ))}
    </div>
  )
}

export function ProductTabs({ description, specs, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description')

  const tabs = [
    { id: 'description' as const, label: 'وصف المنتج' },
    { id: 'specs' as const, label: 'المواصفات' },
    { id: 'reviews' as const, label: `التقييمات (${reviews.length})` },
  ]

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition ${
              activeTab === tab.id
                ? 'border-amber-600 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === 'description' && (
          <div className="prose prose-invert max-w-none">
            <p className="text-stone-700 leading-relaxed text-sm">{description}</p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-white/50'}
                  >
                    <td className="px-4 py-3 font-semibold text-stone-600 w-1/3 border-b border-stone-200">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 text-stone-900 border-b border-stone-200">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-stone-200 rounded-xl p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                  <span className="text-xs text-stone-400">{review.date}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
