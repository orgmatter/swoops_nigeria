import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import styles from '../../main/page/styles';


class AppDrawer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        }
    }


render () {

    const { classes } = this.props;

    const sideList = (
        <div className={classes.drawerList}>
          <List>
              <ListItem>
                  <Avatar>
                      <ImageIcon />
                  </Avatar>
                  <ListItemText label='hello' secondary='hello' />
                  <ListItemSecondaryAction>
                      <IconButton>
                          <WorkIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                  <Avatar>
                      <ImageIcon />
                  </Avatar>
                  <ListItemText label='hello' secondary='hello' />
                  <ListItemSecondaryAction>
                      <IconButton>
                          <WorkIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                  <Avatar>
                      <ImageIcon />
                  </Avatar>
                  <ListItemText label='hello' secondary='hello' />
                  <ListItemSecondaryAction>
                      <IconButton>
                          <WorkIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem>
                  <Avatar>
                      <ImageIcon />
                  </Avatar>
                  <ListItemText label='hello' secondary='hello' />
                  <ListItemSecondaryAction>
                      <IconButton>
                          <WorkIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                  <Avatar>
                      <ImageIcon />
                  </Avatar>
                  <ListItemText label='hello' secondary='hello' />
                  <ListItemSecondaryAction>
                      <IconButton>
                          <WorkIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
          </List>
        </div>
      );
  

    return (

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
            >
                {sideList}
            </div>
        </Drawer>
    )

}
}

export default withStyles(styles)(AppDrawer);