import { ImageWithFallback } from './figma/ImageWithFallback';
import auxLogo from 'figma:asset/b69ba414c92b5d78795c23ab46c58d580d21b7a2.png';
import daikinLogo from 'figma:asset/a95d294ad851420007b4eb63c92aa7792bf06c66.png';
import carrierLogo from 'figma:asset/1392e67e8060a9a798df700fb1f18ded56210b6f.png';
import mideaLogo from 'figma:asset/eea25f032de6616acccd4dbcd8c8350603c061dd.png';
import matrixLogo from 'figma:asset/95def2ea1ab000e2daffcd0a7bae958e79c87c14.png';

const brands = [
  { name: 'AUX', logo: auxLogo },
  { name: 'Daikin', logo: daikinLogo },
  { name: 'Carrier', logo: carrierLogo },
  { name: 'Midea', logo: mideaLogo },
  { name: 'Matrix', logo: matrixLogo }
];

export function Brands() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0B4C8C] to-[#4EABEB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted Brands We Service
          </h2>
          <p className="text-white text-lg opacity-90">
            We work with top-quality air conditioning brands
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl px-8 py-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform flex items-center justify-center min-w-[180px] min-h-[100px]"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className="max-w-[200px] max-h-[80px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}