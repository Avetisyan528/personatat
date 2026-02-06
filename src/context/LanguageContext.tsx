import * as React from 'react';
import {Language, Translations, availableLanguages} from '../types';
import {TRANSLATIONS} from '../data/translations';

export type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    translations: Translations;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

type LanguageProviderProps = {
    children: React.ReactNode;
    defaultLanguage?: Language;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
                                                                      children,
                                                                      defaultLanguage = 'ru',
                                                                  }) => {
    const [language, setLanguage] = React.useState<Language>(defaultLanguage);

    const toggleLanguage = React.useCallback(() => {
        setLanguage((prev) => {
            const currentIndex = availableLanguages.indexOf(prev);
            const nextIndex = (currentIndex + 1) % availableLanguages.length;
            return availableLanguages[nextIndex];
        });
    }, []);

    const value = React.useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage,
            translations: TRANSLATIONS[language],
        }),
        [language, toggleLanguage]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
    const context = React.useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};
