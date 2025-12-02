import { useState, useEffect } from "react";
import { ArrowRight, Briefcase, Code, Mail, Github, Linkedin, Twitter, Sparkles, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive web application built with modern technologies and scalable architecture",
      tech: ["React", "TypeScript", "Node.js"],
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Project Beta",
      description: "Mobile-first responsive design with advanced animations and micro-interactions",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Project Gamma",
      description: "Full-stack e-commerce platform with payment integration and real-time analytics",
      tech: ["React", "Express", "MongoDB"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const notes = [
    {
      title: "Getting Started with React Hooks",
      date: "March 15, 2024",
      excerpt: "Exploring the power of React Hooks and how they simplify state management in modern applications...",
      readTime: "5 min",
    },
    {
      title: "Building Scalable APIs",
      date: "March 10, 2024",
      excerpt: "Best practices for designing RESTful APIs that can grow with your application and handle millions of requests...",
      readTime: "8 min",
    },
    {
      title: "Modern CSS Techniques",
      date: "March 5, 2024",
      excerpt: "Discovering new CSS features like Grid, Flexbox, and custom properties that revolutionize web design...",
      readTime: "6 min",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "10K+" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Animated Avatar */}
            <div className="relative w-36 h-36 mx-auto animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse-glow" />
              <div className="absolute inset-2 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <Code className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-heading font-bold text-white animate-fade-in-up leading-tight">
                John Doe
              </h1>
              
              <div className="flex items-center justify-center gap-3 animate-fade-in-up animation-delay-200">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
                <p className="text-2xl md:text-3xl text-white/95 font-medium">
                  Full Stack Developer & Creative Designer
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
              </div>
              
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                Crafting beautiful, functional web experiences with modern technologies.
                Passionate about clean code, elegant design, and user-centric solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" variant="hero" className="text-lg group">
                View My Work 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-12 animate-fade-in animation-delay-800">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Me</span>
                <div className="h-1 w-20 bg-gradient-to-r from-secondary to-accent mt-2 rounded-full" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
                Passionate About
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Great Design
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building
                web applications that users love. I specialize in React, TypeScript, and 
                modern web technologies, always pushing the boundaries of what's possible.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through blog posts and tutorials.
                I believe in continuous learning and collaboration.
              </p>
              
              <div className="flex gap-3 pt-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <Button 
                    key={i}
                    variant="outline" 
                    size="icon"
                    className="hover-lift hover:border-secondary hover:text-secondary"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary/80 p-1">
                  <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10" />
                    <Code className="w-32 h-32 text-muted-foreground relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Some of my recent work and personal projects that showcase my skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group p-0 bg-card shadow-card hover:shadow-card-hover transition-all duration-500 hover-lift hover-glow overflow-hidden border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Preview Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mt-4 mb-6">
              Latest Notes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my journey in tech
            </p>
          </div>
          
          <div className="space-y-6">
            {notes.map((note, index) => (
              <Card
                key={index}
                className="group p-8 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift cursor-pointer animate-fade-in-up border-l-4 border-l-transparent hover:border-l-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{note.date}</span>
                      <span>•</span>
                      <span>{note.readTime} read</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {note.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button variant="accent" size="lg" className="text-lg">
              View All Articles
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-pulse-glow">
            <Mail className="w-12 h-12" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          
          <Button size="lg" variant="hero" className="text-lg bg-white text-primary hover:bg-white/90 shadow-2xl">
            Get In Touch
            <Mail className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-heading font-bold text-primary mb-2">John Doe</div>
              <p className="text-muted-foreground">Full Stack Developer & Designer</p>
            </div>
            
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <Button 
                  key={i}
                  variant="ghost" 
                  size="icon"
                  className="hover:text-secondary hover:bg-secondary/10"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="text-center text-muted-foreground mt-8 pt-8 border-t">
            <p>&copy; 2024 John Doe. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
