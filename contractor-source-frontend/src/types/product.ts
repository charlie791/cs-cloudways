export interface Product {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  sku: string;
  description?: string;
  shortDescription?: string;
  status: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
  galleryImages?: {
    nodes: Array<{
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    }>;
  };
  price?: string;
  stockStatus?: 'IN_STOCK' | 'OUT_OF_STOCK' | 'ON_BACKORDER';
  stockQuantity?: number;
  productCategories?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  attributes?: {
    nodes: Array<{
      name: string;
      options: string[];
    }>;
  };
  stoneDetails?: {
    materialType: string;
    thickness: string;
    dimensions?: {
      length: number;
      width: number;
    };
    finish: string;
    colorFamily: string;
    origin: string;
    pattern?: string;
    priceRange?: string;
    technicalSpecs?: {
      density?: number;
      absorption?: number;
      flexuralStrength?: number;
    };
  };
}

export interface ProductEdge {
  node: Product;
  cursor: string;
}

export interface ProductConnection {
  edges: ProductEdge[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
}

export interface ProductsResponse {
  products: ProductConnection;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  materialType?: string[];
  colorFamily?: string[];
  finish?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count: number;
  image?: {
    sourceUrl: string;
    altText: string;
  };
}