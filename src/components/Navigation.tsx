
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
            <span className="hidden sm:inline">Motswana Intelligence</span>
            <span className="sm:hidden">MI</span>
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm lg:text-base">
              About
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm lg:text-base">
              Services
            </a>
            <a 
              href="https://dikopano.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors text-sm lg:text-base"
            >
              Dikopano
            </a>
            <a href="/careers" className="text-white/70 hover:text-white transition-colors text-sm lg:text-base">
              Join the Team
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm lg:text-base">
              Contact
            </a>
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 lg:px-6 rounded-lg transition-colors text-sm lg:text-base">
              Let's Talk
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-fade-in">
            <a
              href="#about"
              className="block py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="https://dikopano.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dikopano
            </a>
            <a
              href="/careers"
              className="block py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Team
            </a>
            <a
              href="#contact"
              className="block py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-lg transition-colors w-full">
              Let's Talk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
