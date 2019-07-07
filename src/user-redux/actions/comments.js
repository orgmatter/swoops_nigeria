import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_ERROR, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_ERROR  } from './types';
import history from '../../history';
//import axios from 'axios';
const fetchCommentError = 'Comments not found';
const createCommentError = 'Comments not created';
const error = 'error';
const success = 'success';


export const createUserComments = (comment, post_id) => despatch => {
    fetch(`https://api.swoops.com.ng/api/comments/create.php?post_id=${post_id}`, {
        method: 'POST',
        body: body,
    })
    .then(res => res.json())
    .then(data => {data && data === createCommentError ? despatch({
        type: CREATE_COMMENT_ERROR,
        status: error
    }): despatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: data,
        status: success,
    }); 
});
}

export const fetchComments = () => despatch => {
    fetch(`https://api.swoops.com.ng/api/comments/read.php`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data === fetchCommentError ? despatch({
        type: FETCH_COMMENT_ERROR,
        status: error
    }): despatch({
        type: FETCH_COMMENT_SUCCESS,
        payload: data,
        status: success
    })});
}