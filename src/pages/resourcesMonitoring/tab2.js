import React, { Component } from 'react'
import { Card, Table } from 'antd'
// import axios from "./../../axios"
export default class Tab2 extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    // componentDidMount() {
    //     this.requestList();
    // }

    // requestList = () => {
    //     axios.requestList(this, '/tabs2/dataList');
    // }
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
                align : 'center',
                render(CPUSituation){
                    return CPUSituation + '%'
                }
            }, {
                title: '内存使用率',
                dataIndex: 'memoryUtilization',
                width: 20 + '%',
                align : 'center',
                render(memoryUtilization){
                    return memoryUtilization + '%'
                }
            }, {
                title: '磁盘使用率',
                dataIndex: 'diskUtilization',
                width: 20 + '%',
                align : 'center',
                render(diskUtilization){
                    return diskUtilization + '%'
                }
            }
        ]
        const data = [{
            key: '1',
            nodeName: '1',
            IPAddress: '1',
            CPUSituation : '15',
            memoryUtilization : '40',
            diskUtilization: '65',
          },{
            key: '2',
            nodeName: '2',
            IPAddress: '2',
            CPUSituation : '45',
            memoryUtilization : '33',
            diskUtilization: '66',
          },{
            key: '3',
            nodeName: '3',
            IPAddress: '3',
            CPUSituation : '12',
            memoryUtilization : '18',
            diskUtilization: '33',
          }]
        return (
                <Card>
                    <Table
                        rowSelection={null}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    />
                    <div className="nums" >
                        共<span> 3 </span>条数据
                    </div>
                </Card>
        )
    }
}