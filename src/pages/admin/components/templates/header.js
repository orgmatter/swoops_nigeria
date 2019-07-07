import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import styles from './styles';

class Header extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Home />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
          </div>
        )
    }
}

Header.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Header);
