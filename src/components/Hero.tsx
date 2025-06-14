
import { useEffect, useRef } from "react";

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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 bg-gray-900">
      <div className="container max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 opacity-0 animate-fade-up border border-primary/30">
          Welcome to Motswana Intelligence
        </span>
        
        <div className="mb-8 opacity-0 animate-fade-up [animation-delay:200ms]">
          <p className="text-white/60 text-lg mb-4">Do you find this</p>
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
          >
            Software <span className="text-primary font-black">Helpful?</span>
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 opacity-0 animate-fade-up [animation-delay:400ms]">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Motswana<br />Intelligence
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Revolutionizing Botswana through innovative software solutions and AI technology
          </p>
        </div>

        <div className="opacity-0 animate-fade-up [animation-delay:600ms]">
          <p className="text-white/60 mb-6">
            Save this Site for later and tell us your thoughts about our services
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-lg transition-colors w-full md:w-auto text-lg">
              Explore Our Services
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors w-full md:w-auto text-lg border border-white/30">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
