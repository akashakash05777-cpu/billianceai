import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Sparkles, Zap, Shield, Brain, Code, Database, Cpu, Cloud, Lock, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-cyan-500/20 animate-in zoom-in-95 duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-slate-700/50 hover:bg-slate-700 rounded-full p-2"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={logo1} alt="billianceai logo" className="w-8 h-8 animate-pulse" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">billianceai</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Book Your Slot</h3>
            <p className="text-slate-400 text-sm mt-2">Let's transform your retail business together</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-cyan-300">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg bg-slate-800/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-cyan-300">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg bg-slate-800/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-cyan-300">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg bg-slate-800/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/50"
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
  const [showLogo, setShowLogo] = useState(true);
  const [logoRevealed, setLogoRevealed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const [zoomEffect, setZoomEffect] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Logo reveal animation with typing effect
  useEffect(() => {
    const fullText = "billianceai";
    let currentIndex = 0;

    // Start typing after 0.8s
    const typingTimer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Show tagline after typing completes
          setTimeout(() => setShowTagline(true), 300);
        }
      }, 150); // Speed of typing

      return () => clearInterval(typingInterval);
    }, 800);

    // Trigger zoom effect and hide logo screen
    const hideTimer = setTimeout(() => {
      setZoomEffect(true);
      setTimeout(() => {
        setShowLogo(false);
        setTimeout(() => {
          setLogoRevealed(true);
        }, 300);
      }, 600);
    }, 4000); // Increased time to allow full typing animation

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(hideTimer);
    };
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Logo Reveal Screen */}
      {showLogo && (
        <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950 flex flex-col items-center justify-center gap-8 transition-all duration-700 ${zoomEffect ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
          {/* Logo Animation */}
          <div className={`relative transition-all duration-700 ${zoomEffect ? 'scale-150' : 'scale-100'}`}>
            <div className="absolute inset-0 animate-ping opacity-20">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            </div>
            <img 
              src={logo1} 
              alt="billianceai" 
              className="w-40 h-40 md:w-48 md:h-48 animate-[spin_3s_ease-in-out] relative z-10 drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Typing Text Animation */}
          <div className="relative overflow-hidden min-h-[80px] md:min-h-[100px] flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            {/* Animated underline appears after typing */}
            {typedText.length === 12 && (
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-expand-width mt-2 rounded-full w-full"></div>
            )}
          </div>

          {/* Tagline with fade-in after typing */}
          {showTagline && (
            <p className="text-slate-400 text-sm md:text-base tracking-wide animate-in fade-in slide-in-from-bottom duration-500">
              Transforming Retail with AI
            </p>
          )}

          {/* Particle effects for interactivity */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      )}

      {/* Slot Booking Dialog */}
      <SlotBookingDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
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
        <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
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
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-full"></div>
      </div>


      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 pt-20 ${logoRevealed ? 'opacity-100 animate-zoom-in' : 'opacity-0 scale-90'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating Icons */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              <Sparkles className="absolute top-10 left-10 text-cyan-400 opacity-60 animate-bounce" size={24} style={{ animationDuration: '3s' }} />
              <Zap className="absolute top-20 right-20 text-purple-400 opacity-60 animate-bounce" size={28} style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
              <Brain className="absolute bottom-32 left-20 text-pink-400 opacity-60 animate-bounce" size={32} style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
              <Cloud className="absolute bottom-20 right-32 text-cyan-400 opacity-60 animate-bounce" size={26} style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 mb-8 animate-in fade-in slide-in-from-top duration-1000">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Introducing billianceai</span>
            </div>
          
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                And for those not just browsing,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                welcome home!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              You've seen software that works. But have you felt software that <span className="text-cyan-400 font-semibold">fits</span>?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <Button
                size="lg"
                className="text-base px-10 py-6 h-auto rounded-full font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsDialogOpen(true)}
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-10 py-6 h-auto rounded-full font-semibold border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="min-h-screen py-20 md:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">OUR</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">EXPERTISE</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive AI solutions for the retail revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Floating Icon Background */}
                  <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <IconComponent size={120} className="text-cyan-400" />
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 md:p-4 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed relative z-10">{service.desc}</p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="min-h-screen py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">THE MINDS</span>
              <br />
              <span className="text-white">BEHIND THE</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
                MISSION.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the brilliant minds transforming retail with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Card Content */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-500/50 rounded-2xl p-6 md:p-8 transition-all duration-500">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl bg-slate-900">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-80 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      style={{ objectPosition: 'center center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-sm md:text-base font-medium mb-4">{member.role}</p>
                  <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">"{member.quote}"</p>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full group-hover:w-4 group-hover:h-4 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's build the future of retail together
          </p>
          <Button
            size="lg"
            className="text-base md:text-lg px-10 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsDialogOpen(true)}
          >
            Book Your Slot <ArrowRight className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 md:py-12 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={logo1} alt="billianceai logo" className="w-6 h-6" />
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">billianceai</span>
            </div>
            <div className="text-sm text-slate-400">
              © 2025 billianceai. Transforming retail with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;