import React from 'react';
import PropTypes from 'prop-types';

import { Camera, Palette, Share2, Linkedin, Github, Mail, Phone } from "lucide-react";


const ProfileImage = () => (
  <div className="flex justify-center mb-6">
    <img 
      src="/api/placeholder/400/400" 
      alt="Professional Headshot" 
      className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
    />
  </div>
);

const ServiceCard = ({ icon: Icon, title, color, link, services }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
    <div className={`flex items-center mb-4 ${color}`}>
      <Icon className="w-10 h-10 mr-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-600">
      {services.map((service, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2 text-green-500">✓</span>
          {service}
        </li>
      ))}
    </ul>
    <a href={link} className="mt-4 block text-center text-blue-600 hover:underline">
      Learn More
    </a>
  </div>
);

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <ProfileImage />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Nav's Digital Solutions
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Digital Solutions Specialist | Creative Professional
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transforming your digital presence with professional photo editing, stunning graphic design, and strategic social media management.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 hover:text-blue-800">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-800 hover:text-black">
            <Github className="w-6 h-6" /> {/* Corrected reference */}
          </a>
        </div>
      </div>
    </section>
  );
};


const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Photo Editing",
      color: "text-blue-600",
      link: "/photo-editing",
      services: [
        "Photo Retouching",
        "Image Restoration",
        "Object Removal/Addition",
        "Color Correction",
        "Background Enhancement"
      ]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      color: "text-purple-600",
      link: "/graphics-design",
      services: [
        "Logo Design",
        "Thumbnail Creation",
        "Brand Identity Design",
        "Marketing Materials",
        "Social Media Graphics"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      color: "text-indigo-600",
      link: "/social-media",
      services: [
        "Growth Strategy",
        "Content Creation",
        "Community Management",
        "Analytics & Reporting",
        "Campaign Planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Digital Creative Freelancer</h3>
            <p className="text-gray-700 mb-2">Freelance | Jan 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Delivered high-quality photo editing and graphic design services to 50+ clients</li>
              <li>Managed social media strategies increasing client engagement by 40%</li>
              <li>Developed brand identities and marketing materials for small businesses</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Marketing Assistant</h3>
            <p className="text-gray-700 mb-2">XYZ Marketing Agency | Jun 2020 - Dec 2021</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Coordinated social media campaigns and content creation</li>
              <li>Assisted in graphic design and visual content development</li>
              <li>Analyzed marketing metrics and prepared performance reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensure `icon` is a valid React component
  title: PropTypes.string.isRequired,     // Ensure `title` is a string
  color: PropTypes.string.isRequired,     // Ensure `color` is a string
  link: PropTypes.string.isRequired,      // Ensure `link` is a string (URL)
  services: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure `services` is an array of strings
};

export default HomePage;