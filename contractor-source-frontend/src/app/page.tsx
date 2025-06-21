import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import LatestBlogPosts from '@/components/home/LatestBlogPosts'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <LatestBlogPosts />
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our complete collection and get expert advice from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quote" 
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </a>
            <a 
              href="/showroom" 
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-gray-700 hover:bg-gray-800 transition-colors"
            >
              Visit Showroom
            </a>
          </div>
        </div>
      </section>
    </>
  )
}