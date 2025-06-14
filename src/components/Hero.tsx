
import { useEffect, useRef } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary text-sm font-medium mb-8 opacity-0 animate-fade-up border border-primary/30 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          Welcome to Motswana Intelligence
        </div>
        
        {/* Main Content */}
        <div className="mb-12 opacity-0 animate-fade-up [animation-delay:200ms]">
          <div className="mb-6">
            <p className="text-white/60 text-lg mb-6 font-light tracking-wide">
              Transforming Botswana's Future with
            </p>
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight"
            >
              Intelligent
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-pulse">
                Software
              </span>
              <br />
              Solutions
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Revolutionizing industries through cutting-edge AI technology and innovative software development
          </p>
        </div>

        {/* CTA Section */}
        <div className="opacity-0 animate-fade-up [animation-delay:600ms]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 flex items-center gap-2 text-lg">
              Explore Our Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/30 text-lg">
              Get in Touch
            </button>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Key Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up [animation-delay:1000ms]">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
