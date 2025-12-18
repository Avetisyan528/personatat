import * as React from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
//import {useLanguage} from "../context/LanguageContext";
import { Link } from "react-router-dom";
import {PRODUCT_IMAGES} from "../constants/productImages";
import { useProducts } from '../context/ProductsContext';
import {useCategories} from "../context/CategoryContext";

const Products: React.FC = () => {
    //const { language } = useLanguage();
    const {categories} = useCategories();
    const { products } = useProducts();

    return (
        <Box sx={{maxWidth: 'lg', mx: 'auto', py: 6}}>

            <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                    <Button
                        key={cat.id}
                        component={Link}
                        to={`/products/${cat.slug}`}
                        variant="outlined"
                        color="secondary"
                    >
                        {cat.title}
                    </Button>
                ))}
            </Box>

            <Grid container spacing={4}>
                {products.map((product) => {
                    const categorySlug = categories.find(c => c.id === product.categoryId)?.slug || '';

                    return (
                        <Grid size={{md: 4}} key={product.id}>
                            <Card
                                component={Link}
                                to={`/products/${categorySlug}/${product.slug}`}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    textDecoration: 'none', // remove underline
                                    '&:hover': { transform: 'scale(1.03)' },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={PRODUCT_IMAGES[product.imageKey]}
                                    alt={product.name}
                                    sx={{
                                        objectFit: 'cover',
                                        borderRadius: 3,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

        </Box>
    );
};

export default Products;
