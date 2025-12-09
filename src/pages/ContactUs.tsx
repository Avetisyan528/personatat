import * as React from 'react';
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import contactHeroImage from '../static/ContactUs.avif';
import { MailOutline, Phone, LocationOn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const { translations } = useLanguage();
    const navigate = useNavigate();
    const theme = useTheme();

    const { hero, form, info } = translations.pages.contact;

    const [formData, setFormData] = React.useState<ContactFormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(form.submissionMessage);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        { id: 1, icon: <MailOutline color="primary" />, title: info.email.title, value: info.email.value },
        { id: 2, icon: <Phone color="primary" />, title: info.phone.title, value: info.phone.value },
        { id: 3, icon: <LocationOn color="primary" />, title: info.address.title, value: info.address.value },
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
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${contactHeroImage})`,
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
                        maxWidth: '800px',
                        mx: 'auto',
                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                        {hero.title}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        {hero.subtitle}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={() => navigate('/about')}
                    >
                        {hero.ctaLabel}
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

            <Box component="section"
                sx={{ py: 8, px: 2, }}>
                <Grid container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>
                    <Grid size={{ xs: 12, md: 6 }}
                        sx={{
                            overflow: 'hidden',
                            borderRadius: '30px',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                        }}
                    >
                        <Paper elevation={0}
                            sx={{
                                p: 4,
                                backgroundColor: theme.palette.primary.main,
                            }}
                        >
                            <Typography variant="h4" component="h2" gutterBottom>{form.title}</Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>{form.description}</Typography>
                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.name}
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required

                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 4,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.email}
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 4,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.subject}
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required

                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 4,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.message}
                                            name="message"
                                            multiline
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required

                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 4,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            sx={{ mt: 2, borderRadius: 20, }}
                                            endIcon={<SendIcon />}
                                        >
                                            {form.buttonLabel}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid size={{ xs: 12, md: 6 }} spacing={6} container>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Grid sx={{
                                pt: 2,
                                border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                                overflow: 'hidden',
                                borderRadius: '30px',
                            }}
                            >
                                <Paper elevation={0}
                                    sx={{
                                        p: 4,
                                        backgroundColor: theme.palette.primary.main,
                                    }}
                                >

                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <Typography variant="h4" component="h3" gutterBottom>{info.title}</Typography>
                                    </Grid>

                                    {contactInfo.map((item) => (

                                        <Grid size={{ xs: 12, md: 12 }}>
                                            <Card key={item.id} elevation={0}
                                                sx={{ mb: 3, backgroundColor: theme.palette.primary.main }}>
                                                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
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
                                                            {item.icon}
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="subtitle1" component="div"
                                                            fontWeight="bold">
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.value}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 12 }}
                            sx={{
                                p: 0,
                                border: `2px solid ${theme.palette.secondary.main}`,
                                borderRadius: '30px',
                                overflow: 'hidden',
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
                            <Paper elevation={0} sx={{ p: 2, }}>
                                <Box
                                    sx={{
                                        p: 0,
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        borderRadius: '30px',
                                        overflow: 'hidden',
                                        backgroundColor: theme.palette.secondary.main,
                                    }}
                                >

                                    <iframe
                                        title="google-maps-location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.2319733951426!2d52.40932567708489!3d55.71136769518157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e01e7a9b98855d%3A0x597d2af98dc95be4!2sKhlebnyy%20Proyezd%2C%2021%2C%20Naberezhnye%20Chelny%2C%20Respublika%20Tatarstan%2C%20Russia%2C%20423814!5e1!3m2!1sen!2sam!4v1765001957326!5m2!1sen!2sam"
                                        width="100%"
                                        style={{ border: 0, aspectRatio: '16 / 9' }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 12 }}
                        sx={{
                            overflow: 'hidden',
                            borderRadius: '30px',
                            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                backgroundColor: theme.palette.primary.main,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <LocalCafeIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />

                            <Typography variant="h4" component="h2" gutterBottom>
                                {form.title}
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 3 }}>
                                {form.description}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 3,
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Products
                                </Button>

                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                    startIcon={<LocalPhoneIcon />}
                                >
                                    Call Us
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </Box>

    );
};

export default Contact;