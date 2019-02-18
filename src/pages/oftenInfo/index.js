import React, { Component } from 'react'
import { Card, Button, DatePicker, Form, InputNumber } from "antd"
import "./index.less"
//按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
const FormItem = Form.Item;
class OftenInfo extends Component {
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
                    data: ['A', 'B', 'C', 'D', 'E'],
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
                    data: [800, 700, 600, 500, 400]
                }
            ]
        };
        return option;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="often_big_box" >
                <Card>
                    <Form layout="inline">
                        <FormItem label="开始时间" >
                            {
                                getFieldDecorator('begin_time')(
                                    <DatePicker
                                        showTime={true}
                                        placeholder="请选择时间"
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="结束时间" >
                            {
                                getFieldDecorator('end_time')(
                                    <DatePicker
                                        showTime={true}
                                        placeholder="请选择时间"
                                        format="YYYY-MM-DD HH:mm:ss"
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
                            <Button style={{ marginLeft: 20 }} type="primary">统计</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: 500, display: 'block' }} />
                </Card>
            </div>
        )
    }
}
export default Form.create()(OftenInfo);