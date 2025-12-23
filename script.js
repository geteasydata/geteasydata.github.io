// ===================================
// Easy Data - Landing Page JavaScript
// Smooth animations, interactivity, and i18n
// ===================================

// ===================================
// Translations
// ===================================
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.pricing': 'Pricing',
        'nav.faq': 'FAQ',
        'nav.startFree': 'Start Free',
        'lang.switch': 'العربية',

        // Hero
        'hero.badge': 'Powered by Advanced AI',
        'hero.titlePart1': 'Transform Your Data Into',
        'hero.titleHighlight': 'Smart Decisions',
        'hero.titlePart2': 'in Seconds',
        'hero.subtitle': 'AI that helps you understand your data and make better decisions. Upload your file and get automatic analysis, smart predictions, and downloadable reports.',
        'hero.ctaPrimary': 'Start Analysis Free',
        'hero.ctaSecondary': 'See How It Works',
        'hero.stat1': 'AI Engines',
        'hero.stat2': 'Report Formats',
        'hero.stat3Value': 'Minutes',
        'hero.stat3': 'From Upload to Results',

        // Trusted
        'trusted.text': 'Designed for',

        // Features
        'features.badge': 'Features',
        'features.titlePart1': 'Everything You Need in',
        'features.titleHighlight': 'One Platform',
        'features.subtitle': 'Smart analysis tools that help you understand your data better and faster',
        'features.validation.title': 'Smart Validation System',
        'features.validation.desc': 'Examines your data before analysis, detects potential problems, and gives you recommendations to improve data quality before building models.',
        'features.automl.title': 'Fully Automatic Analysis',
        'features.automl.desc': 'AutoML selects and optimizes the best models automatically. No coding required.',
        'features.predictive.title': 'Predictive Models',
        'features.predictive.desc': 'Build machine learning models with automatic data cleaning and optimization before training.',
        'features.reports.title': 'Professional Reports',
        'features.reports.desc': 'Excel, Power BI, PDF, Word, and even Jupyter Notebook ready for instant download.',
        'features.bilingual.title': 'Arabic & English',
        'features.bilingual.desc': 'Full support for Arabic and English. Reports are generated in your preferred language.',
        'features.fast.title': 'Lightning Fast',
        'features.fast.desc': 'From file upload to results in minutes. No waiting, no complexity.',

        // How It Works
        'howItWorks.badge': 'How It Works',
        'howItWorks.titlePart1': 'Three',
        'howItWorks.titleHighlight': 'Simple',
        'howItWorks.titlePart2': 'Steps',
        'howItWorks.subtitle': 'No technical experience needed. Just upload your data and let the AI do the work',
        'howItWorks.step1.title': 'Upload Your Data',
        'howItWorks.step1.desc': 'Excel, CSV, or even direct SQL database connection',
        'howItWorks.step2.title': 'AI Does the Work',
        'howItWorks.step2.desc': '3 AI engines analyze, clean, and build the best models automatically',
        'howItWorks.step3.title': 'Download Results',
        'howItWorks.step3.desc': 'Reports, charts, and models ready to use in your business',

        // AI Section
        'ai.badge': 'Technology Used',
        'ai.titlePart1': 'Three Models',
        'ai.titleHighlight': 'Working Together',
        'ai.desc': 'We use multiple AI models to get more balanced results. The system combines their opinions to reduce the chance of errors.',
        'ai.gemini': 'For deep analysis and contextual understanding',
        'ai.llama': 'For blazing speed and instant response',
        'ai.deepseek': 'For logical and mathematical reasoning',

        // Pricing
        'pricing.badge': 'Pricing',
        'pricing.titlePart1': 'Plans for',
        'pricing.titleHighlight': 'Everyone',
        'pricing.subtitle': 'Start free and upgrade as you need',
        'pricing.period': '/month',
        'pricing.free.title': 'Free',
        'pricing.free.f1': '3 analyses per month',
        'pricing.free.f2': 'Files up to 1MB',
        'pricing.free.f3': 'Excel reports only',
        'pricing.free.f4': 'Community support',
        'pricing.free.cta': 'Start Free',
        'pricing.pro.popular': 'Most Popular',
        'pricing.pro.title': 'Professional',
        'pricing.pro.f1': 'Unlimited analyses',
        'pricing.pro.f2': 'Files up to 100MB',
        'pricing.pro.f3': 'All report types',
        'pricing.pro.f4': 'Power BI Export',
        'pricing.pro.f5': 'Email support',
        'pricing.pro.f6': 'API Access',
        'pricing.pro.cta': 'Get Started',
        'pricing.enterprise.title': 'Enterprise',
        'pricing.enterprise.price': 'Contact Us',
        'pricing.enterprise.f1': 'All Professional features',
        'pricing.enterprise.f2': 'Unlimited data',
        'pricing.enterprise.f3': 'Custom integration',
        'pricing.enterprise.f4': 'Team training',
        'pricing.enterprise.f5': '24/7 dedicated support',
        'pricing.enterprise.f6': 'Guaranteed SLA',
        'pricing.enterprise.cta': 'Contact Us',

        // Comparison
        'comparison.badge': 'Why Easy Data?',
        'comparison.titlePart1': 'Before and After',
        'comparison.titleHighlight': 'Using the Tool',
        'comparison.subtitle': 'See the difference in your workflow',
        'comparison.before.title': 'Traditional Way',
        'comparison.before.l1': 'Manual data cleaning (hours)',
        'comparison.before.l2': 'Writing complex Python code',
        'comparison.before.l3': 'Testing dozens of models manually',
        'comparison.before.l4': 'Creating reports from scratch',
        'comparison.before.l5': 'Requires high technical expertise',
        'comparison.before.l6': 'Long time to get results',
        'comparison.before.time': 'Days to weeks',
        'comparison.after.title': 'With Easy Data',
        'comparison.after.l1': 'Automatic data cleaning',
        'comparison.after.l2': 'No coding required',
        'comparison.after.l3': 'Best model selected automatically',
        'comparison.after.l4': 'Ready-to-download reports',
        'comparison.after.l5': 'Easy interface for everyone',
        'comparison.after.l6': 'Fast results',
        'comparison.after.time': 'Just minutes',
        'comparison.timeLabel': 'Expected time:',

        // FAQ
        'faq.badge': 'FAQ',
        'faq.titlePart1': 'Everything You Need to',
        'faq.titleHighlight': 'Know',
        'faq.subtitle': 'Answers to the most common questions',
        'faq.q1': 'What file types are supported?',
        'faq.a1': 'We support CSV, Excel (xlsx, xls), JSON, and Parquet files. You can also connect directly to SQL databases like PostgreSQL, MySQL, and SQLite.',
        'faq.q2': 'Do I need programming experience?',
        'faq.a2': 'No, the tool is designed to be user-friendly. Just upload your file, select the target column, and click "Start Analysis". But if you\'re a programmer, we also provide a ready-to-edit Jupyter Notebook.',
        'faq.q3': 'How is the data cleaned?',
        'faq.a3': 'The system examines data and detects issues like missing values, duplicates, and errors. It then suggests fixes and applies them automatically after your approval.',
        'faq.q4': 'Is my data secure?',
        'faq.a4': 'Yes, your data is processed locally on your device and is not sent to external servers unless you choose to use cloud AI features (in which case we use SSL encryption).',
        'faq.q5': 'What\'s the difference between free and paid plans?',
        'faq.a5': 'The free plan allows 3 analyses per month with files up to 1MB. The professional plan removes these limits and adds Power BI reports and API access.',
        'faq.q6': 'Does it support Arabic?',
        'faq.a6': 'Yes! The interface and reports are available in Arabic and English. You can switch between them at any time.',

        // Contact
        'contact.badge': 'Contact Us',
        'contact.titlePart1': 'Have a Question?',
        'contact.titleHighlight': 'We\'re Here',
        'contact.desc': 'Whether you have a technical question or want to learn more about enterprise plans, our team is ready to help.',
        'contact.email': 'Email',
        'contact.chat': 'Live Chat',
        'contact.chatHours': 'Available weekdays 9am - 5pm',
        'contact.docs': 'Documentation',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.subjectGeneral': 'General Inquiry',
        'contact.form.subjectTechnical': 'Technical Support',
        'contact.form.subjectEnterprise': 'Enterprise Plans',
        'contact.form.subjectPartnership': 'Partnership',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'How can we help you?',
        'contact.form.submit': 'Send Message',
        'contact.form.success': 'Sent Successfully ✓',

        // CTA
        'cta.titlePart1': 'Ready to Try',
        'cta.titlePart2': '?',
        'cta.subtitle': 'Start analyzing your data now and discover what it can do for you',
        'cta.button': 'Start Free Now',
        'cta.note': 'No credit card required • Setup in one minute',

        // Footer
        'footer.desc': 'AI-powered data analysis tool.',
        'footer.product': 'Product',
        'footer.tryApp': 'Try the App',
        'footer.support': 'Support',
        'footer.contactUs': 'Contact Us',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.rights': 'All rights reserved.'
    },
    ar: {
        // Navigation
        'nav.features': 'الميزات',
        'nav.howItWorks': 'كيف يعمل',
        'nav.pricing': 'الأسعار',
        'nav.faq': 'أسئلة شائعة',
        'nav.startFree': 'ابدأ مجاناً',
        'lang.switch': 'English',

        // Hero
        'hero.badge': 'مدعوم بالذكاء الاصطناعي المتقدم',
        'hero.titlePart1': 'حوّل بياناتك إلى',
        'hero.titleHighlight': 'قرارات ذكية',
        'hero.titlePart2': 'في ثوانٍ',
        'hero.subtitle': 'ذكاء اصطناعي يساعدك على فهم بياناتك واتخاذ قرارات أفضل. ارفع ملفك واحصل على تحليلات تلقائية، تنبؤات ذكية، وتقارير جاهزة للتحميل.',
        'hero.ctaPrimary': 'ابدأ التحليل مجاناً',
        'hero.ctaSecondary': 'شاهد كيف يعمل',
        'hero.stat1': 'محركات ذكاء اصطناعي',
        'hero.stat2': 'صيغ تقارير',
        'hero.stat3Value': 'دقائق',
        'hero.stat3': 'من الرفع للنتائج',

        // Trusted
        'trusted.text': 'مصمم لخدمة',

        // Features
        'features.badge': 'الميزات',
        'features.titlePart1': 'كل ما تحتاجه في',
        'features.titleHighlight': 'منصة واحدة',
        'features.subtitle': 'أدوات تحليل ذكية تساعدك على فهم بياناتك بشكل أفضل وأسرع',
        'features.validation.title': 'نظام تحقق ذكي',
        'features.validation.desc': 'يفحص بياناتك قبل التحليل، يكتشف المشاكل المحتملة، ويعطيك توصيات لتحسين جودة البيانات قبل بناء النماذج.',
        'features.automl.title': 'تحليل تلقائي بالكامل',
        'features.automl.desc': 'AutoML يختار أفضل النماذج ويحسّنها تلقائياً. لا تحتاج لكتابة سطر كود واحد.',
        'features.predictive.title': 'نماذج تنبؤية',
        'features.predictive.desc': 'بناء نماذج تعلم آلي مع تنظيف وتحسين تلقائي للبيانات قبل التدريب.',
        'features.reports.title': 'تقارير احترافية',
        'features.reports.desc': 'Excel، Power BI، PDF، Word، وحتى Jupyter Notebook جاهزة للتحميل فوراً.',
        'features.bilingual.title': 'عربي وإنجليزي',
        'features.bilingual.desc': 'دعم كامل للغة العربية والإنجليزية. التقارير تخرج بلغتك المفضلة.',
        'features.fast.title': 'سريع جداً',
        'features.fast.desc': 'من رفع الملف إلى النتائج في دقائق معدودة. لا انتظار، لا تعقيد.',

        // How It Works
        'howItWorks.badge': 'كيف يعمل',
        'howItWorks.titlePart1': 'ثلاث خطوات',
        'howItWorks.titleHighlight': 'بسيطة',
        'howItWorks.titlePart2': '',
        'howItWorks.subtitle': 'لا تحتاج لخبرة تقنية. فقط ارفع بياناتك ودع الذكاء الاصطناعي يعمل',
        'howItWorks.step1.title': 'ارفع بياناتك',
        'howItWorks.step1.desc': 'ملف Excel، CSV، أو حتى اتصال مباشر بقاعدة بيانات SQL',
        'howItWorks.step2.title': 'الذكاء يعمل',
        'howItWorks.step2.desc': '3 محركات AI تحلل، تنظف، وتبني أفضل النماذج تلقائياً',
        'howItWorks.step3.title': 'حمّل نتائجك',
        'howItWorks.step3.desc': 'تقارير، رسوم بيانية، ونماذج جاهزة للاستخدام في عملك',

        // AI Section
        'ai.badge': 'التقنية المستخدمة',
        'ai.titlePart1': 'ثلاثة نماذج',
        'ai.titleHighlight': 'تعمل معاً',
        'ai.desc': 'نستخدم عدة نماذج ذكاء اصطناعي للحصول على نتائج أكثر توازناً. النظام يجمع بين آرائها لتقليل احتمالية الأخطاء.',
        'ai.gemini': 'للتحليل العميق والفهم السياقي',
        'ai.llama': 'للسرعة الفائقة والاستجابة الفورية',
        'ai.deepseek': 'للتفكير المنطقي والرياضي',

        // Pricing
        'pricing.badge': 'الأسعار',
        'pricing.titlePart1': 'خطط تناسب',
        'pricing.titleHighlight': 'الجميع',
        'pricing.subtitle': 'ابدأ مجاناً وقم بالترقية حسب احتياجاتك',
        'pricing.period': '/شهرياً',
        'pricing.free.title': 'مجاني',
        'pricing.free.f1': '3 تحليلات شهرياً',
        'pricing.free.f2': 'ملفات حتى 1MB',
        'pricing.free.f3': 'تقارير Excel فقط',
        'pricing.free.f4': 'دعم المجتمع',
        'pricing.free.cta': 'ابدأ مجاناً',
        'pricing.pro.popular': 'الأكثر شعبية',
        'pricing.pro.title': 'احترافي',
        'pricing.pro.f1': 'تحليلات غير محدودة',
        'pricing.pro.f2': 'ملفات حتى 100MB',
        'pricing.pro.f3': 'كل أنواع التقارير',
        'pricing.pro.f4': 'Power BI Export',
        'pricing.pro.f5': 'دعم بالبريد الإلكتروني',
        'pricing.pro.f6': 'API Access',
        'pricing.pro.cta': 'ابدأ الآن',
        'pricing.enterprise.title': 'مؤسسات',
        'pricing.enterprise.price': 'تواصل معنا',
        'pricing.enterprise.f1': 'كل مميزات الاحترافي',
        'pricing.enterprise.f2': 'بيانات غير محدودة',
        'pricing.enterprise.f3': 'تكامل مخصص',
        'pricing.enterprise.f4': 'تدريب الفريق',
        'pricing.enterprise.f5': 'دعم مخصص 24/7',
        'pricing.enterprise.f6': 'SLA مضمون',
        'pricing.enterprise.cta': 'تواصل معنا',

        // Comparison
        'comparison.badge': 'لماذا Easy Data؟',
        'comparison.titlePart1': 'قبل وبعد',
        'comparison.titleHighlight': 'استخدام الأداة',
        'comparison.subtitle': 'شاهد الفرق في سير العمل',
        'comparison.before.title': 'الطريقة التقليدية',
        'comparison.before.l1': 'تنظيف البيانات يدوياً (ساعات)',
        'comparison.before.l2': 'كتابة كود Python معقد',
        'comparison.before.l3': 'تجربة عشرات النماذج يدوياً',
        'comparison.before.l4': 'إنشاء التقارير من الصفر',
        'comparison.before.l5': 'يحتاج خبرة تقنية عالية',
        'comparison.before.l6': 'وقت طويل للحصول على نتائج',
        'comparison.before.time': 'أيام إلى أسابيع',
        'comparison.after.title': 'مع Easy Data',
        'comparison.after.l1': 'تنظيف تلقائي للبيانات',
        'comparison.after.l2': 'لا تحتاج كتابة كود',
        'comparison.after.l3': 'اختيار أفضل نموذج تلقائياً',
        'comparison.after.l4': 'تقارير جاهزة للتحميل',
        'comparison.after.l5': 'واجهة سهلة للجميع',
        'comparison.after.l6': 'نتائج سريعة',
        'comparison.after.time': 'دقائق معدودة',
        'comparison.timeLabel': 'الوقت المتوقع:',

        // FAQ
        'faq.badge': 'أسئلة شائعة',
        'faq.titlePart1': 'كل ما تريد',
        'faq.titleHighlight': 'معرفته',
        'faq.subtitle': 'إجابات على الأسئلة الأكثر شيوعاً',
        'faq.q1': 'ما هي أنواع الملفات المدعومة؟',
        'faq.a1': 'ندعم ملفات CSV، Excel (xlsx, xls)، JSON، و Parquet. يمكنك أيضاً الاتصال مباشرة بقواعد بيانات SQL مثل PostgreSQL، MySQL، و SQLite.',
        'faq.q2': 'هل أحتاج خبرة في البرمجة؟',
        'faq.a2': 'لا، الأداة مصممة لتكون سهلة الاستخدام. فقط ارفع ملفك، اختر العمود الهدف، واضغط "ابدأ التحليل". لكن إذا كنت مبرمجاً، نوفر أيضاً Jupyter Notebook جاهز للتعديل.',
        'faq.q3': 'كيف يتم تنظيف البيانات؟',
        'faq.a3': 'يقوم النظام بفحص البيانات واكتشاف المشاكل مثل القيم الناقصة، المكررات، والأخطاء. ثم يقترح إصلاحات ويطبقها تلقائياً بعد موافقتك.',
        'faq.q4': 'هل بياناتي آمنة؟',
        'faq.a4': 'نعم، بياناتك تُعالج محلياً على جهازك ولا تُرسل إلى خوادم خارجية إلا إذا اخترت استخدام ميزات الذكاء الاصطناعي السحابية (وفي هذه الحالة نستخدم تشفير SSL).',
        'faq.q5': 'ما الفرق بين الخطة المجانية والمدفوعة؟',
        'faq.a5': 'الخطة المجانية تتيح 3 تحليلات شهرياً مع ملفات حتى 1MB. الخطة الاحترافية تزيل هذه القيود وتضيف تقارير Power BI و API.',
        'faq.q6': 'هل يدعم اللغة العربية؟',
        'faq.a6': 'نعم! الواجهة والتقارير متاحة بالعربية والإنجليزية. يمكنك التبديل بينهما في أي وقت.',

        // Contact
        'contact.badge': 'تواصل معنا',
        'contact.titlePart1': 'لديك سؤال؟',
        'contact.titleHighlight': 'نحن هنا',
        'contact.desc': 'سواء كان لديك استفسار تقني أو تريد معرفة المزيد عن الخطط المؤسسية، فريقنا جاهز للمساعدة.',
        'contact.email': 'البريد الإلكتروني',
        'contact.chat': 'الدردشة المباشرة',
        'contact.chatHours': 'متاح أيام العمل 9ص - 5م',
        'contact.docs': 'التوثيق',
        'contact.form.name': 'الاسم',
        'contact.form.namePlaceholder': 'اسمك الكريم',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.subject': 'الموضوع',
        'contact.form.subjectGeneral': 'استفسار عام',
        'contact.form.subjectTechnical': 'دعم تقني',
        'contact.form.subjectEnterprise': 'خطط المؤسسات',
        'contact.form.subjectPartnership': 'شراكة',
        'contact.form.message': 'الرسالة',
        'contact.form.messagePlaceholder': 'كيف يمكننا مساعدتك؟',
        'contact.form.submit': 'إرسال الرسالة',
        'contact.form.success': 'تم الإرسال بنجاح ✓',

        // CTA
        'cta.titlePart1': 'جاهز لتجربة',
        'cta.titlePart2': '؟',
        'cta.subtitle': 'ابدأ بتحليل بياناتك الآن واكتشف ما يمكن أن يقدمه لك',
        'cta.button': 'ابدأ مجاناً الآن',
        'cta.note': 'لا تحتاج بطاقة ائتمان • إعداد في دقيقة واحدة',

        // Footer
        'footer.desc': 'أداة تحليل بيانات مدعومة بالذكاء الاصطناعي.',
        'footer.product': 'المنتج',
        'footer.tryApp': 'جرب التطبيق',
        'footer.support': 'الدعم',
        'footer.contactUs': 'تواصل معنا',
        'footer.legal': 'قانوني',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'شروط الاستخدام',
        'footer.rights': 'جميع الحقوق محفوظة.'
    }
};

