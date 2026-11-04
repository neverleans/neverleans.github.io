// --- Portfolio Multilingual (EN/PT) & Interactive Engine ---

const translations = {
    en: {
        "page.title": "Lucas Ventavele Ribeiro | Senior Full Stack & Distributed Systems Engineer",
        "page.desc": "Senior Full Stack Engineer specialized in high-concurrency SaaS architectures, distributed systems, and autonomous AI engineering. 5+ years experience, 10+ production systems.",
        
        // Navigation
        "nav.home": "Home",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.contact": "Contact",

        // Hero
        "hero.status": "Open for Senior Full Stack Roles & Global Remote (B2B/PJ)",
        "hero.role": "Senior Full Stack & Distributed Systems Engineer",
        "hero.title": "High-throughput <span class=\"highlight\">distributed systems</span>, resilient <span class=\"highlight\">architectures</span>.",
        "hero.desc": "Specialized in high-concurrency SaaS architectures, distributed systems, and autonomous AI engineering. From core back-end throughput and transactional isolation to reactive modern front-ends — from system architecture to cloud production deployment.",
        "hero.btnProjects": "View Projects <i class=\"fas fa-arrow-right\"></i>",
        "hero.btnContact": "Contact Me",
        "hero.stat1Number": "5+",
        "hero.stat1Label": "Years of experience",
        "hero.stat2Number": "10+",
        "hero.stat2Label": "Systems in production",
        "hero.stat3Number": "25+",
        "hero.stat3Label": "Technologies in stack",

        // Skills
        "skills.title": "Technical <span>Stack</span>",
        "skills.subtitle": "Technologies I use in mission-critical environments — from backend concurrency to cloud infrastructure.",
        "skills.catFront": "Front-End",
        "skills.catBack": "Back-End & APIs",
        "skills.catDb": "Databases & Caching",
        "skills.catAi": "AI & Automation",
        "skills.catDevops": "DevOps & Cloud Infra",
        "skills.catDesktop": "Desktop & Mobile",

        // Commercial Projects Section
        "projects.commercialTitle": "Commercial <span>Production Projects</span>",
        "projects.commercialSubtitle": "Mission-critical systems engineered for enterprise clients — proprietary source code.",
        "badge.commercial": "Commercial",
        "badge.inDev": "Coming Soon",
        "badge.openSource": "Open Source",
        "btn.viewDemo": "<i class=\"fas fa-external-link-alt\"></i> Live Demo",
        "btn.codeProprietary": "<i class=\"fas fa-lock\"></i> Proprietary",
        "btn.inDevelopment": "<i class=\"fas fa-clock\"></i> In Progress",
        "btn.viewCode": "<i class=\"fab fa-github\"></i> Source Code",

        // Commercial Cards
        "nexus.title": "Nexus — Multi-Tenant WhatsApp AI Automation Platform",
        "nexus.desc": "Enterprise multi-tenant SaaS platform featuring autonomous AI agents, real-time WebSockets chat (Socket.io), automated customer queues, analytics telemetry, and high-volume broadcast campaigns. Integrated with Baileys and Meta Cloud API.",
        "nexus.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Commercial Production",

        "dupladesk.title": "DuplaDesk — High-Performance Remote Desktop Engine",
        "dupladesk.desc": "Custom low-latency AnyDesk alternative engineered from scratch. Electron + WebRTC supporting multi-monitor display streaming, fast binary file transfers, integrated chat, and end-to-end encrypted session recording.",
        "dupladesk.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Commercial Production",

        "kortex.title": "Kortex Fiscal — Multi-Tenant Invoicing & Tax Gateway",
        "kortex.desc": "Fault-tolerant electronic invoice (NFS-e) emission gateway integrated with Brazilian tax authorities (SEFAZ). Automated XML signing, SOAP envelopment, DANFE PDF generation, and webhook failure recovery.",
        "kortex.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Commercial Production",

        "duplasales.title": "DuplaSales — Cloud Sales & Inventory ERP",
        "duplasales.desc": "Comprehensive point-of-sale (POS) and inventory ERP featuring automated stock tracking, financial reporting, multi-tier pricing, and enterprise integrations. In active development.",
        "duplasales.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — In Development",

        // Open Source Section
        "projects.ossDivider": "<i class=\"fas fa-code\"></i> Open Source & Flagship Engineering",

        // Open Source Cards
        "wallet.title": "Digital Wallet Core API — High-Concurrency Financial Ledger",
        "wallet.desc": "Financial transfer engine implementing pessimistic database locking (<code>lockForUpdate</code>), ACID transaction isolation, idempotency control, Redis caching, and Docker orchestration.",

        "kapimind.title": "Kapimind — AI-Powered Investment & Portfolio Risk Engine",
        "kapimind.desc": "Comprehensive fintech analytics platform with 165+ automated tests (Vitest/Playwright), NestJS API gateway, Redis caching, BullMQ workers, FinBERT sentiment NLP, and VaR/Monte Carlo simulations.",

        "deskvoice.title": "DeskVoice — Real-Time Voice & Messaging Gateway",
        "deskvoice.desc": "Ultra-low latency audio streaming and messaging gateway engineered with NestJS Fastify and WebSockets for high-throughput real-time collaboration.",

        "carbonlens.title": "CarbonLens — Auditable GHG Protocol Carbon Accounting Engine & ESG Simulator",
        "carbonlens.desc": "Auditable GHG Protocol Carbon Accounting Engine & ESG Simulator. Mathematical modeling compliant with Scopes 1, 2, and 3 validated with Vitest.",

        "plugstore.title": "PlugStore — Headless E-Commerce Framework",
        "plugstore.desc": "Modular headless e-commerce architecture tailored for conversion with instant Pix payments, WhatsApp-first checkout, and 50+ theme configurations.",

        "observatorio.title": "Electoral Observatory 2026 — Real-Time Civic Analytics",
        "observatorio.desc": "Civic data platform ingesting official TSE electoral feeds, interactive voting booth simulator, and WCAG 2.1 AAA accessibility standard compliance.",

        // Experience Timeline
        "experience.title": "Career <span>Journey</span>",
        "exp1.badge": "Current",
        "exp1.date": "Nov 2025 - Present",
        "exp1.role": "Senior Full Stack Developer",
        "exp1.company": "DuplaFace Sistemas — Remote",
        "exp1.desc": "Architecting and scaling complex SaaS platforms: high-concurrency multi-tenant WhatsApp automation with AI agents, fault-tolerant fiscal invoice streaming with SEFAZ, real-time WebSockets analytics, and low-latency remote desktop software (WebRTC).",

        "exp2.date": "Feb 2024 - Oct 2025",
        "exp2.role": "Full Stack Software Engineer",
        "exp2.company": "Independent Contractor — Remote",
        "exp2.desc": "Engineering custom full-stack web systems and high-throughput APIs for diverse enterprise clients — from database schema design and architectural patterns to cloud deployment and monitoring.",

        "exp3.date": "Aug 2020 - Jan 2024",
        "exp3.role": "Full Stack Developer",
        "exp3.company": "Sellentt — Brazil",
        "exp3.desc": "Enterprise B2B SaaS ERP/CRM serving mid-to-large enterprises. Engineered core CRM sales funnels, high-volume automated email delivery pipelines, marketing campaign tracking, and optimized complex MySQL query performance.",

        "exp4.date": "2019 - Jul 2020",
        "exp4.role": "Software Engineering Intern",
        "exp4.company": "Sellentt — Brazil",
        "exp4.desc": "Internal automation scripting, database maintenance, technical infrastructure support, and collaborative contributions to enterprise web frontend and backend modules.",

        // Contact Section
        "contact.title": "Let's <span>Connect</span>",
        "contact.subtitle": "Open for full-time Senior Full Stack roles, global remote contracts (B2B/PJ), and technical consulting. Let's talk!",
        "contact.namePlaceholder": "Your Name",
        "contact.emailPlaceholder": "Your Email",
        "contact.messagePlaceholder": "Your Message",
        "contact.submit": "Send Message <i class=\"fas fa-paper-plane\"></i>",

        // Footer
        "footer.text": "© 2026 Lucas Ventavele Ribeiro — Senior Full Stack & Distributed Systems Engineer"
    },
    pt: {
        "page.title": "Lucas Ventavele Ribeiro | Desenvolvedor Full Stack Sênior",
        "page.desc": "Desenvolvedor Full Stack Sênior especializado em sistemas distribuídos de alta concorrência, arquiteturas SaaS resilientes e engenharia de IA autônoma. 5+ anos de experiência, 10+ sistemas em produção.",

        // Navigation
        "nav.home": "Início",
        "nav.skills": "Skills",
        "nav.projects": "Projetos",
        "nav.experience": "Experiência",
        "nav.contact": "Contato",

        // Hero
        "hero.status": "Aberto para Oportunidades Sênior & Remoto Global (B2B/PJ)",
        "hero.role": "Desenvolvedor Full Stack Sênior & Sistemas Distribuídos",
        "hero.title": "Sistemas <span class=\"highlight\">complexos</span>, soluções <span class=\"highlight\">elegantes</span>.",
        "hero.desc": "Especialista em arquitetura de sistemas SaaS de alta concorrência, automação com IA e aplicações em tempo real. Do back-end ao front-end — do código ao deploy em produção.",
        "hero.btnProjects": "Ver Projetos <i class=\"fas fa-arrow-right\"></i>",
        "hero.btnContact": "Fale Comigo",
        "hero.stat1Number": "5+",
        "hero.stat1Label": "Anos de experiência",
        "hero.stat2Number": "10+",
        "hero.stat2Label": "Sistemas em produção",
        "hero.stat3Number": "25+",
        "hero.stat3Label": "Tecnologias no stack",

        // Skills
        "skills.title": "Stack <span>Técnica</span>",
        "skills.subtitle": "Tecnologias que uso no dia a dia — do código à infraestrutura em produção.",
        "skills.catFront": "Front-End",
        "skills.catBack": "Back-End & APIs",
        "skills.catDb": "Bancos de Dados & Cache",
        "skills.catAi": "IA & Automação",
        "skills.catDevops": "DevOps & Infra Nuvem",
        "skills.catDesktop": "Desktop & Mobile",

        // Commercial Projects Section
        "projects.commercialTitle": "Projetos <span>Comerciais</span>",
        "projects.commercialSubtitle": "Sistemas desenvolvidos para empresas — código sob propriedade intelectual.",
        "badge.commercial": "Comercial",
        "badge.inDev": "Em Breve",
        "badge.openSource": "Open Source",
        "btn.viewDemo": "<i class=\"fas fa-external-link-alt\"></i> Ver Demo",
        "btn.codeProprietary": "<i class=\"fas fa-lock\"></i> Código",
        "btn.inDevelopment": "<i class=\"fas fa-clock\"></i> Em Breve",
        "btn.viewCode": "<i class=\"fab fa-github\"></i> Ver Código",

        // Commercial Cards
        "nexus.title": "Nexus — Plataforma WhatsApp Multi-Atendente com IA",
        "nexus.desc": "Sistema SaaS multi-tenant com automação de IA, chat em tempo real via Socket.io, filas de atendimento, analytics e broadcast. Integração com Baileys e API Cloud Meta.",
        "nexus.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Projeto Comercial",

        "dupladesk.title": "DuplaDesk — Software de Acesso Remoto",
        "dupladesk.desc": "Alternativa ao AnyDesk desenvolvida do zero. Electron + WebRTC com suporte a multi-monitor, transferência de arquivos, chat integrado, gravação de sessão.",
        "dupladesk.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Projeto Comercial",

        "kortex.title": "Kortex Fiscal — Emissão NFS-e Multi-Tenant",
        "kortex.desc": "Sistema completo de emissão de notas fiscais eletrônicas integrado à SEFAZ. Geração de XML, envelopamento SOAP, DANFE e tratamento de retornos/rejeições.",
        "kortex.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Projeto Comercial",

        "duplasales.title": "DuplaSales — Sistema de Vendas & PDV",
        "duplasales.desc": "Sistema completo de gestão de vendas com PDV, controle de estoque, relatórios financeiros e integração com ERP. Em desenvolvimento.",
        "duplasales.company": "<i class=\"fas fa-building\"></i> DuplaFace Sistemas — Em Desenvolvimento",

        // Open Source Section
        "projects.ossDivider": "<i class=\"fas fa-code\"></i> Projetos Open Source",

        // Open Source Cards
        "wallet.title": "Digital Wallet Core API — Ledger Financeiro de Alta Concorrência",
        "wallet.desc": "Motor de transferências financeiras com bloqueio pessimista (<code>lockForUpdate</code>), isolamento transacional ACID, idempotência, cache Redis e orquestração Docker.",

        "kapimind.title": "Kapimind — Plataforma de Investimentos com IA",
        "kapimind.desc": "Plataforma fintech com 165+ testes automatizados (Vitest/Playwright), gateway NestJS, cache Redis, filas BullMQ, NLP FinBERT para sentimento e simulações VaR/Monte Carlo.",

        "deskvoice.title": "DeskVoice — Gateway de Voz e Mensagens em Tempo Real",
        "deskvoice.desc": "Gateway de áudio e mensagens de ultra-baixa latência desenvolvido com NestJS Fastify e WebSockets para colaboração em tempo real.",

        "carbonlens.title": "CarbonLens — Motor Contábil GHG Protocol & Simulador ESG",
        "carbonlens.desc": "Auditable GHG Protocol Carbon Accounting Engine & ESG Simulator. Modelagem matemática para Escopos 1, 2 e 3 validada com Vitest.",

        "plugstore.title": "PlugStore — Framework E-Commerce Headless",
        "plugstore.desc": "Framework headless para e-commerce com Pix, WhatsApp checkout e 50+ configurações de temas.",

        "observatorio.title": "Observatório Eleitoral 2026",
        "observatorio.desc": "Plataforma cívica com dados do TSE em tempo real, simulador interativo de urna eletrônica e conformidade com acessibilidade WCAG 2.1 AAA.",

        // Experience Timeline
        "experience.title": "Minha <span>Jornada</span>",
        "exp1.badge": "Atual",
        "exp1.date": "Nov 2025 - Atual",
        "exp1.role": "Full Stack Developer Sênior",
        "exp1.company": "DuplaFace Sistemas — Remoto",
        "exp1.desc": "Desenvolvimento de sistemas SaaS de alta complexidade: plataforma multi-tenant de atendimento WhatsApp com automação de IA, sistema de emissão NF-e integrado à SEFAZ, dashboard ERP em tempo real e software de acesso remoto.",

        "exp2.date": "Fev 2024 - Out 2025",
        "exp2.role": "Freelancer Full Stack",
        "exp2.company": "Autônomo — Remoto",
        "exp2.desc": "Desenvolvimento de sistemas web completos sob demanda para clientes diversos — da concepção ao deploy em produção.",

        "exp3.date": "Ago 2020 - Jan 2024",
        "exp3.role": "Full Stack Developer",
        "exp3.company": "Sellentt — Guaxupé, MG",
        "exp3.desc": "Plataforma SaaS ERP/CRM B2B para médias e grandes empresas. Evolução do módulo de CRM com funil de vendas, marketing automatizado, disparo de e-mails e relatórios de campanhas.",

        "exp4.date": "2019 - Jul 2020",
        "exp4.role": "Estagiário de TI",
        "exp4.company": "Sellentt — Guaxupé, MG",
        "exp4.desc": "Suporte técnico, automações internas e colaboração em projetos de desenvolvimento web.",

        // Contact Section
        "contact.title": "Vamos <span>Conversar?</span>",
        "contact.subtitle": "Estou disponível para novos projetos, oportunidades CLT/PJ ou contratos globais remotos. Fale comigo!",
        "contact.namePlaceholder": "Seu Nome",
        "contact.emailPlaceholder": "Seu Email",
        "contact.messagePlaceholder": "Sua Mensagem",
        "contact.submit": "Enviar Mensagem <i class=\"fas fa-paper-plane\"></i>",

        // Footer
        "footer.text": "© 2026 Lucas Ventavele Ribeiro — Desenvolvedor Full Stack Sênior"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Update HTML lang attribute
    document.documentElement.lang = (lang === 'pt') ? 'pt-br' : 'en';

    // 2. Update Document Title & Meta Description
    if (translations[lang]["page.title"]) {
        document.title = translations[lang]["page.title"];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang]["page.desc"]) {
        metaDesc.setAttribute('content', translations[lang]["page.desc"]);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && translations[lang]["page.title"]) {
        ogTitle.setAttribute('content', translations[lang]["page.title"]);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && translations[lang]["page.desc"]) {
        ogDesc.setAttribute('content', translations[lang]["page.desc"]);
    }

    // 3. Update Text & HTML Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 4. Update Placeholder Attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 5. Update Title Attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('title', translations[lang][key]);
        }
    });

    // 6. Update Active State on Buttons
    const btnEn = document.getElementById('lang-en');
    const btnPt = document.getElementById('lang-pt');
    if (btnEn && btnPt) {
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnPt.classList.remove('active');
            btnEn.setAttribute('aria-pressed', 'true');
            btnPt.setAttribute('aria-pressed', 'false');
        } else {
            btnPt.classList.add('active');
            btnEn.classList.remove('active');
            btnPt.setAttribute('aria-pressed', 'true');
            btnEn.setAttribute('aria-pressed', 'false');
        }
    }

    // 7. Persist preference
    try {
        localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
        // LocalStorage fallback for sandboxed contexts
    }

    // 8. Update URL query parameter without page reload
    if (window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url.toString());
    }
}

function detectInitialLanguage() {
    // 1. Check URL parameter ?lang=
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && (urlLang === 'en' || urlLang === 'pt')) {
        return urlLang;
    }

    // 2. Check localStorage
    try {
        const savedLang = localStorage.getItem('portfolio_lang');
        if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
            return savedLang;
        }
    } catch (e) {}

    // 3. Check browser language (defaults to pt if Portuguese, otherwise en for US/international)
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('pt')) {
        return 'pt';
    }

    return 'en';
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectInitialLanguage();
    setLanguage(initialLang);

    const btnEn = document.getElementById('lang-en');
    const btnPt = document.getElementById('lang-pt');

    if (btnEn) {
        btnEn.addEventListener('click', () => setLanguage('en'));
    }
    if (btnPt) {
        btnPt.addEventListener('click', () => setLanguage('pt'));
    }

    // Initialize Scroll Reveal
    reveal();
});

// Scroll Reveal Engine
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 120;

    for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
