import * as React from 'react';
import {Box, Typography, Button, Paper, Grid, Card} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
// Assuming an image for the About page hero section
import aboutHeroImage from '../static/HomeBackground.webp';
// Assuming icons for visual appeal
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsightsIcon from '@mui/icons-material/Insights';
import PublicIcon from '@mui/icons-material/Public';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

const About: React.FC = () => {
    const {translations} = useLanguage();
    const navigate = useNavigate();

    const {title, description} = translations.pages.about;

    const brandStory = {
        title: translations.header.navLabels.about,
        subtitle: title,
        description: description,
    };

    const missionAndVision = [
        {
            id: 'mv-1',
            icon: <EmojiEventsIcon color="secondary" sx={{fontSize: 40, mb: 1}}/>,
            title: 'Our Mission',
            description: 'To deliver the highest quality, professionally roasted coffee experiences to every customer, whether at home or in a professional setting (HoReCa).',
        },
        {
            id: 'mv-2',
            icon: <InsightsIcon color="secondary" sx={{fontSize: 40, mb: 1}}/>,
            title: 'Our Vision',
            description: 'To be the leading national provider of specialized coffee blends and solutions, recognized for quality and customer focus.',
        },
        {
            id: 'mv-3',
            icon: <PublicIcon color="secondary" sx={{fontSize: 40, mb: 1}}/>,
            title: 'Sustainability Pledge',
            description: 'Committed to ethical sourcing and sustainable practices across our entire supply chain, from bean to cup.',
        },
    ];

    const keyStats = [
        {id: 'stat-1', value: '2010', label: 'Founded in'},
        {id: 'stat-2', value: '50+', label: 'SKUs Developed'},
        {id: 'stat-3', value: '99%', label: 'Customer Satisfaction'},
        {id: 'stat-4', value: '10M+', label: 'Cups Served'},
    ];
    // --- End Placeholder Content ---

    return (
        <Box className="about-page">
            {/* 1. About Hero Section (Styled like Home Hero) */}
            <Box
                component="section"
                className="about-hero"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${aboutHeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '80px 20px 120px',
                }}
            >
                <Box className="about-hero__content" sx={{maxWidth: '900px', mx: 'auto', textAlign: 'left'}}>
                    <Typography variant="overline" className="about-hero__eyebrow" sx={{mb: 1, display: 'block'}}>
                        PersonaTat
                    </Typography>
                    <Typography variant="h2" component="h1" className="about-hero__title" sx={{mb: 2}}>
                        {brandStory.subtitle}
                    </Typography>
                    <Typography variant="h5" className="about-hero__subtitle" sx={{mb: 3, fontWeight: 300}}>
                        {brandStory.description}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={() => navigate('/products')}
                    >
                        {translations.pages.home.hero.ctas.find(cta => cta.path === '/products')?.label || 'View Products'}
                    </Button>
                </Box>
            </Box>

            {/* 2. Mission and Vision Section (Styled like Brand Highlight Bullets) */}
            <Box component="section" className="about-mission" sx={{py: 8, px: 2, textAlign: 'center'}}>
                <Typography variant="h3" component="h2" gutterBottom sx={{mb: 6}}>
                    Our Core Principles
                </Typography>
                <Grid container spacing={4} maxWidth="lg" sx={{mx: 'auto'}}>
                    {missionAndVision.map((item) => (
                        <Grid size={{xs: 12, md: 4}} key={item.id}>
                            <Paper className="mission-card" elevation={6} sx={{p: 4, height: '100%'}}>
                                {item.icon}
                                <Typography variant="h6" component="h3" gutterBottom sx={{mt: 1}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* 3. History and Stats Section (Styled like Brand Highlight Stats) */}
            <Box component="section" className="about-history-stats" sx={{py: 8, px: 2, backgroundColor: 'grey.100'}}>
                <Box maxWidth="lg" sx={{mx: 'auto'}}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{xs: 12, md: 6}}>
                            <Box sx={{pr: {md: 4}}}>
                                <Typography variant="h3" component="h2" gutterBottom>
                                    <HistoryToggleOffIcon sx={{mr: 1, verticalAlign: 'middle'}} color="secondary"/>
                                    Our Journey
                                </Typography>
                                <Typography variant="body1" sx={{mb: 3}}>
                                    PersonaTat began with a deep appreciation for the art of coffee roasting. From a
                                    small, local operation focused on perfect bean selection, we rapidly expanded our
                                    capabilities to serve both dedicated private connoisseurs and large-scale HoReCa
                                    partners across the nation.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    onClick={() => navigate('/contact')}
                                >
                                    Talk to Our Experts
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Grid container spacing={2}>
                                {keyStats.map((stat) => (
                                    <Grid size={{xs: 12}} key={stat.id}>
                                        <Card className="stat-card" elevation={4} sx={{textAlign: 'center', p: 3}}>
                                            <Typography variant="h3" color="secondary" sx={{fontWeight: 700}}>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body1" sx={{mt: 0.5}}>
                                                {stat.label}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <div className="bg-blue-500 p-4 text-white h-20">
                asdaasd
            </div>
        </Box>
    );
};

export default About;