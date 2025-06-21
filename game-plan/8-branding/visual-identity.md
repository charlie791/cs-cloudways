# Visual Identity Guidelines

## Color System

### Primary Brand Colors

#### Primary Red - `#AB3F31`
- **Usage**: Primary CTAs, active states, emphasis, brand accent
- **Meaning**: Warmth, confidence, premium quality
- **RGB**: 171, 63, 49
- **HSL**: 7°, 55%, 43%

#### Bunker (Dark Gray) - `#2A2F2F`
- **Usage**: Primary background, elegant dark base, headers
- **Meaning**: Sophistication, depth, modern elegance
- **RGB**: 42, 47, 47
- **HSL**: 180°, 6%, 17%

### Accent Colors

#### Classical Gold - `#E9B872`
- **Usage**: Premium highlights, hover states, luxury touches
- **Meaning**: Elegance, warmth, high-end appeal
- **RGB**: 233, 184, 114
- **HSL**: 35°, 73%, 68%

#### Holiday Turquoise - `#87C3BF`
- **Usage**: Secondary accents, success states, fresh elements
- **Meaning**: Modern, balanced, refreshing contrast
- **RGB**: 135, 195, 191
- **HSL**: 176°, 33%, 65%

#### Turquoise Panic - `#36D4CE`
- **Usage**: Bright accents, notifications, interactive elements
- **Meaning**: Energy, innovation, attention-grabbing
- **RGB**: 54, 212, 206
- **HSL**: 178°, 65%, 52%

#### Pure White - `#FFFFFF`
- **Usage**: Text on dark backgrounds, clean contrast, space
- **Meaning**: Clarity, openness, breathing room
- **RGB**: 255, 255, 255
- **HSL**: 0°, 0%, 100%

### Color Combinations for Dark Theme

#### Primary Combinations
```scss
// Elegant Dark Base
.dark-base {
  background: #2A2F2F; // Bunker
  color: #FFFFFF;
}

// Premium Accent
.premium-accent {
  background: #2A2F2F;
  color: #E9B872; // Classical Gold
}

// CTA High Impact
.cta-primary {
  background: #AB3F31; // Primary Red
  color: #FFFFFF;
  &:hover {
    background: lighten(#AB3F31, 5%);
  }
}

// Fresh Accent
.fresh-accent {
  background: rgba(#87C3BF, 0.1);
  border: 1px solid #87C3BF;
  color: #87C3BF;
}

// Bright Attention
.bright-attention {
  background: #36D4CE;
  color: #2A2F2F;
}
```

#### Color Accessibility (Dark Theme)
- White on Bunker: ✅ WCAG AAA (12.63:1)
- Classical Gold on Bunker: ✅ WCAG AAA (7.89:1)
- Holiday Turquoise on Bunker: ✅ WCAG AA (6.12:1)
- Turquoise Panic on Bunker: ✅ WCAG AAA (7.42:1)
- White on Primary Red: ✅ WCAG AA (5.87:1)
- Bunker on Classical Gold: ✅ WCAG AAA (7.89:1)

### Material-Inspired Palette

Use these colors to represent different materials:

```scss
// Stone Materials
--granite-charcoal: #2b2b2b;
--marble-white: #f8f7f6;
--quartz-pearl: #e8e6e3;
--slate-gray: #5a6670;
--travertine-tan: #d4c4b0;

// Wood Tones
--oak-natural: #c9a66b;
--walnut-rich: #5d4037;
--cherry-warm: #9b4444;
--maple-light: #f5deb3;

// Metal Finishes
--brass-antique: #b5985a;
--nickel-brushed: #8b8c89;
--copper-patina: #6f8e7d;
```

## Typography System

### Font Stack

```css
/* Headings - Classic Serif */
font-family: 'Sitka Banner', 'Sitka Heading', 'Cambria', Georgia, serif;

/* Body Text - Modern Sans */
font-family: 'Inter', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - Technical */
font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
```

### Type Scale

```scss
// Display Sizes (Hero, Landing)
--display-2xl: 4.5rem;    // 72px
--display-xl: 3.75rem;    // 60px
--display-lg: 3rem;       // 48px

// Heading Sizes
--heading-h1: 2.25rem;    // 36px
--heading-h2: 1.875rem;   // 30px
--heading-h3: 1.5rem;     // 24px
--heading-h4: 1.25rem;    // 20px
--heading-h5: 1.125rem;   // 18px
--heading-h6: 1rem;       // 16px

// Body Sizes
--body-lg: 1.125rem;      // 18px
--body-md: 1rem;          // 16px (base)
--body-sm: 0.875rem;      // 14px
--body-xs: 0.75rem;       // 12px
```

### Typography Usage

#### Headings (Sitka Banner)
```scss
h1 {
  font-family: var(--font-heading);
  font-size: var(--heading-h1);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--brand-blue);
}

// Feature headings
.feature-heading {
  font-family: var(--font-heading);
  font-size: var(--display-lg);
  font-weight: 400;
  color: var(--brand-red);
}
```

