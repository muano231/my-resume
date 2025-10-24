const birthDate = "1999-10-04";
const experienceStart = "2020-11-01";

export const i18n = {
    fr: {
        lang: {
            code: "fr",
            label: "FR • EN"
        },
        a11y: {skip: "Aller au contenu"},
        seo: {
            title: "Léo TERRAS — Développeur Full Stack",
            description: "Développeur Full Stack à Lyon. Expertise front/back, API et bases de données. Ouvert aux projets ambitieux.",
            ogTitle: "Léo TERRAS — Développeur Full Stack",
            ogDescription: "Développeur Full Stack à Lyon. Expertise front/back, API et bases de données. Ouvert aux projets ambitieux."
        },
        nav: {
            home: "Accueil",
            about: "À propos",
            experience: "Expérience professionnelle",
            education: "Formations",
            skills: "Compétences",
            contact: "Contact",
        },
        hero: {
            role: "Développeur Full Stack",
            pitch: "Expertise front/back, API et bases de données. Ouvert aux projets ambitieux.",
            city: "Lyon, France",
            contact: "Me contacter",
            cv: "Télécharger le CV"
        },
        about: {
            title: "À propos de moi",
            intro: "Développeur passionné, je crée des sites et applications web qui fonctionnent bien et durent dans le temps.",
            description: "Je maîtrise les technologies Java, Python et React pour développer des solutions complètes. Après 5 ans d'expérience en entreprise, je cherche maintenant un poste en CDI où je pourrai continuer à apprendre et contribuer à des projets utiles.",
            age: "Age:",
            location: "Localisation:",
            email: "Email:",
            download: "Télécharger mon CV",
            stat1: "Années d'expérience",
            stat2: "Technologies maîtrisées",
            mobilityLabel: "Mobilité:",
            mobilityValue: "Titulaire du permis B + voiture",
            ageValue: (n) => `${n} ans`
        },
        experience: {
            title: "Expérience professionnelle",
            job1: {
                date: "jan. 2024 - Aujourd'hui",
                title: "Développeur Full Stack",
                company: "Dstny FR - Caluire-et-Cuire",
                missions: [
                    { text: "Maintenance et développement de MyDstny, plateforme de revente Télécoms, IT et Cloud.", tags: ["Java", "JPA", "Python", "MySql", "Gerrit", "Jenkins", "Debian"] },
                    { text: "Développement d'APIs pour l'ouverture de MyDstny en interne et vers les partenaires.", tags: ["Spring Boot", "FastApi", "Rest", "OpenApi", "JUnit", "Gitlab"] },
                    { text: "Amélioration de l'IHM de MyDstny avec l'intégration de React.", tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Gitlab", "BiomeJs"] }
                ]
            },
            job2: {
                date: "sept. 2023 - janv. 2024",
                title: "Consultant",
                company: "SOLUTEC - Villeurbanne",
                missions: [
                    { text: "Montée en compétence sur Java et Spring Boot.", tags: ["Java", "Spring Boot", "Angular"] },
                    { text: "Mission chez Framatome. Objectif: établir un backlog pour l'amélioration d'un logiciel interne.", tags: ["Excel", "VBA"] }
                ]
            },
            job3: {
                date: "nov. 2020 - sept. 2023",
                title: "Développeur Front-End (Alternance)",
                company: "ASTI - Roanne",
                missions: [
                    { text: "Développement d'un webservice pour l'ERP TexasWin, visant à communiquer avec la partie e-commerce.", tags: ["Windev", "Rest", "SQL", "Github"] },
                    { text: "Développement de correctifs et d'améliorations de la plateforme e-commerce B2B TexasNet.", tags: ["Angular", "TypeScript", "PHP", "SQL"] }
                ]
            }
        },
        education: {
            title: "Formations",
            degree1: {
                date: "sept. 2021 - sept. 2023",
                title: "Master en Ingénierie du Web (Alternance)",
                school: "ESGI - Lyon",
                description: "Expertise avancée en architecture web, frameworks modernes, sécurité et optimisation des infrastructures et une spécialisation en gestion de projets techniques."
            },
            degree2: {
                date: "sept. 2020 - aout 2021",
                title: "Bachelor en Ingénierie du Web (Alternance)",
                school: "ESGI - Lyon",
                description: "Formation Full Stack axée sur le développement web, l’architecture logicielle et les méthodes agiles."
            },
            degree3: {
                date: "sept. 2018 - juil. 2020",
                title: "Diplôme Universitaire de Technologie - Réseaux et Télécommunications",
                school: "Université Jean Monnet - Roanne",
                description: "Formation technique en conception, déploiement et administration d’infrastructures IP et services télécoms, avec acquisition des bases pour la poursuite d'études."
            },
            latest: "Plus récent"
        },
        skills: {
            title: "Compétences",
            frontend: {title: "Front-end"},
            backend: {title: "Back-end"},
            tools: {title: "Outils & Autres"}
        },
        contact: {
            title: "Contact",
            subtitle: "Mon profil vous intéresse ?",
            intro: "N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.",
            email: { title: "Email", label: "Email", placeholder: "leo@exemple.com" },
            location: { title: "Localisation" },
        },
        footer: {legal: "Mentions légales"}
    },
    en: {
        lang: {code: "en", label: "EN • FR"},
        a11y: {skip: "Skip to content"},
        seo: {
            title: "Leo TERRAS — Full Stack Developer",
            description: "Full Stack Developer in Lyon, France. Front/back end, API and database expertise. Open to ambitious projects.",
            ogTitle: "Leo TERRAS — Full Stack Developer",
            ogDescription: "Full Stack Developer in Lyon, France. Front/back end, API and database expertise. Open to ambitious projects."
        },
        nav: {
            home: "Home",
            about: "About",
            experience: "Professional experience",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            role: "Full Stack Developer",
            pitch: "Front/back end, API and database expertise. Open to ambitious projects.",
            city: "Lyon, France",
            contact: "Contact me",
            cv: "Download CV"
        },
        about: {
            title: "About me",
            intro: "As a passionate developer, I create websites and web applications that work well and stand the test of time.",
            description: "I am proficient in Java, Python, and React technologies for developing comprehensive solutions. After five years of experience in the corporate world, I am now seeking a permanent position where I can continue to learn and contribute to meaningful projects.",
            age: "Age:",
            location: "Location:",
            email: "Email:",
            download: "Download my resume",
            stat1: "Years of experience",
            stat2: "Technologies mastered",
            mobilityLabel: "Mobility:",
            mobilityValue: "Valid driver’s license for passenger vehicles + car",
            ageValue: (n) => `${n} years`
        },
        experience: {
            title: "Professional experience",
            job1: {
                date: "Jan. 2024 - Present",
                title: "Full Stack Developer",
                company: "Dstny FR - Caluire-et-Cuire, France",
                missions: [
                    { text: "Maintenance and development of MyDstny, a resale platform for telecommunications, IT, and cloud services.", tags: ["Java", "JPA", "Python", "MySql", "Gerrit", "Jenkins", "Debian"] },
                    { text: "Development of APIs for opening MyDstny internally and to partners.", tags: ["Spring Boot", "FastApi", "Rest", "OpenApi", "JUnit", "Gitlab"] },
                    { text: "Improvement of the MyDstny user interface with the integration of React.", tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Gitlab", "BiomeJs"] }
                ]
            },
            job2: {
                date: "Sept. 2023 - Jan. 2024",
                title: "Consultant",
                company: "SOLUTEC - Villeurbanne, France",
                missions: [
                    { text: "Skill development in Java and Spring Boot.", tags: ["Java", "Spring Boot", "Angular"] },
                    { text: "Assignment at Framatome. Objective: establish a backlog for improving internal software.", tags: ["Excel", "VBA"] }
                ]
            },
            job3: {
                date: "Nov. 2020 - Sept. 2023",
                title: "Front-End Developer",
                company: "ASTI - Roanne, France",
                missions: [
                    { text: "Development of a web service for the TexasWin ERP, designed to communicate with the e-commerce section.", tags: ["Windev", "Rest", "SQL", "Github"] },
                    { text: "Development of fixes and improvements to the TexasNet B2B e-commerce platform.", tags: ["Angular", "TypeScript", "PHP", "SQL"] }
                ]
            }
        },
        education: {
            title: "Education",
            degree1: {
                date: "Sept. 2021 - Sept. 2023",
                title: "Master’s in Web Engineering (Internship)",
                school: "ESGI - Lyon, France",
                description: "Web architecture, modern frameworks, security, infrastructure optimization; specialization in technical project management. French state‑recognised Professional Certification (RNCP Level 7, RNCP37744)."
            },
            degree2: {
                date: "Sept. 2020 - Aug. 2021",
                title: "Bachelor’s in Web Engineering (Internship)",
                school: "ESGI - Lyon, France",
                description: "Full‑stack web development, software architecture, agile methods. French state‑recognised Professional Certification (RNCP Level 6, RNCP39103)."
            },
            degree3: {
                date: "Sept. 2018 - July 2020",
                title: "University Institutes of Technology - Networks and Telecommunications",
                school: "Jean Monnet University - Roanne, France",
                description: "IP network design, deployment and administration; telecoms services. Prepared for further study. French national two‑year diploma (RNCP Level 5, RNCP20649)."
            },
            latest: "Most recent"
        },
        skills: {
            title: "Skills",
            frontend: {title: "Front-end"},
            backend: {title: "Back-end"},
            tools: {title: "Tools & Others"}
        },
        contact: {
            title: "Contact",
            subtitle: "Let's work together",
            intro: "Please feel free to contact me. I would be delighted to talk with you.",
            email: { title: "Email", label: "Email", placeholder: "leo@example.com" },
            location: { title: "Location" },
        },
        footer: {legal: "Legal notice"}
    }
};

function $(sel, root = document) {
    return root.querySelector(sel);
}

function $all(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
}

function calcAge(fromISO) {
    const d = fromISO ? new Date(fromISO) : new Date(`${new Date().getFullYear()}-01-01`);
    const now = new Date();
    let age = now.getFullYear() - d.getFullYear();
    const md = now.getMonth() - d.getMonth();
    if (md < 0 || (md === 0 && now.getDate() < d.getDate())) age--;
    return age;
}

function calcExperience(fromISO) {
    const d = fromISO ? new Date(fromISO) : new Date(`${new Date().getFullYear()}-01-01`);
    const now = new Date();
    let months = (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
    if (now.getDate() < d.getDate()) months -= 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    return {y, m};
}

function updateSEO(lang) {
    // Determine SEO language strictly by TLD (.fr => fr, .com => en); fallback to provided lang
    const host = (location && location.hostname) ? location.hostname.toLowerCase() : '';
    const tldLang = detectLangByTLD();
    const seoLang = tldLang || lang || 'fr';
    const t = i18n[seoLang]?.seo || i18n.fr.seo;

    // Compute canonical and hreflang URLs based on domain and current path/query (without hash)
    const path = (location && (location.pathname || '/')) || '/';
    const query = (location && location.search) || '';
    const baseFr = 'https://leoterras.fr';
    const baseEn = 'https://leoterras.com';

    const canonical = (seoLang === 'fr' ? baseFr : baseEn) + path + query;

    // Title and descriptions (locked to seoLang)
    document.title = t.title;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t.description);
    const ogt = $('meta[property="og:title"]');
    if (ogt) ogt.setAttribute('content', t.ogTitle);
    const ogd = $('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', t.ogDescription);
    const twt = $('meta[name="twitter:title"]');
    if (twt) twt.setAttribute('content', t.ogTitle);
    const twd = $('meta[name="twitter:description"]');
    if (twd) twd.setAttribute('content', t.ogDescription);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Hreflang alternates to bind languages to domains
    let altFr = document.querySelector('link[rel="alternate"][hreflang="fr"]');
    if (!altFr) {
        altFr = document.createElement('link');
        altFr.setAttribute('rel', 'alternate');
        altFr.setAttribute('hreflang', 'fr');
        document.head.appendChild(altFr);
    }
    altFr.setAttribute('href', baseFr + path + query);

    let altEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!altEn) {
        altEn = document.createElement('link');
        altEn.setAttribute('rel', 'alternate');
        altEn.setAttribute('hreflang', 'en');
        document.head.appendChild(altEn);
    }
    altEn.setAttribute('href', baseEn + path + query);

    // Update Open Graph url and locale
    const ogu = $('meta[property="og:url"]');
    if (ogu) ogu.setAttribute('content', canonical);
    const ogl = $('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', seoLang === 'fr' ? 'fr_FR' : 'en_US');

    // JSON-LD Person: ensure url/image are on the correct domain and jobTitle matches seoLang
    const script = $('#person-jsonld');
    if (script) {
        try {
            const data = JSON.parse(script.textContent || '{}');
            data.jobTitle = seoLang === 'fr' ? 'Développeur Full Stack' : 'Full Stack Developer';
            data.url = (seoLang === 'fr' ? baseFr : baseEn) + '/';
            data.image = (seoLang === 'fr' ? baseFr : baseEn) + '/assets/svgs-full/profile.jpg';
            script.textContent = JSON.stringify(data, null, 2);
        } catch (e) {
            // ignore
        }
    }
}

function applyI18n(lang) {
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    $all('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = deepGet(i18n[lang], key);
        if (typeof val === 'function') return;
        if (typeof val === 'string') el.textContent = val;
    });

    $all('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = deepGet(i18n[lang], key);
        if (typeof val === 'string') el.setAttribute('placeholder', val);
    });
    updateSEO(lang);

    const age = calcAge(birthDate);
    const exp = calcExperience(experienceStart);
    const ageEl = $('#age-display');
    const expYearsEl = $('#exp-years');
    if (ageEl) {
        const t = i18n[lang].about.ageValue;
        ageEl.textContent = typeof t === 'function' ? t(age) : String(age);
    }
    if (expYearsEl) {
        expYearsEl.textContent = `${exp.y}+`;
    }

    $all('[data-present]').forEach(el => el.textContent = i18n[lang].journey?.present ?? '');
    renderExperienceMissions(lang);
}

