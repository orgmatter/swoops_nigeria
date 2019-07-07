import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../../../admin-redux/actions/post';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { withRouter } from 'react-router-dom';
import ViewPost from './view-post';

const mapStateToProps = (state, ownProps) => ({
    queryPosts: state.posts.queryPosts,
    updBtnStatus: state.posts.updBtnStatus,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postActions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withStyles(styles)(ViewPost)))
