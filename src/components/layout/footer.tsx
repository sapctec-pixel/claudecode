import Link from 'next/link'

const LINKS = {
  'المتجر': [
    { label: 'السجائر الإلكترونية', href: '/categories/vapes' },
    { label: 'العصائر والنكهات', href: '/categories/e-liquids' },
    { label: 'المعسل والشيشة', href: '/categories/hookah' },
    { label: 'العروض والتخفيضات', href: '/deals' },
  ],
  'الحساب': [
    { label: 'تسجيل الدخول', href: '/login' },
    { label: 'إنشاء حساب', href: '/register' },
    { label: 'طلباتي', href: '/account/orders' },
    { label: 'المفضلة', href: '/account/wishlist' },
  ],
  'الدعم': [
    { label: 'تواصل معنا', href: '/support' },
    { label: 'سياسة الإرجاع', href: '/returns' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'تتبع الشحنة', href: '/track' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-black tracking-widest">
              VAPE <span className="text-amber-500">SMOG</span>
            </span>
            <p className="mt-3 text-stone-600 text-sm leading-relaxed">
              متجرك المتخصص للسجائر الإلكترونية والمعسل في المملكة العربية السعودية.
            </p>
            <div className="flex gap-3 mt-4">
              {['انستقرام', 'سناب شات', 'تويتر'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-stone-500 hover:text-stone-900 transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-stone-900 mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 hover:text-stone-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© 2025 VAPE SMOG · جميع الحقوق محفوظة</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-900 transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-stone-900 transition">شروط الاستخدام</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-stone-100 text-stone-700 text-[10px] px-2 py-0.5 rounded">مدى</span>
            <span className="bg-stone-100 text-stone-700 text-[10px] px-2 py-0.5 rounded">Apple Pay</span>
            <span className="bg-stone-100 text-stone-700 text-[10px] px-2 py-0.5 rounded">VISA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
