import React, { Component } from 'react'
import { Card , Table} from 'antd'
import axios from "./../../axios"
import BaseForm from "./../../components/BaseForm"
import "./index.less"


export default class Analyze extends Component {
    formList = [
        {
            type: 'SELECT',
            label: '查询指标',
            field: 'indexes',
            placeholder: '请选择查询指标',
            width: 200,
            list: [
                { id: '0', name: '全部' },
                { id: '1', name: '内存告警' },]
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
            <div className="analyze_bigBox" >
                <Card className="analyze_card" >
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
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