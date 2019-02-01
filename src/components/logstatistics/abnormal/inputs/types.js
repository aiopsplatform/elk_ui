import React, { Component } from "react"
import { Select } from 'antd';
import 'antd/dist/antd.css'
const Option = Select.Option;
class Types extends Component {
    render() {
        return (
            <div className="abnormal_module">
                <span className="span_statis">查询指标 : </span>
                <Select
                    showSearch
                    placeholder="请选择异常类型"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                >
                    <Option value="max">类型 1</Option>
                    <Option value="min">类型 2</Option>
                    <Option value="avg">类型 3</Option>
                    <Option value="count">类型 4</Option>
                </Select>
            </div>
        )
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }
}

export default Types;