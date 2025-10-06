import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, TrendingUp as Chart, Cloud, Shield, Cpu, Brain, Briefcase, Calendar, Clock, Award, CheckCircle, Users, MapPin, ArrowRight, Send, X, Star, DollarSign, Target, Zap, Globe, MessageSquare, ExternalLink } from 'lucide-react';

// Detailed Internship Modal Component
const InternshipDetailModal = ({ isOpen, onClose, internship }: any) => {
  if (!isOpen || !internship) return null;

  const IconComponent = internship.icon;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div 
        className="relative bg-white border border-blue-200 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className={`relative h-48 bg-gradient-to-br ${internship.gradient} rounded-2xl mb-6 flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-white rounded h-1 opacity-50" style={{ width: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
          <IconComponent className="text-white drop-shadow-lg relative z-10" size={72} strokeWidth={1.5} />
          
          {/* Stipend Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-20">
            <DollarSign className="text-green-600" size={16} />
            <span className="text-sm font-bold text-gray-800">{internship.stipend}</span>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg z-20">
            <div className="flex items-center gap-1.5">
              <Clock className="text-gray-700" size={14} />
              <span className="text-xs font-semibold text-gray-800">{internship.duration}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{internship.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{internship.description}</p>
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <Clock className="text-blue-600 mx-auto mb-2" size={24} />
              <div className="text-sm text-blue-600 font-medium">Duration</div>
              <div className="text-gray-800 font-bold">{internship.duration}</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <MapPin className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm text-green-600 font-medium">Mode</div>
              <div className="text-gray-800 font-bold">{internship.mode}</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <DollarSign className="text-purple-600 mx-auto mb-2" size={24} />
              <div className="text-sm text-purple-600 font-medium">Stipend</div>
              <div className="text-gray-800 font-bold">{internship.stipend}</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <Users className="text-orange-600 mx-auto mb-2" size={24} />
              <div className="text-sm text-orange-600 font-medium">Batch Size</div>
              <div className="text-gray-800 font-bold">15-20</div>
            </div>
          </div>


          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="text-green-600" size={24} />
              Tech Stack & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {internship.skills.map((skill: string, index: number) => (
                <div key={index} className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                  <span className="text-sm font-medium text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Projects */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="text-purple-600" size={24} />
              Work Projects & Tasks
            </h3>
            <div className="space-y-3">
              {internship.projects?.map((project: any, index: number) => (
                <div key={index} className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{project.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Achievements */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="text-orange-600" size={24} />
              Work Achievements & Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {internship.outcomes.map((outcome: string, index: number) => (
                <div key={index} className="flex items-start gap-2 bg-orange-50 rounded-lg p-3">
                  <Award className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  // Scroll to application form
                  onClose();
                  setTimeout(() => {
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Apply for This Internship <Send size={20} />
              </Button>
              <Button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Internships = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    domain: '',
    preferredDuration: '',
    message: '',
    resume: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Internship Application: ${formData.domain} - ${formData.name}`;
    const body = `Hello VEducate Team,\n\nI would like to apply for the ${formData.domain} internship program.\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCollege: ${formData.college}\nYear of Study: ${formData.year}\nPreferred Duration: ${formData.preferredDuration}\n\nMessage:\n${formData.message}\n\nResume Link: ${formData.resume}\n\nLooking forward to hearing from you.\n\nBest regards,\n${formData.name}`;
    
    window.location.href = `mailto:veducate2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const internshipDomains = [
    {
      id: 1,
      title: "Software Development Internship",
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      description: "Build real-world web applications using HTML, CSS, JavaScript, React, and modern frameworks. Work on live projects with industry mentors and gain hands-on experience in full-stack development.",
      duration: "4-8 Weeks",
      mode: "Remote/Hybrid",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git", "RESTful APIs", "MongoDB", "Express.js"],
      outcomes: [
        "Build 3+ production-ready projects",
        "Learn version control with Git",
        "Deploy live web applications",
        "Internship completion certificate",
        "Portfolio-ready GitHub profile",
        "Industry mentorship experience"
      ],
      stipend: "₹5,000 - ₹15,000/month",
      curriculum: [
        {
          week: "1",
          title: "Frontend Fundamentals",
          description: "Learn HTML5, CSS3, and JavaScript basics with modern ES6+ features",
          topics: ["HTML5 Semantics", "CSS Grid & Flexbox", "JavaScript ES6+", "DOM Manipulation"]
        },
        {
          week: "2",
          title: "React Development",
          description: "Build interactive user interfaces with React.js and component architecture",
          topics: ["React Components", "State Management", "Props & Hooks", "Event Handling"]
        },
        {
          week: "3",
          title: "Backend Integration",
          description: "Connect frontend with backend APIs and learn server-side development",
          topics: ["RESTful APIs", "Node.js", "Express.js", "Database Integration"]
        },
        {
          week: "4",
          title: "Project Development",
          description: "Build a complete full-stack application from scratch",
          topics: ["Project Planning", "Version Control", "Testing", "Deployment"]
        }
      ],
      projects: [
        {
          name: "E-Commerce Platform",
          description: "Build a complete online shopping platform with user authentication, product catalog, and payment integration",
          technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"]
        },
        {
          name: "Task Management App",
          description: "Create a collaborative task management application with real-time updates",
          technologies: ["React.js", "Socket.io", "Express.js", "PostgreSQL"]
        },
        {
          name: "Portfolio Website",
          description: "Design and develop a professional portfolio website with modern animations",
          technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Vercel"]
        }
      ]
    },
    {
      id: 2,
      title: "Data Analytics Internship",
      icon: Chart,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      description: "Analyze real business data, create dashboards, and present insights using Excel, Python, and Power BI. Work with actual datasets from partner companies and learn to derive actionable business insights.",
      duration: "4-8 Weeks",
      mode: "Remote",
      skills: ["Excel", "Python", "Pandas", "Power BI", "SQL", "Data Visualization", "Statistics", "Machine Learning"],
      outcomes: [
        "Work on real business datasets",
        "Create interactive dashboards",
        "Build data analysis reports",
        "Internship completion certificate",
        "Business intelligence skills",
        "Data storytelling expertise"
      ],
      stipend: "₹3,000 - ₹12,000/month",
      curriculum: [
        {
          week: "1",
          title: "Data Fundamentals",
          description: "Learn data types, cleaning, and basic statistical analysis",
          topics: ["Data Types", "Data Cleaning", "Basic Statistics", "Excel Advanced Functions"]
        },
        {
          week: "2",
          title: "Python for Analytics",
          description: "Master Python libraries for data manipulation and analysis",
          topics: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
        },
        {
          week: "3",
          title: "Visualization & BI",
          description: "Create compelling visualizations and business intelligence dashboards",
          topics: ["Power BI", "Tableau", "Data Storytelling", "Dashboard Design"]
        },
        {
          week: "4",
          title: "Real Project",
          description: "Complete end-to-end data analysis project with business recommendations",
          topics: ["Project Planning", "Data Collection", "Analysis", "Presentation"]
        }
      ],
      projects: [
        {
          name: "Sales Performance Dashboard",
          description: "Analyze 2 years of sales data and create interactive dashboards with actionable insights",
          technologies: ["Power BI", "Excel", "SQL", "Python"]
        },
        {
          name: "Customer Behavior Analysis",
          description: "Study customer patterns and predict churn using machine learning techniques",
          technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"]
        }
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps Internship",
      icon: Cloud,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      description: "Deploy and manage applications on cloud platforms using AWS, Docker, and CI/CD pipelines. Learn infrastructure as code and modern deployment practices.",
      duration: "4-8 Weeks",
      mode: "Remote",
      skills: ["Linux", "Docker", "AWS", "CI/CD", "Kubernetes", "Terraform", "Jenkins", "GitLab"],
      outcomes: [
        "Deploy apps on AWS cloud",
        "Build CI/CD pipelines",
        "Containerize applications",
        "Internship completion certificate",
        "Cloud architecture knowledge",
        "DevOps best practices"
      ],
      stipend: "₹8,000 - ₹20,000/month",
      curriculum: [
        {
          week: "1",
          title: "Linux & Cloud Basics",
          description: "Master Linux commands and understand cloud computing fundamentals",
          topics: ["Linux Commands", "AWS Basics", "Cloud Architecture", "Virtualization"]
        },
        {
          week: "2",
          title: "Containerization",
          description: "Learn Docker and container orchestration with Kubernetes",
          topics: ["Docker", "Container Images", "Kubernetes", "Microservices"]
        },
        {
          week: "3",
          title: "CI/CD Pipelines",
          description: "Build automated deployment pipelines and infrastructure as code",
          topics: ["Jenkins", "GitLab CI", "Terraform", "Infrastructure as Code"]
        },
        {
          week: "4",
          title: "Production Deployment",
          description: "Deploy real applications to production with monitoring and scaling",
          topics: ["Production Deployment", "Monitoring", "Scaling", "Security"]
        }
      ],
      projects: [
        {
          name: "Microservices Deployment",
          description: "Deploy a multi-service application using Docker and Kubernetes with CI/CD",
          technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"]
        },
        {
          name: "Infrastructure Automation",
          description: "Automate cloud infrastructure provisioning using Terraform",
          technologies: ["Terraform", "AWS", "GitLab CI", "Monitoring"]
        }
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Internship",
      icon: Shield,
      gradient: "from-red-500 via-orange-500 to-amber-500",
      description: "Perform security audits, vulnerability assessments, and ethical hacking on real systems. Learn to protect organizations from cyber threats.",
      duration: "4-8 Weeks",
      mode: "Remote",
      skills: ["Network Security", "Ethical Hacking", "Kali Linux", "Penetration Testing", "OWASP", "Forensics"],
      outcomes: [
        "Conduct security audits",
        "Perform penetration testing",
        "Create security reports",
        "Internship completion certificate",
        "Security assessment skills",
        "Ethical hacking expertise"
      ],
      stipend: "Unpaid (Certificate + Experience)",
      curriculum: [
        {
          week: "1",
          title: "Security Fundamentals",
          description: "Learn cybersecurity basics and threat landscape",
          topics: ["Security Concepts", "Threat Modeling", "Risk Assessment", "Security Policies"]
        },
        {
          week: "2",
          title: "Network Security",
          description: "Understand network vulnerabilities and protection mechanisms",
          topics: ["Network Protocols", "Firewalls", "Intrusion Detection", "VPN"]
        },
        {
          week: "3",
          title: "Penetration Testing",
          description: "Learn ethical hacking techniques and vulnerability assessment",
          topics: ["Kali Linux", "Nmap", "Metasploit", "OWASP Top 10"]
        },
        {
          week: "4",
          title: "Security Audit",
          description: "Conduct comprehensive security audit and create reports",
          topics: ["Security Auditing", "Report Writing", "Remediation", "Compliance"]
        }
      ],
      projects: [
        {
          name: "Network Security Assessment",
          description: "Perform comprehensive security assessment of a network infrastructure",
          technologies: ["Kali Linux", "Nmap", "Wireshark", "Nessus"]
        },
        {
          name: "Web Application Security",
          description: "Identify and document vulnerabilities in web applications",
          technologies: ["OWASP ZAP", "Burp Suite", "SQLMap", "Custom Scripts"]
        }
      ]
    },
    {
      id: 5,
      title: "IoT & Embedded Systems Internship",
      icon: Cpu,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      description: "Build smart IoT devices and monitoring systems using Raspberry Pi, Arduino, and sensors. Create connected solutions for real-world problems.",
      duration: "4-8 Weeks",
      mode: "Remote/Hybrid",
      skills: ["Raspberry Pi", "Arduino", "Sensors", "MQTT", "IoT Protocols", "Python", "C++"],
      outcomes: [
        "Build IoT prototypes",
        "Integrate sensor systems",
        "Create monitoring dashboards",
        "Internship completion certificate",
        "Hardware programming skills",
        "IoT architecture knowledge"
      ],
      stipend: "₹4,000 - ₹10,000/month",
      curriculum: [
        {
          week: "1",
          title: "IoT Fundamentals",
          description: "Learn IoT concepts, protocols, and hardware basics",
          topics: ["IoT Architecture", "MQTT", "HTTP/CoAP", "Sensor Types"]
        },
        {
          week: "2",
          title: "Hardware Programming",
          description: "Program microcontrollers and interface with sensors",
          topics: ["Arduino", "Raspberry Pi", "GPIO", "Serial Communication"]
        },
        {
          week: "3",
          title: "Data Collection & Processing",
          description: "Collect sensor data and process it for insights",
          topics: ["Data Logging", "Data Processing", "Cloud Storage", "Analytics"]
        },
        {
          week: "4",
          title: "IoT Project",
          description: "Build complete IoT solution with dashboard and alerts",
          topics: ["Project Integration", "Dashboard Creation", "Alert Systems", "Testing"]
        }
      ],
      projects: [
        {
          name: "Smart Home Monitoring",
          description: "Build a complete smart home monitoring system with temperature, humidity, and motion sensors",
          technologies: ["Raspberry Pi", "Arduino", "MQTT", "Node-RED"]
        },
        {
          name: "Environmental Monitoring",
          description: "Create an environmental monitoring station for air quality and weather data",
          technologies: ["Arduino", "Sensors", "Python", "Cloud Platform"]
        }
      ]
    },
    {
      id: 6,
      title: "AI & Machine Learning Internship",
      icon: Brain,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      description: "Build and train machine learning models on real datasets using Python and popular ML libraries. Work on AI projects that solve real business problems.",
      duration: "4-8 Weeks",
      mode: "Remote",
      skills: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"],
      outcomes: [
        "Build ML prediction models",
        "Train AI models on datasets",
        "Deploy ML applications",
        "Internship completion certificate",
        "AI/ML expertise",
        "Data science skills"
      ],
      stipend: "₹6,000 - ₹18,000/month",
      curriculum: [
        {
          week: "1",
          title: "ML Fundamentals",
          description: "Learn machine learning concepts and Python libraries",
          topics: ["ML Concepts", "Python Libraries", "Data Preprocessing", "Feature Engineering"]
        },
        {
          week: "2",
          title: "Supervised Learning",
          description: "Master regression and classification algorithms",
          topics: ["Linear Regression", "Decision Trees", "Random Forest", "SVM"]
        },
        {
          week: "3",
          title: "Deep Learning",
          description: "Build neural networks and deep learning models",
          topics: ["Neural Networks", "TensorFlow", "Keras", "CNN/RNN"]
        },
        {
          week: "4",
          title: "ML Project",
          description: "Complete end-to-end ML project with model deployment",
          topics: ["Project Planning", "Model Training", "Evaluation", "Deployment"]
        }
      ],
      projects: [
        {
          name: "Predictive Analytics Model",
          description: "Build a machine learning model to predict customer behavior or business outcomes",
          technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
        },
        {
          name: "Computer Vision Application",
          description: "Develop an image recognition or computer vision application",
          technologies: ["TensorFlow", "OpenCV", "Keras", "Flask"]
        }
      ]
    }
  ];

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Recently Graduated"];
  const durations = ["4 Weeks", "6 Weeks", "8 Weeks", "Flexible"];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Detailed Internship Modal */}
      <AnimatePresence>
        {isDetailModalOpen && (
          <InternshipDetailModal 
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
            internship={selectedInternship}
          />
        )}
      </AnimatePresence>
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
              <Briefcase className="text-blue-600" size={18} />
              <span className="text-sm font-semibold text-blue-600">Live Internship Programs</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Start Your Tech Career
              </span>
              <br />
              <span className="text-gray-800">with Real Internships</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Gain hands-on experience in your chosen domain through live projects, expert mentorship, and industry-standard workflows. Build a portfolio that gets you hired.
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
                <div className="text-sm text-gray-600">Interns Trained</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">6</div>
                <div className="text-sm text-gray-600">Domains</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Remote Friendly</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-1">4-8</div>
                <div className="text-sm text-gray-600">Weeks Duration</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Internship Domains */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Available Internship Domains
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from 6 specialized tracks and work on real-world projects with expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <motion.div
                  key={domain.id}
                  className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedInternship(domain);
                    setIsDetailModalOpen(true);
                  }}
                >
                  {/* Domain Header with Icon */}
                  <div className={`relative h-40 bg-gradient-to-br ${domain.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
                        {[...Array(24)].map((_, i) => (
                          <div key={i} className="bg-white rounded h-1 opacity-50" style={{ width: `${Math.random() * 100}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <IconComponent className="text-white drop-shadow-lg relative z-10" size={64} strokeWidth={1.5} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {domain.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <Clock className="text-blue-600" size={16} />
                        <span className="text-xs text-gray-700">{domain.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-green-600" size={16} />
                        <span className="text-xs text-gray-700">{domain.mode}</span>
                      </div>
                    </div>

                    {/* Stipend */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <DollarSign className="text-green-600" size={16} />
                        <span className="text-sm font-semibold text-gray-800">{domain.stipend}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Skills You'll Gain</h4>
                      <div className="flex flex-wrap gap-2">
                        {domain.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-2 mb-4">
                      {domain.outcomes.slice(0, 3).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-xs text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedInternship(domain);
                          setIsDetailModalOpen(true);
                        }}
                      >
                        View Details <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Apply for Internship
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will review your application within 24-48 hours
              </p>
            </div>

            {submitted ? (
              <motion.div
                className="bg-white border-2 border-green-500 rounded-3xl p-12 text-center shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirmed Your Interest!</h3>
                <p className="text-gray-600 mb-8">
                  We will connect to you soon with internship details and next steps.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Submit Another Application
                </Button>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="+91 6380722494"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        College/University *
                      </label>
                      <input
                        type="text"
                        name="college"
                        required
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="Your institution"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Year of Study *
                      </label>
                      <select
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select year</option>
                        {years.map((year, index) => (
                          <option key={index} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Internship Domain *
                      </label>
                      <select
                        name="domain"
                        required
                        value={formData.domain}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select domain</option>
                        {internshipDomains.map((domain) => (
                          <option key={domain.id} value={domain.title}>{domain.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Preferred Duration *
                      </label>
                      <select
                        name="preferredDuration"
                        required
                        value={formData.preferredDuration}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select duration</option>
                        {durations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Resume Link (Google Drive / LinkedIn)
                      </label>
                      <input
                        type="url"
                        name="resume"
                        value={formData.resume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Why do you want this internship?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                      placeholder="Tell us about your interest in this domain and what you hope to achieve..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Submit Application <Send size={20} />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Choose VEducate Internships?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just an internship - it's your gateway to a successful tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Industry-Recognized Certificate",
                description: "Receive an official internship completion certificate that adds weight to your resume",
                color: "blue"
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Work directly with industry professionals who guide you through real-world projects",
                color: "green"
              },
              {
                icon: Briefcase,
                title: "Portfolio-Ready Projects",
                description: "Build 2-3 industry-level projects that you can showcase to future employers",
                color: "purple"
              },
              {
                icon: Code,
                title: "Hands-On Experience",
                description: "No theory-only learning. Get your hands dirty with actual coding and implementation",
                color: "orange"
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Choose durations that fit your academic calendar - 4, 6, or 8 weeks",
                color: "pink"
              },
              {
                icon: ArrowRight,
                title: "Job Referrals",
                description: "Top performers get job referrals to our partner companies and startups",
                color: "red"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`text-${benefit.color}-600`} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;

