import React, { Component } from "react"
import { Select } from 'antd';
import 'antd/dist/antd.css'
const Option = Select.Option;
class QueryIndex extends Component {
    render() {
        return (
            <div className="abnormal_module">
                <span className="span_statis">查询索引 : </span>
                <Select
                    showSearch
                    placeholder="请选择索引"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                >
                    <Option value="max">索引 1</Option>
                    <Option value="min">索引 2</Option>
                    <Option value="avg">索引 3</Option>
                    <Option value="count">索引 4</Option>
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

export default QueryIndex;