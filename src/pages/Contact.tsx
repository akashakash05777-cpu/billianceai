import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    phone: '',
    domain: '',
    message: '',
    year: '',
    batch: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters - simplified for testing
      const templateParams = {
        from_name: formData.name || 'No name provided',
        from_email: formData.email || 'No email provided',
        college: formData.college || 'No college provided',
        phone: formData.phone || 'No phone provided',
        domain: formData.domain || 'No domain selected',
        year: formData.year || 'No year specified',
        batch: formData.batch || 'No batch preference specified',
        message: formData.message || 'No message provided',
        to_email: 'veducate2025@gmail.com',
      };
      
      // Debug: Log the configuration
      console.log('EmailJS Config:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        toEmail: EMAILJS_CONFIG.TO_EMAIL
      });
      
      console.log('Template Params:', templateParams);
      
      // Test EmailJS connection first
      try {
        await emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
      } catch (initError) {
        console.error('EmailJS initialization failed:', initError);
        throw new Error('EmailJS initialization failed');
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          college: '',
          phone: '',
          domain: '',
          message: '',
          year: '',
          batch: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      
      // More detailed error message
      let errorMessage = 'Failed to send message. Please try again or contact us directly.';
      
      if (error instanceof Error) {
        console.log('Error details:', error.message);
        if (error.message.includes('Invalid template')) {
          errorMessage = 'Email template configuration error. Please check your EmailJS template setup.';
        } else if (error.message.includes('Invalid service')) {
          errorMessage = 'Email service configuration error. Please check your EmailJS service setup.';
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = 'EmailJS public key error. Please check your API key configuration.';
        }
      }
      
      alert(errorMessage);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "veducate2025@gmail.com",
      description: "Send us enrollment inquiries anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 6380722494",
      description: "Mon-Fri from 9am to 6pm IST"
    },
    {
      icon: Calendar,
      title: "Live Batches",
      details: "Starting Every Month",
      description: "New batches begin on the 1st of each month"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll share batch details and enrollment steps"
    }
  ];

  const domains = [
    "Software Development Fundamentals",
    "Data Analytics & Visualization",
    "Cloud & DevOps Foundations",
    "Cybersecurity Essentials",
    "IoT & Embedded Systems",
    "AI & Machine Learning Basics"
  ];

  const yearOfStudy = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "Recent Graduate"
  ];

  const batchPreferences = [
    "Next Available Batch (Starting Soon)",
    "Weekend Batch",
    "Weekday Evening Batch",
    "Full-Time Intensive",
    "Flexible Schedule"
  ];

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
                Join Our Live Programs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to begin your learning journey? Enroll in our live, mentor-led internship tracks and gain hands-on industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-600 p-4">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  Enrollment Application
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete this form to enroll. Our team will contact you within 24 hours with batch details and next steps.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Confirmed Your Interest!</h3>
                    <p className="text-gray-600">We will connect to you soon with enrollment details and next steps.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* College and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">
                          College Name *
                        </label>
                        <input
                          type="text"
                          name="college"
                          required
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                          placeholder="Your college or university"
                        />
                      </div>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                          placeholder="+91 6380722494"
                        />
                      </div>
                    </div>

                    {/* Domain and Year */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">
                          Domain of Interest *
                        </label>
                        <select
                          name="domain"
                          required
                          value={formData.domain}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                        >
                          <option value="">Select learning domain</option>
                          {domains.map((domain, index) => (
                            <option key={index} value={domain}>{domain}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">
                          Year of Study *
                        </label>
                        <select
                          name="year"
                          required
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                        >
                          <option value="">Select year</option>
                          {yearOfStudy.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Batch Preference */}
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Batch Preference *
                      </label>
                      <select
                        name="batch"
                        required
                        value={formData.batch}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                      >
                        <option value="">Select batch preference</option>
                        {batchPreferences.map((batch, index) => (
                          <option key={index} value={batch}>{batch}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-blue-600 mb-2">
                        Message / Query (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500 resize-none"
                        placeholder="Any specific questions or requirements? (Optional)"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Submit Enrollment
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose VEducate?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Expert team with 3+ years of AI experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>95% accuracy rate across all solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>25+ successful retail transformations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Custom solutions tailored to your needs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent projects, 
                    you can call us directly or schedule a meeting.
                  </p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="mr-2" size={16} />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50">
                      <Calendar className="mr-2" size={16} />
                      Schedule
                    </Button>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Free Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Not sure which solution is right for you? We offer free consultations 
                    to help you understand how AI can transform your business.
                  </p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <MessageCircle className="mr-2" size={16} />
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
