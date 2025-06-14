
import { Shield, HardHat, Leaf } from "lucide-react";

const services = [
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Mining",
    description:
      "Software solutions for resource management, safety, and efficiency in mining operations.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Defence",
    description:
      "Advanced systems for enhanced security measures and defence capabilities.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Agriculture",
    description:
      "Innovative tools for crop management, yield optimization, and sustainable farming.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-800"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-lg mb-4">So, you like this content?</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Share<br />
            <span className="text-primary">This!</span>
          </h2>
          <p className="text-white/70 text-lg">
            Industries we serve across Botswana's key sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl opacity-0 animate-fade-up hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 border border-primary/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
