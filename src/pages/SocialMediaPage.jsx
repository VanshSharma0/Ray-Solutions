import React from 'react';
import { Share2, Users, MessageCircle, BarChart2, Target } from 'lucide-react';

const SocialMediaPage = () => {
  const services = [
    {
      icon: Users,
      title: "Audience Growth",
      description: "Implement strategic growth tactics to expand your social media following."
    },
    {
      icon: MessageCircle,
      title: "Content Creation",
      description: "Develop engaging, platform-specific content that resonates with your audience."
    },
    {
      icon: BarChart2,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into your social media performance and engagement."
    },
    {
      icon: Target,
      title: "Campaign Planning",
      description: "Design targeted social media campaigns to achieve your business objectives."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <Share2 className="mx-auto w-16 h-16 text-indigo-600 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Social Media Management</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Elevate your online presence with our comprehensive social media management services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <service.icon className="mx-auto w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaPage;