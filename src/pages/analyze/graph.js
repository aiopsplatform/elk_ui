import React, { Component } from 'react'
import echarts from "echarts"

export default class Graph extends Component {
    componentDidMount() {
        let myChart = echarts.init(this.refs.box);
        let option = {
            title: {
                text: '链路跟踪'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name: '节点1',
                        x: 200,
                        y: 300
                    }, {
                        name: '节点2',
                        x: 150,
                        y: 400
                    }, {
                        name: '节点3',
                        x: 250,
                        y: 400
                    }, {
                        name: '节点4',
                        x: 200,
                        y: 500
                    }, {
                        name: '节点5',
                        x: 300,
                        y: 500
                    }],
                    // links: [],
                    links: [{
                        source: '节点1',
                        target: '节点2'
                    }, {
                        source: '节点1',
                        target: '节点3'
                    }, {
                        source: '节点3',
                        target: '节点4'
                    }, {
                        source: '节点3',
                        target: '节点5'
                    }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        };
        myChart.setOption(option)
    }
    render() {
        return (
            <div ref={'box'} style={{ width: 600, height: 500 }} ></div>
        )
    }
}