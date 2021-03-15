import { h, render, Component } from 'preact'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(5),
    },
    color: 'black',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  link: {
    '&:hover': {
        borderBottom: '2px solid black',
        paddingBottom: '3px',
        textDecoration: 'none'
      },
  }
}))

export default function Menu() {
  const classes = useStyles()
  const preventDefault = (event) => event.preventDefault()

  return (
    <Typography className={classes.root}>
      <Link className={classes.link} href='#' onClick={preventDefault} color='inherit'>
        CLOTHING
      </Link>
      <Link className={classes.link} href='#' onClick={preventDefault} color='inherit'>
        JEWELRY
      </Link>
      <Link className={classes.link} href='#' onClick={preventDefault} color='inherit'>
        ACCESSORIES
      </Link>
    </Typography>
  )
}