# Awaar Restaurant - Landing Page Wireframe

## Layout Structure

```
[Full Width Container]
  [Max-width 1280px, centered]

=====================================================
HEADER (Sticky)
=====================================================
| Logo: "Awaar"  |  Nav Links  | [Lang] [Theme] [CTA] |
|                 |  (hidden    |                       |
|                 |   mobile)   |                       |
-----------------------------------------------------
Mobile: Logo | Hamburger Menu | Order CTA

=====================================================
HERO SECTION
=====================================================
| [Badge: Open Now]                                   |
|                                                     |
| [Left/Right Column]          [Right/Left Column]    |
| Headline (large)             Food Visual Area       |
| Subheadline (medium)         (placeholder with      |
|                               gradient overlay)     |
| [CTA: Order WhatsApp]                               |
| [CTA: Browse Menu]                                  |
|                                                     |
| --- Stats Bar ---                                   |
| [4.4 Rating] | [1,176 Reviews] | [5+ Years]        |
-----------------------------------------------------
RTL: Text right, visual left
LTR: Text left, visual right

=====================================================
MENU CATEGORIES (Horizontal Scroll)
=====================================================
| Section Label + Headline                            |
|                                                     |
| [Card 1]  [Card 2]  [Card 3]  [Card 4] -->scroll   |
| Grills    Rice &    Appetizers Salads               |
|           Mandi                                     |
| 12 items  8 items   10 items   6 items              |
|                                                     |
| [View Full Menu Button]                             |
-----------------------------------------------------
Cards: ~280px wide, fixed height, category icon area
Scrollable horizontally on mobile + desktop

=====================================================
QUICK ORDER (3-Step Process)
=====================================================
| Section Label + Headline                            |
|                                                     |
| [Step 1]--------[Step 2]--------[Step 3]            |
|  (1)              (2)              (3)              |
|  Browse          Send Your       Receive &          |
|  the Menu        Order           Enjoy              |
|  Description     Description     Description        |
|                                                     |
| [CTA: Start Your Order Now]                         |
-----------------------------------------------------
Steps connected with line/dots
Mobile: Vertical stack

=====================================================
ABOUT SECTION
=====================================================
| Section Label                                       |
|                                                     |
| Headline                                            |
| Description paragraph                               |
|                                                     |
| [Highlight 1] [Highlight 2]                         |
| [Highlight 3] [Highlight 4]                         |
-----------------------------------------------------
Highlights: checkmark + text, 2-column grid

=====================================================
WHY US (Feature Cards)
=====================================================
| [Card 1]     [Card 2]     [Card 3]     [Card 4]    |
| Quality      Fast         Direct       Prime        |
| Ingredients  Preparation  Ordering     Location     |
-----------------------------------------------------
4-column grid, 2-column on tablet, 1-column mobile
Each card: icon area + title + description

=====================================================
SOCIAL PROOF BAR
=====================================================
| Integrated into hero stats section                  |
-----------------------------------------------------

=====================================================
CUSTOMER REVIEWS
=====================================================
| Section Label + Headline                            |
|                                                     |
| [Review 1]      [Review 2]      [Review 3]         |
| Name             Name            Name               |
| Stars            Stars           Stars              |
| "Quote text"     "Quote text"    "Quote text"       |
| Date             Date            Date               |
|                                                     |
| [CTA: Join Our Satisfied Customers]                 |
-----------------------------------------------------
3-column grid, 1-column mobile
Each: quotation marks, star rating, name, date

=====================================================
CONTACT + MAP
=====================================================
| [Left Column]               [Right Column]          |
| Headline                    Map Placeholder          |
| Address                     (grey box with           |
| Phone                        pin icon)              |
| Working Hours                                       |
| [WhatsApp CTA]                                      |
-----------------------------------------------------
Mobile: Stack vertically, map on top

=====================================================
FOOTER (Compact)
=====================================================
| Logo + Tagline    |    Links    |    Copyright      |
-----------------------------------------------------
Mobile: Centered stack

=====================================================
FLOATING WHATSAPP BUTTON
=====================================================
| Fixed bottom-right (LTR) / bottom-left (RTL)       |
| Circular, accent color, WhatsApp icon + label       |
| Always visible, z-50                                |
-----------------------------------------------------


## Responsive Breakpoints

- Mobile: < 640px (single column, stacked)
- Tablet: 640px - 1024px (2-column where applicable)
- Desktop: > 1024px (full layout)

## Animation Notes

- Header: Backdrop blur on scroll
- Hero: Fade-in-up on load
- Menu cards: Stagger fade-in on scroll
- Steps: Sequential reveal on scroll
- Reviews: Slide-in on scroll
- All transitions: 300ms ease, subtle and functional
