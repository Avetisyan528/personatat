import * as React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../static/personaLogo.png';
import Grid from '@mui/material/Grid';

const Home: React.FC = () => {
    const { translations } = useLanguage();
    const navigate = useNavigate();

    const { hero, productShowcase, brandHighlight, finalCta } = translations.pages.home;

    return (
        <>
        <div className="home-page">
            <section
                className="home-hero"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${heroImage})`,
                }}
            >
                <div className="home-hero__content">
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
                                key={cta.label}
                                variant={cta.path === '/products' ? 'contained' : 'outlined'}
                                color="secondary"
                                size="large"
                                onClick={() => navigate(cta.path)}
                            >
                                {cta.label}
                            </Button>
                        ))}
                    </Box>
                </div>
            </section>

            <section className="home-products">
                <div className="section-heading">
                    <Typography variant="h3">{productShowcase.title}</Typography>
                </div>
                <Grid container spacing={3}>
                    {productShowcase.categories.map((category) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.title}>
                            <Card className="home-product-card" elevation={6}>
                                <CardContent>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {category.title}
                                    </Typography>
                                    <ul>
                                        {category.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Button
                    className="home-products__cta"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/products')}
                >
                    {productShowcase.ctaLabel}
                </Button>
            </section>

            <section className="home-brand">
                <div className="home-brand__intro">
                    <Typography variant="h3">{brandHighlight.title}</Typography>
                    <Typography variant="body1" className="home-brand__description">
                        {brandHighlight.description}
                    </Typography>
                </div>
                <Grid container spacing={3} className="home-brand__reasons">
                    {brandHighlight.bullets.map((bullet) => (
                        <Grid size={{ xs:12, sm:6}} key={bullet.title}>
                            <Card className="home-brand__card" elevation={4}>
                                <CardContent>
                                    <Typography variant="h6" component="h3">
                                        {bullet.title}
                                    </Typography>
                                    <Typography variant="body2">{bullet.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box className="home-brand__stats">
                    {brandHighlight.stats.map((stat) => (
                        <div key={stat.value} className="home-brand__stat">
                            <Typography variant="h3">{stat.value}</Typography>
                            <Typography variant="body2">{stat.label}</Typography>
                        </div>
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
            </section>

            <section className="home-final-cta">
                <div className="home-final-cta__content">
                    <Typography variant="h3">{finalCta.title}</Typography>
                    <Typography variant="body1" className="home-final-cta__description">
                        {finalCta.description}
                    </Typography>
                    <Typography variant="h6" className="home-final-cta__subtitle">
                        {finalCta.subtitle}
                    </Typography>
                    <ul>
                        {finalCta.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                    <Box className="home-final-cta__buttons">
                        {finalCta.buttons.map((button) => (
                            <Button
                                key={button.label}
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
                </div>
            </section>
        </div>
        </>
    );
};

export default Home;

