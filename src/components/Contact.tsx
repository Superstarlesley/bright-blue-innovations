
import { Mail, Phone, MapPin, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Meet Our Team</h2>
          <p className="text-white/70 text-lg">The minds behind Motswana Intelligence</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Thuto Leseane */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Thuto Leseane</h3>
            <p className="text-primary mb-4 font-semibold">Product Manager</p>
            <p className="text-white/70 mb-6">
              Background in entrepreneurship, qualified AI marketer, and excellent product manager.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Mail size={20} />
              <a href="mailto:info@motswanaintelligence.tech" className="hover:underline">
                info@motswanaintelligence.tech
              </a>
            </div>
          </div>

          {/* Thabo Mahumba Michael */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Thabo Mahumba Michael</h3>
            <p className="text-primary mb-4 font-semibold">Head of Software Engineering</p>
            <p className="text-white/70 mb-6">
              Proficient in HTML, CSS, JavaScript, Tailwind CSS, ReactJS, and NextJS.
            </p>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Mail size={20} />
              <a href="mailto:michael@motswanaintelligence.tech" className="hover:underline">
                michael@motswanaintelligence.tech
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Code size={20} className="text-primary" />
              <span className="text-white/70">HTML, CSS, JS, Tailwind, React, Next.js</span>
            </div>
          </div>
        </div>

        {/* Dikopano Project */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 border border-primary/30">
            Coming Soon
          </span>
          <h3 className="text-3xl font-bold mb-4 text-white">Introducing Dikopano</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            A revolutionary platform connecting Botswana's businesses with cutting-edge AI solutions. 
            Dikopano will bridge the gap between traditional business practices and modern technology.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Join the Waitlist
          </button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="text-white/60 mb-4">Comment! what's your thought on this content?</div>
          
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <a 
                href="mailto:info@motswanaintelligence.tech" 
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                info@motswanaintelligence.tech
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <a 
                href="tel:+26774442120" 
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                +267 74442120
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-white/70">Gaborone, Botswana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
