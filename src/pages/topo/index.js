import React, { Component } from 'react';
import echarts from 'echarts'

import bd from "./img/bd.jpg"
import dhf from "./img/dhf.jpg"
import fq from "./img/fq.jpg"
import qq from "./img/qq.jpg"
import wx from "./img/wx.jpg"


class Topo extends Component {

    componentDidMount() {
        this.addGraph();
    }

    addGraph() {

        var graph = {
            nodes: [
                { 'id': '0', name: '', symbol: 'image://' + bd, x: 200, y: 300 },
                { 'id': '1', name: '', symbol: 'image://' + dhf, x: 150, y: 400 },
                { 'id': '2', name: '', symbol: 'image://' + fq, x: 250, y: 400 },
                { 'id': '3', name: '', symbol: 'image://' + qq, x: 200, y: 500 },
                { 'id': '4', name: '', symbol: 'image://' + wx, x: 300, y: 500 }],
            links: [
                { 'id': '0', source: '0', target: '1' },
                { 'id': '1', source: '0', target: '2' },
                { 'id': '2', source: '2', target: '3' },
                { 'id': '3', source: '2', target: '4' }
            ]
        }

        let myChart = echarts.init(this.refs.topo);
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
                    symbolSize: [100, 50],
                    symbol: 'roundRect',
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                        },
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
                    data: graph.nodes,
                    links: graph.links,
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
            <div ref={'topo'} style={{ width: '100%', height: 500 }}  >
            </div>
        );
    }
}

export default Topo;