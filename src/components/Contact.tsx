import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Wifi,
  Bath,
  Bed
} from "lucide-react";

const Contact = () => {
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

  const [availabilityAlert, setAvailabilityAlert] = useState("");
  const [selectedRooms, setSelectedRooms] = useState([]);

  // Room availability data based on your market analysis
  const roomAvailability = {
    "Ensuite Master": {
      price: 33000,
      priceNightly: 1200,
      availableFrom: "2025-08-07",
      features: ["Private bathroom", "AC", "Workspace", "Balcony access"],
      maxGuests: 2,
      status: "available"
    },
    "Balcony Room": {
      price: 31000,
      priceNightly: 1100,
      availableFrom: "2025-08-15",
      features: ["Private balcony", "AC", "Workspace", "Garden view"],
      maxGuests: 2,
      status: "available"
    },
    "Cozy Room": {
      price: 28000,
      priceNightly: 1000,
      availableFrom: "2025-08-15",
      features: ["AC", "Workspace", "Shared bathroom", "Cozy atmosphere"],
      maxGuests: 1,
      status: "available"
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Check availability when dates change
    if (name === 'checkIn' || name === 'checkOut') {
      checkRoomAvailability({ ...formData, [name]: value });
    }
  };

  const checkRoomAvailability = (data) => {
    if (!data.checkIn) return;

    const checkInDate = new Date(data.checkIn);
    const availableRooms = [];
    let alertMessage = "";

    Object.entries(roomAvailability).forEach(([roomName, room]) => {
      const availableFromDate = new Date(room.availableFrom);
      if (checkInDate >= availableFromDate) {
        availableRooms.push(roomName);
      }
    });

    if (availableRooms.length === 0) {
      alertMessage = "No rooms available for your selected check-in date. First available date is August 7th, 2025.";
    } else if (availableRooms.length === 1) {
      alertMessage = `Only ${availableRooms[0]} is available for your selected dates.`;
    } else {
      alertMessage = `${availableRooms.length} rooms available for your selected dates: ${availableRooms.join(', ')}.`;
    }

    setAvailabilityAlert(alertMessage);
    setSelectedRooms(availableRooms);
  };

  const getRoomStatusBadge = (roomName) => {
    if (!formData.checkIn) return null;
    
    const checkInDate = new Date(formData.checkIn);
    const availableFromDate = new Date(roomAvailability[roomName].availableFrom);
    
    if (checkInDate >= availableFromDate) {
      return <Badge className="bg-green-500 text-white">Available</Badge>;
    } else {
      return <Badge variant="secondary">Available from {roomAvailability[roomName].availableFrom}</Badge>;
    }
  };

  const calculateStayDuration = () => {
    if (!formData.checkIn || !formData.checkOut) return null;
    
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : null;
  };

  const getEstimatedCost = () => {
    const duration = calculateStayDuration();
    if (!duration || !formData.roomPreference) return null;
    
    const room = roomAvailability[formData.roomPreference];
    if (!room) return null;
    
    if (duration >= 28) {
      // Monthly rate
      const months = Math.ceil(duration / 30);
      return {
        type: "monthly",
        amount: room.price * months,
        breakdown: `₱${room.price.toLocaleString()}/month × ${months} month${months > 1 ? 's' : ''}`
      };
    } else {
      // Nightly rate with weekly discount
      const weeklyDiscount = duration >= 7 ? 0.8 : 1; // 20% discount for weekly stays
      const totalCost = room.priceNightly * duration * weeklyDiscount;
      return {
        type: "nightly",
        amount: totalCost,
        breakdown: `₱${room.priceNightly.toLocaleString()}/night × ${duration} nights${duration >= 7 ? ' (20% weekly discount applied)' : ''}`
      };
    }
  };

  const handleSubmit = () => {
    
    const duration = calculateStayDuration();
    const cost = getEstimatedCost();
    
    let message = `Hi Ali! I'm interested in booking Salamat Villa Siargao.

Guest Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

Booking Details:
• Check-in: ${formData.checkIn}
• Check-out: ${formData.checkOut}
• Duration: ${duration ? `${duration} day${duration > 1 ? 's' : ''}` : 'Not specified'}
• Number of guests: ${formData.guests}
• Room preference: ${formData.roomPreference || 'Any available room'}`;

    if (cost) {
      message += `
• Estimated cost: ₱${cost.amount.toLocaleString()} (${cost.breakdown})`;
    }

    if (formData.message) {
      message += `

Additional Message: ${formData.message}`;
    }

    message += `

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/639083339477?text=${encodedMessage}`, '_blank');
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

  const today = new Date().toISOString().split('T')[0];
  const estimatedCost = getEstimatedCost();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your 
            <span className="text-green-600"> Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience authentic tropical living? Check availability and book your perfect Siargao stay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Check Availability & Book
                </CardTitle>
                <p className="text-gray-600 text-center">
                  Real-time availability checker with instant WhatsApp booking
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
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
                      <Label htmlFor="checkIn">Check-in Date *</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        min={today}
                        required
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
                        min={formData.checkIn || today}
                      />
                    </div>
                  </div>

                  {/* Availability Alert */}
                  {availabilityAlert && (
                    <Alert className={selectedRooms.length > 0 ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {availabilityAlert}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="roomPreference">Room Selection</Label>
                      <select
                        id="roomPreference"
                        name="roomPreference"
                        value={formData.roomPreference}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      >
                        <option value="">Select a room</option>
                        {Object.entries(roomAvailability).map(([roomName, room]) => (
                          <option 
                            key={roomName} 
                            value={roomName}
                            disabled={formData.checkIn && selectedRooms.length > 0 && !selectedRooms.includes(roomName)}
                          >
                            {roomName} - ₱{room.price.toLocaleString()}/month
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Details */}
                  {formData.roomPreference && (
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-lg">{formData.roomPreference}</h4>
                          {getRoomStatusBadge(formData.roomPreference)}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Monthly Rate</p>
                            <p className="text-2xl font-bold text-green-600">
                              ₱{roomAvailability[formData.roomPreference].price.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Nightly Rate</p>
                            <p className="text-lg font-semibold">
                              ₱{roomAvailability[formData.roomPreference].priceNightly.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {roomAvailability[formData.roomPreference].features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          Available from: {roomAvailability[formData.roomPreference].availableFrom}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Cost Estimate */}
                  {estimatedCost && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Estimated Cost</h4>
                        <p className="text-2xl font-bold text-green-600">
                          ₱{estimatedCost.amount.toLocaleString()}
                        </p>
                        <p className="text-sm text-green-700">{estimatedCost.breakdown}</p>
                        {calculateStayDuration() >= 28 && (
                          <p className="text-xs text-green-600 mt-1">
                            Monthly rates include all utilities and high-speed internet
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}

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
                    onClick={handleSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    disabled={!formData.name || !formData.email || !formData.checkIn}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Booking Inquiry via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Room Overview & Contact Info */}
          <div className="space-y-8">
            {/* Room Availability Overview */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Room Availability</CardTitle>
                <p className="text-gray-600">Current availability for August-September 2025</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(roomAvailability).map(([roomName, room]) => (
                    <div key={roomName} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{roomName}</h4>
                        <Badge className="bg-green-100 text-green-800">
                          Available {room.availableFrom}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-600">Monthly</p>
                          <p className="font-bold text-green-600">₱{room.price.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Nightly</p>
                          <p className="font-semibold">₱{room.priceNightly.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Max {room.maxGuests} guest{room.maxGuests > 1 ? 's' : ''}
                        </span>
                        <span className="flex items-center gap-1">
                          <Wifi className="w-4 h-4" />
                          High-speed WiFi
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {room.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch with Ali
              </h3>
              
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    method.primary ? 'border-green-500 border-2 bg-green-50' : ''
                  }`}
                  onClick={method.action}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        method.primary ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">{method.title}</h4>
                          {method.primary && (
                            <Badge className="bg-blue-500 text-white border-none text-xs">
                              Best Choice
                            </Badge>
                          )}
                        </div>
                        <p className="text-green-600 font-medium">{method.value}</p>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Facts */}
            <Card className="bg-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-green-600">
                        {fact.icon}
                      </div>
                      <span className="text-gray-700">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Tropical Paradise Awaits
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Don't miss out on the authentic Siargao experience. Book now for August-September 2025!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I want to book a room at Salamat Villa ASAP!', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Now - WhatsApp Ali
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
