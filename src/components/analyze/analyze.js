import React, { Component } from 'react'
import { Select, Button, Table } from 'antd';
import Alert from "./aleComponents/alert"
import 'antd/dist/antd.css'
import "../../css/analyze.css"
const Option = Select.Option;

class Analyze extends Component {
    render() {
        const columns = [{
            title: '询问url',
            dataIndex: '询问url',
            key: '询问url',
            width: 25 + '%'
        }, {
            title: '服务名',
            dataIndex: '服务名',
            key: '服务名',
            width: 20 + '%'
        }, {
            title: '耗时',
            dataIndex: '耗时',
            key: '耗时',
            width: 20 + '%'
        }, {
            title: '异常',
            key: '异常',
            dataIndex: '异常',
            width: 20 + '%'
        }, {
            title: '操作',
            key: '操作',
            dataIndex: '操作',
            width: 15 + '%',
            className: 'caozuo'
        }];

        const data = [{
            key: '1',
            询问url: 'login',
            服务名: 'shop',
            耗时: 5 + 's',
            异常: '无',
            操作: <span onClick={this.handleFW.bind(this)}>链路访问</span>
        }];
        return (
            <div className="ale_box">
                <Alert ref="alert_show" />
                <div className="ale_header_box">
                    <div className="ale_search">
                        <span style={{ fontSize: 16 }}>查询指标 : </span>
                        <Select
                            showSearch
                            placeholder="请选择查询指标"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                        >
                            <Option value="max">max</Option>
                            <Option value="min">min</Option>
                            <Option value="avg">avg</Option>
                            <Option value="count">count</Option>
                        </Select>
                    </div>
                    <Button type="primary">查询</Button>
                </div>
                
                <div className="ale_body">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>

        )
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    handleFW() {
        this.refs.alert_show.setState({
            flag : true
        })
    }
}

export default Analyze;