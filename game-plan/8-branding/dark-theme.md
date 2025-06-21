# Dark Theme Design Guidelines

## Overview

The Contractor Source dark theme creates an elegant, sophisticated experience that lets premium materials shine while maintaining warmth and approachability. This modern dark design enhances the perception of luxury while ensuring excellent readability and user comfort.

## Color Philosophy

### Base Palette
```scss
// Core Colors
$primary: #AB3F31;           // Warm red - CTAs, brand presence
$bunker: #2A2F2F;           // Dark gray - primary background
$white: #FFFFFF;            // Pure white - primary text
$classical-gold: #E9B872;   // Elegant gold - premium accents
$holiday-turquoise: #87C3BF; // Soft turquoise - secondary accent
$turquoise-panic: #36D4CE;  // Bright turquoise - attention/alerts
```

### Extended Dark Palette
```scss
// Background Layers (Dark to Light)
$bg-darkest: #1F2323;       // Deepest layer
$bg-darker: #252929;        // Deeper sections
$bg-dark: #2A2F2F;          // Primary background (Bunker)
$bg-elevated: #323737;      // Cards, elevated surfaces
$bg-hover: #3A3F3F;         // Hover states
$bg-selected: #424747;      // Selected/active states

// Text Hierarchy
$text-primary: #FFFFFF;     // Primary content
$text-secondary: #E5E5E5;   // Secondary content
$text-muted: #B8B8B8;       // Muted/disabled
$text-hint: #8C8C8C;        // Hints, placeholders

// Accent Variations
$gold-bright: #F4C376;      // Brighter gold for hover
$gold-muted: #D4A862;       // Muted gold for subtle accents
$turquoise-soft: #A5D4D1;   // Softer turquoise
$turquoise-muted: #6BA8A4;  // Muted turquoise
```

## Design Principles

### 1. Elegant Contrast
- Use subtle elevation changes rather than harsh borders
- Layer backgrounds to create depth
- Maintain sufficient contrast for accessibility

### 2. Warm Sophistication
- Balance cool dark grays with warm gold accents
- Use red strategically for important actions
- Incorporate turquoise for freshness without overwhelming

### 3. Material Focus
- Dark backgrounds make product images pop
- Use subtle shadows and glows
- Let natural stone textures be the hero

### 4. Breathing Room
- Generous spacing prevents claustrophobia
- Use dark space as a design element
- Create visual hierarchy through spacing

## Component Styling

### Cards & Surfaces
```scss
.card-elegant {
  background: $bg-elevated;
  border: 1px solid rgba($white, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  
  &:hover {
    background: $bg-hover;
    border-color: rgba($classical-gold, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }
}

.surface-premium {
  background: linear-gradient(
    135deg,
    $bg-elevated 0%,
    rgba($classical-gold, 0.05) 100%
  );
  border: 1px solid rgba($classical-gold, 0.1);
}
```

### Buttons
```scss
// Primary CTA - Red
.btn-primary-dark {
  background: $primary;
  color: $white;
  font-weight: 500;
  padding: 14px 28px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: lighten($primary, 8%);
    box-shadow: 0 4px 20px rgba($primary, 0.4);
    transform: translateY(-1px);
  }
}

// Secondary - Gold Accent
.btn-secondary-dark {
  background: transparent;
  color: $classical-gold;
  border: 2px solid $classical-gold;
  
  &:hover {
    background: rgba($classical-gold, 0.1);
    border-color: $gold-bright;
    color: $gold-bright;
  }
}

// Tertiary - Turquoise
.btn-tertiary-dark {
  background: rgba($holiday-turquoise, 0.1);
  color: $holiday-turquoise;
  border: 1px solid rgba($holiday-turquoise, 0.3);
  
  &:hover {
    background: rgba($holiday-turquoise, 0.2);
    border-color: $holiday-turquoise;
  }
}
```

### Typography on Dark
```scss
// Headings
h1, h2, h3 {
  color: $white;
  font-family: 'Sitka Banner', serif;
  
  &.accent {
    color: $classical-gold;
  }
}

// Body Text
body {
  color: $text-secondary;
  
  strong {
    color: $text-primary;
  }
}

// Special Text
.text-premium {
  background: linear-gradient(135deg, $classical-gold, $gold-bright);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Forms
```scss
.input-dark {
  background: $bg-darker;
  border: 2px solid rgba($white, 0.1);
  color: $white;
  
  &:focus {
    border-color: $classical-gold;
    box-shadow: 0 0 0 3px rgba($classical-gold, 0.2);
  }
  
  &::placeholder {
    color: $text-hint;
  }
}

.select-dark {
  background: $bg-elevated;
  border: 1px solid rgba($white, 0.1);
  color: $white;
  
  option {
    background: $bg-dark;
  }
}
```

## Special Effects

### Glow Effects
```scss
// Gold Glow for Premium Elements
.glow-gold {
  box-shadow: 
    0 0 20px rgba($classical-gold, 0.3),
    0 0 40px rgba($classical-gold, 0.1);
}

