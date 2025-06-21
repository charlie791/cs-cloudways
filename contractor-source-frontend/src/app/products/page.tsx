import { apolloClient } from '@/lib/apollo/client';
import { GET_PRODUCTS, GET_PRODUCT_CATEGORIES } from '@/lib/apollo/queries';
import { Product, ProductCategory } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';

async function getProducts() {
  try {
    const { data } = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: { first: 20 },
    });
    return data.products.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const { data } = await apolloClient.query({
      query: GET_PRODUCT_CATEGORIES,
    });
    return data.productCategories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <PageLayout>
      {/* Page Header */}
      <section className="bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse our extensive collection of premium granite, quartz, and marble slabs. 
            Each piece is carefully selected for quality and beauty.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category: ProductCategory) => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent" />
                      <span className="ml-2 text-sm text-gray-700">Under $50/sq ft</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent" />
                      <span className="ml-2 text-sm text-gray-700">$50 - $100/sq ft</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent" />
                      <span className="ml-2 text-sm text-gray-700">Over $100/sq ft</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button className="w-full btn-outline text-sm">
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-600">
                  Showing {products.length} products
                </p>
                <select className="input py-2 px-3 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Sort by: Name (A-Z)</option>
                  <option>Sort by: Name (Z-A)</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                </select>
              </div>

              {/* Products */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product: Product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="card hover-lift group"
                    >
                      <div className="aspect-product relative overflow-hidden bg-gray-100">
                        {product.featuredImage?.node ? (
                          <Image
                            src={product.featuredImage.node.sourceUrl}
                            alt={product.featuredImage.node.altText || product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        {product.stockStatus === 'IN_STOCK' && (
                          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            In Stock
                          </span>
                        )}
                      </div>
                      <div className="card-body">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">SKU: {product.sku}</p>
                        {product.productCategories?.nodes[0] && (
                          <p className="text-sm text-secondary">{product.productCategories.nodes[0].name}</p>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-semibold text-primary">
                            {product.price || 'Contact for Price'}
                          </span>
                          <span className="text-sm text-accent font-medium">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found.</p>
                </div>
              )}

              {/* Load More */}
              {products.length >= 20 && (
                <div className="mt-8 text-center">
                  <button className="btn-primary">
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}