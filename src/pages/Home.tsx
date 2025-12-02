import { ArrowRight, Briefcase, Code, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Home = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive web application built with modern technologies",
      tech: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Project Beta",
      description: "Mobile-first responsive design with advanced animations",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Project Gamma",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Express", "MongoDB"],
    },
  ];

  const notes = [
    {
      title: "Getting Started with React Hooks",
      date: "March 15, 2024",
      excerpt: "Exploring the power of React Hooks and how they simplify state management...",
    },
    {
      title: "Building Scalable APIs",
      date: "March 10, 2024",
      excerpt: "Best practices for designing RESTful APIs that can grow with your application...",
    },
    {
      title: "Modern CSS Techniques",
      date: "March 5, 2024",
      excerpt: "Discovering new CSS features like Grid, Flexbox, and custom properties...",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-32 h-32 mx-auto bg-accent/20 rounded-full flex items-center justify-center animate-fade-in">
              <div className="w-28 h-28 bg-accent/30 rounded-full flex items-center justify-center">
                <Code className="w-14 h-14 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold animate-fade-in-up">
              John Doe
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Full Stack Developer & Creative Designer
            </p>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Crafting beautiful, functional web experiences with modern technologies.
              Passionate about clean code, elegant design, and user-centric solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" variant="secondary" className="text-lg">
                View My Work <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building
                web applications. I specialize in React, TypeScript, and modern web technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-accent p-1">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                  <Code className="w-24 h-24 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Preview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Latest Notes
            </h2>
            <p className="text-lg text-muted-foreground">
              Thoughts, tutorials, and insights from my journey
            </p>
          </div>
          
          <div className="space-y-6">
            {notes.map((note, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-heading font-bold text-card-foreground">
                    {note.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {note.date}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {note.excerpt}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
