import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <Box className="app-shell">
            <Header />
            <Box component="main" className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
