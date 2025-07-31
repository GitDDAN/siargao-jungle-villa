import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Gallery />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
