import * as React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useLanguage, FOOTER_LINKS} from '../../context/LanguageContext';
import logo from "../../static/LogoTransparent.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useTheme} from '@mui/material/styles';

const socialLinks = [
    {icon: InstagramIcon, url: "https://instagram.com/personatat"},
    {icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=61583886507459"},
    {icon: YouTubeIcon, url: "https://youtube.com/personatat"},
];

const Footer: React.FC = () => {
    const {translations} = useLanguage();
    const footer = translations.footer;
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                borderTop: (theme) => `2px solid ${theme.palette.secondary.main}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                px: '9%',
                py: 6,
                backgroundColor: 'black',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, 
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                    flexWrap: 'wrap',
                    gap: 4,
                }}
            >
                {/* 1. Logo and Social Links Section - Centered on Mobile (xs) */}
                <Box 
                    sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 200px' },
                        textAlign: { xs: 'center', md: 'left' } // Center text/logo on mobile
                    }}
                >
                    <Box
                        component={RouterLink}
                        to="/"
                        // Display logo box as block to allow centering via parent's textAlign: center
                        sx={{ display: 'inline-block' }} 
                    >
                        <Box component="img" src={logo} alt={translations.header.title} sx={{maxHeight: 40}}/>
                    </Box>
                    <Typography variant="body1" sx={{
                        color: theme.palette.primary.light, my: 2
                    }}>
                        {footer.description}
                    </Typography>

                    {/* Social links need special handling for centering a flex container */}
                    <Box 
                        sx={{
                            display: 'flex', 
                            gap: 1, 
                            justifyContent: { xs: 'center', md: 'flex-start' } // Center icons on mobile
                        }}
                    >
                        {socialLinks.map(({icon: Icon, url}, index) => (
                            <Box
                                key={index}
                                component="a" 
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.secondary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'black',
                                    '&:hover': {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                <Icon/>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* 2. Products Section - Centered on Mobile (xs) */}
                <Box 
                    sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 150px' },
                        textAlign: { xs: 'center', md: 'left' } 
                    }}
                >
                    <Typography variant="h6" sx={{
                        color: theme.palette.secondary.main,
                        mt: { xs: 2, md: 0 } 
                    }}>{footer.productsHeading}</Typography>
                    {FOOTER_LINKS.products.map(link => (
                        <Typography
                            key={link.key}
                            component={RouterLink} 
                            to={link.path}
                            sx={{
                                display: 'block',
                                textDecoration: 'none',
                                color: theme.palette.primary.light,
                                my: 0.5,
                                '&:hover': {color: theme.palette.secondary.main,},
                            }}
                        >
                            {footer.productLabels[link.key]}
                        </Typography>
                    ))}
                </Box>

                {/* 3. Company Section - Centered on Mobile (xs) */}
                <Box 
                    sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 150px' },
                        textAlign: { xs: 'center', md: 'left' } 
                    }}
                >
                    <Typography variant="h6" sx={{
                        color: theme.palette.secondary.main,
                        mt: { xs: 2, md: 0 } 
                    }}>{footer.companyHeading}</Typography>
                    {FOOTER_LINKS.company.map(link => (
                        <Typography
                            key={link.key}
                            component={RouterLink} 
                            to={link.path}
                            sx={{
                                color: theme.palette.primary.light,
                                display: 'block',
                                textDecoration: 'none',
                                my: 0.5,
                                '&:hover': {color: theme.palette.secondary.main,},
                            }}
                        >
                            {footer.companyLabels[link.key]}
                        </Typography>
                    ))}
                </Box>

                {/* 4. Contact Section - Centered on Mobile (xs) */}
                <Box 
                    sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 150px' },
                        textAlign: { xs: 'center', md: 'left' } 
                    }}
                >
                    <Typography variant="h6" sx={{
                        color: theme.palette.secondary.main,
                        mt: { xs: 2, md: 0 } 
                    }}>{footer.contactHeading}</Typography>
                    {FOOTER_LINKS.contact.map(link => (
                        <Typography
                            key={link.key}
                            component={RouterLink}
                            to={link.path}
                            sx={{
                                display: 'block',
                                color: theme.palette.primary.light,
                                textDecoration: 'none',
                                my: 0.5,
                                '&:hover': {color: theme.palette.secondary.main,},
                            }}
                        >
                            {footer.contactLabels[link.key]}
                        </Typography>
                    ))}
                </Box>
            </Box>

        <Box sx={{width: '100%', mt: 4}}>
            <Divider
                sx={(theme) => ({
                    borderColor: theme.palette.secondary.main,
                    mb: 2,
                })}
            />
            <Typography
                variant="caption"
                sx={{
                    display: 'block',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.6)',
                    mb: 1,
                }}
            >
                {footer.rights}
            </Typography>
        </Box>
    </Box>
    );
};

export default Footer;