// Turquoise Glow for Notifications
.glow-turquoise {
  box-shadow: 
    0 0 20px rgba($turquoise-panic, 0.4),
    0 0 40px rgba($turquoise-panic, 0.2);
}
```

### Gradients
```scss
// Elegant Dark Gradient
.gradient-elegant {
  background: linear-gradient(
    180deg,
    $bg-darkest 0%,
    $bg-dark 50%,
    $bg-darker 100%
  );
}

// Premium Accent Gradient
.gradient-premium {
  background: linear-gradient(
    135deg,
    rgba($classical-gold, 0.1) 0%,
    rgba($primary, 0.1) 100%
  );
}
```

### Overlays
```scss
// Image Overlay for Text Readability
.overlay-elegant {
  background: linear-gradient(
    to bottom,
    rgba($bg-dark, 0.3) 0%,
    rgba($bg-dark, 0.9) 100%
  );
}

// Modal Backdrop
.backdrop-dark {
  background: rgba($bg-darkest, 0.85);
  backdrop-filter: blur(4px);
}
```

## Navigation

### Header
```scss
.nav-dark {
  background: rgba($bg-dark, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($white, 0.05);
  
  .nav-link {
    color: $text-secondary;
    
    &:hover {
      color: $classical-gold;
    }
    
    &.active {
      color: $white;
      border-bottom: 2px solid $primary;
    }
  }
}
```

### Footer
```scss
.footer-dark {
  background: $bg-darkest;
  border-top: 1px solid rgba($classical-gold, 0.1);
  
  .footer-section {
    h4 {
      color: $classical-gold;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    a {
      color: $text-muted;
      
      &:hover {
        color: $white;
      }
    }
  }
}
```

## Product Showcase

### Product Cards
```scss
.product-card-dark {
  background: $bg-elevated;
  overflow: hidden;
  transition: all 0.4s ease;
  
  .product-image {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba($bg-dark, 0.8) 0%,
        transparent 50%
      );
    }
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.5),
      0 0 40px rgba($classical-gold, 0.1);
  }
  
  .product-name {
    color: $white;
  }
  
  .product-price {
    color: $classical-gold;
    font-weight: 600;
  }
}
```

## Quote System Styling

### Quote Form
```scss
.quote-form-dark {
  background: $bg-elevated;
  border: 1px solid rgba($classical-gold, 0.1);
  padding: 2rem;
  
  .form-section {
    background: $bg-dark;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    color: $classical-gold;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}
```

### Status Indicators
```scss
.status-badge-dark {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  &.status-pending {
    background: rgba($holiday-turquoise, 0.2);
    color: $holiday-turquoise;
  }
  
  &.status-active {
    background: rgba($turquoise-panic, 0.2);
    color: $turquoise-panic;
  }
  
  &.status-completed {
    background: rgba($classical-gold, 0.2);
    color: $classical-gold;
  }
}
```

## Mobile Considerations

### Touch Targets
```scss
@media (max-width: 768px) {
  .btn-primary-dark {
    padding: 16px 32px;
    font-size: 16px;
    width: 100%;
  }
  
  .card-elegant {
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
}
```

### Dark Mode Toggle
```scss
.theme-toggle {
  background: $bg-elevated;
  border: 1px solid rgba($white, 0.1);
  padding: 8px;
  border-radius: 8px;
  
  .toggle-icon {
    color: $classical-gold;
  }
}
```

## Performance Optimizations

### Reduced Motion
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Dark Mode Images
```scss
// Slightly dim bright images in dark mode
.dark-mode img {
  filter: brightness(0.9);
  
  &:hover {
    filter: brightness(1);
  }
}
```

## Implementation Notes

1. **Gradual Rollout**: Start with navigation and gradually apply to components
2. **User Preference**: Respect system dark mode preference
3. **Testing**: Test on OLED screens for pure black considerations
4. **Performance**: Use CSS variables for easy theme switching
5. **Accessibility**: Maintain WCAG AAA contrast ratios

## CSS Variables Setup
```scss
:root[data-theme="dark"] {
  // Primary Colors
  --color-primary: #AB3F31;
  --color-bg-primary: #2A2F2F;
  --color-text-primary: #FFFFFF;
  --color-accent-gold: #E9B872;
  --color-accent-turquoise: #87C3BF;
  --color-accent-bright: #36D4CE;
  
  // Background Layers
  --bg-base: #2A2F2F;
  --bg-elevated: #323737;
  --bg-hover: #3A3F3F;
  --bg-selected: #424747;
  
  // Text Colors
  --text-primary: #FFFFFF;
  --text-secondary: #E5E5E5;
  --text-muted: #B8B8B8;
  --text-hint: #8C8C8C;
  
  // Shadows
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow-gold: 0 0 40px rgba(233, 184, 114, 0.2);
}
```

---

*This dark theme design creates an elegant, modern experience that positions Contractor Source as a premium yet approachable brand in the stone and remodeling industry.*