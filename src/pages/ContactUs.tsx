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
// Assuming a different background image for the Contact page
import contactHeroImage from '../static/HomeBackground.webp';
import { MailOutline, Phone, LocationOn } from '@mui/icons-material';

// Define the Contact form state structure
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

    // Destructure contact page translation segments
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
        // **TODO: Implement actual form submission logic (e.g., API call)**
        console.log('Form Submitted:', formData);
        alert(form.submissionMessage); // Display a placeholder alert
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    };

    const contactInfo = [
        { id: 1, icon: <MailOutline color="secondary" />, title: info.email.title, value: info.email.value },
        { id: 2, icon: <Phone color="secondary" />, title: info.phone.title, value: info.phone.value },
        { id: 3, icon: <LocationOn color="secondary" />, title: info.address.title, value: info.address.value },
    ];

    return (
        <Box className="contact-page">
            {/* 1. Contact Hero Section (Styled similarly to Home Hero) */}
            <Box
                component="section"
                className="contact-hero"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%), url(${contactHeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '80px 20px',
                }}
            >
                <Box className="contact-hero__content" sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
                    <Typography variant="overline" className="contact-hero__eyebrow" sx={{ mb: 1, display: 'block' }}>
                        PersonaTat
                    </Typography>
                    <Typography variant="h2" component="h1" className="contact-hero__title" sx={{ mb: 2 }}>
                        {hero.title}
                    </Typography>
                    <Typography variant="h5" className="contact-hero__subtitle" sx={{ mb: 3 }}>
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
            </Box>

            {/* 2. Contact Form and Info Section */}
            <Box component="section" className="contact-form-section" sx={{ py: 8, px: 2, backgroundColor: theme.palette.background.default }}>
                <Grid container spacing={4} maxWidth="lg" sx={{ mx: 'auto' }}>
                    {/* Left Column: Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper elevation={6} sx={{ p: 4 }}>
                            <Typography variant="h4" component="h2" gutterBottom>{form.title}</Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>{form.description}</Typography>
                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.name}
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.email}
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12}}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.subject}
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12}}>
                                        <TextField
                                            fullWidth
                                            label={form.fields.message}
                                            name="message"
                                            multiline
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12}}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            sx={{ mt: 2 }}
                                        >
                                            {form.buttonLabel}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Column: Contact Information Cards */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pt: 2 }}>
                            <Typography variant="h4" component="h3" gutterBottom>{info.title}</Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>{info.description}</Typography>

                            {contactInfo.map((item) => (
                                <Card key={item.id} className="contact-info-card" elevation={4} sx={{ mb: 3 }}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" component="div" fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.value}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;