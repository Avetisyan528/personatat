import * as React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { PRODUCT_IMAGES } from '../constants/productImages';
import { useProducts } from '../context/ProductsContext';
import { useCategories } from '../context/CategoryContext';
import { useParams, Link } from 'react-router-dom';

const Products: React.FC = () => {
    const { categories } = useCategories();
    const { products } = useProducts();
    const { categorySlug } = useParams();

    const filteredProducts = React.useMemo(() => {
        // optional: show all when no slug (keeps All working)
        if (!categorySlug) return products;

        return products.filter(
            (product) => categories.find((c) => c.id === product.categoryId)?.slug === categorySlug
        );
    }, [products, categories, categorySlug]);

    // defensive: ensures no duplicates can ever render
    const uniqueProducts = React.useMemo(() => {
        return Array.from(new Map(filteredProducts.map((p) => [p.id, p])).values());
    }, [filteredProducts]);

    return (
        <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 6 }}>
            <Box sx={{ mb: 4, px: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button component={Link} to={`/products`} variant="outlined" color="secondary">
                    All
                </Button>

                {categories.map((cat) => (
                    <Button
                        key={cat.id}
                        component={Link}
                        to={`/products/${cat.slug}`}
                        variant={categorySlug === cat.slug ? 'contained' : 'outlined'}
                        color="secondary"
                    >
                        {cat.title}
                    </Button>
                ))}
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {uniqueProducts.map((product) => {
                    const productCategorySlug = categories.find((c) => c.id === product.categoryId)?.slug || '';

                    return (
                        <Grid size={{ xs: 5, md: 3 }} key={`${categorySlug ?? 'all'}-${product.id}`}>
                            <Card
                                component={Link}
                                to={`/products/${productCategorySlug}/${product.slug}`}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: (theme) => `0 0 30px ${theme.palette.secondary.main}66`,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    textDecoration: 'none',
                                    '&:hover': { transform: 'scale(1.03)' },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={PRODUCT_IMAGES[product.imageKey]}
                                    alt={product.name}
                                    sx={{
                                        my: 3,
                                        height: 280,
                                        width: '100%',
                                        objectFit: 'contain',
                                        filter: (theme) => `drop-shadow(0 0 10px ${theme.palette.secondary.main})`,
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
