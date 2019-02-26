import React, { Component } from 'react'
import { Select, Form, Button } from 'antd'
import "./index.less"
//按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图和饼图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
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
    componentWillMount() {
        echarts.registerTheme('Imooc');
    }
    getOption = () => {
        let option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['字段A', '字段B', '字段C', '字段D', '字段E', '字段F', '字段G'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    barWidth: '60%',
                    data: [200, 70, 150, 155, 330, 40, 150]
                }
            ]
        };
        return option;
    }
    getOptionPie = () => {
        let option = {
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['字段A', '字段B', '字段C', '字段D', '字段E', '字段F']
            },
            series: [
                {
                    name: '字段值',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 200, name: '字段A' },
                        { value: 70, name: '字段B' },
                        { value: 150, name: '字段C' },
                        { value: 155, name: '字段D' },
                        { value: 330, name: '字段E' },
                        { value: 150, name: '字段F' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
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
                    {num === 2 && flag ? <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: 600 }} /> : num === 1 && flag ? <ReactEcharts option={this.getOptionPie()} theme="Imooc" style={{ height: 600 }} /> : ''}
                </div>
            </div>
        )
    }
}
FieldInfo = Form.create({})(FieldInfo);