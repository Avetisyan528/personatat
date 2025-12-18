import {
    AboutUsPageTranslations,
    BrandHighlightTranslations, ContactPageTranslations, FinalCtaTranslations, FooterTranslations,
    HeaderTranslations,
    HeroSectionTranslations,
    ProductShowcaseTranslations, ProductsPageTranslations
} from "./translations";

export type Language = 'en' | 'ru' | 'tt';
export const availableLanguages: Language[] = ['en', 'ru', 'tt'];

export type MultiLangText = {
    en: string;
    ru: string;
    tt: string;
};

export type Translations = {
    header: HeaderTranslations;
    pages: {
        home: {
            hero: HeroSectionTranslations;
            productShowcase: ProductShowcaseTranslations;
            brandHighlight: BrandHighlightTranslations;
            finalCta: FinalCtaTranslations;
        };
        about: AboutUsPageTranslations;
        products: ProductsPageTranslations;
        contact: ContactPageTranslations;
    };
    footer: FooterTranslations;
};

export type NavKey = 'about' | 'contact' | 'products';
export type FooterContactKey = 'email' | 'phone' | 'address';
export type FooterCompanyKey = 'about' | 'contacts' | 'terms' | 'privacy';
export type FooterProductKey = 'beans' | 'sticks' | 'assorted';

