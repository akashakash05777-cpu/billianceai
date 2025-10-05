import React from 'react';
import { Brain, Target, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Brain, value: "50+", label: "AI Models Deployed", color: "from-purple-500 to-pink-500" },
    { icon: Target, value: "95%", label: "Accuracy Rate", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { icon: Award, value: "3", label: "Years Experience", color: "from-yellow-500 to-orange-500" }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of AI technology to create solutions that were previously impossible, always staying ahead of industry trends.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Every solution we build prioritizes data security and ethical AI practices, ensuring our clients' information remains protected.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We don't just build technology; we build relationships. Every project is tailored to our client's unique needs and goals.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Our solutions are designed for speed and efficiency, delivering results that exceed expectations and drive real business value.",
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
                About BillianceAI
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We are pioneers in retail AI transformation, combining cutting-edge machine learning with real-world business solutions to revolutionize how retailers operate, analyze, and grow.
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
                    Founded in 2022, BillianceAI emerged from a simple yet powerful vision: to bridge the gap between artificial intelligence and retail reality. Our founders, a team of passionate data scientists and retail experts, recognized that the retail industry was ripe for transformation.
                  </p>
                  <p>
                    We started with a mission to democratize AI for retailers of all sizes. What began as a small team of six specialists has grown into a comprehensive AI solutions provider, serving clients across multiple retail verticals.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of retail AI innovation, helping businesses not just survive but thrive in an increasingly competitive digital landscape.
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
              The principles that guide everything we do and every solution we create.
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
                "To empower retailers with intelligent AI solutions that transform data into actionable insights, 
                optimize operations, and drive sustainable growth in an ever-evolving digital marketplace."
              </p>
              <div className="text-blue-600 font-semibold text-lg">
                — The BillianceAI Team
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
