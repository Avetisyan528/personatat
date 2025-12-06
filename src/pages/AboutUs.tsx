import * as React from 'react';
import {Box, Typography, Paper, Grid, useTheme} from '@mui/material';
//import {useLanguage} from '../context/LanguageContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import {LocationOn, MailOutline, Phone} from "@mui/icons-material";
import AboutUs from "../static/AboutUs.avif";
import {alpha} from '@mui/material/styles';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


/*interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}*/

const About: React.FC = () => {
    const theme = useTheme();
    //const {translations} = useLanguage();
    // const navigate = useNavigate();

    //const {title, description} = translations.pages.about;
    /*

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
    */

    /*const keyStats = [
        {id: 'stat-1', value: '2010', label: 'Founded in'},
        {id: 'stat-2', value: '50+', label: 'SKUs Developed'},
        {id: 'stat-3', value: '99%', label: 'Customer Satisfaction'},
        {id: 'stat-4', value: '10M+', label: 'Cups Served'},
    ];*/

    /*Remove Later*/

    // Destructure contact page translation segments
    //const {info} = translations.pages.contact;

    /*  const [formData, setFormData] = React.useState<ContactFormState>({
          name: '',
          email: '',
          subject: '',
          message: '',
      });*/
    /*
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // **TODO: Implement actual form submission logic (e.g., API call)**
            console.log('Form Submitted:', formData);
            alert(form.submissionMessage); // Display a placeholder alert
            setFormData({name: '', email: '', subject: '', message: ''}); // Clear form
        };*/

    /* const contactInfo = [
         {id: 1, icon: <MailOutline color="primary"/>, title: info.email.title, value: info.email.value},
         {id: 2, icon: <Phone color="primary"/>, title: info.phone.title, value: info.phone.value},
         {id: 3, icon: <LocationOn color="primary"/>, title: info.address.title, value: info.address.value},
     ];
 */

    return (
        <Box>
            <Box component="section"
                 sx={{py: 10,}}>

                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{maxWidth: 900, mx: 'auto', textAlign: 'center'}}
                    >
                        Crafted with Passion,{' '}
                        <Box
                            component="span"
                            sx={{color: (theme) => theme.palette.secondary.main}}
                        >
                            Rooted in Tradition
                        </Box>
                    </Typography>

                    <Typography variant="h4" gutterBottom sx={{maxWidth: 900, mx: 'auto'}}>
                        At Persona Tatarstan, we blend centuries-old coffee traditions with modern artisanal techniques.
                        Each bean tells a story of quality, heritage, and exceptional craftsmanship.
                    </Typography>

                    <Typography variant="body2" sx={{mt: 2, maxWidth: 600, mx: 'auto'}}>
                        Our journey began with a simple mission: to bring the world's finest coffee to discerning
                        enthusiasts while honoring the rich cultural legacy of Tatarstan.
                    </Typography>
                </Box>


                <Grid container spacing={15} maxWidth="lg" sx={{mx: 'auto'}}>
                    <Grid size={{md: 6}}
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
                                <Typography variant="h6" sx={{fontWeight: 'bold'}} color='secondary'>
                                    Master Roasting Process
                                </Typography>
                                <Typography variant="body2" color={theme.palette.primary.light}>
                                    Every batch perfected by expert craftsmen
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid size={{md: 6}} spacing={6} container>

                        <Grid size={{md: 12}}>
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
                                    <Grid size={{md: 12}}>
                                        {/* Title */}
                                        <Typography variant="h4" component="h3" gutterBottom>
                                            Our Journey
                                        </Typography>

                                        {/* First paragraph */}
                                        <Typography variant="body1" gutterBottom>
                                            Founded in the heart of Tatarstan, our brand represents a commitment to
                                            excellence that spans continents. We source the finest beans from renowned
                                            coffee-growing regions worldwide, bringing them back to our roastery where
                                            tradition meets innovation.
                                        </Typography>

                                        {/* Second paragraph */}
                                        <Typography variant="body1" gutterBottom>
                                            Every batch is carefully roasted to perfection, preserving the unique flavor
                                            profiles that make each origin special. From the first crack to the final
                                            cooling, our master roasters ensure that every bean embodies the premium
                                            quality Persona Tatarstan is known for.
                                        </Typography>

                                        {/* Quote */}
                                        <Typography variant="body2" sx={{fontStyle: 'italic', mt: 2}}>
                                            "We don't just roast coffee—we craft experiences that connect people,
                                            cultures, and moments of joy in every cup."
                                        </Typography>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid
                            size={{md: 6}}
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
                            <Typography variant="h3" component="div" sx={{fontWeight: 700, marginBottom: 1}}>
                                6+
                            </Typography>

                            <Typography variant="body1" component="div" sx={{fontWeight: 500}}>
                                Years Excellence
                            </Typography>

                            <Typography variant="body2" component="div">
                                Since 2019
                            </Typography>
                        </Grid>

                        <Grid
                            size={{md: 6}}
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
                                sx={{fontWeight: 700, marginBottom: 1}}
                            >
                                50+
                            </Typography>

                            <Typography
                                variant="body1"
                                component="div"
                                sx={{fontWeight: 500, marginBottom: 0.5}}
                            >
                                Coffee Origins
                            </Typography>

                            <Typography variant="body2" component="div">
                                Worldwide
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>

            <Box component="section"
                 sx={{
                     py: 10,
                     textAlign: 'center',
                 }}
            >
                <Box sx={{mb: 10}}>
                    <Typography variant="h2" gutterBottom>Our Mission & Values
                    </Typography>
                    <Typography variant="h5" gutterBottom>Guided by principles that define everything we do, from
                        sourcing to serving

                    </Typography>
                </Box>

                <Grid container spacing={6} maxWidth="lg" sx={{mx: 'auto'}}>

                    <Grid
                        size={{md: 6}}
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
                            {/* Icon + Title */}
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
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
                                    <CrisisAlertIcon color="primary" sx={{fontSize: 40}}/>
                                </Box>

                                <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                    Our Mission
                                </Typography>
                            </Box>

                            <Typography variant="body2" component="div">
                                To deliver exceptional coffee experiences that honor tradition while embracing
                                innovation. We aim to connect coffee lovers with the world's finest beans, roasted to
                                perfection in the heart of Tatarstan.
                            </Typography>

                            <Typography variant="body2" component="div">
                                Every cup we create represents our dedication to quality, sustainability, and the art of
                                coffee making.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        size={{md: 6}}
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
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>

                            {/* Title */}
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
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
                                    <FavoriteIcon color="primary" sx={{fontSize: 40}}/>
                                </Box>

                                <Typography variant="h4" sx={{fontWeight: 600, fontSize: '1.5rem'}}>
                                    Our Values
                                </Typography>
                            </Box>

                            {/* Value List */}
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>

                                <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ml: 2}}>
                                        <Typography variant="h6" sx={{fontWeight: 600}}>
                                            Quality First
                                        </Typography>

                                        <Typography variant="body1" sx={{fontSize: '1.1rem'}}>
                                            Uncompromising standards in every step
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ml: 2}}>
                                        <Typography variant="h6" sx={{fontWeight: 600}}>
                                            Sustainability
                                        </Typography>

                                        <Typography variant="body1" sx={{fontSize: '1.1rem'}}>
                                            Ethical sourcing and environmental care
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                                    <CheckCircleIcon
                                        sx={{
                                            fontSize: 32,
                                            color: (theme) => theme.palette.secondary.main,
                                        }}
                                    />

                                    <Box sx={{ml: 2}}>
                                        <Typography variant="h6" sx={{fontWeight: 600}}>
                                            Innovation
                                        </Typography>

                                        <Typography variant="body1" sx={{fontSize: '1.1rem'}}>
                                            Blending tradition with modern techniques
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
                     textAlign: 'center',
                 }}

            >

                <Box sx={{mb: 4}}>
                    <Typography variant="h3">Something</Typography>
                    <Typography variant="body1">Something</Typography>
                </Box>
                <Grid container spacing={6} maxWidth="lg" sx={{mx: 'auto'}}>

                    <Grid
                        size={{md: 4}}
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
                                <WhatshotIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>

                            <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                Artisanal Roasting
                            </Typography>

                            <Typography variant="body2" component="div">
                                Master roasters craft each batch with precision, bringing out the unique characteristics
                                of every bean origin. Our time-honored techniques ensure consistent excellence.
                            </Typography>

                            <Typography variant="body2" component="div">
                                We use state-of-the-art equipment combined with traditional methods passed down through
                                generations.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        size={{md: 4}}
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
                                <LanguageIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>

                            <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                Global Sourcing
                            </Typography>

                            <Typography variant="body2" component="div">
                                We partner with the world's finest coffee farms, ensuring sustainable and ethical
                                sourcing of premium beans. Quality from farm to cup.
                            </Typography>

                            <Typography variant="body2" component="div">
                                Direct relationships with farmers guarantee fair pricing and exceptional bean quality
                                year after year.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        size={{md: 4}}
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
                                <AccountBalanceIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>

                            <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                Tatarstan Heritage
                            </Typography>

                            <Typography variant="body2" component="div">
                                Our roots in Tatarstan inspire us to honor tradition while embracing innovation in every
                                cup we create. A legacy of excellence.
                            </Typography>

                            <Typography variant="body2" component="div">
                                We're proud to represent our region's commitment to quality and craftsmanship on the
                                global stage.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>)
        ;
};

export default About;
