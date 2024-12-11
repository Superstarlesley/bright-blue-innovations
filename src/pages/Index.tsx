import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;