# Top Grill Restaurant and Lounge - Wireframe

## Layout Structure

```
[========= FULL VIEWPORT WIDTH =========]

+---------------------------------------+
| HEADER (fixed, transparent -> solid)  |
| [Logo]  [Nav Links]  [AR/EN] [Theme] |
|                          [Order CTA]  |
+---------------------------------------+

+---------------------------------------+
| HERO (100vh, full-bleed)              |
|                                       |
|   Fire.                               |
|   Flavor.                             |
|   Experience.                         |
|                                       |
|   Subtitle text here                  |
|                                       |
|   [Order WhatsApp]  [Browse Menu]     |
|                                       |
|          [4.4 / 1,248 reviews]        |
+---------------------------------------+

+---------------------------------------+
| MENU HIGHLIGHTS                       |
|                                       |
| Section Label (uppercase, accent)     |
| From Our Grill to Your Table          |
| Subtitle description                  |
|                                       |
| [Grills] [Appetizers] [Drinks] (tabs) |
|                                       |
| +----------+ +----------+ +--------+  |
| | Item 1   | | Item 2   | | Item 3 |  |
| | desc     | | desc     | | desc   |  |
| | price    | | price    | | price  |  |
| +----------+ +----------+ +--------+  |
| +----------+ +----------+ +--------+  |
| | Item 4   | | Item 5   | | Item 6 |  |
| | desc     | | desc     | | desc   |  |
| | price    | | price    | | price  |  |
| +----------+ +----------+ +--------+  |
+---------------------------------------+

+---------------------------------------+
| CATERING & EVENTS                     |
|                                       |
| Section Label                         |
| Trays for Every Occasion              |
| Subtitle                              |
|                                       |
| +----------+ +----------+ +--------+  |
| | Family   | | Majlis   | | Grand  |  |
| | Tray     | | Tray     | | Event  |  |
| |          | | [POPULAR]| |        |  |
| | 4-6 ppl  | | 8-12 ppl | | 15-20  |  |
| | desc     | | desc     | | desc   |  |
| | 349 SAR  | | 649 SAR  | | 1,199  |  |
| +----------+ +----------+ +--------+  |
|                                       |
| --- Events Section ---                |
| We Handle Your Events                 |
| Description of catering services      |
|                                       |
| [Book Your Event via WhatsApp]        |
+---------------------------------------+

+---------------------------------------+
| LOUNGE EXPERIENCE (dark, moody bg)    |
|                                       |
| Section Label                         |
| An Atmosphere Beyond the Ordinary     |
|                                       |
| Long descriptive paragraph about      |
| the lounge ambiance and experience    |
|                                       |
| * Indoor and outdoor seating          |
| * Ambient background music            |
| * Complete family privacy             |
| * Contemporary modern design          |
|                                       |
| (subtle parallax on background)       |
+---------------------------------------+

+---------------------------------------+
| SOCIAL PROOF + TESTIMONIALS           |
|                                       |
| Section Label                         |
| What Our Guests Say                   |
|                                       |
| +---+ +---+ +---+ +---+              |
| | Q | | Q | | Q | | Q |              |
| | 1 | | 2 | | 3 | | 4 |              |
| +---+ +---+ +---+ +---+              |
|                                       |
| Each card: name, text, star rating    |
+---------------------------------------+

+---------------------------------------+
| WHATSAPP CTA (full-width banner)      |
|                                       |
| Bold heading about ordering           |
| [Order via WhatsApp - large button]   |
+---------------------------------------+

+---------------------------------------+
| CONTACT                               |
|                                       |
| Visit Us in Tabuk                     |
|                                       |
| +------------------+ +-----------+    |
| | Map Placeholder  | | Address   |    |
| |                  | | Phone     |    |
| |                  | | Hours     |    |
| |                  | | WhatsApp  |    |
| +------------------+ +-----------+    |
+---------------------------------------+

+---------------------------------------+
| FOOTER                                |
| [Logo]                                |
| Restaurant & Lounge | Tabuk           |
| [Instagram] [Snapchat] [TikTok]      |
| All Rights Reserved 2026              |
+---------------------------------------+
```

## Mobile Layout (< 768px)

```
+-------------------+
| HEADER            |
| [Logo] [Menu Btn] |
+-------------------+

+-------------------+
| HERO              |
|                   |
| Fire.             |
| Flavor.           |
| Experience.       |
|                   |
| Subtitle          |
|                   |
| [Order WhatsApp]  |
| [Browse Menu]     |
|                   |
| [4.4 / 1,248]    |
+-------------------+

+-------------------+
| MENU              |
| [Grills][App][Dr] |
|                   |
| +-----------+     |
| | Item 1    |     |
| +-----------+     |
| | Item 2    |     |
| +-----------+     |
| | Item 3    |     |
| +-----------+     |
+-------------------+

+-------------------+
| CATERING          |
|                   |
| +-----------+     |
| | Family    |     |
| +-----------+     |
| +-----------+     |
| | Majlis    |     |
| | [POPULAR] |     |
| +-----------+     |
| +-----------+     |
| | Grand     |     |
| +-----------+     |
|                   |
| [Book Event]      |
+-------------------+

(remaining sections
 stack vertically)
```

## Interaction Notes

1. **Header scroll:** opacity 0 bg -> solid bg after 100px scroll
2. **Hero animation:** Each word slides up with 120ms stagger
3. **Menu tabs:** Click switches content with crossfade
4. **Catering cards:** Hover lifts card with shadow increase
5. **Lounge section:** Subtle parallax on background element
6. **Testimonials:** Cards fade-up on scroll intersection
7. **All sections:** Fade-up entrance animation on viewport entry
8. **Mobile nav:** Hamburger opens slide-down menu panel
