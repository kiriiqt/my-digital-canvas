import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "/notes", label: "Notes" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-heading font-bold text-primary hover:text-secondary transition-colors group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              isScrolled ? 'bg-gradient-to-br from-secondary to-accent' : 'bg-white/10'
            }`}>
              <Code className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="group-hover:translate-x-1 transition-transform">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.to 
                    ? "text-secondary bg-secondary/10" 
                    : "text-foreground hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="accent" 
              size="sm"
              className="ml-2"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all ${
              isMobileMenuOpen ? 'bg-secondary/10' : 'hover:bg-muted'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-secondary" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-5 py-3 rounded-lg font-medium transition-all ${
                  location.pathname === link.to 
                    ? "text-secondary bg-secondary/10" 
                    : "text-foreground hover:text-secondary hover:bg-secondary/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="accent" 
              className="w-full mt-4"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
