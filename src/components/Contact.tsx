import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Calendar,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomPreference: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi Ali! I'm interested in booking Salamat Villa Siargao.

Guest Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

Booking Details:
• Check-in: ${formData.checkIn}
• Check-out: ${formData.checkOut}
• Number of guests: ${formData.guests}
• Room preference: ${formData.roomPreference}

Message: ${formData.message}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/639083339477?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Booking inquiry sent!",
      description: "Your WhatsApp message has been opened. Ali will respond within an hour.",
    });
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+63 908 333 9477",
      description: "Fastest response - usually within 1 hour",
      action: () => window.open('https://wa.me/639083339477', '_blank'),
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Call",
      value: "+63 908 333 9477",
      description: "Direct line to Ali",
      action: () => window.open('tel:+639083339477', '_blank'),
      primary: false
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alisamarijaen@gmail.com",
      description: "For detailed inquiries",
      action: () => window.open('mailto:alisamarijaen@gmail.com', '_blank'),
      primary: false
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@alisaaaa.j",
      description: "Follow for updates & photos",
      action: () => window.open('https://instagram.com/alisaaaa.j', '_blank'),
      primary: false
    }
  ];

  const quickFacts = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Rooms available August 7th & 15th"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Response time: Under 1 hour"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "General Luna, Siargao"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Instant booking confirmation"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your 
            <span className="text-tropical-green"> Paradise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience authentic tropical living? Ali is here to help you plan the perfect Siargao stay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-tropical">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Send Booking Inquiry
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below and we'll send your inquiry via WhatsApp
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">WhatsApp Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+63 9XX XXX XXXX"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="roomPreference">Room Preference</Label>
                      <select
                        id="roomPreference"
                        name="roomPreference"
                        value={formData.roomPreference}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Any Available Room</option>
                        <option value="Ensuite Master">Ensuite Master (₱33,000/month)</option>
                        <option value="Balcony Room">Balcony Room (₱31,000/month)</option>
                        <option value="Cozy Room">Cozy Room (₱29,000/month)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your trip, special requests, or questions..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-tropical-green hover:bg-accent text-white text-lg py-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch with Ali
              </h3>
              
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-tropical transform hover:-translate-y-1 ${
                    method.primary ? 'border-tropical-green border-2 bg-tropical-green/5' : ''
                  }`}
                  onClick={method.action}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        method.primary ? 'bg-tropical-green text-white' : 'bg-tropical-green/10 text-tropical-green'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          {method.primary && (
                            <Badge className="bg-sunrise text-white border-none text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="text-tropical-green font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Facts */}
            <Card className="bg-card shadow-warm">
              <CardHeader>
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-tropical-green">
                        {fact.icon}
                      </div>
                      <span className="text-muted-foreground">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-sunrise/10 border border-sunrise/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-sunrise" />
                  Need Immediate Assistance?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Ali is available 24/7 for urgent guest needs and emergency situations.
                </p>
                <Button 
                  variant="outline"
                  className="border-sunrise text-sunrise hover:bg-sunrise hover:text-white"
                  onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I need immediate assistance.', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Emergency WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-warm">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Your Tropical Paradise Awaits
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Don't miss out on the authentic Siargao experience. Rooms are filling up fast!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-tropical-green hover:bg-accent text-white shadow-tropical"
                onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I want to book a room at Salamat Villa ASAP!', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Now - WhatsApp Ali
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
                onClick={() => window.open('tel:+639083339477', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Ali Directly
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
