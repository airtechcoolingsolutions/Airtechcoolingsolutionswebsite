import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from 'figma:asset/af4916a7f56054a57cc37a47d7341b821360b489.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Trusted Brands', href: '#trusted-brands' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0B4C8C] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <a href="tel:0947-433-0628" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={16} />
              <span>0947-433-0628</span>
            </a>
            <a href="mailto:hvac.airtechcoolingsolutions@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={16} />
              <span className="hidden sm:inline">hvac.airtechcoolingsolutions@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="hidden lg:inline">1010 Bldg. F Lazatin Blvd., Brgy. Dolores, City of San Fernando, Pampanga 2000</span>
              <span className="lg:hidden">San Fernando, Pampanga</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Airtech Cooling Solutions Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[#4EABEB] text-lg leading-tight">AIRTECH</span>
              <span className="text-gray-900 font-bold text-xl leading-tight">COOLING SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#4EABEB] text-white px-6 py-2 rounded-full hover:bg-[#0B4C8C] transition">
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium text-left py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium text-left py-2">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium text-left py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-[#0B4C8C] transition font-medium text-left py-2">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#4EABEB] text-white px-6 py-2 rounded-full hover:bg-[#0B4C8C] transition text-left">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}