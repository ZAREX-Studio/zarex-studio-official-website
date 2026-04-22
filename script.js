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
    if (typeof ScrollReveal !== 'function') {
        return;
    }

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

    sr.reveal('.reveal-form', {
        delay: 0,
        distance: '16px',
        duration: 500
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
    let cursorTimer = null;

    if (!cursorDot || !cursorOutline || window.innerWidth < 992) return;

    window.addEventListener('mousemove', function(e) {
        // Update cursor dot position immediately
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // Update cursor outline with slight delay for smoothness
        if (cursorTimer) {
            clearTimeout(cursorTimer);
        }

        cursorTimer = setTimeout(() => {
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
    if (!menuBtn) return;

    const mobileNav = document.createElement('div');
    const menuLabelOpen = '打开导航菜单';
    const menuLabelClose = '关闭导航菜单';

    mobileNav.id = 'mobile-nav';
    mobileNav.classList.add('mobile-nav');
    
    // Create mobile navigation menu
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        mobileNav.appendChild(newLink);
    });
    
    document.body.appendChild(mobileNav);

    function setMenuState(isOpen) {
        menuBtn.classList.toggle('active', isOpen);
        mobileNav.classList.toggle('active', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        menuBtn.setAttribute('aria-label', isOpen ? menuLabelClose : menuLabelOpen);
    }

    menuBtn.addEventListener('click', function() {
        const isOpen = menuBtn.getAttribute('aria-expanded') !== 'true';
        setMenuState(isOpen);
    });
    
    // Close mobile menu when clicking on links
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
            setMenuState(false);
            menuBtn.focus();
        }
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
    const aboutSection = document.querySelector('.about');
    let hasAnimated = false;

    if (!counterElements.length || !aboutSection) return;
    
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

    const submitBtn = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const messageInput = form.querySelector('#contact-message');

    if (!submitBtn || !status || !nameInput || !emailInput || !messageInput) return;

    function setStatus(message, tone) {
        status.textContent = message;
        status.classList.remove('is-error', 'is-success');
        if (tone) {
            status.classList.add(tone);
        }
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            setStatus('请完整填写姓名、邮箱和留言内容。', 'is-error');
            return;
        }

        if (!emailInput.checkValidity()) {
            setStatus('请输入有效的邮箱地址，方便我们联系您。', 'is-error');
            emailInput.focus();
            return;
        }
        
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = '正在打开邮件客户端…';
        setStatus('正在为您生成邮件内容…', 'is-success');

        const subject = encodeURIComponent(`官网咨询 - ${name}`);
        const body = encodeURIComponent(
            `姓名：${name}\n邮箱：${email}\n\n需求说明：\n${message}`
        );

        window.location.href = `mailto:contact@zarex.studio?subject=${subject}&body=${body}`;

        window.setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            setStatus('如果邮件客户端没有自动打开，请直接发送邮件到 contact@zarex.studio。', 'is-success');
        }, 600);
    });
} 
