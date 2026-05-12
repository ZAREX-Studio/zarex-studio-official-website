const LANGUAGE_STORAGE_KEY = 'zarex-studio-language';
const DEFAULT_LANGUAGE = 'en';

const i18n = {
    zh: {
        language: {
            htmlLang: 'zh-CN',
            switcherLabel: '选择网站语言',
            name: '中文'
        },
        meta: {
            title: 'ZAREX Studio | 奇点智构 - AI、互联网与智能应用技术工作室',
            description: 'ZAREX Studio (奇点智构) 是一个专注于 AI 应用落地、互联网产品开发、数据平台和智能工具的技术工作室。',
            socialTitle: 'ZAREX Studio | AI、互联网与智能应用技术工作室',
            socialDescription: '面向团队和企业提供 AI 应用落地、互联网产品开发、数据平台和智能工具建设。',
            imageAlt: 'ZAREX Studio 技术工作室分享预览图',
            ogLocale: 'zh_CN'
        },
        brand: {
            subtitle: '奇点智构'
        },
        nav: {
            about: '关于我们',
            services: '服务',
            projects: '项目',
            contact: '联系'
        },
        mobile: {
            menuOpen: '打开导航菜单',
            menuClose: '关闭导航菜单'
        },
        hero: {
            headingLead: '探索',
            headingAccent: '技术',
            headingTail: '的无限可能',
            description: '我们专注于AI、互联网与智能应用领域的创新解决方案',
            primaryCta: '联系我们',
            secondaryCta: '探索项目',
            notesLabel: '核心能力',
            noteAi: 'AI 应用落地',
            noteData: '数据平台',
            noteTools: '智能化工具'
        },
        about: {
            heading: '关于我们',
            paragraphOne: 'ZAREX Studio（奇点智构）是一个由充满激情的技术专家组成的团队，致力于在AI、互联网与智能应用领域的前沿探索。',
            paragraphTwo: '我们相信技术可以改变世界，并且致力于将最新的技术转化为实用的解决方案。',
            paragraphThree: '无论是人工智能、大数据分析还是智能应用程序，我们都以创新思维和精湛技术为客户创造价值。',
            statExperience: '年技术经验',
            statProjects: '成功项目',
            statExperts: '技术专家'
        },
        services: {
            heading: '我们的服务',
            ai: {
                title: '人工智能解决方案',
                description: '从机器学习算法到自然语言处理，我们提供全方位的AI解决方案。'
            },
            web: {
                title: '互联网应用开发',
                description: '从网站到复杂的网络应用，我们使用最新技术创建高性能的数字体验。'
            },
            smart: {
                title: '智能应用开发',
                description: '将AI与实用功能相结合，创建能真正改善用户生活的智能应用。'
            },
            data: {
                title: '数据分析与可视化',
                description: '从复杂数据中提取洞见，通过直观的可视化帮助您做出明智决策。'
            }
        },
        projects: {
            heading: '精选项目',
            support: {
                title: '智能客服平台',
                description: '基于NLP技术的新一代客户服务解决方案',
                alt: '智能客服平台项目展示图'
            },
            analytics: {
                title: '数据分析平台',
                description: '企业级实时数据分析与可视化系统',
                alt: '数据分析平台项目展示图'
            },
            home: {
                title: '智能家居控制系统',
                description: '集成AI的全屋智能家居解决方案',
                alt: '智能家居控制系统项目展示图'
            }
        },
        contact: {
            heading: '联系我们',
            emailLabel: '电子邮件',
            addressLabel: '地址',
            addressValue: '中国，北京市海淀区',
            nameLabel: '您的姓名',
            namePlaceholder: '例如：张三',
            emailInputLabel: '您的邮箱',
            emailPlaceholder: '例如：name@company.com',
            messageLabel: '您的留言',
            messagePlaceholder: '请简要描述您的需求…',
            formHint: '提交后会打开默认邮件客户端，并将内容发送至 contact@zarex.studio。',
            submit: '发送留言',
            validationMissing: '请完整填写姓名、邮箱和留言内容。',
            validationEmail: '请输入有效的邮箱地址，方便我们联系您。',
            openingClient: '正在打开邮件客户端…',
            generatingEmail: '正在为您生成邮件内容…',
            mailtoFallback: '如果邮件客户端没有自动打开，请直接发送邮件到 contact@zarex.studio。',
            mailSubject: '官网咨询',
            mailBodyName: '姓名',
            mailBodyEmail: '邮箱',
            mailBodyMessage: '需求说明'
        },
        footer: {
            tagline: '探索技术的无限可能',
            copyright: '© 2026 ZAREX Studio (奇点智构). 保留所有权利.'
        }
    },
    en: {
        language: {
            htmlLang: 'en',
            switcherLabel: 'Select website language',
            name: 'English'
        },
        meta: {
            title: 'ZAREX Studio | AI, Web, and Intelligent Application Studio',
            description: 'ZAREX Studio is a technology studio focused on AI implementation, web products, data platforms, and intelligent tools.',
            socialTitle: 'ZAREX Studio | AI, Web, and Intelligent Application Studio',
            socialDescription: 'AI implementation, web product development, data platforms, and intelligent tools for teams and businesses.',
            imageAlt: 'ZAREX Studio technology studio social preview',
            ogLocale: 'en_US'
        },
        brand: {
            subtitle: 'AI Innovation Studio'
        },
        nav: {
            about: 'About',
            services: 'Services',
            projects: 'Projects',
            contact: 'Contact'
        },
        mobile: {
            menuOpen: 'Open navigation menu',
            menuClose: 'Close navigation menu'
        },
        hero: {
            headingLead: 'Explore the ',
            headingAccent: 'Power',
            headingTail: ' of Technology',
            description: 'We build innovative solutions across AI, web platforms, and intelligent applications.',
            primaryCta: 'Contact Us',
            secondaryCta: 'View Projects',
            notesLabel: 'Core capabilities',
            noteAi: 'AI Implementation',
            noteData: 'Data Platforms',
            noteTools: 'Intelligent Tools'
        },
        about: {
            heading: 'About Us',
            paragraphOne: 'ZAREX Studio is a team of passionate technologists exploring the frontier of AI, web products, and intelligent applications.',
            paragraphTwo: 'We believe technology can change the world, and we turn emerging ideas into practical, reliable solutions.',
            paragraphThree: 'From artificial intelligence and data analytics to intelligent software, we create value through clear thinking and strong engineering.',
            statExperience: 'Years of Experience',
            statProjects: 'Successful Projects',
            statExperts: 'Technical Experts'
        },
        services: {
            heading: 'Our Services',
            ai: {
                title: 'AI Solutions',
                description: 'From machine learning models to natural language processing, we deliver end-to-end AI solutions.'
            },
            web: {
                title: 'Web Application Development',
                description: 'From websites to complex web platforms, we build high-performance digital experiences with modern technology.'
            },
            smart: {
                title: 'Intelligent App Development',
                description: 'We combine AI with practical product features to create smart applications that improve everyday workflows.'
            },
            data: {
                title: 'Data Analytics and Visualization',
                description: 'We extract insight from complex data and present it clearly so teams can make better decisions.'
            }
        },
        projects: {
            heading: 'Selected Projects',
            support: {
                title: 'Intelligent Customer Support Platform',
                description: 'A next-generation customer service solution powered by NLP technology.',
                alt: 'Intelligent customer support platform project preview'
            },
            analytics: {
                title: 'Data Analytics Platform',
                description: 'An enterprise-grade system for real-time analytics and data visualization.',
                alt: 'Data analytics platform project preview'
            },
            home: {
                title: 'Smart Home Control System',
                description: 'A whole-home intelligent control solution integrated with AI.',
                alt: 'Smart home control system project preview'
            }
        },
        contact: {
            heading: 'Contact Us',
            emailLabel: 'Email',
            addressLabel: 'Address',
            addressValue: 'Haidian District, Beijing, China',
            nameLabel: 'Your Name',
            namePlaceholder: 'Example: Alex Chen',
            emailInputLabel: 'Your Email',
            emailPlaceholder: 'Example: name@company.com',
            messageLabel: 'Your Message',
            messagePlaceholder: 'Briefly describe what you need...',
            formHint: 'Submitting will open your default email client and send the message to contact@zarex.studio.',
            submit: 'Send Message',
            validationMissing: 'Please complete your name, email, and message.',
            validationEmail: 'Please enter a valid email address so we can contact you.',
            openingClient: 'Opening your email client...',
            generatingEmail: 'Preparing your email...',
            mailtoFallback: 'If your email client did not open, please email contact@zarex.studio directly.',
            mailSubject: 'Website inquiry',
            mailBodyName: 'Name',
            mailBodyEmail: 'Email',
            mailBodyMessage: 'Project details'
        },
        footer: {
            tagline: 'Explore the power of technology',
            copyright: '© 2026 ZAREX Studio. All rights reserved.'
        }
    }
};

