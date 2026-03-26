import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B4C8C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#4EABEB]">AIRTECH</h3>
              <p className="text-sm">COOLING SOLUTIONS</p>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              We bring comfort, quality, and safety to every space we serve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#4EABEB] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#4EABEB] transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#4EABEB] transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-[#4EABEB] transition">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#4EABEB] transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>HVAC</li>
              <li>Fire Protection</li>
              <li>Retail</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:0947-433-0628" className="hover:text-[#4EABEB] transition">
                  0947-433-0628
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:hvac.airtechcoolingsolutions@gmail.com" className="hover:text-[#4EABEB] transition break-all">
                  hvac.airtechcoolingsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  1010 Bldg. F Lazatin Blvd., Brgy. Dolores, City of San Fernando, Pampanga 2000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Airtech Cooling Solutions. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-75">
            Specialized installation, maintenance, and mechanical services.
          </p>
        </div>
      </div>
    </footer>
  );
}