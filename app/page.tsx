import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import { Navigation } from '@/components/ui/Navigation'
import { Chatbot } from '@/components/ui/Chatbot'

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      
      {/* Final CTA Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Start building today
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join over 50,000 professionals who have transformed their careers with our platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary text-base px-8 py-4">
              Get started for free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <div className="text-sm text-gray-500">
              No credit card required • 30-day free trial
            </div>
          </div>

          {/* Final Stats */}
          <div className="card max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400 text-sm">Active learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 text-sm">Success rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-gray-400 text-sm">User rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-semibold text-white mb-4">
                EduCinematic
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Professional learning platform for modern teams and individuals.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 EduCinematic. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </main>
  )
}