import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, Users, TrendingUp, Star, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  results: Record<string, string>;
  client: string;
  duration: string;
  status: string;
  featured: boolean;
  images: string[];
  challenges: string[];
  solutions: string[];
  impact: string[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
  caseStudy: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, projectId }) => {
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'impact'>('overview');

  // Fetch project details from API
  useEffect(() => {
    if (isOpen && projectId) {
      fetchProjectDetails();
    }
  }, [isOpen, projectId]);

  const fetchProjectDetails = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call with different content based on project ID
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const projectData = await generateProjectContent(projectId);
      setProject(projectData);
    } catch (err) {
      setError('Failed to load project details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateProjectContent = async (id: number): Promise<ProjectDetails> => {
    // Generate different content based on project ID
    const projects = {
      1: {
        id: 1,
        title: "Smart Inventory Management System",
        description: "Revolutionary AI-powered inventory system that predicts stock levels with 95% accuracy",
        longDescription: "This comprehensive AI solution revolutionized inventory management for retail businesses by implementing advanced machine learning algorithms that analyze historical sales data, seasonal patterns, supplier lead times, and external factors like weather and events. The system provides real-time predictions with 95% accuracy, reducing waste by 40% and increasing profit margins by 25%.",
        technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "AWS", "Redis", "FastAPI"],
        results: {
          accuracy: "95%",
          wasteReduction: "40%",
          profitIncrease: "25%",
          costSavings: "$2.3M",
          efficiency: "60%"
        },
        client: "RetailMax",
        duration: "6 months",
        status: "Completed",
        featured: true,
        images: ["/api/placeholder/800/400", "/api/placeholder/800/400", "/api/placeholder/800/400"],
        challenges: [
          "Complex demand forecasting with multiple variables",
          "Real-time data processing requirements",
          "Integration with existing ERP systems",
          "Handling seasonal fluctuations and trends"
        ],
        solutions: [
          "Implemented ensemble ML models combining time series and regression algorithms",
          "Built scalable microservices architecture with Redis caching",
          "Created seamless API integration layer",
          "Developed adaptive learning system for trend detection"
        ],
        impact: [
          "Reduced inventory carrying costs by $2.3M annually",
          "Improved customer satisfaction through better stock availability",
          "Enabled data-driven decision making across the organization",
          "Scaled solution to 50+ store locations"
        ],
        testimonials: [{
          quote: "BillianceAI's inventory system transformed our operations. We've seen incredible results in just 6 months.",
          author: "Sarah Johnson",
          role: "CTO",
          company: "RetailMax"
        }],
        caseStudy: "RetailMax, a leading retail chain, faced significant challenges with inventory management across 50+ locations. Traditional forecasting methods resulted in 30% stockouts and 25% overstock situations. Our AI solution reduced these issues by 95% and 40% respectively, resulting in $2.3M annual savings.",
        liveUrl: "https://retailmax-demo.com",
        githubUrl: "https://github.com/billianceai/inventory-system"
      },
      2: {
        id: 2,
        title: "Frictionless Checkout Vision System",
        description: "Computer vision solution enabling customers to walk out with items without traditional checkout",
        longDescription: "This cutting-edge computer vision system uses advanced AI algorithms to track customer movements and item selections in real-time. The system combines object detection, person tracking, and transaction processing to create a seamless shopping experience. Customers can simply pick up items and walk out, with automatic billing and receipt generation.",
        technologies: ["OpenCV", "Python", "React Native", "AWS", "TensorFlow", "Kubernetes", "MongoDB", "WebRTC"],
        results: {
          satisfaction: "60%",
          speedIncrease: "300%",
          accuracy: "99.2%",
          theftReduction: "85%",
          revenue: "35%"
        },
        client: "Fashion Forward",
        duration: "4 months",
        status: "Completed",
        featured: true,
        images: ["/api/placeholder/800/400", "/api/placeholder/800/400"],
        challenges: [
          "Real-time object detection and tracking",
          "Handling multiple customers simultaneously",
          "Ensuring 99%+ accuracy in item recognition",
          "Privacy concerns and data protection"
        ],
        solutions: [
          "Developed custom YOLO-based object detection model",
          "Implemented multi-camera fusion for 360° coverage",
          "Created advanced tracking algorithms for customer paths",
          "Built privacy-first architecture with local processing"
        ],
        impact: [
          "Reduced checkout time from 5 minutes to 30 seconds",
          "Increased customer satisfaction by 60%",
          "Reduced theft incidents by 85%",
          "Generated 35% increase in impulse purchases"
        ],
        testimonials: [{
          quote: "The frictionless checkout has revolutionized our customer experience. Our customers love the convenience!",
          author: "Michael Chen",
          role: "CEO",
          company: "Fashion Forward"
        }],
        caseStudy: "Fashion Forward implemented our frictionless checkout system in their flagship store, resulting in a 300% increase in checkout speed and 60% improvement in customer satisfaction. The system processes 99.2% of transactions accurately while reducing theft by 85%.",
        liveUrl: "https://fashionforward-demo.com",
        githubUrl: "https://github.com/billianceai/checkout-vision"
      },
      3: {
        id: 3,
        title: "Predictive Analytics Dashboard",
        description: "Comprehensive analytics platform providing real-time insights into customer behavior and sales trends",
        longDescription: "This advanced analytics platform combines multiple data sources to provide comprehensive business intelligence. The system processes customer behavior data, sales transactions, inventory levels, and external market data to generate actionable insights. Features include predictive modeling, trend analysis, and automated reporting.",
        technologies: ["D3.js", "Node.js", "MongoDB", "Docker", "Python", "Apache Kafka", "Elasticsearch", "Grafana"],
        results: {
          decisionSpeed: "3x faster",
          accuracy: "92%",
          roi: "180%",
          insights: "500+",
          efficiency: "75%"
        },
        client: "TechMart",
        duration: "5 months",
        status: "Completed",
        featured: false,
        images: ["/api/placeholder/800/400", "/api/placeholder/800/400", "/api/placeholder/800/400"],
        challenges: [
          "Processing large volumes of real-time data",
          "Creating intuitive data visualizations",
          "Ensuring data accuracy and consistency",
          "Building scalable architecture for growth"
        ],
        solutions: [
          "Implemented Apache Kafka for real-time data streaming",
          "Created interactive D3.js visualizations",
          "Built data validation and cleansing pipelines",
          "Designed microservices architecture for scalability"
        ],
        impact: [
          "Enabled 3x faster decision making",
          "Generated 500+ actionable insights monthly",
          "Achieved 180% ROI within first year",
          "Improved operational efficiency by 75%"
        ],
        testimonials: [{
          quote: "The analytics platform gave us insights we never knew existed. Our decision-making process is now 3x faster and more accurate.",
          author: "Emily Rodriguez",
          role: "Operations Director",
          company: "TechMart"
        }],
        caseStudy: "TechMart needed better insights into their business operations. Our analytics platform processes 10TB of data daily, generating 500+ actionable insights monthly and enabling 3x faster decision making across all departments.",
        liveUrl: "https://techmart-analytics.com",
        githubUrl: "https://github.com/billianceai/analytics-dashboard"
      }
    };

    return projects[id as keyof typeof projects] || projects[1];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl shadow-cyan-500/20 animate-in zoom-in-95 duration-300 mx-2 sm:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 p-2 sm:p-3 flex-shrink-0">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-2xl font-bold text-white truncate">
                {loading ? 'Loading Project...' : project?.title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm truncate">
                {loading ? 'Fetching details...' : `${project?.client} • ${project?.duration}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors bg-slate-700/50 hover:bg-slate-700 rounded-full p-2 flex-shrink-0 ml-2"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(90vh-120px)]">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
                <p className="text-slate-300">Loading project details...</p>
                <p className="text-slate-500 text-sm mt-2">Fetching from our knowledge base</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 text-red-400 mx-auto mb-4">⚠️</div>
                <p className="text-slate-300">{error}</p>
                <Button 
                  onClick={fetchProjectDetails}
                  className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : project ? (
            <div className="p-4 sm:p-6">
              {/* Tabs */}
              <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8 border-b border-slate-700/50 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'details', label: 'Technical Details' },
                  { id: 'impact', label: 'Impact & Results' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6 sm:space-y-8">
                  {/* Project Images */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-2xl sm:text-4xl text-cyan-400 opacity-60">📊</div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Project Overview</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Key Results</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                      {Object.entries(project.results).map(([key, value], index) => (
                        <div key={index} className="text-center p-3 sm:p-4 bg-slate-700/30 rounded-xl">
                          <div className="text-lg sm:text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-xs text-slate-400 capitalize mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-6 sm:space-y-8">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Challenges</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Our Solutions</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Case Study</h3>
                    <div className="bg-slate-700/30 rounded-xl p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{project.caseStudy}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-6 sm:space-y-8">
                  {/* Impact */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Business Impact</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.impact.map((impact, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonials */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Client Testimonial</h3>
                    <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
                      <blockquote className="text-sm sm:text-base text-slate-300 italic mb-3 sm:mb-4">
                        "{project.testimonials[0].quote}"
                      </blockquote>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm sm:text-base">{project.testimonials[0].author}</div>
                          <div className="text-cyan-400 text-xs sm:text-sm">
                            {project.testimonials[0].role}, {project.testimonials[0].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.liveUrl && (
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-sm sm:text-base"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={14} />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        variant="outline"
                        asChild
                        className="border-slate-600 text-slate-300 hover:bg-slate-700/50 text-sm sm:text-base"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={14} />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