function renderExperienceMissions(lang) {
    const scope = i18n[lang]?.experience || {};
    $all('.mission-list').forEach(ul => {
        const jobKey = ul.getAttribute('data-job');
        const job = scope[jobKey];
        ul.innerHTML = '';
        if (!job || !Array.isArray(job.missions)) return;
        job.missions.forEach(m => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.className = 'mission-line';
            p.textContent = m.text;
            li.appendChild(p);
            if (Array.isArray(m.tags) && m.tags.length) {
                const tags = document.createElement('div');
                tags.className = 'tag-list';
                m.tags.forEach(t => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = t;
                    tags.appendChild(span);
                });
                li.appendChild(tags);
            }
            ul.appendChild(li);
        });
    });
}

function deepGet(obj, path) {
    return path.split('.').reduce((o, k) => o && o[k], obj);
}

function updateTheme(next) {
    const root = document.documentElement;
    const theme = next || localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const btn = $('#theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '🌞' : '🌙';
}

function initSidebarMobile() {
    const panel = $('.sidebar__panel');
    const openBtn = $('.sidebar__open');
    const closeBtn = $('.sidebar__close');
    const overlay = $('.sidebar__overlay');
    const trapSelector = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const mq = matchMedia('(max-width: 960px)');

    function open() {
        if (!panel || panel.classList.contains('open')) return;
        panel.classList.add('open');
        openBtn?.setAttribute('aria-expanded', 'true');
        overlay?.removeAttribute('hidden');
        document.body.classList.add('no-scroll');
        const focusable = $all(trapSelector, panel);
        const first = focusable[0], last = focusable[focusable.length - 1];

        function loop(e) {
            if (e.key !== 'Tab') return;
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                (last || panel).focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                (first || panel).focus();
            }
        }
        panel._trapHandler = loop;
        panel.addEventListener('keydown', loop);
        setTimeout(() => (first || panel).focus(), 0);

        function outside(ev) {
            if (!panel.contains(ev.target) && ev.target !== openBtn) {
                close();
            }
        }
        panel._outside = outside;
        setTimeout(() => document.addEventListener('click', outside));

        function esc(ev) {
            if (ev.key === 'Escape') {
                close();
            }
        }
        panel._esc = esc;
        document.addEventListener('keydown', esc);
    }

    function close() {
        if (!panel || !panel.classList.contains('open')) return;
        panel.classList.remove('open');
        openBtn?.setAttribute('aria-expanded', 'false');
        overlay?.setAttribute('hidden', '');
        document.body.classList.remove('no-scroll');
        if (panel._trapHandler) {
            panel.removeEventListener('keydown', panel._trapHandler);
            panel._trapHandler = null;
        }
        if (panel._esc) {
            document.removeEventListener('keydown', panel._esc);
            panel._esc = null;
        }
        if (panel._outside) {
            document.removeEventListener('click', panel._outside);
            panel._outside = null;
        }
        openBtn?.focus();
    }

    openBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', close);
    $all('.nav a', panel).forEach(a => a.addEventListener('click', () => {
        if (mq.matches) close();
    }));
    mq.addEventListener?.('change', (e) => {
        if (!e.matches) close();
    });
}

