import {ProductCategory} from '../types/products';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: 'beans',
        slug: 'beans',
        title: {
            en: 'Coffee Beans',
            ru: 'Кофейные зерна',
            tt: 'Кофе бөртекләре',
        },
        details: {
            en: 'Premium roasted beans',
            ru: 'Премиальные обжаренные зерна',
            tt: 'Премиум кыздырылган бөртекләр',
        },
    },
    {
        id: 'sticks',
        slug: 'sticks',
        title: {
            en: 'Coffee Sticks',
            ru: 'Кофейные стики',
            tt: 'Кофе стиклары',
        },
        details: {
            en: 'Convenient ready-mix instant sticks',
            ru: 'Удобные растворимые стики',
            tt: 'Уңайлы тиз эри торган стиклар',
        },
    },
];