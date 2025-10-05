import React, { useState } from 'react';
import { Brain, Cpu, Shield, Code, Database, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortfolioModal from '@/components/PortfolioModal';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      shortDesc: "Advanced ML models for retail intelligence",
      description: "Transform your retail data into predictive insights with our cutting-edge machine learning algorithms. From demand forecasting to customer behavior analysis, our ML solutions help you make data-driven decisions that drive growth.",
      features: [
        "Demand Forecasting Models",
        "Customer Segmentation",
        "Price Optimization",
        "Inventory Management",
        "Trend Prediction",
        "Real-time Analytics"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Cpu,
      title: "AI/IoT Computer Vision",
      shortDesc: "Smart vision systems for physical retail",
      description: "Bring AI-powered eyes to your physical stores with our computer vision solutions. Monitor customer behavior, track inventory, and enable frictionless checkout experiences that revolutionize in-store operations.",
      features: [
        "In-Store Analytics",
        "Shelf Monitoring",
        "Frictionless Checkout",
        "Customer Flow Analysis",
        "Loss Prevention",
        "Smart Inventory Tracking"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      shortDesc: "Protecting your AI infrastructure",
      description: "Secure your AI systems and customer data with our comprehensive cybersecurity solutions. We implement robust security measures to protect against adversarial attacks and ensure data privacy compliance.",
      features: [
        "AI Model Security",
        "Data Encryption",
        "Adversarial Attack Prevention",
        "Privacy Compliance",
        "Secure Data Pipelines",
        "Threat Detection"
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: Code,
      title: "Frontend Development",
      shortDesc: "Intuitive AI-powered interfaces",
      description: "Create beautiful, functional interfaces that make complex AI insights accessible to your team. Our frontend solutions transform raw data into actionable dashboards and user-friendly applications.",
      features: [
        "Interactive Dashboards",
        "Data Visualizations",
        "Real-time Monitoring",
        "Mobile Applications",
        "User Experience Design",
        "API Integration"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Database,
      title: "Data Analytics",
      shortDesc: "Transform raw data into insights",
      description: "Turn your retail data into a competitive advantage with our comprehensive analytics solutions. From data cleaning to advanced pattern recognition, we help you extract maximum value from your information assets.",
      features: [
        "Data Cleaning & Processing",
        "Pattern Recognition",
        "Statistical Analysis",
        "Business Intelligence",
        "Custom Reports",
        "Data Integration"
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-500/10 to-amber-500/10"
    },
    {
      icon: Sparkles,
      title: "Full-Stack Solutions",
      shortDesc: "End-to-end AI implementation",
      description: "Complete AI transformation from concept to deployment. Our full-stack solutions cover everything from strategy and development to deployment and maintenance, ensuring seamless integration with your existing systems.",
      features: [
        "Strategic Planning",
        "System Architecture",
        "End-to-End Development",
        "Deployment & Integration",
        "Training & Support",
        "Ongoing Maintenance"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "RetailMax",
      role: "CTO",
      content: "BillianceAI transformed our inventory management with their ML solutions. We've seen a 40% reduction in stockouts and 25% improvement in profit margins.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Fashion Forward",
      role: "CEO",
      content: "Their computer vision system revolutionized our customer experience. The frictionless checkout has increased customer satisfaction by 60%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "TechMart",
      role: "Operations Director",
      content: "The data analytics platform gave us insights we never knew existed. Our decision-making process is now 3x faster and more accurate.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-blue-600">
                Our Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to transform your retail business. From machine learning to computer vision, we provide the technology you need to stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 transition-all duration-500 hover:scale-105 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-500/10 ${
                    activeService === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  {/* Floating Icon Background */}
                  <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <IconComponent size={120} className="text-blue-600" />
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-600 p-3 md:p-4 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10 mb-4">{service.shortDesc}</p>

                  {/* Features List */}
                  <ul className="space-y-2 relative z-10">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-blue-600 p-5 mb-6">
                  {React.createElement(services[activeService].icon, { className: "w-full h-full text-white" })}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  {services[activeService].title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-gray-200 p-8">
                  <div className="w-full h-full flex items-center justify-center">
                    {React.createElement(services[activeService].icon, { className: "w-32 h-32 text-blue-600 opacity-60" })}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-600 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-gray-800">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can revolutionize your retail operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2" size={24} />
            </Button>
            <Button variant="outline" className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectId={1} // Default to first project for services
      />
    </div>
  );
};

export default Services;
