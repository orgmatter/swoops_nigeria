import React, { Component } from 'react';
import propTypes from 'prop-types';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import DateRange from '@material-ui/icons/DateRange';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import Comment from '@material-ui/icons/Comment';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Link, withRouter } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../page-routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CardImage from 'react-grid-gallery';
import ReadMoreReact from 'read-more-react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import SendIcon from '@material-ui/icons/Send';
import LocationOn from '@material-ui/icons/LocationOn';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Chip from '@material-ui/core/Chip';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import green from '@material-ui/core/colors/green';
//import createMuiTheme from '@material-ui/core';
//import MuiThemeProvider from '@material-ui/core';


class Homepage extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
      userNames: '',
      userComments: '',
    }

    this.posts = this.posts.bind(this);
    this.extra = this.extra.bind(this);
    this.fetchAllPost = this.fetchAllPost.bind(this);
    this.createComment = this.createComment.bind(this);
    //this.fetchAllComments = this.fetchAllComments.bind(this);
  }

handleExpandClick = () => {
  this.setState({ expanded: !this.state.expanded });
};

onChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}


posts() {
  const posts = this.props.posts;
  return posts;
}

extra() {
    const extra = this.props.extra;
    return extra;
  }

fetchAllPost() {
  return this.props.actions.fetchPosts();
}

/*fetchAllComments() {
  return this.props.actions.fetchComments();
}*/

createComment(comment, id) {
  return this.props.actions.createUserComments(comment, id);
}

onSubmit = (e) => {
  e.preventDefault();
  const {id} = e.target;
  const comment = new FormData(e.target);
  
  this.createComment(comment, id);
  e.target.reset();
  this.componentWillMount();
  
}




componentWillMount() {
  return this.fetchAllPost();
  //this.fetchAllComments();
}

checkPost = () => {
if (this.posts().length > 0) {
  return true;
} 
  return false;
}






  

