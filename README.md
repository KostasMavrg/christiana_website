# Christiana Zeneli - Clinical Psychologist Website

A professional, bilingual (English/Greek) website for clinical psychologist Christiana Zeneli, featuring a calming and welcoming design with white, yellow, and blue color scheme.

## Features

- **Bilingual Support**: Full English and Greek language support with easy language switching
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Professional Sections**:
  - Hero section with welcome message
  - About section with credentials
  - Services showcase (Individual Therapy, Couples Therapy, Anxiety Management, etc.)
  - Contact form and contact information
- **Modern UI/UX**: Clean, calming design with smooth animations
- **Accessibility**: Focus states and semantic HTML for better accessibility

## Color Scheme

- **White**: Primary background color (#FFFFFF)
- **Yellow**: Accent color (#FFD700) - warm and welcoming
- **Blue**: Primary brand color (#4A90E2) - professional and calming

## File Structure

```
christiana-website/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. The website will work immediately - no build process required!

## Customization

### Updating Contact Information

Edit the contact section in `index.html`:
- Email: Update the email address in the contact info card
- Phone: Update the phone number
- Location: Update the location text

### Adding Your Photos

The website is set up to display your photos automatically:

1. **Hero Section Photo**: 
   - Add your photo as `images/profile-photo.jpg`
   - Recommended size: 450x600px (portrait orientation)
   - The image will automatically display in the hero section

2. **About Section Photo**:
   - Add your photo as `images/about-photo.jpg`
   - Recommended size: 350x450px (portrait orientation)
   - This will appear in the About section

**Note**: If the images are not found, elegant placeholder graphics will be displayed automatically. The website is designed to handle missing images gracefully.

### Customizing Services

Edit the services section in `index.html` to add, remove, or modify service cards. Each service card has:
- An icon (SVG)
- A title (with bilingual support)
- A description (with bilingual support)

### Language Content

All bilingual content uses `data-en` (English) and `data-el` (Greek) attributes. To add new bilingual text:
```html
<span data-en="English text" data-el="Ελληνικό κείμενο">English text</span>
```

### Form Submission

Currently, the contact form shows an alert when submitted. To connect it to a backend:

1. Set up a server endpoint (e.g., using Node.js, PHP, Python, etc.)
2. Update the `handleSubmit` function in `script.js` to send data to your endpoint
3. Uncomment and modify the fetch code in the function

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The language preference is saved in localStorage
- Smooth scrolling is enabled for navigation links
- Mobile menu appears on screens smaller than 968px
- All animations are CSS-based for optimal performance

### Adding Your CV

1. Save your CV as a PDF file
2. Name it exactly: `christiana-zeneli-cv.pdf`
3. Place it in the `cv` folder
4. The website will automatically provide download links in:
   - The About section (main CV download button)
   - The Contact section (CV info card)

**Note**: If you want to use a different filename, update the links in `index.html` by searching for `christiana-zeneli-cv.pdf` and replacing with your filename.

## Design Features

- **Elegant Typography**: Uses Playfair Display for headings (elegant serif) and Inter for body text (modern sans-serif)
- **Professional Layout**: Clean spacing, refined shadows, and subtle animations
- **Photo Integration**: Two photo sections (hero and about) with elegant styling
- **CV Download**: Multiple CV download options throughout the site
- **Enhanced Visuals**: Improved card designs, better color gradients, and professional hover effects

## Future Enhancements

Consider adding:
- Online appointment booking system
- Blog section for articles
- Testimonials section
- Social media integration
- Google Maps integration for location
- Analytics tracking

---

Built with care for Christiana Zeneli's professional practice.
