import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Users, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PortfolioModal from '@/components/PortfolioModal';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'analytics', name: 'Data Analytics' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Inventory Management System",
      category: "ml",
      description: "Revolutionary AI-powered inventory system that predicts stock levels with 95% accuracy, reducing waste by 40% and increasing profit margins by 25%.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      results: {
        accuracy: "95%",
        wasteReduction: "40%",
        profitIncrease: "25%"
      },
      client: "RetailMax",
      duration: "6 months",
      status: "Completed",
      featured: true
    },
    {
      id: 2,
      title: "Frictionless Checkout Vision System",
      category: "vision",
      description: "Computer vision solution enabling customers to walk out with items without traditional checkout, increasing customer satisfaction by 60%.",
      image: "/api/placeholder/600/400",
      technologies: ["OpenCV", "Python", "React Native", "AWS"],
      results: {
        satisfaction: "60%",
        speedIncrease: "300%",
        accuracy: "99.2%"
      },
      client: "Fashion Forward",
      duration: "4 months",
      status: "Completed",
      featured: true
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      category: "analytics",
      description: "Comprehensive analytics platform providing real-time insights into customer behavior, sales trends, and market opportunities.",
      image: "/api/placeholder/600/400",
      technologies: ["D3.js", "Node.js", "MongoDB", "Docker"],
      results: {
        decisionSpeed: "3x faster",
        accuracy: "92%",
        roi: "180%"
      },
      client: "TechMart",
      duration: "5 months",
      status: "Completed",
      featured: false
    },
    {
      id: 4,
      title: "AI Security Framework",
      category: "security",
      description: "Comprehensive security solution protecting AI models from adversarial attacks while ensuring GDPR compliance and data privacy.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "Kubernetes", "Redis"],
      results: {
        threatDetection: "99.8%",
        compliance: "100%",
        incidents: "0"
      },
      client: "SecureRetail",
      duration: "3 months",
      status: "Completed",
      featured: false
    },
    {
      id: 5,
      title: "Customer Behavior Analysis Platform",
      category: "ml",
      description: "Advanced ML models analyzing customer patterns to optimize store layouts, product placement, and marketing strategies.",
      image: "/api/placeholder/600/400",
      technologies: ["Scikit-learn", "Pandas", "Vue.js", "MySQL"],
      results: {
        conversionRate: "35%",
        engagement: "50%",
        revenue: "28%"
      },
      client: "MegaStore",
      duration: "7 months",
      status: "In Progress",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Price Optimization Engine",
      category: "analytics",
      description: "Dynamic pricing system that adjusts product prices in real-time based on demand, competition, and inventory levels.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "Redis", "PostgreSQL"],
      results: {
        profitMargin: "22%",
        salesVolume: "18%",
        competitiveness: "45%"
      },
      client: "PriceSmart",
      duration: "4 months",
      status: "Completed",
      featured: true
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-blue-600">
                Our Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed retail businesses with cutting-edge AI solutions. Each project represents our commitment to innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most impactful AI solutions that have revolutionized retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-600 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                    <div className="text-6xl text-blue-600 opacity-60">📊</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.results).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </span>
                    </div>
                    <span className="text-green-600 font-medium">{project.status}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                      onClick={() => {
                        setSelectedProject(project.id);
                        setIsModalOpen(true);
                      }}
                    >
                      View Details <ArrowRight className="ml-2" size={14} />
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 p-2 sm:p-3">
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and All Projects */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              All Projects
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-600 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                    <div className="text-4xl text-blue-600 opacity-60">📈</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Key Result */}
                  <div className="mb-4">
                    {Object.entries(project.results).slice(0, 1).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{project.client}</span>
                    <span className="text-green-600">{project.status}</span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    onClick={() => {
                      setSelectedProject(project.id);
                      setIsModalOpen(true);
                    }}
                  >
                    View Project <ArrowRight className="ml-2" size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-gray-800">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's create something amazing together. Our team is ready to transform your retail business with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              Start Your Project <ArrowRight className="ml-2" size={24} />
            </Button>
            <Button variant="outline" className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        projectId={selectedProject || 1}
      />
    </div>
  );
};

export default Portfolio;
