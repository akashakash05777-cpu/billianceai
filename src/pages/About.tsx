import React from 'react';
import { Brain, Target, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Users, value: "480+", label: "Students Trained", color: "from-purple-500 to-pink-500" },
    { icon: Brain, value: "25+", label: "Expert Instructors", color: "from-blue-500 to-cyan-500" },
    { icon: Target, value: "6+", label: "Core Learning Domains", color: "from-green-500 to-emerald-500" },
    { icon: Award, value: "8+", label: "College Collaborations", color: "from-yellow-500 to-orange-500" }
  ];

  const values = [
    {
      icon: Brain,
      title: "Practical Learning",
      description: "We believe in learning by doing. Every program combines live classes with hands-on projects, ensuring students gain real-world experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quality Mentorship",
      description: "Our certified instructors bring industry experience to the classroom, providing personalized guidance and support throughout the learning journey.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Student Success",
      description: "Every learner's growth is our priority. We provide structured internship tracks that build skills, confidence, and career-ready portfolios.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Industry Relevance",
      description: "Our curriculum is designed to meet current industry demands, ensuring students learn the tools and technologies employers are looking for.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="text-blue-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About VEducate
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A next-generation learning and internship-enablement platform founded in 2024 to bridge the gap between academic learning and real-world industry experience through live, mentor-led programs.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 shadow-lg"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, rotateY: 5 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-600 p-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2024, VEducate emerged from a simple yet powerful vision: to bridge the gap between academic learning and real-world industry experience. Our founders recognized that traditional education often leaves students unprepared for the demands of today's tech-driven workplace.
                  </p>
                  <p>
                    We started with a mission to democratize quality tech education for students across India. What began as a pilot program with 50 students has grown into a comprehensive learning platform, serving 480+ students through live, mentor-led internship tracks.
                  </p>
                  <p>
                    Today, we're proud to collaborate with 8+ colleges and universities, helping students not just learn but gain hands-on experience that makes them career-ready from day one.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                    <Brain className="w-32 h-32 text-blue-600 opacity-60" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every learning experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 shadow-lg"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-blue-600 p-4 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Trusted by Leading Institutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 8+ colleges and universities that have partnered with VEducate for student success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            {/* Partner College Placeholders */}
            {['SRMIST', 'VIT Chennai', 'Anna Univ', 'SRM AP', 'MIT Chennai', 'SSN College', 'Amrita', 'PSG Tech'].map((client, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-300 group-hover:text-blue-600 transition-colors">
                    {client.split('').slice(0, 2).join('')}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-600 mt-1 transition-colors">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Live & Interactive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4 Weeks</div>
              <div className="text-sm text-gray-600">Program Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Our Mission
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                "To equip every learner with industry-relevant skills, practical project exposure, and professional guidance 
                to become career-ready in today's tech-driven world through live, mentor-led internship programs."
              </p>
              <div className="text-blue-600 font-semibold text-lg">
                — The VEducate Team
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
