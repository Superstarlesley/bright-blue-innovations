
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('career_applications')
        .insert([{
          name: formData.name,
          email: formData.email,
          position: formData.position || null,
          message: formData.message
        }]);

      if (error) {
        throw error;
      }

      console.log("Career application submitted to database:", formData);
      
      toast({
        title: "Application sent successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      setFormData({ name: "", email: "", position: "", message: "" });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/3315d1da-0db0-44e6-aa06-cf51796990da.png')`
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90"></div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Build 
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent"> With Us</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            We're always looking for bold thinkers, doers, and dreamers who want to help build the next billion-dollar company. If that's you, we want to meet.
          </p>
          
          <Button 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 text-lg"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 sm:py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-slate-300 text-lg">
              Ready to make an impact? Tell us about yourself and how you'd like to contribute.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position" className="text-white font-medium">
                  Position of Interest
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Software Developer, Marketing Specialist"
                  className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-medium">
                  Tell Us About Yourself *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your experience, passion, and what excites you about joining our team..."
                  rows={6}
                  className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 text-lg"
              >
                {isSubmitting ? (
                  "Sending Application..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
