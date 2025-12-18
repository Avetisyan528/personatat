import {ProductCategory} from '../types/products';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: 'beans',
        slug: 'beans',
        title: 'Coffee Beans',
        /*   {
           en: 'Coffee Beans',
           ru: 'Кофейные зерна',
           tt: 'Սուրճի հատիկներ',
       },*/
        details: 'Premium roasted beans',
        /*      {
              en: 'Premium roasted beans',
              ru: 'Премиальные обжаренные зерна',
              tt: 'Բարձրակարգ վառված հատիկներ',
          },*/
    },
    {
        id: 'sticks',
        slug: 'sticks',
        title: 'Coffee Sticks',
        /*     {
             en: 'Coffee Sticks',
             ru: 'Кофейные стики',
             tt: 'Սուրճի փայտիկներ',
         },*/
        details: 'Convenient ready-mix instant sticks',
        /*{
            en: 'Convenient ready-mix instant sticks',
            ru: 'Удобные растворимые стики',
            tt: 'Հարմար լուծվող փայտիկներ',
        },*/
    },
];
