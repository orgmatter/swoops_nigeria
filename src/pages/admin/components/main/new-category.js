import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createCategory } from '../../../../admin-redux/actions/category';
import { fetchCategories } from '../../../../admin-redux/actions/category';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import styles from './styles';

class Category extends Component {
    constructor(props){
        super(props);

        this.state = {
            catg_name: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = new FormData(e.target);

        this.props.createCategory(post);
        this.props.fetchCategories();
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        id='with-placeholder' 
                        type='text'
                        name='catg_name'
                        label='Enter new category here'
                        placeholder='Enter new category here'
                        value={this.state.catg_name}
                        onChange={this.onChange} 
                        className={classes.textField}
                        fullWidth
                        margin='normal'
                    /><br />
                    <Button 
                        type='submit'
                        variant='raised'
                        className={classes.button}
                    >
                        Submit
                        <Send className={classes.rightIcon} />
                    </Button>
                </form>
            </div>
        )
    };

}

Category.propTypes = {
    createCategory: propTypes.func.isRequired,
    onSubmit: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,
    fetchCategories: propTypes.func.isRequired,
    classes: propTypes.object.isRequired,
}

export default connect(null, {createCategory, fetchCategories})(withStyles(styles)(Category));