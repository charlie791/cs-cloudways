'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';

interface ProductInfoProps {
  product: {
    name: string;
    price?: string;
    sku?: string;
    status?: string;
    stockStatus?: string;
    shortDescription?: string;
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
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const features = [
    'Premium Quality Stone',
    'Professional Installation Available',
    'Lifetime Warranty',
    'Custom Sizing Available',
  ];

  return (
    <div className="space-y-6">
      {/* Product Title & SKU */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          {product.name}
        </h1>
        {product.sku && (
          <p className="text-sm text-gray-600">SKU: {product.sku}</p>
        )}
      </div>

      {/* Categories */}
      {product.productCategories?.nodes && product.productCategories.nodes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.productCategories.nodes.map((category) => (
            <span
              key={category.slug}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
            >
              {category.name}
            </span>
          ))}
        </div>
      )}

      {/* Price */}
      <div className="border-t border-b py-4">
        {product.price ? (
          <div>
            <p className="text-sm text-gray-600">Starting at</p>
            <p className="text-3xl font-bold text-accent">{product.price}</p>
            <p className="text-sm text-gray-600 mt-1">per square foot</p>
          </div>
        ) : (
          <p className="text-2xl font-semibold text-gray-900">Contact for Pricing</p>
        )}
      </div>

      {/* Short Description */}
      {product.shortDescription && (
        <div 
          className="prose prose-gray text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
        />
      )}

      {/* Features */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Key Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Attributes */}
      {product.attributes?.nodes && product.attributes.nodes.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
          {product.attributes.nodes.map((attr) => (
            <div key={attr.name} className="flex justify-between py-2 border-b">
              <span className="text-sm text-gray-600">{attr.name}</span>
              <span className="text-sm font-medium text-gray-900">{attr.options.join(', ')}</span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={() => setShowQuoteForm(!showQuoteForm)}
          className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
        >
          Request a Quote
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:1234567890"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Call Us</span>
          </a>
          <a
            href={`mailto:info@contractorsource.com?subject=Inquiry about ${product.name}`}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>

      {/* Quote Form (expandable) */}
      {showQuoteForm && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Request a Quote</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      )}

      {/* Stock Status */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Availability</span>
          <span className="text-sm font-medium text-green-600">
            {product.stockStatus === 'IN_STOCK' ? 'In Stock' : 'Contact for Availability'}
          </span>
        </div>
      </div>
    </div>
  );
}