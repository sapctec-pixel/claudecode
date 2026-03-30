# Hayat Trove Flowers -- Wireframe Specification

## Global Layout

```
[Full-width single page, max-content 1200px centered]
[RTL/LTR adapts all layouts automatically]
[Sticky header, floating WhatsApp CTA]
```

---

## 1. Header (Sticky, Translucent)

```
+------------------------------------------------------------------+
|  [Brand: حياة تروف / Hayat Trove]    [Nav Links...]   [AR/EN] [CTA] |
+------------------------------------------------------------------+
```

- Position: sticky top, backdrop-blur with semi-transparent background
- Left (LTR) / Right (RTL): Brand name in elegant serif
- Center: Navigation links (Collections, Custom, Delivery, About, Contact)
- Right (LTR) / Left (RTL): Language toggle button + "Order Now" CTA
- Mobile: Hamburger menu with slide-in drawer
- Height: 64px desktop, 56px mobile

---

## 2. Hero Section

```
+------------------------------------------------------------------+
|                                                                    |
|          [Decorative botanical SVG elements]                       |
|                                                                    |
|              [Subtitle: small caps, sage green]                    |
|                                                                    |
|          [Headline: large serif, deep rose]                        |
|              "A Treasure of Living Beauty"                         |
|                                                                    |
|          [Description: medium body text]                           |
|                                                                    |
|     [CTA Primary: rose bg]    [CTA Secondary: outlined]           |
|                                                                    |
|          [Decorative divider: botanical vine SVG]                  |
|                                                                    |
+------------------------------------------------------------------+
```

- Full viewport height (100vh) with soft gradient background
- Decorative SVG botanical elements at corners (subtle, low-opacity)
- Text centered vertically and horizontally
- Gentle fade-in animation on load
- Background: cream with subtle radial gradient

---

## 3. Collections Section

```
+------------------------------------------------------------------+
|  [Section Label: small, sage green, uppercase tracking]            |
|  [Headline: serif]                                                 |
|  [Description: body text]                                          |
|                                                                    |
|  +-------------+  +-------------+                                  |
|  |  [Gradient   |  |  [Gradient   |                                |
|  |   bg area]   |  |   bg area]   |                                |
|  |             |  |             |                                   |
|  |  Wedding    |  |  Occasions  |                                  |
|  |  Flowers    |  |  Bouquets   |                                  |
|  |             |  |             |                                   |
|  |  [features] |  |  [features] |                                  |
|  |  [CTA btn]  |  |  [CTA btn]  |                                  |
|  +-------------+  +-------------+                                  |
|                                                                    |
|  +-------------+  +-------------+                                  |
|  |  Daily      |  |  Condolence |                                  |
|  |  Arrange.   |  |  Flowers    |                                  |
|  |  ...        |  |  ...        |                                  |
|  +-------------+  +-------------+                                  |
+------------------------------------------------------------------+
```

- 2x2 grid on desktop, single column on mobile
- Each card: gradient background top area (placeholder for future images), content below
- Cards have subtle border, rounded corners (lg), hover elevation
- Feature tags as small pills
- Fade-up animation on scroll into view

---

## 4. Custom Orders Section

```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  [Headline: "Design Your Own Arrangement"]                         |
|  [Description]                                                     |
|                                                                    |
|  +----------+    +----------+    +----------+                      |
|  | [Circle  |    | [Circle  |    | [Circle  |                      |
|  |  icon 1] |    |  icon 2] |    |  icon 3] |                      |
|  |          |    |          |    |          |                       |
|  | Step 1   |    | Step 2   |    | Step 3   |                      |
|  | Title    |    | Title    |    | Title    |                       |
|  | Desc     |    | Desc     |    | Desc     |                      |
|  +----------+    +----------+    +----------+                      |
|       |               |               |                            |
|       +------[decorative vine line]---+                            |
|                                                                    |
|            [CTA: Start Custom Order via WhatsApp]                  |
+------------------------------------------------------------------+
```

- Three columns on desktop, stacked on mobile
- Step numbers in rose-colored circles with gold border
- Decorative connecting line between steps (botanical vine motif)
- Background: subtle sage-tinted area
- Staggered fade-in animation for each step

---

## 5. Delivery Section

```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  [Headline: "We Deliver Beauty to Your Door"]                      |
|  [Description]                                                     |
|                                                                    |
|  +-------------------------+  +-------------------------+          |
|  | [Icon]                  |  | [Icon]                  |          |
|  | Same-Day Delivery       |  | Premium Packaging       |          |
|  | description...          |  | description...          |          |
|  +-------------------------+  +-------------------------+          |
|  +-------------------------+  +-------------------------+          |
|  | [Icon]                  |  | [Icon]                  |          |
|  | Full Coverage           |  | Flexible Scheduling     |          |
|  | description...          |  | description...          |          |
|  +-------------------------+  +-------------------------+          |
+------------------------------------------------------------------+
```

