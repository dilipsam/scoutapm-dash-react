import {INSTANCES} from "../constants";
import {SET_INSTANCE} from "../actions";

function dash(state = {
                  instance: INSTANCES[0]
              },
              action) {
    switch (action.type) {
        case SET_INSTANCE:
            return Object.assign({}, state, {
                instance: INSTANCES[action.identifier]
            });
        default:
            return state;
    }

}

export default dash;
