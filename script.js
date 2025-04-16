// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialization
    initScrollReveal();
    initCustomCursor();
    initMobileMenu();
    initScrollEvents();
    initCounters();
    initContactForm();
});

// Initialize Scroll Reveal animations
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });

    // Reveal text elements
    sr.reveal('.reveal-text', { 
        delay: 200,
        interval: 150
    });

    // Reveal elements
    sr.reveal('.reveal-element', {
        delay: 300,
        interval: 150
    });

    // Custom reveal for specific sections
    sr.reveal('.service-card', {
        interval: 150
    });

    sr.reveal('.project-item', {
        interval: 150,
        scale: 0.95
    });

    sr.reveal('.contact-item', {
        interval: 150
    });
}

// Initialize custom cursor
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.innerWidth < 992) return;

    window.addEventListener('mousemove', function(e) {
        // Update cursor dot position immediately
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // Update cursor outline with slight delay for smoothness
        setTimeout(() => {
            cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }, 80);
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .project-item, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorDot.style.opacity = '0.5';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorDot.style.opacity = '1';
        });
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.createElement('div');
    mobileNav.classList.add('mobile-nav');
    
    // Create mobile navigation menu
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        mobileNav.appendChild(newLink);
    });
    
    document.body.appendChild(mobileNav);
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on links
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// Initialize scroll events
function initScrollEvents() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        // Add scrolled class to header when scrolled
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize counters animation
function initCounters() {
    const counterElements = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    function animateCounters() {
        if (hasAnimated) return;
        
        counterElements.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            let count = 0;
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            const timer = setInterval(() => {
                count += increment;
                
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(count);
                }
            }, 16);
        });
        
        hasAnimated = true;
    }
    
    // Trigger counter animation when about section is in view
    const aboutSection = document.querySelector('.about');
    
    window.addEventListener('scroll', function() {
        const position = aboutSection.getBoundingClientRect();
        
        // If about section is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            animateCounters();
        }
    });
}

// Initialize contact form
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('请填写所有字段');
            return;
        }
        
        // This is where you would typically send the form data to a server
        // For this static demo, we'll just show a success message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = '发送中...';
        
        // Simulate server request
        setTimeout(() => {
            form.reset();
            submitBtn.textContent = '发送成功!';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        }, 1500);
    });
} 