import React, { Component } from 'react';
import propTypes from 'prop-types';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
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

import CardMedia from 'react-grid-gallery';


class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [],
      expanded: false
    }

  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };


  /*loadPosts = () => {
    return this.props.fetchPosts();
  }

  componentWillMount() {
    this.loadPosts();
  }*/


checkPost = (classes, posts, actions) => {
  //const { classes, posts, actions } = this.props;
  if (posts.length == 0) {
    actions.fetchPosts();
  } else if (posts.length > 0 ) {
    return true
  }

}






  

render(){

  const { classes, posts, actions } = this.props;
  const imgDir = 'https://api.swoops.com.ng/api/posts/create/img/';
 

  {this.checkPost(classes, posts, actions) == true ? 
    

      this.postCards = posts.filter(({category_name}) => category_name == 'Fashion').slice(0,1).map(mapPost => {
        this.imageData = [];
        mapPost.post_pics.map(mapPics => {
    
          this.picsData = {
            src: `${imgDir + mapPics.pics_name}`,
            thumbnail: `${imgDir + mapPics.pics_name}`,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: '',
            caption: `${mapPost.title}`
          }
          this.imageData.push(this.picsData);
          console.log(this.picsData)
        });
    
    
    
        return (
          <div>{console.log(classes)}
            <Card className={classes.card} key={mapPost.id}>
              <CardHeader
                avatar={
                  <Avatar aria-label='Author' className={classes.avatar}>
                    A
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={mapPost.title}
                subheader={mapPost.created_at}
              />
              <CardContent>
                <Typography component='p'>
                    {mapPost.body}
                </Typography>
              </CardContent>
              <div>
                <CardMedia images={this.imageData} className={classes.cardMedia}/>
                <div style={{clear: 'both'}}></div>
              </div>
              <div>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label='Add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='Share'>
                    <ShareIcon />
                  </IconButton>
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
                <CardContent>
                  <Typography paragraph variant='body2'>
                    Method:
                  </Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        )
      }) : null}

  return(
    <div>
      {this.postCards}
    </div>
  )
}

}

Posts.propTypes = {
  posts: propTypes.array.isRequired,
}

export default (Posts);
