
import { useEffect, useRef } from "react";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const highlights = entry.target.querySelectorAll('.highlight-word');
            highlights.forEach((highlight, index) => {
              setTimeout(() => {
                highlight.classList.add('animate-highlight');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 sm:py-32 bg-slate-900 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle zebra pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 40px
          )`
        }}></div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[0.9]">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Motswana Intelligence
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* First Paragraph */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed tracking-wide">
              Motswana Intelligence is a modern{" "}
              <span className="highlight-word relative font-medium text-primary transition-all duration-500">
                strategy
              </span>{" "}
              and{" "}
              <span className="highlight-word relative font-medium text-primary transition-all duration-500">
                intelligence
              </span>{" "}
              firm rooted in African excellence and driven by global standards.
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              We specialize in combining data, design, and emerging technologies to create systems that think ahead and act with precision.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed text-center mb-8">
              Our mission is to empower businesses, governments, and institutions with tools that improve decision-making, streamline operations, and unlock future-proof opportunities.
            </p>
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed text-center">
              We believe in bold execution, lean{" "}
              <span className="highlight-word relative font-medium text-primary transition-all duration-500">
                innovation
              </span>, and bringing a distinctly{" "}
              <span className="highlight-word relative font-medium text-primary transition-all duration-500">
                Batswana
              </span>{" "}
              perspective into the global conversation around intelligence and automation.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8">
              Founded by innovators with deep experience in product design, systems automation, and strategic growth, Motswana Intelligence is not just a company — it's a movement.
            </p>
            <div className="inline-block">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary border-b-2 border-primary pb-2">
                We are here to raise the standard.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12">
            <button className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 text-lg">
              Shape the Future with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
