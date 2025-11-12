import * as React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactUs: React.FC = () => {
    const { translations } = useLanguage();
    const { title, description } = translations.pages.contact;

    return (
        <div className="page">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ContactUs;

