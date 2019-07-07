const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    tabsPaperCover: {
      backgroundColor: 'transparent'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      menu: {
        width: 200,
      },
      button: {
        margin: theme.spacing.unit,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
      formRoot: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: '100%',
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      },
      table: {
        minWidth: 700,
      },
      tableRoot: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      viewTable: {
        minWidth: '100%',
      },
      dialogInput: {
        width: '100%',
      }
  });

export default styles;