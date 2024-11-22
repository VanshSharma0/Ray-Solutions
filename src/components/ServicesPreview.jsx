// components/ServicesPreview.js
import React from 'react';
import { Camera, Palette, Share2, ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Photo Editing Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
            <Camera className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Photo Editing</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Photo Retouching</li>
              <li>• Image Restoration</li>
              <li>• Object Removal/Addition</li>
              <li>• Color Correction</li>
              <li>• Background Enhancement</li>
            </ul>
            <a href="/photo-editing" className="inline-flex items-center text-blue-600 hover:gap-2 transition-all">
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Graphics Design Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
            <Palette className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Graphics Design</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Logo Design</li>
              <li>• Thumbnail Creation</li>
              <li>• Brand Identity Design</li>
              <li>• Marketing Materials</li>
              <li>• Social Media Graphics</li>
            </ul>
            <a href="/graphics-design" className="inline-flex items-center text-purple-600 hover:gap-2 transition-all">
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Social Media Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
            <Share2 className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Growth Strategy</li>
              <li>• Content Creation</li>
              <li>• Community Management</li>
              <li>• Analytics & Reporting</li>
              <li>• Campaign Planning</li>
            </ul>
            <a href="/social-media" className="inline-flex items-center text-indigo-600 hover:gap-2 transition-all">
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
