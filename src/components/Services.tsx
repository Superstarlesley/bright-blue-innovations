
import { Shield, HardHat, Leaf, HeartPulse, GraduationCap, Truck, Banknote, Landmark } from "lucide-react";

const services = [
  {
    icon: <HardHat className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Mining",
    description:
      "Software solutions for resource management, safety, and efficiency in mining operations.",
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Security & Defence",
    description:
      "Advanced systems for enhanced security measures and defence capabilities.",
  },
  {
    icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Agriculture",
    description:
      "Innovative tools for crop management, yield optimization, and sustainable farming.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Healthcare",
    description:
      "Digital platforms for patient records, telemedicine, and hospital management to improve care.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Education",
    description:
      "E-learning and management solutions for schools, colleges, and enterprises.",
  },
  {
    icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Supply Chain & Logistics",
    description:
      "Tracking, automation, and optimization for efficient logistics and distribution.",
  },
  {
    icon: <Banknote className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Banking & Finance",
    description:
      "Secure financial platforms and analytics for banks and fintech organizations.",
  },
  {
    icon: <Landmark className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Tourism & Hospitality",
    description:
      "Booking platforms, guest management, and digital guides for the hospitality sector.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="container max-w-6xl mx-auto">
        {/* New Intro Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8">
            Our Industry Solutions
          </h2>
          <p className="text-white/70 text-base sm:text-lg px-4 max-w-3xl mx-auto">
            Transforming Botswana’s core sectors with purpose-built, scalable digital solutions. 
            Drive efficiency, boost productivity, and grow your business with technology designed for your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl opacity-0 animate-fade-up hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6 border border-primary/30">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

