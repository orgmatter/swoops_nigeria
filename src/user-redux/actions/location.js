import { FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR  } from './types';
import history from '../../history';
//import axios from 'axios';
const fetchError = 'no location found';
const error = 'error';
const success = 'success';



export const fetchLocations = () => despatch => {
    fetch(`https://api.swoops.com.ng/api/location/read_user.php`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {data && data.status === fetchError ? despatch({
        type: FETCH_LOCATION_ERROR,
        status: error
    }): despatch({
        type: FETCH_LOCATION_SUCCESS,
        payload: data,
        status: success
    })});
}