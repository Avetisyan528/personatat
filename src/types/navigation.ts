import { NavKey, FooterContactKey, FooterCompanyKey, FooterProductKey } from './index';

export const NAV_LINKS: Array<{ key: NavKey; path: string }> = [
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
    { key: 'products', path: '/products' },
];

export const FOOTER_LINKS = {
    contact: [
        { key: 'email' as FooterContactKey, path: 'mailto:hello@company.com' },
        { key: 'phone' as FooterContactKey, path: 'tel:+123456789' },
        { key: 'address' as FooterContactKey, path: '/contact#address' },
    ],
    company: [
        { key: 'about' as FooterCompanyKey, path: '/about' },
        { key: 'contacts' as FooterCompanyKey, path: '/about' },
        { key: 'terms' as FooterCompanyKey, path: '/about' },
        { key: 'privacy' as FooterCompanyKey, path: '/about' },
    ],
    products: [
        { key: 'beans' as FooterProductKey, path: '/products/beans' },
        { key: 'sticks' as FooterProductKey, path: '/products/sticks' },
        { key: 'assorted' as FooterProductKey, path: '/products/assorted' },
    ],
};
