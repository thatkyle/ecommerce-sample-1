import { h, render, Component } from 'preact';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px"
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <img className={classes.img} src="../images/cross-logo.png" width="200"/>
    </div>
  );
}
