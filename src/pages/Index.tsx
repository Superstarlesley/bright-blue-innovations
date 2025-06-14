
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
