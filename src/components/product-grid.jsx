import { h, render, Component } from 'preact'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ProductGridItem from './product-grid-item'
import breakpoints from '../data/css-breakpoints'

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: breakpoints.xl,
    margin: 'auto',
  }
}))

export function ProductGrid(props) {
  const classes = useStyles()
  const products = props.products
  const listItems = products.map((product) =>
    <ProductGridItem product={product} />
  )
  return (
    <Grid container spacing={3} className={classes.grid}>
      {listItems}
    </Grid>
  )
}