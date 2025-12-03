import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    Select,
    SelectChangeEvent,
    MenuItem,
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useLanguage, NAV_LINKS, Language, availableLanguages} from '../../context/LanguageContext';
import logo from '../../static/LogoTransparent.png';

const UK_FLAG_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>`
);

const TATAR_FLAG_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3"><rect width="6" height="3" fill="#00923f"/><rect y="1" width="6" height="1" fill="#fff"/><rect y="1.2" width="6" height="0.6" fill="#d81e05"/><rect y="2" width="6" height="1" fill="#d81e05"/></svg>`
);

const RUSSIAN_FLAG_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3"><rect width="6" height="1" fill="#fff"/><rect y="1" width="6" height="1" fill="#0039a6"/><rect y="2" width="6" height="1" fill="#d52b1e"/> </svg>`
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
        backgroundImage: `url("data:image/svg+xml,${RUSSIAN_FLAG_SVG}")`,
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
    const {language, setLanguage, translations} = useLanguage();

    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar>
                <Box
                    component={RouterLink}
                    to="/"
                >
                    <Box component="img" src={logo} alt={translations.header.title} sx={{maxHeight: 40}}/>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flexGrow: 1,
                        flexWrap: 'wrap',
                        justifyContent: 'flex-end',
                        flexBasis: 'auto',
                        order: 2,
                    }}
                >
                    {NAV_LINKS.map(({key, path}) => {
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

                <Select
                    value={language}
                    onChange={(e: SelectChangeEvent<Language>) => setLanguage(e.target.value as Language)}
                    size="small"
                    sx={{
                        ml: 2,
                        order: 3,
                        borderRadius: "999px",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        minWidth: 80,
                        "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: 1.5,
                            py: 0.5,
                            color: "inherit",
                        },
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.16)",
                        },
                    }}
                >
                    {availableLanguages.map((value) => (
                        <MenuItem key={value} value={value} sx={{display: "flex", alignItems: "center", gap: 1}}>
                            <Box component="span" sx={{...FLAG_BASE_SX, ...FLAG_STYLES[value]}}/>
                            <Typography variant="caption" sx={{fontWeight: 600}}>
                                {LANGUAGE_LABELS[value]}
                            </Typography>
                        </MenuItem>
                    ))}
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
