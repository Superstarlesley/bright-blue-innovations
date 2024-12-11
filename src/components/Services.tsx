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
      className="py-20 px-6 bg-gradient-to-b from-white to-accent"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-center">Industries We Serve</h2>
        <p className="section-subtitle text-center">
          Tailored solutions for Botswana's key sectors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-xl opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-secondary-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;