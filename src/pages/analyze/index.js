import React, { Component } from 'react'
import { Card, Table, Modal, Tree, Form, Select, Button , Icon } from 'antd'
import axios from "./../../axios"
import "./index.less"
import Graph from "./graph"
const { TreeNode } = Tree;
const Option = Select.Option;
const FormItem = Form.Item;
export default class Analyze extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisibleDetails: false,
            isVisibleTrack: false
            
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

    handleVisitDetails = () => {
        this.setState({
            isVisibleDetails: true
        })
    }
    handleVisitTrack = () =>{
        this.setState({
            isVisibleTrack : true
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
                width: 15 + '%',
            }, {
                title: '操作',
                dataIndex: 'operation',
                width:  10+ '%',
                render: (item, operation) => {
                    return <span className="Link_access" onClick={(item) => { this.handleVisitDetails(item) }}>
                        链路访问
                    </span>
                }
            }, {
                width: 10 + '%',
                render: (item, operation) => {
                    return <span className="Link_access" onClick={(item) => { this.handleVisitTrack(item) }}>
                        链路查询
                    </span>
                }
            }
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
                            <Button type="primary" style={{ marginRight: 20}} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset} >重置</Button>
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
                    visible={this.state.isVisibleDetails}
                    footer={null}
                    maskClosable={false}
                    onCancel={() => {
                        this.setState({
                            isVisibleDetails: false
                        })
                    }}
                    width={600}
                >
                    <Tree
                        showIcon
                        switcherIcon={<Icon type="down" />}
                    >
                        <TreeNode title="parent 1" key="0-0" >
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
                <Modal
                    title="login调用链路跟踪"
                    style={{ borderRadius: 30 , top : 20 }}
                    visible={this.state.isVisibleTrack}
                    footer={null}
                    maskClosable={false}
                    onCancel={() => {
                        this.setState({
                            isVisibleTrack: false
                        })
                    }}
                    width={700}
                >
                   <Graph />
                </Modal>
            </div>
        )
    }
}
Analyze = Form.create({})(Analyze);
