'use client';

import { ArrowRight, Bot, Globe, TrendingUp, Users, Zap, MapPin, MessageCircle, Menu, X, ChevronDown, Leaf, Target, Clock, Scaling } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Accordion Item Component
const AccordionItem = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-green-200">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-900"
      >
        <span>{title}</span>
        <ChevronDown className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-gray-600">{children}</p>
        </div>
      )}
    </div>
  );
};


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center animate-float">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">wheretoplant</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-green-600 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-green-600 transition-colors">Solution</a>
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-green-600 transition-colors">Demo</a>
              <a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <a href="#try-now" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Try @wheretoplantbot
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
                  href="/contact" 
                  className="text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="#try-now" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mx-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try @wheretoplantbot
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
              ML-Powered Forest Restoration
            </div>
            <h1 className="text-5xl md:text-7xl font-bold animate-gradient mb-6">
            WhereToPlant Bot
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Revolutionizing Forest Restoration Through Machine-Learning Powered Plantation Site Selection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#try-now" 
                className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center animate-pulse-glow"
              >
                Try @wheretoplantbot
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
              The Challenge: Billions Wasted on Ineffective Tree Planting 🌳💸
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most tree planting initiatives fail by choosing unsuitable sites, squandering resources and hindering successful restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
              <p className="text-gray-700">of annual restoration budget is wasted on doomed sites</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
              <p className="text-gray-700">of trees die in poorly selected locations</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-2">$800M+</div>
              <p className="text-gray-700">spent annually in India on forest restoration and conservation</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Do Reforestation Efforts Fail?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Inadequate Site Analysis:</strong> Planting without considering crucial data like soil health, climate patterns, and land history.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Mismatched Species:</strong> Selecting tree species that are not suited to the local micro-environment.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Ignoring Social Factors:</strong> Overlooking land tenure issues and community needs, which undermines long-term success.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Wasted Resources:</strong> Pouring funds and effort into locations doomed from the start, eroding trust and slowing progress.</p>
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
              The Solution: ML Meets Conservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WhereToPlant Bot (@wheretoplantbot) is a data-driven Telegram bot that transforms how we approach forest restoration.
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
            <div className="max-w-2xl mx-auto">
              <AccordionItem
                title="1. Share Location"
                isOpen={openAccordion === 1}
                onClick={() => handleAccordionClick(1)}
              >
                User opens Telegram, finds @wheretoplantbot, and shares their geographic coordinates.
              </AccordionItem>
              <AccordionItem
                title="2. Machine Learning Analysis"
                isOpen={openAccordion === 2}
                onClick={() => handleAccordionClick(2)}
              >
                The bot&apos;s machine learning model processes environmental data and climate patterns.
              </AccordionItem>
              <AccordionItem
                title="3. Visual Report"
                isOpen={openAccordion === 3}
                onClick={() => handleAccordionClick(3)}
              >
                Generates a color-coded viability map with success predictions and insights.
              </AccordionItem>
              <AccordionItem
                title="4. Make Decision"
                isOpen={openAccordion === 4}
                onClick={() => handleAccordionClick(4)}
              >
                Users receive star ratings, success percentages, and optimal plantation strategies.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-amber-50 to-green-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Current Focus: Himachal Pradesh
            </h2>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              The bot currently specializes in Himachal Pradesh, a state of critical ecological importance in the Indian Himalayas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <Image
                src="/Himachal_Pradesh_Map.png"
                alt="Map of Himachal Pradesh"
                width={400}
                height={500}
                className="w-full max-w-md h-auto drop-shadow-xl rounded-xl border-4 border-green-300 bg-white"
                priority
              />
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl border border-blue-200 shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Altitude Variations</h3>
                <p className="text-gray-700">From 350m to 7,000m elevation requiring species-specific planning.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl border border-green-200 shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Climate Diversity</h3>
                <p className="text-gray-700">Subtropical to alpine conditions within the same state.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 rounded-2xl border border-amber-200 shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Soil Complexity</h3>
                <p className="text-gray-700">Varied geological formations affecting plantation success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Impact & Vision
            </h2>
          </div>

          {/* Core Impact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-200 text-green-800 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Resource Optimization</h3>
              <p className="text-green-800">Directs limited funds, labor, and saplings to locations with highest success probability.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
              <div className="w-12 h-12 bg-red-200 text-red-800 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Waste Reduction</h3>
              <p className="text-green-800">Prevents costly mistakes by identifying unsuitable sites, saving a potential $63M-$100M in HP over 10 years.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
              <div className="w-12 h-12 bg-green-200 text-green-800 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Community Empowerment</h3>
              <p className="text-green-800">Gives local citizens and organizations scientific tools for conservation decision-making.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
              <div className="w-12 h-12 bg-blue-200 text-blue-800 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Data-Driven Policy</h3>
              <p className="text-green-800">Provides evidence-based insights for government and NGO restoration strategies.</p>
            </div>
          </div>

          {/* Global Impact Stats */}
          <div className="bg-green-800/80 text-white p-8 rounded-2xl border border-green-300 shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Global Impact & Alignment</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-amber-300 mb-2">350M+ ha</p>
                <p>of land targeted for restoration globally, offering a massive opportunity for impact.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-300 mb-2">$10B+</p>
                <p>in potential annual global waste if restoration is poorly targeted.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-300 mb-2">Global Goals</p>
                <p>WhereToPlant aligns with the SDGs, Bonn Challenge, and national commitments (NDCs).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              What&apos;s Next?
            </h2>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              WhereToPlant represents the first step in a comprehensive restoration ecosystem.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-9 sm:left-1/2 w-0.5 h-full bg-green-200" aria-hidden="true"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex items-start sm:space-x-8">
                <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center bg-green-500 text-white rounded-full z-10">
                  <Leaf className="w-8 h-8"/>
                </div>
                <div className="min-w-0 flex-1 sm:pl-8">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-md">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Species Recommendation</h3>
                    <p className="text-green-800">Engine for "what to plant" based on location analysis.</p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-start sm:justify-end sm:space-x-reverse sm:space-x-8">
                <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center bg-green-500 text-white rounded-full z-10 sm:order-last">
                  <Clock className="w-8 h-8"/>
                </div>
                <div className="min-w-0 flex-1 sm:pr-8 sm:text-right">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-md">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Optimal Timing</h3>
                    <p className="text-green-800">Predictions for "when to plant" for maximum success.</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-start sm:space-x-8">
                <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center bg-green-500 text-white rounded-full z-10">
                  <Target className="w-8 h-8"/>
                </div>
                <div className="min-w-0 flex-1 sm:pl-8">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-md">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">State Expansion & Integration</h3>
                    <p className="text-green-800">Expansion to additional Indian states and integration with government restoration programs.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex items-start sm:justify-end sm:space-x-reverse sm:space-x-8">
                <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center bg-green-500 text-white rounded-full z-10 sm:order-last">
                  <Scaling className="w-8 h-8"/>
                </div>
                <div className="min-w-0 flex-1 sm:pr-8 sm:text-right">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-md">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Community & Advanced Analytics</h3>
                    <p className="text-green-800">Community monitoring, feedback systems, and enhanced data visualization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-amber-50 to-green-200">
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
      <section id="try-now" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the movement towards data-driven forest restoration. Whether you&apos;re a conservationist, researcher, or simply someone who cares about our environment, WhereToPlant is your gateway to smarter restoration decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://t.me/seedsagebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Bot className="mr-2 w-5 h-5" />
              Try @wheretoplantbot Now
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">wheretoplant</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing Forest Restoration Through ML-Powered Site Selection
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a>
              <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#try-now" className="text-gray-400 hover:text-white transition-colors">Try Bot</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 WhereToPlant. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
