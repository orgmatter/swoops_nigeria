import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../../../user-redux/actions/search';
import * as catgActions from '../../../../user-redux/actions/category';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    queryPosts: state.queryPosts.queryPosts,
    queryCategories: state.queryPosts.queryCategories,
    queryLocations: state.queryPosts.queryLocations,
    mainCategories: state.categories.mainCategories,
});

const mapDispatchToProps = (dispatch) => ({
    searchActions: bindActionCreators(searchActions, dispatch),
    catgActions: bindActionCreators(catgActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));