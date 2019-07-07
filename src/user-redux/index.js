import { combineReducers } from 'redux';
import post from './reducers/post';
import search from './reducers/search';
import comment from './reducers/comment';
import category from './reducers/category';
import location from './reducers/location';

export default combineReducers({
    posts: post,
    queryPosts: search,
    comments: comment,
    categories: category,
    locations: location
});
