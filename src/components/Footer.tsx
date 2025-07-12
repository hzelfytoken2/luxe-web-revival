import { Crown, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Shop Kaftans', href: '#collections' },
    { label: 'Shop Djellabas', href: '#collections' },
    { label: 'Bridal Collection', href: '#collections' },
    { label: 'Custom Design', href: '#custom' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Story', href: '#about' },
    { label: 'Showroom', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ];

  const supportLinks = [
    { label: 'Size Guide', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Care Instructions', href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Mail className="h-5 w-5" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Crown className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                  Bouchra Filali Lahlou
                </h3>
                <p className="text-xs text-secondary tracking-wider">
                  PROUDLY MOROCCAN
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating exquisite Moroccan fashion with Swarovski crystals and traditional craftsmanship 
              for over 25 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Casablanca, Morocco</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+212 522 XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@bouchrafilalilahlou.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary" style={{ fontFamily: 'Montserrat' }}>
              Collections
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary" style={{ fontFamily: 'Montserrat' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary" style={{ fontFamily: 'Montserrat' }}>
              Support
            </h4>
            <ul className="space-y-3 mb-8">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold mb-4 text-secondary">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-primary-light/20 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Bouchra Filali Lahlou. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;