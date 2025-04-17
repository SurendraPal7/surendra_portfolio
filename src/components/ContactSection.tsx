
import { useState } from "react";
import { Linkedin, Github, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting me. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-darker relative">
      <div className="absolute inset-0 bg-darker">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-gray-300 max-w-md leading-relaxed">
              Feel free to contact me for any project inquiries or just to say hello. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center">
                <div className="p-3 bg-secondary/50 rounded-full mr-4">
                  <Mail className="text-primary-purple" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mail</p>
                  <a href="mailto:ashishrajbarmawal23@gmail.com" className="text-white hover:text-primary-purple transition-colors">
                    ashishrajbarmawal23@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-secondary/50 rounded-full mr-4">
                  <Phone className="text-primary-purple" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919572658516" className="text-white hover:text-primary-purple transition-colors">
                    +91 9572658516
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-secondary/50 rounded-full mr-4">
                  <Linkedin className="text-primary-purple" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/aashishraj/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-purple transition-colors"
                  >
                    linkedin.com/in/aashishraj/
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-secondary/50 rounded-full mr-4">
                  <Github className="text-primary-purple" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/Ashish1379" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-purple transition-colors"
                  >
                    github.com/Ashish1379
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-secondary/30 border border-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-300 block mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary/50 border-secondary focus:border-primary-purple"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-gray-300 block mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-secondary/50 border-secondary focus:border-primary-purple"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-gray-300 block mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-secondary/50 border-secondary focus:border-primary-purple resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending<span className="animate-pulse">...</span></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
