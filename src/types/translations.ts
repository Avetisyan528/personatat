import { NavKey, FooterContactKey, FooterCompanyKey, FooterProductKey } from './index';
import { Product, ProductCategory } from './products';

export type HeaderTranslations = {
    title: string;
    navLabels: Record<NavKey, string>;
    languageToggleLabel: string;
};

export type HeroCta = { id: string; label: string; path: string };
export type HeroSectionTranslations = {
    title: string;
    subtitle: string;
    description: string;
    ctas: HeroCta[];
};

export type ProductShowcaseTranslations = {
    title: string;
    categories: ProductCategory[];
    ctaLabel: string;
};

export type BrandReason = { id: string; title: string; description: string };
export type BrandHighlightTranslations = {
    about: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    bullets: BrandReason[];
    ctaLabel: string;
};

export type FinalCtaButton = { id: string; label: string; path: string };
export type FinalCtaTranslations = {
    title: string;
    description: string;
    subtitle: string;
    details: string[];
    buttons: FinalCtaButton[];
    note: string;
};

export type FooterTranslations = {
    description: string;
    contactHeading: string;
    contactLabels: Record<FooterContactKey, string>;
    companyHeading: string;
    companyLabels: Record<FooterCompanyKey, string>;
    productsHeading: string;
    productLabels: Record<FooterProductKey, string>;
    rights: string;
};

export type ContactInfoItem = { title: string; value: string };
export type ContactFormFields = { name: string; email: string; subject: string; message: string };
export type ContactExtraCta = {
    productsButton: { label: string; path: string };
    callButton: { label: string; path: string };
};
export type ContactPageTranslations = {
    hero: { title: string; subtitle: string; ctaLabel: string };
    form: { title: string; description: string; fields: ContactFormFields; buttonLabel: string; submissionMessage: string };
    info: { title: string; description: string; email: ContactInfoItem; phone: ContactInfoItem; address: ContactInfoItem };
    extraCta: ContactExtraCta;
};

export type PillarOrValueItem = { icon: string; title: string; description: string };
export type FullPillarItem = { icon: string; title: string; paragraph1: string; paragraph2: string };
export type AboutUsPageTranslations = {
    hero: { titlePart1: string; titlePart2Highlight: string; subtitle: string; description: string };
    imageCallout: { title: string; description: string };
    storyAndFacts: {
        storyTitle: string;
        paragraph1: string;
        paragraph2: string;
        quote: string;
        fact1: { value: string; label: string; subLabel: string };
        fact2: { value: string; label: string; subLabel: string };
    };
    missionAndValues: {
        sectionTitle: string;
        sectionSubtitle: string;
        mission: { icon: string; title: string; paragraph1: string; paragraph2: string };
        valuesTitle: string;
        values: PillarOrValueItem[];
    };
    threePillars: { sectionTitle: string; sectionSubtitle: string; pillars: FullPillarItem[] };
};

export type ProductsPageTranslations = { title: string; description: string; products: Product[] };


