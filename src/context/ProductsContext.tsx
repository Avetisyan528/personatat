import * as React from 'react';
import { Product } from '../types/products';
import { PRODUCTS } from '../data/products';

export type ProductContextValue = {
    products: Product[];
    getProductById: (id: string) => Product | undefined;
    getProductBySlug: (slug: string) => Product | undefined;
};

const ProductContext = React.createContext<ProductContextValue | undefined>(undefined);

type ProductProviderProps = {
    children: React.ReactNode;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const getProductById = React.useCallback(
        (id: string) => PRODUCTS.find((p) => p.id === id),
        []
    );

    const getProductBySlug = React.useCallback(
        (slug: string) => PRODUCTS.find((p) => p.slug === slug),
        []
    );

    const value = React.useMemo(
        () => ({
            products: PRODUCTS,
            getProductById,
            getProductBySlug,
        }),
        [getProductById, getProductBySlug]
    );

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProducts = (): ProductContextValue => {
    const context = React.useContext(ProductContext);

    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }

    return context;
};
