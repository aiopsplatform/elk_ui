import React, { Component } from 'react'
import { Card, Button, Table, Form, Select , Modal } from "antd"
import axios from "./../../axios"
const Option = Select.Option;
const FormItem = Form.Item;

export default class AbnormalConfig extends Component {
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
    //     axios.requestList(this, '/table/abnormalConfig', this.params);
    // }

    //点击新建按钮
    handleCreate = () => {
        this.setState({
            isVisible: true
        })
    }

    // 创建异常配置提交
    handleSubmit = () => {
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
    
    handleDelete = () =>{
        let item = this.state.selectedRowKeys;
        if (item === [] || item === undefined) {
            Modal.info({
                title: '提示',
                content: '请先选择一条数据'
            })
            return
    }
}
    render() {
        const columns = [
            {
                title: '类型',
                dataIndex: 'types',
                width: 25 + '%',
            }, {
                title: '名称',
                dataIndex: 'name',
                width: 25 + '%',
            }, {
                title: '关键字',
                dataIndex: 'keyword',
                width: 50 + '%',
            }
        ]
        const data = [{
            key: '1',
            types: 'nginx',
            name: 'nginx异常',
            keyword: '301,302,304,404,500,504',
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
            <div>
                <Card>
                    <Button type="primary" icon="plus" onClick={this.handleCreate} >创建</Button>
                    <Button type="primary" icon="delete" onClick={this.handleDelete} style={{ marginLeft: 20 }} >删除</Button>
                </Card>
                <Card>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        // dataSource={this.state.list}
                        dataSource={data}
                        pagination={this.state.pagination}
                    />
                </Card>
                <Modal
                    className="abnormalConfigModal"
                    title="新建异常配置"
                    style={{ borderRadius: 30 }}
                    visible={this.state.isVisible}
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
                    <UserForm userInfo={this.state.userInfo} wrappedComponentRef={(inst) => { this.userForm = inst; }} />
                </Modal>
            </div>
        )
    }
}
class UserForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 }
        }
        return (
            <Form layout="horizontal">
                <FormItem label="类型" {...formItemLayout}>
                    {
                        getFieldDecorator('types')(
                            <Select
                                placeholder='请选择类型'
                                style={{ width: 200 }}
                            >
                                <Option value='1'>类型一</Option>
                                <Option value='2'>类型二</Option>
                                <Option value='3'>类型三</Option>
                                <Option value='4'>类型四</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="名称" {...formItemLayout}>
                    {
                        getFieldDecorator('name')(
                            <Select
                                placeholder='请选择名称'
                                style={{ width: 200 }}
                            >
                                <Option value='1'>名称一</Option>
                                <Option value='2'>名称二</Option>
                                <Option value='3'>名称三</Option>
                                <Option value='4'>名称四</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="关键字" {...formItemLayout}>
                    {
                        getFieldDecorator('keywork')(
                            <Select
                                placeholder='请选择关键字'
                                style={{ width: 200 }}
                            >
                                <Option value='1'>关键字一</Option>
                                <Option value='2'>关键字二</Option>
                                <Option value='3'>关键字三</Option>
                                <Option value='4'>关键字四</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);