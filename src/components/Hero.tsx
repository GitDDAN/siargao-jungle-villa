import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Shield, MessageCircle, Star, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const residents = [
    { name: "Daniel", age: 40, country: "Denmark", initials: "D" },
    { name: "Ali", age: 29, country: "Philippines", initials: "A" },
    { name: "Joma", age: 21, country: "Philippines", initials: "J" },
    { name: "Sam", age: 27, country: "England", initials: "S" },
    { name: "Anna", age: 30, country: "Canada", initials: "A" }
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Subtle Wave Graphics - Professional */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 Q300,350 600,400 T1200,400 V800 H0 Z" 
            fill="url(#wave-gradient)" 
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Subtle Surfboard Graphics */}
      <div className="absolute left-8 top-1/2 opacity-8 animate-float">
        <svg width="60" height="15" viewBox="0 0 60 15" className="text-cyan-600">
          <ellipse cx="30" cy="7.5" rx="25" ry="6" fill="currentColor" opacity="0.6"/>
          <rect x="27" y="5" width="6" height="5" fill="currentColor" opacity="0.8" rx="2"/>
        </svg>
      </div>

      <div className="absolute right-12 top-1/3 opacity-6 animate-float" style={{animationDelay: '2s'}}>
        <svg width="80" height="20" viewBox="0 0 80 20" className="text-orange-500 transform rotate-12">
          <ellipse cx="40" cy="10" rx="35" ry="8" fill="currentColor" opacity="0.5"/>
          <path d="M15 10 Q40 6 65 10 Q40 14 15 10" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* Professional Background with Subtle Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, 
              rgba(15, 23, 42, 0.85) 0%, 
              rgba(30, 58, 138, 0.75) 25%,
              rgba(6, 182, 212, 0.6) 75%,
              rgba(14, 165, 233, 0.8) 100%
            ), 
            url('/lovable-uploads/upscalemedia-transformed (1).png')
          `
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
        <div className="max-w-4xl text-white">
          {/* Professional Location Badge */}
          <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-sm py-2 px-4">
            <MapPin className="w-4 h-4 mr-2" />
            General Luna, Siargao, Philippines
          </Badge>

          {/* Compact Current Residents Display */}
          <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-cyan-200 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Currently staying:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {residents.map((resident, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold border border-white/20">
                    {resident.initials}
                  </div>
                  <span className="text-white/90">
                    {resident.name} ({resident.age}, {resident.country})
                  </span>
                  {index < residents.length - 1 && (
                    <span className="text-white/40 mx-1">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">
              Salamat Villa
            </span>
            <span className="block text-orange-300 drop-shadow-lg">
              Siargao
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-8 text-cyan-100 leading-relaxed font-medium">
            Where Modern Comfort Meets Island Adventure
          </h2>

          <p className="text-lg mb-10 text-white/90 max-w-3xl leading-relaxed">
            Perfect for digital nomads and surf enthusiasts. High-speed WiFi, spacious rooms with jungle views, 
            and prime location - 5 minutes to Cloud 9 surf break, away from party noise.
          </p>

          {/* Professional Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Wifi className="w-6 h-6 mb-2 text-cyan-300" />
              <span className="text-white/90 text-sm font-medium">High-Speed WiFi</span>
              <span className="text-white/70 text-xs">100+ Mbps</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <svg className="w-6 h-6 mb-2 text-orange-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l8 4v6c0 5.5-3.8 10.7-9 12C5.8 22.7 2 17.5 2 12V6l10-4z"/>
              </svg>
              <span className="text-white/90 text-sm font-medium">5min to Cloud 9</span>
              <span className="text-white/70 text-xs">World-class surf</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Shield className="w-6 h-6 mb-2 text-green-300" />
              <span className="text-white/90 text-sm font-medium">24/7 Support</span>
              <span className="text-white/70 text-xs">Local assistance</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Users className="w-6 h-6 mb-2 text-purple-300" />
              <span className="text-white/90 text-sm font-medium">Community</span>
              <span className="text-white/70 text-xs">Digital nomads</span>
            </div>
          </div>

          {/* Professional Pricing Highlight */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 mb-10 border border-white/20 max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <Badge className="bg-orange-500/20 text-orange-200 border border-orange-400/30 mb-2">
                  Peak Surf Season
                </Badge>
                <div className="text-2xl font-bold text-white">
                  ₱28,000<span className="text-base font-normal text-white/80">/month</span>
                </div>
                <div className="text-white/70 text-sm">Perfect for digital nomads • All utilities included</div>
              </div>
              <div className="text-right">
                <div className="text-white/80 text-sm">Daily from</div>
                <div className="text-lg font-semibold text-cyan-200">₱1,100</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <Star className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
                <div className="text-white/90 font-medium">4.9★</div>
                <div className="text-white/60 text-xs">Rating</div>
              </div>
              <div>
                <TrendingUp className="w-4 h-4 mx-auto mb-1 text-green-300" />
                <div className="text-white/90 font-medium">70%</div>
                <div className="text-white/60 text-xs">Extend stay</div>
              </div>
              <div>
                <Users className="w-4 h-4 mx-auto mb-1 text-blue-300" />
                <div className="text-white/90 font-medium">75%</div>
                <div className="text-white/60 text-xs">Digital nomads</div>
              </div>
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg text-lg px-8 py-3 border border-cyan-500 transition-all duration-300"
              onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I\'m interested in booking a room at Salamat Villa. Can you help me with availability?', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3 transition-all duration-300"
              onClick={() => scrollToSection('rooms')}
            >
              View Rooms & Pricing
            </Button>
          </div>

          {/* Professional Availability Notice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-cyan-200">Available Now</span>
            </div>
            <span className="text-white/80 text-sm">
              Rooms available August 7th & 15th • Perfect timing for surf season
            </span>
          </div>
        </div>
      </div>

      {/* Professional Floating Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('rooms')}
          className="text-white/60 hover:text-white transition-colors p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(5deg); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;