import React from 'react';
import { Triangle, Layout, Award, Layers, Palette, Users, Star, Brush, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './GraphicsDesign.module.css';

const GraphicsDesignPage = () => {
  const services = [
    {
      icon: Triangle,
      title: "Logo Design",
      description: "Create a unique brand identity with custom, memorable logo designs.",
      keyPoints: [
        "Custom vector illustrations",
        "Brand identity packages",
        "Logo variations & guidelines"
      ],
      color: "text-blue-400 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-gray-800"
    },
    {
      icon: Layout,
      title: "Banner Design",
      description: "Eye-catching banners that capture attention and drive engagement.",
      keyPoints: [
        "Social media banners",
        "Web advertising designs",
        "Event promotional materials"
      ],
      color: "text-purple-400 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-gray-800"
    },
    {
      icon: Award,
      title: "Brand Identity",
      description: "Develop a comprehensive visual brand language across all mediums.",
      keyPoints: [
        "Brand style guides",
        "Visual identity systems",
        "Brand collateral design"
      ],
      color: "text-green-400 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-gray-800"
    },
    {
      icon: Layers,
      title: "Marketing Materials",
      description: "Professional designs that elevate your marketing presence.",
      keyPoints: [
        "Brochure design",
        "Product catalogs",
        "Digital marketing assets"
      ],
      color: "text-indigo-400 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-gray-800"
    }
  ];

  const projectSections = [
    {
      title: "Youtube Thumbnail",
      images: [
        "/thumb/t0.png",
        "/thumb/t1.png",
        "/thumb/t2.png",
        "/thumb/t3.png",
        "/thumb/t4.png",
        "/thumb/t5.png",
        "/thumb/t6.png",
        "/thumb/t7.png",
      ],
      direction: "right",
      type: "banner"
    },
    {
      title: "Logo Design",
      images: [
        "/logo/l1.jpg",
        "/logo/l2.jpg",
        "/logo/l8.png",
        "/logo/l7.png",
        "/logo/l3.jpg",
        "/logo/l4.jpg",
        "/logo/l5.jpg",
        "/logo/l6.png",
      ],
      direction: "left",
      type: "logo"
    },
    {
      title: "Banner Showcase",
      images: [
        "/banner/b1.jpg",
        "/banner/b2.png",
        "/banner/b3.PNG",
        "/banner/b4.png",
        "/banner/b5.png",
        "/banner/b6.jpg",
        "/banner/b7.png",
      ],
      direction: "right",
      type: "banner"
    },
    {
      title: "Poster Gallery",
      images: [
        "/poster/p1.png",
        "/poster/p2.png",
        "/poster/p3.png",
        "/poster/p4.png",
        "/poster/p5.png",
        "/poster/p6.png",
      ],
      direction: "left",
      type: "poster"
    },
    {
      title: "Business Card Design",
      images: [
        "/card/c1.png",
        "/card/c2.png",
        "/card/c3.png",
        "/card/c4.png",
        "/card/c5.png",
        "/card/c6.png",
      ],
      direction: "right",
      type: "card"
    }
  ];

  const impactStats = [
    {
      label: "Projects Delivered",
      value: "100+",
      icon: Brush,
      color: "text-blue-400 dark:text-blue-300"
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: Star,
      color: "text-yellow-400 dark:text-yellow-300"
    },
    {
      label: "Happy Clients",
      value: "80+",
      icon: Users,
      color: "text-green-400 dark:text-green-300"
    },
    {
      label: "Years Experience",
      value: "3+",
      icon: Clock,
      color: "text-purple-400 dark:text-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
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
            <Palette className="mx-auto w-20 h-20 text-blue-600 dark:text-blue-300 mb-6" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 bg-clip-text text-purple-800">
            Graphics Design Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your visual communication with our creative design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <div className="text-left pl-8">
                <ul className="list-disc space-y-2 text-gray-600 dark:text-gray-400">
                  {service.keyPoints.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Our Portfolio
          </h2>
        </div>

        {projectSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
              {section.title}
            </h2>
            <div className={styles.sliderContainer}>
              <div className={`${styles.sliderWrapper} ${section.direction === 'right' ? styles.right : ''}`}>
                {section.images.concat(section.images).map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className={`${styles.sliderItem} ${styles[section.type]}`}
                  >
                    <img
                      src={image}
                      alt={`${section.title} project ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Our Impact Section */}
        <div className="mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 dark:text-gray-100"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                </motion.div>
                <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GraphicsDesignPage;
