# Content Management Module

## Overview

The Content Management module handles dynamic content areas including showroom locations, project galleries, testimonials, and other marketing content. This integrates with WordPress for easy content updates.

## Business Requirements

### Primary Goals
1. **Showroom Management**: Display multiple locations with details
2. **Project Gallery**: Showcase completed installations
3. **Testimonials**: Customer reviews and success stories
4. **Dynamic Pages**: About, Services, FAQ sections
5. **Blog Integration**: Industry news and tips

### Content Types
1. **Showroom Locations**: Address, hours, contact, images
2. **Gallery Projects**: Before/after photos, project details
3. **Customer Stories**: Reviews, ratings, project outcomes
4. **Service Pages**: Detailed service descriptions
5. **Resource Center**: Care guides, installation tips

## Key Features

### 1. Showroom Locator
- Interactive map with all locations
- Individual showroom pages
- Hours and holiday schedules
- Staff directory
- Virtual tour links
- Appointment booking

### 2. Project Gallery
- Filterable by material/room type
- Before/after sliders
- Project specifications
- Customer testimonials
- Social sharing
- Inspiration boards

### 3. Testimonial System
- Customer reviews with ratings
- Project photos
- Video testimonials
- Review moderation
- SEO-friendly display

### 4. Dynamic Content Pages
- Flexible page builder
- Reusable content blocks
- SEO optimization
- Mobile responsive
- A/B testing support

### 5. Resource Center
- Care and maintenance guides
- Installation instructions
- Design inspiration
- Downloadable PDFs
- Video tutorials

## Technical Architecture

### Component Structure
```
content-management/
├── components/
│   ├── Showroom/
│   │   ├── ShowroomMap
│   │   ├── ShowroomCard
│   │   ├── ShowroomDetails
│   │   └── AppointmentForm
│   ├── Gallery/
│   │   ├── GalleryGrid
│   │   ├── ProjectCard
│   │   ├── BeforeAfterSlider
│   │   └── ProjectFilters
│   ├── Testimonials/
│   │   ├── TestimonialList
│   │   ├── ReviewCard
│   │   ├── RatingDisplay
│   │   └── ReviewForm
│   └── Resources/
│       ├── ResourceGrid
│       ├── GuideViewer
│       └── VideoPlayer
├── hooks/
│   ├── useShowrooms
│   ├── useGallery
│   └── useTestimonials
└── utils/
    ├── mapHelpers
    └── contentFormatters
```

### WordPress Integration
- Custom post types for each content type
- ACF (Advanced Custom Fields) for structured data
- REST API endpoints
- GraphQL integration
- Media library usage

## Implementation Phases

### Phase 1: Showroom System (Week 1)
- Location pages
- Map integration
- Basic appointment form
- Hours display

### Phase 2: Gallery & Testimonials (Week 2)
- Project gallery
- Customer reviews
- Social proof widgets
- Share functionality

### Phase 3: Resources (Week 3)
- Care guides
- FAQ system
- Video integration
- Download center

## API Requirements

### GraphQL Schema
```graphql
type Showroom {
  id: ID!
  name: String!
  slug: String!
  address: Address!
  phone: String!
  email: String!
  hours: [BusinessHours!]!
  images: [MediaItem!]!
  staff: [StaffMember!]!
  amenities: [String!]
  virtualTourUrl: String
}

type GalleryProject {
  id: ID!
  title: String!
  slug: String!
  description: String!
  beforeImage: MediaItem!
  afterImages: [MediaItem!]!
  materials: [Product!]!
  roomType: String!
  projectCost: String
  completionDate: String
  testimonial: Testimonial
}

type Testimonial {
  id: ID!
  author: String!
  company: String
  rating: Int!
  content: String!
  project: GalleryProject
  date: String!
  verified: Boolean!
}
```

## SEO Considerations

- Schema markup for locations
- Review schema for testimonials
- Image optimization
- Local SEO for showrooms
- Structured data for galleries

## Analytics Tracking

- Showroom page views
- Appointment requests
- Gallery engagement
- Resource downloads
- Review submissions

## Next Steps

1. Set up WordPress custom post types
2. Create showroom components
3. Build gallery system
4. Implement testimonials
5. Add resource center