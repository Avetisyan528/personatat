import * as React from 'react';
import {Box, Typography, Paper, Grid, useTheme} from '@mui/material';
import {useLanguage} from '../context/LanguageContext';
//import {LocationOn, MailOutline, Phone} from "@mui/icons-material";
import AboutUs from "../static/AboutUs.avif";
import {alpha} from '@mui/material/styles';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';


/*interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}*/

const About: React.FC = () => {
    const theme = useTheme();
    const {translations} = useLanguage();
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
    const {info} = translations.pages.contact;

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

                <Box textAlign="center" mb={4}>
                    <Typography variant="h1">Something</Typography>
                    <Typography variant="h4">Something Else</Typography>
                    <Typography variant="body2">Additional Description</Typography>
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
                            <Grid sx={{
                                pt: 2,
                                borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                overflow: 'hidden',
                            }}
                            >
                                <Paper elevation={0}
                                       sx={{
                                           p: 4,
                                           backgroundColor: theme.palette.primary.main,
                                       }}
                                >

                                    <Grid size={{md: 12}}>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>
                                        <Typography variant="h4" component="h3"
                                                    gutterBottom>{info.title}</Typography>

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
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                gap: 3,
                            }}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 3,}}>

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
                                    <CrisisAlertIcon color='primary' sx={{fontSize: 40}}/>
                                </Box>


                                <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                    Years Excellence
                                </Typography>
                            </Box>

                            <Typography variant="body2" component="div">
                                Since 2019
                            </Typography>

                            <Typography variant="body2" component="div">
                                Since 2019
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
                                boxShadow: (theme) => `0 0 40px ${theme.palette.secondary.main}AA`
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                gap: 3,
                            }}>
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
                                    <CrisisAlertIcon color='primary' sx={{fontSize: 40}}/>
                                </Box>

                                <Typography variant="h4" sx={{fontWeight: 500}}>
                                    Years Excellence
                                </Typography>
                            </Box>

                            <Typography variant="body2">Since 2019</Typography>
                            <Typography variant="body2">Since 2019</Typography>
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
                                gap: 3,
                            }}>
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
                                <CrisisAlertIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>


                            <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
                                Years Excellence
                            </Typography>

                            <Typography variant="body2" component="div">
                                Since 2019
                            </Typography>

                            <Typography variant="body2" component="div">
                                Since 2019
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
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
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
                                gap: 3,
                            }}>
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
                                <CrisisAlertIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>

                            <Typography variant="h4" sx={{fontWeight: 500}}>
                                Years Excellence
                            </Typography>

                            <Typography variant="body2">Since 2019</Typography>
                            <Typography variant="body2">Since 2019</Typography>
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
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
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
                                gap: 3,
                            }}>
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
                                <CrisisAlertIcon color='primary' sx={{fontSize: 40}}/>
                            </Box>

                            <Typography variant="h4" sx={{fontWeight: 500}}>
                                Years Excellence
                            </Typography>

                            <Typography variant="body2">Since 2019</Typography>
                            <Typography variant="body2">Since 2019</Typography>
                        </Box>
                    </Grid>


                </Grid>
            </Box>
        </Box>)
        ;
};

export default About;
