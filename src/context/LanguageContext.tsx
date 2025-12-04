import * as React from 'react';


export type Language = 'en' | 'ru' | 'tt';

export type NavKey = 'about' | 'contact' | 'products';

export const NAV_LINKS: Array<{ key: NavKey; path: string }> = [
    {key: 'about', path: '/about'},
    {key: 'contact', path: '/contact'},
    {key: 'products', path: '/products'},
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
    details: string;
    imageUrl?: string;
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


type BrandHighlightTranslations = {
    about: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    bullets: BrandReason[];
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

type FooterTranslations = {
    description: string;

    contactHeading: string;
    companyHeading: string;
    productsHeading: string;

    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    locationLabel: string;
    locationValue: string;
    hotlineNote: string;
    rights: string;
};

type ContactInfoItem = {
    title: string;
    value: string;
};

type ContactFormFields = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type ContactPageTranslations = {
    hero: {
        title: string;
        subtitle: string;
        ctaLabel: string;
    };
    form: {
        title: string;
        description: string;
        fields: ContactFormFields;
        buttonLabel: string;
        submissionMessage: string;
    };
    info: {
        title: string;
        description: string;
        email: ContactInfoItem;
        phone: ContactInfoItem;
        address: ContactInfoItem;
    };
};

// Renamed for clarity, since the old PageCopy was only used for basic pages
type SimplePageCopy = {
    title: string;
    description: string;
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
        about: SimplePageCopy;
        products: SimplePageCopy;
        contact: ContactPageTranslations;
    };
    footer: FooterTranslations;
};

const TRANSLATIONS: Record<Language, Translations> = {
    en: {
        header: {
            title: 'PersonaTat',
            navLabels: {
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
                        {id: 'cta-products', label: 'Explore Products', path: '/products'},
                        {id: 'cta-contact', label: 'Contact Us', path: '/contact'},
                    ],
                },
                productShowcase: {
                    title: 'Our Products',
                    categories: [
                        {
                            id: 'instant-sticks',
                            title: 'Instant & Stick Products',
                            details: '3-in-1 coffee mixes, instant tea, and hot chocolate',
                        },
                        {
                            id: 'flavored-ground',
                            title: 'Flavored Ground Coffee',
                            details: 'Ground coffee with added flavors for a rich taste',
                        },
                        {
                            id: 'classic-ground',
                            title: 'Classic Ground Coffee',
                            details: 'Traditional ground coffee for everyday enjoyment',
                        },
                        {
                            id: 'flavored-beans',
                            title: 'Flavored Coffee Beans',
                            details: 'Whole beans with added flavors for a premium aroma',
                        },
                        {
                            id: 'classic-beans',
                            title: 'Classic Coffee Beans',
                            details: 'High-quality traditional whole beans',
                        },
                        {
                            id: 'coffee-capsules',
                            title: 'Coffee Capsules',
                            details: 'Classic or flavored capsules with varying intensities',
                        },
                    ],
                    ctaLabel: 'View All Products',
                },
                brandHighlight: {
                    about: 'About Brand',
                    titleTop: 'Why Choose PersonaTat?',
                    titleBottom: 'Why Choose PersonaTat?',
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
                        {id: 'final-products', label: 'View Products', path: '/products'},
                        {id: 'final-contact', label: 'Contact Us', path: '/contact'},
                        {id: 'final-about', label: 'About Company', path: '/about'},
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
                hero: {
                    title: 'Let\'s Start a Conversation',
                    subtitle: 'Reach out to our team for custom orders, support, or partnership inquiries.',
                    ctaLabel: 'Learn More About Us',
                },
                form: {
                    title: 'Send Us a Message',
                    description: 'Our team usually responds within 24 hours on business days.',
                    fields: {
                        name: 'Your Full Name',
                        email: 'Email Address',
                        subject: 'Subject',
                        message: 'Your Message',
                    },
                    buttonLabel: 'Send Message',
                    submissionMessage: 'Thank you for your message! We will be in touch soon.',
                },
                info: {
                    title: 'Contact Details',
                    description: 'You can also reach us directly via the following channels.',
                    email: {
                        title: 'Email Support',
                        value: 'info@personatat.com',
                    },
                    phone: {
                        title: 'Call Us (Toll-Free)',
                        value: '8 800 600 5635',
                    },
                    address: {
                        title: 'Corporate Office',
                        value: 'Naberezhnye Chelny, Russia',
                    },
                },
            },
        },
        footer: {
            description: 'Craft coffee solutions for homes, cafés, restaurants, and vending.',
            contactHeading: 'Stay Connected',
            companyHeading: 'Stay Connected',
            productsHeading: 'Stay Connected',
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
                        {id: 'cta-products', label: 'Перейти к продукции', path: '/products'},
                        {id: 'cta-contact', label: 'Связаться с нами', path: '/contact'},
                    ],
                },
                productShowcase: {
                    title: 'Our Products',
                    categories: [
                        {
                            id: 'instant-sticks',
                            title: 'Instant & Stick Products',
                            details: '3-in-1 coffee mixes, instant tea, and hot chocolate',
                        },
                        {
                            id: 'flavored-ground',
                            title: 'Flavored Ground Coffee',
                            details: 'Ground coffee with added flavors for a rich taste',
                        },
                        {
                            id: 'classic-ground',
                            title: 'Classic Ground Coffee',
                            details: 'Traditional ground coffee for everyday enjoyment',
                        },
                        {
                            id: 'flavored-beans',
                            title: 'Flavored Coffee Beans',
                            details: 'Whole beans with added flavors for a premium aroma',
                        },
                        {
                            id: 'classic-beans',
                            title: 'Classic Coffee Beans',
                            details: 'High-quality traditional whole beans',
                        },
                        {
                            id: 'coffee-capsules',
                            title: 'Coffee Capsules',
                            details: 'Classic or flavored capsules with varying intensities',
                        },
                    ],
                    ctaLabel: 'View All Products',
                },
                brandHighlight: {
                    about: 'О БРЕНДЕ',
                    titleTop: 'Почему выбирают нас?',
                    titleBottom: 'Почему выбирают нас?',
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
                        {id: 'final-products', label: 'Посмотреть продукцию', path: '/products'},
                        {id: 'final-contact', label: 'Связаться с нами', path: '/contact'},
                        {id: 'final-about', label: 'О компании', path: '/about'},
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
                hero: {
                    title: 'Начните разговор с нами',
                    subtitle: 'Обратитесь к нашей команде по вопросам заказа, поддержки или партнерства.',
                    ctaLabel: 'Узнать о компании',
                },
                form: {
                    title: 'Отправьте нам сообщение',
                    description: 'Наша команда обычно отвечает в течение 24 рабочих часов.',
                    fields: {
                        name: 'Ваше полное имя',
                        email: 'Адрес электронной почты',
                        subject: 'Тема',
                        message: 'Ваше сообщение',
                    },
                    buttonLabel: 'Отправить сообщение',
                    submissionMessage: 'Спасибо за Ваше сообщение! Мы скоро свяжемся с Вами.',
                },
                info: {
                    title: 'Контактные данные',
                    description: 'Вы также можете связаться с нами напрямую по следующим каналам.',
                    email: {
                        title: 'Техническая поддержка',
                        value: 'info@personatat.com',
                    },
                    phone: {
                        title: 'Позвоните нам (Бесплатно)',
                        value: '8 800 600 5635',
                    },
                    address: {
                        title: 'Главный офис',
                        value: 'г. Набережные Челны, Россия',
                    },
                },
            },
        },
        footer: {
            description: 'Решения для кофе дома, в кафе, ресторанах и вендинге.',
            contactHeading: 'Будем на связи',
            companyHeading:  'Будем на связи',
            productsHeading: 'Будем на связи',
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
                        {id: 'cta-products', label: 'Продукцияне карау', path: '/products'},
                        {id: 'cta-contact', label: 'Без белән элемтә', path: '/contact'},
                    ],
                },
                productShowcase: {
                    title: 'Our Products',
                    categories: [
                        {
                            id: 'instant-sticks',
                            title: 'Instant & Stick Products',
                            details: '3-in-1 coffee mixes, instant tea, and hot chocolate',
                        },
                        {
                            id: 'flavored-ground',
                            title: 'Flavored Ground Coffee',
                            details: 'Ground coffee with added flavors for a rich taste',
                        },
                        {
                            id: 'classic-ground',
                            title: 'Classic Ground Coffee',
                            details: 'Traditional ground coffee for everyday enjoyment',
                        },
                        {
                            id: 'flavored-beans',
                            title: 'Flavored Coffee Beans',
                            details: 'Whole beans with added flavors for a premium aroma',
                        },
                        {
                            id: 'classic-beans',
                            title: 'Classic Coffee Beans',
                            details: 'High-quality traditional whole beans',
                        },
                        {
                            id: 'coffee-capsules',
                            title: 'Coffee Capsules',
                            details: 'Classic or flavored capsules with varying intensities',
                        },
                    ],
                    ctaLabel: 'View All Products',
                },
                brandHighlight: {
                    about: 'О БРЕНДЕ',
                    titleTop: 'Нигә безне сайлыйлар?',
                    titleBottom: 'Нигә безне сайлыйлар?',
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
                        {id: 'final-products', label: 'Продукцияне карау', path: '/products'},
                        {id: 'final-contact', label: 'Бәйләнешкә чыгу', path: '/contact'},
                        {id: 'final-about', label: 'Компания турында', path: '/about'},
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
                hero: {
                    title: 'Әңгәмә башларга вакыт',
                    subtitle: 'Заказлар, ярдәм яки хезмәттәшлек сораулары буенча безнең командага мөрәжәгать итегез.',
                    ctaLabel: 'Компания турында белү',
                },
                form: {
                    title: 'Безгә хәбәр җибәрегез',
                    description: 'Безнең команда гадәттә 24 эш сәгате эчендә җавап бирә.',
                    fields: {
                        name: 'Сезнең тулы исемегез',
                        email: 'Электрон почта адресы',
                        subject: 'Тема',
                        message: 'Сезнең хәбәр',
                    },
                    buttonLabel: 'Хәбәрне җибәрергә',
                    submissionMessage: 'Хәбәрегез өчен рәхмәт! Без сезнең белән тиздән элемтәгә керәбез.',
                },
                info: {
                    title: 'Бәйләнеш мәгълүматлары',
                    description: 'Сез безнең белән түбәндәге каналлар аша да элемтәгә керә аласыз.',
                    email: {
                        title: 'Электрон почта ярдәме',
                        value: 'info@personatat.com',
                    },
                    phone: {
                        title: 'Безгә шалтыратыгыз (бушлай)',
                        value: '8 800 600 5635',
                    },
                    address: {
                        title: 'Баш офис',
                        value: 'Россия, Набережные Челны',
                    },
                },
            },
        },
        footer: {
            description: 'Өй, кафе, ресторан һәм вендинг өчен кофе чишелешләре.',
            contactHeading: 'Бәйләнештә калыйк',
            companyHeading: 'Бәйләнештә калыйк',
            productsHeading: 'Бәйләнештә калыйк',
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