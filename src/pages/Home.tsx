import * as React from 'react';
import {Button, Card, CardContent, Typography, Box, Paper, CardMedia} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import heroImage from '../static/HomeBackground.webp';
import {CATEGORY_IMAGES} from '../constants/categoryImages'
import {HOMEABOUT_ICONS} from '../constants/HomeAboutIcons'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeAboutUs from '../static/HomeAboutUs.avif';
import InfoIcon from '@mui/icons-material/Info';

const Home: React.FC = () => {

    const {translations} = useLanguage();
    const navigate = useNavigate();

    const {hero, productShowcase, brandHighlight} = translations.pages.home;

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
                                    sx={{
                                        borderRadius: '20px 20px 0 0',
                                        height: 280,
                                        objectFit: 'cover',
                                        marginBottom: '12px'
                                    }}
                                />
                                <Typography variant="h4" component="h3" gutterBottom>
                                    {category.title}
                                </Typography>
                                <Typography variant="body1" component="h3" gutterBottom>
                                    {category.details}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    onClick={() => navigate('/products')}
                                    gutterBottom
                                    color="secondary"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    See More
                                    <ArrowForwardIcon sx={{fontSize: '1.2em'}}/>
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


            <Box
                component="section"
                color="primary"
                display="flex"
                sx={{
                    display: 'flex',
                    width: '100%',
                    padding: '0 9%',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        my: 'auto',
                        mr: 20
                    }}
                >

                    <Box
                        sx={{
                            overflow: 'hidden',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                            borderRadius: '20px',
                        }}
                    >
                        <Box
                            component="img"
                            src={HomeAboutUs}
                            alt="HomeAboutUs"
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>

                </Box>

                <Box
                    sx={{
                        flex: 1,
                    }}>

                    <Paper
                        sx={(theme) => ({
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 3,
                            py: 1,
                            borderRadius: 7,
                            mb: 4,
                            fontSize: '0.8rem',
                            fontWeight: 'bold',

                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText,
                        })}
                        elevation={0}
                    >
                        <InfoIcon fontSize="small"/>
                        {brandHighlight.about}
                    </Paper>

                    <Typography
                        variant="h3"
                        sx={(theme) => ({
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            mb: 3,
                            lineHeight: 1.2,
                            color: theme.palette.primary.contrastText,
                            '& span': {
                                color: theme.palette.secondary.main,
                            },
                        })}
                    >
                        {brandHighlight.titleTop}<br/>
                        <Box component="span">{brandHighlight.titleBottom}</Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                        }}
                    >
                        {brandHighlight.description}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            mt: 0,
                        }}
                    >
                        {brandHighlight.bullets.map((bullet) => {
                            const Icon = HOMEABOUT_ICONS[bullet.id];

                            return (
                                <Paper
                                    key={bullet.id}
                                    sx={{
                                        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                                        borderRadius: '10px',
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 2,
                                    }}
                                    elevation={4}
                                >
                                    <Box
                                        sx={(theme) => ({
                                            width: 48,
                                            height: 48,
                                            borderRadius: 2,
                                            backgroundColor: theme.palette.secondary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        })}
                                    >
                                        <Icon sx={{ fontSize: 28, color: '#000' }} />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            color="secondary"
                                            sx={{
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold',
                                                mb: 0.5,
                                            }}
                                        >
                                            {bullet.title}
                                        </Typography>

                                        <Typography variant="body2">
                                            {bullet.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            );
                        })}


                        <Button
                            variant="contained"
                            onClick={() => navigate('/about')}
                            color="secondary"
                            sx={{
                                justifySelf: 'start',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: 4,
                                py: 1.5,
                                px: 3,
                                mt: 4,
                                width: '50%',
                            }}
                        >
                            {brandHighlight.ctaLabel}
                        </Button>
                    </Box>
                </Box>

            </Box>
{/*
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
            </Paper>*/}
        </Box>
    );
};

export default Home;

