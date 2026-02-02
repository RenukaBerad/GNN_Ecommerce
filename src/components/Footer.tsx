import { Diamond, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Diamond className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Lumière Gems
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              Curating the world's most precious gemstones since 1892. Each piece
              in our collection is hand-selected for its exceptional beauty and
              unique energy.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Collection
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Gemstones
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Rare Stones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  By Zodiac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Certification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-glow mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Lumière Gems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
