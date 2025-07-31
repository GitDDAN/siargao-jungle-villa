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
  TrendingUp
} from "lucide-react";

const Rooms = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

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
        monthly: "₱29,000"
      },
      available: "August 7th",
      isPopular: false,
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
    { key: "nightly", label: "Nightly", suffix: "/night", minStay: " (min 5 nights)" },
    { key: "weekly", label: "Weekly", suffix: "/week", discount: "Save 20%" },
    { key: "biweekly", label: "2 Weeks", suffix: "/2 weeks", discount: "Save 25%" },
    { key: "threeWeeks", label: "3 Weeks", suffix: "/3 weeks", discount: "Save 30%" },
    { key: "monthly", label: "Monthly", suffix: "/month", discount: "Save 40%" }
  ];

  const sharedAmenities = [
    { icon: Coffee, text: "Fully equipped modern kitchen" },
    { icon: Wifi, text: "High-speed fiber WiFi throughout" },
    { icon: Shield, text: "24/7 CCTV security system" },
    { icon: Car, text: "Secure motorcycle parking" },
    { icon: Zap, text: "Backup power for outages" },
    { icon: Users, text: "Vibrant digital nomad community" },
    { icon: TrendingUp, text: "Strategic between-roads location" },
    { icon: Monitor, text: "CrossFit gym next door" }
  ];

  const getSavingsPercentage = (room, period) => {
    const nightlyRate = parseInt(room.pricing.nightly.replace('₱', '').replace(',', ''));
    
    if (period === "monthly") {
      const monthlyDaily = nightlyRate * 30;
      const monthlyPrice = parseInt(room.pricing.monthly.replace('₱', '').replace(',', ''));
      return Math.round(((monthlyDaily - monthlyPrice) / monthlyDaily) * 100);
    }
    if (period === "weekly") {
      const weeklyDaily = nightlyRate * 7;
      const weeklyPrice = parseInt(room.pricing.weekly.replace('₱', '').replace(',', ''));
      return Math.round(((weeklyDaily - weeklyPrice) / weeklyDaily) * 100);
    }
    if (period === "biweekly") {
      const biweeklyDaily = nightlyRate * 14;
      const biweeklyPrice = parseInt(room.pricing.biweekly.replace('₱', '').replace(',', ''));
      return Math.round(((biweeklyDaily - biweeklyPrice) / biweeklyDaily) * 100);
    }
    if (period === "threeWeeks") {
      const threeWeeksDaily = nightlyRate * 21;
      const threeWeeksPrice = parseInt(room.pricing.threeWeeks.replace('₱', '').replace(',', ''));
      return Math.round(((threeWeeksDaily - threeWeeksPrice) / threeWeeksDaily) * 100);
    }
    return null;
  };

  const getBookingMessage = (room, period) => {
    const currentPeriod = pricingPeriods.find(p => p.key === period);
    return `Hi Ali! I'm a digital nomad interested in the ${room.title} for a ${currentPeriod?.label.toLowerCase()} stay starting ${room.available}. I need reliable WiFi for remote work. Can you confirm availability and send more photos?`;
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header - More Persuasive */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Remote Work Paradise
            <span className="text-tropical-green block">in Siargao Awaits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Join 75% digital nomads who choose Salamat Villa for the perfect blend of productivity and paradise. 
            Every room designed with dedicated workspace, reliable 100+ Mbps WiFi, and that sweet spot location—close to Cloud 9 surf, away from party noise.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-tropical-green/10 border border-tropical-green/20 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-tropical-green mr-2" />
                <span className="font-bold text-tropical-green">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-muted-foreground">97% guest satisfaction</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-bold text-blue-600">70% Extend Stay</span>
              </div>
              <p className="text-sm text-muted-foreground">The "Siargao Effect" is real</p>
            </div>
            <div className="bg-sunrise/10 border border-sunrise/20 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-orange-600 mr-2" />
                <span className="font-bold text-orange-600">Fast Response</span>
              </div>
              <p className="text-sm text-muted-foreground">Write anytime</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-tropical-green/10 to-blue-50 border border-tropical-green/20 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold mb-2">
              🔥 August-September 2025: Peak Surfing Season, Shoulder Season Prices
            </p>
            <p className="text-sm text-muted-foreground">
              Book now for optimal waves without peak crowds. Digital nomads book 2-6 weeks ahead for best rooms.
            </p>
          </div>
        </div>

        {/* Pricing Period Selector - Enhanced */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {pricingPeriods.map((period) => (
            <Button
              key={period.key}
              variant={selectedPeriod === period.key ? "default" : "outline"}
              className={`transition-all duration-200 relative ${
                selectedPeriod === period.key 
                  ? "bg-tropical-green hover:bg-accent text-white" 
                  : "border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
              }`}
              onClick={() => setSelectedPeriod(period.key)}
            >
              {period.label}
              {period.discount && (
                <Badge className="ml-2 bg-sunrise text-white text-xs">
                  {period.discount}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Rooms Grid - Enhanced */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => {
            const currentPeriod = pricingPeriods.find(p => p.key === selectedPeriod);
            const savings = getSavingsPercentage(room, selectedPeriod);
            
            return (
              <Card 
                key={room.id} 
                className={`relative overflow-hidden shadow-warm hover:shadow-tropical transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                  room.isPopular ? 'border-tropical-green border-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {room.isPopular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-tropical-green text-white border-none">
                    ⭐ Most Popular
                  </Badge>
                )}
                
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Available Badge */}
                  <Badge className="absolute bottom-4 left-4 bg-sunrise text-white border-none">
                    <Calendar className="w-3 h-3 mr-1" />
                    Available {room.available}
                  </Badge>

                  {/* Savings Badge */}
                  {savings && (
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white border-none font-bold">
                      Save {savings}%
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{room.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">{room.subtitle}</p>
                    
                    {/* Enhanced Pricing Display */}
                    <div className="text-center p-4 bg-gradient-to-r from-tropical-green/5 to-blue-50 rounded-lg border border-tropical-green/20">
                      <div className="text-3xl font-bold text-tropical-green">
                        {room.pricing[selectedPeriod]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentPeriod?.suffix}
                        {currentPeriod?.minStay}
                      </div>
                      {selectedPeriod === "monthly" && (
                        <div className="text-xs text-green-600 mt-1 font-semibold">
                          vs ₱{(parseInt(room.pricing.nightly.replace('₱', '').replace(',', '')) * 30).toLocaleString()} daily rate
                        </div>
                      )}
                      {(selectedPeriod === "weekly" || selectedPeriod === "biweekly" || selectedPeriod === "threeWeeks") && (
                        <div className="text-xs text-green-600 mt-1 font-semibold">
                          vs ₱{(parseInt(room.pricing.nightly.replace('₱', '').replace(',', '')) * 
                            (selectedPeriod === "weekly" ? 7 : selectedPeriod === "biweekly" ? 14 : 21)
                          ).toLocaleString()} daily rate
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs font-medium">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Best For - Enhanced */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start">
                      <Users className="w-4 h-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-blue-800 mb-1">Perfect For:</div>
                        <div className="text-xs text-blue-700 mb-1">{room.bestFor}</div>
                        <div className="text-xs text-blue-600 italic">{room.perfectFor}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Features Icons - Enhanced */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Bed className="w-4 h-4 mr-2 text-tropical-green" />
                      <span>Queen Bed</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Snowflake className="w-4 h-4 mr-2 text-tropical-green" />
                      <span>AC + Fan</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Monitor className="w-4 h-4 mr-2 text-tropical-green" />
                      <span>Workspace</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Wifi className="w-4 h-4 mr-2 text-tropical-green" />
                      <span>100+ Mbps</span>
                    </div>
                  </div>

                  {/* Full Features List */}
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-3 h-3 mr-2 text-tropical-green flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons - Enhanced */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-tropical-green hover:bg-accent text-white font-semibold"
                      onClick={() => window.open(`https://wa.me/639083339477?text=${encodeURIComponent(getBookingMessage(room, selectedPeriod))}`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Now - {room.pricing[selectedPeriod]}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
                      onClick={() => {
                        const element = document.getElementById('gallery');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      See More Photos
                    </Button>
                  </div>

                  {/* Extended Stay CTA - Enhanced */}
                  {selectedPeriod === "monthly" && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-tropical-green/10 to-blue-50 rounded-lg border border-tropical-green/20">
                      <div className="text-xs font-semibold text-tropical-green mb-1">💡 Nomad Community Special</div>
                      <div className="text-xs text-muted-foreground mb-2">Join nomads staying 2-3 months. Better rates + established connections + local insights</div>
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-tropical-green to-blue-600 hover:from-accent hover:to-blue-700 text-white text-xs py-1 font-semibold"
                        onClick={() => window.open(`https://wa.me/639083339477?text=${encodeURIComponent(`Hi Ali! I'm interested in booking the ${room.title} for 2-3 months starting ${room.available}. I'd love to join your digital nomad community. Can you provide extended stay rates and connect me with current residents?`)}`, '_blank')}
                      >
                        Join 2-3 Month Community
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Shared Amenities - Enhanced */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
            Why 75% of Our Guests Are Digital Nomads
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We've perfected the remote work experience. Reliable infrastructure meets authentic island living.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sharedAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-muted-foreground p-3 rounded-lg hover:bg-tropical-green/5 transition-colors">
                <amenity.icon className="w-4 h-4 mr-3 text-tropical-green flex-shrink-0" />
                <span className="text-sm">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Social Proof */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-tropical-green/10 to-blue-50 rounded-xl p-8 max-w-5xl mx-auto border border-tropical-green/20">
            <h4 className="text-2xl font-bold text-foreground mb-6">Join Siargao's Premier Remote Work Community</h4>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-tropical-green mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Average rating</div>
                <div className="text-xs text-muted-foreground mt-1">"Best WiFi on the island"</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tropical-green mb-1">75%</div>
                <div className="text-sm text-muted-foreground">Digital nomads</div>
                <div className="text-xs text-muted-foreground mt-1">Remote workers choose us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tropical-green mb-1">70%</div>
                <div className="text-sm text-muted-foreground">Extend stay</div>
                <div className="text-xs text-muted-foreground mt-1">The "Siargao effect"</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tropical-green mb-1">Fast</div>
                <div className="text-sm text-muted-foreground">Response time</div>
                <div className="text-xs text-muted-foreground mt-1">Write anytime</div>
              </div>
            </div>
            
            {/* Fun Cancellation Stat */}
            <div className="bg-white/50 border border-tropical-green/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-foreground">Only 1 cancellation ever:</span> Due to Siargao's "authentic" bumpy road experience.
                <br />
                <span className="text-xs italic">Pro tip: It's worth the adventure! Ask our 97% who stayed and loved it.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Urgency & Final CTA */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-sunrise/10 to-tropical-green/10 border-2 border-tropical-green/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">August-September 2025: Don't Miss Out</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <h5 className="font-semibold text-foreground mb-2">⚡ Why Book Now:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Peak surfing season (Siargao Cup in Sept)</li>
                  <li>• Shoulder season pricing (20-30% below peak)</li>
                  <li>• Digital nomads book 2-6 weeks ahead</li>
                  <li>• Only 3 rooms available</li>
                </ul>
              </div>
              <div className="text-left">
                <h5 className="font-semibold text-foreground mb-2">🏄‍♂️ Perfect Timing:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 29°C sea temperature</li>
                  <li>• 6 hours daily sunshine</li>
                  <li>• Less crowded than peak season</li>
                  <li>• Cheapest flights in September</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-tropical-green to-blue-600 hover:from-accent hover:to-blue-700 text-white font-bold px-8 py-3"
                onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I want to secure my spot at Salamat Villa for August-September 2025. Can you check availability for my preferred dates and send the booking process?', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Secure Your Spot Now
              </Button>
              <p className="text-xs text-muted-foreground">
                Free cancellation • No booking fees • Pay on arrival • Fast response, write anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
