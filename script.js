// Language switching functionality
const languageSwitcher = {
    currentLang: localStorage.getItem('preferredLanguage') || 'en',
    
    init() {
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

// Contact form handling
const contactForm = {
    init() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        }
    },
    
    handleSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        const successMessage = this.currentLang === 'en' 
            ? 'Thank you! Your message has been sent. I will get back to you soon.'
            : 'Ευχαριστούμε! Το μήνυμά σας έχει σταλεί. Θα επικοινωνήσω μαζί σας σύντομα.';
        
        alert(successMessage);
        form.reset();
        
        // In a real implementation, you would:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
    },
    
    get currentLang() {
        return languageSwitcher.currentLang;
    }
};

// Navbar scroll effect
const navbarScroll = {
    init() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
            
            lastScroll = currentScroll;
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

// Newsletter form handling
const newsletterForm = {
    init() {
        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init("YOUR_PUBLIC_KEY"); // Will be set after user configures EmailJS
        }
        
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
                    'YOUR_SERVICE_ID',      // EmailJS Service ID
                    'YOUR_TEMPLATE_ID',     // EmailJS Template ID
                    {
                        to_email: 'kostasmavrg@gmail.com',
                        subscriber_email: email,
                        timestamp: new Date().toLocaleString(),
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        user_agent: navigator.userAgent,
                        language: languageSwitcher.currentLang,
                        page_url: window.location.href
                    }
                );
            }
            
            const successMessage = languageSwitcher.currentLang === 'en' 
                ? 'Thank you for subscribing! You will receive our latest updates.'
                : 'Ευχαριστούμε για την εγγραφή! Θα λαμβάνετε τις τελευταίες μας ενημερώσεις.';
            
            alert(successMessage);
            form.reset();
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            // Still show success to user even if email fails (graceful degradation)
            const successMessage = languageSwitcher.currentLang === 'en' 
                ? 'Thank you for subscribing! You will receive our latest updates.'
                : 'Ευχαριστούμε για την εγγραφή! Θα λαμβάνετε τις τελευταίες μας ενημερώσεις.';
            alert(successMessage);
            form.reset();
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    languageSwitcher.init();
    mobileMenu.init();
    smoothScroll.init();
    contactForm.init();
    navbarScroll.init();
    scrollAnimations.init();
    faqAccordion.init();
    newsletterForm.init();
});

// Handle page visibility for better UX
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible again
        languageSwitcher.setLanguage(languageSwitcher.currentLang);
    }
});
