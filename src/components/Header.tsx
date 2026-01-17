'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">NeriTerm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-secondary hover:text-text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition">
              How It Works
            </a>
            <a href="#download" className="text-text-secondary hover:text-text-primary transition">
              Download
            </a>
            <a
              href="https://github.com/nerikeshi/neriterm-server/releases/latest"
              className="px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg transition font-medium"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-text-secondary hover:text-text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="block text-text-secondary hover:text-text-primary transition">
              How It Works
            </a>
            <a href="#download" className="block text-text-secondary hover:text-text-primary transition">
              Download
            </a>
            <a
              href="https://github.com/nerikeshi/neriterm-server/releases/latest"
              className="inline-block px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg transition font-medium"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
