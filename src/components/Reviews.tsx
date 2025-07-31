import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah & Mike",
      location: "Australia",
      rating: 5,
      date: "July 2024",
      text: "Perfect location for our Siargao adventure! Walking to General Luna center was so convenient, and the jungle views from our room were absolutely magical. Ali was incredibly helpful with recommendations and the villa feels like a tropical paradise.",
      highlight: "Amazing jungle views and perfect location"
    },
    {
      name: "Carlos",
      location: "Manila, Philippines", 
      rating: 5,
      date: "June 2024",
      text: "As a digital nomad, this place exceeded all expectations. Fast WiFi, comfortable workspace with jungle views, and I could surf Cloud 9 every morning before work. The bamboo architecture is authentic and beautiful. Highly recommended!",
      highlight: "Perfect for remote work with great surf access"
    },
    {
      name: "Emma & Lisa",
      location: "Germany",
      rating: 5,
      date: "May 2024",
      text: "We stayed in the balcony room and loved every moment. The private balcony overlooking the jungle was our favorite spot for morning coffee. Clean facilities, secure parking for our motorbike, and walking distance to amazing restaurants.",
      highlight: "Balcony room with stunning jungle views"
    },
    {
      name: "Jake",
      location: "California, USA",
      rating: 5,
      date: "April 2024",
      text: "Salamat Villa is the perfect base for exploring Siargao. The common areas are beautifully designed with authentic Filipino architecture. Great for meeting other travelers while still having privacy. Ali's local knowledge saved us so much time!",
      highlight: "Perfect base for island exploration"
    },
    {
      name: "Marie & Thomas",
      location: "France",
      rating: 5,
      date: "March 2024",
      text: "The cozy room offered incredible value for money. Double bed was comfortable, jungle views were therapeutic, and the shared kitchen was well-equipped. Felt safe and secure throughout our stay. The tropical garden setting is truly special.",
      highlight: "Excellent value with beautiful tropical setting"
    },
    {
      name: "Alex",
      location: "Canada",
      rating: 5,
      date: "February 2024",
      text: "Best accommodation choice on the island! The blend of modern amenities with traditional architecture is perfect. Weekly cleaning service was great, and having fast WiFi while surrounded by nature was exactly what I needed for remote work.",
      highlight: "Perfect blend of modern comfort and nature"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "5.0★", color: "text-sunrise" },
    { label: "Repeat Guests", value: "85%", color: "text-tropical-green" },
    { label: "Response Time", value: "< 1 Hour", color: "text-tropical-green" },
    { label: "Location Score", value: "10/10", color: "text-sunrise" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${
          i < rating ? 'text-sunrise fill-current' : 'text-muted-foreground/30'
        }`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Guest 
            <span className="text-tropical-green"> Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from travelers who've experienced the magic of Salamat Villa
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-tropical transition-all duration-300">
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
              className="shadow-soft hover:shadow-tropical transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-tropical-green" />
              </div>
              
              <CardContent className="p-6">
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
                <div className="bg-tropical-green/10 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-tropical-green italic">
                    "{review.highlight}"
                  </p>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {review.text}
                </p>

                {/* Reviewer Info */}
                <div className="border-t pt-4">
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
          <Card className="bg-gradient-tropical text-white max-w-2xl mx-auto shadow-tropical">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h3>
              <p className="mb-6 text-white/90">
                Join our community of happy guests and experience the magic of Salamat Villa Siargao
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I read the amazing reviews and would love to book a room at Salamat Villa!', '_blank')}
                  className="bg-white text-tropical-green hover:bg-white/90 transition-colors px-6 py-3 rounded-lg font-semibold"
                >
                  Book Your Stay Now
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com/alisaaaaa.j', '_blank')}
                  className="border border-white text-white hover:bg-white hover:text-tropical-green transition-colors px-6 py-3 rounded-lg font-semibold"
                >
                  Follow Our Journey
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Review Platform Links */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Read more reviews on our social media and booking platforms
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => window.open('https://instagram.com/alisaaaaa.j', '_blank')}
              className="text-tropical-green hover:text-accent transition-colors font-medium"
            >
              Instagram Reviews
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => window.open('https://wa.me/639083339477', '_blank')}
              className="text-tropical-green hover:text-accent transition-colors font-medium"
            >
              WhatsApp Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;