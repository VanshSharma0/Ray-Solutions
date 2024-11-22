// components/CTASection.js
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl mb-8">Let's create something amazing together!</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:contact@navsdigital.com" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <Mail className="w-5 h-5" />
            Email Us
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
