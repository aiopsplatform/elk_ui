import React, { Component } from 'react'
import { Card, Button, Input, Table, Modal, Form, Icon } from 'antd'
import axios from "./../../axios"
import "./index.less"
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Search = Input.Search;
let id = 0
export default class WarningInform extends Component {
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
        if (type === 'create') {
            this.setState({
                type,
                isVisible: true
            })
        }
    }

    // 创建通知组提交
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
                title: '组名',
                dataIndex: 'groupName',
                width: 20 + '%',
            }, {
                title: '描述',
                dataIndex: 'describe',
                width: 30 + '%',
            }, {
                title: '创建时间',
                dataIndex: 'startTime',
                width: 30 + '%',
            }, {
                title: '最后修改人',
                dataIndex: 'lastname',
                width: 20 + '%',
            }
        ]
        const data = [{
            key: '1',
            groupName: '运维组',
            describe: '发送告警通知运维组',
            startTime: '2019-3-22 10:00:00',
            lastname: '孙大强',
        }]
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
                    className="warnInformModal"
                    title="创建通知组"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    maskClosable={false}
                    onCancel={() => {
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false
                        })
                    }} x
                    width={600}
                >
                    <UserForm type={this.state.type} userInfo={this.state.userInfo} wrappedComponentRef={(inst) => { this.userForm = inst; }} />
                </Modal>
            </div>
        )
    }
}

class UserForm extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
            return;
        }

        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 19 }
        }
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k) => (
            <div className="email_box"
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                style={{ marginLeft: 65 }}
                key={k}
            >
                <FormItem>
                     {
                            getFieldDecorator(`queryCondition[${k}]email`)(
                                <Input type="text" placeholder="请输入名称" />
                            )
                        }
                </FormItem>
                <FormItem style={{ width: 100 }} className="remark" >
                    {
                            getFieldDecorator(`queryCondition[${k}]remark`)(
                                <Input type="text" placeholder="请输入备注" />
                            )
                        }
                </FormItem>
                <FormItem className="emailBtns" >
                        <Button type="primary">验证邮箱</Button>
                        <Button onClick={() => this.remove(k)} >取消</Button>
                    </FormItem>
            </div>
        ));

        return (
            <Form layout="horizontal">
                <FormItem label="组名" {...formItemLayout}>
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
                {formItems}
                <span className="aAdd" onClick={this.add}  ><span className="wranInform_span" ><Icon type="plus-circle" /> 添加邮箱</span></span>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);