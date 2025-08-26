import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate email sending (in a real app, this would connect to a backend)
    try {
      // Create mailto link as fallback
      const mailtoLink = `mailto:manikandan30.04.2005@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact: ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Message Prepared!",
        description: "Your email client should now open with the message pre-filled. You can send it directly from there.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your message. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-card-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="hero-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a conversation? I'd love to hear from you about opportunities, 
            collaborations, or just to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-6 slide-in">
            <Card className="glow-card bg-card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-primary break-all">
                      manikandan30.04.2005@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card bg-card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-secondary">+91 9003982994</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card bg-card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-sm text-accent">Sorathur, Cuddalore, Tamil Nadu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card bg-card-gradient">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  I typically respond within
                </p>
                <div className="text-2xl font-bold text-primary">24 hours</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 slide-in">
            <Card className="glow-card bg-card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Send Me a <span className="hero-text">Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-2 bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="mt-2 bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="mt-2 bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      required
                      className="mt-2 bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow-primary text-lg py-6"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Preparing Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Note:</strong> This form will open your default email client with the message pre-filled. 
                    Alternatively, you can directly email me at{" "}
                    <span className="text-primary font-semibold">manikandan30.04.2005@gmail.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;