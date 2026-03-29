'use client'

import { useState } from 'react'
import {
  Store,
  Truck,
  CreditCard,
  Bell,
  Shield,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Smartphone,
  Monitor,
  LogOut,
} from 'lucide-react'

type Tab = 'المتجر' | 'الشحن' | 'الدفع' | 'الإشعارات' | 'الأمان'

const TABS: { label: Tab; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { label: 'المتجر', icon: Store },
  { label: 'الشحن', icon: Truck },
  { label: 'الدفع', icon: CreditCard },
  { label: 'الإشعارات', icon: Bell },
  { label: 'الأمان', icon: Shield },
]

interface ShippingZone {
  id: string
  name: string
  rate: number
  freeAbove: number
}

interface Session {
  id: string
  device: string
  type: 'mobile' | 'desktop'
  location: string
  lastActive: string
  current: boolean
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${checked ? 'bg-green-500' : 'bg-zinc-600'}`}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${checked ? 'right-1' : 'left-1'}`}
      />
    </button>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('المتجر')

  // Store tab state
  const [storeName, setStoreName] = useState('VAPE SMOG')
  const [storeDesc, setStoreDesc] = useState('أفضل متجر للسجائر الإلكترونية في المملكة العربية السعودية')
  const [storePhone, setStorePhone] = useState('+966 50 123 4567')
  const [storeEmail, setStoreEmail] = useState('support@vapesmog.sa')
  const [currency, setCurrency] = useState('SAR')
  const [timezone, setTimezone] = useState('Asia/Riyadh')

  // Shipping tab state
  const [zones, setZones] = useState<ShippingZone[]>([
    { id: 'Z1', name: 'الرياض', rate: 15, freeAbove: 300 },
    { id: 'Z2', name: 'جدة', rate: 20, freeAbove: 350 },
    { id: 'Z3', name: 'الدمام', rate: 20, freeAbove: 350 },
    { id: 'Z4', name: 'باقي المناطق', rate: 30, freeAbove: 500 },
  ])

  function deleteZone(id: string) {
    setZones((prev) => prev.filter((z) => z.id !== id))
  }

  // Payment tab state
  const [payments, setPayments] = useState({
    mada: true,
    applePay: true,
    visa: true,
    bankTransfer: true,
  })
  const [bankAccount, setBankAccount] = useState('SA29 8000 0001 6080 1016 7519')

  // Notifications tab state
  const [notifs, setNotifs] = useState({
    smsNewOrder: true,
    smsOrderShipped: true,
    smsOrderDelivered: false,
    emailNewOrder: true,
    emailLowStock: true,
    emailNewCustomer: false,
    emailWeeklyReport: true,
  })

  // Security tab state
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [showCurrentPass, setShowCurrentPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)
  const [twoFA, setTwoFA] = useState(false)
  const [sessions] = useState<Session[]>([
    { id: 'S1', device: 'Chrome - Windows 11', type: 'desktop', location: 'الرياض، السعودية', lastActive: 'الآن', current: true },
    { id: 'S2', device: 'Safari - iPhone 15', type: 'mobile', location: 'جدة، السعودية', lastActive: 'منذ ساعتين', current: false },
    { id: 'S3', device: 'Chrome - MacBook', type: 'desktop', location: 'الرياض، السعودية', lastActive: 'أمس', current: false },
  ])

  const inputClass = 'w-full bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500'
  const labelClass = 'block text-stone-600 text-sm mb-1.5'

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">الإعدادات</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 bg-white border border-stone-200 rounded-xl p-1">
        {TABS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === label
                ? 'bg-amber-600 text-stone-900'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        {/* ---- STORE ---- */}
        {activeTab === 'المتجر' && (
          <div className="space-y-5 max-w-xl">
            <h2 className="text-stone-900 font-semibold text-lg">إعدادات المتجر</h2>
            <div>
              <label className={labelClass}>اسم المتجر</label>
              <input value={storeName} onChange={(e) => setStoreName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>وصف المتجر</label>
              <textarea
                rows={3}
                value={storeDesc}
                onChange={(e) => setStoreDesc(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>رقم الهاتف</label>
                <input value={storePhone} onChange={(e) => setStorePhone(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>البريد الإلكتروني</label>
                <input type="email" value={storeEmail} onChange={(e) => setStoreEmail(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>العملة</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
                  <option value="SAR">ريال سعودي (SAR)</option>
                  <option value="USD">دولار أمريكي (USD)</option>
                  <option value="AED">درهم إماراتي (AED)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>المنطقة الزمنية</label>
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className={inputClass}>
                  <option value="Asia/Riyadh">توقيت الرياض (GMT+3)</option>
                  <option value="Asia/Dubai">توقيت دبي (GMT+4)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              حفظ الإعدادات
            </button>
          </div>
        )}

        {/* ---- SHIPPING ---- */}
        {activeTab === 'الشحن' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-stone-900 font-semibold text-lg">مناطق الشحن والأسعار</h2>
              <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 px-4 py-2 rounded-lg text-sm transition-colors">
                <Plus size={15} />
                إضافة منطقة
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    {['المنطقة', 'سعر الشحن (ر.س)', 'شحن مجاني فوق (ر.س)', 'إجراء'].map((h) => (
                      <th key={h} className="py-3 px-4 text-right text-stone-600 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {zones.map((z) => (
                    <tr key={z.id} className="border-b border-stone-200/50">
                      <td className="py-3 px-4 text-stone-900 font-medium">{z.name}</td>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          defaultValue={z.rate}
                          className="w-24 bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number"
                          defaultValue={z.freeAbove}
                          className="w-24 bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => deleteZone(z.id)}
                          className="p-1.5 text-stone-600 hover:text-amber-700 hover:bg-stone-200 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              حفظ
            </button>
          </div>
        )}

        {/* ---- PAYMENT ---- */}
        {activeTab === 'الدفع' && (
          <div className="space-y-5 max-w-xl">
            <h2 className="text-stone-900 font-semibold text-lg">طرق الدفع</h2>
            <div className="space-y-3">
              {[
                { key: 'mada' as const, label: 'مدى', desc: 'بطاقات الدفع السعودية' },
                { key: 'applePay' as const, label: 'Apple Pay', desc: 'الدفع عبر Apple Pay' },
                { key: 'visa' as const, label: 'VISA / Mastercard', desc: 'بطاقات الائتمان الدولية' },
                { key: 'bankTransfer' as const, label: 'تحويل بنكي', desc: 'تحويل مباشر لحساب المتجر' },
              ].map((p) => (
                <div key={p.key} className="flex items-center justify-between bg-stone-100 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-stone-900 font-medium">{p.label}</p>
                    <p className="text-stone-600 text-xs">{p.desc}</p>
                  </div>
                  <Toggle
                    checked={payments[p.key]}
                    onChange={(v) => setPayments({ ...payments, [p.key]: v })}
                  />
                </div>
              ))}
            </div>
            {payments.bankTransfer && (
              <div>
                <label className={labelClass}>رقم الحساب البنكي (IBAN)</label>
                <input
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  className={`${inputClass} font-mono`}
                />
              </div>
            )}
            <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              حفظ
            </button>
          </div>
        )}

        {/* ---- NOTIFICATIONS ---- */}
        {activeTab === 'الإشعارات' && (
          <div className="space-y-6 max-w-xl">
            <h2 className="text-stone-900 font-semibold text-lg">إعدادات الإشعارات</h2>

            <div className="space-y-3">
              <h3 className="text-stone-600 text-sm font-medium flex items-center gap-2">
                <Smartphone size={15} />
                إشعارات SMS
              </h3>
              {[
                { key: 'smsNewOrder' as const, label: 'طلب جديد' },
                { key: 'smsOrderShipped' as const, label: 'تم شحن الطلب' },
                { key: 'smsOrderDelivered' as const, label: 'تم تسليم الطلب' },
              ].map((n) => (
                <div key={n.key} className="flex items-center justify-between bg-stone-100 rounded-xl px-4 py-3">
                  <span className="text-stone-900 text-sm">{n.label}</span>
                  <Toggle checked={notifs[n.key]} onChange={(v) => setNotifs({ ...notifs, [n.key]: v })} />
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-stone-600 text-sm font-medium flex items-center gap-2">
                <Bell size={15} />
                إشعارات البريد الإلكتروني
              </h3>
              {[
                { key: 'emailNewOrder' as const, label: 'طلب جديد' },
                { key: 'emailLowStock' as const, label: 'مخزون منخفض' },
                { key: 'emailNewCustomer' as const, label: 'عميل جديد' },
                { key: 'emailWeeklyReport' as const, label: 'تقرير أسبوعي' },
              ].map((n) => (
                <div key={n.key} className="flex items-center justify-between bg-stone-100 rounded-xl px-4 py-3">
                  <span className="text-stone-900 text-sm">{n.label}</span>
                  <Toggle checked={notifs[n.key]} onChange={(v) => setNotifs({ ...notifs, [n.key]: v })} />
                </div>
              ))}
            </div>

            <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              حفظ
            </button>
          </div>
        )}

        {/* ---- SECURITY ---- */}
        {activeTab === 'الأمان' && (
          <div className="space-y-6 max-w-xl">
            <h2 className="text-stone-900 font-semibold text-lg">الأمان</h2>

            {/* Change Password */}
            <div className="bg-stone-100 rounded-xl p-5 space-y-4">
              <h3 className="text-stone-900 font-medium">تغيير كلمة المرور</h3>
              <div>
                <label className={labelClass}>كلمة المرور الحالية</label>
                <div className="relative">
                  <input
                    type={showCurrentPass ? 'text' : 'password'}
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-900"
                  >
                    {showCurrentPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className={labelClass}>كلمة المرور الجديدة</label>
                <div className="relative">
                  <input
                    type={showNewPass ? 'text' : 'password'}
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-900"
                  >
                    {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className={labelClass}>تأكيد كلمة المرور</label>
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                تحديث كلمة المرور
              </button>
            </div>

            {/* 2FA */}
            <div className="bg-stone-100 rounded-xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-stone-900 font-medium">المصادقة الثنائية (2FA)</p>
                <p className="text-stone-600 text-xs mt-0.5">حماية إضافية لحسابك</p>
              </div>
              <Toggle checked={twoFA} onChange={setTwoFA} />
            </div>

            {/* Active Sessions */}
            <div className="space-y-3">
              <h3 className="text-stone-900 font-medium">الجلسات النشطة</h3>
              {sessions.map((s) => (
                <div
                  key={s.id}
                  className="bg-stone-100 rounded-xl px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    {s.type === 'desktop' ? (
                      <Monitor size={18} className="text-stone-600 flex-shrink-0" />
                    ) : (
                      <Smartphone size={18} className="text-stone-600 flex-shrink-0" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-stone-900 text-sm">{s.device}</p>
                        {s.current && (
                          <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded-full">
                            الحالية
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-xs">{s.location} · {s.lastActive}</p>
                    </div>
                  </div>
                  {!s.current && (
                    <button className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 transition-colors flex-shrink-0">
                      <LogOut size={14} />
                      إنهاء
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
