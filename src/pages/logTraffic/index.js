import React, { Component } from "react"
import { Card, DatePicker, Select, Button, Form, Table } from 'antd'
import moment from "moment"
// import axios from "./../../axios"
import "./index.less"
import { connect } from "react-redux"
import { getData_locast } from "../../action/actioncreator"
const Option = Select.Option;
const FormItem = Form.Item;
class LogTraffic extends Component {
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
    //     axios.requestList(this, '/logTraffic/datalist', this.params);
    // }

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
        let { inputBoxData } = this.props;
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: '日志类型',
                dataIndex: 'logTypes',
                width: 25 + '%',
                render(logTypes) {
                    return {
                        '0': 'linux',
                        '1': 'tomcat',
                    }[logTypes]
                }
            }, {
                title: '当前容量',
                dataIndex: 'currentCapacity',
                width: 25 + '%',
                render(currentCapacity) {
                    return currentCapacity + "GB"
                }
            }, {
                title: '平均容量',
                dataIndex: 'averageCapacity',
                width: 25 + '%',
                render(averageCapacity) {
                    return averageCapacity + "GB"
                }
            }, {
                title: '平均数据(每天/条)',
                dataIndex: 'averageData',
                width: 25 + '%',
                render(data) {
                    return data + "万"
                }
            },
        ]
        const data = [{
            key: '1',
            logTypes: '0',
            currentCapacity: '149',
            averageCapacity: '25',
            averageData: '8054',
        }, {
            key: '2',
            logTypes: '1',
            currentCapacity: '145',
            averageCapacity: '18',
            averageData: '6787',
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
                <Card className="logTraffic_cards" >
                    <Form layout="inline">
                        <FormItem label="服务">
                            {
                                getFieldDecorator('serve', {
                                    initialValue: '0'
                                })(
                                    <Select
                                        placeholder='请选择服务'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='0'>ecp_service_0232</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="类型">
                        {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择类型'
                                        style={{ width: 200 }}
                                    >
                                        {
                                            inputBoxData.length > 0 ? inputBoxData.map((item, i) => {
                                                return <Option key={i} value={item.id}>{item.describe}</Option>
                                            }) : ""
                                        }
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
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20 }} onClick={this.handleFilterSubmit}>统计</Button>
                            <Button onClick={this.reset}>重置</Button>
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


const mapStateToProps = (state) => ({
    inputBoxData: state.query.inputBoxData
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})
LogTraffic = Form.create({})(LogTraffic);
export default connect(mapStateToProps, mapDispatchToProps)(LogTraffic)