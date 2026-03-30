# Taj Mahal Restaurant - Wireframe

## Layout Philosophy
Grand, generous spacing throughout. Ornamental borders and dividers evoke Indian architectural motifs. Every section breathes with ample whitespace, distinguishing this from the more compact Biryani House layout.

---

## Desktop Layout (1280px container)

### 1. HEADER (Fixed, h: 72px)
```
+------------------------------------------------------------------------+
|  [Taj Mahal Logo/Name]          [Menu] [Spice] [Tradition] [Group]     |
|  "The Heritage of Indian        [Reviews] [Contact]  [AR/EN] [Sun/Moon]|
|   Cuisine"                                                              |
+------------------------------------------------------------------------+
```
- Subtle backdrop blur on scroll
- Royal purple background in dark mode, cream in light mode
- Gold bottom border accent (2px)

### 2. HERO SECTION (h: 90vh, min 600px)
```
+------------------------------------------------------------------------+
|                                                                        |
|  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  |
|  ::                                                                ::  |
|  ::    Ornamental gold corner flourish (CSS)                       ::  |
|  ::                                                                ::  |
|  ::         "From the Heart of India                               ::  |
|  ::          to Your Table in Tabuk"                                ::  |
|  ::                                                                ::  |
|  ::    The largest Indian restaurant in Tabuk, serving             ::  |
|  ::    authentic dishes crafted with the finest spices...          ::  |
|  ::                                                                ::  |
|  ::    [====== Order via WhatsApp ======]  [Browse Our Menu]       ::  |
|  ::                                                                ::  |
|  ::    ****  4.0/5  |  2,957 reviews                               ::  |
|  ::                                                                ::  |
|  ::    Ornamental gold corner flourish (CSS)                       ::  |
|  ::                                                                ::  |
|  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  |
|                                                                        |
+------------------------------------------------------------------------+
```
- Full-width gradient: deep purple to saffron gold (diagonal)
- Ornamental CSS corner decorations in gold
- Large, serif heading text
- Rating badge with star display

### 3. MENU CATEGORIES (generous padding)
```
+------------------------------------------------------------------------+
|                                                                        |
|              ---- Our Menu ----                                        |
|     Discover our rich selection of authentic Indian dishes              |
|                                                                        |
|  +-- Category Tabs --------------------------------------------------+ |
|  | [Tandoori]  [Biryani]  [Curry]  [Breads]  [Desserts]             | |
|  +-------------------------------------------------------------------+ |
|                                                                        |
|  +---------------------------+  +---------------------------+          |
|  |  ~~ornamental border~~    |  |  ~~ornamental border~~    |          |
|  |  Tandoori Chicken         |  |  Chicken Tikka            |          |
|  |  Description text here    |  |  Description text here    |          |
|  |  [ooo] Medium             |  |  [o--] Mild               |          |
|  |  ~~ornamental border~~    |  |  ~~ornamental border~~    |          |
|  +---------------------------+  +---------------------------+          |
|                                                                        |
|  +---------------------------+  +---------------------------+          |
|  |  Seekh Kebab              |  |  Paneer Tikka             |          |
|  |  Description text here    |  |  Description text here    |          |
|  |  [ooo] Medium             |  |  [o--] Mild               |          |
|  +---------------------------+  +---------------------------+          |
|                                                                        |
+------------------------------------------------------------------------+
```
- Tabbed interface for 5 categories
- 2-column grid for dish cards on desktop
- Each card has ornamental double-border in gold
- Spice level indicator: colored dots (green/amber/red)

