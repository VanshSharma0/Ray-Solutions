import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Scissors, Image, Wand2, Brush, Sparkles, Users, Star, Clock, Award } from 'lucide-react';

const PhotoEditingPage = () => {

  const impactStats = [
    {
      icon: Users,
      value: "100+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "text-blue-400",
      bgColor: "bg-blue-950/30"
    },
    {
      icon: Star,
      value: "400+",
      label: "Photos Edited",
      description: "Professional edits delivered",
      color: "text-purple-400",
      bgColor: "bg-purple-950/30"
    },
    {
      icon: Clock,
      value: "24h",
      label: "Average Turnaround",
      description: "Quick and efficient delivery",
      color: "text-green-400",
      bgColor: "bg-green-950/30"
    },
    {
      icon: Award,
      value: "99%",
      label: "Satisfaction Rate",
      description: "Excellence in every edit",
      color: "text-pink-400",
      bgColor: "bg-pink-950/30"
    }
  ];


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
      color: "text-blue-400",
      bgColor: "bg-blue-950/30"
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
      color: "text-purple-400",
      bgColor: "bg-purple-950/30"
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
      color: "text-green-400",
      bgColor: "bg-green-950/30"
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
      color: "text-indigo-400",
      bgColor: "bg-indigo-950/30"
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
      color: "text-pink-400",
      bgColor: "bg-pink-950/30"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Camera className="mx-auto w-20 h-20 text-blue-400 mb-6" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 text-purple-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Professional Photo Editing Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                boxShadow: "0 10px 15px rgba(0,0,0,0.3)"
              }}
              className={`${service.bgColor} rounded-xl shadow-lg p-8 text-center transition-all group border border-gray-800/50 backdrop-blur-sm`}
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
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="text-left pl-8">
                <ul className="list-disc space-y-2 text-gray-400">
                  {service.keyPoints.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            My Recent Projects
          </h2>
        </div>

        <div className="container mx-auto">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
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
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforming visions into reality, one photo at a time. Here's how we've made a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`${stat.bgColor} rounded-xl p-6 text-center border border-gray-800 shadow-lg`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <stat.icon className={`mx-auto w-12 h-12 ${stat.color}`} />
                </motion.div>
                <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </h3>
                <h4 className="text-xl font-semibold text-gray-200 mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <blockquote className="max-w-3xl mx-auto p-8 rounded-xl bg-gray-900/50 border border-gray-800">
              <p className="text-xl text-gray-300 italic mb-4">
                "The attention to detail and professional service has consistently exceeded our expectations. Their team has become an invaluable partner for all our photo editing needs."
              </p>
              <footer className="text-gray-400">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm">Creative Director, Visual Arts Studio</p>
              </footer>
            </blockquote>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project Today
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoEditingPage;