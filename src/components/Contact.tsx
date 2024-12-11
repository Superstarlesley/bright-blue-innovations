import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Thuto Leseane */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Thuto Leseane</h3>
            <p className="text-gray-600 mb-4">Co-Founder & Technical Lead</p>
            <p className="text-gray-600 mb-6">
              Software engineer specializing in AI and machine learning solutions for African businesses.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Mail size={20} />
              <a href="mailto:thuto@motswanaintelligence.com" className="hover:underline">
                thuto@motswanaintelligence.com
              </a>
            </div>
          </div>

          {/* Kago Moilwa */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Kago Moilwa</h3>
            <p className="text-gray-600 mb-4">Co-Founder & Business Development</p>
            <p className="text-gray-600 mb-6">
              Business strategist focused on expanding technology adoption across Botswana.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Mail size={20} />
              <a href="mailto:kago@motswanaintelligence.com" className="hover:underline">
                kago@motswanaintelligence.com
              </a>
            </div>
          </div>
        </div>

        {/* Dikopano Project */}
        <div className="glass-card p-8 rounded-xl text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Coming Soon
          </span>
          <h3 className="text-3xl font-bold mb-4">Introducing Dikopano</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            A revolutionary platform connecting Botswana's businesses with cutting-edge AI solutions. 
            Dikopano will bridge the gap between traditional business practices and modern technology.
          </p>
          <button className="button-primary">Join the Waitlist</button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a 
                href="mailto:info@motswanaintelligence.tech" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                info@motswanaintelligence.tech
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <a 
                href="tel:+26774442120" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                +267 74442120
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={24} />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">Gaborone, Botswana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;