import React, { Component } from 'react'
import { Card, DatePicker, Select, Button, Form , Empty} from 'antd'
import "./index.less"
import { connect } from "react-redux"
import fetch from "./../../fetch"
import moment from "moment"
import Loading from "./../../components/loading"
import { getData_locast } from "../../action/actioncreator"
import Bar from "./bar"
const Option = Select.Option;
const FormItem = Form.Item;
class AbnormalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: '',
            endValue: '',
            dataList: '',
            loading : false
        }
    }

    componentDidMount() {
        this.props.getList();
    }

    componentDidUpdate() {
        if (this.state.dataList.length>0) {
            this.refs.bar.setData(this.state.dataList)
        }
    }

    //点击查询获取数据
    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.form.validateFields((err) => {
            if (!err) {
                fetch.requers(this,"/index/exceptionCount",fieldsValue)
            }
        })
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
        let { inputBoxData } = this.props;
        let { startValue, endValue , dataList , loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="abnormall_big_box" >
                <Card className="abnormall_card" >
                    <Form layout="inline">
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
                        {/* <FormItem label="指标">
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
                        </FormItem> */}
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20}} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset}  >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div className="BarBox" >
                    {dataList.length>0 ? <Bar ref={'bar'} /> : loading ? <Loading /> : <Empty className="emptyStyle" description= '暂无数据，请查询...' />}
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

AbnormalInfo = Form.create({})(AbnormalInfo);
export default connect(mapStateToProps, mapDispatchToProps)(AbnormalInfo)