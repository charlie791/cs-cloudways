# Product Showcase API Endpoints

## GraphQL Schema

### Types

```graphql
type Product {
  id: ID!
  databaseId: Int!
  name: String!
  slug: String!
  sku: String!
  description: String
  shortDescription: String
  status: ProductStatus!
  featured: Boolean!
  catalogVisibility: CatalogVisibility!
  
  # Pricing
  price: String
  regularPrice: String
  salePrice: String
  priceRange: ProductPriceRange
  
  # Inventory
  stockStatus: StockStatus!
  stockQuantity: Int
  manageStock: Boolean!
  backorders: BackorderStatus!
  
  # Media
  featuredImage: MediaItem
  galleryImages: ProductGalleryImages
  videoUrl: String
  
  # Categorization
  productCategories: ProductCategoryConnection
  productTags: ProductTagConnection
  material: Material
  colors: [Color!]
  pattern: Pattern
  
  # Specifications
  attributes: ProductAttributeConnection
  thickness: String
  finish: String
  origin: String
  applications: [Application!]
  
  # SEO
  seo: SEO
  
  # Related
  relatedProducts: ProductConnection
  crossSellProducts: ProductConnection
  variations: ProductVariationConnection
  
  # Metadata
  createdAt: String!
  updatedAt: String!
  totalSales: Int
  reviewCount: Int
  averageRating: Float
}

type ProductPriceRange {
  minPrice: String!
  maxPrice: String!
}

type Material {
  id: ID!
  name: String!
  slug: String!
  description: String
  properties: MaterialProperties
}

type MaterialProperties {
  durability: Int # 1-10
  porosity: Float
  hardness: Float
  heatResistance: Boolean
  stainResistance: Boolean
  scratchResistance: Boolean
}

type Color {
  id: ID!
  name: String!
  hex: String
  family: ColorFamily!
}

type Pattern {
  id: ID!
  name: String!
  type: PatternType!
}

type ProductAttribute {
  id: ID!
  name: String!
  slug: String!
  value: String!
  visible: Boolean!
  variation: Boolean!
}

type ProductFilter {
  categories: [String!]
  materials: [String!]
  colors: [String!]
  patterns: [String!]
  priceRange: PriceRangeInput
  thickness: [String!]
  finish: [String!]
  availability: AvailabilityFilter
  applications: [String!]
}

type ProductSearchResult {
  products: ProductConnection!
  suggestions: [SearchSuggestion!]
  facets: SearchFacets!
  totalCount: Int!
}

type SearchSuggestion {
  type: SuggestionType!
  value: String!
  label: String!
  count: Int
}

type SearchFacets {
  categories: [FacetBucket!]!
  materials: [FacetBucket!]!
  colors: [FacetBucket!]!
  priceRanges: [PriceFacetBucket!]!
}

type FacetBucket {
  key: String!
  label: String!
  count: Int!
}

enum ProductStatus {
  PUBLISH
  DRAFT
  PENDING
  PRIVATE
}

enum StockStatus {
  IN_STOCK
  OUT_OF_STOCK
  ON_BACKORDER
}

enum ColorFamily {
  WHITE
  BLACK
  GRAY
  BROWN
  BEIGE
  RED
  BLUE
  GREEN
  MULTI
}

enum PatternType {
  VEINED
  SPECKLED
  SOLID
  SWIRLED
  CRYSTALLINE
}

enum SortOption {
  DEFAULT
  POPULARITY
  RATING
  DATE
  PRICE_LOW_TO_HIGH
  PRICE_HIGH_TO_LOW
  NAME_ASC
  NAME_DESC
}
```

### Queries

```graphql
# Get products with filtering and pagination
query GetProducts(
  $first: Int = 20
  $after: String
  $where: ProductWhereArgs
  $orderBy: ProductOrderByEnum
) {
  products(
    first: $first
    after: $after
    where: $where
    orderBy: $orderBy
  ) {
    pageInfo {
      hasNextPage
      endCursor
      total
    }
    edges {
      node {
        id
        name
        slug
        sku
        price
        stockStatus
        featuredImage {
          sourceUrl
          altText
          srcSet
        }
        material {
          name
          slug
        }
        colors {
          name
          hex
        }
        productCategories(first: 1) {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
}

# Get single product with full details
query GetProductBySlug($slug: String!) {
  product(id: $slug, idType: SLUG) {
    id
    databaseId
    name
    slug
    sku
    description
    shortDescription
    price
    regularPrice
    salePrice
    stockStatus
    stockQuantity
    
    featuredImage {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
    
    galleryImages {
      nodes {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    
    material {
      name
      slug
      properties {
        durability
        porosity
        heatResistance
        stainResistance
      }
    }
    
    attributes {
      nodes {
        name
        value
        visible
      }
    }
    
    productCategories {
      nodes {
        name
        slug
        parent {
          node {
            name
            slug
          }
        }
      }
    }
    
    relatedProducts(first: 6) {
      nodes {
        id
        name
        slug
        price
        featuredImage {
          sourceUrl
          altText
        }
      }
    }
    
    seo {
      title
      description
      canonicalUrl
      openGraph {
        title
        description
        image {
          sourceUrl
        }
      }
    }
  }
}

# Search products with auto-complete
query SearchProducts(
  $query: String!
  $first: Int = 20
  $filters: ProductFilter
) {
  searchProducts(
    query: $query
    first: $first
    filters: $filters
  ) {
    products {
      edges {
        node {
          id
          name
          slug
          price
          featuredImage {
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    suggestions {
      type
      value
      label
      count
    }
    facets {
      categories {
        key
        label
        count
      }
      materials {
        key
        label
        count
      }
    }
    totalCount
  }
}

# Get filter options
query GetProductFilters {
  productFilters {
    categories {
      id
      name
      slug
      count
    }
    materials {
      id
      name
      slug
      count
    }
    colors {
      id
      name
      hex
      family
      count
    }
    patterns {
      id
      name
      type
      count
    }
    thicknessOptions
    finishOptions
    priceRange {
      min
      max
    }
  }
}

# Get featured products
query GetFeaturedProducts($first: Int = 8) {
  products(
    first: $first
    where: { featured: true, status: PUBLISH }
  ) {
    nodes {
      id
      name
      slug
      price
      featuredImage {
        sourceUrl
        altText
      }
      material {
        name
      }
    }
  }
}

# Compare products
query CompareProducts($ids: [ID!]!) {
  compareProducts(ids: $ids) {
    products {
      id
      name
      sku
      price
      material {
        name
        properties {
          durability
          porosity
          heatResistance
          stainResistance
          scratchResistance
        }
      }
      attributes {
        nodes {
          name
          value
        }
      }
      thickness
      finish
      applications
      stockStatus
    }
    comparisonMatrix {
      attribute
      values
    }
  }
}
```

