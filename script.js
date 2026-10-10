document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            nav_about: 'About', nav_education: 'Journey', nav_work: 'Work', nav_contact: 'Contact',
            nav_about_mobile: 'About', nav_education_mobile: 'Journey', nav_work_mobile: 'Work', nav_contact_mobile: 'Contact',
            hero_greeting: "Hi, I'm Sudarshan Regmi",
            hero_subtitle: "Building ideas into reality through code and creativity.",
            about_title: "About Me",
            about_p1: "Hi, I’m Sudarshan Regmi, a BSc CSIT student and software developer. I am passionate about web development, programming, and modern technologies. Through creative thinking and the use of technology, my goal is to build useful digital solutions while continuously learning new technologies and improving my skills.",
            about_p2: "Currently, I’m focused on expanding my knowledge and skills in <strong class='font-semibold text-accent/80'>Software Development</strong>. I am passionate about web development,programming, and exploring new technologies. Through creativity and technology, I aim to build useful digitalsolutions and meaningful experiences. My curiosity and commitment to continuous learning inspire me to grow inthe field of technology.",
            about_p3: "<i class='fa-solid fa-location-dot mr-2'></i>Permanently from Syangja, currently residing in Kathmandu for my studies.",
            journey_title: "My Journey",
            journey_card1_degree: "B.Sc. CSIT (Bachelor of Science in Computer Science and Information Technology)",
            journey_card1_school: "Amrit Science Campus(Tribhuvan University), Thamel, Kathmandu",
            journey_card1_date: "2024 - PRESENT (4th Semester)",
            journey_card1_info: "Tentative graduation in 2028. ",
            journey_card2_degree: "+2 (Science)",
            journey_card2_school: "Viswa Niketan Secondary School, Tripureswor, Kathmandu",
            journey_card2_date: "Graduated: 2024",
            journey_card3_degree: "Secondary Education Examination (SEE)",
            journey_card3_school: "Shree Dabhung Thanti Secondary School,Bheerkot, Syangja",
            journey_card3_date: "Graduated: 2022",
            work_title: "My Work",
            work_card1_title: "Web Development", work_card1_desc: "Building responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and modern web technologies",
            work_card2_title: "App Development", work_card2_desc: "Creating modern, user-friendly, and high-performance mobile applications with a focus on functionality and user experience.",
            work_card3_title: "UI/UX Design", work_card3_desc: "Designing clean, intuitive, and visually appealing user interfaces that provide a great user experience.",
            contact_title: "Let's Collaborate!",
            contact_subtitle: "Have a project in mind or want to discuss an idea?  Reach out to me.",
            contact_email_button: "Email Me",
            footer_text: "&copy; 2026 Sudarshan Regmi. All rights reserved."
        },
        ne: {
            nav_about: 'बारेमा', nav_education: 'यात्रा', nav_work: 'काम', nav_contact: 'सम्पर्क',
            nav_about_mobile: 'बारेमा', nav_education_mobile: 'यात्रा', nav_work_mobile: 'काम', nav_contact_mobile: 'सम्पर्क',
            hero_greeting: "नमस्कार, म सुदर्शन रेग्मी",
            hero_subtitle: "कोडिङ र सिर्जनशीलताको माध्यमबाट विचारहरूलाई वास्तविक रूप दिँदै।",
            about_title: "मेरो बारेमा",
            about_p1: "नमस्ते, म सुदर्शन रेग्मी हुँ। म BSc CSIT अध्ययनरत विद्यार्थी तथा सफ्टवेयर डेभलपर हुँ। म वेब विकास, प्रोग्रामिङ र आधुनिक प्रविधिहरूमा रुचि राख्छु। सिर्जनात्मक सोच र प्रविधिको प्रयोगमार्फत उपयोगी डिजिटल समाधानहरू निर्माण गर्दै निरन्तर नयाँ प्रविधिहरू सिक्नु र आफ्नो सीपलाई अझ सुधार गर्नु मेरो लक्ष्य हो।",
            about_p2: "हाल म <strong class='font-semibold text-accent/80'>सफ्टवेयर डेभलपमेन्ट</strong> र वेब प्रविधिहरूमा आफ्नो सीप विकास गर्न केन्द्रित छु। मलाई सिर्जनात्मक परियोजनाहरू निर्माण गर्न, आधुनिक प्रविधिहरू सिक्न र आफ्नो प्रोग्रामिङ ज्ञान प्रयोग गरी उपयोगी डिजिटल समाधानहरू विकास गर्न मन पर्छ। प्रविधिप्रतिको मेरो रुचि र निरन्तर सिक्ने चाहनाले मलाई कोडमार्फत अर्थपूर्ण अनुभवहरू सिर्जना गर्न प्रेरित गर्छ।",
            about_p3: "<i class='fa-solid fa-location-dot mr-2'></i> स्थायी ठेगाना स्याङ्जा, हाल अध्ययनको लागि काठमाडौंमा बस्दै।",
            journey_title: "मेरो शैक्षिक यात्रा",
            journey_card1_degree: "ब्याचलर्स इन कम्प्युटर साइन्स एण्ड इन्फर्मेसन टेक्नोलोजी (बी.एस्सी. सीएसआईटी)",
            journey_card1_school: "अमृत साइन्स क्याम्पस, त्रिभुवन विश्वविद्यालय, ठमेल, काठमाडौं",
            journey_card1_date: "२०८१ - हाल (चौथो सेमेस्टरमा अध्ययनरत)",
            journey_card1_info: "सम्भावित उत्तीर्ण: २०८५",
            journey_card2_degree: "+२ (विज्ञान)",
            journey_card2_school: "विश्व निकेतन माध्यमिक विद्यालय, त्रिपुरेश्वर, काठमाडौं",
            journey_card2_date: "उत्तीर्ण: २०८१",
            journey_card3_degree: "माध्यमिक शिक्षा परीक्षा (SEE)",
            journey_card3_school: "हिमालयन अंग्रेजी बोर्डिङ स्कूल, स्याङ्जा",
            journey_card3_date: "उत्तीर्ण: चैत २०७९",
            work_title: "मेरो काम",
            work_card1_title: "वेब डेभलपमेन्ट", work_card1_desc: "एचटीएमएल, सीएसएस र जाभास्क्रिप्ट प्रयोग गरेर आधुनिक, रिस्पोन्सिभ र प्रयोगकर्तामैत्री वेबसाइटहरू विकास गर्ने।",
            work_card2_title: "एप डेभलपमेन्ट", work_card2_desc: "आधुनिक, प्रयोगकर्तामैत्री र उच्च गुणस्तरका मोबाइल एपहरू विकास गर्दै उत्कृष्ट कार्यक्षमता र प्रयोगकर्ता अनुभव प्रदान गर्ने।",
            work_card3_title: "यूआई/यूएक्स डिजाइन", work_card3_desc: "प्रयोगकर्तालाई सहज, आकर्षक र उत्कृष्ट अनुभव प्रदान गर्ने सफा तथा आधुनिक यूआई/यूएक्स डिजाइन गर्ने।",
            contact_title: "सहकार्य गरौं!",
            contact_subtitle: "के तपाईंसँग कुनै प्रोजेक्टको आइडिया छ वा कुनै नयाँ सोचबारे छलफल गर्न चाहनुहुन्छ? मलाई सम्पर्क गर्नुहोस्।",
            contact_email_button: "मलाई इमेल पठाउनुहोस्",
            footer_text: "&copy; २०२६ सुदर्शन रेग्मी। सबै अधिकार सुरक्षित।"
        }
    };

    // --- TYPEWRITER LOGIC ---
    let typeTimeout;
    const heroGreetingEl = document.getElementById('hero-greeting');
    const heroSubtitleEl = document.getElementById('hero-subtitle');

    function typeWriter(element, text, speed = 50, callback) {
        let i = 0;
        element.innerHTML = '';
        element.classList.add('typewriter-cursor');

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                typeTimeout = setTimeout(type, speed);
            } else {
                element.classList.remove('typewriter-cursor');
                if (callback) callback();
            }
        }
        type();
    }

    function startTypingAnimation(lang) {
        clearTimeout(typeTimeout); // Stop any ongoing animation
        const greetingText = translations[lang].hero_greeting;
        const subtitleText = translations[lang].hero_subtitle;

        typeWriter(heroGreetingEl, greetingText, 70, () => {
            typeWriter(heroSubtitleEl, subtitleText, 40);
        });
    }

    // --- LANGUAGE SWITCHER LOGIC ---
    const langDropdownButton = document.getElementById('lang-dropdown-button');
    const langDropdownOptions = document.getElementById('lang-dropdown-options');
    const selectedLangFlag = document.getElementById('selected-lang-flag');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (key !== 'hero_greeting' && key !== 'hero_subtitle') {
                if (translations[lang] && translations[lang][key]) {
                    el.classList.remove('language-fade');
                    void el.offsetWidth;
                    el.innerHTML = translations[lang][key];
                    el.classList.add('language-fade');
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        const flagSrc = lang === 'ne' ? 'assets/images/nepal.gif' : 'assets/images/uk.png';
        selectedLangFlag.src = flagSrc;

        startTypingAnimation(lang);
    };

    if (langDropdownButton) {
        langDropdownButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdownOptions.classList.toggle('hidden');
        });
    }

    if (langDropdownOptions) {
        langDropdownOptions.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.closest('.lang-option');
            if (target) {
                const lang = target.getAttribute('data-lang');
                setLanguage(lang);
                langDropdownOptions.classList.add('hidden');
            }
        });
    }

    // --- THEME SWITCHER LOGIC ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIndicator = document.getElementById('theme-indicator');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    const setTheme = (theme) => {
        document.body.classList.remove('theme-fade');
        void document.body.offsetWidth;
        document.body.classList.add('theme-fade');
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            html.classList.add('dark');
            if (themeIndicator) themeIndicator.style.transform = 'translateX(1.5rem)';
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        } else {
            html.classList.remove('dark');
            if (themeIndicator) themeIndicator.style.transform = 'translateX(0)';
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    };

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // --- MOBILE MENU LOGIC ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');

    if (mobileMenuButton && mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        mobileMenuButton.addEventListener('click', (e) => {
            const isMenuOpen = mobileMenu.classList.toggle('hidden');
            if (header) {
                header.classList.toggle('rounded-full', isMenuOpen);
                header.classList.toggle('rounded-3xl', !isMenuOpen);
            }
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (header) {
                    header.classList.add('rounded-full');
                    header.classList.remove('rounded-3xl');
                }
            });
        });
    }

    // --- GLOBAL CLICK LISTENER ---
    document.addEventListener('click', (e) => {
        if (langDropdownButton && langDropdownOptions && !langDropdownButton.contains(e.target) && !langDropdownOptions.contains(e.target)) {
            langDropdownOptions.classList.add('hidden');
        }
        if (mobileMenu && mobileMenuButton && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // --- SCROLL REVEAL LOGIC ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // --- INITIALIZATION ---
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
