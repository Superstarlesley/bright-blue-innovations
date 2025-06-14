
import { Mail, Phone, MapPin, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8">Meet Our Team</h2>
          <p className="text-white/70 text-base sm:text-lg">The minds behind Motswana Intelligence</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Thuto Leseane */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Thuto Leseane</h3>
            <p className="text-primary mb-4 font-semibold text-sm sm:text-base">Product Manager</p>
            <p className="text-white/70 mb-6 text-sm sm:text-base">
              Background in entrepreneurship, qualified AI marketer, and excellent product manager.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm sm:text-base">
              <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <a href="mailto:info@motswanaintelligence.tech" className="hover:underline break-all">
                info@motswanaintelligence.tech
              </a>
            </div>
          </div>

          {/* Thabo Mahumba Michael */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Thabo Mahumba Michael</h3>
            <p className="text-primary mb-4 font-semibold text-sm sm:text-base">Head of Software Engineering</p>
            <p className="text-white/70 mb-6 text-sm sm:text-base">
              Proficient in HTML, CSS, JavaScript, Tailwind CSS, ReactJS, and NextJS.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary text-sm sm:text-base">
                <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                <a href="mailto:michael@motswanaintelligence.tech" className="hover:underline break-all">
                  michael@motswanaintelligence.tech
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Code size={18} className="text-primary mt-0.5 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-white/70 text-sm sm:text-base">HTML, CSS, JS, Tailwind, React, Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dikopano Project */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 border border-primary/30">
            Coming Soon
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Introducing Dikopano</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm sm:text-base px-2">
            A revolutionary platform connecting Botswana's businesses with cutting-edge AI solutions. 
            Dikopano will bridge the gap between traditional business practices and modern technology.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base">
            Join the Waitlist
          </button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="text-white/60 mb-4 text-sm sm:text-base px-4">Comment! what's your thought on this content?</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Mail className="text-primary flex-shrink-0" size={24} />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-sm sm:text-base">Email</h4>
                <a 
                  href="mailto:info@motswanaintelligence.tech" 
                  className="text-white/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm break-all"
                >
                  info@motswanaintelligence.tech
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-sm sm:text-base">Phone</h4>
                <a 
                  href="tel:+26774442120" 
                  className="text-white/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm"
                >
                  +267 74442120
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-sm sm:text-base">Location</h4>
                <p className="text-white/70 text-xs sm:text-sm">Gaborone, Botswana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
