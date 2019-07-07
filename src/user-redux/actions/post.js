import { FETCH_POST_SUCCESS, FETCH_POST_ERROR, FETCH_QUERY_POST_SUCCESS, FETCH_QUERY_POST_ERROR, FETCH_SINGLE_POST, FETCH_SINGLE_ERROR, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_ERROR  } from './types';
import history from '../../history';
//import axios from 'axios';
const fetchError = 'Post not found';
const createCommentError = 'Comments not created';
const queryResultError = 'No result found';
const error = 'error';
const success = 'success';
const empty = '';



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
        extra: data[0].post_category,
        status: success
    })});
}

/*export const fetchQueryPosts = (query) => despatch => {
    if (query !== empty){
        console.log(query);
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
}*/

export const fetchOnePost = (id) => despatch => {
    fetch(`https://api.swoops.com.ng/api/posts/read_one.php?id=${id}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data === fetchError ? despatch({
        type: FETCH_SINGLE_ERROR,
        status: error
    }): despatch({
        type: FETCH_SINGLE_POST,
        payload: data,
        status: success,
    }); 
    });
}

export const createUserComments = (comment, post_id) => despatch => {
    fetch(`https://api.swoops.com.ng/api/comments/create.php?post_id=${post_id}`, {
        method: 'POST',
        body: comment,
    })
    .then(res => res.json())
    .then(data => {data && data.status === createCommentError ? despatch({
        type: CREATE_COMMENT_ERROR,
        status: error
    }): despatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: data,
        status: success,
    }); 
    });
}