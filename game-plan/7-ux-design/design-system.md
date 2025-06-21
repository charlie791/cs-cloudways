# Design System

## Foundation

### Brand Colors - Dark Theme
```scss
// Primary Colors
$primary: #AB3F31;           // Primary red - CTAs, brand accent
$bunker: #2A2F2F;           // Dark gray - elegant dark base
$white: #FFFFFF;            // Pure white - text, contrast
$classical-gold: #E9B872;   // Gold - premium, luxury
$holiday-turquoise: #87C3BF; // Soft turquoise - accents
$turquoise-panic: #36D4CE;  // Bright turquoise - alerts

// Dark Theme Background Layers
$bg-darkest: #1F2323;       // Deepest layer
$bg-darker: #252929;        // Deeper sections  
$bg-dark: #2A2F2F;          // Primary background (Bunker)
$bg-elevated: #323737;      // Cards, elevated surfaces
$bg-hover: #3A3F3F;         // Hover states
$bg-selected: #424747;      // Selected/active states

// Text Hierarchy (Dark Theme)
$text-primary: #FFFFFF;     // Primary content
$text-secondary: #E5E5E5;   // Secondary content
$text-muted: #B8B8B8;       // Muted/disabled
$text-hint: #8C8C8C;        // Hints, placeholders

// Accent Variations
$gold-bright: #F4C376;      // Brighter gold for hover
$gold-muted: #D4A862;       // Muted gold for subtle accents
$turquoise-soft: #A5D4D1;   // Softer turquoise
$turquoise-muted: #6BA8A4;  // Muted turquoise

// Semantic Colors
$success: #10b981;          // Green
$warning: #f59e0b;          // Amber
$error: #ef4444;            // Red  
$info: #3b82f6;             // Blue
```

### Typography
```scss
// Font Stacks
$font-heading: 'Sitka Banner', 'Sitka Heading', Cambria, Georgia, serif;
$font-body: 'Inter', 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
$font-mono: 'JetBrains Mono', Consolas, Monaco, monospace;

// Type Scale (1.25 ratio - Major Third)
$text-xs: 0.75rem;        // 12px
$text-sm: 0.875rem;       // 14px
$text-base: 1rem;         // 16px
$text-lg: 1.125rem;       // 18px
$text-xl: 1.25rem;        // 20px
$text-2xl: 1.5rem;        // 24px
$text-3xl: 1.875rem;      // 30px
$text-4xl: 2.25rem;       // 36px
$text-5xl: 3rem;          // 48px
$text-6xl: 3.75rem;       // 60px

// Line Heights
$leading-none: 1;
$leading-tight: 1.25;
$leading-snug: 1.375;
$leading-normal: 1.5;
$leading-relaxed: 1.625;
$leading-loose: 2;

// Font Weights
$font-light: 300;
$font-normal: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

### Spacing System
```scss
// 8px base unit
$space-0: 0;
$space-px: 1px;
$space-0-5: 0.125rem;     // 2px
$space-1: 0.25rem;        // 4px
$space-1-5: 0.375rem;     // 6px
$space-2: 0.5rem;         // 8px
$space-2-5: 0.625rem;     // 10px
$space-3: 0.75rem;        // 12px
$space-4: 1rem;           // 16px
$space-5: 1.25rem;        // 20px
$space-6: 1.5rem;         // 24px
$space-8: 2rem;           // 32px
$space-10: 2.5rem;        // 40px
$space-12: 3rem;          // 48px
$space-16: 4rem;          // 64px
$space-20: 5rem;          // 80px
$space-24: 6rem;          // 96px
```

### Layout
```scss
// Container Widths
$container-sm: 640px;
$container-md: 768px;
$container-lg: 1024px;
$container-xl: 1280px;
$container-2xl: 1536px;

// Breakpoints
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;
$screen-2xl: 1536px;

