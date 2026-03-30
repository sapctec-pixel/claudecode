# Fakhama Tabuk - Wireframe Specification

## Page Structure (Top to Bottom)

---

### 1. HEADER (Sticky)
```
+-----------------------------------------------------------------------+
| [Brand Logo/Name]          [Nav Links]        [AR/EN] [Dark/Light] [CTA] |
+-----------------------------------------------------------------------+
```
- Transparent on hero, solid on scroll with backdrop blur
- Brand name in elegant serif
- Navigation: Portfolio | Craftsmanship | Materials | Process | Testimonials | Contact
- Language toggle (AR/EN)
- Theme toggle (sun/moon icon)
- CTA button: "Book Consultation" in gold

---

### 2. HERO (100vh)
```
+-----------------------------------------------------------------------+
|                                                                         |
|  [Decorative gold line]                                                |
|                                                                         |
|  [Overtitle - small caps, gold]                                        |
|                                                                         |
|  [Main Headline - large serif]                                         |
|                                                                         |
|  [Subtitle paragraph - max 600px]                                      |
|                                                                         |
|  [CTA Primary Button]  [CTA Secondary Link]                           |
|                                                                         |
|  [Scroll indicator - animated chevron]                                 |
|                                                                         |
+-----------------------------------------------------------------------+
```
- Full viewport with rich gradient background simulating warm interior lighting
- CSS pattern overlay simulating fabric texture
- Subtle parallax on decorative elements
- Grand reveal animation (fade up + scale) on load

---

### 3. PORTFOLIO SHOWCASE
```
+-----------------------------------------------------------------------+
|  [Section Title]                                                       |
|  [Section Subtitle]                                                    |
|                                                                         |
|  [All] [Majlis] [Reception] [Dining] [Bedroom]  <- Filter tabs        |
|                                                                         |
|  +----------+  +----------+  +----------+                              |
|  |          |  |          |  |          |                              |
|  |  Image   |  |  Image   |  |  Image   |                              |
|  | Placeholder| Placeholder| Placeholder|                              |
|  |          |  |          |  |          |                              |
|  | Title    |  | Title    |  | Title    |                              |
|  | Desc     |  | Desc     |  | Desc     |                              |
|  +----------+  +----------+  +----------+                              |
|                                                                         |
|  +----------+  +----------+  +----------+                              |
|  |          |  |          |  |          |                              |
|  | ...      |  | ...      |  | ...      |                              |
|  +----------+  +----------+  +----------+                              |
+-----------------------------------------------------------------------+
```
- 3 columns desktop, 2 tablet, 1 mobile
- Category filter tabs with animated underline
- Cards with gradient placeholder (simulating interior photo)
- Hover: scale up slightly, overlay with title
- Staggered reveal animation on scroll

---

### 4. CRAFTSMANSHIP
```
+-----------------------------------------------------------------------+
|                    [Wood grain texture background]                      |
|                                                                         |
|  [Section Title]                                                       |
|  [Section Subtitle]                                                    |
|                                                                         |
|  +---------------------------+  +---------------------------+          |
|  | [Decorative border]       |  | [Large visual area with   |          |
|  |                           |  |  CSS gradient simulating   |          |
|  | Point 1: Made to Order    |  |  a luxury interior]        |          |
|  | [description]             |  |                           |          |
|  |                           |  |                           |          |
|  | Point 2: Master Artisans  |  |                           |          |
|  | [description]             |  |                           |          |
|  |                           |  |                           |          |
|  | Point 3: Quality Assured  |  |                           |          |
|  | [description]             |  |                           |          |
|  +---------------------------+  +---------------------------+          |
+-----------------------------------------------------------------------+
```
- Split layout: text left, visual right (flipped in RTL)
- Background: subtle wood grain CSS pattern
- Gold accent lines between points
- Reveal from left/right on scroll

---

### 5. PREMIUM MATERIALS
```
+-----------------------------------------------------------------------+
|  [Section Title]                                                       |
|  [Section Subtitle]                                                    |
|                                                                         |
|  +---------------+  +---------------+                                  |
|  | [Wood grain   |  | [Fabric       |                                  |
|  |  gradient]    |  |  gradient]    |                                  |
|  |               |  |               |                                  |
|  | Natural       |  | Premium       |                                  |
|  | Hardwoods     |  | Fabrics       |                                  |
|  | [description] |  | [description] |                                  |
|  | [detail tag]  |  | [detail tag]  |                                  |
|  +---------------+  +---------------+                                  |
|                                                                         |
|  +---------------+  +---------------+                                  |
|  | [Metal        |  | [Cushion      |                                  |
|  |  gradient]    |  |  gradient]    |                                  |
|  | Metals &      |  | Cushioning    |                                  |
|  | Finishes      |  | & Support     |                                  |
|  | [description] |  | [description] |                                  |
|  | [detail tag]  |  | [detail tag]  |                                  |
|  +---------------+  +---------------+                                  |
+-----------------------------------------------------------------------+
```
- 2x2 grid, each card with unique gradient top section
- Cards have slight elevation and gold border on hover
- Staggered entrance animation

