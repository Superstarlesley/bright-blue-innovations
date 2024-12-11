import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              Motswana Intelligence
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-secondary-light hover:text-secondary transition-colors duration-200">
                About
              </a>
              <a href="#services" className="text-secondary-light hover:text-secondary transition-colors duration-200">
                Services
              </a>
              <a href="#contact" className="text-secondary-light hover:text-secondary transition-colors duration-200">
                Contact
              </a>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200">
                Let's Talk
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-secondary-light hover:text-secondary px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-secondary-light hover:text-secondary px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-secondary-light hover:text-secondary px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="mx-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;