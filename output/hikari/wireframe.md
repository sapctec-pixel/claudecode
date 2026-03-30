# Hikari - Wireframe Specification

## Design Principles

- Japanese Zen Minimalism: Dramatic negative space, precise placement
- Hikari (Light): Interplay of light and shadow throughout
- Ma (Interval): Intentional breathing room between sections
- Kanso (Simplicity): Nothing unnecessary, everything purposeful

---

## Layout Grid

- Max content width: 1280px
- Section padding: clamp(4rem, 10vw, 8rem) vertical
- Content padding: 1.5rem (mobile), 2rem (tablet), 0 (desktop, centered)
- Column grid: 12 columns with 1.5rem gap

---

## Section 1: Header (Fixed)

```
+------------------------------------------------------------------+
| [Brand Mark]    [Nav Links]              [Lang] [Theme] [Reserve] |
| ヒカリ HIKARI   Experience Menu Ambiance  AR/EN  Sun/Moon  CTA   |
+------------------------------------------------------------------+
```

- Fixed position, backdrop blur, transparent until scroll
- Height: 72px desktop, 64px mobile
- Brand: Japanese characters + Latin name side by side
- Navigation: Horizontal links, hidden on mobile (hamburger menu)
- Right cluster: Language toggle, theme toggle, reserve button
- On scroll: Background becomes semi-opaque with subtle border-bottom
- Mobile: Hamburger menu, full-screen overlay navigation

---

## Section 2: Hero (Full Viewport)

```
+------------------------------------------------------------------+
|                                                                    |
|                          ヒカリ                                    |
|                                                                    |
|                        HIKARI                                      |
|                                                                    |
|              Where Light Meets Flavor                              |
|                                                                    |
|    An authentic Japanese dining experience in the heart            |
|    of Tabuk...                                                     |
|                                                                    |
|          [Reserve Your Table]    [Explore Menu]                    |
|                                                                    |
|                          |                                         |
|                       Discover                                     |
+------------------------------------------------------------------+
```

- Full viewport height (100svh)
- Dark atmospheric background with subtle gradient overlay
- Centered content with staggered fade-in animation
- Japanese pretitle in accent font, subtle opacity
- Main title: Display size, bold, wide letter-spacing
- Subtitle: Lighter weight, tracking-wide
- Description: Max-width 600px, centered
- Two CTAs: Primary (filled red), Secondary (outlined)
- Scroll indicator at bottom: Thin vertical line with pulse animation

---

## Section 3: The Hikari Experience (Omakase)

```
+------------------------------------------------------------------+
|                                                                    |
|  THE EXPERIENCE                                                    |
|                                                                    |
|  The Art of                                                        |
|  Omakase                                                          |
|                                                                    |
|  Let the Chef Guide Your Journey                                   |
|                                                                    |
|  [Description paragraph]                                           |
|                                                                    |
|  +------------------+  +------------------+  +------------------+  |
|  | Seasonal         |  | Japanese         |  | An Exclusive     |  |
|  | Ingredients      |  | Craftsmanship    |  | Experience       |  |
|  |                  |  |                  |  |                  |  |
|  | Description...   |  | Description...   |  | Description...   |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
+------------------------------------------------------------------+
```

- Light/dark adaptive background
- Pretitle: Small caps, accent color, tracking-widest
- Title: Large, bold
- Three feature cards in horizontal row (stack on mobile)
- Cards: Subtle border, number accent (01, 02, 03), title, description
- Reveal animation: Cards stagger in from bottom with fade

---

## Section 4: Sushi Menu

```
+------------------------------------------------------------------+
|                                                                    |
|  THE MENU                                                          |
|                                                                    |
|  Chef's Creations                                                  |
|                                                                    |
|  [Nigiri & Sashimi]  [Signature Maki]  [Hot Dishes]  <- tabs     |
|                                                                    |
|  Category description text...                                      |
|                                                                    |
|  +------------------------+  +------------------------+            |
|  | Salmon Nigiri          |  | Otoro Tuna             |            |
|  | Description...         |  | Description...         |            |
|  +------------------------+  +------------------------+            |
|  +------------------------+                                        |
|  | Seasonal Sashimi       |                                        |
|  | Description...         |                                        |
|  +------------------------+                                        |
|                                                                    |
+------------------------------------------------------------------+
```

- Tab navigation for categories (horizontal scroll on mobile)
- Active tab: Red accent underline
- Menu items: Clean cards with name and description
- Subtle divider line between items
- No prices displayed (inquiry-based pricing for luxury positioning)
- Smooth tab transition animation

---

## Section 5: Beverages

```
+------------------------------------------------------------------+
|                                                                    |
|  BEVERAGES                                                         |
|                                                                    |
|  Curated Drinks                                                    |
|                                                                    |
|  [Description paragraph]                                           |
|                                                                    |
|  +------------+  +------------+  +------------+  +------------+   |
|  | Ceremonial |  | Yuzu       |  | Sakura     |  | Hojicha    |   |
|  | Matcha     |  | Spritz     |  | Cooler     |  | Latte      |   |
|  |            |  |            |  |            |  |            |   |
|  | Desc...    |  | Desc...    |  | Desc...    |  | Desc...    |   |
|  +------------+  +------------+  +------------+  +------------+   |
|                                                                    |
+------------------------------------------------------------------+
```

- Contrasting section background (elevated surface)
- Four cards in horizontal layout (2x2 on tablet, stack on mobile)
- Each card: Name prominently displayed, description below
- Subtle top border accent on each card
- Fade-in on scroll

