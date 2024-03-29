import { h, render, Component } from 'preact'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:hover': {
      borderBottom: '2px solid black',
      marginBottom: '-2px'
    },
    height: '20vw',
    maxHeight: '270px',
    minHeight: '200px',
  },
  img: {
    width: '90%',
    height: '80%',
    objectFit: 'scale-down'
  },
  p: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
    fontSize: '0.8em',
  },
}))

export default function ProductGridItem(props) {
  const classes = useStyles()
  const product = props.product
  return (
    <Grid item xs={6} md={3} sm={4}>
      <Paper className={classes.paper}>
        <img
          className={classes.img}
          src={product.image}
          alt={product.title}
          title={product.title}
        />
        <p className={classes.p}>
          {product.title}
        </p>
        <p className={classes.p}>
          ${product.price.toFixed(2)}
        </p>
      </Paper>
    </Grid>
  )
}