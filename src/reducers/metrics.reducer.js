import {ON_SUCCESS_FETCH_ERRORS, ON_SUCCESS_FETCH_THROUGHPUT, ON_SUCCESS_FETCH_RESPONSE_TIME} from "../actions";

function metrics(state = {}, action) {

    const app = JSON.parse(JSON.stringify(state));

    app[action.app] = Object.assign({}, app[action.app], action.json);

    switch (action.type) {
        case ON_SUCCESS_FETCH_ERRORS:
        case ON_SUCCESS_FETCH_THROUGHPUT:
        case ON_SUCCESS_FETCH_RESPONSE_TIME:
            return Object.assign({}, state, app);

        default:
            return state;
    }
}

export default metrics;
