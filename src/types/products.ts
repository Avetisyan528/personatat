import { MultiLangText } from './index';

export type ProductCategory = {
    id: string;
    title: string;//MultiLangText;
    details: string;//MultiLangText;
    slug: string;
};

export type Product = {
    id: string;
    name: string;//MultiLangText;
    description: string;//MultiLangText;
    typeId: string;
    categoryId: string;
    imageKey: string;
    iconKey: string;
    slug: string;
};
