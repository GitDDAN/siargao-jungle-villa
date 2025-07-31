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
  Eye
} from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Ensuite Master",
      price: "₱33,000",
      period: "/month",
      available: "August 15th",
      isPopular: false,
      image: "/lovable-uploads/b8e6c084-6c02-4662-9ef5-5d16d65c6f48.png",
      features: [
        "Double bed with premium mattress",
        "Private ensuite bathroom",
        "Stunning jungle views",
        "Air conditioning",
        "Work desk with jungle vista",
        "All utilities included"
      ],
      highlights: ["Private Bathroom", "Master Room", "Jungle Views"]
    },
    {
      id: 2,
      title: "Balcony Room",
      price: "₱31,000",
      period: "/month",
      available: "August 15th",
      isPopular: true,
      image: "/lovable-uploads/0a08202d-34ec-42da-8864-a73f5d77424b.png",
      features: [
        "Double bed with premium mattress",
        "Private balcony with jungle views",
        "Shared bathroom (2 guests only)",
        "Air conditioning",
        "Work desk overlooking jungle",
        "All utilities included"
      ],
      highlights: ["Private Balcony", "Best Views", "Perfect for Couples"]
    },
    {
      id: 3,
      title: "Cozy Room",
      price: "₱29,000",
      period: "/month",
      available: "August 7th",
      isPopular: false,
      image: "/lovable-uploads/647e22c4-090f-4271-b0a7-216bee495782.png",
      features: [
        "Double bed with premium mattress",
        "Beautiful jungle views",
        "Shared bathroom",
        "Air conditioning",
        "Work desk with nature views",
        "All utilities included"
      ],
      highlights: ["Great Value", "Early Availability", "Jungle Views"]
    }
  ];

  const sharedAmenities = [
    "Fully equipped kitchen",
    "Fast WiFi throughout",
    "Weekly cleaning service",
    "Secure motorcycle parking",
    "CCTV security system",
    "Spacious common areas",
    "Tropical garden setting",
    "Perfect for co-working"
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-tropical-green block">Perfect Room</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every room features a comfortable double bed, jungle views, and everything you need for an authentic Siargao experience. All rates include utilities and weekly cleaning.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card 
              key={room.id} 
              className={`relative overflow-hidden shadow-warm hover:shadow-tropical transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                room.isPopular ? 'border-tropical-green border-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {room.isPopular && (
                <Badge className="absolute top-4 right-4 z-10 bg-tropical-green text-white border-none">
                  Most Popular
                </Badge>
              )}
              
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Available Badge */}
                <Badge className="absolute bottom-4 left-4 bg-sunrise text-white border-none">
                  <Calendar className="w-3 h-3 mr-1" />
                  Available {room.available}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{room.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-tropical-green">{room.price}</div>
                    <div className="text-sm text-muted-foreground">{room.period}</div>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {room.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Bed className="w-4 h-4 mr-2 text-tropical-green" />
                    <span>Double bed with premium mattress</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Bath className="w-4 h-4 mr-2 text-tropical-green" />
                    <span>{room.id === 1 ? 'Private ensuite' : 'Shared bathroom'}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <TreePine className="w-4 h-4 mr-2 text-tropical-green" />
                    <span>Stunning jungle views</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Wifi className="w-4 h-4 mr-2 text-tropical-green" />
                    <span>High-speed WiFi</span>
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

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-tropical-green hover:bg-accent text-white"
                    onClick={() => window.open(`https://wa.me/639083339477?text=Hi Ali! I'm interested in the ${room.title} available from ${room.available}. Can you provide more details?`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book This Room
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
                    View Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shared Amenities */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Shared Villa Amenities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sharedAmenities.map((amenity) => (
              <div key={amenity} className="flex items-center text-muted-foreground">
                <Check className="w-4 h-4 mr-3 text-tropical-green flex-shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-sunrise/10 border border-sunrise/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-foreground mb-2">Flexible Booking Options</h4>
            <p className="text-muted-foreground">
              Monthly rates shown. Daily and weekly stays available at premium pricing. 
              Contact Ali for custom arrangements and group bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;