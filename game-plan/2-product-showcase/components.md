# Product Showcase Components

## Component Hierarchy

```
ProductsPage
├── ProductLayout
│   ├── ProductFilters
│   │   ├── FilterSection
│   │   ├── PriceRangeSlider
│   │   └── FilterBadges
│   └── ProductContent
│       ├── ProductSearch
│       ├── ProductGrid
│       │   ├── ProductCard
│       │   └── ProductCardSkeleton
│       ├── ProductList
│       └── ProductPagination
├── ProductQuickView
├── ProductComparison
└── ProductDetail
    ├── ProductGallery
    ├── ProductInfo
    ├── ProductSpecifications
    └── RelatedProducts
```

## Core Components

### 1. ProductGrid

**Purpose**: Display products in a responsive grid layout

**Props**:
```typescript
interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  gridColumns?: 2 | 3 | 4;
  loading?: boolean;
  onProductClick?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}
```

**Features**:
- Responsive grid layout
- Skeleton loading states
- Infinite scroll support
- View mode toggle
- Hover effects

**State**:
- Selected products for comparison
- Favorited products
- Quick view product

### 2. ProductCard

**Purpose**: Individual product display card

**Props**:
```typescript
interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onQuickView?: () => void;
  onCompare?: () => void;
  onFavorite?: () => void;
  isFavorited?: boolean;
  isComparing?: boolean;
  priority?: boolean; // for image loading
}
```

**Features**:
- Lazy loaded images
- Hover zoom effect
- Quick action buttons
- Price display logic
- Stock status badge

**Variants**:
- Grid view (square)
- List view (horizontal)
- Compact (mobile)

### 3. ProductFilters

**Purpose**: Comprehensive filtering system

**Props**:
```typescript
interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
  loading?: boolean;
  isMobile?: boolean;
}

interface FilterState {
  categories: string[];
  materials: string[];
  colors: string[];
  priceRange: [number, number];
  availability: 'all' | 'in-stock' | 'special-order';
  thickness: string[];
  finish: string[];
  sortBy: SortOption;
}
```

**Features**:
- Collapsible sections
- Multi-select options
- Price range slider
- Active filter count
- Clear filters action
- Mobile drawer variant

**Sub-components**:
- `FilterSection`: Reusable filter group
- `PriceRangeSlider`: Dual handle slider
- `FilterBadges`: Active filter display

### 4. ProductSearch

**Purpose**: Smart search with suggestions

**Props**:
```typescript
interface ProductSearchProps {
  onSearch: (query: string) => void;
  suggestions?: SearchSuggestion[];
  recentSearches?: string[];
  placeholder?: string;
  autoFocus?: boolean;
}

interface SearchSuggestion {
  type: 'product' | 'category' | 'color';
  value: string;
  label: string;
  count?: number;
}
```

**Features**:
- Auto-complete dropdown
- Search history
- Category shortcuts
- Voice search button
- Clear search
- Loading state

### 5. ProductDetail

**Purpose**: Comprehensive product information page

**Props**:
```typescript
interface ProductDetailProps {
  product: Product;
  relatedProducts?: Product[];
  onQuoteRequest: () => void;
  onAddToComparison?: () => void;
}
```

**Features**:
- Full product information
- Image gallery with zoom
- Specification tables
- Care instructions
- Related products
- Sticky CTA bar

**Sub-components**:
- `ProductGallery`: Image viewer with zoom
- `ProductInfo`: Details and description
- `ProductSpecifications`: Technical specs
- `RelatedProducts`: Similar items

### 6. ProductGallery

**Purpose**: Interactive image viewer

**Props**:
```typescript
interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
  enableZoom?: boolean;
  enable360?: boolean;
}

interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  isDefault?: boolean;
}
```

**Features**:
- Thumbnail navigation
- Pinch to zoom (mobile)
- Lightbox mode
- 360° view (if available)
- Download high-res
- Share image

### 7. ProductComparison

**Purpose**: Side-by-side product comparison

**Props**:
```typescript
interface ProductComparisonProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  maxProducts?: number;
}
```

**Features**:
- Compare up to 4 products
- Highlight differences
- Sticky headers
- Export as PDF
- Share comparison
- Add/remove products

## Shared Components

### ProductBadge

**Purpose**: Status and feature badges

```typescript
interface ProductBadgeProps {
  type: 'stock' | 'new' | 'sale' | 'featured';
  text?: string;
  color?: string;
  size?: 'sm' | 'md';
}
```

### ProductPrice

**Purpose**: Consistent price display

```typescript
interface ProductPriceProps {
  price?: number;
  salePrice?: number;
  unit?: string;
  showRange?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
```

### ProductSkeleton

**Purpose**: Loading placeholder

```typescript
interface ProductSkeletonProps {
  viewMode: 'grid' | 'list';
  count?: number;
}
```

## Component Guidelines

### Image Optimization
```typescript
// Use Next.js Image with proper sizing
<Image
  src={product.image}
  alt={product.name}
  fill
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
  priority={index < 6}
  placeholder="blur"
  blurDataURL={product.blurDataURL}
/>
```

### Filter Logic
```typescript
// URL-based filter state
const [filters, setFilters] = useQueryParams({
  category: [],
  material: [],
  color: [],
  minPrice: 0,
  maxPrice: 1000,
  sort: 'featured'
});
```

### Performance Patterns
```typescript
// Virtual scrolling for large lists
import { VirtualList } from '@tanstack/react-virtual';

// Debounced search
const debouncedSearch = useDebouncedCallback(
  (value: string) => {
    handleSearch(value);
  },
  300
);
```

## Styling Approach

### Design Tokens
```scss
// Product-specific tokens
--product-card-shadow: 0 2px 8px rgba(0,0,0,0.1);
--product-card-radius: 8px;
--product-image-ratio: 1; // square
--filter-panel-width: 280px;
--product-grid-gap: 24px;
```

### Component Classes
```css
.product-showcase
.product-grid
.product-card
.product-filters
.product-search
.product-gallery
.product-comparison
```

### Responsive Breakpoints
- Mobile: 1 column, bottom sheet filters
- Tablet: 2 columns, collapsible sidebar
- Desktop: 3-4 columns, fixed sidebar

## Accessibility

### Keyboard Navigation
- Tab through products
- Enter to view details
- Space to toggle filters
- Arrow keys in gallery

### ARIA Labels
```html
<div role="region" aria-label="Product filters">
  <button aria-expanded="false" aria-controls="filter-material">
    Material Type
  </button>
</div>
```

### Screen Reader
- Product count announcements
- Filter change announcements
- Loading state updates
- Image descriptions

## Testing Strategy

### Unit Tests
- Filter logic
- Sort functions
- Price calculations
- Search algorithms

### Integration Tests
- Filter + product display
- Search + results
- Pagination flow
- Comparison functionality

### Visual Tests
- Product card variants
- Filter panel states
- Gallery interactions
- Responsive layouts

## Implementation Notes

1. **Start with ProductCard**: Core building block
2. **Build filter logic separately**: Testable units
3. **Use Storybook**: Document all variants
4. **Optimize early**: Images are critical
5. **Mobile-first**: Touch interactions

## Next Steps

1. Create product TypeScript types
2. Build ProductCard component
3. Implement filter logic
4. Add search functionality
5. Integrate with GraphQL