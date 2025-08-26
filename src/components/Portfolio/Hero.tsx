import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full floating-animation"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm {" "}
              <span className="hero-text">
                Manikandan
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Software Engineering Student
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating innovative web solutions using modern technologies. 
              Currently pursuing B.Tech in Information Technology with expertise in 
              <span className="text-primary"> Java</span>, 
              <span className="text-primary"> React</span>, and 
              <span className="text-primary"> Full-Stack Development</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow-primary"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>

            {/* <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div> */}
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 slide-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-gradient rounded-full opacity-20 blur-xl animate-pulse" />
              <img
                src={profilePhoto}
                alt="E. Manikandan"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-glow-primary"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-primary"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;