// Grid
$grid-columns: 12;
$grid-gap-sm: $space-4;
$grid-gap-md: $space-6;
$grid-gap-lg: $space-8;
```

## Components

### Buttons

```scss
// Base Button
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $space-3 $space-6;
  font-family: $font-body;
  font-weight: $font-medium;
  font-size: $text-base;
  line-height: $leading-tight;
  border-radius: $radius-sm;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  
  &:focus {
    outline: 3px solid rgba($brand-blue, 0.5);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Primary Button - Red CTA (Dark Theme)
.btn-primary {
  background-color: $primary;
  color: $white;
  border: none;
  box-shadow: 0 2px 8px rgba($primary, 0.3);
  
  &:hover {
    background-color: lighten($primary, 8%);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba($primary, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
}

// Secondary Button - Gold Outline
.btn-secondary {
  background-color: transparent;
  color: $classical-gold;
  border-color: $classical-gold;
  
  &:hover {
    background-color: rgba($classical-gold, 0.1);
    border-color: $gold-bright;
    color: $gold-bright;
    box-shadow: 0 0 20px rgba($classical-gold, 0.2);
  }
}

// Accent Button - Turquoise
.btn-accent {
  background-color: rgba($holiday-turquoise, 0.1);
  color: $holiday-turquoise;
  border: 1px solid rgba($holiday-turquoise, 0.3);
  
  &:hover {
    background-color: rgba($holiday-turquoise, 0.2);
    border-color: $holiday-turquoise;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($holiday-turquoise, 0.3);
  }
}

// Button Sizes
.btn-sm {
  padding: $space-2 $space-4;
  font-size: $text-sm;
}

.btn-lg {
  padding: $space-4 $space-8;
  font-size: $text-lg;
}
```

### Cards - Dark Theme

```scss
.card {
  background-color: $bg-elevated;
  border: 1px solid rgba($white, 0.05);
  border-radius: $radius-md;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
    border-color: rgba($classical-gold, 0.2);
  }
}

.card-header {
  padding: $space-6;
  background-color: rgba($classical-gold, 0.05);
  border-bottom: 1px solid rgba($classical-gold, 0.1);
}

.card-body {
  padding: $space-6;
  color: $text-secondary;
}

.card-footer {
  padding: $space-4 $space-6;
  background-color: $bg-dark;
  border-top: 1px solid rgba($white, 0.05);
}

// Product Card Specific
.product-card {
  .product-image {
    aspect-ratio: 1;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  &:hover .product-image img {
    transform: scale(1.05);
  }
  
  .product-title {
    font-family: $font-heading;
    font-size: $text-xl;
    font-weight: $font-semibold;
    color: $text-primary;
    margin-bottom: $space-2;
  }
  
  .product-price {
    font-size: $text-lg;
    font-weight: $font-medium;
    color: $classical-gold;
  }
}
```

### Forms - Dark Theme

```scss
// Input Base
.input {
  width: 100%;
  padding: $space-3 $space-4;
  font-family: $font-body;
  font-size: $text-base;
  line-height: $leading-normal;
  color: $text-primary;
  background-color: $bg-darker;
  border: 2px solid rgba($white, 0.1);
  border-radius: $radius-sm;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: $classical-gold;
    box-shadow: 0 0 0 3px rgba($classical-gold, 0.2);
    background-color: $bg-dark;
  }
  
  &::placeholder {
    color: $text-hint;
  }
  
  &:disabled {
    background-color: rgba($bg-darker, 0.5);
    cursor: not-allowed;
    opacity: 0.5;
  }
}

// Label
.label {
  display: block;
  font-weight: $font-medium;
  font-size: $text-sm;
  color: $classical-gold;
  margin-bottom: $space-2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

// Form Group
.form-group {
  margin-bottom: $space-5;
}

// Error State
.input-error {
  border-color: $error;
  
  &:focus {
    box-shadow: 0 0 0 3px rgba($error, 0.1);
  }
}

.error-message {
  display: block;
  font-size: $text-sm;
  color: $error;
  margin-top: $space-1;
}
```

### Navigation - Dark Theme

```scss
.nav {
  background-color: rgba($bg-dark, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba($white, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: $container-xl;
  margin: 0 auto;
  padding: 0 $space-6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-logo {
  font-family: $font-heading;
  font-size: $text-2xl;
  font-weight: $font-bold;
  color: $classical-gold;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: $gold-bright;
  }
}

.nav-menu {
  display: flex;
  gap: $space-8;
  
  a {
    font-weight: $font-medium;
    color: $text-secondary;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: $classical-gold;
    }
    
    &.active {
      color: $white;
      border-bottom: 2px solid $primary;
    }
  }
}

.nav-cta {
  @extend .btn-primary;
}
```

## Effects

### Shadows - Dark Theme
```scss
$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
$shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
$shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
$shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.2);
$shadow-glow-gold: 0 0 40px rgba(233, 184, 114, 0.2);
$shadow-glow-red: 0 4px 20px rgba(171, 63, 49, 0.4);
$shadow-glow-turquoise: 0 0 30px rgba(135, 195, 191, 0.3);
```

### Border Radius
```scss
$radius-none: 0;
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 16px;
$radius-xl: 24px;
$radius-full: 9999px;
```

### Transitions
```scss
$duration-fast: 150ms;
$duration-base: 300ms;
$duration-slow: 500ms;
$duration-slower: 750ms;

$ease-linear: linear;
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## Patterns

### Loading States
```scss
.skeleton {
  background: linear-gradient(
    90deg,
    $neutral-200 25%,
    $neutral-300 50%,
    $neutral-200 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Focus States
```scss
.focus-visible {
  outline: 3px solid rgba($brand-blue, 0.5);
  outline-offset: 2px;
}
```

### Hover Patterns
```scss
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
  }
}

.hover-grow {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}
```

## Responsive Utilities

### Container
```scss
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 $space-4;
  
  @media (min-width: $screen-sm) {
    max-width: $container-sm;
  }
  
  @media (min-width: $screen-md) {
    max-width: $container-md;
    padding: 0 $space-6;
  }
  
  @media (min-width: $screen-lg) {
    max-width: $container-lg;
  }
  
  @media (min-width: $screen-xl) {
    max-width: $container-xl;
    padding: 0 $space-8;
  }
}
```

### Grid System
```scss
.grid {
  display: grid;
  gap: $grid-gap-sm;
  
  @media (min-width: $screen-md) {
    gap: $grid-gap-md;
  }
  
  @media (min-width: $screen-lg) {
    gap: $grid-gap-lg;
  }
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

// Responsive grid
@media (min-width: $screen-md) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: $screen-lg) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

## Accessibility

### Focus Management
```scss
// Skip to content link
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: $brand-blue;
  color: $white;
  padding: $space-2 $space-4;
  text-decoration: none;
  
  &:focus {
    top: 0;
  }
}

// Focus trap indicator
.focus-trap {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border: 2px dashed $brand-blue;
    border-radius: $radius-md;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:focus-within::before {
    opacity: 1;
  }
}
```

### Screen Reader Only
```scss
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Animation Library

### Fade In
```scss
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn $duration-base ease-out;
}
```

### Slide Up
```scss
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp $duration-slow ease-out;
}
```

### Stagger Children
```scss
.stagger-children > * {
  opacity: 0;
  animation: slideUp $duration-slow ease-out forwards;
  
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 100}ms;
    }
  }
}
```

---

*This design system ensures consistency across all Contractor Source digital touchpoints while maintaining the "approachable premium" brand positioning.*