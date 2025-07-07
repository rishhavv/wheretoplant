'use client';

import { ArrowRight, Bot, Globe, TrendingUp, Users, Zap, MapPin, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/wheretoPlantlogo.png"
                alt="WhereToPlant Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-sm bg-white"
              />
              <span className="text-xl font-bold text-gray-900 sr-only">wheretoplant</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-green-600 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-green-600 transition-colors">Solution</a>
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-green-600 transition-colors">Demo</a>
              <a href="#try-now" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
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
                <a 
                  href="#problem" 
                  className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Problem
                </a>
                <a 
                  href="#solution" 
                  className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solution
                </a>
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#demo" 
                  className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demo
                </a>
                <a 
                  href="#try-now" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try @seedsagebot
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Forest Restoration
            </div>
            <h1 className="text-5xl md:text-7xl font-bold animate-gradient mb-6">
              Restore AI Bot
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Revolutionizing Forest Restoration Through AI-Powered Site Selection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#try-now" 
                className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center animate-pulse-glow"
              >
                Try @seedsagebot
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#problem" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem: $7+ Million Wasted Annually 💸
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most tree planting projects choose the wrong locations, leading to massive waste of resources and failed restoration efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">~60%</div>
              <p className="text-gray-700">of $12M+ annual restoration budget thrown into doomed sites</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">50-90%</div>
              <p className="text-gray-700">of trees DIE in poorly selected locations</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-2">$12M+</div>
              <p className="text-gray-700">spent annually in Himachal Pradesh alone</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why does this happen?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">High mortality rates of planted saplings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Wasted financial resources and human effort</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Continued environmental degradation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Loss of community trust in conservation efforts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Solution: AI Meets Conservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restore AI Bot (@seedsagebot) is a data-driven Telegram bot that transforms how we approach forest restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-animation">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location Intelligence</h3>
              <p className="text-gray-600">Analyzes soil composition, climate patterns, elevation, and historical vegetation data</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Prediction</h3>
              <p className="text-gray-600">Provides precise percentage-based survival predictions and star ratings</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bilingual Access</h3>
              <p className="text-gray-600">Operates in both Hindi and English for diverse communities across India</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Delivers comprehensive analysis within seconds via Telegram&apos;s familiar interface</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Share Location</h4>
                <p className="text-gray-600">User opens Telegram, finds @seedsagebot, and shares their geographic coordinates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h4>
                <p className="text-gray-600">The bot&apos;s machine learning model processes environmental data and climate patterns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Visual Report</h4>
                <p className="text-gray-600">Generates a color-coded viability map with success predictions and insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Make Decision</h4>
                <p className="text-gray-600">Users receive star ratings, success percentages, and optimal plantation strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current Focus: Himachal Pradesh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The bot currently specializes in Himachal Pradesh, a state of critical ecological importance in the Indian Himalayas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Altitude Variations</h3>
              <p className="text-gray-700">From 350m to 7,000m elevation requiring species-specific planning</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Climate Diversity</h3>
              <p className="text-gray-700">Subtropical to alpine conditions within the same state</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Soil Complexity</h3>
              <p className="text-gray-700">Varied geological formations affecting plantation success</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monsoon Impact</h3>
              <p className="text-gray-700">Critical timing considerations for plantation activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Impact & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resource Optimization</h3>
              <p className="text-gray-600">Directs limited funds, labor, and saplings to locations with highest success probability</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Waste Reduction</h3>
              <p className="text-gray-600">Prevents costly mistakes by identifying unsuitable plantation sites before investment, with a potential of $63M-$100M savings in Himachal Pradesh over 10 years.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Empowerment</h3>
              <p className="text-gray-600">Gives local citizens and organizations scientific tools for conservation decision-making</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Policy</h3>
              <p className="text-gray-600">Provides evidence-based insights for government and NGO restoration strategies</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Global Impact & Alignment</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">350M+ ha</p>
                <p className="text-gray-700">of land targeted for restoration globally, offering a massive opportunity for impact.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">$10B+</p>
                <p className="text-gray-700">in potential annual global waste if restoration is poorly targeted.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">Global Goals</p>
                <p className="text-gray-700">RestoreAI aligns with the SDGs, Bonn Challenge, and national commitments (NDCs).</p>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Architecture</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h4>
                <p className="text-gray-600">Custom-trained ensemble model on historical plantation data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h4>
                <p className="text-gray-600">Instant analysis of environmental parameters</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Telegram API</h4>
                <p className="text-gray-600">Seamless user experience through familiar messaging interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What&apos;s Next?
            </h2>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restore AI Bot represents the first step in a comprehensive restoration ecosystem. Current focus is on &quot;where to plant&quot; - the critical foundation for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Species Recommendation</h3>
              <p className="text-gray-700">Engine for &quot;what to plant&quot; based on location analysis</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimal Timing</h3>
              <p className="text-gray-700">Predictions for &quot;when to plant&quot; for maximum success</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State Expansion</h3>
              <p className="text-gray-700">Expansion to additional Indian states beyond Himachal Pradesh</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Integration</h3>
              <p className="text-gray-700">Integration with government restoration programs</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Monitoring</h3>
              <p className="text-gray-700">Community monitoring and feedback systems</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-700">Enhanced data visualization and reporting capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Watch a Demo</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See WhereToPlant in action! Watch this short video to understand how our platform helps you make smarter, data-driven restoration decisions.
          </p>
          <div className="aspect-w-9 aspect-h-16 w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg mb-4">
            <iframe
              src="https://www.youtube.com/embed/ld3vUOwQRJ4"
              title="WhereToPlant Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="try-now" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
                      <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the movement towards data-driven forest restoration. Whether you&apos;re a conservationist, researcher, or simply someone who cares about our environment, Restore AI Bot is your gateway to smarter restoration decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://t.me/seedsagebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Bot className="mr-2 w-5 h-5" />
              Try @seedsagebot Now
            </a>
            <a 
              href="#problem" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="/wheretoPlantlogo.png"
                alt="WhereToPlant Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-sm bg-white"
              />
              <span className="text-xl font-bold sr-only">wheretoplant</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing Forest Restoration Through AI-Powered Site Selection
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a>
              <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a>
              <a href="#try-now" className="text-gray-400 hover:text-white transition-colors">Try Bot</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 wheretoplant. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
