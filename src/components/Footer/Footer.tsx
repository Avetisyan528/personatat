import * as React from 'react';
import { Box, Divider, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage, NAV_LINKS } from '../../context/LanguageContext';

const Footer: React.FC = () => {
    const { translations } = useLanguage();
    const footer = translations.footer;

    return (
        <Box component="footer" className="footer">
            <Box className="footer__content">
                <Box className="footer__brand">
                    <Typography variant="h6" component="h2">
                        PersonaTat
                    </Typography>
                    <Typography variant="body2" className="footer__description">
                        {footer.description}
                    </Typography>
                    <Box className="footer__nav">
                        {NAV_LINKS.map(({ key, path }) => (
                            <Button
                                key={key}
                                component={RouterLink}
                                to={path}
                                color="inherit"
                                variant="text"
                                size="small"
                            >
                                {translations.header.navLabels[key]}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box className="footer__contact">
                    <Typography variant="subtitle1" className="footer__contact-heading">
                        {footer.contactHeading}
                    </Typography>
                    <ul>
                        <li>
                            <strong>{footer.phoneLabel}:</strong> {footer.phoneValue}
                        </li>
                        <li>
                            <strong>{footer.emailLabel}:</strong> {footer.emailValue}
                        </li>
                        <li>
                            <strong>{footer.locationLabel}:</strong> {footer.locationValue}
                        </li>
                    </ul>
                    <Typography variant="caption" className="footer__note">
                        {footer.hotlineNote}
                    </Typography>
                </Box>
            </Box>

            <Divider className="footer__divider" />

            <Typography variant="caption" className="footer__rights">
                {footer.rights}
            </Typography>
        </Box>
    );
};

export default Footer;

