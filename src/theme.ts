import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#c8a15a',
            contrastText: '#1a1a1a',
        },
        background: {
            default: '#000000',
            paper: '#111111',
        },
    },
});

export default theme;

