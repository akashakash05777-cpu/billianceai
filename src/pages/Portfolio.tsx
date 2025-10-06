import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Video, CheckCircle, Star, ArrowRight, BookOpen, Award, TrendingUp, Code, TrendingUp as Chart, Cloud, Shield, Cpu, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Enrollment Dialog Component
const EnrollmentDialog = ({ isOpen, onClose, course }: any) => {
  const [selectedTier, setSelectedTier] = useState(1); // 0 for Basic, 1 for Premium (default)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    batch: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Auto-close after 3 seconds and then open email
    setTimeout(() => {
      const selectedPlan = course?.pricingTiers[selectedTier];
      const subject = `Enrollment Request: ${course?.title} (${selectedPlan?.name} Plan)`;
      const body = `Hello VEducate Team,\n\nI would like to enroll in the ${course?.title} program.\n\nPlan Selected: ${selectedPlan?.name} - ${selectedPlan?.price}\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCollege: ${formData.college}\nPreferred Batch: ${formData.batch}\n\nPlease confirm my enrollment and share the next steps.\n\nBest regards,\n${formData.name}`;
      
      window.location.href = `mailto:veducate2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <motion.div 
        className="relative bg-white border border-blue-200 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20"
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

        {/* Course Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Video className="text-blue-600" size={24} />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Live Online Program</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          
          {/* Pricing Tier Selection */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.pricingTiers?.map((tier: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`relative border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                    selectedTier === index
                      ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  {/* Radio Circle */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedTier === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'
                    }`}>
                      {selectedTier === index && (
                        <CheckCircle className="text-white" size={16} fill="white" />
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-xl font-bold text-gray-800">{tier.name}</h4>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                      <span className="text-gray-500 text-sm">/ course</span>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {tier.features.slice(0, 4).map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                    {tier.features.length > 4 && (
                      <div className="text-xs text-blue-600 font-semibold">
                        +{tier.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Form */}
        {isSubmitted ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Confirmed Your Interest!</h3>
            <p className="text-gray-600">We will connect to you soon with enrollment details and next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Enrollment Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm font-medium text-blue-600 mb-2">
              Preferred Batch *
            </label>
            <select
              name="batch"
              required
              value={formData.batch}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            >
              <option value="">Select batch timing</option>
              {course.batches.map((batch: string, index: number) => (
                <option key={index} value={batch}>{batch}</option>
              ))}
            </select>
          </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Confirm Enrollment <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'beginner', name: 'Beginner', icon: Star },
    { id: 'intermediate', name: 'Intermediate', icon: TrendingUp },
    { id: 'advanced', name: 'Advanced', icon: Award }
  ];

  const courses = [
    {
      id: 1,
      title: "Software Development Fundamentals",
      category: "beginner",
      description: "Master web development from scratch with HTML, CSS, JavaScript, and React. Build a professional portfolio website.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Beginner",
      students: 150,
      rating: 4.8,
      instructor: "Keerthi",
      liveClasses: 12,
      projects: 3,
      certificate: true,
      thumbnail: {
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        icon: "code",
        pattern: "code"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & resources",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live doubt clearing sessions",
            "✨ Weekly code reviews by experts",
            "✨ 3 Industry-level projects",
            "✨ Internship completion certificate",
            "✨ LinkedIn profile optimization",
            "✨ Resume building workshop",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Morning (10 AM - 12 PM)",
        "Weekday Evening (6 PM - 8 PM)",
        "Weekend Batch (10 AM - 1 PM)"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git & GitHub"],
      outcomes: [
        "Build responsive websites from scratch",
        "Create interactive web applications",
        "Version control with Git",
        "Deploy projects on GitHub Pages"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Data Analytics & Visualization",
      category: "beginner",
      description: "Learn to analyze and visualize data using Excel, Python, and Power BI. Create compelling business intelligence reports.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Beginner",
      students: 120,
      rating: 4.7,
      instructor: "Preethi",
      liveClasses: 12,
      projects: 2,
      certificate: true,
      thumbnail: {
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        icon: "chart",
        pattern: "data"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & datasets",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live data analysis workshops",
            "✨ Real business datasets practice",
            "✨ 2 Industry case study projects",
            "✨ Internship completion certificate",
            "✨ Power BI dashboard templates",
            "✨ Interview preparation sessions",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Morning (9 AM - 11 AM)",
        "Weekday Evening (7 PM - 9 PM)",
        "Weekend Batch (2 PM - 5 PM)"
      ],
      skills: ["Excel", "Python", "Pandas", "Power BI", "Data Visualization"],
      outcomes: [
        "Master Excel advanced functions",
        "Analyze data with Python",
        "Create interactive dashboards",
        "Present insights effectively"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Cloud & DevOps Foundations",
      category: "intermediate",
      description: "Get hands-on with cloud technologies. Learn Linux, Docker, and AWS to deploy and scale modern applications.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Intermediate",
      students: 95,
      rating: 4.9,
      instructor: "Dhriti",
      liveClasses: 12,
      projects: 3,
      certificate: true,
      thumbnail: {
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        icon: "cloud",
        pattern: "cloud"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & resources",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live AWS deployment workshops",
            "✨ Free AWS credits worth ₹500",
            "✨ 3 Real-world DevOps projects",
            "✨ Internship completion certificate",
            "✨ Docker & Kubernetes templates",
            "✨ CI/CD pipeline setup assistance",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Evening (6 PM - 8 PM)",
        "Weekend Intensive (10 AM - 2 PM)"
      ],
      skills: ["Linux", "Docker", "AWS", "CI/CD", "Infrastructure as Code"],
      outcomes: [
        "Deploy apps on AWS",
        "Containerize applications",
        "Build CI/CD pipelines",
        "Manage cloud infrastructure"
      ],
      featured: true
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      category: "intermediate",
      description: "Dive into ethical hacking and network security. Learn penetration testing and create security audit reports.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Intermediate",
      students: 85,
      rating: 4.8,
      instructor: "Harshini",
      liveClasses: 12,
      projects: 2,
      certificate: true,
      thumbnail: {
        gradient: "from-red-500 via-orange-500 to-amber-500",
        icon: "shield",
        pattern: "security"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & tools guide",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live ethical hacking demos",
            "✨ Kali Linux setup assistance",
            "✨ 2 Real security audit projects",
            "✨ Internship completion certificate",
            "✨ Premium hacking tools access",
            "✨ CEH exam preparation materials",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Evening (7 PM - 9 PM)",
        "Weekend Batch (11 AM - 2 PM)"
      ],
      skills: ["Network Security", "Ethical Hacking", "Kali Linux", "Penetration Testing"],
      outcomes: [
        "Perform security audits",
        "Identify vulnerabilities",
        "Use ethical hacking tools",
        "Create security reports"
      ],
      featured: false
    },
    {
      id: 5,
      title: "IoT & Embedded Systems",
      category: "intermediate",
      description: "Build smart connected devices with Raspberry Pi and Arduino. Create IoT monitoring dashboards.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Intermediate",
      students: 75,
      rating: 4.7,
      instructor: "Tarun KM",
      liveClasses: 12,
      projects: 3,
      certificate: true,
      thumbnail: {
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        icon: "cpu",
        pattern: "iot"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & schematics",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live IoT device building sessions",
            "✨ Arduino/Raspberry Pi starter kit discount",
            "✨ 3 Real IoT system projects",
            "✨ Internship completion certificate",
            "✨ IoT platform integration guide",
            "✨ Hardware troubleshooting support",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Evening (6 PM - 8 PM)",
        "Weekend Batch (10 AM - 1 PM)"
      ],
      skills: ["Raspberry Pi", "Arduino", "Sensors", "MQTT", "IoT Protocols"],
      outcomes: [
        "Build IoT prototypes",
        "Integrate sensors",
        "Implement MQTT communication",
        "Create monitoring dashboards"
      ],
      featured: false
    },
    {
      id: 6,
      title: "AI & Machine Learning Basics",
      category: "advanced",
      description: "Get started with AI and ML using Python. Learn data preprocessing, model building, and create prediction models.",
      duration: "4 Weeks",
      price: "₹499",
      level: "Advanced",
      students: 110,
      rating: 4.9,
      instructor: "Gouthamarvind V",
      liveClasses: 12,
      projects: 2,
      certificate: true,
      thumbnail: {
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        icon: "brain",
        pattern: "ai"
      },
      pricingTiers: [
        {
          name: "Basic",
          price: "₹499",
          features: [
            "Pre-recorded video lectures",
            "Self-paced learning",
            "Course materials & datasets",
            "Community forum access",
            "Basic email support",
            "Course completion certificate"
          ]
        },
        {
          name: "Premium",
          price: "₹999",
          features: [
            "✨ Live interactive classes (12 sessions)",
            "✨ 1:1 mentor guidance sessions",
            "✨ Live ML model building workshops",
            "✨ GPU cloud credits for training",
            "✨ 2 Industry-level AI projects",
            "✨ Internship completion certificate",
            "✨ Pre-trained model templates",
            "✨ Kaggle competition guidance",
            "✨ Job referral support",
            "✨ Lifetime community access",
            "All Basic features included"
          ],
          popular: true
        }
      ],
      batches: [
        "Weekday Evening (7 PM - 9 PM)",
        "Weekend Intensive (10 AM - 2 PM)"
      ],
      skills: ["Python", "Machine Learning", "Scikit-learn", "Data Preprocessing", "Model Training"],
      outcomes: [
        "Build ML models",
        "Preprocess datasets",
        "Train and evaluate models",
        "Deploy prediction systems"
      ],
      featured: true
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleEnroll = (course: any) => {
    setSelectedCourse(course);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enrollment Dialog */}
      <AnimatePresence>
        {isEnrollmentOpen && (
          <EnrollmentDialog 
            isOpen={isEnrollmentOpen}
            onClose={() => setIsEnrollmentOpen(false)}
            course={selectedCourse}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Video className="text-blue-600" size={18} />
              <span className="text-sm font-semibold text-blue-600">100% Live Online Classes</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-600">
                Live Courses
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join live, interactive sessions with expert instructors. Gain hands-on experience through real-world projects and earn internship certificates.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">480+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
                  </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">6</div>
                <div className="text-sm text-gray-600">Live Programs</div>
                    </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">4.8⭐</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Online & Live</div>
                  </div>
            </motion.div>
                </div>
              </div>
      </motion.section>
            
            {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <IconComponent size={18} />
                  {category.name}
                </button>
              );
            })}
            </div>
          </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Course Badge */}
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Course Thumbnail */}
                <div className={`relative h-48 bg-gradient-to-br ${course.thumbnail.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-10">
                    {course.thumbnail.pattern === 'code' && (
                      <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
                        {[...Array(24)].map((_, i) => (
                          <div key={i} className="bg-white rounded h-1 opacity-50" style={{ width: `${Math.random() * 100}%` }}></div>
                        ))}
                      </div>
                    )}
                    {course.thumbnail.pattern === 'data' && (
                      <div className="absolute inset-0 flex items-end justify-around p-6 gap-2">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="bg-white rounded-t w-8 opacity-50" style={{ height: `${30 + Math.random() * 70}%` }}></div>
                        ))}
                      </div>
                    )}
                    {course.thumbnail.pattern === 'cloud' && (
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="absolute bg-white rounded-full opacity-30" 
                            style={{ 
                              width: `${40 + Math.random() * 60}px`,
                              height: `${40 + Math.random() * 60}px`,
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                    {course.thumbnail.pattern === 'security' && (
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-3 p-6">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="border-2 border-white rounded opacity-40"></div>
                        ))}
                  </div>
                    )}
                    {course.thumbnail.pattern === 'iot' && (
                      <div className="absolute inset-0 p-8">
                        <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                          <circle cx="100" cy="100" r="40" fill="white" />
                          <circle cx="50" cy="50" r="20" fill="white" />
                          <circle cx="150" cy="50" r="20" fill="white" />
                          <circle cx="50" cy="150" r="20" fill="white" />
                          <circle cx="150" cy="150" r="20" fill="white" />
                          <line x1="100" y1="100" x2="50" y2="50" stroke="white" strokeWidth="2" />
                          <line x1="100" y1="100" x2="150" y2="50" stroke="white" strokeWidth="2" />
                          <line x1="100" y1="100" x2="50" y2="150" stroke="white" strokeWidth="2" />
                          <line x1="100" y1="100" x2="150" y2="150" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                    {course.thumbnail.pattern === 'ai' && (
                      <div className="absolute inset-0 p-6">
                        <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                          {[...Array(8)].map((_, i) => (
                            <circle key={i} cx={100 + Math.cos(i * Math.PI / 4) * 60} cy={100 + Math.sin(i * Math.PI / 4) * 60} r="15" fill="white" />
                          ))}
                          <circle cx="100" cy="100" r="25" fill="white" />
                        </svg>
                    </div>
                  )}
                </div>

                  {/* Main Icon */}
                  <div className="relative z-10">
                    {course.thumbnail.icon === 'code' && <Code className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                    {course.thumbnail.icon === 'chart' && <Chart className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                    {course.thumbnail.icon === 'cloud' && <Cloud className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                    {course.thumbnail.icon === 'shield' && <Shield className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                    {course.thumbnail.icon === 'cpu' && <Cpu className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                    {course.thumbnail.icon === 'brain' && <Brain className="text-white drop-shadow-lg" size={72} strokeWidth={1.5} />}
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                  {/* Live Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-lg z-20">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-800">LIVE</span>
                  </div>

                  {/* Course Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg z-20">
                    <div className="flex items-center gap-1.5">
                      <Clock className="text-gray-700" size={14} />
                      <span className="text-xs font-semibold text-gray-800">{course.duration}</span>
                    </div>
                      </div>
                  </div>

                <div className="p-6">
                  {/* Level & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                      {course.level}
                      </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="text-center">
                      <Clock className="text-blue-600 mx-auto mb-1" size={18} />
                      <div className="text-xs text-gray-600">{course.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="text-green-600 mx-auto mb-1" size={18} />
                      <div className="text-xs text-gray-600">{course.students} students</div>
                    </div>
                    <div className="text-center">
                      <Award className="text-purple-600 mx-auto mb-1" size={18} />
                      <div className="text-xs text-gray-600">Certificate</div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-gray-800">{course.price}</div>
                      <div className="text-xs text-green-600 font-semibold">Premium: ₹999</div>
                    </div>
                  <Button 
                      onClick={() => handleEnroll(course)}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold transition-all duration-300 hover:scale-110"
                    >
                      Enroll Now
                  </Button>
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
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We offer custom programs for institutions and specialized training for corporate teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Contact Us <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
