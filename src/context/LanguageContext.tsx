import * as React from 'react';

export type Language = 'en' | 'ru' | 'tt';

export type NavKey = 'home' | 'about' | 'contact' | 'products';

export const NAV_LINKS: Array<{ key: NavKey; path: string }> = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
    { key: 'products', path: '/products' },
];

export const availableLanguages: Language[] = ['en', 'ru', 'tt'];

type HeaderTranslations = {
    title: string;
    navLabels: Record<NavKey, string>;
    languageToggleLabel: string;
};

type HeroCta = {
    id: string;
    label: string;
    path: string;
};

type HeroSectionTranslations = {
    title: string;
    subtitle: string;
    description: string;
    ctas: HeroCta[];
};

type ProductCategory = {
    id: string;
    title: string;
    details: string[];
};

type ProductShowcaseTranslations = {
    title: string;
    categories: ProductCategory[];
    ctaLabel: string;
};

type BrandReason = {
    id: string;
    title: string;
    description: string;
};

type BrandStat = {
    id: string;
    value: string;
    label: string;
};

type BrandHighlightTranslations = {
    title: string;
    description: string;
    bullets: BrandReason[];
    stats: BrandStat[];
    ctaLabel: string;
};

type FinalCtaButton = {
    id: string;
    label: string;
    path: string;
};

type FinalCtaTranslations = {
    title: string;
    description: string;
    subtitle: string;
    details: string[];
    buttons: FinalCtaButton[];
    note: string;
};

type PageCopy = {
    title: string;
    description: string;
};

type FooterTranslations = {
    description: string;
    contactHeading: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    locationLabel: string;
    locationValue: string;
    hotlineNote: string;
    rights: string;
};

type Translations = {
    header: HeaderTranslations;
    pages: {
        home: {
            hero: HeroSectionTranslations;
            productShowcase: ProductShowcaseTranslations;
            brandHighlight: BrandHighlightTranslations;
            finalCta: FinalCtaTranslations;
        };
        about: PageCopy;
        products: PageCopy;
        contact: PageCopy;
    };
    footer: FooterTranslations;
};

