import React, { Component } from 'react'
import MemoryWarn from "../set/memoryWarn"
import { Table } from 'antd';
import 'antd/dist/antd.css';
//表格部分
const columns = [{
    title: '告警时间',
    dataIndex: '告警时间',
    width: 20 + '%',
}, {
    title: '策略名称',
    dataIndex: '策略名称',
    render: text => data[0].策略名称 === <MemoryWarn />?<a href="/setWarning/warn_detail">{text}</a> :<a href="/setWarning/CPU_detail">{text}</a>, 
    width: 12 + '%',
}, {
    title: '类型',
    dataIndex: '类型',
    width: 6 + '%',
},
{
    title: '告警对象',
    dataIndex: '告警对象',
    width: 15 + '%',
},
{
    title: '告警当前值',
    dataIndex: '告警当前值',
    width: 15 + '%',
}, {
    title: '告警规则',
    dataIndex: '告警规则',
    width: 20 + '%',
},
{
    title: '是否发送邮件',
    dataIndex: '是否发送邮件',
    className : 'yornswnd',
    width: 12 + '%',
}];
//表格内容
const data = [{
    key: '1',
    告警时间: '2019-1-21-11:01:01',
    策略名称: <MemoryWarn />,
    类型: '节点',
    告警对象: 'k8s-master-1',
    告警当前值: '内存使用率1000MB',
    告警规则: "内存使用率>=800MB",
    是否发送邮件: '发送失败',
}];
// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class ShowTable extends Component {
    render() {
        return (
            <div>
                <Table 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={data} 
                pagination={false} 
                />
            </div>
        )
    }
}

export default ShowTable;