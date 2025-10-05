# EmailJS Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (starts with "service_")

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

Best regards,
BillianceAI Contact Form
```

4. Save the template and note down your **Template ID** (starts with "template_")

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id',
  TEMPLATE_ID: 'template_your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
  TO_EMAIL: 'your-email@example.com'
};
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- Make sure all IDs and keys are correct
- Check that your email service is properly connected
- Verify the template variables match the form fields
- Check the browser console for any error messages

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The free plan allows 200 emails per month
