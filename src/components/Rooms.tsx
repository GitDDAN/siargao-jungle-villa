import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Bath, 
  TreePine, 
  Wifi, 
  Calendar,
  MessageCircle,
  Check,
  Eye,
  Monitor,
  Users,
  Snowflake,
  Coffee,
  Car,
  Shield,
  Zap,
  Star,
  TrendingUp,
  Share2,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Rooms = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [shareModal, setShareModal] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "Ensuite Master",
      subtitle: "Your Private Productivity Paradise",
      pricing: {
        nightly: "₱1,400",
        weekly: "₱9,200",
        biweekly: "₱18,000",
        threeWeeks: "₱27,000",
        monthly: "₱33,000"
      },
      available: "August 15th",
      isPopular: false,
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      image: "/lovable-uploads/b8e6c084-6c02-4662-9ef5-5d16d65c6f48.png",
      features: [
        "Queen-size double bed with premium linens",
        "Private ensuite bathroom with hot shower",
        "Air conditioning + ceiling fan for comfort",
        "Dedicated workspace overlooking jungle",
        "High-speed fiber WiFi (100+ Mbps)",
        "24/7 local support via WhatsApp",
        "Weekly professional cleaning included",
        "All utilities & electricity included"
      ],
      highlights: ["Private Bathroom", "Premium Workspace", "Queen Bed"],
      bestFor: "Digital nomads who value privacy and need focused work environment",
      perfectFor: "Solo professionals, content creators, or couples wanting luxury"
    },
    {
      id: 2,
      title: "Balcony Room",
      subtitle: "Where Productivity Meets Paradise Views",
      pricing: {
        nightly: "₱1,200",
        weekly: "₱8,200",
        biweekly: "₱16,000",
        threeWeeks: "₱24,000",
        monthly: "₱31,000"
      },
      available: "August 15th",
      isPopular: true,
      gradient: "from-orange-400 via-pink-400 to-rose-400",
      image: "/lovable-uploads/0a08202d-34ec-42da-8864-a73f5d77424b.png",
      features: [
        "Queen-size double bed with jungle views",
        "Private balcony perfect for morning coffee",
        "Air conditioning + natural ventilation",
        "Workspace with panoramic nature views",
        "High-speed fiber WiFi (100+ Mbps)",
        "Shared bathroom (2 guests maximum)",  
        "Weekly professional cleaning included",
        "All utilities & electricity included"
      ],
      highlights: ["Private Balcony", "Most Popular", "Jungle Views"],
      bestFor: "Couples working remotely who love outdoor morning routines",
      perfectFor: "Digital nomad couples, nature photographers, wellness enthusiasts"
    },
    {
      id: 3,
      title: "Cozy Room",
      subtitle: "Smart Value for Extended Island Living",
      pricing: {
        nightly: "₱1,100",
        weekly: "₱7,500",
        biweekly: "₱15,000",
        threeWeeks: "₱22,500",
        monthly: "₱28,000"
      },
      available: "August 7th",
      isPopular: false,
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      image: "/lovable-uploads/647e22c4-090f-4271-b0a7-216bee495782.png",
      features: [
        "Comfortable double bed with quality linens",
        "Air conditioning for tropical comfort",
        "Productive workspace with garden views",
        "High-speed fiber WiFi (100+ Mbps)",
        "Shared bathroom with hot shower",
        "Weekly professional cleaning included",
        "All utilities & electricity included",
        "Perfect for budget-conscious nomads"
      ],
      highlights: ["Best Value", "Early Availability", "Garden Views"],
      bestFor: "Solo digital nomads maximizing value for extended stays",
      perfectFor: "Long-term travelers, writers, developers on budget"
    }
  ];

  const pricingPeriods = [
    { key: "nightly", label: "Nightly", suffix: "/night", minStay: " (min 5 nights)", color: "from-blue-500 to-cyan-500" },
    { key: "weekly", label: "Weekly", suffix: "/week", discount: "Save 20%", color: "from-green-500 to-emerald-500" },
    { key: "biweekly", label: "2 Weeks", suffix: "/2 weeks", discount: "Save 25%", color: "from-orange-500 to-yellow-500" },
    { key: "threeWeeks", label: "3 Weeks", suffix: "/3 weeks", discount: "Save 30%", color: "from-purple-500 to-pink-500" },
    { key: "monthly", label: "Monthly", suffix: "/month", discount: "Save 40%", color: "from-red-500 to-orange-500" }
  ];

  const sharedAmenities = [
    { icon: Coffee, text: "Fully equipped modern kitchen", color: "text-orange-500" },
    { icon: Wifi, text: "High-speed fiber WiFi throughout", color: "text-blue-500" },
    { icon: Shield, text: "24/7 CCTV security system", color: "text-green-500" },
    { icon: Car, text: "Secure motorcycle parking", color: "text-purple-500" },
    { icon: Zap, text: "Backup power for outages", color: "text-yellow-500" },
    { icon: Users, text: "Vibrant digital nomad community", color: "text-pink-500" },
    { icon: TrendingUp, text: "Strategic between-roads location", color: "text-cyan-500" },
    { icon: Monitor, text: "CrossFit gym next door", color: "text-emerald-500" }
  ];

  const getSavingsPercentage = (room, period) => {
    const nightlyRate = parseInt(room.pricing.nightly.replace('₱', '').replace(',', ''));
    
    const periods = {
      monthly: 30,
      weekly: 7,
      biweekly: 14,
      threeWeeks: 21
    };
    
    if (periods[period]) {
      const dailyTotal = nightlyRate * periods[period];
      const periodPrice = parseInt(room.pricing[period].replace('₱', '').replace(',', ''));
      return Math.round(((dailyTotal - periodPrice) / dailyTotal) * 100);
    }
    return null;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shareRoom = (room, platform) => {
    const shareText = `Check out this amazing room at Salamat Villa Siargao! 🏄‍♂️ ${room.title} available ${room.available} - ${room.pricing.nightly}/night. Perfect for surfers! 🌴`;
    const shareUrl = window.location.href;
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      instagram: shareText, // Copy to clipboard for Instagram
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
    };
    
    if (platform === 'instagram') {
      navigator.clipboard.writeText(shareText);
      alert('Share text copied to clipboard! Paste it in your Instagram story or post.');
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
    setShareModal(null);
  };

  return (
    <section id="rooms" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Wave Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-orange-50">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 20">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q25 0 50 10 T100 10 V20 H0 Z" fill="url(#wave-gradient)" />
              </pattern>
              <linearGradient id="wave-gradient">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>
      </div>

      {/* Floating Surfboard Graphics */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <svg width="80" height="20" viewBox="0 0 80 20" className="text-orange-400">
          <ellipse cx="40" cy="10" rx="35" ry="8" fill="currentColor" opacity="0.7"/>
          <path d="M15 10 Q40 5 65 10 Q40 15 15 10" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-8 animate-float" style={{animationDelay: '2s'}}>
        <svg width="100" height="25" viewBox="0 0 100 25" className="text-cyan-400 transform rotate-12">
          <ellipse cx="50" cy="12.5" rx="45" ry="10" fill="currentColor" opacity="0.6"/>
          <rect x="45" y="9" width="10" height="7" fill="currentColor" opacity="0.8" rx="2"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Bed className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Your Remote Work Paradise
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              in Siargao Awaits
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Join 75% digital nomads who choose Salamat Villa for the perfect blend of productivity and paradise. 
            Every room designed with dedicated workspace, reliable 100+ Mbps WiFi, and that sweet spot location—close to Cloud 9 surf, away from party noise.
          </p>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-blue-500 mr-3" />
                <span className="text-2xl font-bold text-blue-600">4.9/5</span>
              </div>
              <p className="text-gray-700 font-semibold">Rating</p>
              <p className="text-sm text-gray-600">"Best WiFi on the island"</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-orange-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-orange-500 mr-3" />
                <span className="text-2xl font-bold text-orange-600">70%</span>
              </div>
              <p className="text-gray-700 font-semibold">Extend Stay</p>
              <p className="text-sm text-gray-600">The "Siargao Effect" is real</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-green-500 mr-3" />
                <span className="text-2xl font-bold text-green-600">Fast</span>
              </div>
              <p className="text-gray-700 font-semibold">Response</p>
              <p className="text-sm text-gray-600">Write anytime</p>
            </div>
          </div>

          {/* Seasonal Highlight */}
          <div className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l8 4v6c0 5.5-3.8 10.7-9 12C5.8 22.7 2 17.5 2 12V6l10-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">🔥 August-September 2025: Peak Surfing Season</h3>
                <p className="text-white/90">Book now for optimal waves without peak crowds. Digital nomads book 2-6 weeks ahead for best rooms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Period Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {pricingPeriods.map((period) => (
            <Button
              key={period.key}
              variant={selectedPeriod === period.key ? "default" : "outline"}
              className={`transition-all duration-300 relative overflow-hidden group ${
                selectedPeriod === period.key 
                  ? `bg-gradient-to-r ${period.color} text-white shadow-lg scale-105` 
                  : "border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:scale-105"
              }`}
              onClick={() => setSelectedPeriod(period.key)}
            >
              <span className="relative z-10 font-semibold">{period.label}</span>
              {period.discount && (
                <Badge className="ml-2 bg-white/20 text-white text-xs border-none">
                  {period.discount}
                </Badge>
              )}
              {selectedPeriod !== period.key && (
                <div className={`absolute inset-0 bg-gradient-to-r ${period.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              )}
            </Button>
          ))}
        </div>

        {/* Enhanced Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {rooms.map((room, index) => {
            const currentPeriod = pricingPeriods.find(p => p.key === selectedPeriod);
            const savings = getSavingsPercentage(room, selectedPeriod);
            
            return (
              <Card 
                key={room.id} 
                className={`relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                  room.isPopular ? 'ring-4 ring-orange-300' : ''
                } bg-white border-0`}
                style={{
                  background: `linear-gradient(135deg, white 0%, rgba(255,255,255,0.9) 100%)`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Enhanced Popular Badge */}
                {room.isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none px-4 py-2 text-sm font-bold shadow-lg animate-pulse">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Enhanced Room Image with Overlay */}
                <div className="relative h-72 overflow-hidden group">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${room.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Floating Elements on Image */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-700 border-none backdrop-blur-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      Available {room.available}
                    </Badge>
                  </div>

                  {/* Enhanced Savings Badge */}
                  {savings && (
                    <div className="absolute top-4 left-4 mt-10">
                      <Badge className={`bg-gradient-to-r ${currentPeriod.color} text-white border-none font-bold px-3 py-1 shadow-lg animate-bounce`}>
                        Save {savings}%
                      </Badge>
                    </div>
                  )}

                  {/* Share Button Overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-700 hover:bg-white backdrop-blur-sm border-none shadow-lg"
                      onClick={() => setShareModal(room)}
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>

                  <CardHeader className="pb-4">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 font-medium">{room.subtitle}</p>
                    
                    {/* Enhanced Pricing Display */}
                    <div className={`text-center p-6 bg-gradient-to-r ${room.gradient} rounded-2xl shadow-lg text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                      <div className="relative z-10">
                        <div className="text-4xl font-bold mb-2">
                          {room.pricing[selectedPeriod]}
                        </div>
                        <div className="text-sm text-white/90 font-medium">
                          {currentPeriod?.suffix}
                          {currentPeriod?.minStay}
                        </div>
                        {selectedPeriod === "monthly" && (
                          <div className="text-xs text-white/80 mt-2 font-semibold">
                            vs ₱{(parseInt(room.pricing.nightly.replace('₱', '').replace(',', '')) * 30).toLocaleString()} daily rate
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.highlights.map((highlight, idx) => (
                      <Badge key={highlight} 
                             className={`bg-gradient-to-r ${
                               idx === 0 ? 'from-blue-400 to-cyan-400' :
                               idx === 1 ? 'from-orange-400 to-pink-400' :
                               'from-green-400 to-emerald-400'
                             } text-white border-none text-xs font-medium px-3 py-1`}>
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Enhanced Best For Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-1 text-gray-600 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-gray-700 mb-2">Perfect For:</div>
                        <div className="text-xs text-gray-600 mb-2">{room.bestFor}</div>
                        <div className="text-xs text-blue-600 italic font-medium">{room.perfectFor}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Enhanced Key Features Icons */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                      <Bed className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="font-medium">Queen Bed</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 p-3 bg-cyan-50 rounded-lg">
                      <Snowflake className="w-5 h-5 mr-2 text-cyan-500" />
                      <span className="font-medium">AC + Fan</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 p-3 bg-green-50 rounded-lg">
                      <Monitor className="w-5 h-5 mr-2 text-green-500" />
                      <span className="font-medium">Workspace</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 p-3 bg-orange-50 rounded-lg">
                      <Wifi className="w-5 h-5 mr-2 text-orange-500" />
                      <span className="font-medium">100+ Mbps</span>
                    </div>
                  </div>

                  {/* Condensed Features List */}
                  <div className="space-y-2 mb-8">
                    {room.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                      + {room.features.length - 4} more features
                    </button>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-4">
                    <Button 
                      className={`w-full bg-gradient-to-r ${room.gradient} hover:shadow-lg text-white font-bold text-lg py-4 transition-all duration-300 hover:scale-105`}
                      onClick={() => scrollToSection('contact')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Now - {room.pricing[selectedPeriod]}
                    </Button>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                        onClick={() => scrollToSection('gallery')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        See Photos
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShareModal(room)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Shared Amenities */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why 75% of Our Guests Are Digital Nomads
            </span>
          </h3>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-lg">
            We've perfected the remote work experience. Reliable infrastructure meets authentic island living.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sharedAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors mr-4`}>
                  <amenity.icon className={`w-6 h-6 ${amenity.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl">
            <h4 className="text-3xl font-bold mb-6">August-September 2025: Don't Miss Out! 🏄‍♂️</h4>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h5 className="font-bold text-xl mb-4 text-yellow-200">⚡ Why Book Now:</h5>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-yellow-300" /> Peak surfing season (Siargao Cup in Sept)</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-yellow-300" /> Shoulder season pricing (20-30% below peak)</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-yellow-300" /> Digital nomads book 2-6 weeks ahead</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-yellow-300" /> Only 3 rooms available</li>
                </ul>
              </div>
              <div className="text-left bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h5 className="font-bold text-xl mb-4 text-cyan-200">🏄‍♂️ Perfect Timing:</h5>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-cyan-300" /> 29°C sea temperature</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-cyan-300" /> 6 hours daily sunshine</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-cyan-300" /> Less crowded than peak season</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-cyan-300" /> Cheapest flights in September</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-10 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Secure Your Spot Now 🚀
              </Button>
              <p className="text-white/80 text-sm">
                Free cancellation • No booking fees • Pay on arrival • Fast response, write anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Share Modal */}
      {shareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShareModal(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Share {shareModal.title}</h3>
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <p className="text-sm text-gray-700">Check out this amazing room at Salamat Villa Siargao! 🏄‍♂️ {shareModal.title} available {shareModal.available} - Perfect for surfers! 🌴</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                onClick={() => shareRoom(shareModal, 'facebook')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
              
              <Button
                onClick={() => shareRoom(shareModal, 'twitter')}
                className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
              
              <Button
                onClick={() => shareRoom(shareModal, 'whatsapp')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              
              <Button
                onClick={() => shareRoom(shareModal, 'instagram')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </div>
            
            <Button
              onClick={() => setShareModal(null)}
              variant="outline"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;