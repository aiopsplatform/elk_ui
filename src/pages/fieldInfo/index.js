import React, { Component } from 'react'
import { Select, Form, Button } from 'antd'
import "./index.less"
import Bar from "./bar"
import Pie from "./pie"
const Option = Select.Option;
const FormItem = Form.Item;

export default class FieldInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            disabled: true,
            disabledTwo: false,
            num: ''
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
        this.setState({
            flag: true,
            disabled: true,
            disabledTwo: true
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 15 }
        }
        let { num, disabled, flag, disabledTwo } = this.state;
        return (
            <div className="field_big_box">
                <div className="left_box">
                    <Form layout="horizontal">
                        <FormItem label="查询索引" {...formItemLayout} >
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择索引'
                                    >
                                        <Option value='1'>索引一</Option>
                                        <Option value='2'>索引二</Option>
                                        <Option value='3'>索引三</Option>
                                        <Option value='4'>索引四</Option>
                                    </Select>
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
                        <FormItem label="查询字段" {...formItemLayout} >
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
                        <FormItem className="butons">
                            <span>选择图形 : </span>
                            <Button type="primary" onClick={this.handlePie} disabled={disabledTwo} icon="pie-chart" style={{ marginLeft: 15 }} >饼状图</Button>
                            <Button type="primary" onClick={this.handleBar} disabled={disabledTwo} icon="bar-chart" style={{ marginLeft: 30 }} >柱状图</Button>
                        </FormItem>
                        <FormItem className="start_buton">
                            <Button type="primary" onClick={this.handleStart} disabled={disabled}>START</Button>
                            <Button type="primary" onClick={this.reset} style={{marginLeft:20}} >重置</Button>
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
FieldInfo = Form.create({})(FieldInfo);