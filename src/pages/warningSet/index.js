import React, { Component } from 'react'
import { Card, Button, Input, Badge, Table, Modal, Steps, message , Form } from 'antd'
// import axios from "./../../axios"
import "./index.less"
import moment from "moment"
import Steps1 from "./steps/steps1"
import Steps2 from "./steps/steps2"
import Steps3 from "./steps/steps3"
const Step = Steps.Step;
const Search = Input.Search;
export default class WarningSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }
    // params = {
    //     page: 1
    // }

    // componentDidMount() {
    //     this.requestList();
    // }

    // requestList = () => {
    //     axios.requestList(this, '/table/list', this.params);
    // }

    handleOperate = (type) => {
        let item = this.state.selectedRowKeys;
        let _this = this;
        if (type === 'create') {
            this.setState({
                type,
                isVisible: true
            })
        } else if (type === 'refresh') {
            this.requestList();
        } else if (type === 'delete') {
            if (item === [] || item === undefined) {
                Modal.info({
                    title: '提示',
                    content: '请先选择一条数据'
                })
                return
            } else {
                Modal.confirm({
                    title: '确认删除',
                    onOk() {
                        _this.requestList();
                        _this.setState({
                            isVisible: false,
                            selectedRowKeys: [],
                            selectedRows: []
                        })
                    }
                })
            }
        } else if (type === 'startUsing') {
            if (item === [] || item === undefined) {
                Modal.info({
                    title: '提示',
                    content: '请先选择一条数据'
                })
                return 
            }
        } else if (type === 'stopUsing') {
            if (item === [] || item === undefined) {
                Modal.info({
                    title: '提示',
                    content: '请先选择一条数据'
                })
                return 
            }
        }else if(type === 'edit'){
            alert("编辑")
        }
    }

    // handleClname1 = () => {
    //     this.props.history.push("/setWarning/warn_detail")
    // }

    // handleClname2 = () => {
    //     this.props.history.push("/setWarning/CPU_detail")
    // }

    // componentDidUpdate() {
    //     console.log(this.state.selectedRowKeys)
    //     console.log(this.state.selectedRows)
    // }
    render() {
        let _this = this;
        const columns = [
            {
                title: '策略名称',
                dataIndex: 'clname',
                width: 20 + '%',
                // render: (clname, item) => {
                //     return {
                //         "1": <span className="warn_span" onClick={(item) => { this.handleClname1(item) }}><Icon type='caret-right' />内存告警</span>,
                //         "2": <span className="warn_span" onClick={(item) => { this.handleClname2(item) }}><Icon type='caret-right' />CPU告警</span>,
                //     }[clname]
                // }
            }, {
                title: '类型',
                dataIndex: 'types',
                width: 20 + '%',
            }, {
                title: '告警对象',
                dataIndex: 'warnobject',
                width: 10 + '%',
            }, {
                title: '状态',
                dataIndex: 'state',
                width: 10 + '%',
                render(state) {
                    return {
                        '1': <Badge status="success" text="成功" />,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />
                    }[state]
                }
            },{
                title: '创建时间',
                dataIndex: 'startTime',
                width: 20 + '%',
                sorter: (a, b) => moment(a.startTime).format('YYYYMMDDHHmmss') - moment(b.startTime).format('YYYYMMDDHHmmss')
            }, {
                title: '最后修改人',
                dataIndex: 'lastname',
                width: 10 + '%',
            }, {
                title: '操作',
                dataIndex: 'operate',
                width: 10 + '%',
                render() {
                    return <span className="warnSet_edit" onClick={() => _this.handleOperate('edit')} >编辑</span>
                }
            },
        ]
        const data = [{
            key: '1',
            clname: '日志容量',
            types: '日志容量告警',
            warnobject : '运维群',
            state : '1',
            startTime: '2019-3-22 10:00:00',
            lastname : '孙大强',
          }]
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
            <div className="warnset_bigBox" >
                <Card className="warnset_btns">
                    <Button type="primary" icon="plus" onClick={() => this.handleOperate('create')} >创建</Button>
                    <Button type="primary" icon="caret-right" onClick={() => this.handleOperate('startUsing')} >启用</Button>
                    <Button type="primary" icon="close-square" onClick={() => this.handleOperate('stopUsing')} >停用</Button>
                    <Button type="primary" icon="sync" onClick={() => this.handleOperate('refresh')} >刷新</Button>
                    <Button type="primary" icon="delete" onClick={() => this.handleOperate('delete')} >删除</Button>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </Card>
                <Card>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={this.state.pagination}
                    />
                </Card>
                <Modal
                    className="warnset_modal"
                    title="创建告警策略"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
                    footer={null}
                    onOk={this.handleSubmit}
                    maskClosable={false}
                    onCancel={() => {
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false
                        })
                    }}
                    width={600}
                >
                    <UserForm type={this.state.type} userInfo={this.state.userInfo} wrappedComponentRef={(inst) => { this.userForm = inst; }} />
                </Modal>
            </div>
        )
    }
}

class UserForm extends React.Component {
    state = {
        current: 0,
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        const steps = [{
            title: '参数设置',
            content: <Steps1 / > ,
        }, {
            title: '告警规则',
            content: <Steps2 /> ,
        }, {
            title: '告警行为',
            content: < Steps3 /> ,
        }];
        return (
            <div className="steps_box" >
                <Steps current={current} style={{ marginBottom: 20 }} >
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>提交</Button>
                    }
                    {
                        current > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                上一步
              </Button>
                        )
                    }
                </div>
            </div>

        )
    }
}
UserForm = Form.create({})(UserForm);