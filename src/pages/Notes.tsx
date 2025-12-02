import { useState } from "react";
import { Calendar, Clock, Tag, Search, BookOpen, TrendingUp, Filter, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = [
    { name: "All", count: 12 },
    { name: "Web Development", count: 5 },
    { name: "Design", count: 3 },
    { name: "Backend", count: 2 },
    { name: "Tutorials", count: 2 },
  ];
  
  const notes = [
    {
      title: "Getting Started with React Hooks",
      date: "March 15, 2024",
      readTime: "5 min",
      category: "Web Development",
      excerpt: "React Hooks have revolutionized the way we write React components. In this article, we'll explore the most commonly used hooks and learn how to create custom hooks for your applications.",
      tags: ["React", "Hooks", "JavaScript"],
      featured: true,
    },
    {
      title: "Building Scalable APIs with Node.js",
      date: "March 10, 2024",
      readTime: "8 min",
      category: "Backend",
      excerpt: "Learn best practices for designing RESTful APIs that can grow with your application. We'll cover authentication, rate limiting, caching, and more.",
      tags: ["Node.js", "API", "Backend"],
      featured: true,
    },
    {
      title: "Modern CSS Techniques for 2024",
      date: "March 5, 2024",
      readTime: "6 min",
      category: "Design",
      excerpt: "Discover the latest CSS features like Container Queries, Cascade Layers, and CSS Grid subgrid that are changing how we build responsive layouts.",
      tags: ["CSS", "Design", "Frontend"],
      featured: false,
    },
    {
      title: "Understanding TypeScript Generics",
      date: "February 28, 2024",
      readTime: "7 min",
      category: "Web Development",
      excerpt: "TypeScript generics can seem complex at first, but they're incredibly powerful. This guide breaks down generics with practical examples.",
      tags: ["TypeScript", "Programming", "Tutorial"],
      featured: false,
    },
    {
      title: "Deploying Applications with Docker",
      date: "February 20, 2024",
      readTime: "10 min",
      category: "Backend",
      excerpt: "A comprehensive guide to containerizing your applications with Docker. Learn about images, containers, volumes, and docker-compose.",
      tags: ["Docker", "DevOps", "Deployment"],
      featured: false,
    },
    {
      title: "Designing Beautiful User Interfaces",
      date: "February 15, 2024",
      readTime: "6 min",
      category: "Design",
      excerpt: "Explore principles of great UI design including color theory, typography, spacing, and creating intuitive user experiences.",
      tags: ["UI/UX", "Design", "Interface"],
      featured: false,
    },
  ];

  const featuredNote = notes.find(note => note.featured);
  const regularNotes = notes.filter(note => !note.featured);

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl animate-pulse-glow">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Blog & Insights</span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight">
                Notes & 
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Articles
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Thoughts, tutorials, and insights about web development, design, and technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-background border-b sticky top-[72px] z-40 backdrop-blur-xl bg-background/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96 animate-fade-in-up">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12 bg-card shadow-sm border-border/50 focus:border-secondary transition-all"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 animate-fade-in-up animation-delay-200 w-full lg:w-auto justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-secondary to-accent text-white shadow-md"
                      : "bg-card text-card-foreground hover:bg-secondary/10 border border-border/50"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNote && (
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-8 animate-fade-in-up">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Featured Article</span>
            </div>
            
            <Card className="group overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-500 hover-lift border-0 animate-fade-in-up animation-delay-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-secondary via-accent to-secondary/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-white/90 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-lg border border-white/30">
                      {featuredNote.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredNote.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredNote.readTime} read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors mb-4 leading-tight">
                    {featuredNote.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {featuredNote.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNote.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20 flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="accent" size="lg" className="w-fit">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Notes Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary animate-fade-in-up">
              All Articles
            </h2>
            <Button variant="outline" size="sm" className="animate-fade-in-up">
              <Filter className="w-4 h-4 mr-2" />
              Sort By
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regularNotes.map((note, index) => (
              <Card
                key={index}
                className="group bg-card shadow-card hover:shadow-card-hover transition-all duration-500 hover-lift cursor-pointer animate-fade-in-up overflow-hidden border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-secondary/20 via-accent/20 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-secondary/60 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-secondary text-xs font-semibold rounded-lg border border-secondary/20">
                      {note.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{note.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{note.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-card-foreground group-hover:text-secondary transition-colors leading-tight">
                    {note.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {note.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {note.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20 flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button variant="outline" size="lg" className="hover-lift">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>
        
        <div className="container mx-auto max-w-3xl text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 animate-pulse-glow">
            <Mail className="w-10 h-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Subscribe to Newsletter
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Get the latest articles, tutorials, and insights delivered directly to your inbox every week
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 backdrop-blur-sm"
            />
            <Button size="lg" variant="hero" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap shadow-xl">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            No spam. Unsubscribe anytime.
          </p>
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
