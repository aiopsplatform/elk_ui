import React, { Component } from 'react'
import Bar from "./bar"
import Observer from '../../../packaging/observer'

class BottomShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: ''
        }
        Observer.$on("handle", (params) => {
            this.setState({
                num: params
            })
        })
    }



    render() {
        let { num } = this.state;
        return (
            <div>
                {num === "" ? "" : <Bar />}
            </div>
        )
    }
}

export default BottomShow;