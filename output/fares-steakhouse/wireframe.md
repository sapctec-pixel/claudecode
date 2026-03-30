# Wireframe: Fares' Steakhouse Landing Page

## Layout Philosophy
- Full-width cinematic sections with contained content
- Maximum content width: 1280px
- Dark-first design; every section breathes
- Vertical rhythm through generous spacing (80-128px between sections)
- RTL-aware grid layouts

---

## Section 1: Premium Header (Fixed)
```
+------------------------------------------------------------------------+
|  [Logo/Brand]          [Nav Links]           [AR/EN] [Dark/Light] [CTA]|
+------------------------------------------------------------------------+
```
- Fixed top, blur backdrop on scroll
- Brand name in Playfair Display, gold color
- Navigation: Our Cuts | Experience | VIP | Beverages | Reviews | Contact
- Language toggle (AR/EN), theme toggle (sun/moon)
- CTA button: "Reserve" -- gold outline, small
- On mobile: hamburger menu with full-screen overlay
- Background: transparent at top, darkens on scroll

---

## Section 2: Cinematic Hero (100vh)
```
+------------------------------------------------------------------------+
|                                                                        |
|                     [OPEN NOW badge - gold pill]                       |
|                                                                        |
|              Tabuk, Al-Salam District (small, tracked)                 |
|                                                                        |
|                  WHERE MEAT BECOMES ART                                |
|                  (hero size, Playfair Display)                         |
|                                                                        |
|         Exceptional cuts, perfect doneness, and an                     |
|         unparalleled dining experience.                                |
|                                                                        |
|        [Reserve Your Private Table]  [Explore Our Cuts]               |
|             (gold filled)               (gold outline)                 |
|                                                                        |
|                       [scroll indicator]                               |
+------------------------------------------------------------------------+
```
- Full viewport height, dark background
- CSS-generated smoke/heat effect (subtle animated gradient)
- Decorative elements: thin gold horizontal lines flanking pre-title
- Slow fade-up animations, staggered (title, subtitle, CTAs)
- Scroll indicator: thin animated line at bottom

---

## Section 3: Our Cuts -- Steak Showcase
```
+------------------------------------------------------------------------+
|  PREMIUM CUTS (section label, gold, tracked wide)                      |
|                                                                        |
|  Mastery of the Cut (large heading)                                    |
|  We source the finest cuts... (subtitle)                               |
|                                                                        |
|  +------------------+  +------------------+  +------------------+      |
|  | [CSS steak art]  |  | [CSS steak art]  |  | [CSS steak art]  |     |
|  |                  |  |                  |  |                  |      |
|  | RIBEYE           |  | FILET MIGNON     |  | NEW YORK STRIP   |     |
|  | Signature ★      |  | 200-300g          |  | 300-400g          |    |
|  | 300-450g         |  | Rec: Med Rare     |  | Rec: Medium       |    |
|  | Rec: Med Rare    |  |                  |  |                  |      |
|  | Description...   |  | Description...   |  | Description...   |     |
|  +------------------+  +------------------+  +------------------+      |
|                                                                        |
|  +------------------+  +------------------+                            |
|  | [CSS steak art]  |  | [CSS steak art]  |                           |
|  | T-BONE           |  | TOMAHAWK         |                           |
|  | 450-600g         |  | Signature ★      |                           |
|  +------------------+  +------------------+                            |
+------------------------------------------------------------------------+
```
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Each card: dark surface with subtle border, hover lift effect
- CSS art: abstract steak shape using gradients (marbling pattern)
- "Signature" badge: gold accent
- Cards animate in with stagger on scroll

---

## Section 4: Doneness Guide
```
+------------------------------------------------------------------------+
|  Doneness Guide (heading)                                              |
|  Every level tells a different story (subtitle)                        |
|                                                                        |
|  [Blue Rare] [Rare] [Med Rare*] [Medium] [Med Well] [Well Done]       |
|     ●          ●       ★●         ●         ●          ●              |
|                                                                        |
|  +----------------------------------------------------------------+   |
|  |  Visual bar: gradient from deep red -----> grey-brown          |   |
|  +----------------------------------------------------------------+   |
|                                                                        |
|  Selected: MEDIUM RARE                                                 |
|  Temperature: 53-57 C                                                  |
|  Description: Warm pink center, ideal for most premium cuts            |
|  Chef's Choice ★                                                       |
+------------------------------------------------------------------------+
```
- Interactive doneness selector (click/tap to select level)
- Color gradient bar showing the spectrum
- Each level: colored circle indicator
- Detail panel shows selected level info
- "Chef's Choice" star on Medium Rare
- Smooth transition between selections

---

## Section 5: The Fares Experience
```
+------------------------------------------------------------------------+
|  THE EXPERIENCE (section label)                                        |
|                                                                        |
|  The Fares Experience (heading)                                        |
|  Not just a meal, but a sensory journey... (subtitle)                  |
|                                                                        |
|  +-----------------------------------+  +---------------------------+  |
|  |  [Icon: Globe]                    |  |  [Icon: Flame]            |  |
|  |  Global Sourcing                  |  |  Charcoal Grilling        |  |
|  |  We import the finest...          |  |  Precision techniques...  |  |
|  +-----------------------------------+  +---------------------------+  |
|  +-----------------------------------+  +---------------------------+  |
|  |  [Icon: Clock]                    |  |  [Icon: Star]             |  |
|  |  Expert Aging                     |  |  Personal Service         |  |
|  |  Dry-aging up to 45 days...       |  |  Trained to highest...    |  |
|  +-----------------------------------+  +---------------------------+  |
+------------------------------------------------------------------------+
```
- 2x2 grid on desktop, stacked on mobile
- Each feature card: SVG icon (line-drawn, gold), heading, description
- Cards have subtle burgundy left border accent
- Staggered fade-in on scroll

