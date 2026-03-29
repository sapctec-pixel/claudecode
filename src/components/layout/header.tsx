'use client'

import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/stores/cart-store'
import { CartIcon, SearchIcon } from '@/components/ui/gamer-icons'

const NAV_LINKS = [
  {
    label: 'السجائر الإلكترونية',
    href: '/categories/vapes',
    sub: ['أجهزة مفتوحة', 'بودات', 'جاهزة (Disposable)', 'مستلزمات'],
  },
  {
    label: 'العصائر',
    href: '/categories/e-liquids',
    sub: ['أملاح نيكوتين', 'نيكوتين حر', 'بلا نيكوتين'],
  },
  {
    label: 'المعسل والشيشة',
    href: '/categories/hookah',
    sub: ['Al Fakher', 'Mazaya', 'فحم'],
  },
  { label: 'إكسسوارات', href: '/categories/accessories', sub: [] },
  { label: 'العروض 🔥', href: '/deals', sub: [] },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const itemCount = useCartStore((s) => s.itemCount())

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      {/* Announcement bar */}
      <div className="bg-amber-600 text-stone-900 text-xs text-center py-1.5 px-4">
        🚚 شحن مجاني للطلبات فوق 150 ريال &nbsp;|&nbsp; 💳 ادفع بمدى وأبل باي
      </div>

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-black tracking-widest">
            VAPE <span className="text-amber-500">SMOG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => setActiveMenu(link.href)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition"
              >
                {link.label}
                {link.sub.length > 0 && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>
              {link.sub.length > 0 && activeMenu === link.href && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-stone-200 rounded-xl shadow-2xl py-2">
                  {link.sub.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="block px-4 py-2 text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 mr-auto">
          <button className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
            <SearchIcon size={20} />
          </button>
          <Link href="/cart" className="relative p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
            <CartIcon size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -left-0.5 bg-amber-500 text-stone-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/login"
            className="hidden sm:block px-4 py-2 text-sm font-semibold bg-amber-600 hover:bg-amber-700 rounded-xl transition"
          >
            تسجيل الدخول
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-stone-200">
            <Link
              href="/login"
              className="block px-3 py-2.5 text-sm font-semibold text-center bg-amber-600 hover:bg-amber-700 rounded-xl"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
