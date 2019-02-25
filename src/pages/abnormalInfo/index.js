import React, { Component } from 'react'
// import BaseForm from "./../../components/BaseForm"
import { Card, DatePicker, Select, Button, Form } from 'antd'
import "./index.less"
import moment from "moment"
import { connect } from "react-redux"
import Loading from "./../../components/loading"
import Bar from "./bar"
import { getData_normalBar } from "./../../action/actioncreator"
const Option = Select.Option;
const FormItem = Form.Item;
class AbnormalInfo extends Component {
    state = {
        startValue: '',
        endValue: '',
        dataX: [],
        dataY: []
    }

    componentDidMount() {
        this.props.getData();
        if(this.props.dataList.list){
            this.refs.bar.setData(this.props.dataList.list)
        }
        console.log(this.props.dataList)

    }

    //点击查询获取数据
    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        console.log(fieldsValue)
        // this.requers(fieldsValue);
    }

    // requers = (datas) => {
    //     let url = "/index/selectByIndex"
    //     fetch(url, {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(datas)
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             this.setState({
    //                 LogContent: JSON.parse(JSON.stringify(data))
    //             })
    //         }).catch(error => console.log('error is', error));
    // }
    //重置
    reset = () => {
        this.props.form.resetFields();
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
        return endValue.valueOf() <= startValue.valueOf();
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
            <div className="abnormall_big_box" >
                <Card>
                    <Form layout="inline">
                        <FormItem label="查询索引">
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择索引'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>索引一</Option>
                                        <Option value='2'>索引二</Option>
                                        <Option value='3'>索引三</Option>
                                        <Option value='4'>索引四</Option>
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
                        <FormItem label="查询指标">
                            {
                                getFieldDecorator('target')(
                                    <Select
                                        placeholder='请选择指标'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>指标一</Option>
                                        <Option value='2'>指标二</Option>
                                        <Option value='3'>指标三</Option>
                                        <Option value='4'>指标四</Option>
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
                <div className="BarBox" >
                    { !this.props.dataList.list ? <Loading /> :  <Bar ref={'bar'} />  }
                    {/* <Bar ref={'bar'} /> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    dataList: state.conditionquery.dataList
})

const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_normalBar())
    }
})
AbnormalInfo = Form.create({})(AbnormalInfo);
export default connect(mapStateToProps, mapDispatchToProps)(AbnormalInfo)