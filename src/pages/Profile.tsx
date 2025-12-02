import { Award, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
    { category: "Soft Skills", items: ["Team Leadership", "Communication", "Problem Solving", "Agile"] },
  ];

  const experience = [
    {
      company: "Tech Company Inc.",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications and mentoring junior developers.",
    },
    {
      company: "Startup Solutions",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies.",
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients.",
    },
  ];

  const education = [
    {
      institution: "University Name",
      degree: "Bachelor of Computer Science",
      period: "2015 - 2019",
      description: "Graduated with honors, specializing in software engineering and web development.",
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Advanced Patterns",
    "TypeScript Expert Certification",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-secondary to-accent rounded-full p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Code2 className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Professional Profile
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced developer with a passion for creating elegant solutions to complex problems
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center animate-fade-in-up">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center animate-fade-in-up">
            <Briefcase className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-primary">
              Work Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-card-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center animate-fade-in-up">
            <GraduationCap className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-primary">
              Education
            </h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-card-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-secondary font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center animate-fade-in-up">
            <Award className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-primary">
              Certifications
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-secondary flex-shrink-0" />
                  <p className="text-lg font-medium text-card-foreground">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
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
