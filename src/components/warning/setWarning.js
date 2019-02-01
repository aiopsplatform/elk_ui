import React, { Component } from 'react'
import { Button, Icon, Input, Pagination, Table } from 'antd'
import moment from "moment"
import StartUseStatus from "./set/startUseStatus"
import News from "./set/new"
import Buttons from "./set/buttons"
import 'antd/dist/antd.css'
import "../../css/warning.css"
const Search = Input.Search;




// rowSelection object indicates the need for row selection

class SetWarning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      cindex: '',
      data: [],
      selectedRows : ''
    }
  }
  render() {
    //表格头部分
    const columns = [{
      title: '策略名称',
      dataIndex: '策略名称',
      render: text => this.state.data[0].策略名称 === <span><Icon type="caret-right" />内存告警</span> ? <a href="/setWarning/warn_detail">{text}</a> : <a href="/setWarning/CPU_detail">{text}</a>,
      width: 20 + '%',
    }, {
      title: '类型',
      dataIndex: '类型',
      width: 10 + '%',
    }, {
      title: '告警对象',
      dataIndex: '告警对象',
      width: 10 + '%',
    },
    {
      title: '状态',
      dataIndex: '状态',
      width: 10 + '%',
    },
    {
      title: '监控周期',
      dataIndex: '监控周期',
      width: 10 + '%',
    }, {
      title: '创建时间',
      dataIndex: '创建时间',
      width: 20 + '%',
      sorter: (a, b) => moment(a.创建时间).format('YYYYMMDDHHmmss') - moment(b.创建时间).format('YYYYMMDDHHmmss')
    },
    {
      title: '最后修改人',
      dataIndex: '最后修改人',
      width: 10 + '%',
    },
    {
      title: '操作',
      dataIndex: '操作',
      width: 10 + '%',
    }];


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        if (selectedRows.length !== 0) {
          this.setState({
            flag: false,
            cindex: `${selectedRowKeys}`,
            selectedRows : selectedRows
          })
        } else {
          this.setState({
            flag: true,
          })
        }
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div className="warning_big_box">
        <News ref='news' />
        <div className="header_box">
          <div className="buttons">
            <Button type="primary" onClick={this.handleNew.bind(this)} ><Icon type="plus" />创建</Button>
            <Button disabled={this.state.flag ? true : false} ><Icon type="caret-right" />启用</Button>
            <Button disabled={this.state.flag ? true : false} ref="tingyong" ><Icon type="close-square" theme="filled" />停用</Button>
            <Button onClick={this.handlesx.bind(this)} ><Icon type="sync" />刷新</Button>
            <Button disabled={this.state.flag ? true : false} onClick={this.handleDel.bind(this)} ><Icon type="delete" />删除</Button>
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
            dataSource={this.state.data}
            pagination={false}
          />
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
  handleDel(e) {
    e.stopPropagation();
    // this.state.removeList.remove();
    this.state.data.splice(this.state.selectedRows,this.state.selectedRows.length)
    console.log(this.state.selectedRows)
    // let ActiveObj = this.state.data[this.state.cindex];
    // let arr = this.state.data;
    // arr.splice(this.state.cindex, 1);
    // console.log(this.state.cindex)
    // this.setState({
    //   data: arr,
    //   flag : true
    // })
  }
  //表格内容
  componentWillMount() {
    this.setState({
      cindex : '',
      data: [{
        key: '0',
        策略名称: <span><Icon type="caret-right" />内存告警</span>,
        类型: 1,
        告警对象: 'xxx',
        状态: <StartUseStatus />,
        监控周期: 5 + "分钟",
        创建时间: "2019-1-21-11:01:01",
        最后修改人: 'yangxiong',
        操作: <Buttons />,
      },
      {
        key: '1',
        策略名称: <span><Icon type="caret-right" />内存告警</span>,
        类型: 12,
        告警对象: 'xxx',
        状态: <StartUseStatus />,
        监控周期: 5 + "分钟",
        创建时间: "2019-1-21-11:01:01",
        最后修改人: 'yangxiong',
        操作: <Buttons />,
      }, {
        key: '2',
        策略名称: <span><Icon type="caret-right" />内存告警</span>,
        类型: 123,
        告警对象: 'xxx',
        状态: <StartUseStatus />,
        监控周期: 5 + "分钟",
        创建时间: "2019-1-21-11:01:01",
        最后修改人: 'yangxiong',
        操作: <Buttons />,
      }]
    })
  }
}

export default SetWarning;