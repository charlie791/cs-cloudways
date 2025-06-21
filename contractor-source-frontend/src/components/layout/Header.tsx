'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils/helpers';

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                Contractor Source
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Quote Cart */}
            <Link
              href="/quote"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
            >
              <span className="text-sm font-medium">Request Quote</span>
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
            </Link>

            {/* Phone */}
            <a
              href="tel:1234567890"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm font-medium">(123) 456-7890</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-600 hover:text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={cn(
            'absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300',
            searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          )}
        >
          <div className="max-w-3xl mx-auto p-4">
            <form className="relative">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-primary"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                Contractor Source
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/quote"
                  className="btn-accent w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
                <a
                  href="tel:1234567890"
                  className="mt-4 flex items-center justify-center space-x-2 text-gray-700"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">(123) 456-7890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}