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

  const handleSurfSpotsClick = () => {
    window.open('https://siargaovibes.com/explore/?type=surfing-spots&sort=top-rated', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full nav-professional z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              Salamat Villa
            </div>
            <span className="text-ocean-blue text-sm hidden sm:block font-medium">Siargao</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleSurfSpotsClick}
              className="text-coral-orange hover:text-coral-orange-dark transition-colors duration-200 font-medium flex items-center"
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              Surf Spots
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all duration-300"
              onClick={() => window.open('https://wa.me/639083339477', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="sm"
              className="btn-ocean"
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
            <SheetContent side="right" className="w-[280px] sm:w-[320px] max-w-[90vw]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-xl font-bold text-foreground mb-4">
                  Salamat Villa Siargao
                </div>
                
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg nav-link py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                <button
                  onClick={handleSurfSpotsClick}
                  className="text-left text-lg text-coral-orange hover:text-coral-orange transition-colors py-2 flex items-center"
                  style={{ fontFamily: 'Pacifico, cursive' }}
                >
                  Surf Spots
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>

                <div className="border-t pt-6 space-y-3">
                  <Button 
                    className="w-full btn-ocean"
                    onClick={() => window.open('https://wa.me/639083339477', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Ali
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-ocean-blue text-ocean-blue"
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
