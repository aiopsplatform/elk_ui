import React, { Component } from 'react'
import echarts from 'echarts'

class Bar extends Component {
    render() {
        return (
            <div ref="box" style={{ width: 600, height: 600 }}></div>
        )
    }
    componentDidMount() {
        var myChart = echarts.init(this.refs.box);
        this.option = {
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
        myChart.setOption(this.option);
    }
}

export default Bar;