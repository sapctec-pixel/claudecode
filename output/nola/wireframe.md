# Nola Restaurant - Wireframe Specification

## Layout Grid
- Max container: 1280px centered
- 12-column grid on desktop, 4-column on mobile
- Gutter: 24px desktop, 16px mobile

---

## 1. Header (Fixed)
```
+------------------------------------------------------------------+
| [Nola Logo/Name]         [Nav Links]    [AR/EN] [Light/Dark]     |
+------------------------------------------------------------------+
```
- Sticky header with backdrop blur on scroll
- Logo left-aligned (right in RTL)
- Navigation links centered: Story, Menu, Ingredients, Drinks, Ambiance, Reviews
- Language toggle and theme switcher right-aligned
- Mobile: hamburger menu with slide-in drawer

## 2. Hero Section (100vh)
```
+------------------------------------------------------------------+
|                                                                    |
|              [Section Label: Authentic Italian]                    |
|                                                                    |
|           The Warmth of Italian Flavors                            |
|                                                                    |
|     From freshly made pasta to slow-simmered tomato sauce...       |
|                                                                    |
|        [Explore Our Menu]    [Reserve Now]                         |
|                                                                    |
|           --- decorative olive branch divider ---                  |
+------------------------------------------------------------------+
```
- Warm gradient background (cream to olive tint)
- Large serif heading with elegant spacing
- Two CTA buttons: primary (tomato red) and secondary (outlined)

## 3. La Cucina (Our Story)
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|                                                                    |
|  +---------------------------+  +------------------------------+  |
|  |                           |  |                              |  |
|  |   Our Kitchen, Our Story  |  |   [Decorative Italian        |  |
|  |                           |  |    pattern / illustration]   |  |
|  |   Paragraph 1...          |  |                              |  |
|  |   Paragraph 2...          |  |                              |  |
|  |                           |  |                              |  |
|  |   "Every dish tells       |  |                              |  |
|  |    a story..."            |  |                              |  |
|  +---------------------------+  +------------------------------+  |
+------------------------------------------------------------------+
```
- Two-column split layout (stacked on mobile)
- Left: text content with italic pull quote
- Right: decorative element (CSS-generated Italian pattern)

## 4. Signature Dishes
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  Pasta & Pizza, the Nola Way                                      |
|  Subtitle text...                                                  |
|                                                                    |
|  +----------------+  +----------------+  +----------------+       |
|  | [Tag]          |  | [Tag]          |  | [Tag]          |       |
|  | Dish Name      |  | Dish Name      |  | Dish Name      |       |
|  | Description... |  | Description... |  | Description... |       |
|  +----------------+  +----------------+  +----------------+       |
|                                                                    |
|  +----------------+  +----------------+  +----------------+       |
|  | [Tag]          |  | [Tag]          |  | [Tag]          |       |
|  | Dish Name      |  | Dish Name      |  | Dish Name      |       |
|  | Description... |  | Description... |  | Description... |       |
|  +----------------+  +----------------+  +----------------+       |
+------------------------------------------------------------------+
```
- 3-column grid (2 on tablet, 1 on mobile)
- Cards with tag badge, dish name in serif italic, description
- Hover: subtle elevation and warm shadow
- Staggered entrance animation

## 5. Fresh Ingredients
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  Fresh Ingredients, Authentic Flavors                              |
|  Description paragraph...                                          |
|                                                                    |
|  +----------+  +----------+  +----------+  +----------+          |
|  |  [Icon]  |  |  [Icon]  |  |  [Icon]  |  |  [Icon]  |          |
|  |  Name    |  |  Name    |  |  Name    |  |  Name    |          |
|  |  Origin  |  |  Origin  |  |  Origin  |  |  Origin  |          |
|  +----------+  +----------+  +----------+  +----------+          |
+------------------------------------------------------------------+
```
- Forest green background accent
- 4-column ingredient cards (2 on mobile)
- Each card: icon, ingredient name, origin
- Subtle border and warm styling

## 6. Wine & Drinks
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  Carefully Curated Beverages                                       |
|  Description...                                                    |
|                                                                    |
|  +--------------------+  +--------------------+                    |
|  |  Name              |  |  Name              |                    |
|  |  Description       |  |  Description       |                    |
|  +--------------------+  +--------------------+                    |
|  +--------------------+  +--------------------+                    |
|  |  Name              |  |  Name              |                    |
|  |  Description       |  |  Description       |                    |
|  +--------------------+  +--------------------+                    |
+------------------------------------------------------------------+
```
- 2-column grid with elegant card design
- Burgundy/wine accent colors
- Horizontal divider between entries

## 7. Ambiance
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  Warm Italian Atmosphere                                           |
|  Description...                                                    |
|                                                                    |
|  +------+  +------+  +------+  +------+                          |
|  | Feat |  | Feat |  | Feat |  | Feat |                          |
|  | ure  |  | ure  |  | ure  |  | ure  |                          |
|  +------+  +------+  +------+  +------+                          |
+------------------------------------------------------------------+
```
- Warm background gradient
- Feature pills/badges in a row
- Decorative Italian ornament accents

## 8. Testimonials
```
+------------------------------------------------------------------+
|  [Section Label]          [4.3 Rating]  [718 reviews]             |
|  What Our Guests Say                                               |
|                                                                    |
|  +------------------+  +------------------+  +------------------+ |
|  | "Review text..." |  | "Review text..." |  | "Review text..." | |
|  |                  |  |                  |  |                  | |
|  | Name             |  | Name             |  | Name             | |
|  | Stars            |  | Stars            |  | Stars            | |
|  +------------------+  +------------------+  +------------------+ |
+------------------------------------------------------------------+
```
- 3-column card layout (scrollable on mobile)
- Star ratings
- Quoted text in italic serif
- Overall rating badge prominent

## 9. Reservation CTA
```
+------------------------------------------------------------------+
|                                                                    |
|              Reserve Your Table                                    |
|              Description text...                                   |
|                                                                    |
|              [Reserve via WhatsApp Button]                         |
|                                                                    |
|              Fine print note...                                    |
+------------------------------------------------------------------+
```
- Full-width warm background (tomato red gradient)
- Centered text, large CTA button
- WhatsApp icon in button

## 10. Contact
```
+------------------------------------------------------------------+
|  [Section Label]                                                   |
|  Visit Nola                                                        |
|                                                                    |
|  +------------------+  +------------------+  +------------------+ |
|  | Location Icon    |  | Hours Icon       |  | Phone Icon       | |
|  | Address          |  | Working Hours    |  | Phone Number     | |
|  +------------------+  +------------------+  +------------------+ |
+------------------------------------------------------------------+
```
- 3-column info cards
- Icons for each contact type
- Clean, minimal presentation

## 11. Footer
```
+------------------------------------------------------------------+
|  Nola                                                              |
|  Authentic Italian in the Heart of Tabuk                           |
|  2026 All Rights Reserved                                          |
+------------------------------------------------------------------+
```
- Minimal footer with branding
- Tagline repetition
- Copyright

---

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Animation Triggers
- All sections: fade-in-up on scroll intersection (threshold 0.15)
- Dish cards: staggered entrance (100ms delay between items)
- Header: background opacity transition on scroll
- CTA buttons: gentle scale on hover (1.03)
- Cards: elevation change on hover