function initScrollSpy() {
    const links = $all('.nav a');
    const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);

    function setActiveById(id) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.id;
                setActiveById(id);
            }
        });
    }, {rootMargin: '-40% 0px -55% 0px', threshold: 0});
    sections.forEach(sec => obs.observe(sec));

    function getActiveSectionId() {
        const refY = window.innerHeight * 0.4;
        let best = {id: null, dist: Infinity};
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            const dist = Math.abs(rect.top - refY);
            if (dist < best.dist) best = {id: '#' + sec.id, dist};
        });
        return best.id;
    }

    function bottomCheck() {
        const doc = document.documentElement;
        const body = document.body;
        const scrollTop = (doc.scrollTop || body.scrollTop);
        const clientHeight = doc.clientHeight;
        const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);
        const atBottom = Math.ceil(scrollTop + clientHeight) >= (scrollHeight - 1);
        if (atBottom) {
            setActiveById('#contact');
        } else if (scrollTop <= 20) {
            setActiveById('#hero');
        } else {
            const current = getActiveSectionId();
            if (current) setActiveById(current);
        }
    }
    document.addEventListener('scroll', bottomCheck, {passive: true});
    window.addEventListener('resize', debounce(bottomCheck, 150));
    bottomCheck();

    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    links.forEach(a => a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href?.startsWith('#')) {
            e.preventDefault();
            const target = $(href);
            if (!target) return;
            const y = target.getBoundingClientRect().top + window.scrollY - 8;
            if (prefersReduced) window.scrollTo(0, y); else window.scrollTo({top: y, behavior: 'smooth'});
        }
    }));
}

