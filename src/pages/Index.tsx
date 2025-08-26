import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 E. Manikandan. Built with React & TypeScript.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Passionate about creating innovative solutions through code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
