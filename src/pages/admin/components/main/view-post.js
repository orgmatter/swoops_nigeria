import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Send from '@material-ui/icons/Send';


class ViewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            query: '',
            postId: parseInt(''),

        }
    }

    getQueryPosts = () => {
        return this.props.queryPosts;
    }

    getUpdBtnStatus = () => {
        return this.props.updBtnStatus;
    }

    getFetchQuery = (query) => {
        return this.props.actions.fetchQueryPosts(query);
    }

    getUpdatePosts = (data, id) => {
        return this.props.actions.updatePosts(data, id);
    }

    handleClickOpen = (e) => {
        const {id} = e.target;
        this.setState({
          open: true,
          postId: id,
        });
      }

    handleClose = value => {
        this.setState({ open: false });
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        this.componentWillMount(query);
    }

    onEditFormSubmit = (e) => {
        e.preventDefault();
        const {id} = e.target;
        const data = new FormData(e.target);
        this.getUpdatePosts(data, id);
    }

    componentWillMount(query) {
        this.getFetchQuery(query);
    }




    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        {this.getQueryPosts().length > 0 ? 
            this.tableRow = this.getQueryPosts().map(mapPost => {
                return (
                    <TableRow>
                        <TableCell>{mapPost.title}</TableCell>
                        <TableCell>
                            <Button 
                                variant='raised'
                                color='primary'
                                id={mapPost.id}
                                onClick={this.handleClickOpen}
                            >
                                <Visibility className={classes.leftIcon} />
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                )
            })
        
        : this.tableRow = 'No search result' }

        {this.getQueryPosts().length > 0 ? 
            this.dialogContent = this.getQueryPosts().map(mapPost => {
                return (
                    <div className='dialog-form-cover'>
                        <form method='post' onSubmit={this.onEditFormSubmit} id={mapPost.id}>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='location'
                                    defaultValue={mapPost.location}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='location_where'
                                    defaultValue={mapPost.location_where}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='product_name'
                                    defaultValue={mapPost.product_name}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='title'
                                    defaultValue={mapPost.title}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    multiline
                                    name='body'
                                    defaultValue={mapPost.body}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='price'
                                    defaultValue={mapPost.price}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='quantity'
                                    defaultValue={mapPost.quantity}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='delivery'
                                    defaultValue={mapPost.delivery_service}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='post_status'
                                    defaultValue={mapPost.post_status}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Input
                                    type='text'
                                    name='available'
                                    defaultValue={mapPost.available}
                                    className={classes.dialogInput}
                                    margin='normal'
                                    fullWidth
                                />
                            </FormControl>
                            <Button 
                                type='submit'
                                variant='raised'
                                color='primary'
                                id={mapPost.id}
                                fullWidth
                            >
                                <Send className={classes.leftIcon} />
                                {this.getUpdBtnStatus()}
                            </Button>
                        </form>
                    </div>
                )
            })
        
        : this.tableRow = 'No search result' }

        return(
            <div className={classes.tableRoot}>
                <form method='post' onSubmit={this.onFormSubmit}>
                    <TextField
                        type='text'
                        placeholder='Search post'
                        name='query'
                        value={this.state.query}
                        fullWidth
                        onChange={this.onInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <Button variant='flat' color='primary' type='submit'>
                                    <Search className={classes.leftIcon} />
                                </Button>
                            </InputAdornment>
                        }}
                    />
                </form>
                <Table className={classes.viewTable}>
                    <TableHead>
                        <TableRow>
                            <TableCell component='th'>Title</TableCell>
                            <TableCell component='th'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.tableRow}
                    </TableBody>
                </Table>
                <div className='dialog-wrapper'>
                    <Dialog onClose={this.handleClose} open={this.state.open} aria-labelledby="simple-dialog-title" {...other}>
                        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                        <DialogContent>
                        {this.dialogContent}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default ViewPost;

