import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

const ContactUs: React.FC = () => {
    const { translations } = useLanguage();
    const { title, description } = translations.pages.contact;

    return (
        <Box className="page">
            <Typography variant="h3" component="h1">
                {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Box>
    );
};

export default ContactUs;
