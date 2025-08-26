import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Languages } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Erode Sengunthar Engineering College",
      year: "2022 - 2026",
      grade: "7.6 CGPA"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "N.L.C Boys Higher Secondary School",
      year: "2022",
      grade: "87.2%"
    },
    {
      degree: "Secondary School Leaving Certificate", 
      institution: "SKV Higher Secondary School",
      year: "2020",
      grade: "83%"
    }
  ];

  const skills = [
    "Java", "SQL", "HTML & CSS", "React", "MongoDB", "Express.js", 
    "JWT Authentication", "Problem Solving", "Communication", "Time Management"
  ];

  const achievements = [
    {
      title: "AI in Education Paper",
      description: "Presented research paper at National Level Technical Symposium",
      venue: "Nandha College of Technology, Erode",
      date: "October 2023"
    },
    {
      title: "CODE CRAZE Participant",
      description: "Participated in National Level Technical Symposium",
      venue: "Coimbatore Institute Of Technology",
      date: "March 2025"
    }
  ];

  const certifications = [
    "Diploma in Software and Information Technology (2022)",
    "Basics of CNC/VMC (2023)",
    "Introduction to Artificial Intelligence (2024)"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-card-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate software engineering student with a drive to create innovative solutions 
            and contribute to cutting-edge technology projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Info */}
          <Card className="glow-card bg-card-gradient">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Personal Details</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Date of Birth:</span>
                  <span className="ml-2 text-foreground">30/04/2005</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="ml-2 text-primary">+91 9003982994</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="ml-2 text-primary break-all">manikandan30.04.2005@gmail.com</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2 text-foreground">Sorathur, Cuddalore</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="glow-card bg-card-gradient">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                  <Languages className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Tamil (Native)</Badge>
                <Badge variant="secondary">English (Fluent)</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="glow-card bg-card-gradient">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Core Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div className="mb-16 slide-in">
          <h3 className="text-3xl font-bold text-center mb-8">
            Educational <span className="hero-text">Journey</span>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glow-card bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-semibold">{edu.grade}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="slide-in">
            <h3 className="text-2xl font-bold mb-6">
              <span className="hero-text">Achievements</span>
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glow-card bg-card-gradient">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
                    <p className="text-sm text-accent">{achievement.venue} - {achievement.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="slide-in">
            <h3 className="text-2xl font-bold mb-6">
              <span className="hero-text">Certifications</span>
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="glow-card bg-card-gradient">
                  <CardContent className="p-4">
                    <p className="text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;