import { FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from './types';
const status = 'no location found';
//const empty = '';

export const fetchLocations = () => despatch => {
    //console.log('fetch locations');
    fetch('https://api.swoops.com.ng/api/location/read.php')
    .then(res => res.json())
    .then(data => { data && data.status === status ? despatch({
        type: FETCH_LOCATION_ERROR,
        status: data
    }):
    despatch({
        type: FETCH_LOCATION_SUCCESS,
        payload: data
    })}
);
};

