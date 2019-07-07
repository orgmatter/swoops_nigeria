import React, { Component } from 'react';
import propTypes from 'prop-types';
import Category from './new-category';
import Post from './new-post';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Visibility from '@material-ui/icons/Visibility';
import { withStyles } from '@material-ui/core/styles';
import { TabContainer } from './tab-container';
import styles from './styles';
import ViewPost from './container';


class Main extends Component {

    state = {
        value: 'one',
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className='admin-tab-cover'>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <Paper className={classes.tabsPaperCover}>
                                <Tabs 
                                value={value} 
                                onChange={this.handleChange}
                                fullWidth
                                >
                                    <Tab value='one' label='Add Category' icon={<PlaylistAdd />} />
                                    <Tab value='two' label='Add Post' icon={<LibraryAdd />} />
                                    <Tab value='three' label='View Posts' icon={<Visibility />} />
                                </Tabs>
                            </Paper>
                            {value === 'one' && 
                            <TabContainer>
                                <Category />
                            </TabContainer>}
                            {value === 'two' && 
                            <TabContainer>
                                <Post />
                            </TabContainer>}
                            {value === 'three' && 
                            <TabContainer>
                                <ViewPost />
                            </TabContainer>}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                </Grid>
            </div>
        )
    };
}

Main.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Main);