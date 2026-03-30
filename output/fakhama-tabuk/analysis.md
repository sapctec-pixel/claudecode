# Fakhama Tabuk - Design and Content Analysis

## Design Archetype: Luxury Interior Design

### Visual Direction
The design must communicate opulence, craftsmanship, and heritage. Every element should feel curated, not templated. The aesthetic draws from high-end interior design magazines and luxury brand websites.

### Color Rationale

| Token | Hex | Role |
|-------|-----|------|
| Walnut Brown | #5C3D2E | Primary brand color, warmth, wood association |
| Deep Burgundy | #6B1D2A | Accent, richness, royal heritage |
| Brushed Gold | #C9A84C | Highlights, luxury signifier, metallic warmth |
| Cream/Ivory | #F5F0E8 | Light background, fabric texture association |
| Charcoal | #2C2C2C | Dark background, text, contrast |

### Typography Strategy
- Headings: Serif or Naskh-style font for Arabic, elegant serif for English
- Body: Clean, readable sans-serif with generous line height
- Size scale: Large, confident headings with ample whitespace

### Layout Principles
- Generous whitespace communicating luxury and confidence
- Full-width hero with dramatic imagery direction
- Asymmetric grid layouts in portfolio section
- Subtle background textures simulating fabric and wood grain via CSS
- Slow, deliberate scroll animations (no quick, flashy effects)

## Section Analysis

### 1. Header
- Sticky navigation with transparent-to-solid transition on scroll
- Bilingual toggle (AR/EN)
- Light/dark mode switch
- Minimal navigation links

### 2. Hero
- Full viewport height
- Dramatic gradient overlay simulating warm interior lighting
- Bold headline with gold accent
- Subtle floating animation on decorative elements

### 3. Portfolio Showcase
- Category filter tabs: Majlis, Reception, Dining, Bedroom
- Masonry-style grid with hover effects
- Each item shows project name and brief description
- Reveal animation on scroll

### 4. Craftsmanship
- Split layout: text and visual
- Background texture simulating wood grain
- Key differentiators highlighted

### 5. Premium Materials
- Card-based layout with material categories
- Each card has gradient background simulating the material
- Hover effect reveals more detail

### 6. Process (4 Steps)
- Horizontal timeline on desktop, vertical on mobile
- Steps: Consultation, Design, Manufacture, Installation
- Connected by gold line
- Each step reveals on scroll

### 7. Testimonials
- Large quote marks in gold
- Client name and project type
- Carousel or stacked cards
- Subtle background pattern

### 8. Consultation CTA
- Full-width section with dramatic background
- WhatsApp integration for direct contact
- Clear value proposition

### 9. Contact
- Business hours, location, phone
- Embedded map direction link
- Social media links

### 10. Footer
- Minimal, elegant
- Brand mark, copyright, key links

## Animation Strategy
- All animations use `ease-out` or custom cubic-bezier for luxury feel
- Intersection Observer for scroll-triggered reveals
- Duration: 800ms-1200ms for major reveals
- Staggered delays for grouped elements
- No bounce or elastic effects (too playful for luxury)
- Parallax-lite on hero section

## Performance Considerations
- CSS-only textures and gradients (no heavy image dependencies)
- Lazy intersection observer for below-fold animations
- Self-contained component with no external dependencies beyond Tailwind
