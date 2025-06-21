# Branding Module

## Overview

The Branding module defines the visual identity, voice, and personality of Contractor Source. This ensures consistent brand expression across all touchpoints.

## Brand Strategy

### Brand Positioning
**"Premium Made Personal"**

Contractor Source is your boutique remodeling concierge. We deliver high-touch, high-trust, high-quality experiences that make luxury accessible. We're not intimidatingly luxurious—we're refined but not out of reach, combining premium materials with personal service.

### Brand Values
1. **Friendly**: Warm, approachable expertise
2. **Custom**: Tailored solutions for every client
3. **Integrous**: Honest, transparent, trustworthy
4. **Streamlined**: Efficient process, clear communication
5. **Accessible**: Luxury within reach

### Brand Personality
**Approachable Premium**
- **Boutique** not big box
- **Concierge** not salesperson
- **Partner** not vendor
- **Expert** not elitist
- **Refined** not pretentious

### Unique Value Proposition
- **All-in-one experience**: Design through installation
- **Speed & accessibility**: 3-week turnaround
- **Personal touch**: In-home consultations with 3D design
- **Trusted expertise**: Your design partner, not a transaction

## Visual Identity

### Logo System
```
Primary Logo:
[CONTRACTOR SOURCE]
- Clean, modern wordmark
- Optional icon: Stylized stone texture

Logo Variations:
1. Horizontal (primary)
2. Stacked (compact spaces)
3. Icon only (app, favicon)
4. Reversed (dark backgrounds)
```

### Color Palette - Elegant Dark Theme

#### Primary Colors
```scss
// Core Brand Colors
--primary: #AB3F31;              // Primary Red - CTAs, brand accent
--bunker: #2A2F2F;              // Dark Gray - elegant dark base
--white: #FFFFFF;               // Pure White - text, contrast
--classical-gold: #E9B872;      // Gold - premium, luxury touches
--holiday-turquoise: #87C3BF;   // Soft Turquoise - fresh accents
--turquoise-panic: #36D4CE;     // Bright Turquoise - attention

// Dark Theme Background Layers
--bg-darkest: #1F2323;          // Deepest layer
--bg-darker: #252929;           // Deeper sections
--bg-dark: #2A2F2F;             // Primary background (Bunker)
--bg-elevated: #323737;         // Cards, elevated surfaces
--bg-hover: #3A3F3F;            // Hover states
--bg-selected: #424747;         // Selected/active states
```

#### Supporting Colors
```scss
// Semantic Colors
--success: #10b981;        // Green
--warning: #f59e0b;        // Amber
--error: #ef4444;          // Red
--info: #3b82f6;           // Blue

// Material-Inspired Accents
--marble-white: #fafaf9;
--granite-charcoal: #1c1917;
--quartz-pearl: #f3f4f6;
--wood-walnut: #5d4037;
--stone-gray: #78716c;
```

### Typography

