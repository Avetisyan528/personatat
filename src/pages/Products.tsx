import * as React from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
//import {useLanguage} from "../context/LanguageContext";
import {Link} from "react-router-dom";
import {PRODUCT_IMAGES} from "../constants/productImages";
import {useProducts} from '../context/ProductsContext';
import {useCategories} from "../context/CategoryContext";

const Products: React.FC = () => {
    //const {language} = useLanguage();
    const {categories} = useCategories();
    const {products} = useProducts();

    return (
        <Box sx={{maxWidth: 'lg', mx: 'auto', py: 6}}>

            <Box sx={{mb: 4, px: 4, display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                <Button
                    component={Link}
                    to={`/products`}
                    variant="contained"
                    color="secondary"
                >
                    All
                </Button>
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
            <Grid container spacing={4} justifyContent="center">
                {products.map((product) => {
                    const categorySlug =
                        categories.find(c => c.id === product.categoryId)?.slug || '';

                    return (
                        <Grid size={{ xs: 5, md: 3 }} key={product.id}>
                            <Card
                                component={Link}
                                to={`/products/${categorySlug}/${product.slug}`}
                                sx={{
                                    borderRadius: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textDecoration: 'none',
                                    overflow: 'hidden',

                                    /* === MORE TRANSPARENT GLASS === */
                                    background: `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.14),
                rgba(255,255,255,0.04)
              )
            `,

                                    backdropFilter: 'blur(26px) saturate(190%)',
                                    WebkitBackdropFilter: 'blur(26px) saturate(190%)',

                                    border: '1px solid rgba(255,255,255,0.18)',

                                    boxShadow: (theme) => `
              0 12px 40px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.28),
              0 0 35px ${theme.palette.secondary.main}33
            `,

                                    transition: 'all 0.25s ease',

                                    '&:hover': {
                                        transform: 'scale(1.04)',
                                        backdropFilter: 'blur(30px) saturate(210%)',
                                        WebkitBackdropFilter: 'blur(30px) saturate(210%)',
                                        boxShadow: (theme) => `
                0 18px 55px rgba(0,0,0,0.28),
                inset 0 1px 0 rgba(255,255,255,0.35),
                0 0 45px ${theme.palette.secondary.main}55
              `,
                                    },

                                    /* === FALLBACK === */
                                    '@supports not (backdrop-filter: blur(10px))': {
                                        background: 'rgba(255,255,255,0.85)',
                                    },
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
                                        filter: (theme) =>
                                            `drop-shadow(0 0 16px ${theme.palette.secondary.main})`,
                                    }}
                                />

                                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
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
