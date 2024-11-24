import React from 'react';
import { MessageSquare, TrendingUp, Users, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './GraphicsDesign.module.css';

const SocialMediaPage = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
      keyPoints: [
        "Custom social posts",
        "Content calendars",
        "Brand voice development"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven strategies to expand your social media presence.",
      keyPoints: [
        "Audience analysis",
        "Competitor research",
        "Performance tracking"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture an engaged social media community.",
      keyPoints: [
        "Comment management",
        "Audience engagement",
        "Crisis management"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Calendar,
      title: "Campaign Planning",
      description: "Strategic campaigns that drive results and engagement.",
      keyPoints: [
        "Campaign strategy",
        "Content scheduling",
        "Performance analysis"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const projectSections = [
    {
      title: "Instagram Management",
      images: [
        "/social/instagram/i1.jpg",
        "/social/instagram/i2.jpg",
        "/social/instagram/i3.jpg",
        "/social/instagram/i4.jpg",
        "/social/instagram/i5.jpg",
        "/social/instagram/i6.jpg",
      ],
      direction: "left",
      type: "banner"
    },
    {
      title: "Facebook Campaigns",
      images: [
        "/social/facebook/f1.jpg",
        "/social/facebook/f2.jpg",
        "/social/facebook/f3.jpg",
        "/social/facebook/f4.jpg",
        "/social/facebook/f5.jpg",
        "/social/facebook/f6.jpg",
      ],
      direction: "right",
      type: "banner"
    },
    {
      title: "Twitter Content",
      images: [
        "/social/twitter/t1.png",
        "/social/twitter/t2.png",
        "/social/twitter/t3.png",
        "/social/twitter/t4.png",
        "/social/twitter/t5.png",
        "/social/twitter/t6.png",
      ],
      direction: "left",
      type: "card"
    },
    {
      title: "LinkedIn Business",
      images: [
        "/social/linkedin/l1.jpg",
        "/social/linkedin/l2.jpg",
        "/social/linkedin/l3.jpg",
        "/social/linkedin/l4.jpg",
        "/social/linkedin/l5.jpg",
        "/social/linkedin/l6.jpg",
      ],
      type: "banner"
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
            <Share2 className="mx-auto w-20 h-20 text-blue-600 mb-6" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Social Media Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elevate your brand's social presence with strategic content and engagement.
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
            Our Portfolio
          </h2>
        </div>

        {projectSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
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

        {/* Stats Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Followers Gained", value: "500K+", icon: Users },
              { label: "Engagement Rate", value: "12.5%", icon: TrendingUp },
              { label: "Posts Created", value: "10K+", icon: MessageSquare },
              { label: "Happy Clients", value: "200+", icon: Calendar }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialMediaPage;