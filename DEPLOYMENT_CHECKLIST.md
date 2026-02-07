# Website Deployment Checklist

## ✅ Pre-Deployment Tasks

### 1. EmailJS Configuration
- [ ] Sign up at https://www.emailjs.com
- [ ] Connect Gmail account (zeneli.psychologist@gmail.com)
- [ ] Create 2 email templates
- [ ] Get Public Key, Service ID, Template IDs
- [ ] Update `script.js` with your credentials (3 places)
- [ ] Test contact form
- [ ] Test newsletter form

### 2. Update Phone Number
Replace `+30 690 000 0000` with your real phone in:
- [ ] Line 79: Schema.org structured data
- [ ] Line 195: Top contact bar
- [ ] Line 545: Contact section
- [ ] Line 627: Footer

**Find and replace:**
- Search: `+306900000000` (no spaces)
- Replace with: Your real phone number (no spaces)

### 3. Content Review
- [ ] Proofread all Greek text
- [ ] Proofread all English text
- [ ] Check all images load properly
- [ ] Verify CV/Resume PDF exists and opens
- [ ] Test all internal links (#home, #about, #services, #contact)

### 4. Test Locally
- [ ] Open index.html in browser
- [ ] Test language switcher (EN/EL)
- [ ] Test mobile menu (resize browser)
- [ ] Test all forms (should show error if EmailJS not configured)
- [ ] Check FAQ accordion works
- [ ] Scroll through entire page - look for issues

---

## 🚀 Deployment to Netlify (Recommended)

### Step 1: Create Account
1. Go to https://www.netlify.com
2. Click "Sign up"
3. Sign up with email or GitHub

### Step 2: Prepare Files
1. Make sure all files are in one folder:
   ```
   christiana-website/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── images/
   │   ├── profile-photo.jpg
   │   ├── about-photo.jpg
   │   └── site-theme.jpg
   └── cv/
       └── christiana-zeneli-cv.pdf
   ```

2. **IMPORTANT**: Remove these files before uploading:
   - [ ] EMAILJS_SETUP_GUIDE.md
   - [ ] CHANGES_SUMMARY.md
   - [ ] ATHENS_REMOVAL_SUMMARY.md
   - [ ] ATHENS_SEO_CHECKLIST.md
   - [ ] DEPLOYMENT_CHECKLIST.md (this file)
   - [ ] README.md (if you don't want it public)

### Step 3: Deploy to Netlify

**Option A: Drag and Drop (Easiest)**
1. Log in to Netlify
2. Click "Add new site" → "Deploy manually"
3. Drag your `christiana-website` folder into the upload area
4. Wait 30 seconds
5. Done! You'll get a URL like: `random-name-12345.netlify.app`

**Option B: GitHub Integration (Better)**
1. Push your code to GitHub first
2. In Netlify: "Add new site" → "Import from Git"
3. Connect GitHub account
4. Select repository
5. Click "Deploy site"
6. Any future changes you push to GitHub auto-deploy!

### Step 4: Customize Your Site
1. In Netlify dashboard, click "Site settings"
2. Click "Change site name"
3. Choose name like: `christiana-zeneli` or `zeneli-psychologist`
4. Your URL becomes: `christiana-zeneli.netlify.app`

---

## 🌐 Custom Domain Setup (Optional but Recommended)

### After Site is Live on Netlify:

1. **Buy Domain:**
   - Go to Namecheap.com or Papaki.gr
   - Search for: `christianazeneli.com` or `christianazeneli.gr`
   - Purchase (~$10-15/year)

2. **Connect to Netlify:**
   - In Netlify: "Domain settings" → "Add custom domain"
   - Enter your domain: `christianazeneli.com`
   - Follow instructions to update DNS settings
   - Wait 24-48 hours for DNS to propagate
   - Netlify automatically adds FREE SSL certificate

3. **Result:**
   - Your site: `https://christianazeneli.com`
   - Professional URL
   - Secure (HTTPS)

---

## 🧪 Post-Deployment Testing

### Test Everything:
- [ ] Visit your live URL
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Fill out contact form with test data
- [ ] Check if you receive email at zeneli.psychologist@gmail.com
- [ ] Subscribe to newsletter with test email
- [ ] Check if you receive newsletter notification
- [ ] Test language switcher
- [ ] Test all navigation links
- [ ] Download CV/Resume - verify it opens
- [ ] Test phone number click (should open dialer on mobile)
- [ ] Test email click (should open mail client)

### SEO Testing:
- [ ] Search "site:your-domain.com" on Google (after few days)
- [ ] Check Google Search Console
- [ ] Verify meta tags with https://metatags.io
- [ ] Test mobile-friendliness: https://search.google.com/test/mobile-friendly

---

## 📊 Analytics Setup (Optional)

### Google Analytics:
1. Go to https://analytics.google.com
2. Create account
3. Get tracking ID
4. Add to index.html before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Why:
- Track visitor count
- See which pages are popular
- Understand where visitors come from
- Monitor contact form submissions

---

## 🔒 Security Checklist

- [x] HTTPS enabled (automatic with Netlify)
- [x] EmailJS API keys in code (safe - they're public keys)
- [x] No passwords or sensitive data in code
- [x] Forms validated
- [x] Email addresses correct

---

## 📱 Marketing Checklist (After Launch)

### Social Media:
- [ ] Create Facebook Business Page
- [ ] Create Instagram account
- [ ] Add website link to all profiles
- [ ] Share launch announcement

### Google My Business:
- [ ] Create/claim Google Business Profile
- [ ] Add website URL
- [ ] Add photos
- [ ] Add business hours
- [ ] Add services

### Directories:
- [ ] List on e-psychology.gr
- [ ] List on therapists directories
- [ ] List on Greek psychology associations

### Business Cards:
- [ ] Print business cards with website URL
- [ ] Include QR code to website

---

## 🚨 Common Issues & Fixes

### "Forms don't work"
- ✅ Check EmailJS is configured correctly
- ✅ Check API keys are correct in script.js
- ✅ Check browser console for errors (F12)

### "Images not loading"
- ✅ Check file paths are correct
- ✅ Check images are in `images/` folder
- ✅ Check file names match exactly (case-sensitive)

### "Site looks broken on mobile"
- ✅ Test in browser mobile view (F12 → mobile icon)
- ✅ Clear browser cache
- ✅ Check styles.css uploaded correctly

### "Domain not working"
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Check DNS settings in domain registrar
- ✅ Follow Netlify instructions exactly

---

## 📞 Support Resources

### Netlify:
- Docs: https://docs.netlify.com
- Support: https://answers.netlify.com
- Status: https://netlifystatus.com

### EmailJS:
- Docs: https://www.emailjs.com/docs/
- Support: support@emailjs.com

### Domain Help:
- Namecheap: 24/7 live chat
- Papaki.gr: support@papaki.gr

---

## ✅ Launch Day!

When everything is ready:

1. **Announce on Social Media:**
   - Share your website URL
   - Announce your services
   - Use relevant hashtags: #psychology #mentalhealth #therapy

2. **Tell Your Network:**
   - Email existing clients (if any)
   - Tell friends and family
   - Update your email signature with website link

3. **Submit to Google:**
   - Go to: https://search.google.com/search-console
   - Add your property
   - Submit sitemap: `your-site.com/sitemap.xml`

4. **Monitor:**
   - Check email notifications work
   - Monitor Google Analytics
   - Respond promptly to contact form submissions

---

## 🎉 Congratulations!

Your website is live! Remember:

- Update content regularly
- Respond to inquiries quickly
- Monitor form submissions
- Keep EmailJS account active
- Renew domain annually
- Keep site secure and updated

**Need help?** Check the documentation or contact hosting support.

**Website:** https://your-site.netlify.app (or your custom domain)
**Email:** zeneli.psychologist@gmail.com
**Phone:** [Your phone number]

Good luck! 🚀
