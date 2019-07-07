import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames'
//import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Subject from '@material-ui/icons/Subject';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import Web from '@material-ui/icons/Web';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import styles from '../styles';

import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../page-routes';
import Sticky from 'react-sticky-el';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Comment from '@material-ui/icons/Comment';
import Badge from '@material-ui/core/Badge';
import DateRange from '@material-ui/icons/DateRange';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Drawer from '@material-ui/core/Drawer';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import ContactMail from '@material-ui/icons/ContactMail';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
import Lock from '@material-ui/icons/Lock';
import Store from '@material-ui/icons/Store';
import Info from '@material-ui/icons/Info';
import Edit from '@material-ui/icons/Edit';
import Book from '@material-ui/icons/Book';
import ViewList from '@material-ui/icons/ViewList';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import CallMade from '@material-ui/icons/CallMade';






class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      search: '',
      display: 'none',
      checkState: '',
      displayList: 'none',
      top: false,
      left: false,
      bottom: false,
      right: false,
      headerText: this.checkLocationParams(),
      bottomNavClass: this.changeBottomNavClass(),
      bottomNavSearchBtn: 'headerTab'
    }

    this.chkbox = React.createRef();
    this.searchInput = React.createRef();
  }
  
  checkLocationParams = () => {
    this.locPath = window.location.pathname;
    this.locPathPop = window.location.pathname.split('/').pop();
    this.siteName = 'swoops';
    this.locPathParse = parseInt(this.locPathPop);
      if(this.locPath == '/') {
         return this.siteName;
       } else if(isNaN(this.locPathParse) == true) {
         return this.locPathPop;
      } else if(isNaN(this.locPathParse) == false) {
        return this.siteName;
     }
  }

  changeBottomNavClass = () => {
    this.locPath = window.location.pathname;
    this.locPathSplit = window.location.pathname.split('/');
    this.locationName = 'swoops';
      if(this.locPath == '/') {
         return this.locationName;
       } else {
        return this.locPathSplit;
      }
  }


  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSearchClick = () => {
    this.chkbox.current.click();
    this.setState({
      bottomNavSearchBtn: 'headerTab2'
    })
    //this.refs.searchInput;
  }


  onChkChange = (e) => {
    //alert(e.target.checked);
    if (e.target.checked){
    this.setState({
      display: 'block',
      displayList: 'block',
    })
  } else {
    this.setState({
      display: 'none',
      displayList: 'none',
    })
  }
  }

  getCatgActions = () => {
    return this.props.catgActions.fetchMainCategories();
  }

  getMainCategory = () => {
    return this.props.mainCategories;
  }

  onHomeInputKeyup = () => {
    const query = this.state.search;
    const empty = '';
    if (query !== empty){

    this.props.searchActions.fetchQueryPosts(query);
    this.props.queryPosts;
    }

  }

  onCatgInputKeyup = () => {
    const query = this.state.search;
    const empty = '';
    if (query !== empty){

    this.props.searchActions.fetchQueryCatg(query);
    this.props.queryCategories;
    
    }

  }

  onLocInputKeyup = () => {
    const query = this.state.search;
    const empty = '';
    if (query !== empty){

    this.props.searchActions.fetchQueryLoc(query);
    this.props.queryLocations;
    }

  }


  toggleDrawer = (side, open) => () => {
    this.setState({
        [side]: open,
    });
};

  onBtnClick = (e) => {
    e.target.style.color = '#fb8c00';
  }

  onBottomNavClick = (e) => {
    const {label} = e.target;
    this.setState({
      headerText: label
    })
  }

  componentWillMount() {
    this.getCatgActions();
  }

  componentDidMount() {
    this.onBtnClick;
  }


  render(){

    const { classes } = this.props;

    const queryPosts = this.props.queryPosts;
    const queryPostsLength = this.props.queryPosts.length;

    const queryCategories = this.props.queryCategories;
    const queryCategoriesLength = this.props.queryCategories.length;

    const queryLocations = this.props.queryLocations;
    const queryLocationsLength = this.props.queryLocations.length;
    
    const imgDir = 'https://api.swoops.com.ng/api/posts/create/img/';
    const DrawerImgDir = 'https://api.swoops.com.ng/img/';
    const { value } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: green
      }
    })

    {
      queryPostsLength && queryPostsLength > 0 ? 
      this.searchPostsList = queryPosts.map(mapQueryPosts => {
        this.id = mapQueryPosts.id;
        this.title = mapQueryPosts.title;
        this.date = mapQueryPosts.created_at;
        this.categoryName = mapQueryPosts.category_name;
        this.postDate = new Date(this.date).toDateString();

        mapQueryPosts.post_pics.map(mapQueryPostsPics => {
          this.src = imgDir+mapQueryPostsPics.pics_name;
          this.picsName = mapQueryPostsPics.pics_name;
        })

        this.commentLength = mapQueryPosts.post_comments.length

        return (
          <li key={`${this.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              {/*<ListSubheader className='list-subheader'>{`${this.categoryName}`}</ListSubheader>*/}
              <ListItem button component={Link} to={`${ROUTES.page}${this.categoryName}/${this.id}`}>
                {this.src && this.picsName ? <Avatar src={this.src} alt={this.picsName} /> : null}
                {this.title && this.date && this.categoryName ?  <ListItemText primary={`${this.title}`} secondary={<span><span><DateRange style={{fontSize: '0.7rem'}}/> {this.postDate}</span><br /><Chip label={`${this.categoryName}`} style={{fontSize: '0.8rem', fontWeight: 'bold', padding: '0px 0px', height: '25px', backgroundColor: '#185061', color: 'white'}} component={Link} to={ROUTES.categories} /><span className='list-category-name' style={{fontSize: '0.8rem', fontWeight: 'bold'}}></span></span>} className='list-item-text' /> : null}
                <ListItemSecondaryAction>
                <IconButton>
                  { this.commentLength && this.commentLength > 0 ?
                    <Badge className={classnames(`search-list-badge ${classes.badgeMargin}`)} badgeContent={this.commentLength} color='primary' style={{height: '2px', width: '2px'}}>
                      <Comment style={{fontSize: '1.3rem'}} />
                    </Badge>
                  : null }
                </IconButton>
              </ListItemSecondaryAction>
              </ListItem>
              <Divider className='search-list-divider' />
            </ul>
          </li>
        )
      })
      : null
    }

    {
      queryCategoriesLength && queryCategoriesLength > 0 ? 
      this.searchCategoriesList = queryCategories.map(mapQueryCategories => {
        this.id = mapQueryCategories.id;
        this.catg_name = mapQueryCategories.category_name;
        this.firstLetter = this.catg_name.split('').shift();

        return (
          <li key={`${this.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              {/*<ListSubheader className='list-subheader'>{`${this.categoryName}`}</ListSubheader>*/}
              <ListItem button component={Link} to={`${ROUTES.page}${this.catg_name}`}>
                <Avatar>
                  {this.firstLetter}
                </Avatar>
                <ListItemText primary={`${this.catg_name.toUpperCase()}`} />
                <ListItemSecondaryAction>
                <IconButton>
                  <CallMade />
                </IconButton>
              </ListItemSecondaryAction>
              </ListItem>
              <Divider className='search-list-divider' />
            </ul>
          </li>
        )
      })
      : null
    }

    {
      queryLocationsLength && queryLocationsLength > 0 ? 
      this.searchLocationsList = queryLocations.map(mapQueryLocations => {
        this.loc_id = mapQueryLocations.location_id;
        this.loc_name = mapQueryLocations.location;
        this.firstLetter = this.loc_name.split('').shift();

        return (
          <li key={`${this.loc_id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              {/*<ListSubheader className='list-subheader'>{`${this.categoryName}`}</ListSubheader>*/}
              <ListItem button component={Link} to={`${ROUTES.location}${this.loc_name}`}>
                <Avatar>
                  {this.firstLetter}
                </Avatar>
                <ListItemText primary={`${this.loc_name.toUpperCase()}`} />
                <ListItemSecondaryAction>
                <IconButton>
                  <CallMade />
                </IconButton>
              </ListItemSecondaryAction>
              </ListItem>
              <Divider className='search-list-divider' />
            </ul>
          </li>
        )
      })
      : null
    }

    this.newDate = [];

    {this.getMainCategory().length > 0 ? 
      this.newCatg = this.getMainCategory().map(mapMainCategories => {
        this.postNewDate = []; 
        this.catgDate = mapMainCategories.created_at;
        this.catgDate = new Date(this.catgDate);
        this.todayDate = new Date();
        this.catgDate = this.catgDate.getTime();
        this.todayDate = this.todayDate.getTime();

        this.dateDiff = this.todayDate - this.catgDate;
        this.dateDiff = this.dateDiff/(1000*60*60)/24;
        this.dateDiff = Math.ceil(this.dateDiff);
        this.newDate.push(this.dateDiff);
        //console.log(mapMainCategories.created_at);

        this.newPostDate = this.newDate.find(function(element){if(element < 5){return element}else{return 0} });
        {this.newPostDate !== undefined ?
        this.postNewDate.push(this.newPostDate) : null}
        //console.log(this.postNewDate);

      })
      
    
    : null}
    


    const sideList = (
      <div className={classnames(`${classes.drawerList}`)}>
        <List className='search-list'>
          <ListItem style={{height: '130px', paddingLeft: '0px', paddingRight: '0px'}}> 
            <img src={`${DrawerImgDir}swoops9.png`} style={{width: '100%'}} />
          </ListItem>
        </List>
        <Divider />
        <List className='search-list' style={{backgroundColor: 'rgb(240,240,240)'}}>
          <ListItem button component={Link} to={`${ROUTES.home}`}> 
                <ViewList className='drawer-list-icons' />
              <ListItemText primary='Feeds' className='drawer-list-item-text' />
          </ListItem>
          <ListItem button component={Link} to={`${ROUTES.categories}`}>
                <ViewQuilt className='drawer-list-icons' />
              <ListItemText primary='Categories' className='drawer-list-item-text' />
              {this.postNewDate && this.postNewDate.length > 0 ?
                <ListItemSecondaryAction className='drawer-list-item-sec-action'>
                  <Chip label={`${this.postNewDate.length}+ new`} className='new-category-chip' />
                </ListItemSecondaryAction>
               : null}
          </ListItem>
          <ListItem button component={Link} to={`${ROUTES.locations}`}>
                <LocationOnIcon className='drawer-list-icons' />
              <ListItemText primary='Locations' className='drawer-list-item-text' />
          </ListItem>
          <ListItem button onClick={this.onSearchClick}>
                <Search className='drawer-list-icons' />
              <ListItemText primary='Search' className='drawer-list-item-text' />
          </ListItem>
        </List>
        <Divider className='drawer-list-icons' />
        <List className='search-list'>
            <ListItem button>
                  <Info className='drawer-list-icons'/>
                <ListItemText primary='About Us' className='drawer-list-item-text' />
            </ListItem>
            <ListItem button>
                  <ContactMail className='drawer-list-icons' />
                <ListItemText primary='Contact Us' className='drawer-list-item-text' />
            </ListItem>
            <ListItem button>
                  <RecordVoiceOver className='drawer-list-icons' />
                <ListItemText primary='Advertise With Us' className='drawer-list-item-text' />
            </ListItem>
        </List>
        <Divider />
        <List style={{backgroundColor: 'rgb(240,240,240)'}}>
          <ListItem button>
              <Store className='drawer-list-icons' />
            <ListItemText primary='Promote Your Businesses Here' className='drawer-list-item-text' />
          </ListItem >
          <ListItem button>
              <Lock className='drawer-list-icons' />
            <ListItemText primary='Privacy Policy' className='drawer-list-item-text' />
          </ListItem>
          <ListItem button>
              <Book className='drawer-list-icons' />
            <ListItemText primary='Terms and Conditions' className='drawer-list-item-text' />
          </ListItem>
          <ListItem button>
              <Edit className='drawer-list-icons' />
            <ListItemText primary='Write For Us' className='drawer-list-item-text' />
          </ListItem>
        </List>
      </div>
    );

    return(
      <div>
        <header className='header-cover'>
        <Sticky  stickyStyle={{zIndex: 99999}}> 
          <nav>
            <AppBar position="static" className={classnames(`header-appbar-cover ${classes.navbar}`)}>
              <Toolbar className={classes.toolbar}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)} >
                  <MenuIcon className={classes.headerMenuIcon} />
                </IconButton>
                {this.checkLocationParams() == 'swoops' ?
                <Typography className={classes.flex} align='center' style={{paddingTop: '5px'}} component={Link} to={`${ROUTES.home}`}>
                  <img src={`${DrawerImgDir}swoops_header4.png`} width={90} height={32} />
                </Typography>:
                <Typography variant="title" className={classnames(`${classes.navTitle} ${classes.flex}`)} align='center'>
                  {this.state.headerText}
                </Typography>}
                <Button className={classnames(`${classes.headerSearchBtn}`)} onClick={this.onSearchClick} > 
                  <Search className={classnames(`${classes.headerSearchIcon}`)} />
                </Button>
              </Toolbar>
              <div style={{paddingRight: '10px', paddingLeft: '10px', display: this.state.display}}>
                {this.checkLocationParams() == 'swoops' ?
                  <TextField
                    className='header-search-inputs'
                    id='searchInput'
                    placeholder='Search Feeds'
                    name='search'
                    value={this.state.name}
                    onChange={this.onInputChange}
                    onKeyUp={this.onHomeInputKeyup}
                    fullWidth
                    margin='normal'
                    ref={searchInput => this.searchInput = searchInput}
                    InputProps={{/**/}}
                  />: null}
                {this.checkLocationParams() == 'Categories' ?
                  <TextField
                    className='header-search-inputs'
                    id='searchInput'
                    placeholder='Search Categories'
                    name='search'
                    value={this.state.name}
                    onChange={this.onInputChange}
                    onKeyUp={this.onCatgInputKeyup}
                    fullWidth
                    margin='normal'
                    ref={searchInput => this.searchInput = searchInput}
                    InputProps={{/**/}}
                  />: null}
                {this.checkLocationParams() == 'Locations' ?
                  <TextField
                    className='header-search-inputs'
                    id='searchInput'
                    placeholder='Search Locations'
                    name='search'
                    value={this.state.name}
                    onChange={this.onInputChange}
                    onKeyUp={this.onLocInputKeyup}
                    fullWidth
                    margin='normal'
                    ref={searchInput => this.searchInput = searchInput}
                    InputProps={{/**/}}
                  />: null}
              </div>
            </AppBar>
            <input type='checkbox' style={{display: 'none'}}  value='true' ref={this.chkbox} id='chkbox' onChange={this.onChkChange} />
              {this.checkLocationParams() == 'swoops' && this.searchPostsList && this.searchPostsList.length > 0 ?
                <div className='search-list-main-cover' style={{display: this.state.displayList}}>
                  <List className={classnames(`search-list ${classes.listRoot}`)} subheader={<li />}>
                    {this.searchPostsList}
                  </List>
                </div> 
              : null }
              {this.checkLocationParams() == 'Categories' && this.searchCategoriesList && this.searchCategoriesList.length > 0 ?
                <div className='search-list-main-cover' style={{display: this.state.displayList}}>
                  <List className={classnames(`search-list ${classes.listRoot}`)} subheader={<li />}>
                    {this.searchCategoriesList}
                  </List>
                </div> 
              : null }
              {this.checkLocationParams() == 'Locations' && this.searchLocationsList && this.searchLocationsList.length > 0 ?
                <div className='search-list-main-cover' style={{display: this.state.displayList}}>
                  <List className={classnames(`search-list ${classes.listRoot}`)} subheader={<li />}>
                    {this.searchLocationsList}
                  </List>
                </div> 
              : null }
          </nav>
        </Sticky>
          <SwipeableDrawer open={this.state.left} 
            onClose={this.toggleDrawer('left', false)} 
            onOpen={this.toggleDrawer('left', true)} 
            className='header-drawer-cover'>
              <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
              >
                  {sideList}
              </div>
          </SwipeableDrawer>
        </header>
        <footer className='header-footer-cover'>
          <nav> 
            <AppBar position="static" className={classnames(`header-paper-cover ${classes.navbar}`)} style={{paddingTop: '3px', paddingBottom: '3px', paddingRight: '2px', paddingLeft: '2px', boxShadow: 'none'}}>

                {this.changeBottomNavClass() == 'swoops' ? 
                  <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classnames(`headerTabs ${classes.headerTabs}`)}
                    fullWidth
                  >
                    <BottomNavigationAction label="Home" icon={<Home className={classes.bottomNavIcon} />} component={Link} to={`${ROUTES.home}`} className={classnames(`headerTab2 ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Categories" 
                    icon={this.postNewDate && this.postNewDate.length > 0 ?
                      <Badge className={classnames(`post-badge ${classes.badgeMargin}`)} badgeContent={`${this.postNewDate.length}+`} color='primary'>
                        <ViewQuilt className={classes.bottomNavIcon} />
                      </Badge>
                    : <ViewQuilt className={classes.bottomNavIcon} />} 
                    component={Link} to={`${ROUTES.categories}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Locations" icon={<LocationOnIcon className={classes.bottomNavIcon} style={{paddingBottom: '5px'}}/>} component={Link} to={`${ROUTES.locations}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Search" icon={<Search className={classes.bottomNavIcon} />} onClick={this.onSearchClick} className={classnames(`headerTab ${classes.headerTab}`)} />
                  </BottomNavigation>
                :null}
                {this.changeBottomNavClass()[1] == 'Categories' || this.changeBottomNavClass()[1] == 'page' ? 
                  <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classnames(`headerTabs ${classes.headerTabs}`)}
                    fullWidth
                  >
                    <BottomNavigationAction label="Home" icon={<Home className={classes.bottomNavIcon} />} component={Link} to={`${ROUTES.home}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Categories" 
                    icon={this.postNewDate && this.postNewDate.length > 0 ?
                      <Badge className={classnames(`post-badge ${classes.badgeMargin}`)} badgeContent={`${this.postNewDate.length}+`} color='primary'>
                        <ViewQuilt className={classes.bottomNavIcon} />
                      </Badge>
                    : <ViewQuilt className={classes.bottomNavIcon} />} 
                    component={Link} to={`${ROUTES.categories}`} className={classnames(`headerTab2 ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Locations" icon={<LocationOnIcon className={classes.bottomNavIcon} style={{paddingBottom: '5px'}}/>} component={Link} to={`${ROUTES.locations}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Search" icon={<Search className={classes.bottomNavIcon} />} onClick={this.onSearchClick} className={classnames(`headerTab ${classes.headerTab}`)} />
                  </BottomNavigation>
                :null}
                {this.changeBottomNavClass()[1] == 'Locations' || this.changeBottomNavClass()[1] == 'location' ? 
                  <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classnames(`headerTabs ${classes.headerTabs}`)}
                    fullWidth
                  >
                    <BottomNavigationAction label="Home" icon={<Home className={classes.bottomNavIcon} />} component={Link} to={`${ROUTES.home}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Categories" 
                    icon={this.postNewDate && this.postNewDate.length > 0 ?
                      <Badge className={classnames(`post-badge ${classes.badgeMargin}`)} badgeContent={`${this.postNewDate.length}+`} color='primary'>
                        <ViewQuilt className={classes.bottomNavIcon} />
                      </Badge>
                    : <ViewQuilt className={classes.bottomNavIcon} />} 
                    component={Link} to={`${ROUTES.categories}`} className={classnames(`headerTab ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Locations" icon={<LocationOnIcon className={classes.bottomNavIcon} style={{paddingBottom: '5px'}}/>} component={Link} to={`${ROUTES.locations}`} className={classnames(`headerTab2 ${classes.headerTab}`)} />
                    <BottomNavigationAction label="Search" icon={<Search className={classes.bottomNavIcon} />} onClick={this.onSearchClick} className={classnames(`headerTab ${classes.headerTab}`)} />
                  </BottomNavigation>
                :null}
                {/*<Tabs
                    className={classnames(`headerTabs ${classes.headerTabs}`)}
                    value={this.state.value}
                    indicatorColor='none'
                    textColor='primary'
                    onChange={this.handleChange}
                    fullWidth
                  > 
                  <div style={{paddingLeft: '5px', paddingRight: '5px'}}>
                    <Button className={classnames(`headerTab ${classes.headerTab}`)} component={Link} to={`${ROUTES.home}`} onClick={this.onBtnClick}> 
                      <Home className={classes.leftIcon} />
                        
                    </Button>
                    <Button className={classnames(`headerTab ${classes.headerTab}`)} component={Link} to={`${ROUTES.categories}`} onClick={this.onBtnClick}> 
                      <ViewQuilt className={classes.leftIcon} />
                        
                    </Button>
                    <Button className={classnames(`headerTab ${classes.headerTab}`)} component={Link} to={`${ROUTES.locations}`} onClick={this.onBtnClick}> 
                      <LocationOn className={classes.leftIcon} />
                        
                    </Button>
                    <Button className={classnames(`headerTab ${classes.headerTab}`)} onClick={this.onSearchClick}> 
                      <Search className={classes.leftIcon} />
                        
                    </Button>
                  </div>
                </Tabs>*/}<input type='checkbox' style={{display: 'none'}}  value='true' ref={this.chkbox} id='chkbox' onChange={this.onChkChange} />
              </AppBar>
          </nav>
        </footer>
      </div>
    )
  };

}


Header.propTypes = {
  classes: propTypes.object.isRequired,
  queryPosts: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
};

export default Header;