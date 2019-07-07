import { FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../actions/types';
import { appState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_LOCATION_SUCCESS:
        return {
            ...state,
            locations: action.payload,
            fetchStatus: action.status
        }
        case FETCH_LOCATION_ERROR:
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