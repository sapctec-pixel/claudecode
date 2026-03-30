# Atoll Restaurant - Wireframe Specification

## Design Philosophy

Editorial luxury. Asymmetric layouts. Generous negative space. Each section should feel like a page in a high-end magazine, not a conventional website. The design should breathe.

## Layout System

- Maximum content width: 1280px
- Asymmetric grid: Intentionally off-center compositions
- Generous vertical rhythm between sections (10-15vh)
- Full-bleed sections alternating with contained content

---

## Section 1: Top Bar (Sticky)

```
[LOGO/NAME]                    [Nav Links (hidden mobile)]    [AR/EN] [Theme] [Reserve CTA]
```

- Minimal height, transparent initially, solid on scroll
- Logo left-aligned (LTR) / right-aligned (RTL)
- Navigation links hidden on mobile, revealed in overlay
- Language toggle, theme toggle, and CTA always visible
- CTA styled as outlined button with gold border

---

## Section 2: Cinematic Hero (100vh)

```
+------------------------------------------------------------------+
|                                                                    |
|              [Eyebrow: Location text, letterspaced]               |
|                                                                    |
|                                                                    |
|         [Hero Headline - Large serif, 2 lines max]                |
|                                                                    |
|         [Subheadline - Lighter weight, max 2 lines]              |
|                                                                    |
|                                                                    |
|         [CTA Primary]     [CTA Secondary]                         |
|                                                                    |
|                                                                    |
|                     [Scroll indicator]                             |
+------------------------------------------------------------------+
```

- Full viewport height with dark overlay gradient
- Content vertically centered, horizontally offset (left-aligned LTR)
- Subtle parallax movement on background
- Animated entrance: staggered fade-up on headline, sub, CTAs
- Background: deep navy gradient (placeholder for future imagery)

---

## Section 3: Trust Signal Bar

```
+------------------------------------------------------------------+
|                                                                    |
|    [Star Rating 4.8]    |    [1,658 Reviews]    |    [Badge]     |
|                                                                    |
+------------------------------------------------------------------+
```

- Narrow band, centered content
- Gold accent line above
- Three metrics in a row, separated by subtle dividers
- Stars rendered in gold

---

## Section 4: Brand Story / About (Asymmetric)

```
+------------------------------------------------------------------+
|                                                                    |
|   [Eyebrow]                                                       |
|                                                                    |
|   [Large Headline]                      +-------------------+     |
|                                         |                   |     |
|   [Paragraph 1]                         |   Image           |     |
|                                         |   Placeholder     |     |
|   [Paragraph 2]                         |   (tall,          |     |
|                                         |    portrait)      |     |
|   [Paragraph 3]                         |                   |     |
|                                         +-------------------+     |
|                                                                    |
+------------------------------------------------------------------+
```

- Asymmetric two-column: 55% text / 45% image
- Text column left (LTR), with vertical gold accent line
- Image placeholder with aspect ratio ~3:4
- Staggered reveal animation

---

## Section 5: Signature Dishes (Editorial Grid)

```
+------------------------------------------------------------------+
|                                                                    |
|          [Eyebrow]                                                 |
|          [Section Headline]                                        |
|          [Subtitle]                                                |
|                                                                    |
|   +---------------------------+                                    |
|   |                           |    [Dish Name]                     |
|   |   Dish Image 1            |    [Category tag]                  |
|   |   (landscape, large)      |    [Description]                   |
|   |                           |                                    |
|   +---------------------------+                                    |
|                                                                    |
|                    +---------------------------+                   |
|   [Dish Name]      |                           |                   |
|   [Category]       |   Dish Image 2            |                   |
|   [Description]    |   (landscape)             |                   |
|                    |                           |                   |
|                    +---------------------------+                   |
|                                                                    |
|   +---------------------------+                                    |
|   |                           |    [Dish Name]                     |
|   |   Dish Image 3            |    [Category]                      |
|   |   (landscape)             |    [Description]                   |
|   |                           |                                    |
|   +---------------------------+                                    |
|                                                                    |
|                    +---------------------------+                   |
|   [Dish Name]      |                           |                   |
|   [Category]       |   Dish Image 4            |                   |
|   [Description]    |   (landscape)             |                   |
|                    |                           |                   |
|                    +---------------------------+                   |
|                                                                    |
|                    [View Full Menu CTA]                             |
|                                                                    |
+------------------------------------------------------------------+
```

- Alternating left/right layout for each dish
- Large image placeholders (16:10 ratio)
- Text aligned opposite to image
- Editorial zigzag pattern
- Each dish card animates in on scroll

---

## Section 6: The Experience

