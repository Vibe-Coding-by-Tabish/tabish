import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
            Let's Build Something <span className="text-electric-blue">Together</span>
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to send me a message. 
            I'm always excited to discuss new opportunities and innovative ideas.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Get In Touch</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Whether you're looking to build cutting-edge AI applications, need full-stack development expertise, 
                  or want to collaborate on innovative projects, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-card rounded-xl border border-surface-tertiary/30 hover:border-electric-blue/30 transition-all duration-300 group">
                  <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <a 
                      href="mailto:alex.chen@email.com" 
                      className="text-text-secondary hover:text-electric-blue transition-colors duration-300"
                    >
                      tabish.ansari004@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-card rounded-xl border border-surface-tertiary/30 hover:border-electric-blue/30 transition-all duration-300 group">
                  <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Response Time</h4>
                    <p className="text-text-secondary">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-surface-secondary border-surface-tertiary focus:border-electric-blue focus:ring-electric-blue text-text-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-surface-secondary border-surface-tertiary focus:border-electric-blue focus:ring-electric-blue text-text-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-surface-secondary border-surface-tertiary focus:border-electric-blue focus:ring-electric-blue text-text-primary resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting || isSubmitted}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-text-primary"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;