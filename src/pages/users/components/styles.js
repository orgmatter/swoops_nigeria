const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
      color: 'white',
    },
    homeButton: {
        marginLeft: 1,
        marginRight: 10,
        height: '40px',
        width: '50px',
        borderRadius: '0px',
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      homeIcon: {
          color: 'white',
      },
    menuButton: {
      marginLeft: 10,
      marginRight: 10,
      height: '30px',
      width: '30px',
    },
    navbar: {
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingRight: '0px',
        paddingLeft: '0px',
    },
    headerSearchBtn: {
        padding: '2px 12px',
        minWidth: '40px',
    },
    headerSearchIcon: {
        marginLeft: theme.spacing.unit,
        color: 'white',
        fontSize: '1.5rem',
    },
    toolbar: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingRight: '0px',
        paddingLeft: '0px',
        height: '30px',
        minHeight: '40px',
    },
    navTitle: {
        color: 'rgb(250,250,250)',
        fontWeight: 'bold',
        fontSize: '1.19rem',
        fontFamily: 'Titillium Web, sans-serif',

    },
    headerTabs: {
        minHeight: '35px',
    },
    bottomNavRoot: {
        color: '#185061', 
    },
    bottomNavIcon: {
        //color: '#185061',
    },
    bottomNavIcon2: {
        //color: '#185061',
    },
    headerTab: {
        minHeight: '5px',
        minWidth: '66px',
        //fontSize: '0.6rem',
        paddingLeft: '4px',
        paddingRight: '4px',
        //padding: '8px 16px',
        //flexGrow: 4,
    },
    tabIcons: {
        fontSize: '1.2rem',
    },
    leftIcon: {
        marginRight: theme.spacing.unit - 2,
        fontSize: '1.2rem',
      },
    headerMenuIcon: {
        marginRight: theme.spacing.unit - 2,
        fontSize: '1.5rem',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
        fontSize: '1.2rem',
    },
    listRoot: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    borderRadius: '0px',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  drawerList: {
    width: 330,
  },
  fabButton: {
    position: 'fixed',
    right: '10px',
    bottom: '0px',
    backgroundColor: '#185061',
    color: 'white',
    //margin: theme.spacing.unit,
    '&:hover': {
        backgroundColor: '#185061',
    }
  },
  fabExtendedIcon: {
    marginRight: theme.spacing.unit,
  },
  });

  export default styles;