#### Type Scale
```scss
// Font Families - Classic meets Contemporary
--font-heading: 'Sitka Banner', 'Sitka Heading', Georgia, serif;
--font-body: 'Inter', 'Open Sans', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Consolas', monospace;

// Font Sizes
--text-xs: 0.75rem;     // 12px
--text-sm: 0.875rem;    // 14px
--text-base: 1rem;      // 16px
--text-lg: 1.125rem;    // 18px
--text-xl: 1.25rem;     // 20px
--text-2xl: 1.5rem;     // 24px
--text-3xl: 1.875rem;   // 30px
--text-4xl: 2.25rem;    // 36px
--text-5xl: 3rem;       // 48px

// Font Weights
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Typography Usage
- **Headings**: Serif for elegance and distinction
- **Body Text**: Sans-serif for clarity and modernity
- **CTAs**: Sans-serif, medium weight
- **Prices**: Mono for alignment

## Photography & Imagery

### Photography Style
1. **Hero Images**: Dramatic, full-bleed stone textures
2. **Product Shots**: Clean, well-lit, true colors
3. **Lifestyle**: Installed materials in beautiful spaces
4. **Process**: Behind-the-scenes craftsmanship

### Image Guidelines
- **Lighting**: Natural, even lighting preferred
- **Angles**: Show texture and depth
- **Color**: Accurate representation critical
- **Composition**: Focus on material beauty
- **Resolution**: Minimum 2000px for heroes

### Image Treatments
```css
/* Subtle overlay for text readability */
.image-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.5)
  );
}
```

## Voice & Tone

### Brand Voice Attributes
- **Friendly** yet professional
- **Custom-focused** not one-size-fits-all
- **Integrous** and transparent
- **Streamlined** but thorough
- **Accessible** not intimidating

### Content Guidelines

#### Do's
- Use active voice
- Be specific about benefits
- Include sensory details
- Speak to aspirations
- Provide clear next steps

#### Don'ts
- Use industry jargon without explanation
- Make unsubstantiated claims
- Be overly salesy
- Use clichés
- Talk down to audience

### Example Copy

#### Product Description
**Good**: "Calacatta Gold brings Italian elegance home. Its golden veining creates a stunning focal point that we'll help you incorporate perfectly into your space. Let's explore how this timeless material can transform your kitchen."

**Not Good**: "Premium marble for discerning homeowners. Contact our sales team for pricing."

#### Service Description
**Good**: "From your first design consultation to the final installation, we handle every detail in just 3 weeks. Your dedicated designer will create custom 3D renderings during your in-home visit, so you can see exactly how your new space will look."

**Not Good**: "We offer full-service remodeling with competitive prices and fast turnaround."

#### CTA Examples
- "Let's Design Together" (not "Get Started")
- "Schedule Your Consultation" (not "Book Now")
- "See Your Options" (not "View Products")
- "Chat with a Designer" (not "Contact Us")

## Brand Applications

### Digital Touchpoints
1. **Website**: Full brand expression
2. **Email**: Simplified, mobile-friendly
3. **Social Media**: Visual-forward
4. **Digital Ads**: Clear value prop

### Physical Touchpoints
1. **Showroom**: Immersive brand experience
2. **Business Cards**: Premium finish
3. **Samples**: Branded packaging
4. **Vehicles**: Professional wraps

## Icon System

### Icon Style
- **Style**: Outlined, 2px stroke
- **Corners**: Rounded (2px radius)
- **Grid**: 24x24px base
- **Metaphors**: Stone/construction related

### Common Icons
```
□ Products      ◊ Quote
▤ Samples       ⌂ Showroom  
☰ Menu          ♡ Favorites
⚙ Settings      ? Help
```

## UI Component Styling

### Buttons - Dark Theme
```scss
.btn-primary {
  background: var(--primary);
  color: white;
  font-weight: var(--font-medium);
  text-transform: none;
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(171, 63, 49, 0.3);
  
  &:hover {
    background: lighten(#AB3F31, 8%);
    box-shadow: 0 4px 20px rgba(171, 63, 49, 0.4);
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--classical-gold);
  color: var(--classical-gold);
  
  &:hover {
    background: rgba(233, 184, 114, 0.1);
    border-color: var(--gold-bright);
    box-shadow: 0 0 20px rgba(233, 184, 114, 0.2);
  }
}

.btn-accent {
  background: rgba(135, 195, 191, 0.1);
  color: var(--holiday-turquoise);
  border: 1px solid rgba(135, 195, 191, 0.3);
}
```

### Cards - Dark Theme
```scss
.product-card {
  background: var(--bg-elevated);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    border-color: rgba(233, 184, 114, 0.2);
  }
}
```

## Brand Evolution

### Seasonal Adaptations
- Maintain core identity
- Subtle seasonal accents
- Holiday-appropriate imagery
- Timely messaging

### Future Considerations
- AR/VR experiences
- Motion design language
- Audio branding
- Environmental design

## Brand Governance

### Usage Rules
1. Never stretch or distort logo
2. Maintain minimum clear space
3. Use approved color combinations
4. Follow typography hierarchy
5. Respect photography style

### Quality Standards
- Professional photography only
- Proper color calibration
- High-resolution assets
- Consistent application
- Regular audits

## Measuring Brand Success

### Brand Metrics
- Recognition and recall
- Sentiment analysis
- Share of voice
- Brand preference
- Price premium tolerance

### Feedback Loops
- Customer surveys
- Social listening
- Sales team input
- Designer feedback
- Analytics data

## Next Steps

1. Finalize color preferences
2. Select typography
3. Design logo system
4. Create brand guidelines PDF
5. Build component library

---

*Please answer the questions I asked earlier so we can customize these brand guidelines to perfectly match your vision!*