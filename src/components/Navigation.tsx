import { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Shop Online', href: '#collections' },
    { label: 'Design Your Own Kaftan', href: '#custom' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`nav-luxury transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat' }}>
                Afinis Caftan
              </h1>
              <p className="text-xs text-secondary font-medium tracking-wider">
                PROUDLY MOROCCAN, TRULY INTERNATIONAL
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-deep-gray hover:text-secondary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="btn-luxury">
              Showroom
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-deep-gray hover:text-secondary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="btn-luxury w-full">
                  Showroom
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;