```
+------------------------------------------------------------------+
|                                                                    |
|                         [Eyebrow]                                  |
|                         [Headline]                                 |
|                         [Subtitle]                                 |
|                                                                    |
|   +-------------+  +-------------+                                 |
|   |  Icon area  |  |  Icon area  |                                 |
|   |  Title      |  |  Title      |                                 |
|   |  Desc       |  |  Desc       |                                 |
|   +-------------+  +-------------+                                 |
|                                                                    |
|   +-------------+  +-------------+                                 |
|   |  Icon area  |  |  Icon area  |                                 |
|   |  Title      |  |  Title      |                                 |
|   |  Desc       |  |  Desc       |                                 |
|   +-------------+  +-------------+                                 |
|                                                                    |
+------------------------------------------------------------------+
```

- Centered header text
- 2x2 grid of feature cards
- Cards have subtle border, no background fill
- Gold accent line at top of each card
- Stagger-reveal on scroll

---

## Section 7: Testimonials

```
+------------------------------------------------------------------+
|                                                                    |
|   [Eyebrow]                                                       |
|   [Headline]                                                       |
|                                                                    |
|   +------------------------------------------------------------+  |
|   |                                                            |  |
|   |   [Large quotation mark in gold]                           |  |
|   |                                                            |  |
|   |   "Quote text in italic serif..."                          |  |
|   |                                                            |  |
|   |   -- Author Name                                           |  |
|   |      Context                                               |  |
|   |                                                            |  |
|   +------------------------------------------------------------+  |
|                                                                    |
|              [Dot indicators: o  o  o]                             |
|                                                                    |
+------------------------------------------------------------------+
```

- Single testimonial displayed at a time
- Auto-rotating with manual dot navigation
- Large decorative gold quotation mark
- Quote in serif italic
- Clean, spacious layout

---

## Section 8: Reservation CTA (Full-width)

```
+------------------------------------------------------------------+
|                                                                    |
|              [Eyebrow]                                             |
|              [Large Headline]                                      |
|              [Subtitle text]                                       |
|                                                                    |
|              [WhatsApp CTA Button]    [Call CTA Button]            |
|                                                                    |
|              [Note text in small]                                   |
|                                                                    |
+------------------------------------------------------------------+
```

- Distinct background (surface elevated or subtle gradient)
- Centered layout
- Two CTAs side by side: WhatsApp (primary, filled gold), Call (secondary, outlined)
- WhatsApp icon inline with button text

---

## Section 9: Contact Information

```
+------------------------------------------------------------------+
|                                                                    |
|   [Eyebrow]                                                       |
|   [Headline]                                                       |
|                                                                    |
|   [Address]          [Hours]              [Phone/Email]            |
|   [City, Country]    [Weekday hours]      [Phone number]           |
|                      [Weekend hours]      [Email]                  |
|                                                                    |
|                      [Map CTA]                                     |
|                                                                    |
+------------------------------------------------------------------+
```

- Three-column grid (stacks on mobile)
- Clean typographic layout
- Gold accent on labels

---

## Section 10: Footer

```
+------------------------------------------------------------------+
|   [Gold divider line]                                              |
|                                                                    |
|   [Brand name]           [Nav links]         [Legal links]         |
|   [Tagline]                                  [Copyright 2026]      |
|                                                                    |
+------------------------------------------------------------------+
```

- Minimal footer
- Gold top border
- Three-column layout
- Muted text colors

---

## Responsive Behavior

### Mobile (< 768px)
- Hero headline scales down, remains impactful
- About section stacks vertically (image above text)
- Dish grid becomes full-width cards, stacked
- Experience grid becomes single column
- Contact grid stacks vertically
- Navigation collapses to hamburger overlay
- All horizontal padding reduces

### Tablet (768px - 1024px)
- About section maintains side-by-side with tighter ratio
- Dish grid alternating layout maintained
- Experience grid: 2x2 maintained
- Contact: 2-column + 1

---

## Animation Specifications

| Element | Animation | Duration | Delay |
|---------|-----------|----------|-------|
| Hero eyebrow | Fade up | 800ms | 0ms |
| Hero headline | Fade up | 800ms | 200ms |
| Hero subheadline | Fade up | 800ms | 400ms |
| Hero CTAs | Fade up | 800ms | 600ms |
| Scroll indicator | Pulse opacity | 2000ms | Loop |
| Trust bar items | Fade up + count | 600ms | Stagger 100ms |
| About paragraphs | Fade up | 600ms | Stagger 150ms |
| Dish cards | Fade up | 700ms | Stagger 200ms |
| Experience cards | Fade up | 600ms | Stagger 100ms |
| Testimonials | Crossfade | 500ms | Auto 6000ms |
| Section eyebrows | Fade + slide | 500ms | 0ms |
