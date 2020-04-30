{this.checkPosts() == true ?  
    
    this.postCards = this.posts().map(mapPost => {
      this.urlArray = [];
      mapPost.post_pics.map(mapPics => {
        this.src = `${imgDir + mapPics.pics_name}`;
        //console.log(this.src);

        this.urlArray.push(this.src);
      });
  
          
      return (
        <div>
          <Card className={classes.card} key={mapPost.id}>
            <CardHeader
              className='post-card-header'
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
              subheader={
                <Icon>
                  <DateRange className={classes.leftIcon} style={{fontSize: '0.75rem'}}/>
                  {mapPost.created_at}
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
              <Divider />
              <Typography component='p' className='post-card-content-typo'>
                  {mapPost.body}
              </Typography>
            </CardContent>
            <div>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label='Add to favorites'>
                  <ThumbUp />
                </IconButton>
                <IconButton aria-label='Share'>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label='View details' style={{marginLeft: '10px', fontSize: '0.75rem', width: '120px', border: '1px solid lightgrey', borderRadius: '3px', height: '30px'}}>
                    <Visibility className={classes.leftIcon} />
                    View Details
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
                <Divider />
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

    })  : null}


















    //# sourceMappingURL=main.4cee84cb.js.map