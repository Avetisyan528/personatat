import { Language, Translations } from '../types';

export const TRANSLATIONS: Record<Language, Translations> = {
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
                        /*{
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
                        },*/
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
                hero: {
                    titlePart1: 'Crafted with Passion,',
                    titlePart2Highlight: 'Rooted in Tradition',
                    subtitle: 'At Persona Tatarstan, we blend centuries-old coffee traditions with modern artisanal techniques.',
                    description: "Our journey began with a simple mission: to bring the world's finest coffee to discerning enthusiasts while honoring the rich cultural legacy of Tatarstan.",
                },

                imageCallout: {
                    title: 'Master Roasting Process',
                    description: 'Every batch perfected by expert craftsmen',
                },

                storyAndFacts: {
                    storyTitle: 'Our Journey',
                    paragraph1: "Founded in the heart of Tatarstan, our brand represents a commitment to excellence that spans continents. We source the finest beans from renowned coffee-growing regions worldwide, bringing them back to our roastery where tradition meets innovation.",
                    paragraph2: "Every batch is carefully roasted to perfection, preserving the unique flavor profiles that make each origin special. From the first crack to the final cooling, our master roasters ensure that every bean embodies the premium quality Persona Tatarstan is known for.",
                    quote: "We don't just roast coffee—we craft experiences that connect people, cultures, and moments of joy in every cup.",
                    fact1: {
                        value: '6+',
                        label: 'Years Excellence',
                        subLabel: 'Since 2019',
                    },
                    fact2: {
                        value: '50+',
                        label: 'Coffee Origins',
                        subLabel: 'Worldwide',
                    },
                },

                missionAndValues: {
                    sectionTitle: 'Our Mission & Values',
                    sectionSubtitle: 'Guided by principles that define everything we do, from sourcing to serving',

                    mission: {
                        icon: 'crisisAlert',
                        title: 'Our Mission',
                        paragraph1: 'To deliver exceptional coffee experiences that honor tradition while embracing innovation. We aim to connect coffee lovers with the world\'s finest beans, roasted to perfection in the heart of Tatarstan.',
                        paragraph2: 'Every cup we create represents our dedication to quality, sustainability, and the art of coffee making.',
                    },

                    valuesTitle: 'Our Values',
                    values: [
                        {
                            icon: 'checkCircle',
                            title: 'Quality First',
                            description: 'Uncompromising standards in every step',
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Sustainability',
                            description: 'Ethical sourcing and environmental care',
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Innovation',
                            description: 'Blending tradition with modern techniques',
                        },
                    ],
                },

                threePillars: {
                    sectionTitle: 'Our Three Pillars',
                    sectionSubtitle: 'The foundation of excellence that defines every cup we create',
                    pillars: [
                        {
                            icon: 'whatshot',
                            title: 'Artisanal Roasting',
                            paragraph1: 'Master roasters craft each batch with precision, bringing out the unique characteristics of every bean origin. Our time-honored techniques ensure consistent excellence.',
                            paragraph2: 'We use state-of-the-art equipment combined with traditional methods passed down through generations.',
                        },
                        {
                            icon: 'language',
                            title: 'Global Sourcing',
                            paragraph1: "We partner with the world's finest coffee farms, ensuring sustainable and ethical sourcing of premium beans. Quality from farm to cup.",
                            paragraph2: 'Direct relationships with farmers guarantee fair pricing and exceptional bean quality year after year.',
                        },
                        {
                            icon: 'accountBalance',
                            title: 'Tatarstan Heritage',
                            paragraph1: "Our roots in Tatarstan inspire us to honor tradition while embracing innovation in every cup we create. A legacy of excellence.",
                            paragraph2: "We're proud to represent our region's commitment to quality and craftsmanship on the global stage.",
                        },
                    ],
                },
            },
            products: {
                title: 'Products',
                description: 'Product details are coming soon.',
                products: [
                    /*{
                        id: '3in1-strong',
                        type: { id: '3in1', label: '3 in 1'},
                        name: '3 in 1 Strong',
                        description: 'coffee 3 in 1 strong',
                        imageKey: '3in1strong',
                        category: {
                            id: 'instant-sticks',
                            title: 'Instant & Stick Products',
                            details: '3-in-1 coffee mixes, instant tea, and hot chocolate',
                        },
                        slug: 'persona-3in1-strong'
                    },*/
                ],
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
                extraCta: {
                    productsButton: {
                        label: 'Products',
                        path: '/products',
                    },
                    callButton: {
                        label: 'Call Us',
                        path: 'tel:88006005635',
                    },
                },
            },
        },
        footer: {
            description: 'Craft coffee solutions for homes, cafés, restaurants, and vending.',

            contactHeading: 'Stay Connected',
            contactLabels: {
                email: 'Email Us',
                phone: 'Call Us',
                address: 'Our Address',
            },

            companyHeading: 'Company',
            companyLabels: {
                about: 'About the Brand',
                contacts: 'Contacts',
                terms: 'Terms of Use',
                privacy: 'Privacy Policy',
            },

            productsHeading: 'Products',
            productLabels: {
                beans: 'Coffee Beans',
                sticks: 'Coffee Sticks',
                assorted: 'Assorted Packs',
            },

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
                        /*{
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
                        },*/
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
                hero: {
                    titlePart1: 'Создано с любовью,',
                    titlePart2Highlight: 'С корнями в Традиции',
                    subtitle: 'В Persona Tatarstan мы сочетаем многовековые кофейные традиции с современными ремесленными техниками.',
                    description: 'Наш путь начался с простой миссии: донести лучший в мире кофе до взыскательных ценителей, почитая при этом богатое культурное наследие Татарстана.'
                },
                imageCallout: {
                    title: 'Процесс Мастерской Обжарки',
                    description: 'Каждая партия доведена до совершенства опытными мастерами'
                },
                storyAndFacts: {
                    storyTitle: 'Наша История',
                    paragraph1: 'Основанный в самом сердце Татарстана, наш бренд олицетворяет приверженность к совершенству, охватывающую континенты. Мы закупаем лучшие зерна из известных регионов мира, выращивающих кофе, привозя их обратно в нашу обжарочную, где традиции встречаются с инновациями.',
                    paragraph2: 'Каждая партия тщательно обжаривается до совершенства, сохраняя уникальные вкусовые профили, которые делают каждый сорт особенным. От первого потрескивания до финального охлаждения наши мастера-обжарщики гарантируют, что каждое зерно воплощает премиальное качество, которым славится Persona Tatarstan.',
                    quote: 'Мы не просто обжариваем кофе — мы создаем впечатления, которые объединяют людей, культуры и моменты радости в каждой чашке.',
                    fact1: {
                        value: '6+',
                        label: 'Лет Совершенства',
                        subLabel: 'С 2019 года'
                    },
                    fact2: {
                        value: '50+',
                        label: 'Происхождений Кофе',
                        subLabel: 'По всему миру'
                    }
                },
                missionAndValues: {
                    sectionTitle: 'Наша Миссия и Ценности',
                    sectionSubtitle: 'Руководствуемся принципами, которые определяют всё, что мы делаем, от закупки до подачи',
                    mission: {
                        icon: 'crisisAlert',
                        title: 'Наша Миссия',
                        paragraph1: 'Предоставлять исключительный кофейный опыт, который чтит традиции, но при этом приветствует инновации. Наша цель — соединить любителей кофе с лучшими мировыми зернами, обжаренными до совершенства в сердце Татарстана.',
                        paragraph2: 'Каждая чашка, которую мы создаем, отражает нашу приверженность качеству, устойчивости и искусству приготовления кофе.'
                    },
                    valuesTitle: 'Наши Ценности',
                    values: [
                        {
                            icon: 'checkCircle',
                            title: 'Качество Прежде Всего',
                            description: 'Бескомпромиссные стандарты на каждом этапе'
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Устойчивость',
                            description: 'Этичный поиск поставщиков и забота об окружающей среде'
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Инновации',
                            description: 'Сочетание традиций с современными техниками'
                        }
                    ]
                },
                threePillars: {
                    sectionTitle: 'Три Наших Столпа',
                    sectionSubtitle: 'Основа превосходства, которая определяет каждую чашку, которую мы создаем',
                    pillars: [
                        {
                            icon: 'whatshot',
                            title: 'Ремесленная Обжарка',
                            paragraph1: 'Мастера-обжарщики точно готовят каждую партию, раскрывая уникальные характеристики каждого происхождения зерна. Наши проверенные временем методы обеспечивают неизменное превосходство.',
                            paragraph2: 'Мы используем современное оборудование в сочетании с традиционными методами, передаваемыми из поколения в поколение.'
                        },
                        {
                            icon: 'language',
                            title: 'Глобальный Сорсинг',
                            paragraph1: 'Мы сотрудничаем с лучшими кофейными фермами мира, обеспечивая устойчивый и этичный поиск поставщиков зерен премиум-класса. Качество от фермы до чашки.',
                            paragraph2: 'Прямые отношения с фермерами гарантируют справедливое ценообразование и исключительное качество зерна из года в год.'
                        },
                        {
                            icon: 'accountBalance',
                            title: 'Наследие Татарстана',
                            paragraph1: 'Наши корни в Татарстане вдохновляют нас чтить традиции, приветствуя инновации в каждой чашке, которую мы создаем. Наследие превосходства.',
                            paragraph2: 'Мы гордимся тем, что представляем приверженность нашего региона качеству и мастерству на мировой арене.'
                        }
                    ]
                }
            },
            products: {
                title: 'Продукты',
                description: 'Сведения о продуктах скоро появятся.',
                products: [],
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

                extraCta: {
                    productsButton: {
                        label: 'Продукция',
                        path: '/products',
                    },
                    callButton: {
                        label: 'Позвонить Нам',
                        path: 'tel:88006005635',
                    },
                },
            },
        },
        footer: {
            description: 'Крафтовые решения для кофе для дома, кафе, ресторанов и вендинга.',

            contactHeading: 'Оставайтесь на связи',
            contactLabels: {
                email: 'Напишите нам',
                phone: 'Позвоните нам',
                address: 'Наш адрес',
            },

            companyHeading: 'Компания',
            companyLabels: {
                about: 'О бренде',
                contacts: 'Контакты',
                terms: 'Условия использования',
                privacy: 'Политика конфиденциальности',
            },

            productsHeading: 'Продукты',
            productLabels: {
                beans: 'Кофейные зерна',
                sticks: 'Кофейные стики',
                assorted: 'Ассорти наборы',
            },

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
                        /*{
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
                        },*/
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
                hero: {
                    titlePart1: 'Дәрт белән Ясалган,',
                    titlePart2Highlight: 'Традициягә Таянган',
                    subtitle: "Persona Tatarstan'да без гасырлык кофе традицияләрен заманча осталык техникалары белән кушабыз.",
                    description: "Безнең юлыбыз гади миссиядән башланды: Татарстанның бай мәдәни мирасын хөрмәт итеп, дөньяның иң яхшы кофесын таләпчән кофе яратучыларга җиткерү."
                },
                imageCallout: {
                    title: 'Оста Обжарка Процессы',
                    description: 'Һәр партия оста һөнәрчеләр тарафыннан камилләштерелә'
                },
                storyAndFacts: {
                    storyTitle: 'Безнең Юлыбыз',
                    paragraph1: 'Татарстанның үзәгендә оешкан безнең бренд континентларны колачлаган камиллеккә омтылуны чагылдыра. Без дөньяның танылган кофе үстерү төбәкләреннән иң яхшы бөртекләрне алып кайтабыз, аларны традиция инновацияләр белән очрашкан обжарка йортыбызга китерәбез.',
                    paragraph2: 'Һәр партия камиллеккә ирешкәнче җентекләп обжаркалана, һәр чыгышны үзенчәлекле иткән уникаль тәм профильләре саклана. Беренче ярылудан алып соңгы суытуга кадәр, безнең мастер-обжаркачылар һәр бөртекнең Persona Tatarstan танылган премиум сыйфатын гәүдәләндерүен тәэмин итә.',
                    quote: 'Без бары тик кофе гына обжаркаламыйбыз — без һәр чынаякта кешеләрне, мәдәниятләрне һәм шатлык мизгелләрен бәйләүче тәҗрибәләр тудырабыз.',
                    fact1: {
                        value: '6+',
                        label: 'Ел Камиллек',
                        subLabel: '2019 елдан бирле'
                    },
                    fact2: {
                        value: '50+',
                        label: 'Кофе Чыгышы',
                        subLabel: 'Бөтен дөнья буенча'
                    }
                },
                missionAndValues: {
                    sectionTitle: 'Безнең Миссия һәм Ценностьлар',
                    sectionSubtitle: 'Соурсингтан алып сервировкага кадәр без эшләгән һәрнәрсәне билгеләүче принциплар белән идарә ителә',
                    mission: {
                        icon: 'crisisAlert',
                        title: 'Безнең Миссия',
                        paragraph1: 'Традицияләрне хөрмәт итүче, әмма инновацияләрне кабул итүче үзенчәлекле кофе тәҗрибәләрен китерү. Безнең максат — кофе яратучыларны Татарстан йөрәгендә камиллеккә обжаркаланган дөньяның иң яхшы бөртекләре белән бәйләү.',
                        paragraph2: 'Без ясаган һәр чынаяк сыйфатка, тотрыклылыкка һәм кофе ясау сәнгатенә тугрылыгыбызны чагылдыра.'
                    },
                    valuesTitle: 'Безнең Ценностьлар',
                    values: [
                        {
                            icon: 'checkCircle',
                            title: 'Сыйфат Беренче',
                            description: 'Һәр адымда компромиссыз стандартлар'
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Тотрыклылык',
                            description: 'Этик соурсинг һәм әйләнә-тирә мохиткә кайгырту'
                        },
                        {
                            icon: 'checkCircle',
                            title: 'Инновация',
                            description: 'Традицияләрне заманча техникалар белән кушу'
                        }
                    ]
                },
                threePillars: {
                    sectionTitle: 'Безнең Өч Нигез',
                    sectionSubtitle: 'Без ясаган һәр чынаякны билгеләүче камиллек нигезе',
                    pillars: [
                        {
                            icon: 'whatshot',
                            title: 'Һөнәрчелек Обжаркасы',
                            paragraph1: 'Мастер-обжаркачылар һәр партияне төгәллек белән әзерли, һәр бөртек чыгышының үзенчәлекле сыйфатларын ача. Вакыт сынавын үткән техникаларыбыз даими камиллекне тәэмин итә.',
                            paragraph2: 'Без буыннар аша тапшырылган традицион методлар белән берлектә заманча җиһазлар кулланабыз.'
                        },
                        {
                            icon: 'language',
                            title: 'Глобаль Соурсинг',
                            paragraph1: 'Без дөньяның иң яхшы кофе фермалары белән хезмәттәшлек итәбез, премиум бөртекләрне тотрыклы һәм этик соурсинглауны тәэмин итәбез. Фермадан чынаякка кадәр сыйфат.',
                            paragraph2: 'Фермерлар белән туры элемтәләр ел саен гадел бәяләүне һәм гадәттән тыш бөртек сыйфатын гарантияли.'
                        },
                        {
                            icon: 'accountBalance',
                            title: 'Татарстан Мирасы',
                            paragraph1: 'Татарстандагы тамырларыбыз безне традицияләрне хөрмәт итәргә, шул ук вакытта без ясаган һәр чынаякта инновацияләрне кабул итәргә рухландыра. Камиллек мирасы.',
                            paragraph2: 'Без төбәгебезнең сыйфатка һәм һөнәрчелеккә тугрылыгын глобаль сәхнәдә күрсәтү белән горурланабыз.'
                        }
                    ]
                }
            },
            products: {
                title: 'Продукция',
                description: 'Продукция турында мәгълүмат әзерләнә.',
                products: [],
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

                extraCta: {
                    productsButton: {
                        label: 'Товарлар',
                        path: '/products',
                    },
                    callButton: {
                        label: 'Безгә шалтыратыгыз',
                        path: 'tel:88006005635',
                    },
                },
            },
        },
        footer: {
            description: 'Өйгә, кафе, рестораннар һәм вендинг өчен кофе чишелешләре.',

            contactHeading: 'Элемтәдә булыгыз',
            contactLabels: {
                email: 'Безгә язырга',
                phone: 'Безгә шалтыратыгыз',
                address: 'Безнең адрес',
            },

            companyHeading: 'Компания',
            companyLabels: {
                about: 'Без турында',
                contacts: 'Контактлар',
                terms: 'Куллану шартлары',
                privacy: 'Хосусыйлык сәясәте',
            },

            productsHeading: 'Продукция',
            productLabels: {
                beans: 'Кофе бөртекләре',
                sticks: 'Кофе стиктары',
                assorted: 'Катнаш пакетлар',
            },

            rights: '© PersonaTat. Бөтен хокуклар сакланган.',
        },
    },
};
