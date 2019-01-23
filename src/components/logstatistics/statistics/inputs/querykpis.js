import React, { Component } from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css'
const Option = Select.Option;

class QueryKPIs extends Component {
    render() {
        return (
            <div className="statistics_input">
                <span className="span_statis">查询指标 : </span>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="请选择查询指标"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="max">max</Option>
                    <Option value="min">min</Option>
                    <Option value="avg">avg</Option>
                    <Option value="count">count</Option>
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

export default QueryKPIs;