let currentLanguage = DEFAULT_LANGUAGE;

document.addEventListener('DOMContentLoaded', function() {
    currentLanguage = getInitialLanguage();
    applyLanguage(currentLanguage);
    initLanguageSwitcher();
    initScrollReveal();
    initMobileMenu();
    initScrollEvents();
    initCounters();
    initContactForm();
});

function getInitialLanguage() {
    const urlLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
    if (urlLanguage) {
        storeLanguage(urlLanguage);
        return urlLanguage;
    }

    const savedLanguage = normalizeLanguage(readStoredLanguage());
    if (savedLanguage) {
        return savedLanguage;
    }

    const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || DEFAULT_LANGUAGE];

    const preferredLanguage = browserLanguages
        .map(normalizeLanguage)
        .find(Boolean);

    return preferredLanguage || DEFAULT_LANGUAGE;
}

function normalizeLanguage(language) {
    if (!language) {
        return '';
    }

    const normalized = language.toLowerCase();

    if (normalized.startsWith('zh')) {
        return 'zh';
    }

    if (normalized.startsWith('en')) {
        return 'en';
    }

    return '';
}

function getTranslation(key, language = currentLanguage) {
    return key.split('.').reduce((value, part) => {
        if (value && Object.prototype.hasOwnProperty.call(value, part)) {
            return value[part];
        }

        return undefined;
    }, i18n[language]);
}

