// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: 'service_your_service_id',
  
  // Your EmailJS Template ID
  TEMPLATE_ID: 'template_your_template_id',
  
  // Your EmailJS Public Key
  PUBLIC_KEY: 'your_public_key',
  
  // Your email address where you want to receive the messages
  TO_EMAIL: 'your-email@example.com'
};

// Template parameters mapping
export const TEMPLATE_PARAMS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  company: '{{company}}',
  phone: '{{phone}}',
  service: '{{service}}',
  budget: '{{budget}}',
  timeline: '{{timeline}}',
  message: '{{message}}',
  to_email: '{{to_email}}'
};
