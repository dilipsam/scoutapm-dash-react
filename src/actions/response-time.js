import fetch from 'cross-fetch';
import {API_KEY} from "../constants";

export const FETCH_RESPONSE_TIME = 'FETCH_RESPONSE_TIME';
export const RECEIVE_RESPONSE_TIME = 'RECEIVE_RESPONSE_TIME';



function getResponseTime(app) {
    return {
        type: FETCH_RESPONSE_TIME,
        app
    }
}

function receiveResponseTime(app, json) {
    return {
        type: RECEIVE_RESPONSE_TIME,
        app,
        receivedAt: Date.now(),
        series: json.results.series.response_time.map(data => ({
            app,
            timestamp: data[0],
            value: data[1]
        }))
    }
}


function get(app) {
    return dispatch => {
        dispatch(getResponseTime(app));

        const params = new URLSearchParams();
        params.append('from', '2020-01-30T21:00:00Z');
        params.append('to', '2020-01-30T22:01:00Z');

        fetch(`https://scoutapm.com/api/v0/apps/${app}/metrics/response_time?${params}`, {
            headers: {
                "X-SCOUT-API": API_KEY
            }
        }).then(
            response => response.json(),
            err => console.log('err', err)
        ).then(json => dispatch(receiveResponseTime(app, json)))
    }
}


export function fetchResponseTime(app) {
    return (dispatch) => {
        return dispatch(get(app))
    }
}
