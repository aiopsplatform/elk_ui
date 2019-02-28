import React, { Component } from 'react'
import { Card, Table, Modal, Tree, Form, Select, Button } from 'antd'
import axios from "./../../axios"
import "./index.less"
const { TreeNode } = Tree;
const Option = Select.Option;
const FormItem = Form.Item;
export default class Analyze extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    params = {
        page: 1
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
                    return <span className="Link_access" onClick={(item) => { this.handleVisit(item) }}>
                        链路访问
                    </span>
                }
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const { getFieldDecorator } = this.props.form;
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
                    <Form layout="inline">
                        <FormItem label="查询指标">
                            {
                                getFieldDecorator('index')(
                                    <Select
                                        placeholder='请选择查询指标'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>全部</Option>
                                        <Option value='2'>内存告警</Option>
                                        <Option value='3'>CPU告警</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20, marginTop: 5 }} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset} style={{ marginTop: 5 }} >重置</Button>
                        </FormItem>
                    </Form>
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
Analyze = Form.create({})(Analyze);
