import { CREATE_POST, CREATE_ERROR, FETCH_POST_SUCCESS, FETCH_POST_ERROR, FETCH_QUERY_POST_SUCCESS, FETCH_QUERY_POST_ERROR, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR } from '../actions/types';
import { Post as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case CREATE_POST: 
        return {
            ...state,
            createResponse: action.payload,
            createStatus: action.success
        }
        case CREATE_ERROR:
        return {
            ...state,
            createResponse: action.payload,
            createStatus: action.error
        }
        case FETCH_QUERY_POST_SUCCESS:
        return {
            ...state,
            queryPosts: action.payload,
            fetchStatus: action.success
        }
        case FETCH_QUERY_POST_ERROR:
        return {
            ...state,
            queryPosts: [],
            fetchStatus: action.error
        }
        case UPDATE_POST_SUCCESS:
        return {
            ...state,
            updBtnStatus: action.payload,
        }
        case UPDATE_POST_ERROR:
        return {
            ...state,
            updBtnStatus: [],
            updateStatus: action.error
        }
        default:  {
            return state
        }
    }
}