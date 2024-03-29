import { h, render, Component } from 'preact'
import { useState } from 'preact/hooks'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import breakpoints from '../data/css-breakpoints'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#FFF',
    marginBottom: '10px',
    color: '#000',
    borderRadius: '10px',
    width: '85%',
    display: 'flex',
    marginLeft: '10px'
  },
  grow: {
    maxWidth: breakpoints.xl,
    margin: 'auto',
    display: 'flex',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    display: 'flex',
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    display: 'flex',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
    width: '40vw', 
    maxWidth: '850px',
    display: 'flex',
  },
}))

export default function SearchBar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleShoppingCart = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              autoFocus={true}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <AccountCircle 
          fontSize='large'
        />
      </IconButton>
      <IconButton
        edge='end'
        aria-label='shopping cart'
        aria-haspopup='true'
        onClick={handleShoppingCart}
        color='inherit'
      >
        <ShoppingCartIcon 
          fontSize='large'
        />
      </IconButton>
    </div>
  )
}
