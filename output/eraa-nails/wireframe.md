# Eraa Nails - Wireframe Specification

## Page Structure (Top to Bottom)

---

### 1. Header (Sticky)

```
+------------------------------------------------------------------+
|  [Logo: إيراء نيلز]     Nav Links (hidden mobile)    [AR|EN] [Theme] [Book CTA] |
+------------------------------------------------------------------+
```

- Sticky header with frosted glass effect (backdrop-blur)
- Brand name in elegant serif font
- Navigation links: Services, Portfolio, About, Reviews, Contact
- Language toggle: pill-style AR/EN switch
- Theme toggle: sun/moon icon
- "Book Now" button: rose gold filled, rounded
- Mobile: hamburger menu with slide-in drawer

---

### 2. Hero Section

```
+------------------------------------------------------------------+
|                                                                    |
|              [Decorative line element]                              |
|                                                                    |
|           Where Art Meets Elegance                                 |
|           حيث يلتقي الفن بالأناقة                                   |
|                                                                    |
|     A luxurious nail care experience that reflects                 |
|     your femininity and refined taste                              |
|                                                                    |
|     [  Book Your Appointment  ]  [  View Our Work  ]              |
|                                                                    |
|     ★ 4.9/5 -- 970+ Reviews                                       |
|                                                                    |
|  [Lifestyle image placeholder: elegant hands with nail art]        |
|                                                                    |
+------------------------------------------------------------------+
```

- Full viewport height on desktop, generous padding on mobile
- Gradient background: soft blush to cream
- Decorative thin gold line above headline
- Large serif headline with fade-in animation
- Two CTAs: primary (filled) and secondary (outlined)
- Rating badge with subtle glow
- Abstract floral/geometric decorative elements in corners

---

### 3. Services Section

```
+------------------------------------------------------------------+
|                     Our Services / خدماتنا                         |
|          Subtitle description text                                 |
|                                                                    |
|  +---------------+  +---------------+  +---------------+          |
|  |   [icon]      |  |   [icon]      |  |   [icon]      |          |
|  |   Manicure    |  |   Pedicure    |  |   Nail Art    |          |
|  |   مانيكير      |  |   باديكير      |  |   فن الأظافر   |          |
|  |               |  |               |  |               |          |
|  |  Description  |  |  Description  |  |  Description  |          |
|  |               |  |               |  |               |          |
|  |  Classic  80  |  |  Classic  90  |  |  Simple   50  |          |
|  |  Gel     120  |  |  Gel     140  |  |  Advanced 100 |          |
|  |  Spa     180  |  |  Spa     200  |  |  Exclusive180 |          |
|  +---------------+  +---------------+  +---------------+          |
|                                                                    |
|              +---------------+                                     |
|              |   [icon]      |                                     |
|              |  Extensions   |                                     |
|              |  تركيب الأظافر |                                     |
|              |               |                                     |
|              |  Acrylic 200  |                                     |
|              |  Gel     250  |                                     |
|              |  Press-On 150 |                                     |
|              +---------------+                                     |
+------------------------------------------------------------------+
```

- 2-column grid on tablet, 3-4 on desktop, single column on mobile
- Each card: white/surface background, subtle border, soft shadow
- Delicate icon at top of each card (line-art style)
- Service name in serif, description in sans-serif
- Pricing tiers as clean rows within the card
- Cards stagger-animate on scroll entry

---

### 4. Portfolio / Gallery Section

```
+------------------------------------------------------------------+
|                  Our Portfolio / أعمالنا                            |
|           Subtitle description                                     |
|                                                                    |
|     [All] [Manicure] [Nail Art] [Extensions] [Occasions]          |
|                                                                    |
|  +--------+  +-----------+  +--------+                            |
|  |        |  |           |  |        |                            |
|  |  img   |  |   img     |  |  img   |                            |
|  |  1     |  |   2       |  |  3     |                            |
|  |        |  |  (tall)   |  |        |                            |
|  +--------+  |           |  +--------+                            |
|  +--------+  +-----------+  +--------+                            |
|  |        |  +--------+     |        |                            |
|  |  img   |  |  img   |     | img    |                            |
|  |  4     |  |  5     |     |  6     |                            |
|  | (tall) |  +--------+     | (tall) |                            |
|  |        |  +--------+     |        |                            |
|  +--------+  |  img   |     +--------+                            |
|              |  7     |                                            |
|              +--------+                                            |
|                                                                    |
|              [  View More  ]                                       |
+------------------------------------------------------------------+
```

- Masonry-style grid layout (CSS columns or grid)
- Category filter tabs at top with underline active indicator
- Image placeholders with gradient overlays (blush to rose)
- Hover effect: slight scale + overlay with "view" indicator
- 2 columns mobile, 3 columns desktop
- "View More" button at bottom

---

### 5. Booking CTA Section