---

### 6. PROCESS (4 Steps)
```
+-----------------------------------------------------------------------+
|  [Section Title]                                                       |
|  [Section Subtitle]                                                    |
|                                                                         |
|  [01]--------[02]--------[03]--------[04]   <- Gold connecting line    |
|                                                                         |
|  Consultation  Design    Manufacturing  Installation                   |
|  [desc]        [desc]    [desc]         [desc]                         |
+-----------------------------------------------------------------------+
```
- Desktop: Horizontal timeline with gold connecting line
- Mobile: Vertical timeline
- Each step has a numbered circle with gold border
- Steps animate in sequence on scroll
- Subtle pulse animation on the connecting line

---

### 7. TESTIMONIALS
```
+-----------------------------------------------------------------------+
|  [Fabric texture background]                                           |
|                                                                         |
|  [Section Title]                                                       |
|  [Section Subtitle]                                                    |
|                                                                         |
|  +-------------------------------------------------------------------+|
|  |  [Large gold quotation mark]                                      ||
|  |                                                                     ||
|  |  "Quote text in elegant italic..."                                ||
|  |                                                                     ||
|  |  -- Author Name                                                   ||
|  |     Role / Location                                               ||
|  +-------------------------------------------------------------------+|
|                                                                         |
|  [Dot navigation: o  o  o]                                             |
+-----------------------------------------------------------------------+
```
- Single testimonial visible at a time
- Auto-rotating carousel with manual dot navigation
- Large decorative gold quotation marks
- Fade transition between testimonials
- Background: subtle fabric weave texture

---

### 8. CONSULTATION CTA
```
+-----------------------------------------------------------------------+
|  [Rich burgundy/walnut gradient background]                            |
|                                                                         |
|  [Decorative gold border frame]                                        |
|                                                                         |
|  [Headline - large, gold text]                                         |
|  [Subtitle]                                                            |
|                                                                         |
|  [WhatsApp CTA Button - large, gold]                                   |
|                                                                         |
|  [Note: "First consultation is free"]                                  |
|                                                                         |
+-----------------------------------------------------------------------+
```
- Dramatic gradient background
- Gold decorative frame border
- Large, commanding headline
- WhatsApp button with icon
- Grand reveal animation

---

### 9. CONTACT
```
+-----------------------------------------------------------------------+
|  [Section Title]                                                       |
|                                                                         |
|  +-------------------+  +-------------------+  +-------------------+  |
|  | Location icon     |  | Phone icon        |  | Hours icon        |  |
|  | Tabuk, KSA        |  | +966XXXXXXXXX     |  | Sat-Thu 9AM-10PM |  |
|  +-------------------+  +-------------------+  +-------------------+  |
|                                                                         |
|  [TikTok link]                                                         |
+-----------------------------------------------------------------------+
```
- Clean three-column info cards
- Icons in gold
- Minimal, sophisticated layout

---

### 10. FOOTER
```
+-----------------------------------------------------------------------+
|  [Brand Name]                                                          |
|  [Tagline]                                                             |
|                                                                         |
|  [Gold divider line]                                                   |
|                                                                         |
|  Copyright 2026 Fakhama Tabuk. All rights reserved.                   |
+-----------------------------------------------------------------------+
```
- Minimal footer
- Dark background
- Gold accents
- Brand tagline

---

## Responsive Breakpoints

| Breakpoint | Width | Columns | Key Changes |
|------------|-------|---------|-------------|
| Mobile | < 768px | 1 | Stack all, vertical timeline, hamburger nav |
| Tablet | 768-1024px | 2 | 2-col grids, horizontal timeline |
| Desktop | > 1024px | 3 | Full layout as wireframed |

## Animation Triggers
- Header: Solid background after 100px scroll
- Hero: Immediate on load (1200ms grand reveal)
- All sections: Intersection Observer at 15% visibility
- Stagger: 150ms delay between sibling elements
- Testimonials: Auto-rotate every 6 seconds
