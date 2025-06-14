
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const teamMembers = [
    {
      name: "Michael Mahumba",
      title: "Director of Innovation",
      linkedinUrl: "https://www.linkedin.com/in/michael-mahumba-451bb6363",
      initials: "MM"
    },
    {
      name: "Thuto Leseane", 
      title: "Chief Operations Officer",
      linkedinUrl: "https://www.linkedin.com/in/thuto-leseane-2b09a7357",
      initials: "TL"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Our Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Team
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation at Motswana Intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/8 transition-all duration-300 group"
              >
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl">
                  {member.initials}
                </div>
                
                {/* Name and Title */}
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-lg mb-6">
                  {member.title}
                </p>
                
                {/* LinkedIn Link */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Dikopano Project */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 border border-primary/30">
            Coming Soon
          </span>
          <h3 className="text-3xl font-bold mb-4 text-white">Introducing Dikopano</h3>
          <p className="text-slate-300 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
            A revolutionary platform connecting Botswana's businesses with cutting-edge AI solutions. 
            Dikopano will bridge the gap between traditional business practices and modern technology.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25">
            Join the Waitlist
          </button>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
          <p className="text-slate-300 mb-8 text-lg">Ready to transform your business? Let's discuss your project.</p>
          
          {/* Get In Touch Button */}
          <div className="mb-12">
            <ContactForm />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-white mb-2 text-lg">Email</h4>
              <a 
                href="mailto:info@motswanaintelligence.tech" 
                className="text-slate-300 hover:text-primary transition-colors duration-200 break-all"
              >
                info@motswanaintelligence.tech
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
              <Phone className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-white mb-2 text-lg">Phone</h4>
              <a 
                href="tel:+26774442120" 
                className="text-slate-300 hover:text-primary transition-colors duration-200"
              >
                +267 74442120
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-white mb-2 text-lg">Location</h4>
              <p className="text-slate-300">Gaborone, Botswana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
