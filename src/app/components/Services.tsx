import { Wind, Flame, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hvacImg from 'figma:asset/ffe7e806bd1800b4fbd798fb1e5ccda4b3496277.png';
import fireProtectionImg from 'figma:asset/c689b61df55de8fcde4bb6c6c753e5c04cbdd301.png';
import retailImg from 'figma:asset/a2bcff04dd000e15937ed06490d818125a528634.png';

const services = [
  {
    icon: Wind,
    title: 'HVAC',
    description: 'Comprehensive heating, ventilation, and air conditioning solutions for residential and commercial properties.',
    details: [
      'Installation',
      'Maintenance',
      'Repair',
      'System Design'
    ],
    image: fireProtectionImg,
    color: 'from-[#0B4C8C] to-[#1e5a9c]'
  },
  {
    icon: Flame,
    title: 'FIRE PROTECTION',
    description: 'Complete fire safety and protection systems to keep your property and people safe.',
    details: [
      'Fire Detection Systems',
      'Fire Suppression Systems',
      'Fire Safety Equipment',
      'Inspection & Maintenance'
    ],
    image: hvacImg,
    color: 'from-[#0B4C8C] to-[#1e5a9c]'
  },
  {
    icon: ShoppingBag,
    title: 'RETAIL',
    description: 'Our retail service offers a wide selection of high-quality equipment and accessories from trusted brands.',
    details: [
      'HVAC Equipment',
      'Fire Protection Equipment',
      'Safety Equipment',
      'Installation Materials'
    ],
    image: retailImg,
    color: 'from-[#0B4C8C] to-[#1e5a9c]'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#4EABEB]">AIRTECH</span> SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your cooling and mechanical needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First Row - 3 services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#4EABEB] text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B4C8C]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {service.details.length > 0 && (
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#4EABEB] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}