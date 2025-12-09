// ===========================
// Parallax Scrolling Effect
// ===========================
let lastScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
    const scrolled = window.scrollY;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const parallaxBg = document.querySelector('.parallax-bg');
        const parallaxMid = document.querySelector('.parallax-mid');
        const parallaxFg = document.querySelector('.parallax-fg');

        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.01}%)`;
        }

        if (parallaxMid) {
            parallaxMid.style.transform = `translateY(${scrolled * -0.15}%)`;
        }

        if (parallaxFg) {
            parallaxFg.style.transform = `translateY(${scrolled * 0.05}%)`;
        }
    }

    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// ===========================
// Navigation Scroll Effect
// ===========================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}, { passive: true });

// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for privacy link (it's a placeholder)
        if (href === '#privacy') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.fade-in-up, .glass-card');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// ===========================
// Form Validation
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        let isValid = true;

        // Validate name
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required');
            isValid = false;
        }

        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }

        // Validate message
        const messageInput = document.getElementById('message');
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required');
            isValid = false;
        }

        // Validate consent
        const consentInput = document.getElementById('consent');
        if (!consentInput.checked) {
            showError(consentInput, 'Please agree to be contacted');
            isValid = false;
        }

        if (isValid) {
            // Form is valid - show success message
            showSuccessMessage();
            contactForm.reset();
        }
    });
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.textContent = message;
    }
}

function showSuccessMessage() {
    const formContainer = document.querySelector('.contact-form-container');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(11, 77, 46, 0.2), rgba(212, 175, 55, 0.2));
            border: 2px solid var(--gold);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        ">
            <svg style="width: 60px; height: 60px; color: var(--gold); margin-bottom: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 style="color: var(--gold); font-family: var(--font-serif); margin-bottom: 0.5rem;">Thank You!</h3>
            <p style="color: var(--snow);">Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
    `;

    formContainer.insertBefore(successDiv, contactForm);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===========================
// Newsletter Form
// ===========================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value.trim()) {
            // Show success feedback
            const button = newsletterForm.querySelector('.btn-newsletter');
            const originalHTML = button.innerHTML;

            button.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 13l4 4L19 7"/>
                </svg>
            `;

            setTimeout(() => {
                button.innerHTML = originalHTML;
                emailInput.value = '';
            }, 2000);
        }
    });
}

// ===========================
// Add Hover Effects to Cards
// ===========================
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================
document.addEventListener('keydown', (e) => {
    // Allow Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
    }
});

// ===========================
// Performance: Lazy Load Images (if any are added)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Add Festive Cursor Effect (Optional Enhancement)
// ===========================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: var(--gold);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnimation 1s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(0) translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Optional: Uncomment to enable sparkle effect on click
// document.addEventListener('click', (e) => {
//     createSparkle(e.clientX, e.clientY);
// });

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🎄 Welcome to JOD Art Services! 🎄', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cMaking brands unforgettable since 2024', 'color: #F7FAFB; font-size: 14px;');

// ===========================
// Initialize on Load
// ===========================
window.addEventListener('load', () => {
    // Trigger initial parallax update
    updateParallax();

    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
});
