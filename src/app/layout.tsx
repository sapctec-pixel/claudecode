import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'VAPE SMOG | فيب سموك',
  description: 'متجر السجائر الإلكترونية والمعسل في المملكة العربية السعودية',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-stone-50 text-stone-900 font-[family-name:var(--font-cairo)] antialiased">
        {children}
      </body>
    </html>
  )
}
