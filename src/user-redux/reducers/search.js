import { FETCH_QUERY_POST_SUCCESS, FETCH_QUERY_POST_ERROR, FETCH_QUERY_CATG_SUCCESS, FETCH_QUERY_CATG_ERROR, FETCH_QUERY_LOC_SUCCESS, FETCH_QUERY_LOC_ERROR } from '../actions/types';
import { searchState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_QUERY_POST_SUCCESS:
        return {
            ...state,
            queryPosts: action.payload,
            fetchQueryStatus: action.status
        }
        case FETCH_QUERY_POST_ERROR:
        return {
            ...state,
            queryPosts: action.status,
            fetchQueryResponse: action.payload,
            fetchQueryStatus: action.status
        }
        case FETCH_QUERY_CATG_SUCCESS:
        return {
            ...state,
            queryCategories: action.payload,
            fetchQueryStatus: action.status
        }
        case FETCH_QUERY_CATG_ERROR:
        return {
            ...state,
            queryCategories: action.status,
            fetchQueryResponse: action.payload,
            fetchQueryStatus: action.status
        }
        case FETCH_QUERY_LOC_SUCCESS:
        return {
            ...state,
            queryLocations: action.payload,
            fetchQueryStatus: action.status
        }
        case FETCH_QUERY_LOC_ERROR:
        return {
            ...state,
            queryLocations: action.status,
            fetchQueryResponse: action.payload,
            fetchQueryStatus: action.status
        }
        default:  {
            return state
        }
    }
}