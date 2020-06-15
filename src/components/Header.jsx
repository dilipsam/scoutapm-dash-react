import React, {Component} from "react";
import {INSTANCES} from "../constants";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
            <div className="header">
                {INSTANCES.map((instance) =>
                    <span className={instance.code === this.props.instance.code? 'active': ''}
                          key={instance.code}>{instance.code}</span>)}
            </div>
        )
    }
}

export default Header;
