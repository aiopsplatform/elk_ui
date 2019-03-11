import React, { Component } from 'react'
import { Card, DatePicker, Table, Form, Button, Select , Modal } from "antd"
import axios from "./../../axios"
import moment from "moment"
import "./index.less"
const Option = Select.Option;
const FormItem = Form.Item;

export default class WarningRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            startValue: '',
            endValue: ''
        }
    }

    params = {
        page: 1
    }

    componentDidMount() {
        this.requestList();
    }

    requestList = () => {
        axios.requestList(this, '/table/list', this.params);
    }
    //重置
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            startValue: '',
            endValue: ''
        })
    }
    //时间选择范围
    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return startValue.valueOf() > new Date().getTime();
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return endValue.valueOf() > new Date().getTime();
        }
        return endValue.valueOf() <= startValue.valueOf() || endValue.valueOf() > new Date().getTime();
    }
    onChange = (fields, value) => {
        this.setState({
            [fields]: value,
        });
    }
    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }
    handleOperate = (type) => {
        let item = this.state.selectedRowKeys;
        let _this = this;
        if (type === 'refresh') {
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
            }
        } else if (type === 'stopUsing') {
            if (item === [] || item === undefined) {
                Modal.info({
                    title: '提示',
                    content: '请先选择一条数据'
                })
            }
        }
    }
    handleEdit = () =>{
        alert("编辑")
    }
    render() {
        let _this = this;
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
                render() {
                    return <span className="warnSet_edit" onClick={_this.handleEdit} >编辑</span>
                }
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const { getFieldDecorator } = this.props.form;
        let { startValue, endValue } = this.state;
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
            <div className="warnrecord_bigBox" >
                <Card className="warnrecord_btns" >
                    <Form layout="inline">
                        <FormItem label="告警策略">
                            {
                                getFieldDecorator('tactics')(
                                    <Select
                                        placeholder='请选择告警策略'
                                        style={{ width: 180 }}
                                    >
                                        <Option value='1'>全部</Option>
                                        <Option value='2'>内存告警</Option>
                                        <Option value='3'>CPU告警</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="类型">
                            {
                                getFieldDecorator('types')(
                                    <Select
                                        placeholder='请选择类型'
                                        style={{ width: 180 }}
                                    >
                                        <Option value='1'>类型一</Option>
                                        <Option value='2'>类型二</Option>
                                        <Option value='3'>类型三</Option>
                                        <Option value='4'>类型四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="告警对象">
                            {
                                getFieldDecorator('object')(
                                    <Select
                                        placeholder='请选择告警对象'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>全部</Option>
                                        <Option value='2'>k8s-master-1</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="开始时间" >
                            {
                                getFieldDecorator('begin_time')(
                                    <DatePicker
                                        placeholder="请选择开始时间"
                                        format="YYYY-MM-DD HH:mm:ss"
                                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                        setFieldsValue={startValue}
                                        onChange={this.onStartChange}
                                        disabledDate={this.disabledStartDate}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="结束时间" >
                            {
                                getFieldDecorator('end_time')(
                                    <DatePicker
                                        placeholder="请选择结束时间"
                                        format="YYYY-MM-DD HH:mm:ss"
                                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                        setFieldsValue={endValue}
                                        onChange={this.onEndChange}
                                        disabledDate={this.disabledEndDate}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20}} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card className="tableBox" >
                    <div className="buttonsBox" >
                        <Button type="primary" icon="caret-right" onClick={() => this.handleOperate('startUsing')} >启用</Button>
                        <Button type="primary" icon="close-square" onClick={() => this.handleOperate('stopUsing')} >停用</Button>
                        <Button type="primary" icon="sync" onClick={() => this.handleOperate('refresh')} >刷新</Button>
                        <Button type="primary" icon="delete" onClick={() => this.handleOperate('delete')} >删除</Button>
                    </div>
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
WarningRecord = Form.create({})(WarningRecord);