### 4. SPICE GUIDE (centered, decorative)
```
+------------------------------------------------------------------------+
|                                                                        |
|           ======== Spice Guide ========                                |
|     We help you choose the right heat level                            |
|                                                                        |
|  +--------------------+  +--------------------+  +--------------------+|
|  |   [GREEN CIRCLE]   |  |  [AMBER CIRCLE]    |  |   [RED CIRCLE]    ||
|  |      MILD           |  |     MEDIUM          |  |      HOT          ||
|  |  Rich, balanced     |  |  A gentle warmth    |  |  Bold, fiery     ||
|  |  flavors without    |  |  that enhances      |  |  heat for spice  ||
|  |  noticeable heat    |  |  the flavors        |  |  enthusiasts     ||
|  +--------------------+  +--------------------+  +--------------------+|
|                                                                        |
|     "You may request any dish adjusted to your preferred level"        |
|                                                                        |
+------------------------------------------------------------------------+
```
- Three cards in a row, each with a large colored circle indicator
- Decorative horizontal dividers above and below

### 5. ABOUT OUR TRADITION (alternating layout)
```
+------------------------------------------------------------------------+
|                                                                        |
|         ---- Our Culinary Tradition ----                               |
|     A journey through centuries of mastery                             |
|                                                                        |
|  +----------------------------------------------------------------+   |
|  |                                                                |   |
|  |  Paragraph 1: Legacy and tradition...                          |   |
|  |                                                                |   |
|  |  Paragraph 2: The tandoor oven...                              |   |
|  |                                                                |   |
|  |  Paragraph 3: The name Taj Mahal...                            |   |
|  |                                                                |   |
|  +----------------------------------------------------------------+   |
|                                                                        |
|  +------------------+  +------------------+  +------------------+     |
|  | Imported Spices  |  | Expert Chefs     |  | Authentic Recipes|     |
|  | We source our    |  | An experienced   |  | Our recipes draw |     |
|  | spices directly  |  | Indian culinary  |  | from the diverse |     |
|  | from India...    |  | team with years  |  | regions of India |     |
|  +------------------+  +------------------+  +------------------+     |
|                                                                        |
+------------------------------------------------------------------------+
```
- Elegant prose section with generous line height
- Three highlight cards below with subtle icon area
- Ornamental divider between prose and cards

### 6. GROUP DINING (card layout)
```
+------------------------------------------------------------------------+
|                                                                        |
|         ---- Group Dining and Events ----                              |
|     A spacious venue for your finest gatherings                        |
|                                                                        |
|  +----------------------+  +----------------------+  +----------------+|
|  |  FAMILY GATHERING    |  |  SPECIAL OCCASION    |  | CORPORATE EVENT||
|  |  ~~gold border~~     |  |  ~~gold border~~     |  | ~~gold border~~||
|  |                      |  |                      |  |                ||
|  |  10-20 guests        |  |  20-50 guests        |  | 30-80 guests   ||
|  |                      |  |                      |  |                ||
|  |  Description...      |  |  Description...      |  | Description... ||
|  |                      |  |                      |  |                ||
|  |  - Shared appetizer  |  |  - Customized menu   |  | - Full buffet  ||
|  |  - Assorted mains    |  |  - Private seating   |  | - Private hall ||
|  |  - Unlimited bread   |  |  - Dedicated service |  | - Tea & coffee ||
|  |  - Desserts & tea    |  |  - Venue setup       |  | - AV equipment ||
|  |                      |  |                      |  |                ||
|  +----------------------+  +----------------------+  +----------------+|
|                                                                        |
|           [========= Book Your Event via WhatsApp =========]           |
|                                                                        |
+------------------------------------------------------------------------+
```
- Three equal cards, ornamental gold double borders
- Capacity badge at top of each
- Bullet list of inclusions
- Single CTA button centered below

