import { Award, Briefcase, GraduationCap, Code2, Target, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    { 
      category: "Tools", 
      items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    { 
      category: "Soft Skills", 
      items: ["Team Leadership", "Communication", "Problem Solving", "Agile"],
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
  ];

  const experience = [
    {
      company: "Tech Company Inc.",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications and mentoring junior developers. Architected scalable microservices handling 1M+ daily active users.",
      achievements: [
        "Reduced load time by 60% through optimization",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      company: "Startup Solutions",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies. Delivered 15+ successful projects on time and within budget.",
      achievements: [
        "Developed real-time collaboration features",
        "Integrated payment processing systems",
        "Mentored 3 junior developers",
      ],
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients across different industries.",
      achievements: [
        "Built 20+ responsive websites",
        "Improved site performance by 40%",
        "Established design system",
      ],
    },
  ];

  const education = [
    {
      institution: "University Name",
      degree: "Bachelor of Computer Science",
      period: "2015 - 2019",
      description: "Graduated with honors, specializing in software engineering and web development. GPA: 3.8/4.0",
      highlights: [
        "Dean's List all semesters",
        "President of Coding Club",
        "Research in AI & Machine Learning",
      ],
    },
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon", year: "2023" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2023" },
    { name: "React Advanced Patterns", issuer: "Frontend Masters", year: "2022" },
    { name: "TypeScript Expert", issuer: "Microsoft", year: "2022" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full animate-pulse-glow" />
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <Code2 className="w-24 h-24 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Professional Profile</span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight">
                Crafting Digital
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experienced developer with a passion for creating elegant solutions to complex problems
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button variant="accent" size="lg">
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mt-4">
              Skills & Technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="group p-8 bg-card shadow-card hover:shadow-card-hover transition-all duration-500 hover-lift border-0 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skillGroup.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${skillGroup.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <skillGroup.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-card-foreground">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-lg font-medium border border-secondary/20 hover:bg-secondary/20 hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-16 justify-center animate-fade-in-up">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary">
              Work Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="group p-8 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift animate-fade-in-up border-l-4 border-l-transparent hover:border-l-secondary"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium px-4 py-2 bg-muted rounded-lg whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-16 justify-center animate-fade-in-up">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary">
              Education
            </h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group p-8 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium px-4 py-2 bg-muted rounded-lg whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-16 justify-center animate-fade-in-up">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary">
              Certifications
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project and explore possibilities.
          </p>
          <Button size="lg" variant="hero" className="text-lg bg-white text-primary hover:bg-white/90">
            Start a Conversation
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

export default Profile;
