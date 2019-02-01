import React, { Component } from 'react'
import echarts from 'echarts'

class Line extends Component {
    render() {
        return (
            <div ref="box" style={{ width: 1000, height: 480 }}></div>
        )
    }
    componentDidMount() {
        var myChart = echarts.init(this.refs.box);
        this.option = {

            xAxis: {
                type: 'category',
                data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: "axis",
                show: true,
                axisPointer : {
                    type : 'cross',
                    axis : 'auto',
                    snap : true,
                    crossStyle : {
                        type : 'solid'
                    }
                }
            },
            series: [{
                data: [19, 20, 40, 4, 50, 3, 60],
                type: 'line',
                smooth: true
            }],

        };
        myChart.setOption(this.option);
    }
}

export default Line;