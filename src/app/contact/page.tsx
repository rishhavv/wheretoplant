'use client';

‰import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// Reusable Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center animate-float">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">wheretoplant</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#problem" className="text-gray-600 hover:text-green-600 transition-colors">Problem</Link>
            <Link href="/#solution" className="text-gray-600 hover:text-green-600 transition-colors">Solution</Link>
            <Link href="/#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</Link>
            <Link href="/#demo" className="text-gray-600 hover:text-green-600 transition-colors">Demo</Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link>
            <a href="https://t.me/seedsagebot" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Try @seedsagebot
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#problem" className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Problem</Link>
              <Link href="/#solution" className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Solution</Link>
              <Link href="/#features" className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="/#demo" className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Demo</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <a href="https://t.me/seedsagebot" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-4" onClick={() => setMobileMenuOpen(false)}>
                Try @seedsagebot
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">wheretoplant</span>
        </div>
        <p className="text-gray-400 mb-4">
          Revolutionizing Forest Restoration Through AI-Powered Site Selection
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/#problem" className="text-gray-400 hover:text-white transition-colors">Problem</Link>
          <Link href="/#solution" className="text-gray-400 hover:text-white transition-colors">Solution</Link>
          <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="/#demo" className="text-gray-400 hover:text-white transition-colors">Demo</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <a href="https://t.me/seedsagebot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Try Bot</a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 WhereToPlant. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Have questions or want to collaborate? Reach out to our founders.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rishav Katoch</h3>
                <p className="text-lg text-green-600 font-semibold mb-4">Co-founder</p>
                <a href="mailto:rishav.katoch17300@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors">
                  rishav.katoch17300@gmail.com
                </a>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pushpendra Rana</h3>
                <p className="text-lg text-green-600 font-semibold mb-4">Co-founder</p>
                <a href="mailto:xyz@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors">
                  xyz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 