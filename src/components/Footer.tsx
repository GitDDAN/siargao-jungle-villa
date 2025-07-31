import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Instagram, 
  MapPin,
  Heart,
  Wifi,
  Car,
  Shield,
  Coffee
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Rooms & Pricing", id: "rooms" },
    { label: "Photo Gallery", id: "gallery" },
    { label: "Location & Attractions", id: "location" },
    { label: "Guest Reviews", id: "reviews" },
    { label: "Contact & Booking", id: "contact" }
  ];

  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, text: "High-Speed WiFi" },
    { icon: <Car className="w-4 h-4" />, text: "Secure Parking" },
    { icon: <Shield className="w-4 h-4" />, text: "24/7 Security" },
    { icon: <Coffee className="w-4 h-4" />, text: "Equipped Kitchen" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-2xl font-bold text-tropical-green-light">
                Salamat Villa
              </h3>
              <span className="text-primary-foreground/80">Siargao</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your authentic tropical paradise in the heart of General Luna. Experience the perfect blend of Filipino hospitality and modern comfort, surrounded by lush jungle views.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="w-4 h-4 mr-2 text-tropical-green-light" />
                <span className="text-sm">General Luna, Siargao, Philippines</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="w-4 h-4 mr-2 text-tropical-green-light" />
                <span className="text-sm">+63 908 333 9477</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-4 h-4 mr-2 text-tropical-green-light" />
                <span className="text-sm">alisamarijaen@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-tropical-green-light">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-tropical-green-light transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-tropical-green-light">Villa Amenities</h4>
            <ul className="space-y-3">
              {amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-primary-foreground/80 text-sm">
                  <span className="text-tropical-green-light mr-2">
                    {amenity.icon}
                  </span>
                  {amenity.text}
                </li>
              ))}
              <li className="flex items-center text-primary-foreground/80 text-sm">
                <span className="text-tropical-green-light mr-2">🧹</span>
                Weekly Cleaning
              </li>
              <li className="flex items-center text-primary-foreground/80 text-sm">
                <span className="text-tropical-green-light mr-2">🌿</span>
                Jungle Views
              </li>
              <li className="flex items-center text-primary-foreground/80 text-sm">
                <span className="text-tropical-green-light mr-2">🏄‍♂️</span>
                5min to Cloud 9
              </li>
              <li className="flex items-center text-primary-foreground/80 text-sm">
                <span className="text-tropical-green-light mr-2">🚶‍♀️</span>
                Walk to Town Center
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-tropical-green-light">Connect With Ali</h4>
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full border-tropical-green-light text-tropical-green-light hover:bg-tropical-green-light hover:text-primary"
                onClick={() => window.open('https://wa.me/639083339477', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
                onClick={() => window.open('https://instagram.com/alisaaaa.j', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                @alisaaaa.j
              </Button>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-tropical-green/10 rounded-lg border border-tropical-green/20">
              <div className="text-tropical-green-light text-sm font-semibold mb-1">
                ⚡ Lightning Fast Response
              </div>
              <div className="text-primary-foreground/80 text-xs">
                Ali typically responds within 1 hour, often much faster!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Salamat Villa Siargao. Made with{" "}
              <Heart className="w-4 h-4 inline text-tropical-green-light" />{" "}
              for travelers seeking authentic Filipino paradise.
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I need help with booking Salamat Villa.', '_blank')}
                className="text-primary-foreground/60 hover:text-tropical-green-light transition-colors text-sm"
              >
                Need Help?
              </button>
              <span className="text-primary-foreground/40">•</span>
              <button
                onClick={() => window.open('https://goo.gl/maps/xyz123', '_blank')}
                className="text-primary-foreground/60 hover:text-tropical-green-light transition-colors text-sm"
              >
                Get Directions
              </button>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-6 pt-6 border-t border-primary-foreground/10">
            <div className="text-tropical-green-light text-sm font-medium mb-2">
              🌴 Book Your Tropical Escape Today 🌴
            </div>
            <div className="text-primary-foreground/80 text-xs">
              Rooms available from August 7th & 15th • All utilities included • Perfect location in General Luna
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
