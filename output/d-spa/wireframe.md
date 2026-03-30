# D SPA Wireframe Specification

## Layout Overview

```
[Full Page - Single scroll landing page]

+--------------------------------------------------+
|                    HEADER                         |
|  [Logo: D SPA]          [Nav Links]  [AR/EN] [D] |
+--------------------------------------------------+

+--------------------------------------------------+
|                                                    |
|                   HERO SECTION                     |
|                                                    |
|            ~ Organic gradient background ~         |
|                                                    |
|              [Tagline - small caps]                |
|         [Headline - large serif text]              |
|            [Description paragraph]                 |
|                                                    |
|       [Book Your Session]  [Explore Packages]      |
|                                                    |
|           ~ Decorative wave divider ~              |
+--------------------------------------------------+

+--------------------------------------------------+
|              SPA PACKAGES SECTION                  |
|                                                    |
|         [Section Title]                            |
|         [Section Subtitle]                         |
|                                                    |
|  +----------+  +----------+  +----------+         |
|  |          |  |          |  |          |          |
|  | Relaxa-  |  | Deep     |  | Facial   |         |
|  | tion     |  | Tissue   |  | Care     |         |
|  |          |  |          |  |          |          |
|  | Duration |  | Duration |  | Duration |         |
|  | Details  |  | Details  |  | Details  |         |
|  | Includes |  | Includes |  | Includes |         |
|  | Price    |  | Price    |  | Price    |         |
|  | [Book]   |  | [Book]   |  | [Book]   |         |
|  +----------+  +----------+  +----------+         |
|                                                    |
|  +----------+  +----------+                        |
|  |          |  |          |                         |
|  | Body     |  | Couples  |                        |
|  | Care     |  | Package  |                        |
|  |          |  |          |                         |
|  | Duration |  | Duration |                        |
|  | Details  |  | Details  |                        |
|  | Includes |  | Includes |                        |
|  | Price    |  | Price    |                        |
|  | [Book]   |  | [Book]   |                        |
|  +----------+  +----------+                        |
+--------------------------------------------------+

+--------------------------------------------------+
|           THE D SPA EXPERIENCE SECTION             |
|                                                    |
|         [Section Title]                            |
|         [Section Subtitle]                         |
|                                                    |
|         [Philosophy paragraph - centered,          |
|          max-width for readability]                |
|                                                    |
|  +----------+  +----------+                        |
|  | Pillar   |  | Pillar   |                        |
|  | Icon     |  | Icon     |                        |
|  | Title    |  | Title    |                        |
|  | Desc     |  | Desc     |                        |
|  +----------+  +----------+                        |
|                                                    |
|  +----------+  +----------+                        |
|  | Pillar   |  | Pillar   |                        |
|  | Icon     |  | Icon     |                        |
|  | Title    |  | Title    |                        |
|  | Desc     |  | Desc     |                        |
|  +----------+  +----------+                        |
+--------------------------------------------------+

+--------------------------------------------------+
|             MEMBERSHIP SECTION                     |
|                                                    |
|         [Section Title]                            |
|         [Section Subtitle]                         |
|         [Description]                              |
|                                                    |
|  +-------------------+  +-------------------+     |
|  |                   |  |                   |      |
|  | SILVER            |  | GOLD              |      |
|  | ~~~~~~            |  | ~~~~~~            |      |
|  | - Benefit 1       |  | - Benefit 1       |      |
|  | - Benefit 2       |  | - Benefit 2       |      |
|  | - Benefit 3       |  | - Benefit 3       |      |
|  | - Benefit 4       |  | - Benefit 4       |      |
|  |                   |  | - Benefit 5       |      |
|  +-------------------+  +-------------------+     |
|                                                    |
|             [Inquire About Membership]             |
+--------------------------------------------------+

+--------------------------------------------------+
|            TESTIMONIALS SECTION                    |
|                                                    |
|         [Section Title]                            |
|         [Section Subtitle]                         |
|                                                    |
|  +--------------------------------------------+   |
|  |                                            |    |
|  |  "Quote text displayed in elegant          |    |
|  |   italic styling with quotation marks"     |    |
|  |                                            |    |
|  |        -- Author Name                      |    |
|  |        Service Used                        |    |
|  |                                            |    |
|  +--------------------------------------------+   |
|                                                    |
|             [  o  o  o  ] navigation dots          |
+--------------------------------------------------+

+--------------------------------------------------+
|              BOOKING SECTION                       |
|                                                    |
|  ~ Gold-accented background ~                      |
|                                                    |
|         [Section Title]                            |
|         [Section Subtitle]                         |
|         [Description]                              |
|                                                    |
|         [    Book via WhatsApp    ]                 |
|         ~ Large prominent button ~                 |
|                                                    |
+--------------------------------------------------+

+--------------------------------------------------+
|              CONTACT SECTION                       |
|                                                    |
|         [Section Title]                            |
|                                                    |
|  +----------+  +----------+  +----------+         |
|  | Phone    |  | Location |  | Hours    |         |
|  | Icon     |  | Icon     |  | Icon     |         |
|  | Label    |  | Label    |  | Label    |         |
|  | Value    |  | Value    |  | Value    |         |
|  +----------+  +----------+  +----------+         |
+--------------------------------------------------+

+--------------------------------------------------+
|                    FOOTER                          |
|                                                    |
|  [D SPA Logo]     [Quick Links]    [Tagline]      |
|                                                    |
|  [Copyright 2026 D SPA. All rights reserved.]     |
+--------------------------------------------------+
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked cards, hamburger menu |
| Tablet | 640-1024px | Two-column cards, full nav |
| Desktop | > 1024px | Three-column packages, generous padding |

## Component Interactions

### Header
- Sticky on scroll with subtle backdrop blur
- Shrinks slightly on scroll
- Mobile: hamburger menu with slide-in drawer

### Package Cards
- Subtle lift on hover (translateY -4px)
- Gold border shimmer on hover
- Book button appears more prominently on hover

### Testimonials
- Auto-rotating carousel (8 second intervals)
- Manual navigation via dots
- Fade transition between quotes

### Booking CTA
- Pulse animation on WhatsApp button (subtle)
- Pre-filled WhatsApp message on click

### Theme Toggle
- Smooth CSS transition between light and dark (300ms)
- Icon morphs from sun to moon

### Language Toggle
- Full content swap between Arabic and English
- Layout direction changes (LTR/RTL)
- Smooth text transition

## Animation Sequence (on scroll)

1. Element enters viewport (50% threshold)
2. Fade in from below (translateY: 30px to 0)
3. Duration: 700ms, easing: gentle cubic-bezier
4. Staggered delay for grouped elements (100ms increments)
