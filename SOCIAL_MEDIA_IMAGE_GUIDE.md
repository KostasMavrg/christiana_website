# Social Media Share Image Setup Guide

## 🖼️ The Problem

When sharing your website link on Instagram, Facebook, WhatsApp, etc., there's no preview image because:

1. **Wrong URL**: The site isn't hosted yet at `christianazeneli.com`
2. **Missing dimensions**: Instagram needs to know image size
3. **Image not optimized**: May not be the right size/format

---

## ✅ Solution

### Step 1: Create a Proper Social Media Image

**Recommended Dimensions: 1200 x 630 pixels**

This works best for:
- Facebook
- Instagram Stories
- WhatsApp
- LinkedIn
- Twitter

### Option A: Use Your Profile Photo (Quick)

If `profile-photo.jpg` is good quality:
1. Open in photo editor (Photoshop, Canva, Photopea)
2. Resize/crop to 1200x630 pixels
3. Save as `og-image.jpg` in `images/` folder

### Option B: Create Custom Social Card (Professional)

Use Canva (free):
1. Go to https://www.canva.com
2. Create design → Custom size → 1200 x 630 px
3. Add:
   - Your photo
   - Your name: "Χριστιάνα Ζενέλη"
   - Title: "Κλινική Ψυχολόγος"
   - Subtitle: "Online Ψυχοθεραπεία"
   - Background: Professional colors
4. Download as JPG
5. Save as `og-image.jpg` in `images/` folder

**Design Tips:**
- Keep text readable on mobile
- Use brand colors (blue from your site)
- Include your photo
- Keep it simple and professional

---

## Step 2: Update HTML After Deployment

### After deploying to Netlify, update these URLs:

**Find and Replace:**
- Search: `https://christianazeneli.com/`
- Replace: `https://YOUR-SITE-NAME.netlify.app/`

Or if you buy a custom domain:
- Replace: `https://christianazeneli.com/`

### Image Path Options:

**Option 1: Use specific OG image (recommended)**
```html
<meta property="og:image" content="https://YOUR-SITE.netlify.app/images/og-image.jpg">
```

**Option 2: Use profile photo**
```html
<meta property="og:image" content="https://YOUR-SITE.netlify.app/images/profile-photo.jpg">
```

---

## Step 3: Testing Your Social Share Image

### Test on Facebook:
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your website URL
3. Click "Debug"
4. Click "Scrape Again" to refresh
5. See preview of what appears when shared

### Test on LinkedIn:
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. See preview

### Instagram:
- Instagram doesn't have a test tool
- Just share the link in a DM to yourself first
- Preview should appear after a few seconds

### Clear Cache:
If you update the image, social media platforms cache it. To refresh:
- Facebook: Use the debug tool and click "Scrape Again"
- Instagram: May take 24 hours to update
- WhatsApp: Clear cache in settings

---

## 📐 Image Specifications

### Minimum Requirements:
- **Minimum**: 200 x 200 pixels
- **Recommended**: 1200 x 630 pixels (1.91:1 ratio)
- **Format**: JPG or PNG
- **Max File Size**: 8MB (but aim for < 1MB)

### What Works Best:
| Platform | Ideal Size | Ratio |
|----------|-----------|-------|
| Facebook | 1200 x 630 | 1.91:1 |
| Instagram | 1200 x 630 | 1.91:1 |
| Twitter | 1200 x 675 | 16:9 |
| LinkedIn | 1200 x 627 | 1.91:1 |
| WhatsApp | 1200 x 630 | 1.91:1 |

**1200 x 630 works everywhere!** ✅

---

## 🔧 Current Setup (After My Updates)

Your HTML now includes:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://christianazeneli.com/images/profile-photo.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Χριστιάνα Ζενέλη - Κλινική Ψυχολόγος">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://christianazeneli.com/images/profile-photo.jpg">
<meta name="twitter:image:alt" content="Χριστιάνα Ζενέλη - Κλινική Ψυχολόγος">
```

**What you need to do:**
1. Deploy site to Netlify
2. Replace `christianazeneli.com` with your actual URL
3. Make sure `profile-photo.jpg` is 1200x630 (or create `og-image.jpg`)

---

## 🎨 Quick Canva Template

Want a ready-made design? Here's how:

1. Go to Canva.com
2. Search templates: "Social Media Card" or "Open Graph"
3. Customize with:
   - Your colors: #007A9F (blue from your site)
   - Your photo
   - Your text
4. Download as JPG (1200x630)
5. Name it `og-image.jpg`
6. Put in `images/` folder
7. Update HTML to point to it

---

## ❗ Common Issues

### "Image still not showing"
- ✅ Wait 24 hours for cache to clear
- ✅ Use Facebook Debug tool to force refresh
- ✅ Check image URL is publicly accessible
- ✅ Verify image file size < 8MB
- ✅ Check file name has no spaces or special characters

### "Wrong image showing"
- ✅ Clear social media cache
- ✅ Use Facebook Debug tool
- ✅ Check you uploaded correct image
- ✅ Verify image path is correct

### "Broken image icon"
- ✅ Image URL is wrong
- ✅ Image file doesn't exist
- ✅ Check spelling of filename
- ✅ Use absolute URL (https://...) not relative (images/...)

---

## 📱 Instagram Specific Notes

Instagram is stricter:
- Image MUST be publicly accessible (can't be localhost)
- Preview may take longer to appear (up to 24 hours)
- Try sharing in DM first to test
- Story shares work differently than feed links

**Instagram Story Sharing:**
If you want a custom story preview, you need:
```html
<meta property="og:image" content="1080 x 1920 px image">
```
But this is optional - 1200x630 works fine!

---

## ✅ Final Checklist

Before sharing on social media:

- [ ] Site is deployed and live
- [ ] Image is 1200 x 630 pixels
- [ ] Image is in `images/` folder
- [ ] Image URL in HTML is absolute (starts with https://)
- [ ] Image URL matches your actual domain/Netlify URL
- [ ] Tested with Facebook Debug tool
- [ ] Image file size < 1MB for fast loading
- [ ] Image looks good when cropped to square (Instagram feed)

---

## 🚀 After Everything is Set Up

Share your link:
- Instagram: Bio, Stories, DMs
- Facebook: Posts, Comments
- WhatsApp: Messages
- LinkedIn: Posts
- Twitter: Tweets

Your professional preview will show:
- ✅ Your photo
- ✅ Your name
- ✅ Your title
- ✅ Description

---

## 💡 Pro Tips

1. **Keep image simple** - Text should be readable on small screens
2. **Use your brand colors** - Consistent with website
3. **Include your photo** - Personal connection
4. **Test before promoting** - Check preview in Facebook Debug tool
5. **Update seasonally** - Change image for special promotions

---

## Need Help?

If image still doesn't show:
1. Check browser console for errors (F12)
2. Use Facebook Debug tool
3. Verify image is publicly accessible
4. Wait 24 hours for cache to clear
5. Contact Netlify support if hosting issues

**Remember**: The image MUST be on a public server (Netlify) - it won't work from your local computer!
