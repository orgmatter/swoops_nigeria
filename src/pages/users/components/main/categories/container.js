import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as categoryActions from '../../../../../user-redux/actions/category';
import { withStyles } from '@material-ui/core/styles';
import styles from '../page/styles';
import { withRouter } from 'react-router-dom';
import Categories from './';


const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.categories,
    posts: state.posts.posts,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(categoryActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Categories)));