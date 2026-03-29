'use client'

import { useState } from 'react'
import { X, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react'

type Priority = 'عالية' | 'متوسطة' | 'منخفضة'
type TicketStatus = 'مفتوح' | 'قيد المعالجة' | 'مغلق'

interface Message {
  from: 'customer' | 'admin'
  text: string
  time: string
}

interface Ticket {
  id: string
  customer: string
  subject: string
  priority: Priority
  status: TicketStatus
  date: string
  messages: Message[]
}

const PRIORITY_STYLES: Record<Priority, string> = {
  'عالية': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
  'متوسطة': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
  'منخفضة': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
}

const STATUS_STYLES: Record<TicketStatus, string> = {
  'مفتوح': 'bg-green-500/10 text-green-400 border border-green-500/20',
  'قيد المعالجة': 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  'مغلق': 'bg-zinc-500/10 text-stone-600 border border-zinc-500/20',
}

const MOCK_TICKETS: Ticket[] = [
  {
    id: '#T001',
    customer: 'أحمد محمد الغامدي',
    subject: 'مشكلة في استلام الطلب',
    priority: 'عالية',
    status: 'مفتوح',
    date: '2026-03-28',
    messages: [
      { from: 'customer', text: 'السلام عليكم، لم أستلم طلبي رقم #10045 رغم مرور 3 أيام على التسليم المفترض.', time: '2026-03-28 10:30' },
      { from: 'admin', text: 'نعتذر عن هذا التأخير. سنتواصل مع شركة الشحن فوراً ونعاود الاتصال بك خلال ساعة.', time: '2026-03-28 11:00' },
      { from: 'customer', text: 'شكراً. أنا بانتظار ردكم.', time: '2026-03-28 11:05' },
    ],
  },
  {
    id: '#T002',
    customer: 'سارة العتيبي',
    subject: 'طلب استرجاع منتج',
    priority: 'متوسطة',
    status: 'قيد المعالجة',
    date: '2026-03-27',
    messages: [
      { from: 'customer', text: 'أرغب في استرجاع الجهاز الذي اشتريته، فهو لا يعمل بشكل صحيح.', time: '2026-03-27 14:00' },
      { from: 'admin', text: 'تم استلام طلب الاسترجاع. يرجى إرسال صور للجهاز وسنقوم بمعالجة طلبك.', time: '2026-03-27 15:00' },
    ],
  },
  {
    id: '#T003',
    customer: 'خالد الزهراني',
    subject: 'سؤال عن نكهة جديدة',
    priority: 'منخفضة',
    status: 'مغلق',
    date: '2026-03-26',
    messages: [
      { from: 'customer', text: 'هل سيتوفر سائل نكهة التفاح قريباً؟', time: '2026-03-26 09:00' },
      { from: 'admin', text: 'نعم! سيتوفر خلال أسبوعين. يمكنك تسجيل بريدك لتنبيهك عند توفره.', time: '2026-03-26 09:30' },
      { from: 'customer', text: 'ممتاز! شكراً جزيلاً.', time: '2026-03-26 09:35' },
    ],
  },
  {
    id: '#T004',
    customer: 'نورة الشمري',
    subject: 'خطأ في الفاتورة',
    priority: 'عالية',
    status: 'مفتوح',
    date: '2026-03-28',
    messages: [
      { from: 'customer', text: 'تم خصم مبلغ مضاعف من حسابي البنكي لطلب واحد فقط!', time: '2026-03-28 08:00' },
    ],
  },
  {
    id: '#T005',
    customer: 'فيصل الحربي',
    subject: 'كوبون الخصم لا يعمل',
    priority: 'متوسطة',
    status: 'قيد المعالجة',
    date: '2026-03-27',
    messages: [
      { from: 'customer', text: 'الكوبون WELCOME15 يظهر خطأ عند الاستخدام.', time: '2026-03-27 16:00' },
      { from: 'admin', text: 'نعتذر! سيتم إصلاح المشكلة خلال 24 ساعة. وسنضيف لك خصماً إضافياً.', time: '2026-03-27 17:00' },
    ],
  },
  {
    id: '#T006',
    customer: 'ريم القحطاني',
    subject: 'تغيير عنوان الشحن',
    priority: 'منخفضة',
    status: 'مغلق',
    date: '2026-03-25',
    messages: [
      { from: 'customer', text: 'أريد تغيير عنوان الشحن للطلب #10040.', time: '2026-03-25 12:00' },
      { from: 'admin', text: 'تم تحديث عنوان الشحن بنجاح.', time: '2026-03-25 12:30' },
    ],
  },
  {
    id: '#T007',
    customer: 'عبدالله المالكي',
    subject: 'استفسار عن ضمان الجهاز',
    priority: 'منخفضة',
    status: 'مفتوح',
    date: '2026-03-28',
    messages: [
      { from: 'customer', text: 'ما هي مدة الضمان على أجهزة الفيب؟', time: '2026-03-28 13:00' },
    ],
  },
  {
    id: '#T008',
    customer: 'تركي العسيري',
    subject: 'منتج تالف عند الاستلام',
    priority: 'عالية',
    status: 'قيد المعالجة',
    date: '2026-03-26',
    messages: [
      { from: 'customer', text: 'استلمت الجهاز وهو مكسور!', time: '2026-03-26 15:00' },
      { from: 'admin', text: 'نعتذر بشدة! سنرسل لك بديلاً فوراً على نفقتنا.', time: '2026-03-26 15:45' },
      { from: 'customer', text: 'شكراً على التعاون.', time: '2026-03-26 16:00' },
    ],
  },
]

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(MOCK_TICKETS)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [replyText, setReplyText] = useState('')
  const [statusUpdate, setStatusUpdate] = useState<TicketStatus>('مفتوح')

  const stats = {
    all: tickets.length,
    open: tickets.filter((t) => t.status === 'مفتوح').length,
    processing: tickets.filter((t) => t.status === 'قيد المعالجة').length,
    closed: tickets.filter((t) => t.status === 'مغلق').length,
  }

  function openTicket(ticket: Ticket) {
    setSelectedTicket(ticket)
    setStatusUpdate(ticket.status)
    setReplyText('')
  }

  function sendReply() {
    if (!replyText.trim() || !selectedTicket) return
    const msg: Message = {
      from: 'admin',
      text: replyText.trim(),
      time: new Date().toLocaleString('ar-SA'),
    }
    const updated = { ...selectedTicket, messages: [...selectedTicket.messages, msg] }
    setTickets((prev) => prev.map((t) => (t.id === selectedTicket.id ? updated : t)))
    setSelectedTicket(updated)
    setReplyText('')
  }

  function closeTicket() {
    if (!selectedTicket) return
    const updated = { ...selectedTicket, status: 'مغلق' as TicketStatus }
    setTickets((prev) => prev.map((t) => (t.id === selectedTicket.id ? updated : t)))
    setSelectedTicket(updated)
    setStatusUpdate('مغلق')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">تذاكر الدعم</h1>

      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'الكل', value: stats.all, color: 'text-stone-900' },
          { label: 'مفتوح', value: stats.open, color: 'text-green-400' },
          { label: 'قيد المعالجة', value: stats.processing, color: 'text-yellow-400' },
          { label: 'مغلق', value: stats.closed, color: 'text-stone-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-stone-200 rounded-xl px-5 py-3 flex items-center gap-3">
            <span className={`text-2xl font-bold ${s.color}`}>{s.value}</span>
            <span className="text-stone-600 text-sm">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['رقم التذكرة', 'العميل', 'الموضوع', 'الأولوية', 'الحالة', 'التاريخ', 'إجراء'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3 text-amber-700 font-medium font-mono">{t.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-700 flex-shrink-0">
                        {t.customer[0]}
                      </div>
                      <span className="text-stone-900">{t.customer}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-stone-700 max-w-[200px] truncate">{t.subject}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${PRIORITY_STYLES[t.priority]}`}>
                      {t.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{t.date}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openTicket(t)}
                      className="text-xs bg-stone-200 hover:bg-zinc-600 text-stone-900 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      فتح
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Detail Slide-over */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedTicket(null)} />
          <div className="absolute top-0 left-0 h-full w-full max-w-lg bg-white border-r border-stone-200 flex flex-col z-10 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between px-5 py-4 border-b border-stone-200 flex-shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-stone-900">{selectedTicket.id}</h2>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${PRIORITY_STYLES[selectedTicket.priority]}`}>
                    {selectedTicket.priority}
                  </span>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[selectedTicket.status]}`}>
                    {selectedTicket.status}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mt-1">{selectedTicket.subject}</p>
                <p className="text-stone-500 text-xs">{selectedTicket.customer}</p>
              </div>
              <button
                onClick={() => setSelectedTicket(null)}
                className="text-stone-600 hover:text-stone-900 p-1 rounded-lg hover:bg-stone-100 flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {selectedTicket.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === 'admin' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.from === 'admin'
                        ? 'bg-stone-100 text-stone-800 rounded-tr-sm'
                        : 'bg-amber-600/20 border border-amber-500/20 text-stone-800 rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <div className={`flex items-center gap-1 mt-1.5 ${msg.from === 'admin' ? 'justify-start' : 'justify-end'}`}>
                      <Clock size={11} className="text-stone-500" />
                      <span className="text-stone-500 text-xs">{msg.time}</span>
                      {msg.from === 'admin' && <span className="text-stone-500 text-xs">· الإدارة</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-stone-200 p-4 space-y-3 flex-shrink-0">
              {/* Status + close */}
              <div className="flex items-center gap-2">
                <select
                  value={statusUpdate}
                  onChange={(e) => setStatusUpdate(e.target.value as TicketStatus)}
                  className="flex-1 appearance-none bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                >
                  <option>مفتوح</option>
                  <option>قيد المعالجة</option>
                  <option>مغلق</option>
                </select>
                <button
                  onClick={closeTicket}
                  className="flex items-center gap-1.5 bg-stone-200 hover:bg-zinc-600 text-stone-700 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
                >
                  <CheckCircle size={15} />
                  إغلاق
                </button>
              </div>

              {/* Reply */}
              {selectedTicket.status !== 'مغلق' && (
                <div className="flex gap-2">
                  <textarea
                    rows={2}
                    placeholder="اكتب ردك هنا..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="flex-1 bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-amber-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.ctrlKey) sendReply()
                    }}
                  />
                  <button
                    onClick={sendReply}
                    disabled={!replyText.trim()}
                    className="flex-shrink-0 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed text-stone-900 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
