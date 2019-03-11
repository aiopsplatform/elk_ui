import React, { Component } from "react"
import { Card, DatePicker, Select, Button, Icon, Form, Table , Badge} from 'antd'
import moment from "moment"
import axios from "./../../axios"
import "./index.less"
const Option = Select.Option;
const FormItem = Form.Item;
export default class SystemPrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        axios.requestList(this, '/systemPrediction/datalist', this.params);
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
    render() {
        let { startValue, endValue } = this.state;
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: '时间',
                dataIndex: 'time',
                width: 25 + '%',
                sorter: (a, b) => moment(a.startTime).format('YYYYMMDDHHmmss') - moment(b.startTime).format('YYYYMMDDHHmmss')
            }, {
                title: '服务',
                dataIndex: 'service',
                width: 25 + '%',
            }, {
                title: '参数',
                dataIndex: 'parameter',
                width: 25 + '%',
            }, {
                title: '状态',
                dataIndex: 'state',
                width: 25 + '%',
                render(state) {
                    return {
                        '0': <Badge status="success" text="正常" />,
                        '1': <Badge status="warning" text="告警" />
                    }[state]
                }
            },
        ]
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
            <div>
                <Card className="SystemPrediction_cards" >
                    <Form layout="inline">
                        <FormItem label="开始时间" >
                            {
                                getFieldDecorator('begin_time', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '开始时间不能为空'
                                        }
                                    ]
                                })(
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
                                getFieldDecorator('end_time', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '结束时间不能为空'
                                        }
                                    ]
                                })(
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
                        <FormItem label="状态">
                            {
                                getFieldDecorator('state')(
                                    <Select
                                        placeholder='请选择状态'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>正常</Option>
                                        <Option value='2'>告警</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="服务">
                            {
                                getFieldDecorator('serve')(
                                    <Select
                                        placeholder='请选择服务'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>服务一</Option>
                                        <Option value='2'>服务二</Option>
                                        <Option value='3'>服务三</Option>
                                        <Option value='4'>服务四</Option>
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
            </div>
        )
    }
}

SystemPrediction = Form.create({})(SystemPrediction);