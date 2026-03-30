# Wireframe: Al-Qaryah Al-Turathiyah Landing Page

## Layout Overview

```
Viewport: Full-width, single-page scroll
Direction: RTL (Arabic default), LTR toggle
Max Content Width: 1200px (centered)
Wide Sections: Hero, Space gallery — full bleed
```

---

## 1. Header / Navigation Bar

```
┌─────────────────────────────────────────────────────────┐
│  [Logo/Name: القرية التراثية]                            │
│                                                         │
│  [Nav Links: عن القرية | الطعام | المكان | الحجوزات]     │
│                                                         │
│  [AR/EN Toggle]  [Light/Dark Toggle]  [WhatsApp Button] │
│                                                         │
│  ─── geometric border line ───                          │
└─────────────────────────────────────────────────────────┘

Mobile: Hamburger menu with slide-in drawer
Sticky: Yes, with reduced height on scroll
Heritage accent: Thin geometric pattern border at bottom
```

## 2. Hero Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ░░░░░░░░░ PANORAMIC BACKGROUND ░░░░░░░░░              │
│   ░░░ (Desert/architecture gradient) ░░░░░              │
│                                                         │
│         ┌─────────────────────────┐                     │
│         │   ◇ geometric motif ◇   │                     │
│         │                         │                     │
│         │   القرية التراثية       │                     │
│         │   Heritage Village      │                     │
│         │                         │                     │
│         │   حيث يلتقي عبق التراث  │                     │
│         │   بكرم الضيافة          │                     │
│         │                         │                     │
│         │  [احجز لمجموعتك]        │                     │
│         │  [تصفح القائمة]         │                     │
│         │                         │                     │
│         │   ◇ geometric motif ◇   │                     │
│         └─────────────────────────┘                     │
│                                                         │
│   ★ 4.0  |  2,735 تقييم  |  تبوك                       │
│                                                         │
└─────────────────────────────────────────────────────────┘

Height: 100vh on desktop, 85vh on mobile
Background: CSS gradient simulating desert horizon
Overlay: Semi-transparent with mashrabiya pattern
Animation: Subtle parallax on pattern layer
```

## 3. Hospitality Introduction

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ◇ section divider pattern ◇                │
│                                                         │
│                  أهلاً وسهلاً                           │
│               ضيافة من القلب                            │
│                                                         │
│   ┌──────────────────────────────────────────────┐      │
│   │                                              │      │
│   │  [Welcome paragraph — warm, inviting text    │      │
│   │   about the restaurant's heritage and        │      │
│   │   commitment to authentic Saudi hospitality] │      │
│   │                                              │      │
│   └──────────────────────────────────────────────┘      │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│   │ ◇        │  │ ◇        │  │ ◇        │             │
│   │ تراث     │  │ مذاق     │  │ ضيافة    │             │
│   │ أصيل     │  │ لا يُنسى │  │ كريمة    │             │
│   │          │  │          │  │          │             │
│   │ [desc]   │  │ [desc]   │  │ [desc]   │             │
│   └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: Centered text, 3-column feature cards below
Cards: Bordered with geometric corner accents
Animation: Fade-in on scroll
```

## 4. Menu Sections

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ◇ section divider pattern ◇                │
│                                                         │
│                  قائمة الطعام                           │
│              من مطبخنا التراثي                          │
│                                                         │
│   [Tab: الأطباق الرئيسية | ولائم المجموعات | مقبلات]   │
│                                                         │
│   ┌─────────────────────┐  ┌─────────────────────┐      │
│   │  كبسة لحم            │  │  مندي دجاج          │      │
│   │  [description]       │  │  [description]       │      │
│   ├─────────────────────┤  ├─────────────────────┤      │
│   │  مضبي               │  │  هريسة              │      │
│   │  [description]       │  │  [description]       │      │
│   ├─────────────────────┤  ├─────────────────────┤      │
│   │  جريش               │  │                     │      │
│   │  [description]       │  │                     │      │
│   └─────────────────────┘  └─────────────────────┘      │
│                                                         │
│                [واتساب للطلب المسبق]                    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: Category tabs, 2-column grid of menu items
Cards: Clean, minimal with dish name and description
No prices displayed (inquiry-based)
Group platters highlighted with special border treatment
```

## 5. The Space

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ◇ section divider pattern ◇                │
│                                                         │
│                    المكان                               │
│             قرية بأكملها تحتضنكم                        │
│                                                         │
│   [Description paragraph about the space]               │
│                                                         │
│   ┌────────────┐ ┌────────────┐                         │
│   │ ░░░░░░░░░░ │ │ ░░░░░░░░░░ │                         │
│   │ جلسات      │ │ أقسام      │                         │
│   │ أرضية      │ │ خاصة       │                         │
│   │ [desc]     │ │ [desc]     │                         │
│   └────────────┘ └────────────┘                         │
│   ┌────────────┐ ┌────────────┐                         │
│   │ ░░░░░░░░░░ │ │ ░░░░░░░░░░ │                         │
│   │ قاعات      │ │ أجواء      │                         │
│   │ مناسبات    │ │ تراثية     │                         │
│   │ [desc]     │ │ [desc]     │                         │
│   └────────────┘ └────────────┘                         │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: 2x2 grid of feature cards with icon placeholders
Cards: Large, with warm background and pattern overlay
Each card has geometric icon, title, description
```

