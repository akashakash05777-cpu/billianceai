import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Award, Code, Calendar, MapPin, Star, Users, BookOpen, TrendingUp, Briefcase, Trophy, Target, CheckCircle, Clock, User } from 'lucide-react';

const StudentPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'software', name: 'Software Dev' },
    { id: 'data', name: 'Data Analytics' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'iot', name: 'IoT' },
    { id: 'ai', name: 'AI & ML' }
  ];

  const studentProjects = [
    {
      id: 1,
      studentName: "Priya Sharma",
      category: "software",
      internshipDomain: "Software Development",
      duration: "8 Weeks",
      completionDate: "December 2024",
      projectTitle: "E-Commerce Platform with Payment Integration",
      description: "Built a full-stack e-commerce website with React, Node.js, and Stripe payment integration. Includes user authentication, product catalog, shopping cart, and order management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      image: "gradient-blue",
      achievements: [
        "Implemented secure payment gateway",
        "Built responsive UI with 95+ Lighthouse score",
        "Managed 100+ products with filtering"
      ],
      rating: 4.9,
      certificate: "Full-Stack Development Certificate",
      skills: ["Frontend Development", "Backend Development", "Database Design", "Payment Integration"],
      internshipOutcome: "Successfully completed 8-week internship with excellent performance"
    },
    {
      id: 2,
      studentName: "Rahul Verma",
      category: "data",
      internshipDomain: "Data Analytics",
      duration: "6 Weeks",
      completionDate: "January 2025",
      projectTitle: "Sales Analytics Dashboard",
      description: "Created an interactive Power BI dashboard analyzing 2 years of sales data for a retail company. Provided insights that led to 15% revenue increase.",
      technologies: ["Python", "Pandas", "Power BI", "SQL", "Excel"],
      image: "gradient-green",
      achievements: [
        "Analyzed 50,000+ transactions",
        "Created 15+ interactive visualizations",
        "Identified key revenue drivers"
      ],
      rating: 4.8,
      certificate: "Data Analytics Professional Certificate",
      skills: ["Data Analysis", "Business Intelligence", "Statistical Modeling", "Data Visualization"],
      internshipOutcome: "Delivered actionable insights that increased company revenue by 15%"
    },
    {
      id: 3,
      studentName: "Ananya Reddy",
      category: "cloud",
      internshipDomain: "Cloud & DevOps",
      duration: "8 Weeks",
      completionDate: "November 2024",
      projectTitle: "CI/CD Pipeline for Microservices",
      description: "Designed and implemented a complete CI/CD pipeline using Jenkins, Docker, and AWS. Automated deployment of microservices architecture.",
      technologies: ["AWS", "Docker", "Jenkins", "Kubernetes", "Terraform"],
      image: "gradient-purple",
      achievements: [
        "Reduced deployment time by 70%",
        "Automated testing and deployment",
        "Managed 5+ containerized services"
      ],
      rating: 5.0,
      certificate: "Cloud & DevOps Specialist Certificate",
      skills: ["Cloud Architecture", "Containerization", "CI/CD Pipelines", "Infrastructure as Code"],
      internshipOutcome: "Optimized deployment processes resulting in 70% time reduction"
    },
    {
      id: 4,
      studentName: "Arjun Patel",
      category: "security",
      internshipDomain: "Cybersecurity",
      duration: "6 Weeks",
      completionDate: "December 2024",
      projectTitle: "Network Security Audit Tool",
      description: "Developed a Python-based security audit tool to scan networks for vulnerabilities. Includes port scanning, vulnerability detection, and report generation.",
      technologies: ["Python", "Kali Linux", "Nmap", "Metasploit", "Wireshark"],
      image: "gradient-red",
      achievements: [
        "Scanned 100+ network endpoints",
        "Identified 25+ vulnerabilities",
        "Created detailed security reports"
      ],
      rating: 4.7,
      certificate: "Cybersecurity Professional Certificate",
      skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
      internshipOutcome: "Enhanced company security posture by identifying critical vulnerabilities"
    },
    {
      id: 5,
      studentName: "Sneha Kumar",
      category: "iot",
      internshipDomain: "IoT & Embedded Systems",
      duration: "8 Weeks",
      completionDate: "January 2025",
      projectTitle: "Smart Home Automation System",
      description: "Built an IoT-based smart home system using Raspberry Pi to control lights, temperature, and security remotely via mobile app.",
      technologies: ["Raspberry Pi", "Arduino", "MQTT", "Python", "React Native"],
      image: "gradient-indigo",
      achievements: [
        "Integrated 8+ sensors and actuators",
        "Built cross-platform mobile app",
        "Real-time monitoring dashboard"
      ],
      rating: 4.9,
      certificate: "IoT & Embedded Systems Certificate",
      skills: ["IoT Development", "Hardware Integration", "Mobile App Development", "Real-time Systems"],
      internshipOutcome: "Successfully deployed smart home solution with 99% uptime"
    },
    {
      id: 6,
      studentName: "Karthik Nair",
      category: "ai",
      internshipDomain: "AI & Machine Learning",
      duration: "8 Weeks",
      completionDate: "December 2024",
      projectTitle: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn for a telecom company with 87% accuracy using ensemble methods.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Jupyter"],
      image: "gradient-yellow",
      achievements: [
        "Achieved 87% prediction accuracy",
        "Trained on 10,000+ customer records",
        "Deployed model with Flask API"
      ],
      rating: 4.8,
      certificate: "AI & Machine Learning Professional Certificate",
      skills: ["Machine Learning", "Data Science", "Model Deployment", "Statistical Analysis"],
      internshipOutcome: "Developed predictive model that improved customer retention by 25%"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? studentProjects 
    : studentProjects.filter(project => project.category === selectedCategory);

  const gradients = {
    "gradient-blue": "from-blue-500 via-cyan-500 to-teal-500",
    "gradient-green": "from-green-500 via-emerald-500 to-teal-500",
    "gradient-purple": "from-purple-500 via-pink-500 to-rose-500",
    "gradient-red": "from-red-500 via-orange-500 to-amber-500",
    "gradient-indigo": "from-indigo-500 via-purple-500 to-pink-500",
    "gradient-yellow": "from-yellow-500 via-orange-500 to-red-500"
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="text-blue-600" size={18} />
              <span className="text-sm font-semibold text-blue-600">Student Showcase</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Student Projects
              </span>
              <br />
              <span className="text-gray-800">& Internship Work</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore real projects built by our students during their internships. These portfolios showcase the practical skills and industry experience gained through VEducate programs.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">480+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">6</div>
                <div className="text-sm text-gray-600">Tech Domains</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-1">4.8⭐</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Image/Gradient */}
                <div className={`relative h-56 bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="bg-white rounded h-1 opacity-50" style={{ width: `${Math.random() * 100}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 text-center p-6">
                    <Code className="text-white drop-shadow-lg mx-auto mb-4" size={56} strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.projectTitle}</h3>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-bold text-gray-800">{project.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Student Info */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{project.studentName.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{project.studentName}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase size={14} />
                        <span>{project.internshipDomain} Intern</span>
                      </div>
                    </div>
                  </div>

                  {/* Internship Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} className="text-blue-600" />
                      <span>{project.completionDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp size={14} className="text-green-600" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Achievements</h5>
                    <div className="space-y-1.5">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Award className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-xs text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Elements */}
                  <div className="space-y-3">
                    {/* Certificate Badge */}
                    <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">{project.certificate}</span>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 3).map((skill, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.skills.length - 3} more</span>
                      )}
                    </div>
                    
                    {/* Internship Outcome */}
                    <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                      <Trophy className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-xs text-green-800">{project.internshipOutcome}</span>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our internship programs and create industry-level projects that showcase your skills to future employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/internships'}
            >
              Apply for Internship
            </Button>
            <Button 
              className="text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold bg-blue-500 text-white hover:bg-blue-400 border-2 border-white transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentPortfolio;

