// =============================================================================
// NeerNova Technologies - Website JavaScript
// =============================================================================

// Strict mode for better error handling
'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================================================
    // Navigation Functionality
    // =============================================================================
    
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active nav link on scroll
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // =============================================================================
    // Intersection Observer for Animations
    // =============================================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all service cards and stat cards
    const animateElements = document.querySelectorAll('.service-card, .stat-card, .info-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // =============================================================================
    // Contact Form Handling
    // =============================================================================
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend integration)
        setTimeout(function() {
            // Create mailto link as fallback
            const mailtoLink = `mailto:accounts@neernova.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            
            // Show success message
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon. Opening your email client...';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
            
        }, 1000);
    });
    
    // =============================================================================
    // Scroll Animations
    // =============================================================================
    
    // Add staggered animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // =============================================================================
    // Performance Optimizations
    // =============================================================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(highlightNavLink, 50));
    
    // =============================================================================
    // Utility Functions
    // =============================================================================
    
    // Add current year to footer (if dynamic year is needed)
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
    }
    
    // =============================================================================
    // Gradient Orb Movement (Enhanced)
    // =============================================================================
    
    const orbs = document.querySelectorAll('.gradient-orb');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * 50 * speed;
            const y = (mouseY - 0.5) * 50 * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // =============================================================================
    // Console Welcome Message
    // =============================================================================
    
    console.log(
        '%c🚀 NeerNova Technologies',
        'font-size: 20px; font-weight: bold; color: #6366f1;'
    );
    console.log(
        '%cTransforming Business Through AI Innovation',
        'font-size: 14px; color: #94a3b8;'
    );
    console.log(
        '%cInterested in joining our team? Contact us at accounts@neernova.com',
        'font-size: 12px; color: #cbd5e1;'
    );
    
});

// =============================================================================
// Additional Features
// =============================================================================

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-bounce', 'none');
}