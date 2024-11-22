import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, services, link, color }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
      <Icon className={`w-12 h-12 ${color} mb-4`} />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-gray-600 mb-6 space-y-2">
        {services.map((service, index) => (
          <li key={index}>• {service}</li>
        ))}
      </ul>
      <a href={link} className={`inline-flex items-center ${color} hover:gap-2 transition-all`}>
        Learn More <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};

export default ServiceCard;