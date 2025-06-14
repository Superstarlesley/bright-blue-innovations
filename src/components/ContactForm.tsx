
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message
        }]);

      if (error) {
        throw error;
      }

      console.log("Form submitted to database:", formData);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form and close dialog
      setFormData({ name: "", email: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendlyClick = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/motswanaintelligence', '_blank', 'width=800,height=700');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 text-lg"
        >
          <Mail className="w-5 h-5 mr-2" />
          Get In Touch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-slate-900 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Get In Touch
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Choose how you'd like to connect with us.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="message" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-white/10">
            <TabsTrigger value="message" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </TabsTrigger>
            <TabsTrigger value="meeting" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book Meeting
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="message" className="space-y-6 mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">
                  Name *
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
                <Label htmlFor="message" className="text-white font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, goals, or how we can help you..."
                  rows={4}
                  className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-primary resize-none"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary-hover text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="meeting" className="space-y-6 mt-6">
            <div className="text-center space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Schedule a Meeting</h3>
                <p className="text-slate-300 mb-6">
                  Book a convenient time to discuss your project in detail with our team.
                </p>
                <Button
                  onClick={handleCalendlyClick}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Open Calendar
                </Button>
              </div>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Cancel
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
