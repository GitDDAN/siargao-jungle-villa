import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Bike, Shield, MessageCircle, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Wave Graphics - Left Side */}
      <div className="absolute left-0 top-1/4 opacity-20 pointer-events-none">
        <svg width="200" height="400" viewBox="0 0 200 400" className="text-tropical-green-light">
          <path
            d="M0 50 Q50 0 100 50 T200 50 V100 Q150 150 100 100 T0 100 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M0 150 Q50 100 100 150 T200 150 V200 Q150 250 100 200 T0 200 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M0 250 Q50 200 100 250 T200 250 V300 Q150 350 100 300 T0 300 Z"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Wave Graphics - Right Side */}
      <div className="absolute right-0 top-1/3 opacity-15 pointer-events-none transform rotate-180">
        <svg width="150" height="300" viewBox="0 0 150 300" className="text-white">
          <path
            d="M150 40 Q100 0 50 40 T-50 40 V80 Q0 120 50 80 T150 80 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M150 120 Q100 80 50 120 T-50 120 V160 Q0 200 50 160 T150 160 Z"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-30 animate-float">
        <div className="w-3 h-3 bg-tropical-green-light rounded-full"></div>
      </div>
      <div className="absolute top-40 left-20 opacity-20 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-40 right-40 opacity-25 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-4 h-4 bg-tropical-green-light rounded-full"></div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 35, 25, 0.4), rgba(30, 35, 25, 0.4)), url('/lovable-uploads/6bf9b4eb-9693-4324-b55e-536a8d341f0a.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
        <div className="max-w-3xl text-white animate-fade-in">
          {/* Location Badge */}
          <Badge className="mb-6 bg-tropical-green/90 text-white border-none hover:bg-tropical-green text-sm py-2 px-4">
            <MapPin className="w-4 h-4 mr-2" />
            General Luna, Siargao, Philippines
          </Badge>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Salamat Villa
            <span className="block text-tropical-green-light">Siargao</span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Where Modern Comfort Meets Island Adventure
          </h2>

          <p className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed">
            Perfect for digital nomads and adventure seekers. High-speed WiFi, spacious rooms with jungle views, and prime location - 5 minutes to Cloud 9, away from party noise.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center text-white/90">
              <Wifi className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>High-Speed WiFi</span>
            </div>
            <div className="flex items-center text-white/90">
              <Bike className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>Secure Parking</span>
            </div>
            <div className="flex items-center text-white/90">
              <Shield className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center text-white/90">
              <Star className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>Prime Location</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <div className="flex justify-between items-start mb-2">
              <div className="text-tropical-green-light text-sm font-semibold">Monthly Stays</div>
              <div className="text-tropical-green-light text-xs">40% OFF</div>
            </div>
            <div className="text-3xl font-bold">₱28,000<span className="text-lg font-normal text-white/80">/month</span></div>
            <div className="text-white/70 text-sm mt-1">Perfect for digital nomads • Extended stay discounts</div>
            <div className="text-white/60 text-xs mt-2">Daily rates from ₱1,100/night</div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mb-8 text-white/80 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span>New & Welcoming</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div>Neighbors with Siargao's Famous Surf Family</div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div>Surf Lessons Available Next Door</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-tropical-green hover:bg-accent text-white shadow-tropical text-lg px-8 py-4 border-2 border-tropical-green transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I\'m interested in booking a room at Salamat Villa. Can you help me with availability?', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-tropical-green text-lg px-8 py-4 transition-all duration-300"
              onClick={() => scrollToSection('rooms')}
            >
              View Rooms & Pricing
            </Button>
          </div>

          {/* Availability Notice */}
          <div className="mt-8 text-white/80 text-sm">
            <span className="inline-flex items-center bg-gradient-to-r from-sunrise to-tropical-green text-white px-3 py-1 rounded-full mr-2 animate-pulse">
              🔥 Available Now
            </span>
            Rooms available August 7th & 15th. Perfect for surf season!
          </div>
        </div>
      </div>

      {/* Floating Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('rooms')}
          className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
