import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Scissors, Image, Wand2, Brush, Sparkles } from 'lucide-react';

const PhotoEditingPage = () => {
  const services = [
    {
      icon: Scissors,
      title: "Professional Photo Retouching",
      description: "Precision touch-ups that enhance natural beauty and remove imperfections with expert care.",
      keyPoints: [
        "Ideal for professional headshots",
        "Wedding & event photo enhancement",
        "Model portfolio refinement"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Image,
      title: "Advanced Image Restoration",
      description: "Revive cherished memories with cutting-edge restoration techniques for vintage and damaged photos.",
      keyPoints: [
        "Family heirloom photo recovery",
        "Historical document preservation",
        "Antique photograph revival"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Sparkles,
      title: "Creative Object Manipulation",
      description: "Seamlessly add or remove elements to craft the perfect visual narrative with pixel-perfect precision.",
      keyPoints: [
        "Product photography editing",
        "Marketing visual composition",
        "Creative conceptual imagery"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Brush,
      title: "Artistic Color Grading",
      description: "Transform image mood and emotion through sophisticated color balance and tonal adjustments.",
      keyPoints: [
        "Cinematic photo styling",
        "Brand visual consistency",
        "Mood-driven photo transformation"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Wand2,
      title: "Background Transformation",
      description: "Create stunning visual environments that elevate your images from ordinary to extraordinary.",
      keyPoints: [
        "E-commerce product presentations",
        "Virtual set design",
        "Creative composition editing"
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  const projectSections = [
    {
      title: "Professional Photo Retouching",
      images: [
        "skinretouch/s1.jpeg",
        "skinretouch/s2.jpeg",
        "skinretouch/s3.jpg",
        "skinretouch/s4.jpeg",
        "skinretouch/s5.jpeg",
        "skinretouch/s6.png",
        "skinretouch/s7.jpeg",
      ],
      direction: "left"
    },
    {
      title: "Advanced Image Restoration",
      images: [
        "skinrestoration/s1.jpg",
        "skinrestoration/s2.jpg",
        "skinrestoration/s3.jpg",
        "skinrestoration/s4.jpg",
        "skinrestoration/s5.jpg",
        "skinrestoration/s6.jpg",
      ],
      direction: "right"
    },
    {
      title: "Creative Object Manipulation",
      images: [
        // "creative/c1.jpg",
        "creative/c2.jpg",
        "creative/c3.PNG",
        "creative/c4.PNG",
        "creative/c5.jpg",
        "creative/c6.jpg",
        "creative/c7.jpg",
      ],
      direction: "left"
    },
    {
      title: "Artistic Color Grading",
      images: [
        "color/c1.jpg",
        "color/c2.jpg",
        "color/c2.webp",
        "color/c3.jpg",
        "color/c4.jpg",
        "color/c5.jpg",
        "color/c6.jpg",
        "color/c7.jpg",
      ],
      direction: "right"
    },
    {
      title: "Background Transformation",
      images: [
        "bg/b1.webp",
        "bg/b2.jpg",
        "bg/b3.jpg",
        "bg/b4.jpg",
        "bg/b5.jpg",
        "bg/b6.jpg",
        "bg/b7.jpg",
      ],
      direction: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Camera className="mx-auto w-20 h-20 text-blue-600 mb-6" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Professional Photo Editing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your visual content with expert editing that brings your creative vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)"
              }}
              className={`${service.bgColor} rounded-xl shadow-lg p-8 text-center transition-all group`}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className={`mx-auto w-16 h-16 ${service.color} mb-6 group-hover:scale-110 transition-transform`} />
              </motion.div>
              <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              <div className="text-left pl-8">
                <ul className="list-disc space-y-2 text-gray-600">
                  {service.keyPoints.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            My Recent Projects
          </h2>
        </div>

        <div className="container mx-auto px-6">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {section.title}
              </h2>
              <div className="slider-container">
  <div
    className={`slider-wrapper ${section.direction === "left" ? "left" : "right"}`}
  >
    {section.images.concat(section.images).map((image, imageIndex) => (
      <img
        key={imageIndex}
        src={image}
        alt={`${section.title} project ${imageIndex + 1}`}
        className="slider-item"
      />
    ))}
  </div>
</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PhotoEditingPage;