function applyLanguage(language) {
    currentLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;
    const translations = i18n[currentLanguage];

    document.documentElement.lang = translations.language.htmlLang;
    document.documentElement.dataset.language = currentLanguage;
    document.title = translations.meta.title;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const value = getTranslation(element.dataset.i18n);
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    updateTranslatedAttribute('data-i18n-placeholder', 'placeholder');
    updateTranslatedAttribute('data-i18n-alt', 'alt');
    updateTranslatedAttribute('data-i18n-content', 'content');
    updateTranslatedAttribute('data-i18n-aria-label', 'aria-label');
    updateOpenGraphLocale(translations.meta.ogLocale);

    document.querySelectorAll('[data-language-option]').forEach(button => {
        const isActive = button.dataset.languageOption === currentLanguage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    updateMobileMenuLabels();
}

function updateTranslatedAttribute(dataAttribute, targetAttribute) {
    document.querySelectorAll(`[${dataAttribute}]`).forEach(element => {
        const value = getTranslation(element.getAttribute(dataAttribute));
        if (typeof value === 'string') {
            element.setAttribute(targetAttribute, value);
        }
    });
}

function updateOpenGraphLocale(locale) {
    const localeMeta = document.querySelector('meta[property="og:locale"]');

    if (localeMeta && locale) {
        localeMeta.setAttribute('content', locale);
    }
}

function initLanguageSwitcher() {
    document.querySelectorAll('[data-language-option]').forEach(button => {
        button.addEventListener('click', function() {
            const language = normalizeLanguage(button.dataset.languageOption);
            if (!language || language === currentLanguage) {
                return;
            }

            storeLanguage(language);
            applyLanguage(language);
            syncMobileNav();
        });
    });
}

function storeLanguage(language) {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
        // Language switching still works when browser storage is unavailable.
    }
}

function readStoredLanguage() {
    try {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch (error) {
        return '';
    }
}

function syncMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav) {
        return;
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = mobileNav.querySelectorAll('a');

    navLinks.forEach((link, index) => {
        const mobileLink = mobileLinks[index];
        if (!mobileLink) {
            return;
        }

        mobileLink.textContent = link.textContent;
        mobileLink.setAttribute('href', link.getAttribute('href'));
    });
}

function updateMobileMenuLabels() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!menuBtn) {
        return;
    }

    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-label', getTranslation(isOpen ? 'mobile.menuClose' : 'mobile.menuOpen'));
}

// Initialize Scroll Reveal animations
function initScrollReveal() {
    if (typeof ScrollReveal !== 'function') {
        return;
    }

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '28px',
        duration: 620,
        delay: 80,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });

    sr.reveal('.reveal-text', {
        delay: 80,
        interval: 70
    });

    sr.reveal('.reveal-element', {
        delay: 100,
        interval: 70
    });

    sr.reveal('.reveal-form', {
        delay: 0,
        distance: '16px',
        duration: 500
    });

    sr.reveal('.service-card', {
        interval: 70
    });

    sr.reveal('.project-item', {
        interval: 70,
        scale: 0.95
    });

    sr.reveal('.contact-item', {
        interval: 70
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!menuBtn) return;

    const mobileNav = document.createElement('div');

    mobileNav.id = 'mobile-nav';
    mobileNav.classList.add('mobile-nav');

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
        menuBtn.setAttribute('aria-label', getTranslation(isOpen ? 'mobile.menuClose' : 'mobile.menuOpen'));
    }

    menuBtn.addEventListener('click', function() {
        const isOpen = menuBtn.getAttribute('aria-expanded') !== 'true';
        setMenuState(isOpen);
    });

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
    if (!header) return;

    window.addEventListener('scroll', function() {
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
            const duration = 2000;
            const increment = target / (duration / 16);

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

    window.addEventListener('scroll', function() {
        const position = aboutSection.getBoundingClientRect();

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

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            setStatus(getTranslation('contact.validationMissing'), 'is-error');
            return;
        }

        if (!emailInput.checkValidity()) {
            setStatus(getTranslation('contact.validationEmail'), 'is-error');
            emailInput.focus();
            return;
        }

        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = getTranslation('contact.openingClient');
        setStatus(getTranslation('contact.generatingEmail'), 'is-success');

        const subject = encodeURIComponent(`${getTranslation('contact.mailSubject')} - ${name}`);
        const body = encodeURIComponent(
            `${getTranslation('contact.mailBodyName')}: ${name}\n${getTranslation('contact.mailBodyEmail')}: ${email}\n\n${getTranslation('contact.mailBodyMessage')}:\n${message}`
        );

        window.location.href = `mailto:contact@zarex.studio?subject=${subject}&body=${body}`;

        window.setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            setStatus(getTranslation('contact.mailtoFallback'), 'is-success');
        }, 600);
    });
}