#### Body Text (Inter)
```scss
body {
  font-family: var(--font-body);
  font-size: var(--body-md);
  font-weight: 400;
  line-height: 1.6;
  color: var(--neutral-700);
}

// Lead paragraph
.lead {
  font-size: var(--body-lg);
  font-weight: 300;
  line-height: 1.7;
  color: var(--neutral-600);
}
```

### Typography Pairings

#### Hero Section
```scss
.hero {
  h1 {
    font: 600 var(--display-lg)/1.1 var(--font-heading);
    color: var(--brand-blue);
    margin-bottom: 1rem;
  }
  
  p {
    font: 300 var(--body-lg)/1.7 var(--font-body);
    color: var(--neutral-600);
  }
}
```

#### Product Card
```scss
.product-card {
  h3 {
    font: 600 var(--heading-h3)/1.3 var(--font-heading);
    color: var(--neutral-900);
  }
  
  .price {
    font: 500 var(--body-lg)/1 var(--font-body);
    color: var(--brand-red);
  }
  
  .details {
    font: 400 var(--body-sm)/1.5 var(--font-body);
    color: var(--neutral-600);
  }
}
```

## Logo Usage

### Clear Space
Minimum clear space around logo = height of the "C" in "Contractor"

### Minimum Sizes
- Digital: 120px width
- Print: 1 inch width
- Favicon: 32x32px

### Logo Variations

#### On Light Backgrounds
- Primary: Deep Blue text
- Accent element: Red or Gold

#### On Dark Backgrounds
- Primary: White text
- Accent element: Gold

#### Monochrome
- All Deep Blue
- All White (on dark)
- All Black (when required)

## Visual Elements

### Border Radius
```scss
--radius-sm: 4px;    // Buttons, inputs
--radius-md: 8px;    // Cards, modals
--radius-lg: 16px;   // Feature sections
--radius-xl: 24px;   // Hero elements
```

### Shadows
```scss
// Elevation scale
--shadow-sm: 0 1px 3px rgba(71, 75, 120, 0.1);
--shadow-md: 0 4px 12px rgba(71, 75, 120, 0.15);
--shadow-lg: 0 8px 24px rgba(71, 75, 120, 0.2);
--shadow-xl: 0 16px 48px rgba(71, 75, 120, 0.25);

// Warm glow for special elements
--shadow-warm: 0 4px 20px rgba(171, 63, 49, 0.15);
```

### Gradients
```scss
// Subtle brand gradient
--gradient-brand: linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-red) 100%);

// Warm overlay
--gradient-warm: linear-gradient(180deg, rgba(233, 184, 114, 0.1) 0%, rgba(171, 63, 49, 0.1) 100%);

// Trust gradient
--gradient-trust: linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-teal) 100%);
```

## Component Examples

### Button Hierarchy

```scss
// Primary Action - Red
.btn-primary {
  background: var(--brand-red);
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
}

// Secondary Action - Blue Outline
.btn-secondary {
  background: transparent;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  font-weight: 500;
  padding: 10px 22px;
  
  &:hover {
    background: var(--brand-blue);
    color: white;
  }
}

// Tertiary Action - Gold
.btn-accent {
  background: var(--brand-gold);
  color: var(--neutral-900);
  font-weight: 500;
  
  &:hover {
    background: darken(#E9B872, 10%);
  }
}
```

### Card Design

```scss
.product-card {
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
  
  .card-header {
    background: var(--brand-beige);
    padding: 1rem;
    border-bottom: 1px solid rgba(71, 75, 120, 0.1);
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-footer {
    background: var(--neutral-100);
    padding: 1rem;
    border-top: 1px solid var(--neutral-300);
  }
}
```

## Animation Guidelines

### Timing
```scss
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--duration-slower: 750ms;

--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Hover Effects
- Scale: 1.02 - 1.05 for cards
- Translate Y: -2px to -4px for lift
- Shadow: Increase by one level
- Color: Darken by 10% or use hover variant

### Page Transitions
- Fade in: 300ms ease-out
- Slide up: 500ms ease-out, 20px travel
- Stagger: 100ms delay between items

## Responsive Considerations

### Breakpoints
```scss
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;
$ultrawide: 1920px;
```

### Mobile Adaptations
- Increase tap targets to 44px minimum
- Simplify shadows on mobile
- Reduce font sizes by 10-15%
- Stack elements vertically
- Full-width CTAs on mobile

## Print Guidelines

### Print Colors
```scss
// CMYK equivalents
--print-red: cmyk(13%, 80%, 78%, 8%);
--print-blue: cmyk(68%, 63%, 0%, 28%);
--print-gold: cmyk(8%, 28%, 63%, 0%);
```

### Print Typography
- Increase contrast
- Minimum 10pt body text
- Add 10% to line height
- Use black for body text

## Accessibility Notes

1. **Color Blindness**: Red/Blue combination works for most types
2. **High Contrast Mode**: Ensure borders on all interactive elements
3. **Focus States**: Use 3px outline in brand blue
4. **Motion**: Respect prefers-reduced-motion

---

*This document ensures visual consistency across all touchpoints of the Contractor Source brand.*