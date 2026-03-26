import { Phone, Mail } from 'lucide-react';
import bgImg from 'figma:asset/af4916a7f56054a57cc37a47d7341b821360b489.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Airtech Cooling Solutions"
          className="w-full h-full object-cover opacity-10 blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <div className="text-4xl font-bold">
                <span className="text-[#4EABEB]">AIRTECH</span>
              </div>
              <div className="text-xs text-gray-600 text-center">COOLING SOLUTIONS</div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            We bring <span className="font-bold">comfort</span>, <span className="font-bold">quality</span>, and <span className="font-bold">safety</span> to every space we serve.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Specialized installation, maintenance, and mechanical services — fast, thorough, and safety-first.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#4EABEB] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0B4C8C] transition shadow-lg hover:shadow-xl mb-8"
          >
            GET A QUOTE
          </button>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <a 
              href="tel:0947-433-0628" 
              className="flex items-center gap-2 text-[#0B4C8C] hover:text-[#4EABEB] transition group"
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium">0947-433-0628</span>
            </a>
            <a 
              href="mailto:hvac.airtechcoolingsolutions@gmail.com" 
              className="flex items-center gap-2 text-[#0B4C8C] hover:text-[#4EABEB] transition group"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">hvac.airtechcoolingsolutions@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}