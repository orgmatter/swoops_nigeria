import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import ImageIcon from '@material-ui/icons/Image';
//import WorkIcon from '@material-ui/icons/Work';
//import SendIcon from '@material-ui/icons/Send';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../page-routes';

class Locations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [
                '#3f51b5', '#5c6bc0', '#673ab7', '#512da8',
                '#9c27b0', '#6a1b9a', '#2196f3', '#0d47a1',
                '#03a9fa', '#01579b', '#006064', '#00bcd4',
                '#004d40', '#009688', '#4caf50', '#1b5e20',
                '#33691e', '#76ff03', '#8bc34a', '#cddc39',
                '#827717', '#aeea00', '#e65100', '#ff6d00',
                '#ff9800', '#ff5722', '#bf360c'
            ]
        }

        this.Locations = this.Locations.bind(this);
        this.fetchAllLocations = this.fetchAllLocations.bind(this);
        this.checkLocations = this.checkLocations.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
    }

    Locations() {
        return this.props.locations;
    }

    Posts() {
        return this.props.posts;
    }

    fetchAllLocations() {
        this.props.actions.fetchLocations();
    }

    componentWillMount() {
        return this.fetchAllLocations();
    }

    checkLocations() {
        const catgProps = this.Locations();
        if (!catgProps) {
            this.fetchAllLocations();
        } else if (this.Locations() && this.Locations().length > 0) {
            return true;
        } else {
            return false;
        }
    }

    shuffleArray(colors) {
        let i = colors.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = colors[i];
            colors[i] = colors[j];
            colors[j] = temp;
        }

        return colors;
    }

    render() {
        const { classes } = this.props;

        {
            this.checkLocations() == true ? 
            this.locationLists = this.Locations().filter(({location}) => location).map(mapLocations => {
                //this.splitName = mapLocations.name.split('');
                //this.firstLetter = this.splitName.shift();
                //console.log(this.Posts());

                this.avatarColor = this.shuffleArray(this.state.colors);
                this.locationWhere = mapLocations.location_where.map(mapLocationWhere => {
                    return mapLocationWhere.location_where + ', ';
                })

                return (
                    <div className='locations-list-cover-div'>
                        <List style={{paddingTop: '0px', paddingBottom: '0px'}} component={Link} to={`${ROUTES.location}${mapLocations.location}`}>
                            <ListItem style={{paddingTop: '16px', paddingBottom: '16px'}} button>
                                <Avatar style={{backgroundColor: this.avatarColor[0]}} className={classes.loCatAvatar}>
                                    {mapLocations.location.split('').shift()}
                                </Avatar>
                                <ListItemText 
                                    primary={mapLocations.location} 
                                    secondary={this.locationWhere} 
                                    className='list-item-text' 
                                />
                                <ListItemSecondaryAction>
                                {mapLocations.no_of_post > 0 ? 
                                    <Chip label={`${mapLocations.no_of_post} Posts`} className={classnames(`new-location-chip ${classes.chip}`)} style={{backgroundColor: 'mediumseagreen', color: 'white'}} />
                                    : null
                                }
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                        <Divider />
                    </div>
                )
            })
         : null}

        return (
            <Card className={classnames(`main-locations-list-cover-div ${classes.mainCategoryCover}`)} style={{height: this.locationLists && this.locationLists.length < 9 ? '660px' : 'auto', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
                {this.locationLists}
            </Card>
        )
    }
}

Locations.propTypes = {
    Locations: propTypes.func.isRequired,
    locations: propTypes.array.isRequired,
    actions: propTypes.object.isRequired,
    fetchAllLocations: propTypes.func,
    fetchLocations: propTypes.func,
    checkLocations: propTypes.func,
}

export default Locations;

