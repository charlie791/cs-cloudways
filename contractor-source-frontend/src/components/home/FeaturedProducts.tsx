'use client'

import { useQuery } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'
import { GET_PRODUCTS } from '@/lib/apollo/queries'

interface Product {
  id: string
  name: string
  slug: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText?: string
    }
  }
  productCategories?: {
    nodes: Array<{
      name: string
    }>
  }
  attributes?: {
    nodes: Array<{
      name: string
      options: string[]
    }>
  }
}

export default function FeaturedProducts() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { first: 6 }
  })

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    console.error('GraphQL Error:', error)
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
          <div className="text-center py-12">
            <p className="text-gray-500">Unable to load products. Please try again later.</p>
            {process.env.NODE_ENV === 'development' && (
              <p className="text-sm text-red-600 mt-2">{error.message}</p>
            )}
          </div>
        </div>
      </section>
    )
  }

  const products = data?.products?.edges?.map((edge: any) => edge.node) || []

  // Mock data for demonstration if no products
  const mockProducts = products.length === 0 ? [
    { id: '1', name: 'Calacatta Gold Marble', slug: 'calacatta-gold', category: 'Marble', image: '/api/placeholder/400/300' },
    { id: '2', name: 'Black Galaxy Granite', slug: 'black-galaxy', category: 'Granite', image: '/api/placeholder/400/300' },
    { id: '3', name: 'Carrara White Quartz', slug: 'carrara-white', category: 'Quartz', image: '/api/placeholder/400/300' },
    { id: '4', name: 'Blue Pearl Granite', slug: 'blue-pearl', category: 'Granite', image: '/api/placeholder/400/300' },
    { id: '5', name: 'Statuario Marble', slug: 'statuario', category: 'Marble', image: '/api/placeholder/400/300' },
    { id: '6', name: 'Absolute Black Granite', slug: 'absolute-black', category: 'Granite', image: '/api/placeholder/400/300' },
  ] : []

  const displayProducts = products.length > 0 ? products : mockProducts

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium stone slabs, perfect for any project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product: any) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 bg-gray-200">
                  {product.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={product.featuredImage.node.sourceUrl}
                      alt={product.featuredImage.node.altText || product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                      <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      {product.productCategories?.nodes[0]?.name || product.category || 'Stone'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">View Details</span>
                    <svg className="w-5 h-5 text-amber-500 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}