- 2x2 grid of feature cards
- Each with decorative icon (CSS-drawn botanical motif)
- Cards with blush pink background, gold left/right border accent
- Gentle reveal animation on scroll

---

## 6. About Section

```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  [Headline: "The Story of Hayat Trove"]                            |
|                                                                    |
|  [Paragraph 1 -- larger first letter, elegant style]               |
|  [Paragraph 2]                                                     |
|  [Paragraph 3]                                                     |
|                                                                    |
|  +----------+  +----------+  +----------+                          |
|  | Value 1  |  | Value 2  |  | Value 3  |                          |
|  | title    |  | title    |  | title    |                          |
|  | desc     |  | desc     |  | desc     |                          |
|  +----------+  +----------+  +----------+                          |
+------------------------------------------------------------------+
```

- Prose-style text block with elegant first letter
- Three value cards below in a row
- Botanical divider between text and values
- Cream background with subtle texture pattern

---

## 7. Testimonials Section

```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  [Headline: "Words from the Heart"]                                |
|                                                                    |
|  +-------------------------------------------------------+        |
|  |  [Large decorative quotation mark, rose color]         |        |
|  |                                                        |        |
|  |  "Quote text in elegant italic..."                     |        |
|  |                                                        |        |
|  |  -- Author Name                                       |         |
|  |     Occasion                                           |        |
|  +-------------------------------------------------------+        |
|                                                                    |
|         [  o   o   o  ]  (dot indicators)                          |
+------------------------------------------------------------------+
```

- Single testimonial visible at a time, auto-rotating
- Large decorative quotation mark SVG
- Fade transition between testimonials
- Dot navigation below
- Background: rose-tinted gradient

---

## 8. Contact Section

```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  [Headline: "We Are Delighted to Serve You"]                       |
|  [Description]                                                     |
|                                                                    |
|  +-------------------+    +-------------------+                    |
|  | [Phone icon]      |    | [WhatsApp icon]   |                   |
|  | 0548498465        |    | Message Us        |                   |
|  +-------------------+    +-------------------+                    |
|  +-------------------+    +-------------------+                    |
|  | [Location icon]   |    | [Clock icon]      |                   |
|  | Al-Wurood, Tabuk  |    | 8 AM - 11 PM      |                  |
|  +-------------------+    +-------------------+                    |
|                                                                    |
|         [Large WhatsApp CTA Button]                                |
+------------------------------------------------------------------+
```

- 2x2 info cards with icons
- Prominent WhatsApp CTA button at bottom
- Background: soft gradient

---

## 9. Footer

```
+------------------------------------------------------------------+
|  [Brand Name]           [Quick Links]        [Contact Summary]     |
|  [Tagline]              Collections          Phone                 |
|                         Custom Orders        Location              |
|                         Delivery             WhatsApp              |
|                         About                                      |
|                         Contact                                    |
|                                                                    |
|  -----------------------------------------------------------      |
|  [Copyright 2026 Hayat Trove. All rights reserved.]               |
+------------------------------------------------------------------+
```

- Three-column layout, single column on mobile
- Subtle top border with gold accent
- Deep rose/dark background
- Compact, elegant

---

## Floating Elements

### WhatsApp Button (Fixed)
```
         +--------+
         | [WA]   |  (bottom-right, fixed position)
         +--------+
```
- Fixed position, bottom-right (LTR) or bottom-left (RTL)
- Rose background with gentle pulse animation
- Opens WhatsApp with pre-filled message

### Back to Top
- Appears after scrolling past hero
- Small, subtle arrow button
- Smooth scroll to top

---

## Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|---------------|
| < 640px    | Single column, stacked cards, hamburger nav, larger touch targets |
| 640-768px  | Two-column cards where applicable |
| 768-1024px | Full nav visible, two-column grids |
| > 1024px   | Full desktop layout, all animations active |

---

## Animation Specifications

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero content | Fade in + slide up | Page load | 800ms |
| Section headings | Fade in | Scroll into view | 500ms |
| Collection cards | Fade up, staggered | Scroll into view | 500ms, 100ms stagger |
| Custom order steps | Fade in, staggered | Scroll into view | 500ms, 200ms stagger |
| Delivery features | Fade in | Scroll into view | 500ms |
| Testimonials | Cross-fade | Auto (5s interval) | 500ms |
| WhatsApp button | Gentle pulse | Always | 2s loop |
| Theme toggle | Smooth transition | Click | 300ms |
| Language switch | Content fade | Click | 300ms |
