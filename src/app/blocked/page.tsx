export default function BlockedPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-stone-900 flex flex-col items-center justify-center p-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        VAPE <span className="text-amber-500">SMOG</span>
      </h1>
      <div className="text-6xl mb-6">🚫</div>
      <h2 className="text-xl font-semibold mb-2">عذراً، لا يمكنك الدخول</h2>
      <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
        هذا الموقع مخصص للأشخاص الذين تجاوزوا سن 18 عاماً.
        وفقاً للأنظمة السعودية لا يحق لنا خدمتك.
      </p>
    </div>
  )
}
