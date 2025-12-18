import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import theme from './theme';
import {LanguageProvider} from './context/LanguageContext';
import {BrowserRouter} from 'react-router-dom';
import {ProductProvider} from "./context/ProductsContext";
import {CategoryProvider} from "./context/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LanguageProvider>
                <CategoryProvider>
                    <ProductProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline/>
                            <App/>
                        </ThemeProvider>
                    </ProductProvider>
                </CategoryProvider>
            </LanguageProvider>
        </BrowserRouter>
    </React.StrictMode>
);
