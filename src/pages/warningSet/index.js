import React, { Component } from 'react'
import { Card, Button, Input, Badge, Table, Icon, Modal, Radio, Form, Steps, message, Select, InputNumber } from 'antd'
import axios from "./../../axios"
import "./index.less"
import moment from "moment"
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const Option = Select.Option;
export default class WarningSet extends Component {
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

    handleOperate = (type) => {
        if (type === 'create') {
            this.setState({
                type,
                isVisible: true
            })
        }
    }
    handleClname = () =>{
        this.props.history.push("/setWarning/warn_detail")
    }

    render() {
        const columns = [
            {
                title: '策略名称',
                dataIndex: 'clname',
                width: 20 + '%',
                render: (text, item, clname) => {
                    return <a onClick={(item) => { this.handleClname(item) }}>
                        <Icon type='caret-right' />{clname === 1 ? '内存告警' : 'CPU告警'}
                    </a>
                }
            }, {
                title: '类型',
                dataIndex: 'types',
                width: 10 + '%',
            }, {
                title: '告警对象',
                dataIndex: 'warnobject',
                width: 10 + '%',
                render(warnobject) {
                    return warnobject == 1 ? '男' : '女'
                }
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
            }, {
                title: '监控周期',
                dataIndex: 'period',
                width: 10 + '%',
            }, {
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
            <div className="warnset_bigBox" >
                <Card className="warnset_btns">
                    <Button type="primary" icon="plus" onClick={() => this.handleOperate('create')} >创建</Button>
                    <Button type="primary" icon="caret-right" onClick={() => this.handleOperate('startUsing')} >启用</Button>
                    <Button type="primary" icon="close-square" onClick={() => this.handleOperate('stopUsing')} >停用</Button>
                    <Button type="primary" icon="sync" onClick={() => this.handleOperate('refresh')} >刷新</Button>
                    <Button type="primary" icon="delete" onClick={() => this.handleOperate('delete')} >删除</Button>
                    <Input placeholder="搜索" style={{ width: 200 }} />
                    <Button type="primary" icon="search" >搜索</Button>
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
                    className="warnset_modal"
                    title="创建告警策略"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
                    footer={null}
                    onOk={this.handleSubmit}
                    maskClosable = {false}
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
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 19 }
        }
        const steps = [{
            title: '参数设置',
            content: <Form layout="horizontal">
                <FormItem label="名称" {...formItemLayout}>
                    {
                        getFieldDecorator('user_name')(
                            <Input type="text" placeholder="请输入名称" />
                        )
                    }
                </FormItem>
                <div className="typesBox" >
                    <div className="typesOne">
                        <span>类型 : </span>
                        <FormItem style={{ width: 160 }} >
                            {
                                getFieldDecorator('types')(
                                    <Select placeholder="请选择节点" >
                                        <Option value={1}>节点</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </div>
                    <div className="typesOne">
                        <span>监控周期 : </span>
                        <FormItem style={{ width: 160 }} >
                            {
                                getFieldDecorator('period')(
                                    <Select placeholder="请选择周期" >
                                        <Option value={1}>5分钟</Option>
                                        <Option value={2}>10分钟</Option>
                                        <Option value={3}>15分钟</Option>
                                        <Option value={4}>20分钟</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </div>

                </div>
                <FormItem label="监控对象" {...formItemLayout}>
                    {
                        getFieldDecorator('object')(
                            <Select>
                                <Option value={1}>节点一</Option>
                                <Option value={2}>节点二</Option>
                                <Option value={3}>节点三</Option>
                                <Option value={4}>节点四</Option>
                                <Option value={5}>节点五</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>,
        }, {
            title: '告警规则',
            content: <div>
                <Form layout="inline">
                    <FormItem style={{ width: 110 }} >
                        {
                            getFieldDecorator('Utilization', {
                                initialValue: 1
                            })(
                                <Select style={{ width: 110 }} >
                                    <Option value={1}>5分钟</Option>
                                    <Option value={2}>10分钟</Option>
                                    <Option value={3}>15分钟</Option>
                                    <Option value={4}>20分钟</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 80 }} >
                        {
                            getFieldDecorator('size', {
                                initialValue: 1
                            })(
                                <Select style={{ width: 80 }}>
                                    <Option value={1}><Icon type="right" /></Option>
                                    <Option value={2}><Icon type="left" /></Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('shownumber')(
                                <InputNumber
                                    min={4}
                                    max={20}
                                    step={2}
                                    placeholder="选择数量"
                                />
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 90 }}  >
                        {
                            getFieldDecorator('mb')(
                                <Input type="text" width="100" placeholder="MB" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary"><Icon type="plus" /></Button>
                        <Button style={{ marginLeft: 10 }} ><Icon type="close" /></Button>
                    </FormItem>
                </Form>
                <div className="two_wz">
                    <p><Icon type="exclamation-circle" /> </p>
                    <p>
                        <span style={{ color: 'blue' }}>CPU利用率</span>=所有容器实例占用CPU总和/CPU资源总量<br />
                        <span style={{ color: 'blue' }}>内存使用率</span>=所有容器实例占用内存总和/容器实例数量
                    </p>
                </div>
            </div>,
        }, {
            title: '告警行为',
            content: <Form layout="horizontal">
                <FormItem label="发送通知" {...formItemLayout}>
                    {
                        getFieldDecorator('yesOrNo', {
                            initialValue: 1
                        })(
                            <RadioGroup>
                                <Radio value={1}>是</Radio>
                                <Radio value={2}>否</Radio>
                            </RadioGroup>
                        )
                    }
                </FormItem>
                <p>
                    <Icon type="exclamation-circle" />
                    <span>选择'是',我们会向您发送监控信息和告警信息,选择'否',我们将不会向您发送告警信息</span>
                </p>
                <FormItem label="告警通知组" {...formItemLayout}>
                    {
                        getFieldDecorator('period', {
                            initialValue: 1
                        })(
                            <Select>
                                <Option value={1}>5分钟</Option>
                                <Option value={2}>10分钟</Option>
                                <Option value={3}>15分钟</Option>
                                <Option value={4}>20分钟</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>,
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