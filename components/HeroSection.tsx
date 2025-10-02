'use client';

import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Users, 
  Sparkles, 
  Zap, 
  Code2,
  Cpu,
  ChevronRight,
  TrendingUp,
  Bot,
  Target,
  Star
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      {/* Advanced Tech Background */}
      <div className="neural-network" />
      <div className="code-matrix" />
      <div className="circuit-board" />
      
      {/* Data Streams */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
      </div>

      {/* Quantum Particles */}
      <div className="quantum-particles z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-3 card px-6 py-3 shimmer glow-on-hover transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-100 font-medium">AI-Powered Learning Platform</span>
            <ChevronRight className="w-4 h-4 text-blue-300" />
          </div>
          
          {/* Main Heading with Enhanced Gradients */}
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight mb-6">
              Master Skills at
              <br />
              <span className="inline-block">Light Speed</span>
            </h1>
          </div>
          
          {/* Subheading */}
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionary AI-driven education platform that adapts to your learning style.
              <br />
              <span className="text-white font-semibold">10x faster skill acquisition guaranteed.</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="btn-primary text-base px-8 py-4 glow-on-hover interactive-hover">
              <Zap className="w-4 h-4" />
              Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="btn-secondary text-base px-8 py-4 interactive-hover">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {[
              { number: '500K+', label: 'Active Learners', icon: Users, gradient: 'from-blue-400 to-indigo-400' },
              { number: '98.5%', label: 'Success Rate', icon: TrendingUp, gradient: 'from-indigo-400 to-purple-400' },
              { number: '2.5x', label: 'Faster Learning', icon: Zap, gradient: 'from-purple-400 to-pink-400' },
              { number: '24/7', label: 'AI Support', icon: Bot, gradient: 'from-pink-400 to-blue-400' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card text-center glow-on-hover interactive-hover">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-blue-200">Trusted by engineers at Google, Meta, Apple</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-blue-200">4.9/5 from 50K+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-blue-400/30 rounded-full flex justify-center backdrop-blur-sm glow-on-hover">
          <div className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}