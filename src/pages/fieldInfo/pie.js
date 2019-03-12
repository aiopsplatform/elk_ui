import React, { Component } from 'react'
import echarts from 'echarts';

export default class Pie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        this.addPie()
    }
    componentDidUpdate() {
        this.addPie()
    }
    setData(data) {
        this.setState({
            data: data
        })
    }
    addPie() {
        let myChart = echarts.init(this.refs.box);

        let legendData = [];
        // let seriesData = [];
        if (!this.state.data.length) {
            return
        } else {
            for (let i = 0; i < this.state.data.length; i++) {
                legendData.push(this.state.data[i].name);
            }
        }

        let option = {
            title: {
                text: '字段统计内容x',
                subtext: '字段统计',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: legendData
            },
            series: [
                {
                    name: '字段值',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.state.data,
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