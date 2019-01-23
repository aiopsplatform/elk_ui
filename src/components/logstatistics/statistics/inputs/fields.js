import React, { Component } from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css'
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class Fields extends Component {
    render() {
        return (
            <div className="statistics_input">
                <span className="span_statis">统计字段 : </span>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="字段值"
                    onChange={this.handleChangeField}
                >
                    {children}
                </Select>
            </div>
        )
    }
    handleChangeField = (value) => {
        console.log(`selected ${value}`);
    }
}
export default Fields;