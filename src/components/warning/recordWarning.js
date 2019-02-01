import React, { Component } from 'react'
import { Select, DatePicker, Button, Icon, Table, Pagination } from 'antd';
import 'antd/dist/antd.css'
import "../../css/warning.css"

const Option = Select.Option;

//表格部分
const columns = [{
    title: '告警时间',
    dataIndex: '告警时间',
    width: 20 + '%',
}, {
    title: '策略名称',
    dataIndex: '策略名称',
    render: text => data[0].策略名称 === <span><Icon type="caret-right" />内存告警</span> ? <a href="/setWarning/warn_detail">{text}</a> : <a href="/setWarning/CPU_detail">{text}</a>,
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
    className: 'yornswnd',
    width: 12 + '%',
}];
//表格内容
const data = [{
    key: '1',
    告警时间: '2019-1-21-11:01:01',
    策略名称: <span><Icon type="caret-right" />内存告警</span>,
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
class RecordWarning extends Component {
    render() {
        return (
            <div className="record_big_box">
                <div className='record_small_box'>
                    <div className="record_header">
                        <div>
                            <Select
                                showSearch
                                placeholder="选择告警策略"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                            >
                                <Option value="max">全部</Option>
                                <Option value="min">内存告警</Option>
                            </Select>
                        </div>
                        <div>
                            <Select
                                showSearch
                                placeholder="选择类型"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                            >
                                <Option value="max">全部</Option>
                                <Option value="min">服务</Option>
                                <Option value="avg">节点</Option>
                            </Select>
                        </div>
                        <div>
                            <Select
                                showSearch
                                placeholder="选择告警对象"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                            >
                                <Option value="max">全部</Option>
                                <Option value="min">k8s-master-1</Option>
                            </Select>
                        </div>
                        <div>
                            <DatePicker
                                onChange={this.onChange.bind(this)}
                                placeholder="选择开始时间"
                            />
                        </div>
                        <div>
                            <DatePicker
                                onChange={this.onChange.bind(this)}
                                placeholder="选择结束时间"
                            />
                        </div>
                        <div>
                            <Button type="primary"><Icon type="file-search" />立即查询</Button>
                            <Button><Icon type="delete" />清空所有记录</Button>
                        </div>
                    </div>
                    <div className="record_pagination">
                        <div className="paginations">
                            <span>共计1条</span>
                            <Pagination simple defaultCurrent={1} total={1} />
                        </div>
                    </div>
                </div>
                <div>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    />
                </div>
            </div>

        )
    }
    componentDidMount(){
        this.render();
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
}

export default RecordWarning;