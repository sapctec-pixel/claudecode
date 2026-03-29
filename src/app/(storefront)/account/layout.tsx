'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { UserIcon, HeartIcon, BellIcon, FlagIcon, EditIcon } from '@/components/ui/gamer-icons'

const NAV_LINKS = [
  { href: '/account/profile', label: 'الملف الشخصي', icon: EditIcon },
  { href: '/account/orders', label: 'طلباتي', icon: FlagIcon },
  { href: '/account/wishlist', label: 'المفضلة', icon: HeartIcon },
  { href: '/account/addresses', label: 'العناوين', icon: FlagIcon },
  { href: '/account/notifications', label: 'الإشعارات', icon: BellIcon },
]

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileTab, setMobileTab] = useState<string>(pathname)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-stone-900 font-black text-xs">VS</span>
            </div>
            <span className="text-stone-900 font-black tracking-widest text-base">VAPE SMOG</span>
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-600 text-sm">حسابي</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">

          {/* ── Desktop Sidebar ── */}
          <aside className="hidden md:flex flex-col w-56 shrink-0">
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden sticky top-8">
              {/* User info */}
              <div className="p-5 border-b border-stone-200">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-3">
                  <UserIcon size={24} className="text-stone-900" />
                </div>
                <p className="text-stone-900 font-bold text-sm">محمد عبدالله</p>
                <p className="text-stone-500 text-xs mt-0.5" dir="ltr">+966 05XX XXXX</p>
              </div>

              {/* Links */}
              <nav className="p-2">
                {NAV_LINKS.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href || pathname.startsWith(href + '/')
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition mb-0.5 ${
                        active
                          ? 'bg-amber-600/15 text-amber-500'
                          : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? 'text-amber-500' : ''}`} />
                      {label}
                    </Link>
                  )
                })}
              </nav>

              {/* Logout */}
              <div className="p-2 border-t border-stone-200">
                <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-700 hover:bg-amber-600/10 transition">
                  <LogOut className="w-4 h-4" />
                  خروج
                </button>
              </div>
            </div>
          </aside>

          {/* ── Content ── */}
          <div className="flex-1 min-w-0">
            {/* Mobile Tabs */}
            <div className="md:hidden mb-6 overflow-x-auto">
              <div className="flex gap-1 bg-white border border-stone-200 rounded-xl p-1 min-w-max">
                {NAV_LINKS.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href || pathname.startsWith(href + '/')
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileTab(href)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                        active
                          ? 'bg-amber-600 text-stone-900'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </Link>
                  )
                })}
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-amber-700 whitespace-nowrap">
                  <LogOut className="w-3.5 h-3.5" />
                  خروج
                </button>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
