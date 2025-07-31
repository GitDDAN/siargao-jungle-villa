import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Instagram, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navigationItems = [
    { label: "Home", id: "hero" },
    { label: "Rooms", id: "rooms" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-tropical-green">
              Salamat Villa
            </div>
            <span className="text-muted-foreground text-sm hidden sm:block">Siargao</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-tropical-green transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
              onClick={() => window.open('https://wa.me/639083339477', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="sm"
              className="bg-tropical-green hover:bg-accent text-white"
              onClick={() => scrollToSection('contact')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-xl font-bold text-tropical-green mb-4">
                  Salamat Villa Siargao
                </div>
                
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg text-foreground hover:text-tropical-green transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="border-t pt-6 space-y-3">
                  <Button 
                    className="w-full bg-tropical-green hover:bg-accent text-white"
                    onClick={() => window.open('https://wa.me/639083339477', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Ali
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-tropical-green text-tropical-green"
                    onClick={() => window.open('tel:+639083339477', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://instagram.com/alisaaaa.j', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    @alisaaaa.j
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
