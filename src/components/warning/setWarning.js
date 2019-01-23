import React, { Component } from 'react'
import { Button, Icon, Input, Pagination , Table } from 'antd'
import MemoryWarn from "./set/memoryWarn"
// import CpuWarn from "./set/cpuWarn"
import StartUseStatus from "./set/startUseStatus"
import Buttons from "./set/buttons"
import News from "./set/new"
import 'antd/dist/antd.css'
import "../../css/warning.css"
const Search = Input.Search;


//表格部分
const columns = [{
    title: '策略名称',
    dataIndex: '策略名称',
    render: text => <a href="javascript:;">{text}</a>,
    width : 20+'%',
  }, {
    title: '类型',
    dataIndex: '类型',
    width : 10+'%',
  }, {
    title: '告警对象',
    dataIndex: '告警对象',
    render: txt => <a href="javascript:;">{txt}</a>,
    width : 10+'%',
  },
  {
    title: '状态',
    dataIndex: '状态',
    width : 10+'%',
  },
  {
    title: '监控周期',
    dataIndex: '监控周期',
    width : 10+'%',
  },{
    title: '创建时间',
    dataIndex: '创建时间',
    width : 20+'%',
  },
  {
    title: '最后修改人',
    dataIndex: '最后修改人',
    width : 10+'%',
  },
  {
    title: '操作',
    dataIndex: '操作',
    width : 10+'%',
  }];
  const data = [{
    key: '1',
    策略名称 : <MemoryWarn />,
    类型 : 1,
    告警对象 : 'xxx',
    状态 : <StartUseStatus />,
    监控周期 : 5+ "分钟" ,
    创建时间 : "2019-1-21-11:01:01",
    最后修改人: 'yangxiong',
    操作: <Buttons />,
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
class SetWarning extends Component {
  constructor(props){
    super(props);
    this.state={
      flag : false
    }
  }
    render() {
      let {flag} = this.state
        return (
            <div className="warning_big_box">
                {flag == true?<News flag={flag} /> : ""}
                <div className="header_box">
                    <div className="buttons">
                        <Button type="primary" onClick={this.handleNew.bind(this)} ><Icon type="plus" />创建</Button>
                        <Button><Icon type="caret-right" />启用</Button>
                        <Button><Icon type="close-square" theme="filled" />停用</Button>
                        <Button><Icon type="sync" />刷新</Button>
                        <Button><Icon type="delete" />删除</Button>
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
                 <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
                </div>
            </div>
        )
    }
    handleNew(){
      this.setState({
        flag:true
      })
    }
}

export default SetWarning;