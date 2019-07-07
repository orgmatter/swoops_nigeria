import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../../admin-redux/actions/category';

class CatgOptions extends Component {

    componentWillMount() {
        this.props.fetchCategories();
    };

    render() {
        const selectOptions = this.props.categories.map(catg => (
            <option key={catg.id} value={catg.id}>{catg.name}</option>
        ));
        return(
           <div> {selectOptions}</div>
        )
    };

}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

CatgOptions.propTypes = {
    fetchCategories: propTypes.func.isRequired,
    categories: propTypes.array.isRequired,
}

export default connect(mapStateToProps, {fetchCategories})(CatgOptions);