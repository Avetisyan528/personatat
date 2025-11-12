import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    ToggleButtonGroup,
    ToggleButton,
    Tooltip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage, NAV_LINKS, Language } from '../../context/LanguageContext';
import logo from '../../static/personaLogo.png';

const Header: React.FC = () => {
    const { language, setLanguage, translations } = useLanguage();

    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
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
                        justifyContent: 'flex-end',
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
                            ml: 2,
                            '& .MuiToggleButton-root': {
                                color: 'inherit',
                                borderColor: 'rgba(255,255,255,0.3)',
                                '&.Mui-selected': {
                                    color: '#000',
                                    backgroundColor: '#fff',
                                },
                            },
                        }}
                    >
                        <ToggleButton value="en" aria-label="English">
                            <span role="img" aria-label="United Kingdom flag">
                                🇬🇧
                            </span>
                            &nbsp;EN
                        </ToggleButton>
                        <ToggleButton value="ru" aria-label="Russian">
                            <span role="img" aria-label="Russian flag">
                                🇷🇺
                            </span>
                            &nbsp;RU
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
