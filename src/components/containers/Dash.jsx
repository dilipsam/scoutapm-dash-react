import React, {Component} from "react";
import {connect} from 'react-redux'
import {setInstance} from "../../actions";
import AppsList from "./AppsList";
import Header from "../Header";

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iter: 0
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(setInstance(this.state.iter++));
        setInterval(() => {
            dispatch(setInstance(this.state.iter++ % 2));
        }, 120 * 1000)
    }

    render() {
        return (
            <>
                <Header instance={this.props.instance}/>
                <AppsList></AppsList>
            </>
        )
    }
}

export default connect(state => {
    const {dash} = state;
    return {
        instance: dash.instance
    }
})(Dash);
