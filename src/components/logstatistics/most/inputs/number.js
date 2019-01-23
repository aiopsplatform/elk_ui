import React, { Component } from 'react'
import { InputNumber } from 'antd';
import 'antd/dist/antd.css'
class Number extends Component {
    render() {
        return (
            <div>
                <span style={{fontSize:16}}>展示数量 : </span>
                <InputNumber
                    min={5}
                    max={20}
                    step={5}
                    defaultValue={5}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
    onChange(value) {
        console.log('changed', value);
    }
}

export default Number;