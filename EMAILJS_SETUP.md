# EmailJS Setup Instructions

This website uses EmailJS to send email notifications when someone subscribes to the newsletter. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. **Copy the Service ID** (you'll need it later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Newsletter Subscription - {{subscriber_email}}
```

**Content:**
```
New Newsletter Subscription

Subscriber Email: {{subscriber_email}}
Subscription Date: {{date}}
Subscription Time: {{time}}
Timestamp: {{timestamp}}

Language Preference: {{language}}
Page URL: {{page_url}}
User Agent: {{user_agent}}

---
This is an automated notification from your website.
```

4. Set **To Email** to: `kostasmavrg@gmail.com`
5. **Copy the Template ID** (you'll need it later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Update the Code

Open `script.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key (line ~250)
2. Replace `YOUR_SERVICE_ID` with your EmailJS Service ID (line ~265)
3. Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID (line ~266)

Example:
```javascript
emailjs.init("abc123xyz456"); // Your Public Key

await emailjs.send(
    'service_abc123',      // Your Service ID
    'template_xyz789',     // Your Template ID
    {
        // ... rest of the code
    }
);
```

## Step 6: Test It

1. Open your website
2. Fill out the newsletter form with a test email
3. Submit the form
4. Check your email inbox (kostasmavrg@gmail.com) for the notification

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Service ID/Template ID not found?** Make sure you copied them correctly from EmailJS dashboard
- **Public Key error?** Verify your Public Key is correct in the EmailJS account settings

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Email delivery tracking

For more emails, consider upgrading to a paid plan.
