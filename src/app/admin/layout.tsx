'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Warehouse,
  Tag,
  BarChart3,
  MessageSquare,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  Flame,
} from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'الرئيسية',
    items: [
      { label: 'لوحة التحكم', href: '/admin/dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'المتجر',
    items: [
      { label: 'المنتجات', href: '/admin/products', icon: Package },
      { label: 'الطلبات', href: '/admin/orders', icon: ShoppingBag },
      { label: 'العملاء', href: '/admin/customers', icon: Users },
      { label: 'المخزون', href: '/admin/inventory', icon: Warehouse },
    ],
  },
  {
    title: 'التسويق',
    items: [
      { label: 'العروض', href: '/admin/promotions', icon: Tag },
      { label: 'التقارير', href: '/admin/reports', icon: BarChart3 },
    ],
  },
  {
    title: 'الدعم',
    items: [
      { label: 'تذاكر الدعم', href: '/admin/support', icon: MessageSquare },
      { label: 'الإعدادات', href: '/admin/settings', icon: Settings },
    ],
  },
]

function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col h-full bg-white w-60 border-l border-stone-200">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
            <Flame size={16} className="text-stone-900" />
          </div>
          <div className="leading-tight">
            <span className="text-stone-900 font-bold text-sm block">VAPE SMOG</span>
            <span className="text-stone-600 text-xs">Admin</span>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-stone-600 hover:text-stone-900 lg:hidden">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navSections.map((section) => (
          <div key={section.title} className="mb-5">
            <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-amber-600/10 text-amber-500 border-r-2 border-amber-500'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-amber-500' : ''} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-stone-200">
        <p className="text-stone-400 text-xs text-center">VAPE SMOG Admin v1.0</p>
      </div>
    </aside>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-stone-50 text-stone-900 overflow-hidden" dir="rtl">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full z-50">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between px-4 lg:px-6 h-16 bg-white border-b border-stone-200 flex-shrink-0">
          {/* Left side (in RTL: visually right) */}
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-stone-600 hover:text-stone-900 p-1"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-base font-semibold text-stone-900">لوحة التحكم</h1>
          </div>

          {/* Right side (in RTL: visually left) */}
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <button className="relative text-stone-600 hover:text-stone-900 p-2 rounded-lg hover:bg-stone-100 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 rounded-full text-[10px] font-bold flex items-center justify-center text-stone-900 leading-none">
                3
              </span>
            </button>

            {/* Admin Avatar + Name */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-stone-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-sm font-bold text-stone-900 flex-shrink-0">
                أ
              </div>
              <span className="text-sm font-medium text-stone-900 hidden sm:block">أدمن</span>
              <ChevronDown size={14} className="text-stone-600 hidden sm:block" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-stone-50 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
