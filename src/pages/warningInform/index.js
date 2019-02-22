import React, { Component } from 'react'
import { Card, Button, Input, Table, Modal, Form , Icon} from 'antd'
import axios from "./../../axios"
import "./index.less"
const FormItem = Form.Item;
const TextArea = Input.TextArea;
export default class WarningInform extends Component {
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

    // 创建员工提交
    handleSubmit = () => {
        // let type = this.state.type;
        let data = this.userForm.props.form.getFieldsValue();
        axios.ajax({
            url: '/table/list',
            data: {
                params: data
            }
        }).then((res) => {
            if (res.code === 0) {
                this.userForm.props.form.resetFields();
                this.setState({
                    isVisible: false
                })
                this.requestList();
            }
        })
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
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }



        return (
            <div className="warnInform_bigBox" >
                <Card className="warnInform_btns" >
                    <Button type="primary" icon="plus" onClick={() => this.handleOperate('create')} >创建</Button>
                    <Button type="primary" icon="sync" onClick={() => this.handleOperate('refresh')} >刷新</Button>
                    <Button type="primary" icon="delete" onClick={() => this.handleOperate('delete')} >删除</Button>
                    <Button type="primary" icon="edit" onClick={() => this.handleOperate('edit')} >修改</Button>
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
                    className="warnInformModal"
                    title="创建告警策略"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
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
                    <span className="aAdd"  ><span className="wranInform_span" ><Icon type="plus-circle" /> 添加邮箱</span></span> 
                </Modal>
            </div>
        )
    }
}

class UserForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 19 }
        }
        return (
            <Form layout="horizontal">
                <FormItem label="用户名" {...formItemLayout}>
                    {
                        getFieldDecorator('user_name')(
                            <Input type="text" placeholder="请输入名称" />
                        )
                    }
                </FormItem>
                <FormItem label="描述" {...formItemLayout}>
                    {
                        getFieldDecorator('address')(
                            <TextArea rows={2} />
                        )
                    }
                </FormItem>
                <div className="email_box" >
                    <span className="email_span">邮箱 : </span>
                    <FormItem>
                        {
                            getFieldDecorator('email')(
                                <Input type="text" placeholder="请输入名称" />
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 100 }} className="remark" >
                        {
                            getFieldDecorator('remark')(
                                <Input type="text" placeholder="请输入备注" />
                            )
                        }
                    </FormItem>
                    <FormItem className="emailBtns" >
                        <Button type="primary">验证邮箱</Button>
                        <Button>取消</Button>
                    </FormItem>
                </div>

            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);