import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_ERROR, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_ERROR } from '../actions/types';
import { appState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case CREATE_COMMENT_SUCCESS:
        return {
            ...state,
            createResponse: action.payload,
            createStatus: action.status
        }
        case CREATE_COMMENT_ERROR:
        return {
            ...state,
            createResponse: action.payload,
            createStatus: action.status
        }
        case FETCH_COMMENT_SUCCESS:
        return {
            ...state,
            comments: action.payload,
            fetchStatus: action.status
        }
        case FETCH_COMMENT_ERROR:
        return {
            ...state,
            fetchResponse: action.payload,
            fetchStatus: action.status,
        }
        default:  {
            return state
        }
    }
}