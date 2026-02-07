// Geolocation detection for automatic language selection
const geoLocationDetector = {
    async detectLanguage() {
        // Check if user has already set a preference
        const savedPreference = localStorage.getItem('preferredLanguage');
        if (savedPreference) {
            return savedPreference;
        }
        
        // First, check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('el') || browserLang.startsWith('gr')) {
            return 'el';
        }
        
        // Then try IP geolocation
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            if (data.country_code === 'GR') {
                return 'el';
            }
        } catch (error) {
            console.log('Geolocation detection failed, using default language');
        }
        
        // Fallback to English
        return 'en';
    }
};

// Language switching functionality
const languageSwitcher = {
    currentLang: 'en', // Will be set after detection
    
    async init() {
        // Detect language based on location
        this.currentLang = await geoLocationDetector.detectLanguage();
        this.setLanguage(this.currentLang);
        this.setupEventListeners();
        this.updatePlaceholders();
    },
    
    setupEventListeners() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update all elements with data-en and data-el attributes
        document.querySelectorAll('[data-en], [data-el]').forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // Handle placeholders separately
                    return;
                } else if (element.tagName === 'A' && element.querySelector('span')) {
                    // Handle links with nested spans (like CV download button)
                    const span = element.querySelector('span');
                    if (span) {
                        span.textContent = text;
                    } else {
                        element.textContent = text;
                    }
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update meta tags for SEO (including Athens location)
        this.updateMetaTags(lang);
        
        // Update body class for Greek font styling
        if (lang === 'el') {
            document.body.classList.add('greek-text');
        } else {
            document.body.classList.remove('greek-text');
        }
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update placeholders
        this.updatePlaceholders();
    },
    
    updateMetaTags(lang) {
        // Update title tag for SEO - keeping Athens in keywords only
        if (lang === 'el') {
            document.title = 'Χριστιάνα Ζενέλη - Κλινική Ψυχολόγος | Θεραπεία Άγχους & Online Συνεδρίες';
            this.updateMetaContent('description', 'Κλινική Ψυχολόγος. Εξειδικευμένη θεραπεία άγχους, κατάθλιψης και διαχείρισης στρες. Online συνεδρίες και ιδιαίτερες συνεδρίες. Έμπειρη, συμπονετική και επαγγελματική ψυχολογική υποστήριξη.');
            this.updateMetaContent('keywords', 'θεραπεία Αθήνα, ψυχολόγος Αθήνα, κλινική ψυχολόγος Αθήνα, θεραπεία άγχους Αθήνα, θεραπεία κατάθλιψης Αθήνα, online ψυχοθεραπεία Αθήνα, διαχείριση στρες Αθήνα, ψυχολογική υποστήριξη Αθήνα, ψυχοθεραπεία Αθήνα');
            this.updateMetaProperty('og:title', 'Χριστιάνα Ζενέλη - Κλινική Ψυχολόγος | Θεραπεία Άγχους & Online Συνεδρίες');
            this.updateMetaProperty('og:description', 'Κλινική Ψυχολόγος. Εξειδικευμένη θεραπεία άγχους, κατάθλιψης και διαχείρισης στρες. Online συνεδρίες.');
            this.updateMetaProperty('og:locale', 'el_GR');
        } else {
            document.title = 'Christiana Zeneli - Clinical Psychologist | Anxiety Therapy & Online Sessions';
            this.updateMetaContent('description', 'Clinical Psychologist. Specialized therapy for anxiety, depression, and stress management. Online sessions and private consultations. Experienced, compassionate, and professional psychological support.');
            this.updateMetaContent('keywords', 'therapy Athens, therapist Athens, psychologist Athens, clinical psychologist Athens, anxiety therapy Athens, depression therapy Athens, online therapy Athens, therapy in Athens Greece');
            this.updateMetaProperty('og:title', 'Christiana Zeneli - Clinical Psychologist | Anxiety Therapy & Online Sessions');
            this.updateMetaProperty('og:description', 'Clinical Psychologist. Specialized therapy for anxiety, depression, and stress management. Online sessions.');
            this.updateMetaProperty('og:locale', 'en_US');
        }
    },
    
    updateMetaContent(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = name;
            document.head.appendChild(meta);
        }
        meta.content = content;
    },
    
    updateMetaProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.content = content;
    },
    
    updatePlaceholders() {
        const textarea = document.getElementById('message');
        if (textarea) {
            const placeholderAttr = `data-${this.currentLang}-placeholder`;
            const placeholder = textarea.getAttribute(placeholderAttr);
            if (placeholder) {
                textarea.placeholder = placeholder;
            }
        }
    }
};

// Mobile menu toggle
const mobileMenu = {
    init() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (toggle && navMenu) {
            toggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                toggle.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    toggle.classList.remove('active');
                });
            });
        }
    }
};

