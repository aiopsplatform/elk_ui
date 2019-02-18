import React, { Component } from 'react'
import {  Card } from 'antd'
import BaseForm from "./../../components/BaseForm"
import "./index.less"
export default class RealyTQuery extends Component {
    formList = [
        {
            type: 'SELECT',
            label: '索引',
            field: 'indexes',
            placeholder: '请选择索引',
            width: 200,
            list: [
                { id: '0', name: '索引一' },
                { id: '1', name: '索引二' },
                { id: '2', name: '索引三' },
                { id: '3', name: '索引四' }]
        },
        {
            type: 'SELECT',
            label: '类型',
            field: 'types',
            placeholder: '请选择类型',
            width: 200,
            list: [
                { id: '0', name: '类型一' },
                { id: '1', name: '类型二' },
                { id: '2', name: '类型三' },
                { id: '3', name: '类型四' }]
        },
        {
            type: 'SELECT',
            label: '级别',
            field: 'rank',
            placeholder: '请选择级别',
            width: 200,
            list: [
                { id: '0', name: '级别一' },
                { id: '1', name: '级别二' },
                { id: '2', name: '级别三' },
                { id: '3', name: '级别四' }]
        },
        {
            type: 'SELECT',
            label: '服务',
            field: 'serve',
            placeholder: '请选择服务',
            width: 200,
            list: [
                { id: '0', name: '服务一' },
                { id: '1', name: '服务二' },
                { id: '2', name: '服务三' },
                { id: '3', name: '服务四' }]
        },
        {
            type: 'SELECT',
            label: '实例',
            field: 'projects',
            placeholder: '请选择实例',
            marginTop: 30,
            width: 200,
            list: [
                { id: '0', name: '实例一' },
                { id: '1', name: '实例二' },
                { id: '2', name: '实例三' },
                { id: '3', name: '实例四' }]
        },
    ]
    render() {
        return (
            <div className="realyT_big_box" >
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                    {/* <Button type="primary" className="buton" >开始</Button> */}
                </Card>
                <div className="realtime_cont_box">
                    <div className="realtime_header">
                        <span className="data_show_txt">数据展示</span>
                    </div>
                    <div className="realtime_body">

                    </div>
                </div>
            </div>
        )
    }
}