function initScrollProgress() {
    const bar = $('#scroll-progress');

    function update() {
        const h = document.documentElement;
        const scrollTop = h.scrollTop || document.body.scrollTop;
        const max = (h.scrollHeight - h.clientHeight) || 1;
        const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
        bar.style.width = pct + '%';
        bar.setAttribute('aria-valuenow', String(Math.round(pct)));
    }

    update();
    document.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', debounce(update, 150));
}

function initBackToTop() {
    const btn = $('#back-to-top');
    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function toggle() {
        const y = window.scrollY;
        btn.classList.toggle('show', y > 300);
    }

    toggle();
    document.addEventListener('scroll', toggle, {passive: true});
    btn.addEventListener('click', () => {
        if (prefersReduced) window.scrollTo(0, 0); else window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

function initParallax() {
    const bg = $('.hero__bg');
    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!bg || prefersReduced) return;

    function onScroll() {
        const y = window.scrollY * 0.2;
        bg.style.transform = `translateY(${y}px)`;
    }

    onScroll();
    document.addEventListener('scroll', onScroll, {passive: true});
}

function debounce(fn, wait = 150) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}

function detectLangByTLD() {
    try {
        const host = (location && location.hostname) ? location.hostname.toLowerCase() : '';
        const parts = host.split('.');
        const tld = parts[parts.length - 1] || '';
        if (tld === 'fr') return 'fr';
        if (tld === 'com') return 'en';
    } catch (e) {
    }
    return null;
}

function initLanguage() {
    const btn = $('#lang-toggle');
    const tldLang = detectLangByTLD();
    let lang = localStorage.getItem('lang') || tldLang || 'fr';

    function setLang(l) {
        lang = l;
        localStorage.setItem('lang', lang);
        applyI18n(lang);
        sortEducation();
    }

    setLang(lang);
    btn?.addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));
}