// Smooth scrolling for anchor links
const smoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for sticky navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Contact form handling with EmailJS
const contactForm = {
    init() {
        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init("v1OlsYfRQaJl8gnma"); // Replace with your EmailJS public key
        }
        
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        }
    },
    
    async handleSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = this.currentLang === 'en' ? 'Sending...' : 'Αποστολή...';
        
        try {
            // Send email notification using EmailJS
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(
                    'site_email1',      // Replace with your EmailJS Service ID
                    'template_nzajsmc',     // Replace with your EmailJS Template ID for contact form
                    {
                        to_email: 'zeneli.psychologist@gmail.com',
                        from_name: data.name,
                        from_email: data.email,
                        phone: data.phone || 'Not provided',
                        message: data.message,
                        timestamp: new Date().toLocaleString(),
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        language: languageSwitcher.currentLang,
                        form_type: 'Appointment Booking',
                        page_url: window.location.href
                    }
                );
                
                const successMessage = this.currentLang === 'en' 
                    ? 'Thank you! Your message has been sent. I will get back to you soon.'
                    : 'Ευχαριστούμε! Το μήνυμά σας έχει σταλεί. Θα επικοινωνήσω μαζί σας σύντομα.';
                
                alert(successMessage);
                form.reset();
            } else {
                // Fallback if EmailJS is not loaded
                console.error('EmailJS not loaded');
                const errorMessage = this.currentLang === 'en'
                    ? 'There was an issue sending your message. Please email us directly at zeneli.psychologist@gmail.com'
                    : 'Υπήρξε πρόβλημα με την αποστολή του μηνύματος. Παρακαλώ στείλτε μας email απευθείας στο zeneli.psychologist@gmail.com';
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Contact form error:', error);
            const errorMessage = this.currentLang === 'en'
                ? 'There was an issue sending your message. Please try again or email us directly at zeneli.psychologist@gmail.com'
                : 'Υπήρξε πρόβλημα με την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή στείλτε μας email απευθείας στο zeneli.psychologist@gmail.com';
            alert(errorMessage);
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    },
    
    get currentLang() {
        return languageSwitcher.currentLang;
    }
};

// Navbar scroll effect with active link detection
const navbarScroll = {
    init() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class for enhanced styling
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active nav link based on scroll position
            this.updateActiveLink();
            
            lastScroll = currentScroll;
        }, { passive: true });
    },
    
    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let currentSection = '';
        const scrollPos = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
};

// Intersection Observer for fade-in animations
const scrollAnimations = {
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe service cards and info cards
        document.querySelectorAll('.service-card, .info-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }
};

// FAQ Accordion functionality
const faqAccordion = {
    init() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
};

// Newsletter form handling with EmailJS
const newsletterForm = {
    init() {
        const form = document.getElementById('newsletterForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        }
    },
    
    async handleSubmit(form) {
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = languageSwitcher.currentLang === 'en' 
            ? 'Subscribing...' 
            : 'Εγγραφή...';
        
        try {
            // Send email notification using EmailJS
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(
                    'site_email1',      // Replace with your EmailJS Service ID
                    'template_uquvf7q',     // Replace with your EmailJS Template ID for newsletter
                    {
                        to_email: 'zeneli.psychologist@gmail.com',
                        subscriber_email: email,
                        timestamp: new Date().toLocaleString(),
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        language: languageSwitcher.currentLang,
                        form_type: 'Newsletter Subscription',
                        page_url: window.location.href
                    }
                );
                
                const successMessage = languageSwitcher.currentLang === 'en' 
                    ? 'Thank you for subscribing! You will receive our latest updates.'
                    : 'Ευχαριστούμε για την εγγραφή! Θα λαμβάνετε τις τελευταίες μας ενημερώσεις.';
                
                alert(successMessage);
                form.reset();
            } else {
                // Fallback if EmailJS is not loaded
                console.error('EmailJS not loaded');
                const errorMessage = languageSwitcher.currentLang === 'en'
                    ? 'There was an issue with your subscription. Please email us directly at zeneli.psychologist@gmail.com'
                    : 'Υπήρξε πρόβλημα με την εγγραφή σας. Παρακαλώ στείλτε μας email απευθείας στο zeneli.psychologist@gmail.com';
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            const errorMessage = languageSwitcher.currentLang === 'en'
                ? 'There was an issue with your subscription. Please try again or email us directly at zeneli.psychologist@gmail.com'
                : 'Υπήρξε πρόβλημα με την εγγραφή σας. Παρακαλώ δοκιμάστε ξανά ή στείλτε μας email απευθείας στο zeneli.psychologist@gmail.com';
            alert(errorMessage);
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    }
};

// Update newsletter placeholder
languageSwitcher.updatePlaceholders = function() {
    const textarea = document.getElementById('message');
    if (textarea) {
        const placeholderAttr = `data-${this.currentLang}-placeholder`;
        const placeholder = textarea.getAttribute(placeholderAttr);
        if (placeholder) {
            textarea.placeholder = placeholder;
        }
    }
    
    // Update newsletter placeholder
    const newsletterInput = document.querySelector('#newsletterForm input[type="email"]');
    if (newsletterInput) {
        const placeholderAttr = `data-${this.currentLang}-placeholder`;
        const placeholder = newsletterInput.getAttribute(placeholderAttr);
        if (placeholder) {
            newsletterInput.placeholder = placeholder;
        }
    }
};

// Page Loading Animation
const pageLoader = {
    init() {
        // Add fade-in effect to page
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease-in';
        
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });
    }
};

// Button Click Animation
const buttonEffects = {
    init() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
};

// Form Enhancement
const formEnhancements = {
    init() {
        // Add floating label effect
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        
        formInputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    pageLoader.init();
    await languageSwitcher.init();
    mobileMenu.init();
    smoothScroll.init();
    contactForm.init();
    navbarScroll.init();
    scrollAnimations.init();
    faqAccordion.init();
    newsletterForm.init();
    buttonEffects.init();
    formEnhancements.init();
});

// Handle page visibility for better UX
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible again
        languageSwitcher.setLanguage(languageSwitcher.currentLang);
    }
});
