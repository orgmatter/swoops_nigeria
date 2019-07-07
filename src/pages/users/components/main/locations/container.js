import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as locationActions from '../../../../../user-redux/actions/location';
import { withStyles } from '@material-ui/core/styles';
import styles from '../page/styles';
import { withRouter } from 'react-router-dom';
import Locations from './';


const mapStateToProps = (state, ownProps) => ({
    locations: state.locations.locations,
    posts: state.posts.posts,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(locationActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Locations)));