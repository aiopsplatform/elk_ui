import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import Observer from "../../../packaging/observer"
import 'antd/dist/antd.css'
class Buttons extends Component {
    state = {
        size: 'large',
    }
    render() {
        let {size } = this.state;
        return (
            <div className="statistics_input">
                <span className="span_statis">图标类型 : </span>
                <Button.Group size={size}>
                    <Button ref="startButton"  type="primary" onClick={this.handleSend.bind(this,1)}>
                        <Icon type="pie-chart" />
                        <span>饼状图</span>
                    </Button>
                    <Button type="primary" onClick={this.handleSend.bind(this,2)}>
                        <Icon type="bar-chart" />
                        <span>柱状图</span>
                    </Button>
                </Button.Group>
            </div>
        )
    }
    handleSend(num){
        Observer.$emit("handle",num)
        this.refs.startButton.disabled = true;
    }
}

export default Buttons;