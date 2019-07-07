import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import post from './reducers/post';
import category from './reducers/category';
import location from './reducers/location';

export default combineReducers({
    posts: post,
    categories: category,
    locations: location,
    form: formReducer
});
