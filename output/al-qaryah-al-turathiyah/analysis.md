# Analysis: Al-Qaryah Al-Turathiyah Landing Page

## Design Archetype: Local Friendly (Heritage)

### Archetype Characteristics
- Warm, inviting, community-rooted
- Celebrates tradition and authenticity
- Emphasizes human connection and hospitality
- Avoids corporate or generic aesthetics
- Speaks with confidence about heritage and roots

## Visual Direction

### Color Philosophy
Drawing from the Saudi heritage palette — the warm sands of the Tabuk desert, the deep clay of traditional Najdi architecture, and the green of oases and the Saudi national identity.

- **Primary:** Desert sand and warm clay tones
- **Secondary:** Deep heritage green (referencing palm fronds, oases, Saudi identity)
- **Accent:** Burnished copper/gold (traditional metalwork, coffee pots)
- **Neutrals:** Stone whites, charcoal from traditional cooking hearths

### Typography Direction
- Arabic: A traditional Naskh or Kufi-inspired display font for headings, clean readable font for body
- English: Complementary serif or humanist sans-serif
- Generous line height for readability in both languages

### Pattern and Motif Strategy
- CSS-generated geometric patterns inspired by traditional Saudi architectural screens (mashrabiya)
- Subtle border ornaments referencing Najdi door frames
- Repeating geometric motifs as section dividers
- No heavy imagery dependency — patterns carry the heritage feel

### Photography Direction (Guidance for Future Assets)
- Wide panoramic compositions suggesting expansive space
- Warm, golden-hour lighting
- Focus on textures: woven fabrics, brass, wood, stone
- Communal dining scenes showing hospitality
- Architectural details of the venue

## Content Strategy

### Tone of Voice
- Arabic: Elevated yet warm, drawing on Saudi hospitality language (ahlan wa sahlan, tafaddal)
- English: Welcoming, descriptive, culturally respectful
- Both: Confident, rooted, never boastful

### Key Messages
1. Authentic heritage dining experience
2. A space that honors tradition
3. Welcome to all — tourists, families, groups
4. The taste of Saudi hospitality
5. A destination, not just a restaurant

### Section Strategy
1. **Header** — Bilingual navigation with heritage geometric accent
2. **Hero** — Panoramic feel, strong Arabic headline, English subtitle
3. **Hospitality Introduction** — The story and tradition behind the restaurant
4. **Menu Sections** — Traditional dishes and group platters with descriptions
5. **The Space** — Floor seating, private sections, event hosting capacity
6. **Tourism & Group Bookings** — Pre-order info, group coordination
7. **Testimonials** — Curated reviews reflecting the experience
8. **Location** — Map embed, address, directions context
9. **WhatsApp CTA** — Persistent and section-specific
10. **Footer** — Contact, hours, social links, legal

## Technical Decisions

### Framework
- Next.js App Router with 'use client' directive
- TypeScript for type safety
- Tailwind CSS v4 for styling

### Bilingual Implementation
- Client-side language toggle (AR/EN)
- RTL/LTR layout switching
- Content stored in structured JSON objects within the component
- `dir` attribute switching on the root container

### Theme Implementation
- CSS custom properties for light/dark theming
- External theme CSS files imported
- System preference detection with manual toggle
- Heritage colors adapted for both modes

### Performance Considerations
- Self-contained component (no external dependencies beyond framework)
- CSS-only geometric patterns (no image assets for decorative elements)
- Minimal JavaScript for interactivity
- Semantic HTML for accessibility

### Responsive Strategy
- Mobile-first approach
- Hero adapts from full-width to stacked on mobile
- Menu grid: 1 column mobile, 2-3 columns desktop
- Floor seating gallery adapts to screen width
- WhatsApp CTA remains accessible at all breakpoints
