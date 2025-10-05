import React from 'react';
import { Brain, Target, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About BillianceAI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are pioneers in retail AI transformation, combining cutting-edge machine learning with real-world business solutions to revolutionize how retailers operate, analyze, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-4`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
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
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Brain className="w-32 h-32 text-cyan-400 opacity-60" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.color} p-4 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Mission
            </h2>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                "To empower retailers with intelligent AI solutions that transform data into actionable insights, 
                optimize operations, and drive sustainable growth in an ever-evolving digital marketplace."
              </p>
              <div className="text-cyan-400 font-semibold text-lg">
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
