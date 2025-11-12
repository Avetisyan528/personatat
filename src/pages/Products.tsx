import * as React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Products: React.FC = () => {
    const { translations } = useLanguage();
    const { title, description } = translations.pages.products;

    return (
        <div className="page">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Products;

