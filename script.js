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
            title: 'ZAREX Studio 奇点智构 | 企业 AI 产品矩阵与智能体解决方案',
            description: 'ZAREX Studio（奇点智构）构建企业 AI 产品矩阵，覆盖知识库与客服智能体、行业视觉作业平台、屏幕理解引擎和本地语音输入工具。',
            socialTitle: 'ZAREX Studio 奇点智构 | 企业 AI 产品矩阵',
            socialDescription: '从知识库、智能体、视觉作业到本地效率工具，构建可部署、可运营、可持续迭代的企业 AI 产品体系。',
            imageAlt: 'ZAREX Studio 奇点智构官网预览图',
            ogLocale: 'zh_CN'
        },
        brand: {
            subtitle: '奇点智构'
        },
        nav: {
            about: '方向',
            services: '平台能力',
            projects: '产品矩阵',
            contact: '联系'
        },
        mobile: {
            menuOpen: '打开导航菜单',
            menuClose: '关闭导航菜单'
        },
        hero: {
            headingLead: '企业 AI 产品矩阵，',
            headingAccent: '从知识到行动',
            headingTail: '',
            description: '我们把知识库、智能体、视觉作业和本地效率工具做成可部署、可运营、可持续迭代的产品体系，帮助企业从第一个场景走向可复制的 AI 应用能力。',
            primaryCta: '预约产品沟通',
            secondaryCta: '查看产品矩阵',
            notesLabel: '核心能力',
            noteAi: '企业知识智能体',
            noteData: '行业视觉作业',
            noteTools: '本地效率工具',
            valueLabel: '产品主线',
            valueIntro: '先聚焦可销售样板，再沉淀成可复用的平台能力。',
            valueLeadTitle: 'Knowledge Agent',
            valueLeadDescription: '面向客服、销售和内部运营的企业知识库与问答智能体。',
            valueEfficiencyTitle: 'Vision Ops',
            valueEfficiencyDescription: '面向 OCR、自动标注和模型验证的行业 AI 作业平台。',
            valueClarityTitle: 'ScreenLens',
            valueClarityDescription: '为 RPA 和 GUI Agent 提供结构化屏幕理解与目标定位。',
            valueAssetTitle: 'Vox / 声笔',
            valueAssetDescription: '面向个人和团队的本地隐私语音输入与文本增强工具。'
        },
        about: {
            heading: '我们在构建什么',
            paragraphOne: 'ZAREX Studio（奇点智构）不是只做一次性项目的外包团队。我们正在围绕企业 AI 应用构建一套可复制的产品矩阵。',
            paragraphTwo: '核心方向是把企业知识、智能体编排、视觉作业流程和本地 AI 工具连接起来，让 AI 从演示能力变成可审核、可部署、可运营的系统。',
            paragraphThree: '我们优先选择真实业务场景：客服知识问答、OCR 与标注作业、GUI 自动化、语音输入和内部效率工具。',
            statExperience: '个 AI 应用底座',
            statProjects: '条产品线',
            statExperts: '天样板冲刺'
        },
        services: {
            heading: '平台能力',
            learnMore: '预约沟通',
            ai: {
                title: '知识引擎',
                description: '支持文档、FAQ、商品资料和业务规则的导入、审核、检索、引用溯源与反馈闭环。'
            },
            web: {
                title: '智能体编排',
                description: '将检索、工具调用、回答生成、渠道接入和运行轨迹组织成可配置、可验证的流程。'
            },
            smart: {
                title: '视觉作业平台',
                description: '覆盖 OCR、自动标注、人工复核、模型验证和版本发布，让模型结果进入生产流程。'
            },
            data: {
                title: '本地 AI 工具',
                description: '面向语音输入、屏幕理解和桌面自动化，优先支持本地运行、隐私保护和低延迟体验。'
            }
        },
        projects: {
            heading: '产品矩阵',
            intro: '我们用一个核心底座支撑多条产品线：先做可销售样板，再把共性能力沉淀为平台。',
            goodFit: '产品线',
            inputLabel: '适用场景',
            outputLabel: '交付形态',
            discuss: '讨论这条产品线',
            website: {
                title: 'Zarex Knowledge Agent',
                description: '企业知识库与客服智能体，把资料、FAQ、商品知识和业务规则变成可追溯的回答能力。',
                input: '客服问答、售后支持、销售答疑、内部知识查询',
                output: '知识运营后台、问答助手、质检反馈、客服渠道接入'
            },
            workflow: {
                title: 'Zarex Vision Ops',
                description: '行业视觉作业平台，围绕 OCR、自动标注、人工复核和模型验证形成生产闭环。',
                input: '制造质检、票据识别、图片标注、模型上线前验证',
                output: '标注工作台、OCR 验证、审核发布、报告导出'
            },
            assistant: {
                title: 'ScreenLens',
                description: '自动化屏幕理解引擎，把截图转换成结构化 UI 状态，帮助 RPA 和 GUI Agent 找到目标。',
                input: '桌面自动化、RPA 流程、远程运维、GUI Agent',
                output: '屏幕分析 API、目标查找、等待条件、样本评测'
            },
            dashboard: {
                title: 'Vox / 声笔',
                description: '本地隐私优先的语音输入工具，让长文本、技术口述和多语言输入更自然地进入工作流。',
                input: '个人效率、开发者口述、客服记录、会议纪要',
                output: 'macOS 语音输入、热词保留、本地 ASR、文本纠错'
            }
        },
        contact: {
            heading: '预约产品矩阵沟通',
            intro: '如果你正在评估企业知识智能体、行业视觉作业平台，或希望从一个可演示样板开始，留下联系方式即可。',
            emailLabel: '直接发邮件',
            copyEmail: '复制邮箱',
            copySuccess: '邮箱已复制。',
            copyFallback: '无法自动复制，请手动复制 contact@zarex.studio。',
            responseLabel: '我们会怎么对接',
            responseValue: '收到信息后，我们会先确认目标场景、现有资料、部署边界和最小可演示版本。',
            formTitle: '留下一个切入点',
            formIntro: '只填联系方式也可以；如果方便，可以写一句你最想验证的 AI 场景。',
            nameLabel: '怎么称呼你（选填）',
            namePlaceholder: '例如：张三 / Ray',
            contactInputLabel: '联系方式',
            contactPlaceholder: '邮箱、微信或电话都可以',
            messageLabel: '想验证的场景（选填）',
            messagePlaceholder: '例如：客服知识问答、OCR 模型验证、自动标注、屏幕自动化、语音输入…',
            formHint: '这是静态页面：点击后会打开你的邮件客户端，并自动填好要发送给我们的内容。',
            submit: '生成邮件',
            validationMissing: '请至少填写一个联系方式，方便我们联系您。',
            openingClient: '正在打开邮件客户端…',
            generatingEmail: '已生成邮件内容，请在邮件客户端中确认发送。',
            mailtoFallback: '如果邮件客户端没有自动打开，可以复制邮箱 contact@zarex.studio 直接发送。',
            mailSubject: 'ZAREX 产品矩阵咨询',
            mailBodyName: '称呼',
            mailBodyContact: '联系方式',
            mailBodyMessage: '想验证的场景',
            mailBodyEmpty: '（暂未填写）'
        },
        footer: {
            tagline: '从真实场景出发，构建可运营的 AI 产品',
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
            title: 'ZAREX Studio | Enterprise AI Product Matrix and Agent Solutions',
            description: 'ZAREX Studio builds an enterprise AI product matrix across knowledge agents, visual AI operations, screen understanding, and local voice input tools.',
            socialTitle: 'ZAREX Studio | Enterprise AI Product Matrix',
            socialDescription: 'A deployable and operable AI product system spanning knowledge agents, visual operations, screen understanding, and local productivity tools.',
            imageAlt: 'ZAREX Studio website social preview',
            ogLocale: 'en_US'
        },
        brand: {
            subtitle: 'AI Innovation Studio'
        },
        nav: {
            about: 'Direction',
            services: 'Capabilities',
            projects: 'Products',
            contact: 'Contact'
        },
        mobile: {
            menuOpen: 'Open navigation menu',
            menuClose: 'Close navigation menu'
        },
        hero: {
            headingLead: 'Enterprise AI product matrix, ',
            headingAccent: 'from knowledge to action',
            headingTail: '',
            description: 'We turn knowledge bases, agents, visual operations, and local productivity tools into deployable, operable, continuously improving AI products.',
            primaryCta: 'Book a Product Call',
            secondaryCta: 'View Product Matrix',
            notesLabel: 'Core capabilities',
            noteAi: 'Enterprise knowledge agents',
            noteData: 'Visual AI operations',
            noteTools: 'Local productivity tools',
            valueLabel: 'Product lines',
            valueIntro: 'We start with saleable pilots, then turn shared capabilities into a reusable platform.',
            valueLeadTitle: 'Knowledge Agent',
            valueLeadDescription: 'Enterprise knowledge and support agents for service, sales, and internal operations.',
            valueEfficiencyTitle: 'Vision Ops',
            valueEfficiencyDescription: 'OCR, auto-annotation, model validation, and human review for industry workflows.',
            valueClarityTitle: 'ScreenLens',
            valueClarityDescription: 'Structured screen understanding and target location for RPA and GUI agents.',
            valueAssetTitle: 'Vox / VoiceBar',
            valueAssetDescription: 'Local-first voice input and text enhancement for individuals and teams.'
        },
        about: {
            heading: 'What We Are Building',
            paragraphOne: 'ZAREX Studio is not only a custom development team. We are building a repeatable enterprise AI product matrix around real business scenarios.',
            paragraphTwo: 'The core is to connect enterprise knowledge, agent orchestration, visual operation workflows, and local AI tools into systems that can be audited, deployed, and operated.',
            paragraphThree: 'We focus on practical entry points: customer support Q&A, OCR and annotation work, GUI automation, voice input, and internal productivity tools.',
            statExperience: 'AI application core',
            statProjects: 'Product lines',
            statExperts: 'Day pilot sprint'
        },
        services: {
            heading: 'Platform Capabilities',
            learnMore: 'Book a call',
            ai: {
                title: 'Knowledge Engine',
                description: 'Ingest, review, retrieve, cite, and improve documents, FAQs, product knowledge, and business rules.'
            },
            web: {
                title: 'Agent Orchestration',
                description: 'Configure retrieval, tool calls, answer generation, channel integrations, and runtime traces as verifiable flows.'
            },
            smart: {
                title: 'Visual AI Operations',
                description: 'Move OCR, auto-annotation, human review, model validation, and version release into production workflows.'
            },
            data: {
                title: 'Local AI Tools',
                description: 'Voice input, screen understanding, and desktop automation with local-first, privacy-aware, low-latency experiences.'
            }
        },
        projects: {
            heading: 'Product Matrix',
            intro: 'One application core supports multiple product lines. We start with a focused pilot, then turn shared patterns into platform capabilities.',
            goodFit: 'Product line',
            inputLabel: 'Best for',
            outputLabel: 'Deliverables',
            discuss: 'Discuss this product line',
            website: {
                title: 'Zarex Knowledge Agent',
                description: 'Enterprise knowledge bases and support agents that turn documents, FAQs, product knowledge, and rules into traceable answers.',
                input: 'Customer support, after-sales service, sales Q&A, internal knowledge search',
                output: 'Knowledge console, Q&A assistant, quality feedback, channel integration'
            },
            workflow: {
                title: 'Zarex Vision Ops',
                description: 'A visual AI operations platform for OCR, auto-annotation, human review, and model validation loops.',
                input: 'Manufacturing inspection, document OCR, image annotation, pre-release model validation',
                output: 'Annotation workbench, OCR validation, review publishing, report exports'
            },
            assistant: {
                title: 'ScreenLens',
                description: 'A screen understanding engine that converts screenshots into structured UI state for RPA and GUI agents.',
                input: 'Desktop automation, RPA workflows, remote operations, GUI agents',
                output: 'Screen analysis API, target lookup, wait conditions, sample evaluation'
            },
            dashboard: {
                title: 'Vox / VoiceBar',
                description: 'A privacy-first local voice input tool for long-form dictation, technical speech, and multilingual writing workflows.',
                input: 'Personal productivity, developer dictation, support notes, meeting summaries',
                output: 'macOS voice input, hotword preservation, local ASR, text correction'
            }
        },
        contact: {
            heading: 'Book a Product Matrix Call',
            intro: 'If you are evaluating knowledge agents, visual AI operations, or want to start from a demonstrable AI pilot, leave a contact method.',
            emailLabel: 'Email Us Directly',
            copyEmail: 'Copy email',
            copySuccess: 'Email copied.',
            copyFallback: 'Copy failed. Please copy contact@zarex.studio manually.',
            responseLabel: 'What Happens Next',
            responseValue: 'We will first clarify your target scenario, current materials, deployment boundary, and smallest demoable version.',
            formTitle: 'Leave a Starting Point',
            formIntro: 'A contact method is enough. Add one sentence about the AI scenario you want to validate if convenient.',
            nameLabel: 'How should we address you? (optional)',
            namePlaceholder: 'Example: Alex / Ray',
            contactInputLabel: 'Contact method',
            contactPlaceholder: 'Email, WeChat, or phone',
            messageLabel: 'Scenario to validate (optional)',
            messagePlaceholder: 'Example: support knowledge Q&A, OCR model validation, auto-annotation, screen automation, voice input...',
            formHint: 'This is a static site: clicking will open your email client with a prefilled message to us.',
            submit: 'Create Email',
            validationMissing: 'Please leave at least one contact method so we can reach you.',
            openingClient: 'Opening your email client...',
            generatingEmail: 'Email draft created. Please confirm sending in your email client.',
            mailtoFallback: 'If your email client did not open, copy contact@zarex.studio and email us directly.',
            mailSubject: 'ZAREX product matrix inquiry',
            mailBodyName: 'Name',
            mailBodyContact: 'Contact method',
            mailBodyMessage: 'Scenario to validate',
            mailBodyEmpty: '(not provided)'
        },
        footer: {
            tagline: 'Building operable AI products from real scenarios',
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
