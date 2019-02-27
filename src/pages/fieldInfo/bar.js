import React from 'react';
import echarts from 'echarts';

export default class Bar extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: undefined
    //     }
    // }
    // setData(data) {
    //     this.setState({
    //         data: data
    //     })
    // }
    componentDidMount(){
        this.addBar()
    }
    componentDidUpdate(){
        this.addBar()
    }
    addBar() {
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
        myChart.setOption(option)
    }
    render() {
        return (<div ref={'box'} style={{ height: '600px' }}>

        </div>)
    }
}