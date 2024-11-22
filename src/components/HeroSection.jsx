import React from 'react';
import { Camera, Palette, Share2, Linkedin, GitHub, Mail, Phone, MapPin } from 'lucide-react';

// Profile Image Component
const ProfileImage = () => (
  <div className="flex justify-center mb-6">
    <img 
      src="/api/placeholder/400/400" 
      alt="Nav's Professional Headshot" 
      className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
    />
  </div>
);
const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <ProfileImage />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Nav [Your Last Name]
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Digital Solutions Specialist | Creative Professional
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Passionate digital creative with expertise in photo editing, graphic design, 
          and social media management. Transforming digital visions into compelling visual stories.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 hover:text-blue-800">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-800 hover:text-black">
            <GitHub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
