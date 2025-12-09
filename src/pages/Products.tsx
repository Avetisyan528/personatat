import * as React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Short description',
        image: '/path/to/image1.jpg',
        price: '$12.99',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Short description',
        image: '/path/to/image2.jpg',
        price: '$15.99',
    },
    // Add more products here
];

const categories = ['All', 'Coffee', 'Tea', 'Accessories']; // example


const Products: React.FC = () => {
    //const { translations } = useLanguage();
    //const { title, description } = translations.pages.products;

    return (
        <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 6 }}>
            {/* Filter Bar */}
            <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {categories.map((cat) => (

                    <Button key={cat} variant="outlined" color="secondary">
                        {cat}
                    </Button>
                ))}
            </Box>

            {/* Products Grid */}
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid container size={{md: 4}} key={product.id}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.03)' },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography variant="h6" gutterBottom>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {product.description}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Products;
