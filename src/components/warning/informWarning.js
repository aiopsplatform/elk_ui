import React, { Component } from 'react'
import { Button, Icon, Input, Pagination, Menu, Dropdown, Table } from 'antd';
import New from './inform/new'
import CPUWarn from "./set/cpuWarn"
import Buttons from "./inform/buttons"
import 'antd/dist/antd.css';
import "../../css/warning.css"
const Search = Input.Search;


//表格部分
const columns = [{
  title: '名称',
  dataIndex: '名称',
  width: 13 + '%',
  className: "dddddd",
}, {
  title: '描述',
  dataIndex: '描述',
  width: 13 + '%',
}, {
  title: '邮箱',
  dataIndex: '邮箱',
  width: 24 + '%',
},
{
  title: '创建时间',
  dataIndex: '创建时间',
  width: 20 + '%',
},
{
  title: '关联策略',
  dataIndex: '关联策略',
  render: text => data[0].关联策略 === <CPUWarn /> ? <a href="/setWarning/CPU_detail">{text}</a> : <a href="/setWarning/warn_detail">{text}</a>,
  width: 20 + '%',
},
{
  title: '操作',
  dataIndex: '操作',
  width: 10 + '%',
}];


const data = [{
  key: '1',
  名称: 'wangwu',
  描述: 'go work',
  邮箱: 'xxxxxx@163.com',
  创建时间: "2019-1-21-11:01:01",
  关联策略: <CPUWarn />,
  操作: <Buttons />
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
class InformWarning extends Component {
  render() {
    return (
      <div className="warning_big_box">
        <New ref="news" />
        <div className="header_box">
          <div className="buttons">
            <Button type="primary" onClick={this.handleNew.bind(this)} ><Icon type="plus" />创建</Button>
            <Button  onClick={this.handlesx.bind(this)}><Icon type="sync" />刷新</Button>
            <Button><Icon type="delete" />删除</Button>
            <Button><Icon type="edit" />修改</Button>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>

          <div className="Pagination">
            <span>共计1条</span>
            <Pagination simple defaultCurrent={1} total={1} />
          </div>
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false} />
        </div>
      </div>
    )
  }
  handleNew() {
    this.refs.news.setState({
      flag: true
    })
  }
  handlesx() {
    this.props.history.go(0);
  }
}

export default InformWarning;