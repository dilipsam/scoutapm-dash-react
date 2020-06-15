import {get} from "../services/metrics.service";

export const SET_INSTANCE = 'SET_INSTANCE';
export const FETCH_ERRORS = 'GET_ERRORS';
export const ON_SUCCESS_FETCH_ERRORS = 'ON_SUCCESS_FETCH_ERRORS';
export const ON_SUCCESS_FETCH_THROUGHPUT = 'ON_SUCCESS_FETCH_THROUGHPUT';
export const ON_SUCCESS_FETCH_RESPONSE_TIME = 'ON_SUCCESS_FETCH_RESPONSE_TIME';

export function setInstance(identifier = 0) {
    return {
        type: SET_INSTANCE,
        identifier
    }
}

function onSuccess(app, json, type) {
    return {
        type,
        app,
        json
    }
}

export function fetchErrors(app) {
    return (dispatch) => {
        return dispatch(get(app, (json) => {
            dispatch(onSuccess(app, json, ON_SUCCESS_FETCH_ERRORS));
        }, 'errors'))
    }
}

export function fetchResponseTime(app) {
    return (dispatch) => {
        return dispatch(get(app, (json) => {
            dispatch(onSuccess(app, json, ON_SUCCESS_FETCH_ERRORS));
        }, 'response_time'))
    }
}

export function fetchThroughput(app){
    return (dispatch) => {
        return dispatch(get(app, (json) => {
            dispatch(onSuccess(app, json, ON_SUCCESS_FETCH_THROUGHPUT));
        }, 'throughput'))
    }
}

