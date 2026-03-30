# Biryani House -- Wireframe Specification

## Layout: Single-page, vertically scrolling
## Direction: RTL (Arabic primary), LTR toggle available

---

## 1. Header (Sticky)

```
+-----------------------------------------------------------------------+
|  [Brand Logo/Text]          [Nav Links]        [Lang] [Theme] [CTA]   |
+-----------------------------------------------------------------------+
```

- Brand name "Biryani House / بيت البرياني" left-aligned (right in RTL)
- Navigation: Our Dishes | Order Now | Our Story | Popular | Contact
- Language toggle button (AR/EN)
- Dark/Light mode toggle (sun/moon icon)
- "Order Now" CTA button in accent color
- Sticky on scroll with subtle backdrop blur
- Mobile: hamburger menu with slide-in drawer

---

## 2. Hero Section

```
+-----------------------------------------------------------------------+
|                                                                       |
|   [Open Now Badge]                                                    |
|                                                                       |
|   Welcome / أهلاً وسهلاً                                              |
|                                                                       |
|   AUTHENTIC BIRYANI,                                                  |
|   MADE IN TABUK                                                       |
|                                                                       |
|   Subheadline text about fresh spices                                 |
|   and daily service...                                                |
|                                                                       |
|   [ Order Now ]  [ Browse Menu ]                                      |
|                                                                       |
|                  +-----------------------------+                      |
|                  |                             |                      |
|                  |   [Large Biryani Image      |                      |
|                  |    Placeholder - 16:10]     |                      |
|                  |                             |                      |
|                  +-----------------------------+                      |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Warm gradient background (cream to saffron tint)
- "Open Now" badge with pulsing dot indicator
- Welcome text in smaller, decorative style
- Main headline: large, bold, warm typography
- Two CTA buttons: primary (filled saffron) and secondary (outlined)
- Large food image placeholder with rounded corners and warm shadow
- Subtle floating spice illustrations as decorative elements

---

## 3. Biryani Specialties (Menu Cards)

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Biryani Specialties                                                 |
|   Every dish prepared fresh with hand-ground spices...                |
|                                                                       |
|   +-------------------+  +-------------------+  +-------------------+ |
|   | [Image]           |  | [Image]           |  | [Image]           | |
|   |                   |  |                   |  |                   | |
|   | Chicken Biryani   |  | Mutton Biryani    |  | Shrimp Biryani    | |
|   | Description...    |  | Description...    |  | Description...    | |
|   |                   |  |                   |  |                   | |
|   | [## Medium]       |  | [## Medium]       |  | [# Mild]          | |
|   | [Popular badge]   |  | [Popular badge]   |  |                   | |
|   +-------------------+  +-------------------+  +-------------------+ |
|                                                                       |
|   +-------------------+  +-------------------+  +-------------------+ |
|   | [Image]           |  | [Image]           |  | [Image]           | |
|   | Vegetable Biryani |  | Hyderabadi        |  | Special Biryani   | |
|   | ...               |  | Biryani ...       |  | ...               | |
|   | [# Mild]          |  | [### Hot]         |  | [## Medium]       | |
|   |                   |  | [Popular badge]   |  | [Popular badge]   | |
|   +-------------------+  +-------------------+  +-------------------+ |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Section title with decorative underline accent
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Each card: image placeholder top, name, description, spice indicator, optional "Popular" badge
- Spice level shown with filled circles or flame icons (no emoji -- use CSS shapes)
- Cards have warm shadow and slight hover lift animation
- "Popular" badge in saffron/gold color

---

## 4. Quick Order Section

```
+-----------------------------------------------------------------------+
|                                                                       |
|   [Warm background - slightly darker cream/saffron tint]              |
|                                                                       |
|   Quick Order                                                         |
|   Skip the phone wait...                                              |
|                                                                       |
|   +---------------------+  +---------------------+  +--------------+ |
|   | [Phone Icon]        |  | [WhatsApp Icon]     |  | [Pickup Icon]| |
|   |                     |  |                     |  |              | |
|   | Call Us              |  | Order via WhatsApp  |  | Pickup       | |
|   | +966-XX-XXX-XXXX    |  | Send your order...  |  | Ready in     | |
|   | 11AM - 12 Midnight  |  |                     |  | 20-30 min    | |
|   |                     |  |                     |  |              | |
|   | [ Call Now ]        |  | [ Open WhatsApp ]   |  | [ Order ]    | |
|   +---------------------+  +---------------------+  +--------------+ |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Contrasting background to stand out (warm tinted surface)
- Three order method cards side by side
- Each with icon, label, details, and action button
- Phone card links to tel: protocol
- WhatsApp card links to wa.me with pre-filled message
- Pickup card describes the process
- Large tap targets for mobile users

