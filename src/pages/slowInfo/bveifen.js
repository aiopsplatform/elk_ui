import React, { Component } from 'react'
import BaseForm from "./../../components/BaseForm"
import { Card } from "antd"
import "./index.less"
// import echartTheme from './../../echartTheme'
//按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
export default class SlowInfo extends Component {
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
                    data: ['8~9', '9~10', '10~11', '11~12', '12~13', '13~14', '14~15'],
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
                    data: [10, 50, 300, 155, 130, 150, 260]
                }
            ]
        };
        return option;
    }
    formList = [
        {
            type: 'SELECT',
            label: '查询索引',
            field: 'indexes',
            placeholder: '请选择索引',
            width: 200,
            list: [
                { id: '0', name: '索引一' },
                { id: '1', name: '索引二' },
                { id: '2', name: '索引三' },
                { id: '3', name: '索引四' }]
        }, {
            type: '时间查询',
            placeholder: '请选择时间'
        }
    ]
    render() {
        return (
            <div className="slow_big_box" >
                <Card className="slow_card">
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                    {/* <Button type='primary' className="start_btn" >START</Button> */}
                </Card>
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: 500, display: 'block' }} />
            </div>
        )
    }
}