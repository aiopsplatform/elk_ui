import React, { Component } from 'react'
import { Button } from 'antd';
import Observer from "../../../packaging/observer"
import 'antd/dist/antd.css'
class StartButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
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
            <div className="statistics_input starts">
                <Button ref="startButton" type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this, num)}>
                    START
                </Button>
            </div>
        )
    }
    // componentDidUpdate() {
    //     let { num } = this.state;
    //     console.log(num)
    // }
    enterLoading = (num) => {
        if (this.state.num === "") {
            this.refs.startButton.disabled = true;
        } else {
            this.setState({ loading: true });
            Observer.$emit("handlea", this.state.num)
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000)
            // this.setState({ num: '' });
        }
    }
}

export default StartButton;