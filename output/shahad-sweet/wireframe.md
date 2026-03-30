# Shahad Sweet - Wireframe Specification

## Page Layout Overview

```
+============================================+
|              STICKY HEADER                 |
|  Logo | Nav Links | Lang | Theme | CTA    |
+============================================+

+--------------------------------------------+
|                HERO SECTION                 |
|                                            |
|  [Badge: Tabuk's Most Trusted]             |
|                                            |
|  حلاوة تبوك تبدأ من شهد                    |
|  Tabuk's Sweetest Tradition                |
|                                            |
|  Subheadline text...                       |
|                                            |
|  [Explore Products]  [Order via WhatsApp]  |
|                                            |
|  ~~~ Warm gradient background ~~~          |
+--------------------------------------------+

+--------------------------------------------+
|           BESTSELLERS SECTION              |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  [All] [Cakes] [Baklava] [Kunafa] [Occ.]  |
|                                            |
|  +----------+  +----------+  +----------+  |
|  | Product  |  | Product  |  | Product  |  |
|  | Image BG |  | Image BG |  | Image BG |  |
|  | Name     |  | Name     |  | Name     |  |
|  | Desc     |  | Desc     |  | Desc     |  |
|  | Price    |  | Price    |  | Price    |  |
|  | [Order]  |  | [Order]  |  | [Order]  |  |
|  +----------+  +----------+  +----------+  |
|                                            |
|  +----------+  +----------+  +----------+  |
|  | Product  |  | Product  |  | Product  |  |
|  | ...      |  | ...      |  | ...      |  |
|  +----------+  +----------+  +----------+  |
|                                            |
|             [View All Products]            |
+--------------------------------------------+

+--------------------------------------------+
|          CUSTOM ORDERS SECTION             |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  +------------------+  +----------------+  |
|  | Wedding Cakes    |  | Event Platters |  |
|  | Icon/Illustration|  | Icon/Illustr.  |  |
|  | Description      |  | Description    |  |
|  | * Feature 1      |  | * Feature 1    |  |
|  | * Feature 2      |  | * Feature 2    |  |
|  | * Feature 3      |  | * Feature 3    |  |
|  +------------------+  +----------------+  |
|                                            |
|  +-------------------------------------+   |
|  |        Corporate Hospitality        |   |
|  |  Icon  |  Description + Features    |   |
|  +-------------------------------------+   |
|                                            |
|         [Request a Custom Order]           |
+--------------------------------------------+

+--------------------------------------------+
|           BRANCHES SECTION                 |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  +--------+  +--------+  +--------+       |
|  | Al Olya|  |Al Rawda|  |Al Dakhl|       |
|  | Main   |  | Branch |  | Branch |       |
|  | Hours  |  | Hours  |  | Hours  |       |
|  | [Dir.] |  | [Dir.] |  | [Dir.] |       |
|  +--------+  +--------+  +--------+       |
|                                            |
|  +--------+  +--------+  +--------+       |
|  |Al Hamra|  |Al Muroj|  |Al Masif|       |
|  | Branch |  | Branch |  | Branch |       |
|  | Hours  |  | Hours  |  | Hours  |       |
|  | [Dir.] |  | [Dir.] |  | [Dir.] |       |
|  +--------+  +--------+  +--------+       |
|                                            |
|  +-------------------------------------+   |
|  | Tabuk Al-Jadidah Branch             |   |
|  +-------------------------------------+   |
|                                            |
|  Delivery note (HungerStation)             |
+--------------------------------------------+

+--------------------------------------------+
|            ABOUT SECTION                   |
|                                            |
|  Section Title                             |
|  Headline                                  |
|                                            |
|  +------------------+  +---------------+   |
|  |                  |  | Story text    |   |
|  | Decorative       |  | paragraph 1   |   |
|  | bakery pattern   |  | paragraph 2   |   |
|  | or warm visual   |  | paragraph 3   |   |
|  |                  |  |               |   |
|  +------------------+  +---------------+   |
|                                            |
|  +----------+  +----------+  +----------+  |
|  | Value 1  |  | Value 2  |  | Value 3  |  |
|  | Premium  |  | Hand-    |  | Serving  |  |
|  | Ingredi. |  | crafted  |  | Tabuk    |  |
|  +----------+  +----------+  +----------+  |
+--------------------------------------------+

+--------------------------------------------+
|         TESTIMONIALS SECTION               |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  +----------+  +----------+  +----------+  |
|  | Quote    |  | Quote    |  | Quote    |  |
|  | "..."    |  | "..."    |  | "..."    |  |
|  | - Name   |  | - Name   |  | - Name   |  |
|  | Occasion |  | Occasion |  | Occasion |  |
|  +----------+  +----------+  +----------+  |
+--------------------------------------------+

+--------------------------------------------+
|         SOCIAL MEDIA SECTION               |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  [IG: 3.7K] [FB] [Snap] [TikTok] [Hunger] |
|                                            |
|         [Follow Us on Instagram]           |
+--------------------------------------------+

+--------------------------------------------+
|           CONTACT SECTION                  |
|                                            |
|  Section Title + Subtitle                  |
|                                            |
|  +------------------+  +----------------+  |
|  | WhatsApp CTA     |  | Order Form     |  |
|  | Big green button |  | Name           |  |
|  |                  |  | Phone          |  |
|  | Phone number     |  | Occasion Type  |  |
|  | Call us          |  | Date           |  |
|  |                  |  | Details        |  |
|  |                  |  | [Submit]       |  |
|  +------------------+  +----------------+  |
+--------------------------------------------+

+============================================+
|                FOOTER                      |
|                                            |
|  Brand + Tagline                           |
|                                            |
|  Quick Links | Branches | Social Links     |
|                                            |
|  Copyright line                            |
|  "Made with love in Tabuk"                 |
+============================================+
```

## Responsive Behavior

### Mobile (< 768px)
- Hamburger menu replaces nav links
- Product grid: 1 column (swipeable horizontal scroll option)
- Custom orders: stacked vertically
- Branches: 2-column grid then 1-column
- Contact: form takes full width, WhatsApp CTA above
- Footer: single column stack

### Tablet (768px - 1024px)
- Nav collapses to essential items + hamburger
- Product grid: 2 columns
- Custom orders: 2 columns
- Branches: 3 columns

### Desktop (> 1024px)
- Full nav bar visible
- Product grid: 3 columns
- Custom orders: 2+1 layout
- Branches: 3-4 column grid

## Animation Specifications
- **Section entry:** Fade up with 0.6s duration, staggered 100ms between children
- **Product cards:** Scale 1.02 on hover with shadow elevation, 300ms transition
- **Category tabs:** Underline slide animation on active state
- **Branch cards:** Subtle border glow on hover
- **CTA buttons:** Gentle pulse on hero, warm glow on hover
- **Testimonials:** Soft fade between quotes if carousel
- **All animations:** Respect `prefers-reduced-motion: reduce`
