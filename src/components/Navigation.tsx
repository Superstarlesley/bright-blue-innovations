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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-secondary">
            Motswana Intelligence
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="button-primary">Let's Talk</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <a
              href="#about"
              className="block py-2 text-secondary-light hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-secondary-light hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 text-secondary-light hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="button-primary w-full">Let's Talk</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;