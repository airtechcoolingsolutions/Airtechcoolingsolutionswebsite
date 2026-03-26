import { CheckCircle2, Wind, Leaf, DollarSign, Users, ThumbsUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import technicianImg from 'figma:asset/647dbaf09bb1e47ff447bd87cc2b3178f4962b74.png';

const benefits = [
  {
    icon: Users,
    title: 'Skilled Technicians',
    description: 'Certified experts for all conditions'
  },
  {
    icon: CheckCircle2,
    title: 'Dependable Service',
    description: 'On time, done right, and guaranteed'
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Quality solutions at competitive prices'
  }
];

const features = [
  'Quality Service',
  'Honest Prices',
  'Eco-Friendly',
  'Budget-Friendly',
  'Expert Cooling',
  'Affordable Comfort that lasts'
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#4EABEB]">AIRTECH</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring comfort, quality, and safety to every space we serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Features */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                  <Wind className="w-full h-full text-[#4EABEB]" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                  <Wind className="w-full h-full text-[#4EABEB]" />
                </div>

                {/* AC Unit Image */}
                <div className="relative mb-6">
                  <img
                    src={technicianImg}
                    alt="Airtech Technician at Work"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Feature Badges */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="text-[#4EABEB]" size={20} />
                        <p className="text-sm font-medium text-gray-700">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-[#4EABEB] transition group"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#4EABEB] to-[#0B4C8C] text-white w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-[#0B4C8C] to-[#4EABEB] text-white p-8 rounded-2xl shadow-xl">
                <ThumbsUp className="mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Your Comfort, Our Priority!</h3>
                <p className="leading-relaxed">
                  We are committed to delivering exceptional service that ensures your complete satisfaction. From consultation to installation and maintenance, we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}