---

## Section 6: VIP Dining
```
+------------------------------------------------------------------------+
|  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ |
|  ░  VIP DINING (section label, gold)                                 ░ |
|  ░                                                                   ░ |
|  ░  Your Private Table Awaits (large heading)                        ░ |
|  ░  Private dining rooms designed for absolute privacy...            ░ |
|  ░                                                                   ░ |
|  ░  ✓ Fully private dining rooms                                     ░ |
|  ░  ✓ Custom menus tailored to preferences                           ░ |
|  ░  ✓ Dedicated personal server                                      ░ |
|  ░  ✓ Ambiance designed for the occasion                             ░ |
|  ░  ✓ Guaranteed priority reservations                               ░ |
|  ░                                                                   ░ |
|  ░  [Reserve Your Private Room -- gold CTA button]                   ░ |
|  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ |
+------------------------------------------------------------------------+
```
- Full-width section with burgundy-to-black gradient background
- Centered layout with generous padding
- Check marks in gold
- Feature list with subtle animation (sequential reveal)
- Prominent gold CTA button
- Subtle gold border frame around entire section

---

## Section 7: Beverage Pairing
```
+------------------------------------------------------------------------+
|  BEVERAGES (section label)                                             |
|                                                                        |
|  The Perfect Pairing (heading)                                         |
|  Premium beverages crafted to enhance... (subtitle)                    |
|                                                                        |
|  +--------------------+  +--------------------+                        |
|  | Smoked Cherry       |  | Pomegranate Juice  |                       |
|  | Mocktail            |  | Concentrated        |                      |
|  | Pairs: Ribeye,      |  | Pairs: Filet,       |                      |
|  | Tomahawk            |  | NY Strip             |                     |
|  +--------------------+  +--------------------+                        |
|  +--------------------+  +--------------------+                        |
|  | Arabic Coffee       |  | Sparkling Water    |                       |
|  | Premium             |  | Imported            |                      |
|  | Pairs: All cuts     |  | Pairs: All cuts     |                      |
|  +--------------------+  +--------------------+                        |
+------------------------------------------------------------------------+
```
- 2-column grid, cards with dark surface
- Each card: beverage name, description, "Pairs with" tag in gold
- Clean, minimal design -- no images needed

---

## Section 8: Testimonials
```
+------------------------------------------------------------------------+
|  GUEST REVIEWS (section label)                                         |
|                                                                        |
|       ★ 4.2 / 5  --  791 reviews (centered rating display)            |
|                                                                        |
|  What Our Guests Say (heading)                                         |
|                                                                        |
|  +------------------+ +------------------+ +------------------+        |
|  | "Best steak in   | | "Tomahawk is a   | | "Private room   |        |
|  |  the Kingdom..." | |  work of art..." | |  is perfect..." |        |
|  |                  | |                  | |                  |       |
|  | -- Khalid M.     | | -- Abdullah R.   | | -- Mohammed F.  |        |
|  |    Businessman   | |    Connoisseur   | |    Regular       |        |
|  | ★★★★★           | | ★★★★★           | | ★★★★★           |        |
|  +------------------+ +------------------+ +------------------+        |
+------------------------------------------------------------------------+
```
- 3 columns desktop, horizontal scroll on mobile
- Quote cards with large quotation mark decorative element
- Star ratings in gold
- Reviewer name and role below quote

---

## Section 9: Reservation CTA
```
+------------------------------------------------------------------------+
|                                                                        |
|        Ready for an Extraordinary Experience? (heading)                |
|        Reserve your table now via WhatsApp... (subtitle)               |
|                                                                        |
|        [Reserve via WhatsApp -- large gold button with WA icon]        |
|                                                                        |
|        Private rooms require 24-hour advance booking. (note)           |
|                                                                        |
+------------------------------------------------------------------------+
```
- Centered, generous vertical padding
- Background: subtle gradient or pattern
- WhatsApp button: large, gold, with WhatsApp icon
- Subtle decorative gold lines above and below

---

## Section 10: Contact & Location
```
+------------------------------------------------------------------------+
|  CONTACT US (section label)                                            |
|                                                                        |
|  Visit Us (heading)                                                    |
|                                                                        |
|  +-------------------------------+  +-------------------------------+  |
|  | Address                       |  | Phone                         |  |
|  | Al-Salam, Tabuk, KSA         |  | 0558997100                    |  |
|  |                               |  |                               |  |
|  | Working Hours                 |  | WhatsApp                      |  |
|  | Daily 1 PM - 12 AM           |  | [Chat on WhatsApp]            |  |
|  +-------------------------------+  +-------------------------------+  |
+------------------------------------------------------------------------+
```
- 2-column layout: info cards
- Click-to-call phone link
- WhatsApp direct link
- Clean, functional design

---

## Section 11: Footer
```
+------------------------------------------------------------------------+
|                                                                        |
|  FARES' STEAKHOUSE                                                     |
|  Where Meat Becomes Art                                                |
|                                                                        |
|  [Nav Links]                                                           |
|                                                                        |
|  -------------------------------------------------------------------   |
|  2026 Fares' Steakhouse. All rights reserved. Tabuk, Saudi Arabia     |
+------------------------------------------------------------------------+
```
- Dark background, minimal
- Brand name and tagline centered
- Navigation links repeated
- Thin gold divider before copyright
- No social media links unless provided

---

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked)
- Tablet: 640px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full layout)

## Animation Triggers
- All sections: IntersectionObserver at 0.2 threshold
- Stagger delay: 150ms between items
- Duration: 800ms - 1200ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Respect prefers-reduced-motion
