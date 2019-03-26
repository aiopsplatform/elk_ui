import React, { Component } from 'react'
import { Select, Form, DatePicker, Button, Icon, Input, Empty } from 'antd'
import "./index.less"
import moment from "moment"
import { connect } from "react-redux"
import { fetch } from "whatwg-fetch"
import fetchChart from "./../../fetch"
import Loading from "./../../components/loading"
import { getData_locast } from "../../action/actioncreator"
import Bar from "./bar"
import Pie from "./pie"
const Option = Select.Option
const FormItem = Form.Item
let id = 0
class FieldInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            disabled: true,
            disabledTwo: false,
            ChartType: '',
            startValue: '',
            endValue: '',
            fieldsIdList: {
                indexes: ''
            },
            fieldsList: '',
            dataList: '',
            loading: false,
            operationType: 0,
            showOrNo: ''
        }
    }

    componentDidMount() {
        this.props.getList();
    }

    //重置
    reset = () => {
        this.props.form.resetFields();
        this.setState({
            flag: false,
            disabled: true,
            disabledTwo: false,
            ChartType: '',
            dataList: ''
        })
        // this.props.history.go(0)
    }

    handlePie = () => {
        this.setState({
            ChartType: 0,
            disabled: false
        })
    }

    handleBar = () => {
        this.setState({
            ChartType: 1,
            disabled: false
        })
    }

    // componentDidUpdate() {
    //     let { dataList, ChartType } = this.state;
    //     if (dataList === '' ) {
    //         return ;
    //     } else {
    //         if (ChartType === 0) {
    //             this.refs.pie.setData(dataList)
    //         } else if (ChartType === 1) {
    //             this.refs.bar.setData(dataList)
    //         }
    //     }
    // }

    handleStart = () => {
        let that = this;
        let fieldsValue = this.props.form.getFieldsValue();
        let { dataList, ChartType } = this.state;
        this.props.form.validateFields((err) => {
            if (!err) {
                fetchChart.requers(this, "/index/fieldStatistics", fieldsValue);
            }
        })
        this.setState({
            disabled: true,
            disabledTwo: true
        })
        if (ChartType === 0) {
            that.refs.pie.setData(dataList)
        } else if (ChartType === 1) {
            that.refs.bar.setData(dataList)
        }
    }

    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
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


    handleOperationType = (i) => {
        this.setState({
            operationType: i
        }, () => {
            if (this.state.operationType == 0) {
                this.setState({
                    showOrNo: false
                })
            } else {
                this.setState({
                    showOrNo: true
                })
            }
        })
    }

    handleGetFields = (i) => {
        let url = "/index/getIndexMetaData"
        this.setState({
            fieldsIdList: {
                indexes: i
            }
        }, () => {
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.fieldsIdList)
            })
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        fieldsList: JSON.parse(JSON.stringify(data))
                    })
                })
                .catch(error => { console.log('error is', error) });
        })
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        let { inputBoxData } = this.props;
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
                xs: { span: 26, offset: 8 },
                sm: { span: 20, offset: 4 },
            },
        };

        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        let { ChartType, disabled, flag, disabledTwo, startValue, endValue, fieldsList, loading } = this.state;
        const formItems = keys.map((k, index) => (
            <div className="divFlex"
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                style={{ marginLeft: index === 0 ? 0 : 69 }}
                key={k}
            >
                <FormItem
                    label={index === 0 ? '查询条件' : ''}
                />
                <FormItem
                    required={false}
                >
                    {getFieldDecorator(`queryCondition[${k}]fields`, {
                        validateTrigger: ['onChange', 'onBlur']
                    })(
                        <Select
                            placeholder='请选择字段'
                            style={{ width: 130, marginRight: 20 }}
                        >
                            {
                                fieldsList.length > 0 ? fieldsList.map((item, i) => {
                                    return <Option key={i} value={item.id}>{item.name}</Option>
                                }) : ""
                            }
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator(`queryCondition[${k}]symbol`)(
                            <Select
                                style={{ width: 60, marginRight: 20 }}
                            >
                                <Option value='0'>=</Option>
                                <Option value='1'><Icon type="left" /></Option>
                                <Option value='2'><Icon type="right" /></Option>
                                <Option value='3'>≤</Option>
                                <Option value='4'>≥</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator(`queryCondition[${k}]number`)(
                            <Input type="number" style={{ width: 80, marginRight: 20 }} />
                        )
                    }
                </FormItem>
                <FormItem>
                    {keys.length > 0 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            // disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            </div>
        ));

        return (
            <div className="field_big_box">
                <div className="left_box">
                    <Form layout="horizontal">
                        <FormItem label="查询类型" {...formItemLayout} >
                            {
                                getFieldDecorator('indexes', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '类型不能为空'
                                        }
                                    ]
                                })(
                                    <Select
                                        placeholder='请选择类型'
                                        style={{ width: 200 }}
                                        onChange={this.handleGetFields}
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
                        <FormItem label="开始时间" {...formItemLayout} >
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
                        <FormItem label="结束时间" {...formItemLayout} >
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
                        {formItems}
                        <FormItem {...formItemLayoutWithOutLabel}>
                            <Button type="primary" onClick={this.add} style={{ width: '60%' }}>
                                <Icon type="plus" /> 添加查询条件
                            </Button>
                        </FormItem>
                        {/* <FormItem label="操作类型" {...formItemLayout} >
                            {
                                getFieldDecorator('operationType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '操作类型不能为空'
                                        }
                                    ],
                                    initialValue: '0'
                                })(
                                    <Select
                                        placeholder='请选择操作类型'
                                        onChange={this.handleOperationType}
                                    >
                                        <Option value='0'>COUNT</Option>
                                        <Option value='1'>SUM</Option>
                                        <Option value='2'>AVEKAGE</Option>
                                        <Option value='3'>MAX</Option>
                                        <Option value='4'>MIN</Option>
                                    </Select>
                                )
                            }
                        </FormItem> */}
                        <FormItem label="统计字段" {...formItemLayout} >
                            {
                                getFieldDecorator('field', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '字段不能为空'
                                        }
                                    ]
                                })(
                                    <Select
                                        placeholder='请选择字段'
                                    >
                                        {
                                            fieldsList.length > 0 ? fieldsList.map((item, i) => {
                                                return <Option key={i} value={item.id}>{item.name}</Option>
                                            }) : ""
                                        }
                                    </Select>
                                )
                            }
                        </FormItem>
                        {/* {
                            this.state.showOrNo ?

                                <FormItem
                                    label="时间分段" {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('timeSegmentation')(
                                            <Select
                                                placeholder='请选择时间分段'
                                                onChange={this.handleOperationType}

                                            >
                                                <Option value='0'>1</Option>
                                                <Option value='1'>5</Option>
                                                <Option value='2'>25</Option>
                                                <Option value='3'>50</Option>
                                            </Select>
                                        )
                                    }
                                </FormItem>
                                :
                                <FormItem
                                    label="分段规则" {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('rule')(
                                            <Input
                                                placeholder="请选择分段规则"
                                            />
                                        )
                                    }
                                </FormItem>
                        } */}

                        <FormItem label="选择图形" {...formItemLayout} >
                            <Button type="primary" onClick={this.handlePie} disabled={disabledTwo} icon="pie-chart" style={{ marginLeft: 15 }} >饼状图</Button>
                            <Button type="primary" onClick={this.handleBar} disabled={disabledTwo} icon="bar-chart" style={{ marginLeft: 30 }} >柱状图</Button>
                        </FormItem>
                        <FormItem className="start_buton">
                            <Button title="请先选择需要展示的图表类型" type="primary" onClick={this.handleStart} disabled={disabled}>开始统计</Button>
                            <Button type="primary" onClick={this.reset} style={{ marginLeft: 20 }} >重置</Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="right_box" >
                    {ChartType === 1 && flag ? <Bar ref={'bar'} /> : ChartType === 0 && flag ? <Pie ref={'pie'} /> : loading ? <div className="loadingBox" > <Loading /> </div> : <Empty className="fieldEmptyStyle" description='暂无数据，请查询...' />}
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

FieldInfo = Form.create({ name: 'dynamic_form_item' })(FieldInfo);
export default connect(mapStateToProps, mapDispatchToProps)(FieldInfo)