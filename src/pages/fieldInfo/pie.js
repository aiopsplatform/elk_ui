import React, { Component } from 'react'
import echarts from 'echarts';

export default class Pie extends Component {
    componentDidMount() {
        this.addPie()
    }
    componentDidUpdate() {
        this.addPie()
    }
    addPie() {
        let myChart = echarts.init(this.refs.box);

        // let xArr = [];
        // let yArr = [];
        // if (this.state.data) {
        //     for (let i = 0; i < this.state.data.length; i++) {
        //         xArr.push(this.state.data[i].name);
        //         yArr.push(this.state.data[i].val);
        //     }
        // }



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
        myChart.setOption(option)
    }
    render() {
        return (
            <div ref={'box'} style={{ height: '600px' }}></div>
        )
    }
}