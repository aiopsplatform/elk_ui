import React, { Component } from 'react'
import {  Input, Select } from 'antd';
import 'antd/dist/antd.css';
const Option = Select.Option;
class StepsOne extends Component {
    render() {
        return (
            <div style={{paddingTop:30}}>               
                <div className="one_name">
                    <span style={{ fontSize: 16, marginRight: 30 }}>名称 : </span>
                    <Input
                        placeholder="请输入名称"
                        className="baibashi"
                    />
                </div>
                <div className="one_type">
                    <div>
                        <span className="span_a">类型 : </span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            defaultValue="节点"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="节点">节点</Option>
                        </Select>
                    </div>
                    <div>
                        <span className="span_a">监控周期 : </span>
                        <Select
                            showSearch
                            // style={{ width: 200 }}
                            optionFilterProp="children"
                            defaultValue="5分钟"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="5分钟">5分钟</Option>
                            <Option value="10分钟">10分钟</Option>
                            <Option value="15分钟">15分钟</Option>
                            <Option value="20分钟">20分钟</Option>
                        </Select>
                    </div>
                </div>
                <div className="one_obj">
                    <span style={{ fontSize: 16, marginRight: 30 }}>监控对象 : </span>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        optionFilterProp="children"
                        placeholder="请选择节点"
                        className="baibashi"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="节点一">节点一</Option>
                        <Option value="节点二">节点二</Option>
                        <Option value="节点三">节点三</Option>
                        <Option value="节点四">节点四</Option>
                    </Select>
                </div>
            </div>
        )
    }
}

export default StepsOne;