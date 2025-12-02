import { Calendar, Clock, Tag, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

const Notes = () => {
  const categories = ["All", "Web Development", "Design", "Backend", "Tutorials"];
  
  const notes = [
    {
      title: "Getting Started with React Hooks",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      excerpt: "React Hooks have revolutionized the way we write React components. In this article, we'll explore the most commonly used hooks and learn how to create custom hooks for your applications.",
      tags: ["React", "Hooks", "JavaScript"],
    },
    {
      title: "Building Scalable APIs with Node.js",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Backend",
      excerpt: "Learn best practices for designing RESTful APIs that can grow with your application. We'll cover authentication, rate limiting, caching, and more.",
      tags: ["Node.js", "API", "Backend"],
    },
    {
      title: "Modern CSS Techniques for 2024",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Design",
      excerpt: "Discover the latest CSS features like Container Queries, Cascade Layers, and CSS Grid subgrid that are changing how we build responsive layouts.",
      tags: ["CSS", "Design", "Frontend"],
    },
    {
      title: "Understanding TypeScript Generics",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Web Development",
      excerpt: "TypeScript generics can seem complex at first, but they're incredibly powerful. This guide breaks down generics with practical examples.",
      tags: ["TypeScript", "Programming", "Tutorial"],
    },
    {
      title: "Deploying Applications with Docker",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Backend",
      excerpt: "A comprehensive guide to containerizing your applications with Docker. Learn about images, containers, volumes, and docker-compose.",
      tags: ["Docker", "DevOps", "Deployment"],
    },
    {
      title: "Designing Beautiful User Interfaces",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Design",
      excerpt: "Explore principles of great UI design including color theory, typography, spacing, and creating intuitive user experiences.",
      tags: ["UI/UX", "Design", "Interface"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Notes & Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development and design
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-background border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96 animate-fade-in-up">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-card"
              />
            </div>
            <div className="flex flex-wrap gap-2 animate-fade-in-up animation-delay-200">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === 0
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-card-foreground hover:bg-secondary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {notes.map((note, index) => (
              <Card
                key={index}
                className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{note.date}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{note.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-card-foreground hover:text-secondary transition-colors">
                    {note.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {note.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {note.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-secondary font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Subscribe to Newsletter
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get the latest articles and tutorials delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
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

export default Notes;
