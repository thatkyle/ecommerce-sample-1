import { h, render, Component } from 'preact';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        width: '100px',
        height: '100px',
        objectFit: 'scale-down'
    },
    p: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));

export default function ProductGridItem(props) {
    const classes = useStyles();
    const product = props.product;
    return (
        <Grid item xs={3}>
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
                <p>
                    ${product.price.toFixed(2)}
                </p>
            </Paper>
        </Grid>
    );
}