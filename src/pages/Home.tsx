import * as React from 'react';
import {Button, Card, CardContent, Typography, Box, Paper, CardMedia} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import heroImage from '../static/HomeBackground.webp';
import {CATEGORY_IMAGES} from '../constants/categoryImages'

const Home: React.FC = () => {
    const {translations} = useLanguage();
    const navigate = useNavigate();

    const {hero, productShowcase, brandHighlight, finalCta} = translations.pages.home;

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '96px',
                padding: '0 0 48px 0',
            }}
        >
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
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${heroImage})`,
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
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: '620px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: '4px',
                            color: 'rgba(255, 255, 255, 0.7)',
                        }}
                    >
                        PersonaTat
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: 700,
                        }}
                    >
                        {hero.title}
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                            fontWeight: 500,
                        }}
                    >
                        {hero.subtitle}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.85)',
                        }}
                    >
                        {hero.description}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: '16px',
                            flexWrap: 'wrap',
                            marginTop: '8px',
                        }}
                    >
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


            <Box
                component="section"
                sx={{
                    padding: '0 9%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                }}
            >
                <Box
                    sx={{
                        marginBottom: '32px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h3">{productShowcase.title}</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: 'repeat(2, 1fr)',
                    }}
                >
                    {productShowcase.categories.map((category) => (

                        <Card
                            key={category.id}
                            elevation={6}
                            sx={{
                                height: '100%',
                                background: 'rgba(17, 17, 17, 0.85)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(6px)',
                                '& ul': {
                                    margin: 0,
                                    paddingLeft: '18px',
                                    color: 'rgba(255, 255, 255, 0.78)',
                                },
                            }}
                        >
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={CATEGORY_IMAGES[category.id]}
                                    alt={category.title}
                                    sx={{ borderRadius: '20px 20px 0 0', height: 280, objectFit: 'cover', marginBottom: '12px' }}
                                />
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {category.title}
                                </Typography>
                                <ul>
                                    {category.details.map((detail, index) => (
                                        <li key={`${category.id}-detail-${index}`}>{detail}</li>
                                    ))}
                                </ul>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    See More
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>


                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/products')}
                    sx={{
                        alignSelf: 'center',
                        borderRadius: '999px',
                        paddingInline: '32px',
                    }}
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
                            <Box sx={{p: 3}}>
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

