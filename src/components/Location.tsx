import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Waves, 
  Mountain, 
  Coffee, 
  Camera,
  Navigation,
  Bike,
  Dumbbell
} from "lucide-react";

const Location = () => {
  const attractions = [
    {
      name: "Cloud 9 Surf Break",
      distance: "5 minutes",
      transport: "motorbike",
      type: "Surfing",
      icon: <Waves className="w-5 h-5" />,
      description: "World-famous surf spot with perfect barrels"
    },
    {
      name: "General Luna Beach & Boardwalk",
      distance: "3 minutes",
      transport: "walk",
      type: "Beach",
      icon: <Waves className="w-5 h-5" />,
      description: "Main beach town with restaurants and nightlife"
    },
    {
      name: "CrossFit Siargao",
      distance: "Next door",
      transport: "walk",
      type: "Fitness",
      icon: <Dumbbell className="w-5 h-5" />,
      description: "Perfect for maintaining fitness routine while traveling"
    },
    {
      name: "Jacking Horse Beach",
      distance: "8 minutes",
      transport: "motorbike",
      type: "Beach",
      icon: <Waves className="w-5 h-5" />,
      description: "Pristine white sand beach for relaxation"
    },
    {
      name: "Magpupungko Rock Pools",
      distance: "45 minutes",
      transport: "motorbike",
      type: "Nature",
      icon: <Mountain className="w-5 h-5" />,
      description: "Natural tide pools perfect for swimming"
    },
    {
      name: "Tourism Road Restaurants",
      distance: "2 minutes",
      transport: "walk",
      type: "Dining",
      icon: <Coffee className="w-5 h-5" />,
      description: "Restaurants, cafes, and vibrant nightlife"
    }
  ];

  const nearbySpots = [
    "Cafe Loca - 2 min walk",
    "Bravo Beach Resort - 3 min walk", 
    "Kermit Surf Resort - 5 min walk",
    "CrossFit Siargao - Next door",
    "Harana Surf Resort - 8 min bike",
    "Siargao Books Cafe - 10 min bike",
    "Island hopping boat tours - 5 min walk"
  ];

  return (
    <section id="location" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prime 
            <span className="text-tropical-green"> Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfectly positioned between Tourism Road and Back Road in General Luna - close to everything, away from noise
          </p>
        </div>

        {/* Location Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden shadow-warm h-full">
              <div className="relative h-96 lg:h-full">
                <img 
                  src="/lovable-uploads/f27cb854-871b-4105-b007-0eae90fb8d40.png"
                  alt="Siargao Map showing Salamat Villa location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge className="mb-2 bg-tropical-green text-white border-none">
                    <MapPin className="w-3 h-3 mr-1" />
                    General Luna, Siargao
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">Salamat Villa Location</h3>
                  <p className="text-sm text-white/90">
                    The sweet spot between two roads
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Benefits */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Our Location is Perfect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-tropical-green/10 p-3 rounded-lg">
                  <Navigation className="w-6 h-6 text-tropical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Strategic Between-Roads Position</h4>
                  <p className="text-muted-foreground">
                    Perfectly positioned between Tourism Road and Back Road - close to all action but away from party noise. The sweet spot every traveler seeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tropical-green/10 p-3 rounded-lg">
                  <Waves className="w-6 h-6 text-tropical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Surf & Beach Paradise</h4>
                  <p className="text-muted-foreground">
                    Just 5 minutes to Cloud 9, the world-famous surf break, and multiple pristine beaches within short rides. Perfect surf base.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tropical-green/10 p-3 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-tropical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fitness & Wellness Next Door</h4>
                  <p className="text-muted-foreground">
                    CrossFit Siargao is almost next door - perfect for digital nomads maintaining their fitness routine while working remotely.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tropical-green/10 p-3 rounded-lg">
                  <Coffee className="w-6 h-6 text-tropical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dining & Digital Nomad Community</h4>
                  <p className="text-muted-foreground">
                    Tourism Road's best cafes, coworking spots, and restaurants are just steps away - perfect for networking with other remote workers.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="mt-8 bg-tropical-green hover:bg-accent text-white"
              onClick={() => window.open('https://maps.google.com/maps?q=9.791293,126.159044', '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </div>

        {/* Top Attractions */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Top Siargao Attractions & Distances
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-tropical transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-tropical-green/10 p-2 rounded-lg">
                        {attraction.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{attraction.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {attraction.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center mb-3 text-tropical-green font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    {attraction.distance} by {attraction.transport}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Spots */}
        <div className="animate-fade-in">
          <Card className="bg-card shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Walking Distance Amenities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbySpots.map((spot, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tropical-green rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{spot}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transportation Note */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-sunrise/10 border border-sunrise/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center">
              <Bike className="w-5 h-5 mr-2 text-sunrise" />
              Getting Around Siargao
            </h4>
            <p className="text-muted-foreground">
              Motorbike rentals available nearby (₱200-800/day). Tricycles readily available for convenient transportation to all island destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
