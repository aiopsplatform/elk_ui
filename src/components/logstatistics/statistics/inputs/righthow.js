import React, { Component } from 'react'
import Pie from "./pie"
import Bar from "./bar"
import observer from '../../../packaging/observer';

class RightShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: ''
        }
        observer.$on("handlea", (params) => {
            this.setState({
                num: params
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.num === "" ? "" : this.state.num === 1 ? <Pie /> : <Bar />}
            </div>
        )
    }
}

export default RightShow;