---

## 5. Our Story

```
+-----------------------------------------------------------------------+
|                                                                       |
|   +---------------------------+                                       |
|   |                           |    Our Story                          |
|   |   [Restaurant Interior    |                                       |
|   |    Image Placeholder]     |    We started Biryani House with      |
|   |                           |    a simple dream...                  |
|   |                           |                                       |
|   +---------------------------+    Every day we grind our spices      |
|                                    fresh...                           |
|                                                                       |
|                                    Today, we are proud to be part     |
|                                    of the Tabuk community...          |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Two-column layout: image left, text right (reversed in RTL)
- Image placeholder with rounded corners
- Three short paragraphs, warm and personal tone
- On mobile: stacks vertically, image on top

---

## 6. Customer Favorites

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Customer Favorites                                                  |
|   The dishes our customers come back for...                           |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | [Best Seller]                                                 |   |
|   | Family Chicken Biryani Meal                                   |   |
|   | Serves 4-5 people with salad, raita, and naan bread           |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | [Customer Choice]                                             |   |
|   | Hyderabadi Biryani with Tandoori                              |   |
|   | Mutton Hyderabadi biryani with two pieces of tandoori...      |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | [Great Value]                                                 |   |
|   | Quick Lunch Meal                                              |   |
|   | Individual biryani with a drink and salad                     |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Full-width cards stacked vertically
- Each card has a colored tag/badge (Best Seller, Customer Choice, Great Value)
- Larger text for item names, description below
- Subtle left border accent in saffron color
- Hover state: slight scale and shadow increase

---

## 7. Testimonials

```
+-----------------------------------------------------------------------+
|                                                                       |
|   What Our Customers Say                                              |
|   Over 2,500 reviews -- 4.2 out of 5 average                         |
|                                                                       |
|   +-------------------+  +-------------------+  +-------------------+ |
|   | [Star Rating]     |  | [Star Rating]     |  | [Star Rating]     | |
|   |                   |  |                   |  |                   | |
|   | "The best biryani |  | "We order from    |  | "I tried their    | |
|   |  in Tabuk..."     |  |  them every       |  |  shrimp biryani   | |
|   |                   |  |  week..."         |  |  and it became..." | |
|   |                   |  |                   |  |                   | |
|   | -- Abu Mohammed   |  | -- Um Sarah       |  | -- Khalid         | |
|   +-------------------+  +-------------------+  +-------------------+ |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Three testimonial cards in a row (stacked on mobile)
- Star rating display at top of each card (filled stars using CSS)
- Quote text in slightly larger, italic style
- Author name below with dash separator
- Cards have warm cream background with subtle border

---

## 8. Contact and Location

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Visit Us                                                            |
|                                                                       |
|   +---------------------------+  +----------------------------------+ |
|   |                           |  |                                  | |
|   |   [Map Placeholder]      |  |  Address:                        | |
|   |                           |  |  Al-Salam District, Tabuk, KSA   | |
|   |                           |  |                                  | |
|   |                           |  |  Hours:                          | |
|   |                           |  |  Daily 11:00 AM - 12:00 AM       | |
|   |                           |  |                                  | |
|   |                           |  |  Phone: +966-XX-XXX-XXXX         | |
|   |                           |  |                                  | |
|   |                           |  |  Delivery: Available in Tabuk     | |
|   |                           |  |  (30-45 minutes)                  | |
|   +---------------------------+  +----------------------------------+ |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Two-column: map placeholder left, details right
- Contact details with icons for each line
- Clean, easy-to-scan layout
- Mobile: stacks vertically

---

## 9. Footer

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Biryani House                                                       |
|   Authentic biryani in the heart of Tabuk                             |
|                                                                       |
|   Menu  |  Order Now  |  Contact Us  |  Our Location                  |
|                                                                       |
|   (c) 2026 Biryani House. All rights reserved.                        |
|                                                                       |
+-----------------------------------------------------------------------+
```

- Dark warm brown background
- Brand name and tagline centered
- Navigation links in a row
- Copyright at bottom
- Simple and clean

---

## Responsive Breakpoints

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | < 640px | 1 | Stack everything, full-width cards |
| Tablet | 640-1024px | 2 | Two-column grids, side-by-side CTAs |
| Desktop | > 1024px | 3 | Full grid layouts, two-column story |

## Animation Specs

- **Section entrance:** Fade in + slide up 20px, 0.6s duration, staggered 0.1s per element
- **Cards:** Scale from 0.95 to 1.0 on entrance
- **Hover on cards:** translateY(-4px) + shadow increase, 0.2s
- **Badge pulse:** Subtle opacity animation on "Open Now" dot
- **Reduced motion:** All animations disabled when user prefers reduced motion
