// ===========================
// LEAD MAGNET FORM HANDLER
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const leadForm = document.querySelector('.lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Validate email
            if (!isValidEmail(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح');
                return;
            }
            
            // Store email (in a real app, send to server)
            console.log('Email collected:', email);
            localStorage.setItem('biofermagro_email', email);
            
            // Show success message
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = '✓ تم الإرسال بنجاح!';
            button.style.background = '#8B9D5C';
            
            // Reset form
            emailInput.value = '';
            
            // Restore button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        });
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===========================
// SMOOTH SCROLL FOR NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// LAZY LOADING IMAGES
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// ANIMATION ON SCROLL
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all product cards and other elements
document.querySelectorAll('.product-card, .step, .carousel-item, .faq-item').forEach(el => {
    observer.observe(el);
});

// ===========================
// MOBILE MENU TOGGLE (if needed)
// ===========================

// Add mobile menu functionality if navigation becomes too crowded
function handleMobileNav() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (window.innerWidth <= 768) {
        // Mobile menu logic here if needed
    }
}

window.addEventListener('resize', handleMobileNav);
handleMobileNav();

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

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

// ===========================
// ANALYTICS & TRACKING
// ===========================

// Track button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('CTA clicked:', this.textContent);
        // Send to analytics service
    });
});

// Track FAQ interactions
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function() {
        console.log('FAQ toggled:', this.querySelector('summary').textContent);
    });
});

// ===========================
// ACCESSIBILITY IMPROVEMENTS
// ===========================

// Ensure keyboard navigation works
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or menus if needed
    }
});

// ===========================
// WHATSAPP LINK TRACKING
// ===========================

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('WhatsApp link clicked');
        // Track in analytics
    });
});

console.log('Biofermagro website loaded successfully! 🇩🇿');
