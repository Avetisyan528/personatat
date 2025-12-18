import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    Select,
    SelectChangeEvent,
    MenuItem,
    useTheme,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link as RouterLink} from 'react-router-dom';
import {useLanguage} from '../../context/LanguageContext';
import {NAV_LINKS} from '../../types/navigation';
import {Language, availableLanguages} from '../../types'

import logo from '../../static/LogoTransparent.png';

// Flags
const UK_FLAG_SVG = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>`);
const TATAR_FLAG_SVG = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3"><rect width="6" height="3" fill="#00923f"/><rect y="1" width="6" height="1" fill="#fff"/><rect y="1.2" width="6" height="0.6" fill="#d81e05"/><rect y="2" width="6" height="1" fill="#d81e05"/></svg>`);
const RUSSIAN_FLAG_SVG = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3"><rect width="6" height="1" fill="#fff"/><rect y="1" width="6" height="1" fill="#0039a6"/><rect y="2" width="6" height="1" fill="#d52b1e"/></svg>`);

// Flag base styles
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
    en: {backgroundImage: `url("data:image/svg+xml,${UK_FLAG_SVG}")`},
    ru: {backgroundImage: `url("data:image/svg+xml,${RUSSIAN_FLAG_SVG}")`},
    tt: {backgroundImage: `url("data:image/svg+xml,${TATAR_FLAG_SVG}")`},
};

const LANGUAGE_LABELS: Record<Language, string> = {
    en: 'EN',
    ru: 'RU',
    tt: 'TT',
};

const Header: React.FC = () => {
    const {language, setLanguage, translations} = useLanguage();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            <AppBar
                position="static"
                color="primary"
                enableColorOnDark
                elevation={0}
                sx={{borderBottom: `1px solid ${theme.palette.secondary.main}`}}
            >
                <Toolbar sx={{display: 'flex', alignItems: 'center'}}>
                    <Box component={RouterLink} to="/" sx={{display: 'flex', alignItems: 'center', mr: 2}}>
                        <Box component="img" src={logo} alt={translations.header.title} sx={{maxHeight: 40}}/>
                    </Box>

                    {!isMobile && (
                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1,
                            gap: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            {NAV_LINKS.map(({key, path}) => {
                                const isProducts = key === 'products';
                                return (
                                    <Button
                                        key={key}
                                        component={RouterLink}
                                        to={path}
                                        color={isProducts ? 'secondary' : 'inherit'}
                                        variant={isProducts ? 'contained' : 'text'}
                                        sx={{fontWeight: 600, borderRadius: 999, px: 2.5}}
                                    >
                                        {translations.header.navLabels[key]}
                                    </Button>
                                );
                            })}

                            <Select
                                value={language}
                                onChange={(e: SelectChangeEvent<Language>) => setLanguage(e.target.value as Language)}
                                size="small"
                                sx={{
                                    ml: 2,
                                    borderRadius: '999px',
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                    minWidth: 80,
                                    "& .MuiSelect-select": {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 1.5,
                                        py: 0.5,
                                        color: 'inherit'
                                    },
                                    "&:hover": {backgroundColor: 'rgba(255,255,255,0.16)'},
                                }}
                            >
                                {availableLanguages.map((value) => (
                                    <MenuItem key={value} value={value}
                                              sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <Box component="span" sx={{...FLAG_BASE_SX, ...FLAG_STYLES[value]}}/>
                                        <Typography variant="caption" sx={{fontWeight: 600}}>
                                            {LANGUAGE_LABELS[value]}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    )}

                    {isMobile && (
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)} sx={{ml: 'auto'}}>
                            <MenuIcon/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} color="primary" elevation={0}>
                <Box sx={{width: 250, p: 2}} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {NAV_LINKS.map(({key, path}) => (
                            <ListItem key={key} disablePadding>
                                <ListItemButton component={RouterLink} to={path}>
                                    <ListItemText primary={translations.header.navLabels[key]}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Box sx={{mt: 2}}>
                        <Select
                            value={language}
                            onChange={(e: SelectChangeEvent<Language>) => setLanguage(e.target.value as Language)}
                            size="small"
                            fullWidth
                            sx={{
                                '& .MuiSelect-select': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                },
                            }}
                        >
                            {availableLanguages.map((value) => (
                                <MenuItem
                                    key={value}
                                    value={value}
                                    sx={{display: 'flex', alignItems: 'center', gap: 1}}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            ...FLAG_BASE_SX,
                                            ...FLAG_STYLES[value]
                                        }}
                                    />

                                    <Typography variant="body1" sx={{fontWeight: 600}}>
                                        {LANGUAGE_LABELS[value]}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
