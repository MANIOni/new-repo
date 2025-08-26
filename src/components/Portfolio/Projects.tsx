import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Shield, Database, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Academic Paper Vault",
      description: "A secure web-based platform for managing academic question papers and answer keys with role-based access control and JWT authentication.",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "Node.js"],
      features: [
        "Role-based access control",
        "JWT-based authentication", 
        "Efficient file storage management",
        "Secure paper management",
        "User permission system"
      ],
      icon: <Shield className="h-6 w-6" />,
      liveUrl: "https://academia-1-c0bl.onrender.com", 
      githubUrl: "https://github.com/MANIOni", 
      status: "Production Ready"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with React, showcasing projects, skills, and providing a contact form for professional connections.",
      technologies: ["React", "TypeScript", "CSS3", "Responsive Design"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Contact form integration",
        "Modern UI/UX",
        "Performance optimized"
      ],
      icon: <Users className="h-6 w-6" />,
      liveUrl: "https://github.com/MANIOni/my-interactive-bio1",
      githubUrl: "https://github.com/MANIOni",
      status: "Live"
    }
  ];

  const handleViewProject = (project: typeof projects[0]) => {
    if (project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, '_blank');
    } else {
      // Demo functionality for Academic Paper Vault
      if (project.title === "Academic Paper Vault") {
        alert("🚀 Academic Paper Vault Demo:\n\n✅ Secure Login System\n✅ Role-based Dashboard\n✅ Paper Upload/Download\n✅ JWT Authentication\n✅ File Management System\n\nThis project showcases full-stack development skills with modern security practices!");
      } else {
        alert(`🌟 ${project.title} is currently running!\n\nThis portfolio demonstrates modern React development with responsive design and smooth animations.`);
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-card-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glow-card bg-card-gradient hover:shadow-glow-accent transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-accent/10 text-accent border-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow-primary"
                    onClick={() => handleViewProject(project)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    View & Run
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      if (project.githubUrl && project.githubUrl !== "#") {
                        window.open(project.githubUrl, '_blank');
                      } else {
                        alert("GitHub repository will be available soon!");
                      }
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => handleViewProject(project)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Project Info */}
        <div className="text-center mt-12 slide-in">
          <Card className="glow-card bg-card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="hero-text">Technical Expertise</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All projects demonstrate proficiency in full-stack development, 
                modern authentication systems, database management, and responsive design principles.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Full-Stack Development", "Security Best Practices", "Modern UI/UX", "Database Design", "API Development"].map((skill, index) => (
                  <Badge key={index} className="bg-secondary/10 text-secondary border-secondary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;