import * as React from 'react';
import { ProductCategory } from '../types/products';
import { PRODUCT_CATEGORIES } from '../data/categories';

export type CategoryContextValue = {
    categories: ProductCategory[];
    getCategoryById: (id: string) => ProductCategory | undefined;
};

const CategoryContext = React.createContext<CategoryContextValue | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getCategoryById = React.useCallback(
        (id: string) => PRODUCT_CATEGORIES.find((c) => c.id === id),
        []
    );

    const value = React.useMemo(
        () => ({
            categories: PRODUCT_CATEGORIES,
            getCategoryById,
        }),
        [getCategoryById]
    );

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export const useCategories = () => {
    const context = React.useContext(CategoryContext);

    if (!context) {
        throw new Error('useCategories must be used within a CategoryProvider');
    }

    return context;
};
