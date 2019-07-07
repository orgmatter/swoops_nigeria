const styles = theme => ({
    card: {
      width: '100%',
      marginBottom: 7,
    },
    media: {
      height: 0,
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
      backgroundColor: 'blue',
    },
    cardMedia: {
        width: '100%',
        border: '1px solid green',
    }
  });

  export default styles;