import { FETCH_CATEGORY_SUCCESS, NEW_CATEGORY, FETCH_CATEGORY_ERROR } from './types';
const status = 'no category found';
//const empty = '';

export const fetchCategories = () => despatch => {
    //console.log('fetch category');
    fetch('https://api.swoops.com.ng/api/categories/read.php')
    .then(res => res.json())
    .then(data => { data && data.status === status ? despatch({
        type: FETCH_CATEGORY_ERROR,
        status: data
    }):
    despatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: data
    })}
);
};


export const createCategory = (categoryData) => despatch => {
    fetch('https://api.swoops.com.ng/api/categories/create.php', {
        method: 'POST',
        body: categoryData
    })
    .then(res => res.json())
    .then(response => despatch({
        type: NEW_CATEGORY,
        payload: response
    }));
};