const TRANSLATIONS: Record<Language, Translations> = {
    en: {
        header: {
            title: 'PersonaTat',
            navLabels: {
                home: 'Home',
                about: 'About Us',
                contact: 'Contact Us',
                products: 'Products',
            },
            languageToggleLabel: 'Change language',
        },
        pages: {
            home: {
                hero: {
                    title: 'Crafted Coffee Experiences',
                    subtitle: 'PersonaTat – the taste of professional roasting at home and for business',
                    description:
                        'Discover unique blends, premium beans, and tailored solutions for HoReCa and vending.',
                    ctas: [
                        { id: 'cta-products', label: 'Explore Products', path: '/products' },
                        { id: 'cta-contact', label: 'Contact Us', path: '/contact' },
                    ],
                },
                productShowcase: {
                    title: 'Coffee Portfolio',
                    categories: [
                        {
                            id: 'cat-1',
                            title: '12 SKUs — 4 packaging options',
                            details: [
                                '24 assortment, 25 assortment, 50 assortment, 100 assortment',
                                'Stick-packed products',
                            ],
                        },
                        {
                            id: 'cat-2',
                            title: '8 SKUs — 4 weights',
                            details: ['0.1, 0.25, 0.5, 1 kg', 'Ground coffee with flavors'],
                        },
                        {
                            id: 'cat-3',
                            title: '5 SKUs — 4 weights',
                            details: ['0.1, 0.25, 0.5, 1 kg', 'Classic ground coffee'],
                        },
                        {
                            id: 'cat-4',
                            title: '8 SKUs — 4 weights',
                            details: ['0.5, 1, 5, 10 kg', 'Flavored coffee beans'],
                        },
                        {
                            id: 'cat-5',
                            title: '5 SKUs — 4 weights',
                            details: ['0.5, 1, 5, 10 kg', 'Classic coffee beans'],
                        },
                        {
                            id: 'cat-6',
                            title: '12 SKUs — 2 weights',
                            details: [
                                '0.5, 1 kg',
                                'HoReCa and vending products',
                                '3-in-1 coffee, tea, hot chocolate',
                            ],
                        },
                        {
                            id: 'cat-7',
                            title: '4 SKUs — 4 packaging options',
                            details: ['10, 25, 50, 100 pcs', 'Coffee capsules with varying intensity'],
                        },
                        {
                            id: 'cat-8',
                            title: '4 SKUs — 4 packaging options',
                            details: ['10, 25, 50, 100 pcs', 'Flavored coffee capsules'],
                        },
                        {
                            id: 'cat-9',
                            title: '10 packaging types',
                            details: ['Gift sets'],
                        },
                        {
                            id: 'cat-10',
                            title: 'Promotional merchandise',
                            details: ['Brand collateral and accessories'],
                        },
                    ],
                    ctaLabel: 'View Full Product Catalog',
                },
                brandHighlight: {
                    title: 'Why Choose PersonaTat?',
                    description:
                        'We deliver a complete range of coffee products for home, business, and special occasions.',
                    bullets: [
                        {
                            id: 'bullet-1',
                            title: 'Extensive assortment',
                            description: 'Over 50 SKUs: from sticks to 10 kg beans.',
                        },
                        {
                            id: 'bullet-2',
                            title: 'Quality assurance',
                            description: 'Control at every stage from bean selection to packaging.',
                        },
                        {
                            id: 'bullet-3',
                            title: 'For business',
                            description: 'Tailored solutions for cafés, restaurants, and vending.',
                        },
                        {
                            id: 'bullet-4',
                            title: 'Gift sets',
                            description: 'Elegant packaging perfect for corporate gifts.',
                        },
                    ],
                    stats: [
                        { id: 'stat-1', value: '50+', label: 'Product SKUs' },
                        { id: 'stat-2', value: '10', label: 'Product categories' },
                        { id: 'stat-3', value: '100%', label: 'Quality control' },
                    ],
                    ctaLabel: 'Learn About Us',
                },
                finalCta: {
                    title: 'Ready to taste true coffee?',
                    description:
                        'Contact us to receive the full product catalog or schedule a consultation.',
                    subtitle: 'Start with PersonaTat today',
                    details: [
                        'We work with private customers and businesses across Russia.',
                        'Nationwide delivery.',
                        '8 800 600 5635',
                        'info@personatat.com',
                        'Naberezhnye Chelny',
                    ],
                    buttons: [
                        { id: 'final-products', label: 'View Products', path: '/products' },
                        { id: 'final-contact', label: 'Contact Us', path: '/contact' },
                        { id: 'final-about', label: 'About Company', path: '/about' },
                    ],
                    note: 'Hotline available throughout Russia',
                },
            },
            about: {
                title: 'About Us',
                description: 'Information about PersonaTat will be available soon.',
            },
            products: {
                title: 'Products',
                description: 'Product details are coming soon.',
            },
            contact: {
                title: 'Contact Us',
                description: 'Reach out via phone or email for more information.',
            },
        },
        footer: {
            description: 'Craft coffee solutions for homes, cafés, restaurants, and vending.',
            contactHeading: 'Stay Connected',
            phoneLabel: 'Hotline',
            phoneValue: '8 800 600 5635',
            emailLabel: 'Email',
            emailValue: 'info@personatat.com',
            locationLabel: 'Location',
            locationValue: 'Naberezhnye Chelny, Russia',
            hotlineNote: 'Hotline available throughout Russia.',
            rights: '© PersonaTat. All rights reserved.',
        },
    },
    ru: {
        header: {
            title: 'ПерсонаТат',
            navLabels: {
                home: 'Главная',
                about: 'О нас',
                contact: 'Контакты',
                products: 'Продукты',
            },
            languageToggleLabel: 'Сменить язык',
        },
        pages: {
            home: {
                hero: {
                    title: 'Кофе, созданный профессионалами',
                    subtitle: 'PersonaTat — вкус обжарки премиум-класса для дома и бизнеса',
                    description: 'Уникальные бленды, отборные зерна и решения для HoReCa и вендинга.',
                    ctas: [
                        { id: 'cta-products', label: 'Перейти к продукции', path: '/products' },
                        { id: 'cta-contact', label: 'Связаться с нами', path: '/contact' },
                    ],
                },
                productShowcase: {
                    title: 'Портфолио кофе',
                    categories: [
                        {
                            id: 'cat-1',
                            title: '12 наименований — 4 вида упаковки',
                            details: ['24 ассорти, 25 ассорти, 50 ассорти, 100 ассорти', 'Стикированный товар'],
                        },
                        {
                            id: 'cat-2',
                            title: '8 наименований — 4 веса',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Кофе молотый со вкусами'],
                        },
                        {
                            id: 'cat-3',
                            title: '5 наименований — 4 веса',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Кофе молотый классический'],
                        },
                        {
                            id: 'cat-4',
                            title: '8 наименований — 4 веса',
                            details: ['0.5, 1, 5, 10 кг', 'Кофе в зернах со вкусами'],
                        },
                        {
                            id: 'cat-5',
                            title: '5 наименований — 4 веса',
                            details: ['0.5, 1, 5, 10 кг', 'Кофе в зернах классический'],
                        },
                        {
                            id: 'cat-6',
                            title: '12 наименований — 2 веса',
                            details: ['0.5, 1 кг', 'Продукция HoReCa и вендинга', 'Кофе 3 в 1, чай, шоколад'],
                        },
                        {
                            id: 'cat-7',
                            title: '4 наименования — 4 вида упаковки',
                            details: ['10, 25, 50, 100 шт.', 'Кофе в капсулах разной интенсивности'],
                        },
                        {
                            id: 'cat-8',
                            title: '4 наименования — 4 вида упаковки',
                            details: ['10, 25, 50, 100 шт.', 'Кофе в капсулах со вкусами'],
                        },
                        {
                            id: 'cat-9',
                            title: '10 видов упаковки',
                            details: ['Подарочные наборы'],
                        },
                        {
                            id: 'cat-10',
                            title: 'Рекламная продукция',
                            details: ['Фирменные материалы и аксессуары'],
                        },
                    ],
                    ctaLabel: 'Перейти к каталогу продукции',
                },
                brandHighlight: {
                    title: 'Почему выбирают нас?',
                    description:
                        'Мы предлагаем полный спектр кофейной продукции для дома, бизнеса и особых случаев.',
                    bullets: [
                        {
                            id: 'bullet-1',
                            title: 'Широкий ассортимент',
                            description: 'Более 50 наименований: от стиков до зерна весом 10 кг.',
                        },
                        {
                            id: 'bullet-2',
                            title: 'Гарантия качества',
                            description: 'Контроль на всех этапах: от закупки зерна до упаковки.',
                        },
                        {
                            id: 'bullet-3',
                            title: 'Для бизнеса',
                            description: 'Специальные решения для кафе, ресторанов и вендинга.',
                        },
                        {
                            id: 'bullet-4',
                            title: 'Подарочные наборы',
                            description: 'Элегантная упаковка для корпоративных подарков.',
                        },
                    ],
                    stats: [
                        { id: 'stat-1', value: '50+', label: 'Наименований продукции' },
                        { id: 'stat-2', value: '10', label: 'Категорий товаров' },
                        { id: 'stat-3', value: '100%', label: 'Контроль качества' },
                    ],
                    ctaLabel: 'Узнать о компании',
                },
                finalCta: {
                    title: 'Готовы попробовать настоящий кофе?',
                    description: 'Свяжитесь с нами для получения каталога продукции или консультации.',
                    subtitle: 'Начните с PersonaTat сегодня',
                    details: [
                        'Работаем с частными клиентами и бизнесом по всей России.',
                        'Доставка по РФ.',
                        '8 800 600 5635',
                        'info@personatat.com',
                        'г. Набережные Челны',
                    ],
                    buttons: [
                        { id: 'final-products', label: 'Посмотреть продукцию', path: '/products' },
                        { id: 'final-contact', label: 'Связаться с нами', path: '/contact' },
                        { id: 'final-about', label: 'О компании', path: '/about' },
                    ],
                    note: 'Горячая линия работает по всей России',
                },
            },
            about: {
                title: 'О нас',
                description: 'Информация о ПерсонаТат скоро будет доступна.',
            },
            products: {
                title: 'Продукты',
                description: 'Сведения о продуктах скоро появятся.',
            },
            contact: {
                title: 'Контакты',
                description: 'Свяжитесь с нами по телефону или электронной почте.',
            },
        },
        footer: {
            description: 'Решения для кофе дома, в кафе, ресторанах и вендинге.',
            contactHeading: 'Будем на связи',
            phoneLabel: 'Горячая линия',
            phoneValue: '8 800 600 5635',
            emailLabel: 'Электронная почта',
            emailValue: 'info@personatat.com',
            locationLabel: 'Адрес',
            locationValue: 'г. Набережные Челны, Россия',
            hotlineNote: 'Горячая линия работает по всей России.',
            rights: '© PersonaTat. Все права защищены.',
        },
    },
    tt: {
        header: {
            title: 'PersonaTat',
            navLabels: {
                home: 'Төп бит',
                about: 'Безнең турында',
                contact: 'Бәйләнеш',
                products: 'Продукция',
            },
            languageToggleLabel: 'Телне алыштыру',
        },
        pages: {
            home: {
                hero: {
                    title: 'Һөнәри кофе тәҗрибәсе',
                    subtitle: 'PersonaTat — өй һәм бизнес өчен югары сыйфатлы кыздырылган кофе',
                    description:
                        'Уникаль блендлар, сайланган бөртекләр һәм HoReCa белән вендинг өчен чишелешләр.',
                    ctas: [
                        { id: 'cta-products', label: 'Продукцияне карау', path: '/products' },
                        { id: 'cta-contact', label: 'Без белән элемтә', path: '/contact' },
                    ],
                },
                productShowcase: {
                    title: 'Кофе портфолиосы',
                    categories: [
                        {
                            id: 'cat-1',
                            title: '12 исем — 4 төр упаковка',
                            details: ['24 ассорти, 25 ассорти, 50 ассорти, 100 ассорти', 'Стиклардагы продукция'],
                        },
                        {
                            id: 'cat-2',
                            title: '8 исем — 4 авырлык',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Тәмләштерелгән тартма кофе'],
                        },
                        {
                            id: 'cat-3',
                            title: '5 исем — 4 авырлык',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Классик тартма кофе'],
                        },
                        {
                            id: 'cat-4',
                            title: '8 исем — 4 авырлык',
                            details: ['0.5, 1, 5, 10 кг', 'Тәмле кофе бөртекләре'],
                        },
                        {
                            id: 'cat-5',
                            title: '5 исем — 4 авырлык',
                            details: ['0.5, 1, 5, 10 кг', 'Классик кофе бөртекләре'],
                        },
                        {
                            id: 'cat-6',
                            title: '12 исем — 2 авырлык',
                            details: ['0.5, 1 кг', 'HoReCa һәм вендинг өчен продукция', '3-ен-1 кофе, чәй, какао'],
                        },
                        {
                            id: 'cat-7',
                            title: '4 исем — 4 төр упаковка',
                            details: ['10, 25, 50, 100 данә', 'Төрле интенсивлыктагы капсулалар'],
                        },
                        {
                            id: 'cat-8',
                            title: '4 исем — 4 төр упаковка',
                            details: ['10, 25, 50, 100 данә', 'Тәмләштерелгән капсулалар'],
                        },
                        {
                            id: 'cat-9',
                            title: '10 төрле упаковка',
                            details: ['Бүләк җыелмалары'],
                        },
                        {
                            id: 'cat-10',
                            title: 'Реклама продукциясе',
                            details: ['Брэндлы материаллар һәм аксессуарлар'],
                        },
                    ],
                    ctaLabel: 'Продукция каталогын карау',
                },
                brandHighlight: {
                    title: 'Нигә безне сайлыйлар?',
                    description:
                        'Өй, бизнес һәм махсус чаралар өчен тулы кофей продукциясен тәкъдим итәбез.',
                    bullets: [
                        {
                            id: 'bullet-1',
                            title: 'Киң ассортимент',
                            description: '50 дән артык исем: стиктан 10 кг бөртеккә кадәр.',
                        },
                        {
                            id: 'bullet-2',
                            title: 'Сыйфат контроле',
                            description: 'Бөртек сайлаудан алып упаковкага кадәр тулы контроль.',
                        },
                        {
                            id: 'bullet-3',
                            title: 'Бизнес өчен',
                            description: 'Кафе, ресторан һәм вендинг өчен махсус чишелешләр.',
                        },
                        {
                            id: 'bullet-4',
                            title: 'Бүләк җыелмалары',
                            description: 'Корпоратив бүләкләр өчен зәвыклы упаковка.',
                        },
                    ],
                    stats: [
                        { id: 'stat-1', value: '50+', label: 'Продукция исемнәре' },
                        { id: 'stat-2', value: '10', label: 'Товар категорияләре' },
                        { id: 'stat-3', value: '100%', label: 'Сыйфат контроле' },
                    ],
                    ctaLabel: 'Компания турында',
                },
                finalCta: {
                    title: 'Чын кофены татып карарга әзерме?',
                    description:
                        'Продукция каталогын алу яки консультация өчен безгә мөрәжәгать итегез.',
                    subtitle: 'PersonaTat белән бүген үк башлагыз',
                    details: [
                        'Россия буенча шәхси клиентлар һәм бизнес белән эшлибез.',
                        'ТР буенча һәм РФ буенча җибәрү.',
                        '8 800 600 5635',
                        'info@personatat.com',
                        'Набережные Челны шәһәре',
                    ],
                    buttons: [
                        { id: 'final-products', label: 'Продукцияне карау', path: '/products' },
                        { id: 'final-contact', label: 'Бәйләнешкә чыгу', path: '/contact' },
                        { id: 'final-about', label: 'Компания турында', path: '/about' },
                    ],
                    note: 'Россия буенча эшли торган кайнар линия.',
                },
            },
            about: {
                title: 'Безнең турында',
                description: 'PersonaTat турындагы мәгълүмат тиздән булачак.',
            },
            products: {
                title: 'Продукция',
                description: 'Продукция турында мәгълүмат әзерләнә.',
            },
            contact: {
                title: 'Бәйләнеш',
                description: 'Телефон яки электрон почта аша элемтәгә чыгыгыз.',
            },
        },
        footer: {
            description: 'Өй, кафе, ресторан һәм вендинг өчен кофе чишелешләре.',
            contactHeading: 'Бәйләнештә калыйк',
            phoneLabel: 'Кайнар линия',
            phoneValue: '8 800 600 5635',
            emailLabel: 'Электрон почта',
            emailValue: 'info@personatat.com',
            locationLabel: 'Урын',
            locationValue: 'Россия, Набережные Челны',
            hotlineNote: 'Кайнар линия Россия буенча эшли.',
            rights: '© PersonaTat. Барлык хокуклар сакланган.',
        },
    },
};

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    translations: Translations;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

type LanguageProviderProps = {
    children: React.ReactNode;
    defaultLanguage?: Language;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
    defaultLanguage = 'en',
}) => {
    const [language, setLanguage] = React.useState<Language>(defaultLanguage);

    const toggleLanguage = React.useCallback(() => {
        setLanguage((prev) => {
            const currentIndex = availableLanguages.indexOf(prev);
            const nextIndex = (currentIndex + 1) % availableLanguages.length;
            return availableLanguages[nextIndex];
        });
    }, []);

    const value = React.useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage,
            translations: TRANSLATIONS[language],
        }),
        [language, toggleLanguage]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
    const context = React.useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};

