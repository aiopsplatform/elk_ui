import React, { Component } from 'react'
import { Card, Table } from 'antd'
import axios from "./../../axios"
export default class Tab2 extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.requestList();
    }

    requestList = () => {
        axios.requestList(this, '/tabs2/dataList', this.params);
    }
    render() {
        const columns = [
            {
                title: '节点名称',
                dataIndex: 'nodeName',
                width: 20 + '%',
                render(nodeName){
                    return {
                        '1' : 'node05',
                        '2' : 'node03',
                        '3' : 'node06'
                    }[nodeName]
                }
            }, {
                title: 'IP地址',
                dataIndex: 'IPAddress',
                width: 20 + '%',
                render(IPAddress){
                    return {
                        '1' : '10.1.71.77',
                        '2' : '10.1.71.152',
                        '3' : '10.1.71.150'
                    }[IPAddress]
                }
            }, {
                title: 'CPU使用情况',
                dataIndex: 'CPUSituation',
                width: 20 + '%',
                render(CPUSituation){
                    return CPUSituation + '%'
                }
            }, {
                title: '内存使用率',
                dataIndex: 'memoryUtilization',
                width: 20 + '%',
                render(memoryUtilization){
                    return memoryUtilization + '%'
                }
            }, {
                title: '磁盘使用率',
                dataIndex: 'diskUtilization',
                width: 20 + '%',
                render(diskUtilization){
                    return diskUtilization + '%'
                }
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })

            }
        }
        return (
                <Card>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={false}
                    />
                </Card>
        )
    }
}