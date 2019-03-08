import React, { Component } from 'react'
import { Form, DatePicker } from "antd"
import moment from "moment"
const FormItem = Form.Item;

export default class Times extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: '',
            endValue: ''
        }
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
        return (
            <Form className="timesForm" >
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
            </Form>
        )
    }
}
Times = Form.create({})(Times);