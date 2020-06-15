import {FETCH_RESPONSE_TIME, RECEIVE_RESPONSE_TIME} from "../actions/response-time";
import {INSTANCES} from '../constants';

function posts(
    state = {
        isFetching: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case FETCH_RESPONSE_TIME:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_RESPONSE_TIME:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.series,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default posts;
