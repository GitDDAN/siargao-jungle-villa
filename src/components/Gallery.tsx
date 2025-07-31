import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/6bf9b4eb-9693-4324-b55e-536a8d341f0a.png",
      title: "Tropical Common Area",
      category: "Common Spaces",
      description: "Relax in our beautiful common area with authentic bamboo architecture and lush jungle views"
    },
    {
      src: "/lovable-uploads/b8e6c084-6c02-4662-9ef5-5d16d65c6f48.png",
      title: "Ensuite Master Room",
      category: "Bedrooms",
      description: "Spacious master bedroom with private bathroom and work desk"
    },
    {
      src: "/lovable-uploads/0a08202d-34ec-42da-8864-a73f5d77424b.png",
      title: "Balcony Room",
      category: "Bedrooms",
      description: "Comfortable room with private balcony overlooking the tropical garden"
    },
    {
      src: "/lovable-uploads/647e22c4-090f-4271-b0a7-216bee495782.png",
      title: "Cozy Room with Jungle Views",
      category: "Bedrooms",
      description: "Intimate room with beautiful jungle vistas and natural lighting"
    },
    {
      src: "/lovable-uploads/ec9eb930-e69a-466d-9b13-4c2201461a79.png",
      title: "Fully Equipped Kitchen",
      category: "Amenities",
      description: "Modern kitchen with wooden cabinetry and all necessary appliances"
    },
    {
      src: "/lovable-uploads/48738a79-c51e-45f7-adae-d1f3d13355e5.png",
      title: "Relaxation Hammock Area",
      category: "Common Spaces",
      description: "Unwind in our hammock area surrounded by tropical vegetation"
    },
    {
      src: "/lovable-uploads/e6c9b98d-1566-493a-97ba-9c6c6bbe2c8d.png",
      title: "Modern Bathroom",
      category: "Bathrooms",
      description: "Clean, modern bathroom facilities with hot water"
    },
    {
      src: "/lovable-uploads/b2f1d8e7-69c7-431d-a562-d0a45f9a3dcf.png",
      title: "Jungle Corridor",
      category: "Architecture",
      description: "Traditional Filipino architecture with bamboo details and jungle views"
    },
    {
      src: "/lovable-uploads/20d58880-e725-401f-bc4e-8ef420820f0b.png",
      title: "Traditional Bamboo Entrance",
      category: "Architecture",
      description: "Authentic Filipino bamboo construction with thatched roofing"
    },
    {
      src: "/lovable-uploads/1ded5ba3-f55f-4eca-ae67-d465beaffb21.png",
      title: "Gravel Access Path",
      category: "Exterior",
      description: "Private entrance path through tropical landscape"
    },
    {
      src: "/lovable-uploads/921e3861-a745-4e7a-bf07-ead82a89490b.png",
      title: "Covered Walkway",
      category: "Architecture",
      description: "Traditional Filipino architecture with woven bamboo ceiling and jungle views"
    },
    {
      src: "/lovable-uploads/1ebb565c-a304-49fa-893e-85dc219c6788.png",
      title: "Secure Entrance Gate",
      category: "Exterior",
      description: "Traditional gate with CCTV security system and thatched roofing"
    },
    {
      src: "/lovable-uploads/b5ba0685-11ca-4d09-be1d-5415e33d66fe.png",
      title: "Hammock Paradise",
      category: "Common Spaces",
      description: "Relax in hammocks surrounded by tropical plants and authentic architecture"
    },
    {
      src: "/lovable-uploads/4f716d81-9f51-4756-bc5d-4b63335d8b47.png",
      title: "Garden Views",
      category: "Exterior",
      description: "Lush tropical garden with native plants and palm trees"
    },
    {
      src: "/lovable-uploads/f2b08f2b-ddd7-4fd8-ae9c-5d9a328418f4.png",
      title: "Outdoor Common Area",
      category: "Common Spaces",
      description: "Wooden benches under traditional thatched roof - perfect for socializing"
    },
    {
      src: "/lovable-uploads/5c657536-0c6a-45fe-82c9-c3dd37af1b6b.png",
      title: "Indoor Dining Space",
      category: "Common Spaces",
      description: "Spacious dining area with wooden furniture and modern ceiling fans"
    },
    {
      src: "/lovable-uploads/26a3f37c-c09b-4051-b6b9-2da2c9866038.png",
      title: "Interior Common Area",
      category: "Common Spaces",
      description: "Well-organized common space with storage and bathroom access"
    },
    {
      src: "/lovable-uploads/2bafcf0c-8134-4a42-957c-ed899552c935.png",
      title: "Master Ensuite Bathroom",
      category: "Bathrooms",
      description: "Private bathroom with modern fixtures, concrete design, and excellent lighting"
    },
    {
      src: "/lovable-uploads/cb48cf65-05f7-452c-9969-05e7c527e62d.png",
      title: "Master Room Private Balcony",
      category: "Bedrooms",
      description: "Exclusive balcony with traditional bamboo ceiling and direct jungle views"
    },
    {
      src: "/lovable-uploads/8897ba46-4d01-419c-9f3d-91a11338672e.png",
      title: "Master Room Workspace",
      category: "Bedrooms",
      description: "Dedicated work desk with natural lighting and comfortable seating"
    },
    {
      src: "/lovable-uploads/95a8fd83-4039-4385-8acb-b3a404901043.png",
      title: "Master Room Balcony Access",
      category: "Bedrooms",
      description: "Master bedroom with direct access to private balcony and jungle views"
    },
    {
      src: "/lovable-uploads/821784fc-6b6d-46e9-a51e-26ad2ad93522.png",
      title: "Master Room with Air Conditioning",
      category: "Bedrooms",
      description: "Comfortable master bedroom with AC, wooden furnishings, and balcony access"
    },
    {
      src: "/lovable-uploads/8bbdbcb9-e10f-4a92-9d49-fc6875d5fd6a.png",
      title: "Master Ensuite Hot Shower",
      category: "Bathrooms",
      description: "Private hot water shower with modern water heater in the ensuite bathroom"
    }
  ];

  const categories = ["All", "Bedrooms", "Common Spaces", "Amenities", "Bathrooms", "Architecture", "Exterior"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Villa 
            <span className="text-tropical-green"> Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of Salamat Villa and see why guests fall in love with our authentic tropical paradise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all duration-200 ${
                selectedCategory === category 
                  ? "bg-tropical-green hover:bg-accent text-white" 
                  : "border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-soft hover:shadow-tropical transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-tropical-green/90 text-white border-none">
                  {image.category}
                </Badge>
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-tropical-green" />
                  </div>
                </div>
                
                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder for Additional Images */}
        <div className="mt-12 animate-fade-in">
          <Card className="p-8 text-center border-2 border-dashed border-tropical-green/30 bg-tropical-green/5">
            <div className="max-w-md mx-auto">
              <div className="text-tropical-green mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">More Photos Coming Soon</h3>
              <p className="text-muted-foreground">
                We're constantly updating our gallery with new photos of the villa, surrounding areas, and guest experiences. Follow us on Instagram @alisaaaaa.j for the latest updates!
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="bg-tropical-green hover:bg-accent text-white shadow-tropical"
            onClick={() => window.open('https://wa.me/639083339477?text=Hi Ali! I loved the villa photos. Can I schedule a video call to see more?', '_blank')}
          >
            Request Virtual Tour
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/90">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;