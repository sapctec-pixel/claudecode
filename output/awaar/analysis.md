# Awaar Restaurant - Design & Content Analysis

## Design Archetype: Modern Retail

### Rationale
Awaar requires a **conversion-optimized** interface, not a traditional atmospheric restaurant page. The primary goal is to funnel visitors toward placing orders as efficiently as possible. This aligns with the "modern retail" archetype: clean, functional, product-focused.

### Design Principles
1. **Efficiency over ambiance** - Every element serves the ordering funnel
2. **Clarity over decoration** - Typography and spacing do the heavy lifting
3. **Speed over storytelling** - Users should reach the menu within one scroll
4. **Trust over persuasion** - Social proof and rating displayed prominently, early

## Visual Direction

### Color Palette
- **Primary:** Deep burgundy/maroon (#7A1B2D) - warmth, appetite appeal, premium feel
- **Secondary:** Warm cream (#FAF5EF) - clean background, readability
- **Accent:** Burnt sienna (#C4652A) - CTAs, highlights, urgency
- **Neutrals:** Soft greys (#6B6B6B, #E8E3DD) - structure, borders, secondary text
- **Dark mode:** Deep charcoal (#1A1A1A) with adjusted palette for contrast

### Typography Strategy
- Headlines: Bold, high contrast, Arabic-first sizing
- Body: Clean, readable, generous line-height for bilingual text
- CTAs: Medium weight, clear action language

### Layout Strategy
- **Header:** Minimal - logo, language toggle, theme toggle, order CTA
- **Hero:** Split design - text left (or right in RTL), visual placeholder right
- **Menu:** Horizontal scrolling cards - category-based, visual, tappable
- **Quick Order:** 3-step numbered process - visual clarity
- **Social Proof:** Compact bar with key metrics
- **Reviews:** Carousel or grid of selected testimonials
- **Contact:** Map placeholder + essential details
- **Footer:** Compact, functional

## Content Strategy

### Tone of Voice
- **Arabic:** Confident, warm, direct. No flowery language. Action-oriented.
- **English:** Clean, modern, efficient. Restaurant-appropriate warmth without excess.

### Key Messages
1. Order easily, eat quickly
2. Trusted by 1,176+ customers
3. Quality food, efficient service
4. Your favorite dishes, one tap away

### Bilingual Approach
- Full content parity between Arabic and English
- RTL/LTR layout mirroring
- Arabic as the default language (primary market)
- Seamless toggle without page reload

## Conversion Optimization

### Primary CTA: WhatsApp Order
- Floating button (persistent)
- Hero section CTA
- Post-menu CTA
- Contact section CTA

### Secondary CTAs
- Browse menu (scroll to menu section)
- View location (scroll to contact)

### Trust Signals
- Rating badge (4.4/5)
- Review count (1,176)
- Open status indicator
- Location in established district (Al-Olaya)

## Technical Considerations

- Next.js App Router with 'use client' for interactivity
- Tailwind CSS v4 for styling
- CSS custom properties for theming
- Framer Motion-style animations via CSS transitions
- No external dependencies beyond React/Next.js/Tailwind
- Self-contained component with inline content