### 7. TESTIMONIALS (carousel or grid)
```
+------------------------------------------------------------------------+
|                                                                        |
|              ---- Guest Reviews ----                                   |
|        Over 2,957 reviews from our guests                              |
|                                                                        |
|  +---------------------------+  +---------------------------+          |
|  |  *****                    |  |  ****                     |          |
|  |  "One of the best Indian  |  |  "Visited with work      |          |
|  |   restaurants in Tabuk,   |  |   colleagues and it was  |          |
|  |   hands down..."          |  |   wonderful..."           |          |
|  |                           |  |                           |          |
|  |  -- Abu Fahad             |  |  -- Khalid Al-Anazi       |          |
|  +---------------------------+  +---------------------------+          |
|                                                                        |
|  +---------------------------+  +---------------------------+          |
|  |  *****                    |  |  ****                     |          |
|  |  "My first time trying    |  |  "We hosted a family     |          |
|  |   Indian food and the     |  |   dinner for forty       |          |
|  |   staff were incredibly   |  |   people..."              |          |
|  |   helpful..."             |  |                           |          |
|  |  -- Sarah Al-Mutairi      |  |  -- Eng. Abdullah         |          |
|  +---------------------------+  +---------------------------+          |
|                                                                        |
+------------------------------------------------------------------------+
```
- 2x2 grid on desktop, single column on mobile
- Each card: star rating, quote text, author name
- Subtle purple background tint on cards

### 8. WHATSAPP CTA (full-width banner)
```
+------------------------------------------------------------------------+
|  ####################################################################  |
|  ##                                                                ##  |
|  ##   Ready to Experience the Finest Indian Cuisine?               ##  |
|  ##                                                                ##  |
|  ##   [============ Order Now via WhatsApp ============]           ##  |
|  ##                                                                ##  |
|  ####################################################################  |
```
- Gradient background: purple to gold
- Large, prominent CTA button
- Ornamental border frame

### 9. CONTACT (two-column)
```
+------------------------------------------------------------------------+
|                                                                        |
|              ---- Contact Us ----                                      |
|     We welcome your visit in Murooj Al-Amir                           |
|                                                                        |
|  +---------------------------+  +---------------------------+          |
|  |  Address:                 |  |                           |          |
|  |  Murooj Al-Amir District  |  |   [Map Placeholder]      |          |
|  |  Tabuk, KSA              |  |                           |          |
|  |                           |  |                           |          |
|  |  Hours:                   |  |                           |          |
|  |  Daily 12PM - 12AM       |  |                           |          |
|  |                           |  |                           |          |
|  |  WhatsApp: [number]       |  |                           |          |
|  |                           |  |                           |          |
|  |  [Send Order via WA]     |  |                           |          |
|  +---------------------------+  +---------------------------+          |
|                                                                        |
+------------------------------------------------------------------------+
```

### 10. FOOTER
```
+------------------------------------------------------------------------+
|  Taj Mahal Restaurant                                                  |
|  The Heritage of Indian Cuisine in the Heart of Tabuk                  |
|                                                                        |
|  Menu  |  About Us  |  Contact  |  Privacy Policy                      |
|                                                                        |
|  2026 Taj Mahal Restaurant. All Rights Reserved.                       |
+------------------------------------------------------------------------+
```

---

## Mobile Layout (< 640px)

- Single column throughout
- Hamburger menu with slide-in navigation
- Hero: stacked, reduced font sizes
- Menu: single column dish cards, swipeable category tabs
- Spice guide: stacked vertically
- Group dining: stacked cards
- Testimonials: single column
- Contact: stacked, map below info
- All padding reduced but still generous compared to typical mobile

---

## Key Design Elements

### Ornamental CSS Borders
- Double-line borders in saffron gold (#D4A843)
- Corner flourishes using CSS pseudo-elements (::before, ::after)
- Section dividers with ornamental center diamond motif

### Color Usage Rules
- Royal purple: headers, hero overlay, dark backgrounds
- Saffron gold: borders, accents, CTAs, highlights, ornaments
- Ruby red: hot spice indicator, emphasis only (sparingly)
- Cream/warm white: light mode backgrounds, text containers
- Deep charcoal-purple: dark mode backgrounds

### Responsive Behavior
- 1280px: full 2-3 column layouts
- 1024px: reduce to 2 columns where applicable
- 768px: begin stacking, reduce padding
- 640px: full mobile, single column, hamburger nav
