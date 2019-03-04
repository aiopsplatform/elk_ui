import React from 'react'
import { Card, Button, Icon, Table } from 'antd'
import axios from "./../../axios"
import "./index.less"
import moment from 'moment'
export default class WarnDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList();
    }

    requestList = () => {
        axios.requestList(this, '/table/warnList', this.params);
    }

    //刷新
    handlesx = () => {
        this.requestList();
    }
    //返回
    handleBack = () => {
        this.props.history.go(-1);
    }
    render() {

        const columns = [
            {
                title: '监控项',
                dataIndex: 'MonitorItems',
                width: 20 + '%',
            }, {
                title: '条件',
                dataIndex: 'condition',
                width: 13 + '%',
            }, {
                title: '阈值',
                dataIndex: 'VPT',
                width: 17 + '%',
                render(VPT){
                    return VPT + "MB"
                }
            }, {
                title: '启用时间',
                dataIndex: 'startTime',
                width: 30 + '%',
                sorter: (a,b) => moment(a.startTime).format('YYYYMMDDHHmmss') - moment(b.startTime).format('YYYYMMDDHHmmss')
            }, {
                title: '触发次数',
                dataIndex: 'TriggerCounter',
                width: 20 + '%',
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (<div className="warndetail_box">
            <Card className="warndetail_headerCard" >
                <p className="p_button">
                    <Button type="primary" onClick={this.handleBack} icon="left" >返回</Button>
                </p>
                <p className="p_pp"></p>
                <span className="p_title">告警内存</span>
            </Card>
            <Card>
                <div className="leftDetail" >
                    <div className="leftDetail_title">
                        <span className="span_jbsx">基本属性</span>
                    </div>
                    <div className="leftDetail_body">
                        <p className="leftDetail_cont">
                            <span className="span_lable" >策略名称 : </span>
                            <span>内存告警</span>
                        </p>
                        <p className="leftDetail_cont">
                            <span className="span_lable" >策略名称 : </span>
                            <span>内存告警</span>
                        </p>
                    </div>
                </div>
                <div className="rightDetail" >
                    <div className="rightDetail_title">
                        <span className="span_jbsx">规则</span>
                    </div>
                    <div className="rightDetail_hint">
                        <span className="span_hint">提示 : 当任意规则满足提示时,该策略属于触发状态!</span>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button type="primary" onClick={this.handlesx} style={{ marginLeft: 40 }}><Icon type="sync" />刷新</Button>
                        <Button style={{ marginLeft: 20 }} ><Icon type="delete" />删除</Button>
                    </div>
                    <div style={{ marginTop: 20 }} >
                        <Table
                            rowSelection={rowCheckSelection}
                            columns={columns}
                            dataSource={this.state.list}
                            pagination={this.state.pagination}
                        />
                    </div>
                </div>
            </Card>
        </div>)
    }
}