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
    { name: "Daniel", age: 40, country: "Denmark", initials: "DD", color: "from-blue-500 to-cyan-400" },
    { name: "Ali", age: 29, country: "Philippines", initials: "AP", color: "from-emerald-500 to-teal-400" },
    { name: "Joma", age: 21, country: "Philippines", initials: "JP", color: "from-orange-500 to-yellow-400" },
    { name: "Sam", age: 27, country: "England", initials: "SE", color: "from-purple-500 to-pink-400" },
    { name: "Anna", age: 30, country: "Canada", initials: "AC", color: "from-rose-500 to-orange-400" }
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Wave Graphics - Multiple Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated ocean waves */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 Q300,350 600,400 T1200,400 V800 H0 Z" 
            fill="url(#wave1)" 
            className="animate-pulse"
          />
          <path 
            d="M0,450 Q400,400 800,450 T1200,450 V800 H0 Z" 
            fill="#fed7aa" 
            opacity="0.3"
            style={{
              animation: 'wave 6s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
        </svg>

        {/* Floating surfboards */}
        <div className="absolute left-8 top-1/3 opacity-15 animate-float">
          <svg width="120" height="30" viewBox="0 0 120 30" className="text-orange-400">
            <ellipse cx="60" cy="15" rx="55" ry="12" fill="currentColor" opacity="0.7"/>
            <ellipse cx="60" cy="15" rx="50" ry="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <rect x="55" y="12" width="10" height="6" fill="currentColor" opacity="0.8" rx="3"/>
          </svg>
        </div>

        <div className="absolute right-12 top-2/3 opacity-12 animate-float" style={{animationDelay: '2s'}}>
          <svg width="100" height="25" viewBox="0 0 100 25" className="text-cyan-400 transform rotate-45">
            <ellipse cx="50" cy="12.5" rx="45" ry="10" fill="currentColor" opacity="0.6"/>
            <path d="M20 12.5 Q50 8 80 12.5 Q50 17 20 12.5" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Palm tree silhouettes */}
        <div className="absolute right-16 top-16 opacity-8">
          <svg width="100" height="150" viewBox="0 0 100 150" className="text-emerald-600">
            <path d="M45 130 Q48 100 50 70 Q52 40 50 20" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.4"/>
            <path d="M50 25 Q25 15 15 8 M50 25 Q30 12 20 18 M50 25 Q70 12 80 18 M50 25 Q75 15 85 8" 
                  stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Enhanced Background with Tropical Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, 
              rgba(14, 165, 233, 0.8) 0%, 
              rgba(2, 132, 199, 0.7) 25%,
              rgba(254, 215, 170, 0.6) 50%,
              rgba(253, 186, 116, 0.7) 75%,
              rgba(14, 165, 233, 0.8) 100%
            ), 
            url('/lovable-uploads/upscalemedia-transformed (1).png')
          `
        }}
      />

      {/* Tropical floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-cyan-400 to-blue-500' :
              i % 3 === 1 ? 'from-orange-400 to-pink-500' :
              'from-emerald-400 to-teal-500'
            } animate-float opacity-30`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i * 0.5)}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
        <div className="max-w-4xl text-white animate-fade-in">
          {/* Enhanced Location Badge */}
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none hover:from-cyan-600 hover:to-blue-700 text-sm py-3 px-6 shadow-lg">
            <MapPin className="w-4 h-4 mr-2" />
            General Luna, Siargao, Philippines 🏄‍♂️
          </Badge>

          {/* Enhanced Current Residents Display */}
          <div className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4 text-orange-200 text-sm font-semibold">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Currently staying:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {residents.map((resident, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-full p-2 pr-4 border border-white/10">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${resident.color} flex items-center justify-center text-white text-sm font-bold border-2 border-white/30 shadow-lg`}>
                      {resident.initials}
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <span className="text-white/90 font-medium">
                    {resident.name} ({resident.age}, {resident.country})
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-sm mt-4 text-center">
              🌴 Join our amazing international community of surfers and digital nomads! 🌊
            </p>
          </div>

          {/* Enhanced Main Headlines */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Salamat Villa
            </span>
            <span className="block bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
              Siargao
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mb-8 text-cyan-100 leading-relaxed font-semibold">
            🏄‍♂️ Where Modern Comfort Meets Island Adventure 🌴
          </h2>

          <p className="text-xl mb-10 text-white/90 max-w-3xl leading-relaxed">
            Perfect for digital nomads and surf enthusiasts. High-speed WiFi, spacious rooms with jungle views, 
            and prime location - 5 minutes to Cloud 9 surf break, away from party noise.
          </p>

          {/* Enhanced Feature Icons with Surf Elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Wifi className="w-8 h-8 mb-2 text-cyan-400" />
              <span className="text-white/90 font-medium">High-Speed WiFi</span>
              <span className="text-white/70 text-xs">100+ Mbps</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <svg className="w-8 h-8 mb-2 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 3c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z"/>
              </svg>
              <span className="text-white/90 font-medium">5min to Cloud 9</span>
              <span className="text-white/70 text-xs">World-class surf</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Shield className="w-8 h-8 mb-2 text-emerald-400" />
              <span className="text-white/90 font-medium">24/7 Support</span>
              <span className="text-white/70 text-xs">Local assistance</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <svg className="w-8 h-8 mb-2 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l8 4v6c0 5.5-3.8 10.7-9 12C5.8 22.7 2 17.5 2 12V6l10-4zm0 2.2L4 8v4c0 4.5 3.2 8.9 8 10 4.8-1.1 8-5.5 8-10V8l-8-3.8z"/>
                <path d="M7 10.5l2.5 2.5L15 7.5"/>
              </svg>
              <span className="text-white/90 font-medium">Surf Lessons</span>
              <span className="text-white/70 text-xs">Next door</span>
            </div>
          </div>

          {/* Enhanced Pricing Highlight */}
          <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none font-bold">
                  🔥 PEAK SURF SEASON
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none">
                  40% OFF Monthly
                </Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                    ₱28,000
                  </span>
                  <span className="text-lg font-normal text-white/80">/month</span>
                </div>
                <div className="text-white/70 text-sm mb-2">Perfect for digital nomads • Extended stay discounts</div>
                <div className="text-white/60 text-xs">Daily rates from ₱1,100/night</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-white/80 text-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>August-September: Peak waves, shoulder prices</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  <span>70% of guests extend their stay</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  <span>75% digital nomads choose us</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl text-xl px-10 py-6 border-2 border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I\'m interested in booking a room at Salamat Villa. Can you help me with availability?', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Book via WhatsApp 🚀
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/15 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-10 py-6 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('rooms')}
            >
              View Rooms & Pricing 🏄‍♂️
            </Button>
          </div>

          {/* Enhanced Availability Notice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="font-semibold text-cyan-200">Available Now!</span>
            </div>
            <span className="text-white/80">
              Rooms available August 7th & 15th. Perfect timing for surf season and fewer crowds! 🌊🏄‍♂️
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('rooms')}
          className="text-white/80 hover:text-white transition-colors p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: translateY(0px) scaleX(1); 
          }
          50% { 
            transform: translateY(-20px) scaleX(1.1); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-8px) rotate(-2deg); 
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;