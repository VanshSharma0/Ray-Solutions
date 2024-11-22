import React from 'react';
import { Camera, Palette, Share2 } from 'lucide-react';
import ServiceCard from './ServiceCard';

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

export default ServicesSection;