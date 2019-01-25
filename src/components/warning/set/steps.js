import React, { Component } from 'react'
import { Steps } from 'antd';
import Observer from "../../packaging/observer"
import 'antd/dist/antd.css';
const Step = Steps.Step;
class Stepss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        Observer.$on("handle", (params) => {
            this.setState({
                num: params + 1
            })
        })
        Observer.$on("handle1", (params) => {
            this.setState({
                num: params - 1
            })
        })
    }
    render() {
        let num = this.state.num;
        // console.log(num)
        return (
            <div>
                <Steps current={num}>
                    <Step title="参数设置" />
                    <Step title="告警规则" />
                    <Step title="告警行为" />
                </Steps>
            </div>
        )
    }
}

export default Stepss;