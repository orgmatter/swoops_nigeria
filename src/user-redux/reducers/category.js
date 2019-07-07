import { FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_ERROR, FETCH_MAIN_CATEGORY_SUCCESS, FETCH_MAIN_CATEGORY_ERROR } from '../actions/types';
import { appState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORY_SUCCESS:
        return {
            ...state,
            categories: action.payload,
            fetchStatus: action.status
        }
        case FETCH_CATEGORY_ERROR:
        return {
            ...state,
            fetchResponse: action.payload,
            fetchStatus: action.status
        }
        case FETCH_MAIN_CATEGORY_SUCCESS:
        return {
            ...state,
            mainCategories: action.payload,
            fetchStatus: action.status
        }
        case FETCH_MAIN_CATEGORY_ERROR:
        return {
            ...state,
            fetchResponse: action.payload,
            fetchStatus: action.status
        }
        default:  {
            return state
        }
    }
}