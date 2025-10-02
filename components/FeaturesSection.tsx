'use client';

import { 
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Expert-led courses',
    description: 'Learn from industry professionals with real-world experience',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Live mentorship',
    description: '1-on-1 guidance from senior engineers and designers',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Award,
    title: 'Industry certificates',
    description: 'Earn credentials recognized by top companies',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Career tracking',
    description: 'Monitor your progress with detailed analytics',
    gradient: 'from-pink-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Secure learning',
    description: 'Enterprise-grade security and privacy protection',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Fast-track programs',
    description: 'Accelerated learning paths for quick skill development',
    gradient: 'from-indigo-600 to-purple-600'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Engineer at Vercel',
    avatar: 'SC',
    quote: 'The hands-on projects helped me level up faster than any other platform. Got promoted within 3 months.',
    rating: 5,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Designer at Linear',
    avatar: 'MR', 
    quote: 'Finally, a learning platform that understands how modern teams work. The mentorship was invaluable.',
    rating: 5,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Emily Watson',
    role: 'Engineering Manager at GitHub',
    avatar: 'EW',
    quote: 'We use this for our entire team. The quality and depth of content is unmatched in the industry.',
    rating: 5,
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="features">
      {/* Advanced Background elements */}
      <div className="neural-network" />
      <div className="code-matrix" />
      
      {/* Quantum Particles for features section */}
      <div className="quantum-particles">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 card px-4 py-2 mb-6 shimmer">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-200 font-medium">Everything you need</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Built for professionals
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Advanced learning tools designed for the modern workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card group cursor-pointer glow-on-hover interactive-hover">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed text-sm group-hover:text-blue-100 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Loved by professionals
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              See how teams at leading companies use our platform to grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card glow-on-hover interactive-hover">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-blue-100 mb-6 italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-blue-200 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { number: '50K+', label: 'Learners', gradient: 'from-blue-400 to-indigo-400' },
              { number: '1.2K+', label: 'Courses', gradient: 'from-indigo-400 to-purple-400' },
              { number: '98%', label: 'Job placement', gradient: 'from-purple-400 to-pink-400' },
              { number: '4.9★', label: 'Rating', gradient: 'from-pink-400 to-blue-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center interactive-hover">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-blue-200 text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="card max-w-2xl mx-auto text-center glow-on-hover shimmer">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Ready to advance your career?
              </h3>
              <p className="text-blue-100 text-sm">
                Join thousands of professionals already learning with us
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-base glow-on-hover">
                Start learning today
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="text-xs text-blue-300">
                🎯 Free trial • No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}