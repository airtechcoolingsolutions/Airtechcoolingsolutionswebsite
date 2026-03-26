import { Target, Eye, Compass } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What is <span className="text-[#4EABEB]">AIRTECH</span>?
            </h2>
          </div>

          {/* Three Columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Goal */}
            <div className="bg-gradient-to-br from-[#0B4C8C] to-[#4EABEB] text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Target size={24} />
                  <h3 className="text-2xl font-bold">OUR GOAL</h3>
                </div>
              </div>
              <p className="leading-relaxed">
                Our goal is to become <span className="font-bold">the top provider of mechanical works and engineering solutions</span> by innovating cutting-edge technologies and sustainable practices. We aim to <span className="font-bold">provide a comprehensive range of services</span>—from HVAC to mechanical works, fire protection, and plumbing—while ensuring the continuous development of our team, and exceptional customer experience. We deliver timely, efficient solutions that contribute to a more <span className="font-bold">sustainable and resilient future</span>.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-[#0B4C8C] to-[#4EABEB] text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Eye size={24} />
                  <h3 className="text-2xl font-bold">OUR VISION</h3>
                </div>
              </div>
              <p className="leading-relaxed">
                The premier provider of air conditioning and mechanical engineering solutions <span className="font-bold">trusted for excellence in design, mechanical systems, and fire protection</span>, and recognized for delivering <span className="font-bold">exceptional service, innovative solutions, and enduring value</span>.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-[#0B4C8C] to-[#4EABEB] text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Compass size={24} />
                  <h3 className="text-2xl font-bold">OUR MISSION</h3>
                </div>
              </div>
              <p className="leading-relaxed">
                To lead the transformation of the built environment <span className="font-bold">by delivering cutting-edge air conditioning, mechanical works, fire protection, and plumbing solutions</span>. We strive to enhance comfort, safety, and sustainability in every space we serve. We undertake an <span className="font-bold">unwavering commitment to quality</span> and <span className="font-bold">fostering innovation</span> through our commitment to <span className="font-bold">engineering excellence, ethical practices, and long-term value creation</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}