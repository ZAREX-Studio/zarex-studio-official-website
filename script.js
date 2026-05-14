const LANGUAGE_STORAGE_KEY = 'zarex-studio-language';
const DEFAULT_LANGUAGE = 'zh';
const LANGUAGE_URLS = {
    zh: 'index.html',
    en: 'en/index.html'
};
const SITE_ROOT_URL = getSiteRootUrl();

const i18n = {
    zh: {
        language: {
            htmlLang: 'zh-CN',
            switcherLabel: '选择网站语言',
            name: '中文'
        },
        meta: {
            title: 'ZAREX Studio 奇点智构 | AI 应用、官网与业务工具开发',
            description: 'ZAREX Studio（奇点智构）帮助企业把官网、管理工具、AI 助手和数据看板做成可上线的线上工具，覆盖需求梳理、设计开发、部署和持续迭代。',
            socialTitle: 'ZAREX Studio 奇点智构 | AI 应用、官网与业务工具开发',
            socialDescription: '把官网、管理工具、AI 助手和数据看板做成可上线、可持续迭代的线上工具。',
            imageAlt: 'ZAREX Studio 奇点智构官网预览图',
            ogLocale: 'zh_CN'
        },
        brand: {
            subtitle: '奇点智构'
        },
        nav: {
            about: '关于我们',
            services: '服务',
            projects: '能做什么',
            contact: '联系'
        },
        mobile: {
            menuOpen: '打开导航菜单',
            menuClose: '关闭导航菜单'
        },
        hero: {
            headingLead: '把你的',
            headingAccent: '业务想法',
            headingTail: '做成能用的线上工具',
            description: '不需要先懂技术。你告诉我们想解决什么问题，我们帮你把官网、管理工具、AI 助手或数据看板做出来、上线并持续改好。',
            primaryCta: '联系我们',
            secondaryCta: '看看能做什么',
            notesLabel: '核心能力',
            noteAi: '更多客户咨询',
            noteData: '少做重复工作',
            noteTools: '看懂经营数据',
            valueLabel: '你会得到什么',
            valueIntro: '少讲概念，直接看结果：更好获客、更省时间、更容易管理。',
            valueLeadTitle: '让客户更愿意咨询',
            valueLeadDescription: '把官网和服务介绍讲清楚，让访客知道你能解决什么、下一步该联系谁。',
            valueEfficiencyTitle: '把重复工作交给工具',
            valueEfficiencyDescription: '把报价、登记、通知、整理资料等反复做的事，做成可复用的线上流程。',
            valueClarityTitle: '重要数据一眼看懂',
            valueClarityDescription: '把订单、客户和运营数据整理成看板，方便你知道哪里做得好、哪里要调整。',
            valueAssetTitle: '做完不是一次性项目',
            valueAssetDescription: '上线后还能继续改、继续加功能，让工具跟着业务一起成长。'
        },
        about: {
            heading: '关于我们',
            paragraphOne: 'ZAREX Studio（奇点智构）是一个由充满激情的技术专家组成的团队，致力于在AI、互联网与智能应用领域的前沿探索。',
            paragraphTwo: '我们相信技术可以改变世界，并且致力于将最新的技术转化为实用的解决方案。',
            paragraphThree: '无论是人工智能、大数据分析还是智能应用程序，我们都以创新思维和精湛技术为客户创造价值。',
            statExperience: '年技术经验',
            statProjects: '类常见需求',
            statExperts: '技术专家'
        },
        services: {
            heading: '我们的服务',
            learnMore: '了解更多',
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
            heading: '适合交给我们的需求',
            intro: '如果你有一个业务想法、一个反复手工处理的流程，或一堆看不清的数据，可以先从这些具体需求开始。',
            goodFit: '适合交给我们',
            inputLabel: '常见输入',
            outputLabel: '可交付',
            discuss: '讨论这个需求',
            website: {
                title: '官网与服务展示',
                description: '把公司介绍、服务内容、案例材料和联系方式整理成清晰可信的官网或落地页。',
                input: '公司介绍、服务资料、图片、联系方式',
                output: '官网、落地页、咨询表单、上线部署'
            },
            workflow: {
                title: '管理工具与业务流程',
                description: '把报价、登记、审批、通知、客户跟进等重复工作做成线上流程。',
                input: '表格、流程说明、人员角色、通知规则',
                output: '录入后台、权限、提醒、查询和统计'
            },
            assistant: {
                title: 'AI 助手与知识库问答',
                description: '把文档、产品资料、FAQ 或业务规则接入 AI，做成客服、销售、运营或内部助手。',
                input: '文档、FAQ、产品资料、常见问题',
                output: '问答助手、资料检索、工作流入口'
            },
            dashboard: {
                title: '数据看板与经营分析',
                description: '把订单、客户、销售、运营数据汇总成看板，让关键指标更容易看懂。',
                input: '表格、订单记录、客户数据、运营报表',
                output: '指标看板、筛选查询、导出和定期报表'
            }
        },
        contact: {
            heading: '说说你想做什么',
            intro: '不用准备完整方案。留下一个联系方式，我们会根据你的想法判断下一步怎么做。',
            emailLabel: '直接发邮件',
            copyEmail: '复制邮箱',
            copySuccess: '邮箱已复制。',
            copyFallback: '无法自动复制，请手动复制 contact@zarex.studio。',
            responseLabel: '我们会怎么对接',
            responseValue: '收到信息后，我们会先确认目标、预算范围和最小可上线版本。',
            formTitle: '留下联系方式',
            formIntro: '只填联系方式也可以；如果方便，可以顺手写一句想解决的问题。',
            nameLabel: '怎么称呼你（选填）',
            namePlaceholder: '例如：张三 / Ray',
            contactInputLabel: '联系方式',
            contactPlaceholder: '邮箱、微信或电话都可以',
            messageLabel: '想解决的问题（选填）',
            messagePlaceholder: '例如：想做一个官网、把表格流程搬到线上、做一个 AI 问答助手…',
            formHint: '这是静态页面：点击后会打开你的邮件客户端，并自动填好要发送给我们的内容。',
            submit: '生成邮件',
            validationMissing: '请至少填写一个联系方式，方便我们联系您。',
            openingClient: '正在打开邮件客户端…',
            generatingEmail: '已生成邮件内容，请在邮件客户端中确认发送。',
            mailtoFallback: '如果邮件客户端没有自动打开，可以复制邮箱 contact@zarex.studio 直接发送。',
            mailSubject: '官网需求咨询',
            mailBodyName: '称呼',
            mailBodyContact: '联系方式',
            mailBodyMessage: '想解决的问题',
            mailBodyEmpty: '（暂未填写）'
        },
        footer: {
            tagline: '从技术原点出发，构建可用系统',
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
            title: 'ZAREX Studio | AI Apps, Websites, and Business Tools',
            description: 'ZAREX Studio helps teams build websites, internal tools, AI assistants, and dashboards from planning to deployment and ongoing iteration.',
            socialTitle: 'ZAREX Studio | AI Apps, Websites, and Business Tools',
            socialDescription: 'Launch-ready websites, internal tools, AI assistants, and dashboards for teams and businesses.',
            imageAlt: 'ZAREX Studio website social preview',
            ogLocale: 'en_US'
        },
        brand: {
            subtitle: 'AI Innovation Studio'
        },
        nav: {
            about: 'About',
            services: 'Services',
            projects: 'What We Build',
            contact: 'Contact'
        },
        mobile: {
            menuOpen: 'Open navigation menu',
            menuClose: 'Close navigation menu'
        },
        hero: {
            headingLead: 'Turn your ',
            headingAccent: 'idea',
            headingTail: ' into a tool people can use',
            description: 'You do not need to understand the technology first. Tell us the problem, and we help build the website, internal tool, AI assistant, or dashboard that solves it.',
            primaryCta: 'Contact Us',
            secondaryCta: 'See What We Build',
            notesLabel: 'Core capabilities',
            noteAi: 'More customer inquiries',
            noteData: 'Less repeat work',
            noteTools: 'Clearer business numbers',
            valueLabel: 'What you get',
            valueIntro: 'Less jargon, clearer outcomes: more inquiries, less busywork, and easier management.',
            valueLeadTitle: 'More people ask about your service',
            valueLeadDescription: 'Make your website and offer easier to understand, so visitors know what you solve and how to contact you.',
            valueEfficiencyTitle: 'Less repeat work for your team',
            valueEfficiencyDescription: 'Turn quotes, sign-ups, notices, and document sorting into simple online workflows.',
            valueClarityTitle: 'See the important numbers',
            valueClarityDescription: 'Put orders, customers, and daily operation data into clear dashboards so you know what needs attention.',
            valueAssetTitle: 'A tool that can keep growing',
            valueAssetDescription: 'After launch, it can keep changing and adding features as your business grows.'
        },
        about: {
            heading: 'About Us',
            paragraphOne: 'ZAREX Studio is a team of passionate technologists exploring the frontier of AI, web products, and intelligent applications.',
            paragraphTwo: 'We believe technology can change the world, and we turn emerging ideas into practical, reliable solutions.',
            paragraphThree: 'From artificial intelligence and data analytics to intelligent software, we create value through clear thinking and strong engineering.',
            statExperience: 'Years of Experience',
            statProjects: 'Use Case Areas',
            statExperts: 'Technical Experts'
        },
        services: {
            heading: 'Our Services',
            learnMore: 'Learn more',
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
            heading: 'Work You Can Bring To Us',
            intro: 'If you have a business idea, a repetitive workflow, or messy data that is hard to read, these are good starting points.',
            goodFit: 'Good fit',
            inputLabel: 'Common input',
            outputLabel: 'Possible output',
            discuss: 'Discuss this need',
            website: {
                title: 'Website and Service Pages',
                description: 'Turn company info, service details, proof materials, and contact paths into a clear website or landing page.',
                input: 'Company info, service notes, images, contact details',
                output: 'Website, landing page, inquiry form, launch setup'
            },
            workflow: {
                title: 'Internal Tools and Workflows',
                description: 'Turn quotes, registrations, approvals, notifications, and customer follow-ups into simple online workflows.',
                input: 'Spreadsheets, process notes, team roles, notification rules',
                output: 'Admin screens, permissions, reminders, search, reporting'
            },
            assistant: {
                title: 'AI Assistants and Knowledge Q&A',
                description: 'Connect documents, product materials, FAQs, or business rules to AI assistants for support, sales, operations, or internal use.',
                input: 'Documents, FAQs, product materials, common questions',
                output: 'Q&A assistant, knowledge search, workflow entry points'
            },
            dashboard: {
                title: 'Dashboards and Business Insights',
                description: 'Bring orders, customers, sales, and operations data into dashboards so key numbers are easier to understand.',
                input: 'Spreadsheets, order records, customer data, operation reports',
                output: 'Dashboards, filters, exports, regular reports'
            }
        },
        contact: {
            heading: 'Tell Us What You Want To Build',
            intro: 'You do not need a complete brief. Leave one way to reach you, and we will help decide the next step.',
            emailLabel: 'Email Us Directly',
            copyEmail: 'Copy email',
            copySuccess: 'Email copied.',
            copyFallback: 'Copy failed. Please copy contact@zarex.studio manually.',
            responseLabel: 'What Happens Next',
            responseValue: 'We will first clarify the goal, budget range, and smallest launchable version.',
            formTitle: 'Leave a Contact Method',
            formIntro: 'A contact method is enough. Add one sentence about the problem if convenient.',
            nameLabel: 'How should we address you? (optional)',
            namePlaceholder: 'Example: Alex / Ray',
            contactInputLabel: 'Contact method',
            contactPlaceholder: 'Email, WeChat, or phone',
            messageLabel: 'Problem to solve (optional)',
            messagePlaceholder: 'Example: build a website, move spreadsheets online, create an AI assistant...',
            formHint: 'This is a static site: clicking will open your email client with a prefilled message to us.',
            submit: 'Create Email',
            validationMissing: 'Please leave at least one contact method so we can reach you.',
            openingClient: 'Opening your email client...',
            generatingEmail: 'Email draft created. Please confirm sending in your email client.',
            mailtoFallback: 'If your email client did not open, copy contact@zarex.studio and email us directly.',
            mailSubject: 'Website inquiry',
            mailBodyName: 'Name',
            mailBodyContact: 'Contact method',
            mailBodyMessage: 'Problem to solve',
            mailBodyEmpty: '(not provided)'
        },
        footer: {
            tagline: 'Building usable systems from the point of origin',
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
    initContactCopyButtons();
});

function getInitialLanguage() {
    const urlLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
    if (urlLanguage) {
        storeLanguage(urlLanguage);
        redirectToLanguagePage(urlLanguage);
        return urlLanguage;
    }

    const pathLanguage = getPathLanguage();
    if (pathLanguage) {
        storeLanguage(pathLanguage);
        return pathLanguage;
    }

    const documentLanguage = normalizeLanguage(document.documentElement.dataset.language || document.documentElement.lang);
    if (documentLanguage) {
        return documentLanguage;
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

function getPathLanguage() {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    return normalizeLanguage(firstSegment);
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
    const hasPageTranslations = Boolean(document.querySelector(
        '[data-i18n], [data-i18n-placeholder], [data-i18n-alt], [data-i18n-content], [data-i18n-aria-label]'
    ));

    document.documentElement.lang = translations.language.htmlLang;
    document.documentElement.dataset.language = currentLanguage;

    if (hasPageTranslations) {
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
    }

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
            redirectToLanguagePage(language, button.dataset.languageUrl);
        });
    });
}

