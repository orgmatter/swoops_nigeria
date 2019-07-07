import { FETCH_QUERY_POST_SUCCESS, FETCH_QUERY_POST_ERROR, FETCH_QUERY_CATG_SUCCESS, FETCH_QUERY_CATG_ERROR, FETCH_QUERY_LOC_SUCCESS, FETCH_QUERY_LOC_ERROR } from './types';
import history from '../../history';
//import axios from 'axios';
const fetchError = 'Post not found';
const fetchCatgError = 'No category found';
const fetchLocError = 'No location found';
const createCommentError = 'Comments not created';
const queryResultError = [{
    'title': 'No result found!', 
    'category_name': '',
    'created_at': '',
    'post_pics': [{'pics_name':'' }],
    'post_comments': '',
}];
const error = 'error';
const success = 'success';

export const fetchQueryPosts = (query) => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/search.php?query=${query}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_QUERY_POST_ERROR,
        status: queryResultError
    }): despatch({
        type: FETCH_QUERY_POST_SUCCESS,
        payload: data,
        status: success
    })});
}

export const fetchQueryCatg = (query) => despatch => {
    fetch(`https://api.swoops.com.ng/api/categories/search.php?query=${query}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchCatgError ? despatch({
        type: FETCH_QUERY_CATG_ERROR,
        status: queryResultError
    }): despatch({
        type: FETCH_QUERY_CATG_SUCCESS,
        payload: data,
        status: success
    })});
}

export const fetchQueryLoc = (query) => despatch => {
    fetch(`https://api.swoops.com.ng/api/location/search.php?query=${query}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchLocError ? despatch({
        type: FETCH_QUERY_LOC_ERROR,
        status: queryResultError
    }): despatch({
        type: FETCH_QUERY_LOC_SUCCESS,
        payload: data,
        status: success
    })});
}
