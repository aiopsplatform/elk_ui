import React, { Component } from 'react'

import echarts from 'echarts'

class Pie extends Component {


    render() {
        return (
            <div ref="box" style={{ width: 600, height: 600, marginTop: 50 }}></div>
        )
    }

    componentDidMount() {
        // app.title = '环形图';
        var myChart = echarts.init(this.refs.box);
        this.option = {
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
        myChart.setOption(this.option);
    }
}

export default Pie;