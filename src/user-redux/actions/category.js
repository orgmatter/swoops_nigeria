import { FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_ERROR, FETCH_MAIN_CATEGORY_SUCCESS, FETCH_MAIN_CATEGORY_ERROR  } from './types';
import history from '../../history';
//import axios from 'axios';
const fetchError = 'no category found';
const error = 'error';
const success = 'success';



export const fetchCategories = () => despatch => {
    fetch(`https://api.swoops.com.ng/api/categories/read_user.php`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_CATEGORY_ERROR,
        status: error
    }): despatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: data,
        status: success
    })});
}

export const fetchMainCategories = () => despatch => {
    fetch(`https://api.swoops.com.ng/api/categories/read.php`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_MAIN_CATEGORY_ERROR,
        status: error
    }): despatch({
        type: FETCH_MAIN_CATEGORY_SUCCESS,
        payload: data,
        status: success
    })});
}