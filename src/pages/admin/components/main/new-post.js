import React, { Component } from 'react';
//import $ from 'jquery';
import ReactDOM, { findDOMNode } from 'react-dom';
import propTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
//import Select from '@material-ui/core/Select';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TableBody } from 'material-ui';

import { connect } from 'react-redux';
import { fetchCategories } from '../../../../admin-redux/actions/category';
import { fetchLocations } from '../../../../admin-redux/actions/location';
import { createPost } from '../../../../admin-redux/actions/post';
import { InputFile } from './modules';
import styles from './styles';
//import { TableHeader } from 'material-ui';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catgOpt: '',
            locOpt: '',
            locWhere: '',
            postStatus: '',
            productName: '',
            title: '',
            body: '',
            price: '',
            quantity: '',
            delivery: '',
            file: '',
            //display: 'none',
            //withAuthorPics: 'no',
        }

        this.onChange = this.onChange.bind(this);
        this.loadCategories = this.loadCategories.bind(this);
        this.loadLocations = this.loadLocations.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value
         })
         /*if(e.target.name == 'postStatus' && e.target.value == 'sponsored') {
             this.setState({
                 display: 'block',
                 withAuthorPics: 'yes',
             })
         }*/
    }


    componentDidMount(){
        this.onChange;
    }
    loadCategories(){
        return this.props.fetchCategories();
    }
    loadLocations(){
        return this.props.fetchLocations();
    }
    loadCreatePost = () => {
        return this.props.createPost();
    }

    componentWillMount() {
        //setInterval(this.loadCategories, 6000);
        this.loadCategories();
        this.loadLocations();
        //this.loadCreatePost();
    };

     onSubmit(e) {
         e.preventDefault();
         const fileCount = ReactDOM.findDOMNode(this.refs.InputFile).getElementsByClassName('fileInputs').length;
         const locName = e.target.locOpt.selectedOptions[0].innerText;
         const title = e.target.title.value;
         const authorPics = this.state.withAuthorPics;
         //alert(title);

         const post = new FormData(e.target);
         
         this.props.createPost(post, locName, fileCount);
    } 


    render() {
        const { classes } = this.props;
        const categoryStatus = this.props.categoryStatus.status;
        const locationStatus = this.props.locationStatus.status;

        {categoryStatus === 'category found' ? 
            this.catgOptions = this.props.categories.map(catg => (
                <option key={catg.id} value={catg.id}>{catg.category_name}</option>
            ))
                :null
        }
        {locationStatus === 'location found' ? 
            this.locOptions = this.props.locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.location}</option>
            ))
            : null
        }
        {locationStatus === 'location found' ? 
        this.locID = this.props.locations.map(loc => (
            <p>{loc.id} {loc.location}<br /></p>
        ))
            : null
        }

        return(
            <div className={classes.root}>
                { categoryStatus === 'category found' && locationStatus === 'location found' ? 
                    <form 
                        method='post'
                        enctype='multipart/form-data'
                        className={classes.formRoot}
                        onSubmit={this.onSubmit}
                    >
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <FormControl className={classes.formControl}>
                                        <label htmlFor='catg'>Categories</label>
                                            <select 
                                                onChange={this.onChange}
                                                value={this.state.catgOpt}
                                                id='catg'
                                                name='catgOpt'
                                                
                                            >
                                                <option value=''>
                                                select categories
                                                </option>
                                                {this.catgOptions}
                                            </select>
                                    </FormControl><br />
                                    <FormControl className={classes.formControl} ref='location'>
                                        <label htmlFor='loc'>Locations</label>
                                            <select 
                                                onChange={this.onChange}
                                                value={this.state.locOpt}
                                                className='locs'
                                                component='select'
                                                ref='locOpt'
                                                id='loc'
                                                name='locOpt'
                                                
                                            >
                                                <option value='' component='option'>
                                                select locations
                                                </option>
                                                {this.locOptions}
                                            </select>
                                    </FormControl><br />
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='location-where' 
                                            type='text'
                                            name='locWhere'
                                            label='Enter where'
                                            placeholder='Enter where'
                                            value={this.state.locWhere}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl><br />
                                    <FormControl className={classes.formControl}>
                                        <label htmlFor='post-status'>Post Status</label>
                                            <select 
                                                onChange={this.onChange}
                                                value={this.state.postStatus}
                                                id='post-status'
                                                name='postStatus'
                                                
                                            >
                                                <option value=''>
                                                Select Status
                                                </option>
                                                <option value='main'>
                                                Main
                                                </option>
                                                <option value='sponsored'>
                                                Sponsored
                                                </option>
                                            </select>
                                    </FormControl><br />
                                    
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='product-name' 
                                            type='text'
                                            name='productName'
                                            label='Enter product name'
                                            placeholder='Enter product name'
                                            value={this.state.productName}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl><br />
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='title' 
                                            type='text'
                                            name='title'
                                            label='Enter post title'
                                            placeholder='Enter post title'
                                            value={this.state.title}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl><br />
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='body' 
                                            multiline
                                            name='body'
                                            label='Enter post body'
                                            placeholder='Enter post body'
                                            value={this.state.body}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='price' 
                                            name='price'
                                            label='Price'
                                            placeholder='Enter price'
                                            value={this.state.price}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id='quantity' 
                                            name='quantity'
                                            label='quantity'
                                            placeholder='Enter quantity'
                                            value={this.state.quantity}
                                            onChange={this.onChange} 
                                            className={classes.textField}
                                            fullWidth
                                            margin='normal'
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <label htmlFor='delivery-service'>Delivery Service</label>
                                            <select 
                                                onChange={this.onChange}
                                                value={this.state.delivery}
                                                id='delievery-service'
                                                name='delivery'
                                                
                                            >
                                                <option value=''>
                                                Select delivery status
                                                </option>
                                                <option value='Yes'>
                                                Yes
                                                </option>
                                                <option value='No'>
                                                No
                                                </option>
                                            </select>
                                    </FormControl><br />
                                </TableCell>
                                <TableCell>
                                    <InputFile ref='InputFile'/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component='td'>
                                    <Button 
                                        type='submit'
                                        variant='raised'
                                        fullWidth
                                        style={{textAlign: 'center'}}
                                        className={classes.button}
                                        onClick={this.uploadBtnCount}
                                    >
                                        Submit post
                                        <Send className={classes.rightIcon} />
                                    </Button>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </form>: null
                }

            </div>
        )
    };
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    categoryStatus: state.categories.status,
    locations: state.locations.locations,
    locationStatus: state.locations.status
})

Post.propTypes = {
    fetchCategories: propTypes.func.isRequired,
    categories: propTypes.array.isRequired,
    fetchLocations: propTypes.func.isRequired,
    locations: propTypes.array.isRequired,
    categoryStatus: propTypes.object.isRequired,
    locationStatus: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired,
    status: propTypes.string.isRequired,
    createPost: propTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchCategories, fetchLocations, createPost})(withStyles(styles)(Post));