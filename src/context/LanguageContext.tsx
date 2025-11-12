import * as React from 'react';

export type Language = 'en' | 'ru';

export type NavKey = 'home' | 'about' | 'products' | 'contact';

export const NAV_LINKS: Array<{ key: NavKey; path: string }> = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
    { key: 'products', path: '/products' },
];

type HeaderTranslations = {
    title: string;
    navLabels: Record<NavKey, string>;
    languageToggleLabel: string;
};

type HeroSectionTranslations = {
    title: string;
    subtitle: string;
    description: string;
    ctas: Array<{ label: string; path: string }>;
};

type ProductCategory = {
    title: string;
    details: string[];
};

type ProductShowcaseTranslations = {
    title: string;
    categories: ProductCategory[];
    ctaLabel: string;
};

type BrandHighlightTranslations = {
    title: string;
    description: string;
    bullets: Array<{ title: string; description: string }>;
    stats: Array<{ value: string; label: string }>;
    ctaLabel: string;
};

type FinalCtaTranslations = {
    title: string;
    description: string;
    subtitle: string;
    details: string[];
    buttons: Array<{ label: string; path: string }>;
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
                products: 'Products',
                contact: 'Contact Us',
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
                        { label: 'Explore Products', path: '/products' },
                        { label: 'Contact Us', path: '/contact' },
                    ],
                },
                productShowcase: {
                    title: 'Coffee Portfolio',
                    categories: [
                        {
                            title: '12 SKUs — 4 packaging options',
                            details: ['24 assortment, 25 assortment, 50 assortment, 100 assortment', 'Stick-packed products'],
                        },
                        {
                            title: '8 SKUs — 4 weights',
                            details: ['0.1, 0.25, 0.5, 1 kg', 'Ground coffee with flavors'],
                        },
                        {
                            title: '5 SKUs — 4 weights',
                            details: ['0.1, 0.25, 0.5, 1 kg', 'Classic ground coffee'],
                        },
                        {
                            title: '8 SKUs — 4 weights',
                            details: ['0.5, 1, 5, 10 kg', 'Flavored coffee beans'],
                        },
                        {
                            title: '5 SKUs — 4 weights',
                            details: ['0.5, 1, 5, 10 kg', 'Classic coffee beans'],
                        },
                        {
                            title: '12 SKUs — 2 weights',
                            details: ['0.5, 1 kg', 'HoReCa and vending products', '3-in-1 coffee, tea, hot chocolate'],
                        },
                        {
                            title: '4 SKUs — 4 packaging options',
                            details: ['10, 25, 50, 100 pcs', 'Coffee capsules with varying intensity'],
                        },
                        {
                            title: '4 SKUs — 4 packaging options',
                            details: ['10, 25, 50, 100 pcs', 'Flavored coffee capsules'],
                        },
                        {
                            title: '10 packaging types',
                            details: ['Gift sets'],
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
                            title: 'Extensive assortment',
                            description: 'Over 50 SKUs: from sticks to 10 kg beans.',
                        },
                        {
                            title: 'Quality assurance',
                            description: 'Control at every stage from bean selection to packaging.',
                        },
                        {
                            title: 'For business',
                            description: 'Tailored solutions for cafés, restaurants, and vending.',
                        },
                        {
                            title: 'Gift sets',
                            description: 'Elegant packaging perfect for corporate gifts.',
                        },
                    ],
                    stats: [
                        { value: '50+', label: 'Product SKUs' },
                        { value: '10', label: 'Product categories' },
                        { value: '100%', label: 'Quality control' },
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
                        { label: 'View Products', path: '/products' },
                        { label: 'Contact Us', path: '/contact' },
                        { label: 'About Company', path: '/about' },
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
                products: 'Продукты',
                contact: 'Контакты',
            },
            languageToggleLabel: 'Сменить язык',
        },
        pages: {
            home: {
                hero: {
                    title: 'Кофе, созданный профессионалами',
                    subtitle: 'PersonaTat — вкус обжарки премиум-класса для дома и бизнеса',
                    description:
                        'Уникальные бленды, отборные зерна и решения для HoReCa и вендинга.',
                    ctas: [
                        { label: 'Перейти к продукции', path: '/products' },
                        { label: 'Связаться с нами', path: '/contact' },
                    ],
                },
                productShowcase: {
                    title: 'Портфолио кофе',
                    categories: [
                        {
                            title: '12 наименований — 4 вида упаковки',
                            details: ['24 ассорти, 25 ассорти, 50 ассорти, 100 ассорти', 'Стикированный товар'],
                        },
                        {
                            title: '8 наименований — 4 веса',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Кофе молотый со вкусами'],
                        },
                        {
                            title: '5 наименований — 4 веса',
                            details: ['0.1, 0.25, 0.5, 1 кг', 'Кофе молотый классический'],
                        },
                        {
                            title: '8 наименований — 4 веса',
                            details: ['0.5, 1, 5, 10 кг', 'Кофе в зернах со вкусами'],
                        },
                        {
                            title: '5 наименований — 4 веса',
                            details: ['0.5, 1, 5, 10 кг', 'Кофе в зернах классический'],
                        },
                        {
                            title: '12 наименований — 2 веса',
                            details: ['0.5, 1 кг', 'Продукция HoReCa и вендинга', 'Кофе 3 в 1, чай, шоколад'],
                        },
                        {
                            title: '4 наименования — 4 вида упаковки',
                            details: ['10, 25, 50, 100 шт.', 'Кофе в капсулах разной интенсивности'],
                        },
                        {
                            title: '4 наименования — 4 вида упаковки',
                            details: ['10, 25, 50, 100 шт.', 'Кофе в капсулах со вкусами'],
                        },
                        {
                            title: '10 видов упаковки',
                            details: ['Подарочные наборы'],
                        },
                        {
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
                            title: 'Широкий ассортимент',
                            description: 'Более 50 наименований: от стиков до зерна весом 10 кг.',
                        },
                        {
                            title: 'Гарантия качества',
                            description: 'Контроль на всех этапах: от закупки зерна до упаковки.',
                        },
                        {
                            title: 'Для бизнеса',
                            description: 'Специальные решения для кафе, ресторанов и вендинга.',
                        },
                        {
                            title: 'Подарочные наборы',
                            description: 'Элегантная упаковка для корпоративных подарков.',
                        },
                    ],
                    stats: [
                        { value: '50+', label: 'Наименований продукции' },
                        { value: '10', label: 'Категорий товаров' },
                        { value: '100%', label: 'Контроль качества' },
                    ],
                    ctaLabel: 'Узнать о компании',
                },
                finalCta: {
                    title: 'Готовы попробовать настоящий кофе?',
                    description:
                        'Свяжитесь с нами для получения каталога продукции или консультации.',
                    subtitle: 'Начните с PersonaTat сегодня',
                    details: [
                        'Работаем с частными клиентами и бизнесом по всей России.',
                        'Доставка по РФ.',
                        '8 800 600 5635',
                        'info@personatat.com',
                        'г. Набережные Челны',
                    ],
                    buttons: [
                        { label: 'Посмотреть продукцию', path: '/products' },
                        { label: 'Связаться с нами', path: '/contact' },
                        { label: 'О компании', path: '/about' },
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
        setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
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

export const availableLanguages: Language[] = ['en', 'ru'];