---

## Section 6: Ambiance

```
+------------------------------------------------------------------+
|                                                                    |
|  AMBIANCE                              A World of                  |
|                                        Tranquility                 |
|  +-----------------------------+                                   |
|  |                             |       Design Inspired by          |
|  |    [Atmospheric visual      |       Zen Philosophy              |
|  |     placeholder area]       |                                   |
|  |                             |       [Description paragraph]     |
|  +-----------------------------+                                   |
|                                                                    |
|  +------------------+  +------------------+  +------------------+  |
|  | Japanese Interior |  | Lighting        |  | Private Seating  |  |
|  | Description...    |  | Description...  |  | Description...   |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
+------------------------------------------------------------------+
```

- Split layout: Visual area left, content right (stack on mobile)
- Visual area: Dark atmospheric gradient placeholder (no image dependency)
- Three feature items below as minimal cards
- Serene, spacious feel with extra vertical padding

---

## Section 7: Reservation CTA

```
+------------------------------------------------------------------+
|                                                                    |
|  ============================================================     |
|                                                                    |
|                    RESERVATION                                     |
|                                                                    |
|              Reserve Your Experience                               |
|                                                                    |
|              Your Table Awaits                                     |
|                                                                    |
|         [Description text about booking]                           |
|                                                                    |
|            [ Reserve via WhatsApp ]                                |
|                                                                    |
|         Opening Hours                                              |
|         Sun-Thu: 1:00 PM - 11:30 PM                               |
|         Fri-Sat: 1:00 PM - 12:00 AM                               |
|                                                                    |
|         Note about advance booking                                 |
|                                                                    |
|  ============================================================     |
|                                                                    |
+------------------------------------------------------------------+
```

- Dramatic section with contrasting background
- Centered content, generous padding
- Large WhatsApp CTA button (green accent or red accent)
- Hours displayed cleanly below
- Decorative top/bottom borders (thin red line)

---

## Section 8: Testimonials

```
+------------------------------------------------------------------+
|                                                                    |
|  GUEST REVIEWS                                                     |
|                                                                    |
|  Words from Our Guests                                             |
|  354 Reviews - 4.5/5 Rating                                       |
|                                                                    |
|  +------------------------+  +------------------------+            |
|  | "Quote text..."        |  | "Quote text..."        |            |
|  |                        |  |                        |            |
|  | ★★★★★  Ahmed M.       |  | ★★★★★  Noura A.       |            |
|  +------------------------+  +------------------------+            |
|  +------------------------+                                        |
|  | "Quote text..."        |                                        |
|  |                        |                                        |
|  | ★★★★☆  Faisal K.      |                                        |
|  +------------------------+                                        |
|                                                                    |
+------------------------------------------------------------------+
```

- Star ratings shown with filled/unfilled indicators (CSS, not emoji)
- Quote marks as decorative typographic element
- Cards with subtle border, author name and rating
- Grid: 2 columns desktop, 1 column mobile

---

## Section 9: Contact

```
+------------------------------------------------------------------+
|                                                                    |
|  GET IN TOUCH                                                      |
|                                                                    |
|  Our Location                                                      |
|                                                                    |
|  +-----------------------------+  +-----------------------------+  |
|  |                             |  |                             |  |
|  |   Al-Masif District         |  |   Phone: 0548803124        |  |
|  |   Tabuk, KSA                |  |                             |  |
|  |                             |  |   [Get Directions]          |  |
|  |                             |  |   [WhatsApp]                |  |
|  +-----------------------------+  +-----------------------------+  |
|                                                                    |
+------------------------------------------------------------------+
```

- Two-column layout: Address left, contact actions right
- Clean, minimal contact information
- Action buttons: Get Directions (Google Maps link), WhatsApp
- No map embed (keeps page lightweight)

---

## Section 10: Footer

```
+------------------------------------------------------------------+
|  ____________________________________________________________     |
|                                                                    |
|  ヒカリ HIKARI                                                     |
|  The Art of Japanese Cuisine in Tabuk                              |
|                                                                    |
|  Privacy Policy  |  Terms & Conditions                             |
|                                                                    |
|  (c) 2026 Hikari. All rights reserved.                            |
|                                                                    |
+------------------------------------------------------------------+
```

- Minimal footer with brand mark
- Tagline centered
- Legal links
- Copyright
- Thin top border separator

---

## Responsive Behavior

### Mobile (< 640px)
- Single column throughout
- Hamburger navigation with full-screen overlay
- Hero title scales down but remains dramatic
- Cards stack vertically
- CTAs become full-width
- Generous touch targets (minimum 44px)

### Tablet (640px - 1024px)
- Two-column grids where applicable
- Navigation remains visible but condensed
- Moderate spacing

### Desktop (> 1024px)
- Full multi-column layouts
- Maximum content width enforced
- Generous negative space

---

## Animation Choreography

1. **Page Load:** Header fades in (200ms), then hero content staggers in (title, subtitle, description, CTAs at 150ms intervals)
2. **Scroll Reveals:** Each section fades up (translateY 30px to 0, opacity 0 to 1) when entering viewport
3. **Tab Transitions:** Menu category content cross-fades (200ms)
4. **Hover States:** Cards lift subtly (translateY -2px), border color transitions to accent
5. **Language Switch:** Content cross-fades between languages
6. **Theme Switch:** Colors transition smoothly (300ms)

All animations use `prefers-reduced-motion` media query to disable for accessibility.
