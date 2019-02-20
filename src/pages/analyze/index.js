import React, { Component } from 'react'
import { Card, Table, Modal, Tree} from 'antd'
import axios from "./../../axios"
import BaseForm from "./../../components/BaseForm"
import "./index.less"
const { TreeNode } = Tree;
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
        axios.requestList(this, '/analyze/list', this.params);
    }

    handleVisit = () => {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const columns = [
            {
                title: '询问URL',
                dataIndex: 'askURL',
                width: 25 + '%',
            }, {
                title: '服务名',
                dataIndex: 'serviceName',
                width: 20 + '%',
            }, {
                title: '耗时',
                dataIndex: 'timeConsuming',
                width: 20 + '%',
            }, {
                title: '异常',
                dataIndex: 'abnormal',
                width: 20 + '%',
            }, {
                title: '操作',
                dataIndex: 'operation',
                width: 15 + '%',
                render: (item, operation) => {
                    return <a onClick={(item) => { this.handleVisit(item) }}>
                        链路访问
                    </a>
                }
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
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
                <Modal
                    title="login链路详情"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
                    footer={null}
                    maskClosable={false}
                    onCancel={() => {
                        this.setState({
                            isVisible: false
                        })
                    }}
                    width={600}
                >
                    <Tree
                        showLine
                        draggable
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0">
                                <TreeNode title="leaf" key="0-0-0-0" />
                                <TreeNode title="leaf" key="0-0-0-1" />
                                <TreeNode title="leaf" key="0-0-0-2" />

                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title="leaf" key="0-0-1-0" />
                            </TreeNode>
                            <TreeNode title="parent 1-2" key="0-0-2">
                                <TreeNode title="leaf" key="0-0-2-0" />
                                <TreeNode title="leaf" key="0-0-2-1" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </Modal>
            </div>
        )
    }
}
