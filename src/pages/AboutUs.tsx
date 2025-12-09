import * as React from 'react';
import { Box, Typography, Paper, Grid, useTheme } from '@mui/material';
//import {useLanguage} from '../context/LanguageContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import {LocationOn, MailOutline, Phone} from "@mui/icons-material";
import AboutUs from "../static/AboutUs.avif";
import { alpha } from '@mui/material/styles';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
    const theme = useTheme();
    const { translations } = useLanguage();

    // Destructure the 'about' section from the translations object
    const { about } = translations.pages;

    return (
        <Box>
            <Box component="section"
                sx={{ py: 10, }}>

                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}
                    >
                        {/* Use translation keys for Hero Title */}
                        {about.hero.titlePart1}{' '}
                        <Box
                            component="span"
                            sx={{ color: (theme) => theme.palette.secondary.main }}
                        >
                            {about.hero.titlePart2Highlight}
                        </Box>
                    </Typography>

                    <Typography variant="h4" gutterBottom sx={{ maxWidth: 900, mx: 'auto' }}>
                        {/* Use translation key for Hero Subtitle */}
                        {about.hero.subtitle}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
                        {/* Use translation key for Hero Description */}
                        {about.hero.description}
                    </Typography>
                </Box>
            </Box>

            <Box component="section"
                sx={{ py: 8, px: 2, }}>


                <Grid container spacing={15} maxWidth="lg" sx={{ mx: 'auto' }}>
                    <Grid size={{ xs: 12, md: 6 }}
                        sx={{
                            my: 5,
                            overflow: 'hidden',
                            borderRadius: '30px',
                        }}
                    >

                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                                borderRadius: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={AboutUs}
                                alt="AboutUs"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'brightness(0.7)',

                                }}
                            />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: `linear-gradient(to top, ${alpha(theme.palette.secondary.main, 0.4)} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%)`,
                                    zIndex: 1,
                                }}
                            />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20,
                                    right: 20,
                                    background: theme.palette.primary.main,
                                    borderRadius: 3,
                                    borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                    padding: 2,
                                    zIndex: 2,
                                }}
                            >
                                {/* Use translation keys for Image Callout */}
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }} color='secondary'>
                                    {about.imageCallout.title}
                                </Typography>
                                <Typography variant="body2" color={theme.palette.primary.light}>
                                    {about.imageCallout.description}
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} spacing={6} container>

                        <Grid size={{ xs: 12, md: 12 }}>
                            <Grid
                                sx={{
                                    pt: 2,
                                    borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                    overflow: 'hidden',
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        backgroundColor: theme.palette.primary.main,
                                    }}
                                >
                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <Typography variant="h4" component="h3" gutterBottom>
                                            {about.storyAndFacts.storyTitle}
                                        </Typography>

                                        <Typography variant="body1" gutterBottom>
                                            {about.storyAndFacts.paragraph1}
                                        </Typography>

                                        <Typography variant="body1" gutterBottom>
                                            {about.storyAndFacts.paragraph2}
                                        </Typography>

                                        <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 2 }}>
                                            "{about.storyAndFacts.quote}"
                                        </Typography>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid
                            size={{ xs: 6, md: 6 }}
                            sx={{
                                p: 4,
                                borderRadius: '30px',
                                overflow: 'hidden',
                                backgroundColor: theme.palette.secondary.main,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h3" component="div" sx={{ fontWeight: 700, marginBottom: 1 }}>
                                {about.storyAndFacts.fact1.value}
                            </Typography>

                            <Typography variant="body1" component="div" sx={{ fontWeight: 500 }}>
                                {about.storyAndFacts.fact1.label}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.storyAndFacts.fact1.subLabel}
                            </Typography>
                        </Grid>

                        <Grid
                            size={{ xs: 6, md: 6 }}
                            sx={{
                                p: 4,
                                borderRadius: '30px',
                                overflow: 'hidden',
                                backgroundColor: theme.palette.secondary.main,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{ fontWeight: 700, marginBottom: 1 }}
                            >
                                {about.storyAndFacts.fact2.value}
                            </Typography>

                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontWeight: 500, marginBottom: 0.5 }}
                            >
                                {about.storyAndFacts.fact2.label}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.storyAndFacts.fact2.subLabel}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>

            <Box component="section"
                sx={{
                    py: 10,
                    px: 2,
                    textAlign: 'center',
                }}
            >
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h2" gutterBottom>{about.missionAndValues.sectionTitle}
                    </Typography>
                    <Typography variant="h5" gutterBottom>{about.missionAndValues.sectionSubtitle}
                    </Typography>
                </Box>

                <Grid container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 4,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                            '&:hover': {
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                gap: 3,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Box
                                    sx={(theme) => ({
                                        p: 2,
                                        borderRadius: 2,
                                        backgroundColor: theme.palette.secondary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    })}
                                >
                                    <CrisisAlertIcon color="primary" sx={{ fontSize: 40 }} />
                                </Box>

                                <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                                    {about.missionAndValues.mission.title}
                                </Typography>
                            </Box>

                            <Typography variant="body2" component="div">
                                {about.missionAndValues.mission.paragraph1}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.missionAndValues.mission.paragraph2}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 4,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                            '&:hover': {
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                            {/* Title */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Box
                                    sx={(theme) => ({
                                        p: 2,
                                        borderRadius: 2,
                                        backgroundColor: theme.palette.secondary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    })}
                                >
                                    <FavoriteIcon color="primary" sx={{ fontSize: 40 }} />
                                </Box>

                                <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
                                    {about.missionAndValues.valuesTitle}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {about.missionAndValues.values[0].title}
                                        </Typography>

                                        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                                            {about.missionAndValues.values[0].description}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {about.missionAndValues.values[1].title}
                                        </Typography>

                                        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                                            {about.missionAndValues.values[1].description}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {about.missionAndValues.values[2].title}
                                        </Typography>

                                        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                                            {about.missionAndValues.values[2].description}
                                        </Typography>
                                    </Box>
                                </Box>


                            </Box>

                        </Box>
                    </Grid>


                </Grid>
            </Box>

            <Box component="section"
                sx={{
                    py: 10,
                    px: 2,
                    textAlign: 'center',
                }}

            >

                <Box sx={{ mb: 4 }}>
                    {/* Use translation keys for Three Pillars titles */}
                    <Typography variant="h3">{about.threePillars.sectionTitle}</Typography>
                    <Typography variant="body1">{about.threePillars.sectionSubtitle}</Typography>
                </Box>
                <Grid container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>

                    {/* Pillar 1: Artisanal Roasting */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            p: 4,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                            '&:hover': {
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    p: 2,
                                    borderRadius: 2,
                                    backgroundColor: theme.palette.secondary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                })}
                            >
                                <WhatshotIcon color='primary' sx={{ fontSize: 40 }} />
                            </Box>

                            {/* Use translation key for Pillar 1 Title */}
                            <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                                {about.threePillars.pillars[0].title}
                            </Typography>

                            {/* Use translation keys for Pillar 1 paragraphs */}
                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[0].paragraph1}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[0].paragraph2}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Pillar 2: Global Sourcing */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            p: 4,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                            '&:hover': {
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    p: 2,
                                    borderRadius: 2,
                                    backgroundColor: theme.palette.secondary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                })}
                            >
                                <LanguageIcon color='primary' sx={{ fontSize: 40 }} />
                            </Box>

                            <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                                {about.threePillars.pillars[1].title}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[1].paragraph1}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[1].paragraph2}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            p: 4,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                            '&:hover': {
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    p: 2,
                                    borderRadius: 2,
                                    backgroundColor: theme.palette.secondary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                })}
                            >
                                <AccountBalanceIcon color='primary' sx={{ fontSize: 40 }} />
                            </Box>

                            <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                                {about.threePillars.pillars[2].title}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[2].paragraph1}
                            </Typography>

                            <Typography variant="body2" component="div">
                                {about.threePillars.pillars[2].paragraph2}
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>)
        ;
};

export default About;