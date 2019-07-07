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
import Divider from '@material-ui/core/Divider';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Routes as ROUTES } from '../../../../../page-routes';
import { withRouter } from 'react-router-dom'

//import { withStyles } from '@material-ui/core/styles';
//import styles from '../../page/styles';

import SlideShow from 'react-image-show';
import { Redirect } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import SendIcon from '@material-ui/icons/Send';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Chip from '@material-ui/core/Chip';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import Comment from '@material-ui/icons/Comment';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Sticky from 'react-sticky-el';
import ReadMoreReact from 'read-more-react';





class PageParam extends Component {
  constructor(props){
    super(props);

    this.state = {
        expanded: false,
        userNames: '',
        userComments: '',
    }

    this.posts = this.posts.bind(this);
    this.fetchAPost = this.fetchAPost.bind(this);
    //this.refresh = this.refresh.bind(this);
    this.id = this.id.bind(this);
    //this.page = this.page.bind(this);
    //this.url = this.url.bind(this);
    this.fetchStatus = this.fetchStatus.bind(this);

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
  

  
id() {
const id = parseInt(this.props.match.params.id);
return id;
}

fetchAPost(id) {
return this.props.actions.fetchOnePost(id);
}

createComment(comment, id) {
return this.props.actions.createUserComments(comment, id);
}

onSubmit = (e) => {
e.preventDefault();
const {id} = e.target;
const comment = new FormData(e.target);

this.createComment(comment, id);
this.componentWillMount();
e.target.reset();
}


componentWillMount() {
return this.fetchAPost(this.id());
}

posts() {
const posts = this.props.singlePosts;
return posts;
}


fetchStatus() {
const status = this.props.fetchSingleStatus;
return status;
}

checkPosts = () => {
const id = this.id();
if (!this.posts()) {
    this.fetchAPost(id);
} else if (this.posts() && this.posts().length > 0) {
    return true;
} else {
    return false;
}
}


  render(){
  const { classes } = this.props;
  const imgDir = 'https://api.swoops.com.ng/api/posts/create/img/';
  //console.log(this.props.match.params.id);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  {this.checkPosts() == true ? 
    

    this.postCards = this.posts().map(mapPost => {
        this.urlArray = [];
        mapPost.post_pics.map(mapPics => {
          this.src = `${imgDir + mapPics.pics_name}`;
          //console.log(this.src);
  
          this.urlArray.push(this.src);
        });

        this.postDate = new Date(mapPost.created_at).toDateString();


      {mapPost.post_comments.length > 0 ?
        this.commentList = mapPost.post_comments.map(mapComments => {
          return (
            <div className={classes.listRoot}>
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
  
      return (
        <div style={{paddingBottom: '25px'}}>
          <Card className={classnames(`post-card-cover ${mapPost.post_status == 'sponsored' ? classes.whiteCard : classes.card}`)} key={mapPost.id} style={{borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
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
              <i className='post-title' style={{fontStyle: 'normal'}}>
                {mapPost.title}
              </i>}
              subheader={
                <Icon>
                  <DateRange className={classes.leftIcon} style={{fontSize: '0.75rem'}}/>
                  {this.postDate}
                </Icon>
              }
            />
            
                <CardContent className='post-card-content'>
                    <SlideShow
                        images={this.urlArray}
                        
                        width="920"
                        imagesWidth="800"
                        imagesHeight="450px"
                        imagesHeightMobile="56vw"
                        thumbnailsWidth="920px"
                        thumbnailsHeight="12vw"
                        indicators fixedImagesHeight
                    />
                </CardContent>
            
            <CardContent className='post-card-content' style={{paddingTop: '4px', paddingBottom: '4px'}}>
              <ReadMoreReact text={mapPost.body} max={200} />
            </CardContent>
            {mapPost.post_status == 'sponsored' ?
            <CardContent className='card-content-body' style={{paddingTop: '4px', paddingBottom: '4px'}}>
              <div className={classes.tableRoot}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} component='th' style={{fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center', color: 'rgb(100,100,100)', borderBottom: '1px solid rgb(150,150,150)'}}>Extras</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Available</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>{mapPost.available}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Quantity</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>{mapPost.quantity}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Price Quotes</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>{mapPost.price}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Location</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>{mapPost.location}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Delivery Service</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>{mapPost.delivery}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' style={{borderBottom: 'none', fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>Contact</TableCell>
                            <TableCell style={{borderBottom: 'none', borderLeft: '1px solid rgb(140,140,140)', fontWeight: 'bold', color: 'rgb(100,100,100)'}}>xxxx-xxxx-xxxx</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
              </div>
            </CardContent>
            : null }
            <div>
              <CardActions className={classes.actions} disableActionSpacing style={{borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: '5px', paddingBottom: '2px', height: '50px'}}>
              <Button className='post-action-tabs'><ThumbUp style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                      <Button className='post-action-tabs'><ShareIcon style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                      <Button className='post-action-tabs'><Visibility style={{fontSize: '1.2rem'}} className='post-actions-icons' />  </Button>
                {/*<Tab icon={<ThumbUp style={{fontSize: '1.2rem'}} />} label='' className='post-action-tabs' />
                <Tab icon={<ShareIcon style={{fontSize: '1.2rem'}} />} label='' className='post-action-tabs' />
                <Tab 
                    icon={
                        <Visibility style={{fontSize: '1.2rem'}} />
                    } 
                    label='' 
                    className='post-action-tabs' 
                  />*/}

              </CardActions>
            </div>
            <div>
            <CardActions className={classes.actions} disableActionSpacing>
                <Icon className='comment-header-text' style={{width: 'auto', overflow: 'visible', height: '48px', paddingLeft: '10px'}}>
                  Comments
                  <Badge className={classnames(`post-badge ${classes.badgeMargin}`)} badgeContent={this.commentList ? this.commentList.length: 0} color='primary'>
                    <Comment className={classes.rightIcon} />
                  </Badge>
                </Icon>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label='Show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </div>
            <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
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
                  <Button variant='raised' color='primary' type='submit' fullWidth className='comment-btn'>
                    Submit
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </form>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )


    }) : null}


    return(
      <div className='main-post-card-cover'>
        {this.postCards}
      </div>
    )
  }


}

PageParam.propTypes = {
  posts: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  checkPosts: propTypes.func.isRequired,
  fetchAPost: propTypes.func.isRequired,
}

export default withRouter(PageParam);