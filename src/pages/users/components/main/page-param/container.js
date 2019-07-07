import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../../../../user-redux/actions/post';
import PageParam from './';
import { withStyles } from '@material-ui/core/styles';
import styles from '../page/styles';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    singlePosts: state.posts.singlePosts,
    fetchSingleStatus: state.posts.fetchSingleStatus,
    refresh: state.posts.refresh,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postActions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withStyles(styles)(PageParam)));