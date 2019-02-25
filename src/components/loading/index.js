import React, { Component } from 'react'
import { Icon } from "antd"
import "./index.less"
export default class Loading extends Component {
    render() {
        return (<div>
            <Icon className="Loading" type="loading-3-quarters" spin />
        </div>)
    }
}