import React, {Component} from "react";
import {fetchErrors, fetchThroughput, fetchResponseTime} from "../../actions";
import {connect} from 'react-redux';
import Chart from "../Chart";
import {map, sortBy} from "lodash";

class AppMetrics extends Component {

    componentDidMount() {
        const {dispatch, id} = this.props;
        dispatch(fetchErrors(id));
        dispatch(fetchThroughput(id));
        dispatch(fetchResponseTime(id));
    }

    render() {
        const {id, name} = this.props;
        return (
            <section>
                <Chart {...this.props}/>
            </section>

        )
    }
}

export default connect((state, props) => {
    const {metrics} = state;
    const {id} = props;
    const chartTypeMap = {
        'response_time': 'line'
    };

    return {
        metrics: sortBy(map(metrics[id], ((data, name) => ({name, data, type: chartTypeMap[name] || 'area'}))), 'name')
    }
})(AppMetrics);
