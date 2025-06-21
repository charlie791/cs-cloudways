'use client'

import Link from 'next/link'
import Image from 'next/image'

// Mock blog data for demonstration
const mockBlogPosts = [
  {
    id: '1',
    title: 'Choosing the Perfect Granite for Your Kitchen',
    excerpt: 'Learn how to select the ideal granite countertop that complements your kitchen design and lifestyle.',
    slug: 'choosing-perfect-granite-kitchen',
    date: 'January 15, 2025',
    category: 'Kitchen Design',
    image: '/api/placeholder/600/400',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Marble vs Quartz: Making the Right Choice',
    excerpt: 'Compare the benefits and characteristics of marble and quartz to make an informed decision for your project.',
    slug: 'marble-vs-quartz-comparison',
    date: 'January 10, 2025',
    category: 'Materials Guide',
    image: '/api/placeholder/600/400',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: '2025 Stone Design Trends',
    excerpt: 'Discover the latest trends in natural stone design and how to incorporate them into your home.',
    slug: '2025-stone-design-trends',
    date: 'January 5, 2025',
    category: 'Design Trends',
    image: '/api/placeholder/600/400',
    readTime: '4 min read'
  }
]

export default function LatestBlogPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights, design tips, and inspiration for your stone projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-amber-600 font-semibold">
                      Read More
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}