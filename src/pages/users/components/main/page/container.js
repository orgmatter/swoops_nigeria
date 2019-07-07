import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../../../../user-redux/actions/post';
import Homepage from './';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
       posts: state.posts.posts,
       extra: state.posts.extra,
})

const mapDispatchToProps = (dispatch) => ({
        actions: bindActionCreators(postActions,dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Homepage)));
