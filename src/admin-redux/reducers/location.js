import { FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../actions/types';
import { Location as initialState } from '../state';

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_LOCATION_SUCCESS:
        return {
            ...state,
            locations: action.payload,
            status: {
                status: 'location found'
            }            
        }
        case FETCH_LOCATION_ERROR:
        return {
            ...state,
            status: action.status
        }
        default: {
            return state
        }
    }
};