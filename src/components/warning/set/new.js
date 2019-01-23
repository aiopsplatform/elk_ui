import React, { Component } from 'react'
import { Steps, Icon, Button } from 'antd';
import StepsOne from "./stepsOne"
import 'antd/dist/antd.css';
const Step = Steps.Step;
class News extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="new_mask" ref="new_mask">
                <div className="new_big_box">
                    <div className="new_header">
                        <span className="new_left">创建告警策略</span>
                        <span className="new_right" onClick={this.handleClick.bind(this)}><Icon type="close" /></span>
                    </div>
                    <div className="new_body">
                        <Steps current={0}>
                            <Step title="参数设置" />
                            <Step title="告警规则" />
                            <Step title="告警行为" />
                        </Steps>
                        <StepsOne />
                        <div className="one_button">
                            <Button>取消</Button>
                            <Button type="primary">下一步</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }
    handleClick() {
        // this.refs.new_mask.style = `display:none`
       
    }
}


export default News;