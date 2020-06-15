import React, {Component} from "react";
import db from '../db'
import Dash from "./containers/Dash";
import {Provider} from 'react-redux'
import configureStore from '../configureStore'
const store = configureStore();


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Dash />
            </Provider>
        );
    }
}

export default App;