## 6. Tourism & Group Bookings

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ░░░░ WARM BACKGROUND WITH PATTERN ░░░░░               │
│                                                         │
│          الحجوزات والمجموعات السياحية                   │
│       نرحب بمجموعاتكم مهما كان حجمها                   │
│                                                         │
│   [Description about group services]                    │
│                                                         │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│   │ حجز مسبق │ │ قوائم    │ │ استضافة  │ │ تنسيق مع │  │
│   │          │ │ مخصصة    │ │ فعاليات  │ │ منظمي    │  │
│   │ [desc]   │ │ [desc]   │ │ [desc]   │ │ الرحلات  │  │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                         │
│           [تواصل معنا عبر واتساب لحجز مجموعتك]         │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: Full-width warm background, 4-column features
Mobile: 2x2 grid, then stacked
Strong CTA button for WhatsApp
```

## 7. Testimonials

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ◇ section divider pattern ◇                │
│                                                         │
│                 آراء ضيوفنا                             │
│              ماذا يقول من زارنا                         │
│                                                         │
│        ★★★★☆  4.0 / 5  —  2,735 تقييم                 │
│                                                         │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│   │ "quote..."   │ │ "quote..."   │ │ "quote..."   │   │
│   │              │ │              │ │              │   │
│   │ — أبو محمد   │ │ — خالد       │ │ — سارة       │   │
│   │ عشاء عائلي   │ │ مجموعة       │ │ مناسبة       │   │
│   └──────────────┘ └──────────────┘ └──────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: 3-column testimonial cards
Cards: Quote marks, text, author name, context tag
Decorative: Opening/closing quotation marks in heritage style
```

## 8. Location

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ◇ section divider pattern ◇                │
│                                                         │
│                   موقعنا                                │
│                في قلب تبوك                              │
│                                                         │
│   ┌────────────────────────┐  ┌────────────────────┐    │
│   │                        │  │                    │    │
│   │   [Google Maps Embed]  │  │  العنوان:          │    │
│   │                        │  │  حي الفيصلية       │    │
│   │                        │  │  الشمالية، تبوك    │    │
│   │                        │  │                    │    │
│   │                        │  │  الهاتف:           │    │
│   │                        │  │  0561206666        │    │
│   │                        │  │                    │    │
│   │                        │  │  [احصل على         │    │
│   │                        │  │   الاتجاهات]       │    │
│   └────────────────────────┘  └────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: 2-column — map left/right, info opposite
Map: iframe embed or placeholder with link to Google Maps
Mobile: Stacked, map on top
```

## 9. WhatsApp CTA Banner

```
┌─────────────────────────────────────────────────────────┐
│   ░░░ GREEN HERITAGE BACKGROUND ░░░░░░░░░░░             │
│                                                         │
│   هل تخطط لزيارة جماعية أو مناسبة؟                     │
│   تواصل معنا لتنظيم تجربة مميزة                        │
│                                                         │
│   [واتساب]          [اتصل بنا: 0561206666]             │
│                                                         │
└─────────────────────────────────────────────────────────┘

Full-width, high-contrast section
Two CTA buttons: WhatsApp (primary), Phone (secondary)
```

## 10. Footer

```
┌─────────────────────────────────────────────────────────┐
│   ─── geometric border line ───                         │
│                                                         │
│   القرية التراثية                                       │
│   ضيافة سعودية أصيلة في قلب تبوك                       │
│                                                         │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│   │ العنوان    │  │ ساعات العمل│  │ تواصل معنا │       │
│   │ الفيصلية   │  │ يومياً     │  │ 0561206666 │       │
│   │ الشمالية   │  │ 12ظ - 12م  │  │ [واتساب]   │       │
│   │ تبوك       │  │            │  │            │       │
│   └────────────┘  └────────────┘  └────────────┘       │
│                                                         │
│   ─── thin line ───                                     │
│   جميع الحقوق محفوظة 2026                               │
│                                                         │
└─────────────────────────────────────────────────────────┘

Layout: 3-column info grid
Bottom bar: Copyright
Heritage accent: Geometric border at top
```

## Responsive Breakpoints

| Breakpoint | Width     | Key Changes                            |
|------------|-----------|----------------------------------------|
| Mobile     | < 640px   | Single column, hamburger nav, stacked  |
| Tablet     | 640-1024  | 2-column grids, condensed nav          |
| Desktop    | > 1024    | Full layout as wireframed              |

## Interaction Notes

- Language toggle: Instant switch, RTL/LTR direction change
- Theme toggle: Smooth transition between light/dark
- Scroll animations: Fade-in-up on section entry, subtle and respectful
- WhatsApp buttons: Pre-filled message in current language
- Navigation: Smooth scroll to sections
- Menu tabs: Client-side category switching
