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
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <a href="#contact" className="hero-button-primary">
                Let's Talk
              </a>
            </div>
          </div>

          {

Let me create a stunning landing page for Motswana Intelligence that embodies Apple's design philosophy while maintaining a unique identity. I'll draw inspiration from:

1. Apple.com's smooth animations and transitions
2. Stripe.com's premium feel and attention to detail
3. Linear.app's minimalist yet powerful interface

Key Features for V1:
- Hero section with dynamic text animation
- Smooth scroll transitions between sections
- Premium glass-morphism cards for services
- Subtle hover animations on all interactive elements
- Responsive design with careful attention to spacing
- Elegant typography with perfect contrast

Design Elements:
- Colors: Clean whites (#FFFFFF, #F5F5F7) with bright blue accents (#0071E3)
- Typography: SF Pro Display for headings, SF Pro Text for body (system fonts)
- Animations: Subtle fade-ins, smooth hovers, text reveals
- Spacing: Consistent 4px/8px grid system
- Border Radius: Consistent 12px for cards, 8px for buttons

<lov-code>
Let's implement this design. We'll need to modify several files:

1. First, update tailwind.config.ts for our custom design system:

<lov-write file_path="tailwind.config.ts">
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0071E3",
          hover: "#0077ED",
          light: "#E8F1FC",
        },
        secondary: {
          DEFAULT: "#1D1D1F",
          light: "#86868B",
        },
        accent: {
          DEFAULT: "#F5F5F7",
          dark: "#E8E8ED",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;