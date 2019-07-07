import { FETCH_CATEGORY_SUCCESS, NEW_CATEGORY, FETCH_CATEGORY_ERROR } from '../actions/types';
import { Category as initialState } from '../state';

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_CATEGORY_SUCCESS:
        return {
            ...state,
            categories: action.payload,
            status: {
                status: 'category found'
            }            
        }
        case NEW_CATEGORY:
        return {
            ...state,
            response: action.payload
        }
        case FETCH_CATEGORY_ERROR:
        return {
            ...state,
            status: action.status
        }
        default: {
            return state
        }
    }
};