import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Sparkles, Zap, Shield, Brain, Code, Database, Cpu, Cloud, Lock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import VEducateLogo from "@/components/VEducateLogo";

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
      <VEducateLogo size={32} />
      <span className="text-xl font-bold tracking-wide" style={{ color: '#1e4a7a' }}>VEducate</span>
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
    const body = `Hello VEducate Team,\n\nI would like to enroll in a live learning program with the following details:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nPlease share details about the next available batch and enrollment process.\n\nBest regards,\n${formData.name}`;
    
    window.location.href = `mailto:veducate2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              <VEducateLogo size={32} className="animate-pulse" />
              <span className="text-lg font-bold tracking-wide" style={{ color: '#1e4a7a' }}>VEducate</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Book Your Slot</h3>
            <p className="text-gray-600 text-sm mt-2">Let's transform your learning experience together</p>
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

// Recognition Carousel Component
const RecognitionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const logos = [
    {
      id: 1,
      name: "DPIIT",
      component: (
        <div className="text-center">
          <img 
            src="/assets/dpiit 2.png" 
            alt="DPIIT Logo" 
            className="w-80 h-80 mx-auto object-contain"
          />
        </div>
      )
    },
    {
      id: 2,
      name: "MCA",
      component: (
        <div className="text-center">
          <img 
            src="/assets/mca.png" 
            alt="MCA Logo" 
            className="w-80 h-80 mx-auto object-contain"
          />
        </div>
      )
    },
    {
      id: 3,
      name: "Startup India",
      component: (
        <div className="text-center">
          <img 
            src="/assets/startup india.png" 
            alt="Startup India Logo" 
            className="w-80 h-80 mx-auto object-contain"
          />
        </div>
      )
    },
    {
      id: 4,
      name: "MSME",
      component: (
        <div className="text-center">
          <img 
            src="/assets/msme 2.png" 
            alt="MSME Logo" 
            className="w-80 h-80 mx-auto object-contain"
          />
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <motion.div 
      className="relative max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Logo Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex justify-center"
          >
            {logos[currentSlide].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gray-800 scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  
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


  // Programs data - VEducate Learning Tracks
  const services = [
    { icon: Code, title: "Software Development", desc: "Live coding sessions (HTML, CSS, JS, React) • Portfolio project • GitHub submission", color: "from-blue-500 to-cyan-500", iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Data Analytics", desc: "Excel, Python, Power BI • Live data workshops • End-to-end business report", color: "from-green-500 to-emerald-500", iconBg: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Linux, Docker, AWS basics • Web app deployment • Cloud documentation", color: "from-purple-500 to-pink-500", iconBg: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { icon: Shield, title: "Cybersecurity Essentials", desc: "Ethical hacking demos • Network scanning • Security audit report", color: "from-red-500 to-orange-500", iconBg: "bg-gradient-to-br from-red-500 to-orange-500" },
    { icon: Cpu, title: "IoT & Embedded Systems", desc: "Raspberry Pi simulations • Smart monitoring dashboard • IoT prototype", color: "from-indigo-500 to-purple-500", iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { icon: Brain, title: "AI & Machine Learning", desc: "Data preprocessing & model building • Prediction model • ML mini-project", color: "from-yellow-500 to-amber-500", iconBg: "bg-gradient-to-br from-yellow-500 to-amber-500" }
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
              <span className="text-sm font-medium text-blue-700">Empowering Students Since 2024</span>
            </motion.div>
          
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-gray-800">
                Learn. Build.
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
                Get Industry-Ready
              </motion.span>
              <br />
              <span className="text-gray-800">
                with VEducate.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Empowering students through <span className="text-blue-600 font-semibold">live, mentor-led learning</span> experiences that combine real-world projects, practical exposure, and interactive guidance from industry experts.
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
                  asChild
                >
                  <Link to="/auth">Join Live Programs <ArrowRight className="ml-2" size={20} /></Link>
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
                  <Link to="/internships">View Internship Tracks</Link>
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

      {/* Metrics Section - Animated Counters */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              >
                480+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base font-medium">Students Trained</div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              >
                25+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base font-medium">Expert Instructors</div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                6+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base font-medium">Core Domains</div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* About VEducate Section */}
      <motion.section 
        className="py-20 md:py-32 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-800">Who We </span>
                <span className="text-blue-600">Are</span>
              </h2>
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold text-blue-600">VEducate</span> is a next-generation learning and internship-enablement platform founded to bridge the gap between academic learning and real-world industry experience.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                We provide <span className="font-semibold text-blue-600">live, interactive learning programs</span> where students gain hands-on experience in their chosen domain while working on guided projects under expert mentorship.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Since inception in <span className="font-semibold">2024</span>, VEducate has onboarded <span className="font-semibold text-blue-600">480+ students</span> across India through our structured learning initiatives that combine live classes, mentor reviews, project assignments, and internship-based learning outcomes.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To equip every learner with <span className="font-semibold text-blue-600">industry-relevant skills</span>, practical project exposure, and professional guidance to become career-ready in today's tech-driven world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="text-blue-600 font-bold mb-2">Organization Type</div>
                  <div className="text-gray-800 font-semibold">EdTech Learning Platform</div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="text-blue-600 font-bold mb-2">Learning Model</div>
                  <div className="text-gray-800 font-semibold">Live + Project-Based + Internship Outcome</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
              <span className="text-gray-800">OUR LEARNING</span>
              <br />
              <motion.span 
                className="text-blue-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                PROGRAMS
              </motion.span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Live Internship-Integrated Tracks — Every course combines learning, doing, and real-world project outcomes
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
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${service.iconBg} p-3 md:p-4 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg`}
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

      {/* Learning Methodology Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">Learn by </span>
              <span className="text-blue-600">Doing</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our Practical 4-Week Approach — Every program follows a structured learning path
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Table View */}
              <motion.div
              className="hidden md:block overflow-hidden rounded-2xl border-2 border-blue-200 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Phase</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Mode</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Focus</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Outcome</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-6 font-bold text-blue-600">Week 1</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                        Live Classes
                      </span>
                    </td>
                    <td className="px-6 py-6 text-gray-700">Domain fundamentals</td>
                    <td className="px-6 py-6 text-gray-700">Learning foundation</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-6 font-bold text-green-600">Week 2</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm">
                        Guided Practice
                      </span>
                    </td>
                    <td className="px-6 py-6 text-gray-700">Project setup and mentor walkthrough</td>
                    <td className="px-6 py-6 text-gray-700">Initial project build</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-6 font-bold text-purple-600">Week 3</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
                        Live Mentorship
                      </span>
                    </td>
                    <td className="px-6 py-6 text-gray-700">Real-world implementation</td>
                    <td className="px-6 py-6 text-gray-700">Hands-on skill proof</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-6 font-bold text-orange-600">Week 4</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm">
                        Project Review
                      </span>
                    </td>
                    <td className="px-6 py-6 text-gray-700">Evaluation and certificate</td>
                    <td className="px-6 py-6 text-gray-700 font-bold">Internship completion</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {[
                { week: "Week 1", mode: "Live Classes", focus: "Domain fundamentals", outcome: "Learning foundation", color: "blue" },
                { week: "Week 2", mode: "Guided Practice", focus: "Project setup and mentor walkthrough", outcome: "Initial project build", color: "green" },
                { week: "Week 3", mode: "Live Mentorship", focus: "Real-world implementation", outcome: "Hands-on skill proof", color: "purple" },
                { week: "Week 4", mode: "Project Review", focus: "Evaluation and certificate", outcome: "Internship completion", color: "orange" }
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl border-2 border-blue-200 p-6 shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className={`text-${phase.color}-600 font-bold text-xl mb-3`}>{phase.week}</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Mode: </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full bg-${phase.color}-100 text-${phase.color}-700 text-xs font-medium`}>
                        {phase.mode}
                      </span>
                  </div>
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Focus: </span>
                      <span className="text-gray-700">{phase.focus}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Outcome: </span>
                      <span className="text-gray-700 font-semibold">{phase.outcome}</span>
                    </div>
                </div>
              </motion.div>
            ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">Final Outcome</h3>
                <p className="text-lg text-blue-100">
                  Each student completes a <span className="font-bold text-white">certified internship track</span>, receives mentor feedback, and graduates with a <span className="font-bold text-white">portfolio-ready project</span>.
                </p>
              </div>
            </motion.div>
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

      {/* College Partnerships Section */}
      <motion.section 
        className="py-20 md:py-32 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-800">Partner with </span>
                <span className="text-blue-600">VEducate</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Collaborate with universities and colleges to offer structured, project-based learning internships
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Benefits for Partner Institutions
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Certified Training Modules</h4>
                  <p className="text-gray-600">Industry-standard curriculum designed by experts</p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Mentorship Support</h4>
                  <p className="text-gray-600">Expert guidance for student batches throughout the program</p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Practical Project Outcomes</h4>
                  <p className="text-gray-600">Real-world projects that enhance student portfolios</p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Co-Issued Certificates</h4>
                  <p className="text-gray-600">Internship certificates jointly issued by VEducate</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Partner institutions benefit from seamless integration with academic credit requirements
              </p>
              <Button
                size="lg"
                className="text-base px-10 py-6 h-auto rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Partner With Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recognition & Partnerships */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-900">We are </span>
              <span className="text-lime-500">Recognized by</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              VEducate is officially recognized by Government of India and partnered with leading institutions
            </motion.p>
          </div>

          {/* Auto-Sliding Logo Carousel */}
          <RecognitionCarousel />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <VEducateLogo size={32} />
                <span className="text-xl font-bold tracking-wide" style={{ color: '#1e4a7a' }}>VEducate</span>
            </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Bridging the gap between academic learning and industry experience through live, mentor-led programs.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Programs</Link></li>
                <li><Link to="/portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Courses</Link></li>
                <li><Link to="/internships" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Internships</Link></li>
                <li><Link to="/student-portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Student Projects</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Enroll Now</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Learning Tracks</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Software Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Data Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Cloud & DevOps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">AI & Machine Learning</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>veducate2025@gmail.com</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+91 6380722494</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              © 2025 VEducate. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;