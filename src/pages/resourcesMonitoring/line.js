import React , {Component} from 'react'
import echarts from 'echarts';

export default class Line extends Component{
    componentDidMount(){
        this.addLine()
    }
    componentDidUpdate(){
        this.addLine()
    }
    addLine() {
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
                axisPointer: {
                    type: 'cross',
                    axis: 'auto',
                    snap: true,
                    crossStyle: {
                        type: 'solid'
                    }
                }
            },
            series: [{
                data: [19, 20, 40, 4, 50, 3, 60],
                type: 'line',
                smooth: true
            }],

        };
        myChart.setOption(option)
    }
    render(){
        return(
            <div ref={'box'} style={{height: '480px' }}></div>
        )
    }
}