# Analysis: Glamour Salon & Spa Landing Page

## Design Direction

### Archetype: Clean Service
The design follows a "clean service" archetype -- structured, professional, and focused on clarity. This differs from:
- **Eraa Nails:** More niche/artistic nail focus. Glamour is broader, more service-oriented.
- **D SPA:** Zen/wellness mood. Glamour is more glamorous and energetic while remaining professional.

### Visual Identity
- **Primary palette:** Clean white backgrounds with soft lilac/purple accents.
- **Accent color:** Rose gold for premium touches (buttons, borders, highlights).
- **Text:** Charcoal (#2D2D2D) for readability, lighter grays for secondary text.
- **Typography direction:** Modern sans-serif with elegant weight variation.
- **Photography style:** Bright, well-lit beauty photography (placeholder slots provided).

### Mood
Modern, clean, professional beauty. The salon should feel approachable yet premium. Not clinical, not over-the-top luxurious -- a balanced, confident aesthetic.

## Information Architecture

### Page Sections (Top to Bottom)

1. **Header/Nav** - Logo, language toggle (AR/EN), dark/light toggle, CTA button
2. **Hero** - Full-width glamorous statement, tagline, primary CTA
3. **Services & Pricing Grid** - Five categories (Hair, Skin, Nails, Spa, Bridal) with transparent pricing
4. **Current Offers** - Promotional banner with active deals
5. **About Glamour** - Story, mission, what sets them apart
6. **Our Team** - Key staff with roles and specialties
7. **Before/After Showcase** - Visual proof of quality (placeholder slots)
8. **Testimonials** - Client reviews in carousel/grid format
9. **WhatsApp Booking CTA** - Prominent booking section
10. **Contact & Location** - Map placeholder, address, phone, hours
11. **Footer** - Links, social, copyright

## Pricing Strategy Display

Pricing is organized in a grid/table format per service category:
- Service name (bilingual)
- Starting price in SAR
- Duration estimate where applicable
- Clear "Book Now" action per category

This transparency is the key differentiator for the business.

## Technical Decisions

- **Framework:** Next.js App Router with 'use client' directive
- **Styling:** Tailwind CSS v4 with CSS custom properties for theming
- **Bilingual:** Runtime toggle with AR (RTL) and EN (LTR) support
- **Theming:** Light/dark mode via CSS variables and class toggle
- **Animations:** CSS-based with IntersectionObserver for scroll reveals
- **Self-contained:** Single TSX component with all content from JSON

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked cards)
- Tablet: 768px - 1024px (two columns where appropriate)
- Desktop: > 1024px (full grid layouts, side-by-side sections)

## Performance Considerations

- No external dependencies beyond Next.js and Tailwind
- CSS custom properties for instant theme switching
- Lazy animations triggered on viewport entry
- WhatsApp link uses direct API URL for immediate engagement
