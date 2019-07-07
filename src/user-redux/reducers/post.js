import { FETCH_POST_SUCCESS, FETCH_POST_ERROR, FETCH_SINGLE_POST, FETCH_SINGLE_ERROR, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_ERROR } from '../actions/types';
import { appState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POST_SUCCESS:
        return {
            ...state,
            posts: action.payload,
            extra: action.extra,
            fetchStatus: action.status
        }
        case FETCH_POST_ERROR:
        return {
            ...state,
            fetchResponse: action.payload,
            fetchStatus: action.status
        }
        case FETCH_SINGLE_ERROR:
        return {
            ...state,
            fetchSingleResponse: action.payload,
            fetchSingleStatus: action.status
        }
        case FETCH_SINGLE_POST:
        return {
            ...state,
            singlePosts: action.payload,
            fetchSingleStatus: action.status,
        }
        case CREATE_COMMENT_SUCCESS:
        return {
            ...state,
            createCommentResponse: action.payload,
            createCommentStatus: action.status
        }
        case CREATE_COMMENT_ERROR:
        return {
            ...state,
            createCommentResponse: action.payload,
            createCommentStatus: action.status
        }
        default:  {
            return state
        }
    }
}