### Mutations

```graphql
# Track product view
mutation TrackProductView($productId: ID!) {
  trackProductView(productId: $productId) {
    success
  }
}

# Save product to favorites
mutation SaveProductToFavorites($productId: ID!) {
  saveProductToFavorites(productId: $productId) {
    success
    favorites {
      id
    }
  }
}

# Add product to comparison
mutation AddToComparison($productId: ID!) {
  addToComparison(productId: $productId) {
    success
    comparisonProducts {
      id
    }
  }
}
```

### Input Types

```graphql
input ProductWhereArgs {
  status: [ProductStatus!]
  featured: Boolean
  category: [String!]
  categoryIn: [ID!]
  material: [String!]
  color: [String!]
  pattern: [String!]
  minPrice: Float
  maxPrice: Float
  stockStatus: [StockStatus!]
  thickness: [String!]
  finish: [String!]
  search: String
}

input PriceRangeInput {
  min: Float!
  max: Float!
}

input ProductOrderByInput {
  field: ProductOrderByField!
  order: OrderEnum!
}

enum ProductOrderByField {
  DATE
  TITLE
  PRICE
  POPULARITY
  RATING
  MENU_ORDER
}

enum OrderEnum {
  ASC
  DESC
}

enum AvailabilityFilter {
  ALL
  IN_STOCK
  SPECIAL_ORDER
}
```

## REST Endpoints (Legacy/File Operations)

### Generate Product PDF
```
GET /api/products/{productId}/pdf

Response: PDF file stream
```

### Export Comparison
```
POST /api/products/compare/export
Content-Type: application/json

Body:
{
  "productIds": ["123", "456", "789"],
  "format": "pdf" | "csv"
}

Response: File download
```

## Implementation Notes

### Caching Strategy
```typescript
// Product list cache: 5 minutes
// Product details cache: 30 minutes
// Filter options cache: 1 hour
// Invalidate on product update

const CACHE_POLICIES = {
  products: {
    maxAge: 300, // 5 minutes
    staleWhileRevalidate: 600
  },
  productDetail: {
    maxAge: 1800, // 30 minutes
    staleWhileRevalidate: 3600
  },
  filters: {
    maxAge: 3600, // 1 hour
    staleWhileRevalidate: 7200
  }
};
```

### Search Implementation
```typescript
// Use Algolia or Elasticsearch for search
// Fallback to database full-text search
// Index fields: name, description, sku, material, color
```

### Performance Optimizations
```graphql
# Use field aliases for different image sizes
query {
  product(id: "123") {
    thumbnail: featuredImage {
      sourceUrl(size: THUMBNAIL)
    }
    medium: featuredImage {
      sourceUrl(size: MEDIUM)
    }
    large: featuredImage {
      sourceUrl(size: LARGE)
    }
  }
}
```

### Error Handling
```typescript
enum ProductErrorCode {
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  INVALID_FILTER = 'INVALID_FILTER',
  SEARCH_ERROR = 'SEARCH_ERROR',
  COMPARISON_LIMIT = 'COMPARISON_LIMIT'
}
```

## Testing Queries

### Basic Product Query
```graphql
query {
  products(
    first: 10
    where: {
      status: PUBLISH,
      stockStatus: IN_STOCK,
      category: "granite"
    }
  ) {
    edges {
      node {
        id
        name
        price
      }
    }
  }
}
```

### Filter Options Query
```graphql
query {
  productFilters {
    categories {
      name
      count
    }
    priceRange {
      min
      max
    }
  }
}
```

## Next Steps

1. Implement GraphQL resolvers
2. Set up search infrastructure
3. Configure image CDN
4. Implement caching layer
5. Add analytics tracking