import React, { Component } from 'react'
import { Card, Button, DatePicker, Form, InputNumber } from "antd"
import "./index.less"
import Bar from "./bar"
import Loading from "./../../components/loading"
import fetch from "./../../fetch"
import moment from "moment"
const FormItem = Form.Item;
class OftenInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: '',
            endValue: '',
            loading : false,
            dataList : ''
        }
    }

    //重置
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            startValue: '',
            endValue: '',
            loading : false
        })
    }

    componentDidUpdate(){
        if (this.state.dataList) {
            this.refs.bar.setData(this.state.dataList)
        }
    }

    //点击统计获取数据
    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.form.validateFields((err) => {
            if (!err) {
                fetch.requers(this,"/index/exceptionCount",fieldsValue)
            }
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
        let { startValue, endValue , dataList , loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="often_big_box" >
                <Card className="often_card">
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
                        <FormItem label="展示数量" >
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
                        <FormItem >
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleFilterSubmit} >统计</Button>
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.reset} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div className="BarBox" >
                    {dataList.length>0 ? <Bar ref={'bar'} /> : loading ? <Loading /> : <p className="noneData" >暂无统计数据...</p>}
                </div>
            </div>
        )
    }
}
export default Form.create()(OftenInfo);