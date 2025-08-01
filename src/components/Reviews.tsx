import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Joma",
      location: "Manila, Philippines",
      rating: 5,
      date: "January 2025",
      text: "The location is absolutely perfect! You're close enough to everything in General Luna but far enough away from the noise. I could walk to restaurants, bars, and the beach easily, but still enjoy peaceful mornings. The villa sits in the sweet spot between the main roads - genius positioning!",
      highlight: "Perfect location - close to everything, away from noise"
    },
    {
      name: "Sam Frame",
      location: "England", 
      rating: 5,
      date: "December 2024",
      text: "What I loved most was the peace and quiet. After busy days exploring the island and surfing, coming back to this tranquil oasis was exactly what I needed. The jungle sounds at night were so relaxing, and I never felt disturbed by party noise from town.",
      highlight: "Peaceful oasis away from the crowds"
    },
    {
      name: "Anna GL",
      location: "Canada",
      rating: 5,
      date: "November 2024",
      text: "As a surfer, the easy access to all the surf spots was incredible! Cloud 9 is just a short ride away, and I could easily get to other breaks around the island. The villa's location makes it the perfect base for any surf adventure on Siargao.",
      highlight: "Perfect surf base - easy access to all breaks"
    },
    {
      name: "Thomas",
      location: "England",
      rating: 5,
      date: "October 2024",
      text: "Being right next door to the CrossFit gym was amazing! I could maintain my fitness routine while on vacation, and after intense workouts, the villa was the perfect place to recover. The combination of fitness access and tropical relaxation was unbeatable.",
      highlight: "Love being next to CrossFit - perfect for active travelers"
    },
    {
      name: "Mimi Siargao",
      location: "Australia",
      rating: 5,
      date: "September 2024",
      text: "The value for money blew me away! Getting those incredible jungle views AND air conditioning at this price point felt like winning the lottery. The room stayed perfectly cool during hot afternoons, and waking up to lush greenery every morning was magical.",
      highlight: "Amazing value - jungle views plus AC comfort"
    },
    {
      name: "Guy Gobourn",
      location: "Australia",
      rating: 5,
      date: "August 2024",
      text: "The size of this place is phenomenal! Coming from cramped city living, having so much space to spread out was liberating. The villa feels spacious throughout - from the rooms to the common areas. Perfect for longer stays where you really want to feel at home.",
      highlight: "Love the spacious villa - feels like home"
    },
    {
      name: "Anna",
      location: "Poland",
      rating: 5,
      date: "July 2024",
      text: "The big open kitchen was my favorite feature! As someone who loves to cook, having that much space and proper equipment made my stay so much better. I could prepare healthy meals with fresh local ingredients, and the kitchen design made cooking feel like part of the vacation experience.",
      highlight: "Amazing open kitchen perfect for cooking enthusiasts"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "5.0★", color: "text-coral-orange" },
    { label: "Digital Nomad Guests", value: "75%", color: "text-tropical-green" },
    { label: "Extended Stays", value: "60%", color: "text-tropical-green" },
    { label: "Location Score", value: "10/10", color: "text-coral-orange" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${
          i < rating ? 'text-coral-orange fill-current' : 'text-muted-foreground/30'
        }`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 section-clean">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary mb-6">
            Real Guest 
            <span className="text-ocean-blue"> Stories</span>
          </h2>
          <p className="text-large text-gray-700 max-w-3xl mx-auto">
            From digital nomads to surf enthusiasts - discover why guests choose Salamat Villa as their Siargao home
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="card-professional text-center transition-all duration-300">
              <CardContent className="py-8">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="card-professional transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-ocean-blue" />
              </div>
              
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rating and Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {review.date}
                  </Badge>
                </div>

                {/* Highlight */}
                <div className="bg-ocean-blue/10 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-ocean-blue italic">
                    "{review.highlight}"
                  </p>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {review.text}
                </p>

                {/* Reviewer Info */}
                <div className="border-t pt-4 mt-auto">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <span>{review.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-ocean text-white max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Siargao Adventure?</h3>
              <p className="mb-6 text-white/90">
                Join our community of surfers, digital nomads, and island explorers at Salamat Villa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I saw the amazing guest reviews and would love to book my stay at Salamat Villa!', '_blank')}
                  className="bg-white text-ocean-blue hover:bg-white/90 transition-colors px-6 py-3 rounded-lg font-semibold"
                >
                  Book Your Stay Now
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com/alisaaaa.j', '_blank')}
                  className="border border-white text-white hover:bg-white hover:text-ocean-blue transition-colors px-6 py-3 rounded-lg font-semibold"
                >
                  See More Stories
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Review Platform Links */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Connect with our community and see more authentic experiences
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => window.open('https://instagram.com/alisaaaa.j', '_blank')}
              className="text-ocean-blue hover:text-ocean-blue-dark transition-colors font-medium"
            >
              @alisaaaa.j
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => window.open('https://wa.me/639083339477', '_blank')}
              className="text-ocean-blue hover:text-ocean-blue-dark transition-colors font-medium"
            >
              WhatsApp Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