// Current language
let currentLang = localStorage.getItem('easydata-lang') || 'en';

// ===================================
// Language Toggle Function
// ===================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('easydata-lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const html = document.documentElement;

    // Set direction and lang attribute
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update font family based on language
    document.body.style.fontFamily = currentLang === 'ar'
        ? "'Cairo', 'Inter', sans-serif"
        : "'Inter', 'Cairo', sans-serif";
}

// Export for global use
window.toggleLanguage = toggleLanguage;

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language on load
    applyLanguage();

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(2, 6, 23, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .step-card, .pricing-card, .ai-list li'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add animate-in class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero orbs
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.hero-orb');
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 10;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    };

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValues = entry.target.querySelectorAll('.stat-value');
                statValues.forEach(stat => {
                    const text = stat.textContent;
                    const value = parseInt(text);
                    if (!isNaN(value) && value > 0) {
                        stat.textContent = '0';
                        animateCounter(stat, value);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.classList.add('visible');
    }

    // Add hover effect for pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            pricingCards.forEach(c => c.style.opacity = '0.7');
            this.style.opacity = '1';
        });

        card.addEventListener('mouseleave', function () {
            pricingCards.forEach(c => c.style.opacity = '1');
        });
    });

    // ===================================
    // FAQ Accordion
    // ===================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Show success message (in real implementation, send to backend)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            const successText = translations[currentLang]['contact.form.success'];
            submitBtn.innerHTML = `<span>${successText}</span>`;
            submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            submitBtn.disabled = true;

            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);

            // Log for debugging (remove in production)
            console.log('📧 Contact form submitted:', data);
        });
    }

    // ===================================
    // Animate new sections on scroll
    // ===================================
    const newSectionElements = document.querySelectorAll(
        '.comparison-card, .faq-item, .contact-method'
    );

    newSectionElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    console.log('💎 Easy Data Landing Page Loaded Successfully');
});