function initExternalLinks() {
    const links = $all('a[href]');
    links.forEach(a => {
        const href = a.getAttribute('href') || '';
        const isHash = href.startsWith('#');
        const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:');
        const isAssetDoc = /assets\/(metadata|svgs-full|svgs|sprites|webfonts)\//i.test(href) && !/\.css$/i.test(href) && !/\.js$/i.test(href);
        if (!isHash && (isExternal || isAssetDoc)) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    $('#theme-toggle')?.addEventListener('click', () => updateTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

    const y = new Date().getFullYear();
    $('#year').textContent = String(y);

    initLanguage();

    initSidebarMobile();
    initScrollSpy();
    initScrollProgress();
    initBackToTop();
    initParallax();
    initExternalLinks();
    initEmailProtection();

    const skip = document.querySelector('.skip-link');
    skip?.addEventListener('click', (e) => {
        const main = document.getElementById('main');
        if (main) {
            e.preventDefault();
            const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
            main.setAttribute('tabindex', '-1');
            main.focus({preventScroll: true});
            if (prefersReduced) {
                window.scrollTo(0, main.getBoundingClientRect().top + window.scrollY);
            } else {
                main.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    });

    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        requestAnimationFrame(() => document.body.classList.add('intro-in'));
    } else {
        document.body.classList.add('intro-in');
    }
});


function initEmailProtection() {
    const decode = (s) => s.split('').reverse().join('');
    const anchors = $all('a.protected-email');
    anchors.forEach(a => {
        const obf = a.getAttribute('data-obf');
        if (!obf) return;
        const email = decode(obf);
        function reveal(navigate = false) {
            const mailto = 'mailto:' + email;
            a.textContent = email;
            a.setAttribute('href', mailto);
            a.removeAttribute('data-obf');
            a.classList.remove('protected-email');
            a.setAttribute('rel', 'nofollow');
            a.removeEventListener('click', onClick);
            a.removeEventListener('keydown', onKey);
            if (navigate) {
                window.location.href = mailto;
            }
        }
        function onClick(e) {
            e.preventDefault();
            reveal(true);
        }
        function onKey(e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                reveal(true);
            }
        }
        a.addEventListener('click', onClick);
        a.addEventListener('keydown', onKey);
        a.setAttribute('aria-label', 'Afficher l\'email');
    });
}

function sortEducation() {
    const grid = document.querySelector('.education-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.education-card'));
    if (!cards.length) return;
    cards.sort((a, b) => {
        const as = a.getAttribute('data-start') || '0000-00';
        const bs = b.getAttribute('data-start') || '0000-00';
        if (as !== bs) return as > bs ? -1 : 1;
        const ae = a.getAttribute('data-end') || '0000-00';
        const be = b.getAttribute('data-end') || '0000-00';
        return ae > be ? -1 : 1;
    });

    cards.forEach(c => grid.appendChild(c));
    cards.forEach(c => {
        c.classList.remove('is-latest');
        const b = c.querySelector('.latest-badge');
        if (b) b.remove();
    });

    const first = cards[0];
    if (first) {
        first.classList.add('is-latest');
        const badge = document.createElement('span');
        badge.className = 'latest-badge';
        const lang = localStorage.getItem('lang') || (document.documentElement.lang === 'en' ? 'en' : 'fr');
        badge.textContent = (i18n[lang] && i18n[lang].education && i18n[lang].education.latest) ? i18n[lang].education.latest : 'Plus récent';
        first.appendChild(badge);
    }
}
