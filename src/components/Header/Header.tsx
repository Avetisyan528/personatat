import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    ToggleButtonGroup,
    ToggleButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage, NAV_LINKS, Language, availableLanguages } from '../../context/LanguageContext';
import logo from '../../static/LogoTransparent.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const UK_FLAG_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>`
);

const TATAR_FLAG_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3"><rect width="6" height="3" fill="#00923f"/><rect y="1" width="6" height="1" fill="#fff"/><rect y="1.2" width="6" height="0.6" fill="#d81e05"/><rect y="2" width="6" height="1" fill="#d81e05"/></svg>`
);

const FLAG_BASE_SX = {
    display: 'inline-block',
    width: 20,
    height: 14,
    borderRadius: '2px',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.35)',
};

const FLAG_STYLES: Record<Language, object> = {
    en: {
        backgroundImage: `url("data:image/svg+xml,${UK_FLAG_SVG}")`,
    },
    ru: {
        backgroundImage:
            'linear-gradient(to bottom, #ffffff 0%, #ffffff 33%, #0b52b5 33%, #0b52b5 66%, #d52b1e 66%, #d52b1e 100%)',
    },
    tt: {
        backgroundImage: `url("data:image/svg+xml,${TATAR_FLAG_SVG}")`,
    },
};

const LANGUAGE_LABELS: Record<Language, string> = {
    en: 'EN',
    ru: 'RU',
    tt: 'TT',
};

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { language, setLanguage, translations } = useLanguage();

    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    gap: { xs: 1, md: 0 },
                }}
            >
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        mr: { xs: 1, md: 4 },
                    }}
                >
                    <Box component="img" src={logo} alt={translations.header.title} sx={{ height: 40 }} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flexGrow: 1,
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        flexBasis: { xs: '100%', md: 'auto' },
                        order: { xs: 3, md: 2 },
                    }}
                >
                    {NAV_LINKS.map(({ key, path }) => {
                        const isProducts = key === 'products';
                        return (
                            <Button
                                key={key}
                                component={RouterLink}
                                to={path}
                                color={isProducts ? 'secondary' : 'inherit'}
                                variant={isProducts ? 'contained' : 'text'}
                                sx={{
                                    fontWeight: 600,
                                    borderRadius: 999,
                                    px: 2.5,
                                }}
                            >
                                {translations.header.navLabels[key]}
                            </Button>
                        );
                    })}
                </Box>

                <Tooltip title={translations.header.languageToggleLabel}>
                    <ToggleButtonGroup
                        exclusive
                        value={language}
                        onChange={(_, newValue: Language | null) => {
                            if (newValue) {
                                setLanguage(newValue);
                            }
                        }}
                        size="small"
                        sx={{
                            ml: { xs: 0, md: 2 },
                            order: { xs: 2, md: 3 },
                            borderRadius: '999px',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            '.MuiToggleButtonGroup-middleButton': {
                                borderLeft: { xs: '1px solid rgba(255,255,255,0.15)', md: 'none' },
                            },
                            '& .MuiToggleButton-root': {
                                color: 'inherit',
                                border: 'none',
                                px: isMobile ? 0.75 : 1.5,
                                py: 0.5,
                                gap: 0.5,
                                minWidth: isMobile ? 48 : 70,
                                borderRadius: '999px !important',
                                '&.Mui-selected': {
                                    color: '#0d0d0d',
                                    backgroundColor: '#fff',
                                },
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.16)',
                                },
                            },
                        }}
                    >
                        {availableLanguages.map((value) => (
                            <ToggleButton key={value} value={value} aria-label={value}>
                                <Box component="span" sx={{ ...FLAG_BASE_SX, ...FLAG_STYLES[value] }} />
                                {!isMobile && (
                                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                        {LANGUAGE_LABELS[value]}
                                    </Typography>
                                )}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
