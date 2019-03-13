import React, { Component } from "react"
import { Card, Form, Button, Select, DatePicker, Empty } from "antd"
import moment from "moment"
import Line from "./line"
import { connect } from "react-redux"
import "./index.less"
import { getData_locast } from "../../action/actioncreator"
const FormItem = Form.Item;
const Option = Select.Option;
class LogTrend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startValue: '',
            endValue: '',
            loading: false
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
    handleFilterSubmit = () => {
        this.props.form.validateFields((err) => {
            if (!err) {
                this.setState({
                    loading: true
                })
            }
        })
    }
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            startValue: '',
            endValue: '',
            loading: false
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { inputBoxData } = this.props;
        let { startValue, endValue, loading } = this.state;
        return (
            <div>
                <Card className="logTrend_cards" >
                    <Form layout="inline">
                        <FormItem label="索引">
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择索引'
                                        style={{ width: 200 }}
                                    >
                                        {
                                            inputBoxData.length > 0 ? inputBoxData.map((item, i) => {
                                                return <Option key={i} value={item.id}>{item.name}</Option>
                                            }) : ""
                                        }
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
                        <FormItem >
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleFilterSubmit} >统计</Button>
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.reset} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div>
                    {loading ? <Line /> : <Empty className="emptyStyle" description='暂无数据，请查询...' />}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    inputBoxData: state.query.inputBoxData
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})
LogTrend = Form.create()(LogTrend);
export default connect(mapStateToProps, mapDispatchToProps)(LogTrend)