function redirectToLanguagePage(language, explicitPath) {
    const targetPath = explicitPath || LANGUAGE_URLS[language];
    if (!targetPath) {
        applyLanguage(language);
        syncMobileNav();
        return;
    }

    const targetUrl = new URL(targetPath, explicitPath ? window.location.href : SITE_ROOT_URL);
    targetUrl.hash = window.location.hash;

    if (window.location.href !== targetUrl.toString()) {
        window.location.href = targetUrl.toString();
        return;
    }

    applyLanguage(language);
    syncMobileNav();
}

function getSiteRootUrl() {
    const script = document.currentScript || document.querySelector('script[src$="script.js"]');

    if (script && script.src) {
        return new URL('.', script.src).href;
    }

    return new URL('.', window.location.href).href;
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
    const contactInput = form.querySelector('#contact-contact');
    const messageInput = form.querySelector('#contact-message');

    if (!submitBtn || !status || !nameInput || !contactInput || !messageInput) return;

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
        const contact = contactInput.value.trim();
        const message = messageInput.value.trim();

        if (!contact) {
            setStatus(getTranslation('contact.validationMissing'), 'is-error');
            contactInput.focus();
            return;
        }

        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = getTranslation('contact.openingClient');
        setStatus(getTranslation('contact.generatingEmail'), 'is-success');

        const subjectSuffix = name || contact;
        const subject = encodeURIComponent(`${getTranslation('contact.mailSubject')} - ${subjectSuffix}`);
        const body = encodeURIComponent(
            `${getTranslation('contact.mailBodyName')}: ${name || getTranslation('contact.mailBodyEmpty')}\n${getTranslation('contact.mailBodyContact')}: ${contact}\n\n${getTranslation('contact.mailBodyMessage')}:\n${message || getTranslation('contact.mailBodyEmpty')}`
        );

        window.location.href = `mailto:contact@zarex.studio?subject=${subject}&body=${body}`;

        window.setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            setStatus(getTranslation('contact.mailtoFallback'), 'is-success');
        }, 600);
    });
}

function initContactCopyButtons() {
    document.querySelectorAll('[data-copy-text]').forEach(button => {
        button.addEventListener('click', async function() {
            const text = button.dataset.copyText;
            if (!text) return;

            const previousText = button.textContent;

            try {
                await navigator.clipboard.writeText(text);
                button.textContent = getTranslation('contact.copySuccess');
            } catch (error) {
                button.textContent = getTranslation('contact.copyFallback');
            }

            window.setTimeout(() => {
                button.textContent = previousText;
            }, 1800);
        });
    });
}
