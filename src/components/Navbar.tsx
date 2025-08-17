import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "@/assets/photos/logo-nobg.png"; // Adjust the import path as necessary

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: t('nav.home'), isRoute: true },
    { href: "/about", label: t('nav.about'), isRoute: true },
    { href: "/#services", label: t('nav.services'), isRoute: false },
    { href: "/gallery", label: t('nav.gallery'), isRoute: true },
    { href: "/#contact", label: t('nav.contact'), isRoute: false },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    if (!isRoute && href.includes('#')) {
      const sectionId = href.split('#')[1];
      if (location.pathname !== '/') {
        // Navigate to home page first using React Router
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Increased timeout for better reliability
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" style={{ width: '100vw' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-14 w-14" src={Logo} alt="Pelep Construction" />
            <span className="text-xl font-bold text-foreground">Pelep Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.isRoute);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              )
            ))}
            <LanguageSwitcher />
            <a
              href="https://wa.me/+32485982509"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button
                style={{ backgroundColor: "#25D366", color: "#fff" }}
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.37-1.67A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.09-1.39l-.36-.21-3.78 1 1-3.67-.24-.38A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.19 2.09 3.19 5.07 4.34.71.24 1.26.38 1.69.49.71.18 1.36.16 1.87.1.57-.07 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                </svg>
                {t('nav.getQuote')}
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.isRoute);
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            )
              ))}
              <div className="px-3 py-2">
            <a
              href="https://wa.me/+32485982509"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                style={{ backgroundColor: "#25D366", color: "#fff" }}
                className="flex items-center gap-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.37-1.67A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.09-1.39l-.36-.21-3.78 1 1-3.67-.24-.38A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.19 2.09 3.19 5.07 4.34.71.24 1.26.38 1.69.49.71.18 1.36.16 1.87.1.57-.07 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                </svg>
                {t('nav.getQuote')}
              </Button>
            </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Scroll to top when clicking the logo
const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

export default Navbar;