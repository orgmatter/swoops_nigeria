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
import Badge from '@material-ui/core/Badge';

import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../page-routes';
import $ from 'jquery';

class Categories extends Component {
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

        this.Categories = this.Categories.bind(this);
        this.fetchAllCategories = this.fetchAllCategories.bind(this);
        this.checkCategories = this.checkCategories.bind(this);
        this.listCover = React.createRef();
        this.shuffleArray = this.shuffleArray.bind(this);
    }

    Categories() {
        return this.props.categories;
    }

    Posts() {
        return this.props.posts;
    }

    fetchAllCategories() {
        this.props.actions.fetchCategories();
    }

    componentWillMount() {
        return this.fetchAllCategories();
    }

    checkCategories() {
        const catgProps = this.Categories();
        if (!catgProps) {
            this.fetchAllCategories();
        } else if (this.Categories() && this.Categories().length > 0) {
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
        const imgDir = 'https://api.swoops.com.ng/api/posts/create/img/';

        {
            this.checkCategories() == true ? 
            this.categoryLists = this.Categories().filter(({category_name}) => category_name).map(mapCategories => {
                //this.splitName = mapCategories.name.split('');
                //this.firstLetter = this.splitName.shift();
                //console.log(this.Posts());
                this.newDate = [];

                this.postsDates = mapCategories.post_dates.filter(({category_id}) => category_id = mapCategories.category_id).map(mapPostDates => {
                    this.postDate = mapPostDates.date;
                    this.postDate = new Date(this.postDate);
                    this.todayDate = new Date();
                    this.postDate = this.postDate.getTime();
                    this.todayDate = this.todayDate.getTime();

                    this.dateDiff = this.todayDate - this.postDate;
                    this.dateDiff = this.dateDiff/(1000*60*60)/24;
                    this.dateDiff = Math.ceil(this.dateDiff);
                    this.newDate.push(this.dateDiff);
                    //return this.newDate;

                    this.postTitle = mapPostDates.title;
                    
                    //console.log('postDate: ' + this.postDate2 + 'todayDate: ' + this.todayDate2 + ' diffDate:' + this.dateDiff + ' category_id:' + mapPostDates.category_id + ' dateDiffObj:' + this.newDate);
                })

                this.avatarColor = this.shuffleArray(this.state.colors);

                this.postNewDate = [];
                this.newPostDate = this.newDate.find(function(element){ return element < 5 });
                this.postNewDate.push(this.newPostDate);
                //console.log(this.postNewDate + ' :' + this.newDate);
                return (
                    <div className='categories-list-cover-div'>
                        <List style={{paddingTop: '0px', paddingBottom: '0px'}} component={Link} to={`${ROUTES.page}${mapCategories.category_name}`}>
                            <ListItem style={{paddingTop: '16px', paddingBottom: '16px'}} button>
                                    <Avatar style={{backgroundColor: 'white'}}  className={classes.loCatAvatar}>
                                        <img src={`${imgDir}${mapCategories.post_pics_name}`} style={{width: '100%', transform: 'scale(1.37)'}} />
                                    </Avatar>
                                    {/*<Badge badgeContent={mapCategories.category_name.split('').shift()} style={{backgroundColor: this.avatarColor[0]}} className={classes.avatarBadge} />*/}
                                <ListItemText 
                                    primary={mapCategories.category_name} 
                                    secondary={this.postTitle} 
                                    className='list-item-text' 
                                />
                                <ListItemSecondaryAction style={{paddingTop: '5px', paddingBottom: '5px'}}>
                                {this.postNewDate && this.newPostDate < 5 ?
                                    <Chip label={`${this.postNewDate.length}+  new`} className={classnames(`new-category-chip ${classes.chip}`)} style={{backgroundColor: 'mediumseagreen', color: 'white'}} />
                                    : null
                                }
                                {this.postNewDate && this.newPostDate < 5 ?
                                    <br />
                                    : null
                                }
                                {mapCategories.no_of_post > 0 ? 
                                    <Chip label={`${mapCategories.no_of_post} Posts`} className={classnames(`new-category-chip ${classes.chip}`)} style={{backgroundColor: 'rgb(230,230,230)', color: '#343e41'}} />
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
            <Card className={classnames(`main-categories-list-cover-div ${classes.mainCategoryCover}`)} ref={this.listCover} style={{height: this.categoryLists && this.categoryLists.length < 9 ? '660px' : 'auto', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
                {this.categoryLists}
            </Card>
        )
    }
}

Categories.propTypes = {
    Categories: propTypes.func,
    categories: propTypes.array.isRequired,
    actions: propTypes.object.isRequired,
    fetchAllCategories: propTypes.func.isRequired,
    checkCategories: propTypes.func,
}

export default Categories;