```
+------------------------------------------------------------------+
|                                                                    |
|  +--------------------------------------------------------------+ |
|  |                                                              | |
|  |       Book Your Appointment / احجزي موعدك الآن                 | |
|  |                                                              | |
|  |       One step away from an unforgettable                    | |
|  |       luxury experience                                      | |
|  |                                                              | |
|  |       Description text about WhatsApp booking...             | |
|  |                                                              | |
|  |       [  Book via WhatsApp  ]                                | |
|  |                                                              | |
|  |       Note: Accepting bookings daily                         | |
|  |                                                              | |
|  +--------------------------------------------------------------+ |
|                                                                    |
+------------------------------------------------------------------+
```

- Distinct background: soft gradient or subtle pattern
- Centered content within an elegant bordered container
- Large WhatsApp CTA button (green accent or brand-colored)
- Decorative elements: thin lines, subtle flourishes

---

### 6. About Section

```
+------------------------------------------------------------------+
|                                                                    |
|     About Us / من نحن                                              |
|     Our Story / قصتنا                                              |
|                                                                    |
|  +----------------------------+  +-----------------------------+  |
|  |                            |  |                             |  |
|  |  [Image placeholder:      |  |  Description paragraph      |  |
|  |   salon interior or       |  |  about Eraa Nails...        |  |
|  |   artist at work]         |  |                             |  |
|  |                            |  |  +-------+ +-------+ +---+ |  |
|  |                            |  |  |Precision| |Hygiene| |Art| |  |
|  |                            |  |  | desc   | | desc  | |desc| |  |
|  |                            |  |  +-------+ +-------+ +---+ |  |
|  +----------------------------+  +-----------------------------+  |
|                                                                    |
+------------------------------------------------------------------+
```

- Two-column layout (image left/right depending on RTL/LTR, text opposite)
- Single column stacked on mobile
- Three value cards below description
- Subtle decorative border around image placeholder

---

### 7. Testimonials Section

```
+------------------------------------------------------------------+
|                                                                    |
|     Client Reviews / آراء عملائنا                                   |
|                                                                    |
|           ★ 4.9 / 5                                                |
|           970+ Reviews                                             |
|                                                                    |
|  +----------------+  +----------------+  +----------------+        |
|  |  "Quote text   |  |  "Quote text   |  |  "Quote text   |       |
|  |   from the     |  |   from the     |  |   from the     |       |
|  |   client..."   |  |   client..."   |  |   client..."   |       |
|  |                |  |                |  |                |        |
|  |  -- Noura      |  |  -- Reem       |  |  -- Sarah      |       |
|  |  ★★★★★        |  |  ★★★★★        |  |  ★★★★★        |       |
|  +----------------+  +----------------+  +----------------+        |
|                                                                    |
+------------------------------------------------------------------+
```

- Large rating display centered at top
- Horizontal scroll on mobile, grid on desktop
- Each card: large quotation mark decoration, review text, name, star rating
- Cards have alternating subtle background tints
- Elegant serif quotation marks as decorative elements

---

### 8. Contact Section

```
+------------------------------------------------------------------+
|                                                                    |
|     Get in Touch / تواصلي معنا                                      |
|                                                                    |
|  +-------------------+  +-------------------+  +--------------+   |
|  |  [Phone icon]     |  |  [Location icon]  |  | [Clock icon] |   |
|  |  059 447 2444     |  |  Al-Masif, Tabuk  |  | Daily        |   |
|  +-------------------+  +-------------------+  +--------------+   |
|                                                                    |
+------------------------------------------------------------------+
```

- Three info cards in a row (stacked on mobile)
- Each with a delicate icon, label, and value
- Clean and minimal -- no clutter

---

### 9. Footer

```
+------------------------------------------------------------------+
|                                                                    |
|     إيراء نيلز / Eraa Nails                                        |
|     Nail Art, Elevated                                             |
|                                                                    |
|     [WhatsApp]  [Phone]  [Location]                                |
|                                                                    |
|     All Rights Reserved 2026                                       |
|     Crafted with care in Tabuk                                     |
|                                                                    |
+------------------------------------------------------------------+
```

- Minimal footer with brand name and tagline
- Quick-access icon links
- Copyright and attribution
- Softer background shade

---

## Responsive Breakpoints

| Element         | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|-----------------|-----------------|---------------------|-------------------|
| Header nav      | Hamburger       | Visible             | Visible           |
| Hero layout     | Stacked         | Stacked             | Side-by-side opt  |
| Service cards   | 1 column        | 2 columns           | 3-4 columns       |
| Gallery grid    | 2 columns       | 2 columns           | 3 columns         |
| About layout    | Stacked         | Side-by-side        | Side-by-side      |
| Testimonials    | Horizontal scroll| 2 columns          | 3 columns         |
| Contact cards   | Stacked         | 3 columns           | 3 columns         |

## Animation Specifications

- **Fade In Up:** Elements fade in and slide up 20px on scroll entry (duration: 800ms)
- **Stagger:** Cards within a grid stagger their entrance by 100ms each
- **Hover Scale:** Gallery images scale to 1.03 on hover (duration: 400ms)
- **Header Blur:** Header gains backdrop-blur on scroll past 50px
- **Button Hover:** CTAs shift slightly and gain deeper shadow
