import React from 'react';
import { Palette, Triangle, Layout, Award, Layers } from 'lucide-react';

const GraphicsDesignPage = () => {
  const services = [
    {
      icon: Triangle,
      title: "Logo Design",
      description: "Create a unique brand identity with custom, memorable logo designs."
    },
    {
      icon: Layout,
      title: "Thumbnail Creation",
      description: "Design eye-catching thumbnails that drive clicks and engagement."
    },
    {
      icon: Award,
      title: "Brand Identity",
      description: "Develop a comprehensive visual brand language across all mediums."
    },
    {
      icon: Layers,
      title: "Marketing Materials",
      description: "Design professional brochures, flyers, and digital marketing collateral."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <Palette className="mx-auto w-16 h-16 text-purple-600 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Graphics Design Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your visual communication with our creative design solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <service.icon className="mx-auto w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicsDesignPage;