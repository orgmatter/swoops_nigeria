import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../../../../../user-redux/actions/post';
import { API } from './';

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts.posts
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postActions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(API);