# EmailJS Setup Guide

To make your contact form functional, follow these steps to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen service
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure (this creates an email that YOU will receive):

```
Subject: Portfolio Contact: {{subject}}

You received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

**Important**: This template sends the message TO YOU (not to the form submitter). The person filling out the form will NOT receive any email - they'll only see the success message on your website.

4. Note down your **Template ID** 

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Your Code
Replace the placeholder values in `Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 6. Test Your Form
1. Fill out your contact form
2. Check your email inbox
3. Verify the message was received

## Alternative Options

### Option 1: Environment Variables (Recommended)
Create a `.env.local` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update your code:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

### Option 2: Backend API
If you prefer a backend solution, you could:
1. Create a Node.js/Express server
2. Use nodemailer to send emails
3. Deploy to Vercel/Netlify/Heroku

### Option 3: Form Services
- **Formspree**: Simple form backend service
- **Netlify Forms**: If deploying to Netlify
- **Getform**: Another form handling service

## Security Note
Your EmailJS public key is safe to expose in frontend code - it's designed for client-side use.

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Perfect for a portfolio website
