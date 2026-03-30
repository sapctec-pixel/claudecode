# Western Road Steak & Grill - Wireframe Specification

## Overall Layout Philosophy

The page follows a vertical scroll narrative, guiding the visitor through an emotional journey: arrival (hero) -> trust (social proof) -> story (about) -> desire (menu) -> conviction (why us + reviews) -> action (reservation CTA). Dark surfaces dominate with warm gold accent moments creating visual punctuation.

---

## Section 1: Top Bar

**Layout:** Full-width slim bar, fixed at viewport top
**Height:** 40px
**Content:** Opening hours (left/right based on locale) | Location with pin icon | Language toggle
**Visual:** Darkest background (#0c0a09), muted gold text, subtle bottom border
**Behavior:** Hides on scroll down, reveals on scroll up

## Section 2: Navigation Header

**Layout:** Full-width, sticky below top bar
**Height:** 72px desktop / 64px mobile
**Content:** Logo/brand name (left) | Nav links center | Reserve CTA button (right) | Mobile hamburger
**Visual:** Transparent initially, gains dark background with blur on scroll. CTA button in gold with dark text.
**Typography:** Brand name in accent serif font, nav links in body sans-serif, all caps with wide letter spacing
**Behavior:** Transforms on scroll - background becomes solid dark with backdrop blur

## Section 3: Hero Section

**Layout:** Full viewport height (100vh), no padding
**Content:** Large heading centered, subtitle below, two CTAs side by side (primary gold, secondary outlined)
**Visual treatment:**
- Background: Deep charcoal gradient with subtle texture overlay simulating dark wood or leather
- Gold decorative line/ornament above the heading
- Text: White heading in display serif font, lighter subtitle
- Subtle animated grain texture overlay for depth
- Bottom: gentle fade to next section
**Responsive:** Heading scales from 5.5rem (desktop) to 2.5rem (mobile). Stack CTAs vertically on mobile.

## Section 4: Trust Signals Bar

**Layout:** Contained width, horizontal row of 3-4 stats
**Height:** ~120px
**Content:** Rating (4.5/5 with stars), Review count (5,700+), Years of excellence, Quality badge
**Visual:** Sits at the junction between hero and content. Cards with subtle gold borders. Numbers in large accent font, labels in small caps.
**Animation:** Count-up animation on scroll into view

## Section 5: About / Story Section

**Layout:** Two-column on desktop (text left, visual right), stacked on mobile
**Content:** Section title with decorative gold line, paragraph text, 4 feature cards in 2x2 grid below
**Visual treatment:**
- Left column: Text content with generous whitespace
- Right column: Large placeholder image area with gold corner accents
- Feature cards: Icon (gold), title, description. Subtle hover lift.
- Background: Secondary dark
**Spacing:** Large section padding (7rem top/bottom desktop)

## Section 6: Menu Highlights

**Layout:** Full-width dark section with contained grid
**Content:** Section header centered, 6 menu item cards in 3-column grid (2-col tablet, 1-col mobile)
**Card design:**
- Dark surface card with subtle border
- Badge tag (if present) in gold, positioned top-right
- Item name in serif heading font
- Description in muted body text
- Price range in gold accent color
- Subtle gold line divider between description and price
- Hover: slight lift, gold border glow, background lightens
**Visual:** This is the most visually rich section. Cards should feel like premium menu pages.

## Section 7: Why Choose Us

**Layout:** Contained width, 3-column grid (2-col tablet, 1-col mobile)
**Content:** 6 reason cards with icon, title, description
**Visual treatment:**
- Alternating background (lighter dark)
- Cards: clean, minimal, icon in gold circle, text below
- Subtle staggered scroll-reveal animation
- Gold decorative elements between rows
**Background:** Slightly lighter than menu section for visual rhythm

## Section 8: Testimonials

**Layout:** Full-width, horizontally scrollable carousel on all viewports
**Content:** 4 review cards showing sequentially
**Card design:**
- Quote mark decorative element in large gold
- Review text in slightly larger italic body font
- Reviewer name below with gold dash separator
- 5-star rating in gold
- Card background: elevated surface
**Behavior:** Auto-scroll with pause on hover. Dot indicators below. Swipe-enabled on mobile.
**Visual:** Generous padding, elegant spacing

## Section 9: Contact & Location

**Layout:** Two-column (info left, map right), stacked on mobile
**Content:**
- Left: Contact title, address with icon, phone with icon, hours with icon
- Right: Map placeholder (styled dark rectangle with pin icon)
**Visual:** Dark background, gold icons, clear information hierarchy
**Map placeholder:** Dark rectangle with subtle border and centered pin icon, text "View on Google Maps"

## Section 10: Final CTA Section

**Layout:** Full-width, centered text
**Content:** Bold heading, subtitle, large WhatsApp CTA button
**Visual treatment:**
- Background: Rich gradient combining darkest tones with subtle gold accents
- Button: Large, gold background, dark text, subtle glow animation on hover
- Decorative gold lines or subtle pattern overlay
**Purpose:** Final conversion push before footer

## Section 11: Footer

**Layout:** 3-column grid (brand, links, contact) + bottom copyright bar
**Content:** Brand description, quick navigation links, contact info, social placeholders
**Visual:** Darkest background, muted text, gold accent on links hover. Thin gold line above.
**Bottom bar:** Copyright text, very subtle

## Floating Elements

### WhatsApp Floating Button
**Position:** Fixed bottom-right (bottom-left in RTL)
**Size:** 56px circle
**Visual:** Green WhatsApp-branded button with subtle pulse animation
**Behavior:** Shows after scrolling past hero. Tooltip on hover.

## Animation Strategy

1. **Scroll reveals:** Elements fade-in and slide up slightly as they enter viewport (IntersectionObserver)
2. **Stagger:** Grid items reveal with 100ms stagger between each
3. **Hover states:** All interactive elements have smooth 300ms transitions
4. **Hero:** Subtle parallax-like effect on the background
5. **Numbers:** Count-up animation for trust signal stats
6. **Carousel:** Smooth CSS scroll-snap behavior

## Responsive Breakpoints

- **Desktop:** >= 1024px (3-col grids, side-by-side layouts)
- **Tablet:** 768px - 1023px (2-col grids, adjusted spacing)
- **Mobile:** < 768px (single column, stacked everything, reduced typography scale)
