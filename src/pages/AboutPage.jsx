import React from 'react';
import { 
  User, 
  Heart, 
  Code,
  Palette,
  MessageCircle,
  Building,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Home,
  Download,
  ExternalLink,
  Camera,
  Copy 
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };
  
  const experiences = [
    {
      title: "Digital Creative Freelancer",
      company: "Independent Consulting",
      duration: "Jan 2023 - Present",
      location: "Remote",
      color: "text-blue-400",
      borderColor: "border-blue-400",
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
      color: "text-purple-400",
      borderColor: "border-purple-400",
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
      color: "text-green-400",
      borderColor: "border-green-400",
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
      color: "text-indigo-400",
      borderColor: "border-indigo-400",
      achievements: [
        "Assisted senior designers in creating comprehensive branding packages",
        "Learned and applied advanced Adobe Creative Suite techniques",
        "Contributed to multiple award-winning design projects",
        "Developed skills in client communication and project management"
      ]
    }
  ];

  const skills = [
    {
      icon: Camera,
      title: "Photo Editing",
      items: [
        "Professional Photo Retouching",
        "Advanced Image Restoration",
        "Creative Object Manipulation",
        "Artistic Color Grading",
        "Background Transformation"
      ],
      color: "text-blue-400",
      bgColor: "bg-gray-800"
    },
    {
      icon: Palette,
      title: "Graphics Design Skills",
      items: [
        "UI/UX Design",
        "Logo Design",
        "Banner Design",
        "Product catalogs"
      ],
      color: "text-purple-400",
      bgColor: "bg-gray-800"
    },
    {
      icon: MessageCircle,
      title: "Social Media Management",
      items: [
        "Project Management",
        "Client Relations",
        "Team Leadership",
        "Communication"
      ],
      color: "text-green-400",
      bgColor: "bg-gray-800"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", color: "text-blue-400" },
    { label: "Happy Clients", value: "50+", color: "text-purple-400" },
    { label: "Years Experience", value: "4+", color: "text-green-400" },
    { label: "Awards Won", value: "10+", color: "text-indigo-400" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20"
      >
        <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-48 h-48 rounded-full bg-gray-800 p-2 mx-auto mb-8"  // Increased from w-32 h-32
      >
        <img
          src="/self.png"
          alt="Profile"
      className="w-full h-full rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-xl"
        />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Vansh Sharma
      </motion.h1>
    </div>
  </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="container mx-auto px-6 -mt-12">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a creative professional with a passion for digital design and visual storytelling. 
              With over 4 years of experience in the creative industry, I've helped businesses and 
              individuals bring their visions to life through compelling design and strategic thinking.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My approach combines technical expertise with artistic vision to deliver results that 
              not only look great but also achieve business objectives. I believe in continuous learning 
              and staying updated with the latest design trends and technologies.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`${skill.bgColor} rounded-xl shadow-lg p-8 text-center`}
              >
                <skill.icon className={`w-16 h-16 mx-auto mb-6 ${skill.color}`} />
                <h3 className={`text-2xl font-bold mb-4 ${skill.color}`}>
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h3 className={`text-2xl font-bold ${experience.color} mb-2`}>
                  {experience.title}
                </h3>
                <p className="text-gray-400 mb-4">{experience.company}</p>
                <div className="flex items-center text-gray-500 space-x-4 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span>{experience.duration}</span>
                  <MapPin className="w-5 h-5" />
                  <span>{experience.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-12 text-white text-center"
        >
          <Heart className="mx-auto w-16 h-16 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and help bring creative visions to life.
            Let's create something amazing together!
          </p>
          <div className="about-page container mx-auto p-8">
      {/* Contact Information Section */}
      <section className="contact-info mb-12 bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
  <h2 className="text-3xl font-semibold text-white mb-8 text-center">Contact Information</h2>

  {/* Display Email and Phone with Copy to Clipboard */}
  <div className="flex flex-col gap-6">
    {/* Email */}
    <div className="flex items-center justify-between">
      <div className="inline-flex items-center gap-3 p-2 rounded-md ">
        <Mail className="text-teal-600 w-5 h-5" />
        <p className=" text-white font-medium">Vanished934@gmail.com</p>
      </div>
      <button
        onClick={() => copyToClipboard('Vanished934@gmail.com')}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Copy className="w-4 h-4 " />
        Copy
      </button>
    </div>

    {/* Phone */}
    <div className="flex items-center justify-between">
      <div className="inline-flex items-center gap-3 p-2 rounded-md">
        <Phone className="text-teal-600 w-5 h-5" />
        <p className="text-white font-medium">+91 9289890909</p>
      </div>
      <button
        onClick={() => copyToClipboard('+91 9289890909')}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Copy className="w-4 h-4" />
        Copy
      </button>
    </div>
  </div>

  {/* Email & Call Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
    <a 
      href="mailto:Vanished934@gmail.com" 
      className="flex items-center justify-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
    >
      <Mail className="w-5 h-5" />
      Email Me
    </a>
    <a 
      href="tel:+919289890909" 
      className="flex items-center justify-center gap-3 bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
    >
      <Phone className="w-5 h-5" />
      Call Me
    </a>
  </div>
</section>

    </div>

        </motion.section>
    </div>
  );
};

export default AboutPage;
