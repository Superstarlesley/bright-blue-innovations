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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6 opacity-0 animate-fade-up">
          Welcome to Motswana Intelligence
        </span>
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-secondary mb-6 opacity-0"
        >
          Revolutionizing Botswana Through{" "}
          <span className="text-primary">Innovative Software</span>
        </h1>
        <p className="text-xl text-secondary-light max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up [animation-delay:400ms]">
          Empowering industries with tailored software solutions for growth and
          efficiency in the digital age.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up [animation-delay:600ms]">
          <button className="button-primary w-full md:w-auto">
            Explore Our Services
          </button>
          <button className="button-secondary w-full md:w-auto">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;