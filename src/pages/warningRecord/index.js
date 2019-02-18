import React, { Component } from 'react'
import BaseForm from "./../../components/BaseForm"
import { Card , Table} from "antd"
import axios from "./../../axios"
import "./index.less"


export default class WarningRecord extends Component {

    formList = [
        {
            type: 'SELECT',
            label: '告警策略',
            field: 'tactics',
            placeholder: '请选择告警策略',
            width: 98,
            list: [
                { id: '0', name: '全部' },
                { id: '1', name: '内存告警' },
            ]
        },
        {
            type: 'SELECT',
            label: '类型',
            field: 'types',
            placeholder: '请选择类型',
            width: 98,
            list: [
                { id: '0', name: '全部' },
                { id: '1', name: '服务' },
                { id: '2', name: '节点' },]
        },
        {
            type: 'SELECT',
            label: '告警对象',
            field: 'object',
            placeholder: '请选择告警对象',
            width: 98,
            list: [
                { id: '0', name: '全部 ' },
                { id: '1', name: 'k8s-master-1' },]
        },
        {
            type: '时间查询',
            placeholder: '请选择时间'
        }
    ]
    params = {
        page: 1
    }

    state = {
        isVisible: false
    }

    componentDidMount() {
        this.requestList();
    }


    requestList = () => {
        axios.requestList(this, '/table/list', this.params);
    }
    render() {
        const columns = [
            {
                title: '策略名称',
                dataIndex: 'clname',
                width: 20 + '%',
            }, {
                title: '类型',
                dataIndex: 'types',
                width: 10 + '%',
            }, {
                title: '告警对象',
                dataIndex: 'warnobject',
                width: 10 + '%',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                width: 10 + '%',
                render(state) {
                    return {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子一枚',
                        '4': '百度FE',
                        '5': '创业者'
                    }[state]
                }
            }, {
                title: '监控周期',
                dataIndex: 'period',
                width: 10 + '%',
            }, {
                title: '创建时间',
                dataIndex: 'startTime',
                width: 20 + '%',
            }, {
                title: '最后修改人',
                dataIndex: 'lastname',
                width: 10 + '%',
            }, {
                title: '操作',
                dataIndex: 'operate',
                width: 10 + '%',
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div className="warnrecord_bigBox" >
                <Card className="warnrecord_btns" >
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                    {/* <Button type="primary" icon="file-search" >立即查询</Button>
                    <Button type="primary" icon="delete" >清空记录</Button> */}
                </Card>
                <Card>
                <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}