import React from 'react';
import { Camera, Scissors, Image, Wand2, Brush, Sparkles } from 'lucide-react';

const PhotoEditingPage = () => {
  const services = [
    {
      icon: Scissors,
      title: "Photo Retouching",
      description: "Professional touch-ups to enhance your images, removing imperfections and highlighting natural beauty."
    },
    {
      icon: Image,
      title: "Image Restoration",
      description: "Breathe new life into old, damaged, or faded photographs with our advanced restoration techniques."
    },
    {
      icon: Sparkles,
      title: "Object Removal/Addition",
      description: "Seamlessly remove unwanted objects or add elements to create the perfect composition."
    },
    {
      icon: Brush,
      title: "Color Correction",
      description: "Adjust color balance, saturation, and tone to make your images pop with vibrant precision."
    },
    {
      icon: Wand2,
      title: "Background Enhancement",
      description: "Transform backgrounds to create the perfect setting for your images."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <Camera className="mx-auto w-16 h-16 text-blue-600 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Photo Editing Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Elevate your visual content with our professional photo editing services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <service.icon className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoEditingPage;