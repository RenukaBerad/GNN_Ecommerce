import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Package", path: "/package" },
    { name: "Offers", path: "/offers" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="w-full max-w-[1400px] bg-cream rounded-full px-6 py-3 flex justify-between items-center shadow-lg transition-all"
        style={{ fontFamily: 'Matter, sans-serif' }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[18px] font-normal transition-colors px-5 py-2 rounded-full ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                ? "text-maroon font-medium"
                : "text-black hover:text-maroon"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call Now Button */}
        <div className="hidden md:block">
          <a href="tel:+1234567890" className="flex items-center gap-2 bg-maroon text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-maroon/90 transition-colors">
            <Phone className="w-4 h-4 fill-current" />
            Call Now
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[100px] z-40 bg-cream/95 backdrop-blur-md p-4 md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4 items-center pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-medium ${location.pathname === link.path ? "text-maroon" : "text-black"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+1234567890" className="flex items-center gap-2 bg-maroon text-white px-6 py-3 rounded-full text-lg mt-4">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
