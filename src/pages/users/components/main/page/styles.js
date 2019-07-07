const styles = theme => ({
    card: {
      width: '100%',
      marginTop: '0px',
      marginBottom: 7,
      backgroundColor: 'rgb(250,250,250)',
    },
    whiteCard: {
      width: '100%',
      marginTop: '0px',
      marginBottom: 7,
      backgroundColor: 'rgb(255,255,255)',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    postMedia: {
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'rgb(245,245,245)',
    },
    authorAvatar: {
      backgroundColor: 'rgb(245,245,245)',
      marginTop: '-25px',
      height: '50px',
      width: '50px',
    },
    loCatAvatar: {
      height: '50px',
      width: '50px',
    },
    cardMedia: {
        width: '100%',
        border: '1px solid green',
    },
    leftIcon: {
        marginRight: theme.spacing.unit - 5,
      },
    titleLeftIcon: {
      marginRight: theme.spacing.unit - 5,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    badgeMargin: {
      margin: theme.spacing.unit * 2,
    },
    postFormContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    postInputs: {
      width: '100%',
      border: '1px solid lightgrey',
      padding: '3px',
      paddingBottom: '0px',
      borderRadius: '5px',
    },
    listRoot: {
      width: '100%',
    },
    chip: {
      margin: theme.spacing.unit,
    },
    commentChip: {
      margin: theme.spacing.unit,
      padding: '10px',
      maxWidth: '100%',
      whiteSpace: 'wrap',
    },
    mainCategoryCover: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tableRoot: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: '100%',
    },
    drawerList: {
      width: 350,
    },
    avatarBadge: {
      minWidth: '15px',
      minHeight: '15px',
      borderRadius: '100px',
      color: 'white',
    },
    imgGridRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imgGridList: {
      width: '100%',
    },
    imgSubheader: {
      width: '100%',
    },
  });

  export default styles;