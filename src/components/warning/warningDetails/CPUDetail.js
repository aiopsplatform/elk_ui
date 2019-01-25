import React, { Component } from 'react'
import moment from "moment"
import { Button, Icon, Table } from 'antd'
import 'antd/dist/antd.css'
const columns = [{
    title: '监控项',
    dataIndex: '监控项',
    width: 20 + '%'
}, {
    title: '条件',
    dataIndex: '条件',
    width: 13 + '%'
}, {
    title: '阈值',
    dataIndex: '阈值',
    width: 17 + '%'
},{
    title: '启用时间',
    dataIndex: '启用时间',
    width: 30 + '%',
    sorter: (a,b) => moment(a.启用时间).format('YYYYMMDDHHmmss') - moment(b.启用时间).format('YYYYMMDDHHmmss')
},{
    title: '触发次数',
    dataIndex: '触发次数',
    width: 20 + '%'
}];
const data = [{
    key: '1',
    监控项: '内存使用率',
    条件: '>',
    阈值: '80.00 MB',
    启用时间: '2019-1-24 14:00:00',
    触发次数: 5
},{
    key: '2',
    监控项: '内存使用率',
    条件: '>',
    阈值: '80.00 MB',
    启用时间: '2019-1-24 14:00:10',
    触发次数: 5
}];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class CPUDDetail extends Component {
    render() {
        return (
            <div className="warndetail_big_box">
                <div className="warndetail_header">
                    <p className="p_button">
                        <Button type="primary" onClick={this.handleBack.bind(this)}>
                            <Icon type="left" />返回
                        </Button>
                    </p>
                    <p className="p_pp"></p>
                    <span className="p_title">CPU告警</span>
                </div>
                <div className="warndetail_body">
                    <div className="body_left">
                        <div className="body_header">
                            <span className="span_jbsx">基本属性</span>
                        </div>
                        <div className="body_left_body">
                            <p className="left_body_cont">
                                <span>策略名称 : </span>
                                <span>CPU告警</span>
                            </p>
                            <p className="left_body_cont">
                                <span>策略名称 : </span>
                                <span>内存告警</span>
                            </p>
                        </div>
                    </div>
                    <div className="body_right">
                        <div className="body_header">
                            <span className="span_jbsx">规则</span>
                        </div>
                        <div className="body_right_hint">
                            <span className="span_hint">提示 : 当任意规则满足提示时,该策略属于触发状态!</span>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <Button type="primary" onClick={this.handlesx.bind(this)} style={{ marginLeft: 40 }}><Icon type="sync" />刷新</Button>
                            <Button style={{ marginLeft: 20 }} ><Icon type="delete" />删除</Button>
                        </div>
                        <div>
                            <Table
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                                style={{marginTop:20}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleBack(){
        this.props.history.go(-1);
    }
    handlesx(){
        this.props.history.go(0);
    }
}


export default CPUDDetail;