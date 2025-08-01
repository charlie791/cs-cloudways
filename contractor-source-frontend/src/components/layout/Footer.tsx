import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ],
  products: [
    { name: 'Granite Slabs', href: '/products?category=granite' },
    { name: 'Quartz Slabs', href: '/products?category=quartz' },
    { name: 'Marble Slabs', href: '/products?category=marble' },
    { name: 'All Products', href: '/products' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request Quote', href: '/quote' },
    { name: 'Visit Showroom', href: '/showroom' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Contractor Source</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your premier destination for high-quality granite, quartz, and marble slabs. 
                Transform your space with our extensive collection of premium stone materials.
              </p>
              <div className="flex space-x-4">
                {/* Social Links */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    123 Stone Boulevard<br />
                    Tampa, FL 33601
                  </span>
                </li>
                <li>
                  <a
                    href="tel:1234567890"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">(123) 456-7890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@contractorsource.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">info@contractorsource.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="mt-1 text-sm text-gray-300">
                Get the latest updates on new products and exclusive offers.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" suppressHydrationWarning>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Contractor Source. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}