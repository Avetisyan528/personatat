import * as React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useLanguage} from '../../context/LanguageContext';
import logo from "../../static/LogoTransparent.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
    const {translations} = useLanguage();
    const footer = translations.footer;
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                px: '9%',
                py: 6,
                backgroundColor: 'black',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 4,
                }}
            >
                <Box sx={{flex: '1 1'}}>
                    <Box
                        component={RouterLink}
                        to="/"
                    >
                        <Box component="img" src={logo} alt={translations.header.title} sx={{maxHeight: 40}}/>
                    </Box>
                    <Typography variant="body1" sx={{my: 2}}>
                        Премиальный кофе для ценителей качества и вкуса
                    </Typography>

                    {/* Social Icons */}
                    <Box sx={{display: 'flex', gap: 1}}>
                        {[InstagramIcon, FacebookIcon, YouTubeIcon].map((Icon, index) => (
                            <Box
                                key={index}
                                component={RouterLink}
                                to="/"
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

                <Box sx={{flex: '1 1'}}>
                    <Typography variant="h6">{footer.productsHeading}</Typography>
                </Box>
                <Box sx={{flex: '1 1'}}>
                    <Typography variant="h6">{footer.companyHeading}</Typography>
                </Box>
                <Box sx={{flex: '1 1'}}>
                    <Typography variant="h6">{footer.contactHeading}</Typography>
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
