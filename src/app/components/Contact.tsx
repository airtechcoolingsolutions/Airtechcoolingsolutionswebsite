import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CONNECT WITH US!
            </h2>
            <p className="text-xl text-gray-600">
              Get a free quote or schedule a service today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#0B4C8C] to-[#4EABEB] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-[#0B4C8C] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:0947-433-0628" className="text-lg hover:underline">
                        0947-433-0628
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white text-[#0B4C8C] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:hvac.airtechcoolingsolutions@gmail.com" className="text-lg hover:underline break-all">
                        hvac.airtechcoolingsolutions@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white text-[#0B4C8C] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-lg">
                        1010 Bldg. F Lazatin Blvd., Brgy. Dolores,<br />
                        City of San Fernando, Pampanga 2000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white text-[#0B4C8C] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Facebook</p>
                      <a 
                        href="https://www.facebook.com/Airtechcoolingsolutions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg hover:underline"
                      >
                        Airtech Cooling Solutions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white text-[#0B4C8C] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-lg">
                        Monday - Saturday: 8:00 AM - 5:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#4EABEB] text-white p-6 rounded-2xl text-center">
                <p className="text-2xl font-bold italic">
                  Your Comfort,<br />
                  Our Priority!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EABEB] focus:border-transparent outline-none transition"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EABEB] focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EABEB] focus:border-transparent outline-none transition"
                    placeholder="0912-345-6789"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EABEB] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="mechanical">Mechanical Services</option>
                    <option value="retail">Retail / Purchase</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EABEB] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4EABEB] to-[#0B4C8C] text-white py-4 rounded-lg font-medium text-lg hover:shadow-lg transition-shadow"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}