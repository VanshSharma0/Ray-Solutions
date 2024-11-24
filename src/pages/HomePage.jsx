import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Camera, Palette, Share2, Linkedin, Github, Mail, Phone, MapPin, Award, Briefcase, Globe, Copy, Check, Moon, Sun } from "lucide-react";
import { motion } from 'framer-motion';

// Dark Mode Toggle Component
const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDark(!isDark);
  };

  // return (
  //   <motion.button
  //     whileHover={{ scale: 1.1 }}
  //     whileTap={{ scale: 0.9 }}
  //     onClick={toggleDarkMode}
  //     className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg z-50"
  //   >
  //     {isDark ? (
  //       <Sun className="w-6 h-6 text-yellow-500" />
  //     ) : (
  //       <Moon className="w-6 h-6 text-gray-700" />
  //     )}
  //   </motion.button>
  // );
};

const ProfileImage = () => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      type: "spring", 
      stiffness: 260, 
      damping: 20,
      duration: 0.5 
    }}
    className="flex justify-center mb-6"
  >
    <motion.img 
      src="/self.png" 
      alt="Professional Headshot" 
      whileHover={{ 
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.3 }
      }}
      className="w-52 h-52 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-xl"
    />
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, color, link, services }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 transform transition hover:scale-105 hover:shadow-2xl group backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90"
  >
    <motion.div 
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center mb-4 ${color}`}
    >
      <div className={`p-3 rounded-full ${color} bg-opacity-20 mr-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold dark:text-white">{title}</h3>
    </motion.div>
    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
      {services.map((service, index) => (
        <motion.li 
          key={index} 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center"
        >
          <span className="mr-2 text-green-500">✓</span>
          {service}
        </motion.li>
      ))}
    </ul>
    <motion.a 
      href={link}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
    >
      Learn More
    </motion.a>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern dark:opacity-5"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ProfileImage />
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-pink-500">
          Nav's Digital Solutions
        </h1>
        <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
          Digital Solutions Specialist | Creative Professional
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transforming digital landscapes through innovative photo editing, compelling graphic design, and strategic social media management.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/vansh-sharma0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/VanshSharma0?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">
            <Github className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Updated ServicesSection with subtle animations and dark mode
const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Photo Editing",
      color: "text-blue-600 dark:text-blue-400",
      link: "/photo-editing",
      services: [
        "Professional Photo Retouching",
        "Advanced Image Restoration",
        "Precision Object Manipulation",
        "Professional Color Grading",
        "Digital Background Enhancement"
      ]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      color: "text-purple-600 dark:text-purple-400",
      link: "/graphics-design",
      services: [
        "Strategic Logo Development",
        "Engaging Thumbnail Creation",
        "Comprehensive Brand Identity",
        "Targeted Marketing Collaterals",
        "Dynamic Social Media Graphics"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      color: "text-indigo-600 dark:text-indigo-400",
      link: "/social-media",
      services: [
        "Comprehensive Growth Strategy",
        "High-Impact Content Creation",
        "Proactive Community Engagement",
        "Advanced Performance Analytics",
        "Integrated Campaign Planning"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Professional Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Updated ResumeSection with enhanced dark mode support
const ResumeSection = () => {
  const experiences = [
    {
      title: "Digital Creative Freelancer",
      company: "Independent Consulting",
      duration: "Jan 2023 - Present",
      location: "Remote",
      color: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-600 dark:border-blue-400",
      achievements: [
        "Delivered premium photo editing and graphic design services to 50+ high-profile clients",
        "Implemented targeted social media strategies, achieving a 40% increase in client engagement",
        "Developed comprehensive brand identities and marketing materials for emerging businesses",
        "Managed end-to-end digital marketing projects with 95% client satisfaction rate"
      ]
    },
    {
      title: "Marketing Assistant",
      company: "PALIO Marketing Agency",
      duration: "Jun 2021 - May 2023",
      location: "New York, NY",
      color: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-600 dark:border-blue-400",
      achievements: [
        "Orchestrated multi-channel social media campaigns with measurable impact",
        "Collaborated on graphic design projects, producing visually compelling content",
        "Conducted in-depth marketing analytics and prepared comprehensive performance reports",
        "Supported senior marketing team in developing strategic communication plans"
      ]
    },
    {
      title: "Digital Content Creator",
      company: "Creative Media Solutions",
      duration: "Jan 2020 - May 2021",
      location: "San Francisco, CA",
      color: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-600 dark:border-blue-400",
      achievements: [
        "Produced high-engagement social media content for tech startup clients",
        "Developed visual storytelling strategies across multiple digital platforms",
        "Managed content calendar and maintained consistent brand messaging",
        "Implemented A/B testing to optimize content performance and user engagement"
      ]
    },
    {
      title: "Graphic Design Intern",
      company: "Urban Design Studio",
      duration: "Jul 2019 - Dec 2019",
      location: "Chicago, IL",
      color: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-600 dark:border-blue-400",
      achievements: [
        "Assisted senior designers in creating comprehensive branding packages",
        "Learned and applied advanced Adobe Creative Suite techniques",
        "Contributed to multiple award-winning design projects",
        "Developed skills in client communication and project management"
      ]
    }
    // ... (other experiences remain the same, just add dark: variants to colors)
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 ${exp.borderColor} hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-6 h-6 mr-3 ${exp.color}`} />
                <h3 className={`text-2xl font-semibold ${exp.color}`}>{exp.title}</h3>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700 dark:text-gray-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  {exp.company} | {exp.duration}
                </p>
                <span className="text-gray-600 dark:text-gray-400 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  {exp.location}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li 
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: achIndex * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Updated ContactSection with dark mode support
const ContactSection = () => {
  const [copyStatus, setCopyStatus] = useState({
    email: false,
    phone: false
  });

  const handleCopyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [type]: false }));
      }, 2000);
    });
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6 drop-shadow-lg"
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's collaborate and transform your digital vision into a compelling reality. Reach out today!
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <a 
              href="mailto:vanished934@gmail.com" 
              className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold shadow-lg"
            >
              <Mail className="w-6 h-6" />
              Email Consultation
            </a>
            <button 
              onClick={() => handleCopyToClipboard('vanished934@gmail.com', 'email')}
              className="text-xs mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copyStatus.email ? (
                <span className="flex items-center justify-center text-green-300">
                  <Check className="w-4 h-4 mr-1" /> Copied!
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Copy className="w-4 h-4 mr-1" /> Copy Email
                </span>
              )}
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <a 
              href="tel:+919289890909" 
              className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Schedule Call
            </a>
            <button 
              onClick={() => handleCopyToClipboard('+919289890909', 'phone')}
              className="text-xs mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copyStatus.phone ? (
                <span className="flex items-center justify-center text-green-300">
                  <Check className="w-4 h-4 mr-1" /> Copied!
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Copy className="w-4 h-4 mr-1" /> Copy Number
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Nav's Digital Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <DarkModeToggle />
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomePage;