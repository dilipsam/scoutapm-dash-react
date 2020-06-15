import {combineReducers} from 'redux'
import posts from './response_time'
import dash from './dash.reducer'
import metrics from "./metrics.reducer";

const rootReducer = combineReducers({
    posts,
    dash,
    metrics
});

export default rootReducer
