import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Diamond, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto glass-card px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Diamond className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-semibold tracking-wide text-foreground">
                Lumière Gems
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/") ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/collection"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/collection") ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                Collection
              </Link>
              <span className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                About
              </span>
              <span className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                Contact
              </span>
            </div>

            {/* CTA - Desktop */}
            <button className="hidden md:block px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Book Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive("/") ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/collection"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive("/collection") ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  Collection
                </Link>
                <span className="text-sm font-medium text-foreground/70 py-2 cursor-pointer">
                  About
                </span>
                <span className="text-sm font-medium text-foreground/70 py-2 cursor-pointer">
                  Contact
                </span>
                <button className="mt-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
