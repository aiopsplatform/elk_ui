import React, { Component } from "react"
import { Card, DatePicker, Select, Button, Form, Table } from 'antd'
import moment from "moment"
// import axios from "./../../axios"
import "./index.less"
const Option = Select.Option;
const FormItem = Form.Item;
export default class RequestTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: '',
            endValue: ''
        }
    }
    // params = {
    //     page: 1
    // }
    // componentDidMount() {
    //     this.requestList();
    // }

    // requestList = () => {
    //     axios.requestList(this, '/requestTime/list', this.params);
    // }
   
    //重置
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            startValue: '',
            endValue: ''
        })
    }
    refresh = () =>{
        this.requestList();
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
                title: '请求名称',
                dataIndex: 'requestName',
                width: 25 + '%',
                render(requestName) {
                    return {
                        '0': 'login',
                        '1': 'register',
                        '2': 'Cancellation',
                    }[requestName]
                }
            }, {
                title: '服务',
                dataIndex: 'service',
                width: 25 + '%',
            }, {
                title: '预测执行时长',
                dataIndex: 'dorecastDuration',
                width: 25 + '%',
                render(dorecastDuration){
                    return dorecastDuration + "ms"
                }
            }, {
                title: '预测区间',
                dataIndex: 'predictionInterval',
                width: 25 + '%',
                render(predictionInterval){
                    return predictionInterval + "ms"
                }
            },
        ]
        const data = [{
            key: '1',
            requestName: '0',
            service: 'Half set',
            dorecastDuration: '23',
            predictionInterval: '66',
        },{
            key: '2',
            requestName: '1',
            service: 'full set',
            dorecastDuration: '66',
            predictionInterval: '36',
        },{
            key: '3',
            requestName: '2',
            service: 'full set',
            dorecastDuration: '19',
            predictionInterval: '28',
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
            <div>
                <Card className="IntelligentPrediction_cards" >
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
                            <Button type="primary" style={{ marginRight: 20}} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset} style={{ marginRight: 20}}>重置</Button>
                            <Button type="primary" onClick={this.refresh}>刷新</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}

RequestTime = Form.create({})(RequestTime);