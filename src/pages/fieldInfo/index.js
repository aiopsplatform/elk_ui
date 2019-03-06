import React, { Component } from 'react'
import { Select, Form, DatePicker, Button, Icon, Input } from 'antd'
import "./index.less"
import moment from "moment"
import Bar from "./bar"
import Pie from "./pie"
const Option = Select.Option;
const FormItem = Form.Item;
let id = 0;
export default class FieldInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            disabled: true,
            disabledTwo: false,
            num: '',
            startValue: '',
            endValue: ''
        }
    }
    //重置
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            flag: false,
            disabled: true,
            disabledTwo: false,
            num: ''
        })
    }

    handlePie = () => {
        this.setState({
            num: 1,
            disabled: false
        })
    }
    handleBar = () => {
        this.setState({
            num: 2,
            disabled: false
        })
    }
    handleStart = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        console.log(fieldsValue)
        this.setState({
            flag: true,
            disabled: true,
            disabledTwo: true
        })
    }
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 1) {
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
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        let { num, disabled, flag, disabledTwo, startValue, endValue } = this.state;
        const formItems = keys.map((k, index) => (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? '查询条件' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`names[${k}]+indexes`, {
                        validateTrigger: ['onChange', 'onBlur']
                    })(
                        <Select
                            placeholder='请选择索引'
                            style={{ width: 130 }}
                        >
                            <Option value='1'>索引一</Option>
                            <Option value='2'>索引二</Option>
                            <Option value='3'>索引三</Option>
                            <Option value='4'>索引四</Option>
                        </Select>
                    )}
                    {
                        getFieldDecorator(`names[${k}]+symbol`)(
                            <Select
                                style={{ width: 60 }}
                            >
                                <Option value='1'>=</Option>
                                <Option value='2'><Icon type="left" /></Option>
                                <Option value='3'><Icon type="right" /></Option>
                                <Option value='4'>≤</Option>
                                <Option value='5'>≥</Option>
                            </Select>
                        )
                    }
                    {
                        getFieldDecorator(`names[${k}]+number`)(
                            <Input style={{ width: 80 }} />
                        )
                    }
                    {
                        getFieldDecorator(`names[${k}]+orAnd`)(
                            <Select
                                style={{ width: 80 }}
                            >
                                <Option value='1'>or</Option>
                                <Option value='2'>and</Option>
                            </Select>
                        )
                    }
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
        ));
        return (
            <div className="field_big_box">
                <div className="left_box">
                    <Form layout="horizontal">
                        <FormItem label="开始时间" {...formItemLayout} >
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
                        <FormItem label="结束时间" {...formItemLayout} >
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
                        <FormItem label="查询指标" {...formItemLayout} >
                            {
                                getFieldDecorator('target')(
                                    <Select
                                        placeholder='请选择指标'
                                    >
                                        <Option value='1'>指标一</Option>
                                        <Option value='2'>指标二</Option>
                                        <Option value='3'>指标三</Option>
                                        <Option value='4'>指标四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="统计字段" {...formItemLayout} >
                            {
                                getFieldDecorator('field')(
                                    <Select
                                        placeholder='请选择字段'
                                    >
                                        <Option value='1'>字段一</Option>
                                        <Option value='2'>字段二</Option>
                                        <Option value='3'>字段三</Option>
                                        <Option value='4'>字段四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="分段规则" {...formItemLayout} >
                            {
                                getFieldDecorator('rule')(
                                    <Input placeholder="请选择分段规则" />
                                )
                            }
                        </FormItem>
                        {formItems}
                        <FormItem {...formItemLayoutWithOutLabel}>
                            <Button type="primary" onClick={this.add} style={{ width: '60%' }}>
                                <Icon type="plus" /> 添加查询条件
                            </Button>
                        </FormItem>
                        <FormItem className="butons">
                            <span>选择图形 : </span>
                            <Button type="primary" onClick={this.handlePie} disabled={disabledTwo} icon="pie-chart" style={{ marginLeft: 15 }} >饼状图</Button>
                            <Button type="primary" onClick={this.handleBar} disabled={disabledTwo} icon="bar-chart" style={{ marginLeft: 30 }} >柱状图</Button>
                        </FormItem>
                        <FormItem className="start_buton">
                            <Button type="primary" onClick={this.handleStart} disabled={disabled}>START</Button>
                            <Button type="primary" onClick={this.reset} style={{ marginLeft: 20 }} >重置</Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="right_box" >
                    {num === 2 && flag ? <Bar /> : num === 1 && flag ? <Pie /> : ''}
                </div>
            </div>
        )
    }
}
FieldInfo = Form.create({ name: 'dynamic_form_item' })(FieldInfo);