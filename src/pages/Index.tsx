import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Sparkles, Zap, Shield, Brain, Code, Database, Cpu, Cloud, Lock, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import logo1 from "@/assets/logo.png";

const LogoLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/" || location.pathname === "/index") {
      const el = document.getElementById("hero");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#hero");
    }
  };

  return (
    <a href="/#hero" onClick={handleClick} className="flex items-center gap-2">
      <img src={logo1} alt="billianceai logo" className="w-8 h-8" />
      <span className="text-xl font-semibold">billianceai</span>
    </a>
  );
};

// Slot Booking Dialog Component
const SlotBookingDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Slot Booking Request";
    const body = `Hello BillianceAI Team,\n\nI would like to book a slot with the following details:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nPlease let me know about available slots.\n\nBest regards,\n${formData.name}`;
    
    window.location.href = `mailto:sk.tamiladhavan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white border border-blue-200 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-blue-500/20 animate-in zoom-in-95 duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={logo1} alt="billianceai logo" className="w-8 h-8 animate-pulse" />
              <span className="text-lg font-bold text-blue-600">billianceai</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Book Your Slot</h3>
            <p className="text-gray-600 text-sm mt-2">Let's transform your retail business together</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-600">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-blue-600">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-600">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion scroll hooks
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  // Services data
  const services = [
    { icon: Brain, title: "Machine Learning", desc: "Advanced ML models for demand forecasting, trend prediction, and pricing optimization", color: "from-purple-500 to-pink-500" },
    { icon: Cpu, title: "AI/IoT Vision", desc: "Computer vision for in-store analytics, shelf monitoring, and frictionless checkout", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Cybersecurity", desc: "Securing ML models and protecting sensitive customer data from adversarial attacks", color: "from-red-500 to-orange-500" },
    { icon: Code, title: "Frontend Excellence", desc: "Intuitive dashboards and data visualizations that make AI insights accessible", color: "from-green-500 to-emerald-500" },
    { icon: Database, title: "Data Analytics", desc: "Transform raw retail data into refined, intelligent fuel for ML models", color: "from-yellow-500 to-amber-500" },
    { icon: Sparkles, title: "Full Stack Solutions", desc: "End-to-end product management bridging code and customer needs", color: "from-indigo-500 to-purple-500" }
  ];

  // Team data
  const teamMembers = [
    { 
      name: "HARSHINI", 
      role: "Cybersecurity Expert", 
      image: "/assets/harshini-photo.png",
      quote: "Security is the foundation of trust in AI",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    { 
      name: "TARUN KM", 
      role: "AI/IoT Visionary", 
      image: "/assets/tarun-photo.png",
      quote: "Bringing eyes to physical retail spaces",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      name: "GOUTHAMARVIND V", 
      role: "ML Architect", 
      image: "/assets/gouthamarvind-photo.png",
      quote: "Crafting intelligence from data",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    { 
      name: "KEERTHI", 
      role: "Frontend Designer", 
      image: "/assets/keerthi-photo.png",
      quote: "Simplicity unlocks complexity",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    { 
      name: "PREETHI", 
      role: "Data Analyst", 
      image: "/assets/preethi-photo.png",
      quote: "Data tells the story of growth",
      gradient: "from-yellow-500/20 to-amber-500/20"
    },
    { 
      name: "DHRITI", 
      role: "Strategic Lead", 
      image: "/assets/dhriti-photo.png",
      quote: "Execution bridges vision and reality",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">

      {/* Slot Booking Dialog */}
      <SlotBookingDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Custom Cursor Follower */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-5 h-5 bg-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
      </div>
      
      {/* Secondary Cursor Ring */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          cursorVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-10 h-10 border-2 border-blue-600 rounded-full"></div>
      </div>


      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ y, opacity }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-blue-600/3 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating Icons */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10"
              >
                <Sparkles className="text-blue-500 opacity-60" size={24} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-20 right-20"
              >
                <Zap className="text-blue-600 opacity-60" size={28} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-32 left-20"
              >
                <Brain className="text-blue-700 opacity-60" size={32} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-20 right-32"
              >
                <Cloud className="text-blue-500 opacity-60" size={26} />
              </motion.div>
            </div>

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-blue-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-blue-700">Introducing billianceai</span>
            </motion.div>
          
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-gray-800">
                And for those not just browsing,
              </span>
              <br />
              <motion.span 
                className="text-blue-600"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                welcome home!
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              You've seen software that works. But have you felt software that <span className="text-blue-600 font-semibold">fits</span>?
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-base px-10 py-6 h-auto rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-10 py-6 h-auto rounded-full font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-blue-600/50 rounded-full p-1">
            <motion.div 
              className="w-1.5 h-3 bg-blue-600 rounded-full mx-auto"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        ref={servicesRef} 
        className="min-h-screen py-20 md:py-32 relative overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/3 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
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
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-gray-800">OUR</span>
              <br />
              <motion.span 
                className="text-blue-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                EXPERTISE
              </motion.span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions for the retail revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Floating Icon Background */}
                  <motion.div 
                    className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{ 
                      rotate: [0, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <IconComponent size={120} className="text-blue-600" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-600 p-3 md:p-4 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">{service.desc}</p>

                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500"
                    whileHover={{ 
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)"
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        id="team" 
        ref={teamRef} 
        className="min-h-screen py-20 md:py-32 relative overflow-hidden bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gray-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              <motion.span 
                className="text-gray-800"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                THE MINDS
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-800"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                BEHIND THE
              </motion.span>
              <br />
              <motion.span 
                className="text-blue-600 italic"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                MISSION.
              </motion.span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the brilliant minds transforming retail with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative bg-white border border-gray-200 group-hover:border-blue-600 rounded-2xl p-6 md:p-8 transition-all duration-500">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-80 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      style={{ objectPosition: 'center center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-sm md:text-base font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">"{member.quote}"</p>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full group-hover:w-4 group-hover:h-4 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-gray-800">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's build the future of retail together
          </p>
          <Button
            size="lg"
            className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsDialogOpen(true)}
          >
            Book Your Slot <ArrowRight className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={logo1} alt="billianceai logo" className="w-6 h-6" />
              <span className="font-bold text-blue-600">billianceai</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 billianceai. Transforming retail with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;