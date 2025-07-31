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
            Your Private Tropical Paradise in the Heart of General Luna
          </h2>

          <p className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed">
            Experience authentic Filipino island living with modern comforts. Three beautifully appointed rooms with stunning jungle views, just minutes from Cloud 9 surf break and the vibrant General Luna center.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center text-white/90">
              <Wifi className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>Fast WiFi</span>
            </div>
            <div className="flex items-center text-white/90">
              <Bike className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>Scooter Parking</span>
            </div>
            <div className="flex items-center text-white/90">
              <Shield className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>24/7 Security</span>
            </div>
            <div className="flex items-center text-white/90">
              <Star className="w-5 h-5 mr-2 text-tropical-green-light" />
              <span>5★ Location</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <div className="text-tropical-green-light text-sm font-semibold mb-2">Starting from</div>
            <div className="text-3xl font-bold">₱29,000<span className="text-lg font-normal text-white/80">/month</span></div>
            <div className="text-white/70 text-sm mt-1">All utilities included • Weekly cleaning</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-tropical-green hover:bg-accent text-white shadow-tropical text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/639083339477', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-tropical-green backdrop-blur-sm text-lg px-8 py-4"
              onClick={() => scrollToSection('rooms')}
            >
              View Rooms & Pricing
            </Button>
          </div>

          {/* Availability Notice */}
          <div className="mt-8 text-white/80 text-sm">
            <span className="inline-flex items-center bg-sunrise/90 text-white px-3 py-1 rounded-full mr-2">
              🔥 Hot
            </span>
            Rooms available from August 7th & 15th. Contact Ali for immediate booking.
          </div>
        </div>
      </div>

      {/* Floating Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('rooms')}
          className="text-white/80 hover:text-white transition-colors"
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