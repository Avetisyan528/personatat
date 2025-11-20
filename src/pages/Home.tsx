import * as React from 'react';
import { Button, Card, CardContent, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../static/HomeBackground.webp';

const Home: React.FC = () => {
    const { translations } = useLanguage();
    const navigate = useNavigate();

    const { hero, productShowcase, brandHighlight, finalCta } = translations.pages.home;

    return (
        <Box className="home-page">

            <Box
                component="section"
                className="home-hero"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${heroImage})`,
                    paddingBottom: '100px',
                }}
            >
                <Box className="home-hero__content">
                    <Typography variant="overline" className="home-hero__eyebrow">
                        PersonaTat
                    </Typography>
                    <Typography variant="h2" className="home-hero__title">
                        {hero.title}
                    </Typography>
                    <Typography variant="h5" className="home-hero__subtitle">
                        {hero.subtitle}
                    </Typography>
                    <Typography variant="body1" className="home-hero__description">
                        {hero.description}
                    </Typography>
                    <Box className="home-hero__ctas">
                        {hero.ctas.map((cta) => (
                            <Button
                                key={cta.id}
                                variant={cta.path === '/products' ? 'contained' : 'outlined'}
                                color="secondary"
                                size="large"
                                onClick={() => navigate(cta.path)}
                            >
                                {cta.label}
                            </Button>
                        ))}
                    </Box>
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

            <Box component="section" className="home-products">
                <Box className="section-heading">
                    <Typography variant="h3">{productShowcase.title}</Typography>
                </Box>
                <Box className="home-products__grid">
                    {productShowcase.categories.map((category) => (
                        <Card key={category.id} className="home-product-card" elevation={6}>
                            <CardContent>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {category.title}
                                </Typography>
                                <ul>
                                    {category.details.map((detail, index) => (
                                        <li key={`${category.id}-detail-${index}`}>{detail}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Button
                    className="home-products__cta"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/products')}
                >
                    {productShowcase.ctaLabel}
                </Button>
            </Box>

            <Box component="section" className="home-brand">
                <Box className="home-brand__intro">
                    <Typography variant="h3">{brandHighlight.title}</Typography>
                    <Typography variant="body1" className="home-brand__description">
                        {brandHighlight.description}
                    </Typography>
                </Box>
                <Box className="home-brand__reasons">
                    {brandHighlight.bullets.map((bullet) => (
                        <Paper key={bullet.id} className="home-brand__card" elevation={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" component="h3">
                                    {bullet.title}
                                </Typography>
                                <Typography variant="body2">{bullet.description}</Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>

                <Box className="home-brand__stats">
                    {brandHighlight.stats.map((stat) => (
                        <Paper key={stat.id} className="home-brand__stat" elevation={6}>
                            <Typography variant="h3">{stat.value}</Typography>
                            <Typography variant="body2">{stat.label}</Typography>
                        </Paper>
                    ))}
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/about')}
                >
                    {brandHighlight.ctaLabel}
                </Button>
            </Box>

            <Paper component="section" className="home-final-cta" elevation={8}>
                <Box className="home-final-cta__content">
                    <Typography variant="h3">{finalCta.title}</Typography>
                    <Typography variant="body1" className="home-final-cta__description">
                        {finalCta.description}
                    </Typography>
                    <Typography variant="h6" className="home-final-cta__subtitle">
                        {finalCta.subtitle}
                    </Typography>
                    <ul>
                        {finalCta.details.map((detail, index) => (
                            <li key={`final-detail-${index}`}>{detail}</li>
                        ))}
                    </ul>
                    <Box className="home-final-cta__buttons">
                        {finalCta.buttons.map((button) => (
                            <Button
                                key={button.id}
                                variant={button.path === '/products' ? 'contained' : 'outlined'}
                                color="secondary"
                                size="large"
                                onClick={() => navigate(button.path)}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </Box>
                    <Typography variant="caption" className="home-final-cta__note">
                        {finalCta.note}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Home;

