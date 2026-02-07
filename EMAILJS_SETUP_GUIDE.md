# EmailJS Setup Guide for Contact & Newsletter Forms

This guide will help you set up EmailJS so you receive emails when someone:
- Books an appointment (contact form)
- Subscribes to your newsletter

All emails will be sent to: **zeneli.psychologist@gmail.com**

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE for up to 200 emails per month)
3. Sign up using your email (I recommend using zeneli.psychologist@gmail.com)
4. Verify your email address

---

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"** (recommended since you're using Gmail)
4. Click **"Connect Account"**
5. Log in with **zeneli.psychologist@gmail.com**
6. Allow EmailJS to access your Gmail account
7. Give your service a name like "Gmail Service"
8. **Save the Service ID** (looks like: `service_xxxxxxx`) - you'll need this!

---

## Step 3: Create Email Templates

You need to create TWO templates:

### Template 1: Contact Form / Appointment Booking

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Template Name: **"Contact Form - Appointment Booking"**
4. Copy and paste this template:

**Subject:**
```
New Appointment Request from {{from_name}}
```

**Content:**
```
You have received a new appointment request!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form Type: {{form_type}}
Language: {{language}}
Date: {{date}}
Time: {{time}}
Page URL: {{page_url}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ IMPORTANT: Reply to this client at {{from_email}}

This is an automated message from your website.
```

5. Make sure "To Email" is set to: **zeneli.psychologist@gmail.com**
6. Click **"Save"**
7. **Save the Template ID** (looks like: `template_xxxxxxx`)

---

### Template 2: Newsletter Subscription

1. Click **"Create New Template"** again
2. Template Name: **"Newsletter Subscription"**
3. Copy and paste this template:

**Subject:**
```
New Newsletter Subscription
```

**Content:**
```
You have a new newsletter subscriber!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBSCRIBER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email: {{subscriber_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBSCRIPTION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form Type: {{form_type}}
Language: {{language}}
Date: {{date}}
Time: {{time}}
Page URL: {{page_url}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add {{subscriber_email}} to your newsletter mailing list.

This is an automated message from your website.
```

4. Make sure "To Email" is set to: **zeneli.psychologist@gmail.com**
5. Click **"Save"**
6. **Save the Template ID** (looks like: `template_xxxxxxx`)

---

## Step 4: Get Your Public Key

1. Go to **"Account"** (top right, click your email)
2. Click on **"General"** tab
3. Find **"Public Key"** (looks like: `xxxxxxxxxxxx`)
4. **Copy this key**

---

## Step 5: Update Your Website Code

Now you need to update your `script.js` file with the IDs you collected:

1. Open `script.js` in your code editor
2. Find line 6 and replace:
   ```javascript
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
   ```
   With:
   ```javascript
   emailjs.init("your_actual_public_key_here");
   ```

3. Find around line 27 and replace BOTH lines:
   ```javascript
   'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
   'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID for contact form
   ```
   With your actual IDs:
   ```javascript
   'service_xxxxxxx',      // Your Gmail Service ID
   'template_xxxxxxx',     // Your Contact Form Template ID
   ```

4. Find around line 78 and replace BOTH lines:
   ```javascript
   'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
   'YOUR_NEWSLETTER_TEMPLATE_ID',     // Replace with your EmailJS Template ID for newsletter
   ```
   With your actual IDs:
   ```javascript
   'service_xxxxxxx',      // Your Gmail Service ID
   'template_yyyyyyy',     // Your Newsletter Template ID
   ```

---

## Step 6: Test Your Forms

1. Open your website in a browser
2. Test the **Contact Form**:
   - Fill in your name, email, phone, and a test message
   - Click "Send Message"
   - Check **zeneli.psychologist@gmail.com** for the email

3. Test the **Newsletter Form**:
   - Enter a test email address
   - Click "Subscribe"
   - Check **zeneli.psychologist@gmail.com** for the email

---

## Troubleshooting

### Emails not arriving?

1. **Check your EmailJS Dashboard** - Go to "History" to see if emails were sent
2. **Check Gmail Spam folder** - EmailJS emails might go to spam initially
3. **Verify all IDs are correct** in script.js
4. **Check browser console** for errors (Press F12)
5. **Make sure you saved script.js** after making changes

### EmailJS Free Tier Limits

- **200 emails per month** (free)
- If you need more, upgrade to a paid plan ($9/month for 1,000 emails)

---

## Security Note

⚠️ **IMPORTANT**: Never commit your EmailJS credentials to a public repository (like GitHub). If you plan to use version control:

1. Create a file called `.env` or `config.js`
2. Store your keys there
3. Add that file to `.gitignore`

For now, since this is a simple static website, your keys are safe in the code.

---

## Summary of What You Need

| Item | Location | Example |
|------|----------|---------|
| **Public Key** | Account → General | `xxxxxxxxxxxx` |
| **Service ID** | Email Services | `service_xxxxxxx` |
| **Contact Template ID** | Email Templates | `template_xxxxxxx` |
| **Newsletter Template ID** | Email Templates | `template_yyyyyyy` |

---

## Need Help?

If you have any issues setting this up:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Make sure you followed each step carefully
3. Test one form at a time

**Remember**: All emails will go to **zeneli.psychologist@gmail.com** 📧

Good luck! 🎉
