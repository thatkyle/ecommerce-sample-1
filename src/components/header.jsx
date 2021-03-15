import { h, render, Component } from 'preact'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '10px'
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%',
    maxWidth: '500px',
    minWidth: '150px'
  }
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <img className={classes.img} src='../images/cross-logo.png' width='200'/>
    </div>
  )}
