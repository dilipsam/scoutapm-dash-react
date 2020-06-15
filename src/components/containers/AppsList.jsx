import React, {Component} from "react";
import {connect} from 'react-redux'
import AppMetrics from "./AppMetrics";

class AppsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {instance} = this.props;
        return (
            <section className="container">
                <span>selected instance is: {instance.name}</span>
                <section>{instance.apps.map((app) => <AppMetrics {...app} key={app.id}></AppMetrics>)}</section>
            </section>
        )
    }
}


export default connect(state => {
    const {dash} = state;
    return {
        instance: dash.instance
    }
})(AppsList);
