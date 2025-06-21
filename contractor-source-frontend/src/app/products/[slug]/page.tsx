import { notFound } from 'next/navigation';
import { apolloClient } from '@/lib/apollo/client';
import { GET_PRODUCT_BY_SLUG, GET_PRODUCTS } from '@/lib/apollo/queries';
import Image from 'next/image';
import Link from 'next/link';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductInfo } from '@/components/products/ProductInfo';

// Generate static params for popular products
export async function generateStaticParams() {
  try {
    const { data } = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: { first: 50 }, // Generate top 50 products
    });

    const products = data?.products?.edges?.map((edge: any) => edge.node) || [];
    
    return products.map((product: any) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Enable ISR - pages will be generated on-demand if not pre-built
export const dynamicParams = true;

// Revalidate every hour for better performance
export const revalidate = 3600;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
  });

  const product = data?.product;

  if (!product) {
    notFound();
  }

  // Prepare gallery images - combine featured image with gallery images
  const galleryImages = [];
  if (product.featuredImage?.node) {
    galleryImages.push({
      sourceUrl: product.featuredImage.node.sourceUrl,
      altText: product.featuredImage.node.altText || product.name,
    });
  }
  if (product.galleryImages?.nodes) {
    galleryImages.push(...product.galleryImages.nodes);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              {product.productCategories?.nodes?.[0] && (
                <li>
                  <span className="mx-2 text-gray-400">/</span>
                  <Link 
                    href={`/products?category=${product.productCategories.nodes[0].slug}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {product.productCategories.nodes[0].name}
                  </Link>
                </li>
              )}
              <li>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <ProductGallery images={galleryImages} productName={product.name} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>

        {/* Product Description */}
        {product.description && (
          <div className="mt-16 border-t pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Product Details
            </h2>
            <div 
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        )}

        {/* Related Products */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for related products - would need a separate query */}
            <div className="text-center text-gray-500 col-span-full py-8">
              Related products coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}