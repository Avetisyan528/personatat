import { MultiLangText } from './index';

export type ProductCategory = {
    id: string;
    title: MultiLangText;
    details: MultiLangText;
    slug: string;
};

export type Product = {
    id: string;
    name: MultiLangText;
    description: MultiLangText;
    typeId: string;
    categoryId: string;
    imageKey: string;
    iconKey: string;
    slug: string;
};
