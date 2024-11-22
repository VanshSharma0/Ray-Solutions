import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <User className="mx-auto w-16 h-16 text-gray-600 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Nav's Digital Solutions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted partner in digital transformation and creative solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded with a passion for digital excellence, Nav's Digital Solutions has been helping businesses 
          and individuals elevate their digital presence through innovative design and strategic management.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>contact@navsdigital.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <span>123 Digital Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses and individuals by providing top-tier digital services 
              that transform creative visions into compelling digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;