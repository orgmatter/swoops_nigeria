import { CREATE_POST, CREATE_ERROR, FETCH_POST_SUCCESS, FETCH_POST_ERROR, FETCH_QUERY_POST_SUCCESS, FETCH_QUERY_POST_ERROR, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR } from './types';
//import axios from 'axios';
const createError = 'Post and pics not uploaded';
//const createSuccess = 'Post and pics uploaded';
const fetchError = 'Post not found';
const updateError = 'Post not updated';
const error = {status:'error'};
const success = {status:'success'};

export const createPost = (post, locName, fileCount) => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/create/create.php?loc_name=${locName}&file_count=${fileCount}`, {
        method: 'POST',
        body: post
    })
    .then(res => res.json())
    .then(data => {data && data === createError ? console.log(data): despatch({
        type: CREATE_POST,
        payload: data,
        status: success
    })});
}

export const fetchPosts = () => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/read.php`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_POST_ERROR,
        status: error
    }): despatch({
        type: FETCH_POST_SUCCESS,
        payload: data,
        status: success
    })});
}


export const fetchQueryPosts = (query) => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/search.php?query=${query}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_QUERY_POST_ERROR,
        status: error
    }): despatch({
        type: FETCH_QUERY_POST_SUCCESS,
        payload: data,
        status: query
    })})
}

export const updatePosts = (data, id) => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/update.php?post_id=${id}`, {
        method: 'POST',
        body: data
    })
    .then(res => res.json())
    .then(data => {data && data.status === updateError ? despatch({
        type: UPDATE_POST_ERROR,
        status: error
    }): despatch({
        type: UPDATE_POST_SUCCESS,
        payload: 'Updated',
    })})
}