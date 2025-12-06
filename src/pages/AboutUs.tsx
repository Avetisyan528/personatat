import * as React from 'react';
import {Box, Typography, Button, Paper, Grid, Card} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import aboutHeroImage from '../static/HomeBackground.webp';
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

    return (
        <Box>
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    borderRadius: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '620px',
                    padding: '80px 9%',
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${aboutHeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBottom: '100px',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3))',
                        zIndex: 0,
                    },
                }}
            >
                <Box sx={{
                    maxWidth: '900px',
                    mx: 'auto',
                    textAlign: 'left',
                    zIndex: 1,
                }}>
                    <Typography variant="overline" sx={{mb: 1, display: 'block'}}>
                        PersonaTat
                    </Typography>
                    <Typography variant="h2" component="h1" sx={{mb: 2}}>
                        {brandStory.subtitle}
                    </Typography>
                    <Typography variant="h5" sx={{mb: 3, fontWeight: 300}}>
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
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100px',
                        zIndex: 1,
                    }}
                >
                    <path
                        fill="#000000"
                        fillOpacity="1"
                        d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </Box>

            <Box component="section" sx={{py: 8, px: 2, textAlign: 'center'}}>
                <Typography variant="h3" component="h2" gutterBottom sx={{mb: 6}}>
                    Our Core Principles
                </Typography>
                <Grid container spacing={4} maxWidth="lg" sx={{mx: 'auto'}}>
                    {missionAndVision.map((item) => (
                        <Grid size={{xs: 12, md: 4}} key={item.id}>
                            <Paper elevation={6} sx={{p: 4, height: '100%'}}>
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

            <Box component="section" sx={{py: 8, px: 2}}>
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
                                        <Card elevation={4} sx={{textAlign: 'center', p: 3}}>
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
        </Box>
    );
};

export default About;