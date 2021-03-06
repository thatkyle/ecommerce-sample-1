import { h, render, Component } from 'preact';
import Grid from '@material-ui/core/Grid';
import ProductGridItem from './product-grid-item'

export function ProductGrid(props) {
    const products = props.products;
    const listItems = products.map((product) =>
        <ProductGridItem product={product}/>
    );
    return (
        <Grid container spacing={3}>
            {listItems}
        </Grid>
    );
}