render(){

  const { classes } = this.props;
  const imgDir = 'https://api.swoops.com.ng/api/posts/create/img/';
  const theme = createMuiTheme({
      palette: {
          primary: green
      }
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  this.newExtra = [];
  this.newEachExtra = [];
 
  this.extra().map(mapExtra => {
    this.newExtra.push(mapExtra.category_name)
  })
  this.uniqExtra = this.newExtra.filter((v,i,a) => a.indexOf(v) === i);
  
  this.eachExtra = this.uniqExtra.forEach(element => {
    this.extraObj = {
      category_name: element
    }
    this.newEachExtra.push(this.extraObj);
  })
  //console.log(this.newEachExtra);

  {this.checkPost() == true ? 
    
    this.mainPostCards = this.newEachExtra.map(mapMainCategory => {
        //console.log(mapMainCategory.category_name);

        this.postCards = this.posts().filter(({category_name}) => category_name == mapMainCategory.category_name).slice(0,1).map(mapPost => {
            this.imageData = [];
            mapPost.post_pics.map(mapPics => {
        
              this.picsData = {
                src: `${imgDir + mapPics.pics_name}`,
                thumbnail: `${imgDir + mapPics.pics_name}`,
                thumbnailWidth: `${mapPics.thumb_width}`,
                thumbnailHeight: `${mapPics.thumb_height}`,
                isSelected: false,
                caption: `${mapPics.product_name}`
    
              }
              this.imageData.push(this.picsData);
              //console.log(this.picsData)
            });

            this.imgGrid = this.imageData.map(mapImgData => {
              return (
                  <GridListTile key={mapImgData.img} cols={mapImgData.cols || 1} style={{width: '50%', height: 'auto'}}>
                    <img src={mapImgData.img} alt={mapImgData.caption} style={{width: '100%'}} />
                  </GridListTile>
              )
            })

            this.postDate = new Date(mapPost.created_at);
            this.postDate = this.postDate.toDateString();
    
    
            {mapPost.post_comments.length > 0 ?
              this.commentList = mapPost.post_comments.map(mapComments => {
                return (
                  <div className={classes.listRoot} key={mapComments.id}>
                    <List style={{paddingTop: '0px', paddingBottom: '0px'}} >
                      <ListItem style={{paddingTop: '3px', paddingBottom: '3px'}}>
                        <Avatar>
                          <AccountCircle />
                        </Avatar>
                        <Chip label={<ListItemText primary={mapComments.userNames} secondary={mapComments.userComments} style={{whiteSpace: 'wrap'}} className='comment-list-text' />} className={classnames(`comment-chip ${classes.commentChip}`)} />
                      </ListItem>
                    </List>
                  </div>
                )
              }) : 
            this.commentList = null}
        
            
    
            this.totalCategoryName = this.posts().filter(({category_name}) => category_name === mapMainCategory.category_name).length;
            this.categoryNameMinus = this.totalCategoryName - 1;
            this.horizontalCards = this.posts().filter(({category_name}) => category_name === mapMainCategory.category_name).slice(-this.categoryNameMinus).map(mapCategoryName => {
            this.horizontalCardImg = mapCategoryName.post_pics.slice(1).map(mapCategoryNamePics => {
                this.categoryNamePics = `${imgDir + mapCategoryNamePics.pics_name}`;
            })
            
            
            return (
                <Card className={classnames(`horizontal-card-body-item ${mapPost.post_status == 'sponsored' ? classes.whiteCard : classes.card}`)}>
                  <CardMedia
                    className={classes.media}
                    image={this.categoryNamePics}
                    title={mapCategoryName.title}
                    component={Link} to={`${ROUTES.page}${mapPost.category_name}/${mapCategoryName.id}`}
                  />
                  <CardContent>
                      <Typography gutterBottom variant='headline' component='p' className='horizontal-card-title' component={Link} to={`${ROUTES.page}${mapPost.category_name}/${mapCategoryName.id}`}>
                          {mapCategoryName.title}
                      </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size='small' color='primary' style={{textTransform: 'capitalize'}} className='h-card-more-btn' component={Link} to={`${ROUTES.page}${mapPost.category_name}/${mapCategoryName.id}`}>
                      <Visibility className={classes.leftIcon} style={{fontSize: '18px'}}/> 
                      View
                  </Button>
    
                  </CardActions>
                </Card>
            )
        
        })
    
        
            return (
              <div style={{paddingBottom: '10px'}} key={mapPost.id}>
                <Card className={classnames(`post-card-cover ${mapPost.post_status == 'sponsored' ? classes.whiteCard : classes.card}`)}>
                  <CardHeader
                    className='post-card-header'
                    avatar={
                      <Avatar aria-label='Author' src={`${imgDir}austine_pics.jpeg`} className={classes.authorAvatar} />
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={
                      <Link to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`} className='post-title'>
                        {mapPost.title}
                      </Link>
                    }
                    subheader={
                      <Icon>
                        <DateRange className={classes.titleLeftIcon} style={{fontSize: '0.75rem'}}/>
                        {this.postDate} &nbsp; |&nbsp;
                        <LocationOn className={classes.titleLeftIcon} style={{fontSize: '0.75rem'}}/>
                        {mapPost.location} <br />
                        <ViewQuilt className={classes.titleLeftIcon} style={{fontSize: '0.75rem'}}/>
                        {mapPost.category_name}
                      </Icon>
                    }
                  />
                  <CardContent className='post-card-content'>
                    <Link to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`}>
                        <ReadMoreReact text={mapPost.body} max={200} style={{color: 'blue'}} />
                    </Link>
                  </CardContent>
                  {this.imageData.length > 2 ?
                    <div>
                      <CardImage images={this.imageData} className={classes.cardMedia} backdropClosesModal={true} maxRows={2}/>
                      <div style={{clear: 'both'}}></div>
                  </div>
                    /*<div className={classes.imgGridRoot}>
                      <GridList cellHeight={180} className={classes.imgGridList} cols={3}>      
                      {this.imageData.map(mapImgData => {
                        return (
                            <GridListTile key={mapImgData.img} cols={mapImgData.cols || 1} style={{width: '50%', height: '170px'}} >
                              <Link to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`}>
                                <img src={mapImgData.src} alt={mapImgData.caption} style={{width: '100%', height: '100%'}} />
                              </Link>
                            </GridListTile>
                        )
                      })}
                      </GridList>
                    </div>*/
                  : null}
                  {this.imageData.length === 2 ?
                    <div className={classes.imgGridRoot}>
                      <GridList cellHeight={180} className={classes.imgGridList} cols={3}>      
                        {this.imageData.map(mapImgData => {
                          return (
                              <GridListTile key={mapImgData.img} cols={1 || 1} style={{width: '50%', height: 'auto'}}>
                                <Link to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`}>
                                  <img src={mapImgData.src} alt={mapImgData.caption} style={{width: '100%'}} />
                                </Link>
                              </GridListTile>
                          )
                        })}
                      </GridList>
                    </div>
                  : null}
                  {this.imageData.length === 1 ?
                    <div className={classes.imgGridRoot}>
                      <GridList cellHeight={180} className={classes.imgGridList} cols={3}>      
                        {this.imageData.map(mapImgData => {
                          return (
                              <GridListTile key={mapImgData.img} cols={1 || 1} style={{width: '100%', height: 'auto'}}>
                                <Link to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`}>
                                  <img src={mapImgData.src} alt={mapImgData.caption} style={{width: '100%'}} />
                                </Link>
                              </GridListTile>
                          )
                        })}
                      </GridList>
                    </div>
                  : null}

                  {/*<div>
                    <CardImage images={this.imageData} className={classes.cardMedia} backdropClosesModal={true} maxRows={2}/>
                    <div style={{clear: 'both'}}></div>
                  </div>*/}
                  <div>
                    <CardActions className={classes.actions} disableActionSpacing style={{borderBottom: '1px solid lightgrey', paddingTop: '10px', paddingBottom: '2px', height: '40px'}}>
                      <Button className='post-action-tabs'><ThumbUp style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                      <Button className='post-action-tabs'><ShareIcon style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                      <Button className='post-action-tabs' component={Link}  to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`}><Visibility style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                      {/*<Tab icon={<ShareIcon style={{fontSize: '1.2rem'}} className='post-actions-icons' />} label='' className='post-action-tabs' />
                      <Tab icon={<Visibility style={{fontSize: '1.2rem'}} className='post-actions-icons' />} component={Link}  to={`${ROUTES.page}${mapPost.category_name}/${mapPost.id}`} label='' className='post-action-tabs' />*/}
    
                    </CardActions>
                  </div>
                  <div>
                  <CardActions className={classes.actions} disableActionSpacing>
                      <Icon className='comment-header-text' style={{width: 'auto', overflow: 'visible', height: '48px', paddingLeft: '10px'}}>
                        Comments
                        <MuiThemeProvider theme={theme}>
                            <Badge className={classnames(`post-badge ${classes.badgeMargin}`)} badgeContent={this.commentList ? this.commentList.length: 0} color='primary'>
                                <Comment className={classes.rightIcon} />
                            </Badge>
                        </MuiThemeProvider>
                      </Icon>
                      <IconButton
                        className={classnames(classes.expand, {
                          [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label='Show more'
                        id={`show-more${mapPost.id}`}
                      >
                        <ExpandMoreIcon className='post-icons' />
                      </IconButton>
                    </CardActions>
                  </div>
                  <Collapse in={this.state.expanded} timeout='auto' unmountOnExit id={`collapse${mapPost.id}`}>
                  <CardContent style={{borderTop: '1px solid lightgrey', paddingTop: '0px', paddingBottom: '0px'}}>
                      {/*<Icon className='comment-header-text'>
                        Comments
                        <Badge className={classes.badgeMargin} badgeContent={this.commentList ? this.commentList.length: 0} color='primary'>
                          <Comment className={classes.rightIcon} />
                        </Badge>
                      </Icon>*/}
                    </CardContent>
                    <CardContent className={this.commentList && this.commentList.length >= 4 ? classnames(`comment-card-content`): classnames(`comment-height`)}>
                      {this.commentList}
                    </CardContent>
                    <CardContent style={{borderTop: '1px solid lightgrey'}}>
                      <form 
                        className={classes.postFormContainer}
                        onSubmit={this.onSubmit}
                        id={mapPost.id}
                      >
                        <TextField
                          className='postInputs'
                          id='input-with-icon-textfield'
                          placeholder='Enter Your Name'
                          name='userNames'
                          value={this.state.name}
                          onChange={this.onChange}
                          fullWidth
                          margin='normal'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className='postInputs'
                          id='input-with-icon-textfield'
                          placeholder='Your comments here'
                          multiline
                          name='userComments'
                          value={this.state.name}
                          onChange={this.onChange}
                          fullWidth
                          margin='normal'
                        />
                        <Button variant='raised' type='submit' fullWidth className='comment-btn' >
                          Submit
                          <SendIcon className={classes.rightIcon} />
                        </Button>
                      </form>
                    </CardContent>
                  </Collapse>
                </Card>
                
                <Card className={`horizontal-card-cover`}>
                    <div className={`horizontal-card-header-flex`}>
                        <div className='related-post-header-div'>Related Post</div>
                        <div className='related-post-header-div'><Link to={`${ROUTES.page}${mapPost.category_name}`}>More</Link></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <div className={`horizontal-card-body-flex`}>
                        {this.horizontalCards}
                      </div>
                    </div>
                </Card>
               
              </div>
            )
    
    
          })

          return this.postCards;
       
    }): null}

  return(
    <div className='main-post-card-cover'>
      {this.mainPostCards}
    </div>
  )
}

}

Homepage.propTypes = {
  posts: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  classes: propTypes.object.isRequired,
}

export default withRouter(Homepage);
