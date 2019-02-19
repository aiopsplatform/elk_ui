import React, { Component } from 'react'
import { Card } from "antd"
import BaseForm from "./../../components/BaseForm"
import "./index.less"
// import echarts from 'echarts'
//按需加载
import echarts from 'echarts/lib/echarts'
// 导入线形图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

export default class ResourcesM extends Component {
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
        myChart.setOption(this.option);
    }
    formList = [
        {
            type: 'SELECT',
            label: '服务名',
            field: ' servicename',
            placeholder: '请选择服务名',
            width: 200,
            list: [
                { id: '0', name: '服务名一' },
                { id: '1', name: '服务名二' },
                { id: '2', name: '服务名三' },
                { id: '3', name: '服务名四' },]
        }, {
            type: 'SELECT',
            label: '资源类型',
            field: ' types',
            placeholder: '请选择资源类型',
            width: 200,
            list: [
                { id: '0', name: '类型一' },
                { id: '1', name: '类型二' },
                { id: '2', name: '类型三' },
                { id: '3', name: '类型四' },]
        }
    ]
    render() {
        return (
            <div className="resourcesm_bigBox" >
                <Card className="resourcesm_card" >
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                    {/* <Button type="primary" icon="file-search" >立即查询</Button> */}
                </Card>
                <Card>
                    <div ref="box" style={{ height: 490 }}></div>
                </Card>
            </div>
        )
    }
}