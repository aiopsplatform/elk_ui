import React, { Component } from 'react'
import {Card , Table , Button , Input } from 'antd'
import axios from "./../../axios"
const Search = Input.Search;
 export default class MediaManagement extends Component  {
     constructor(props){
         super(props);
         this.state={}
     }
    params = {
        page: 1
    }

    componentDidMount() {
        this.requestList();
    }

    requestList = () => {
        axios.requestList(this, '/MediaManagement/dataList', this.params);
    }
    handleWDDownload = () =>{
        alert("安装文档下载" )
    }
    handleJZDownload = () =>{
        alert("介质下载" )
    }
    
    render(){
        let _this = this
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                width: 20 + '%',
                render(name) {
                    return {
                        '0': 'OneAgent',
                        '1': 'Plugin',
                    }[name]
                }
            }, {
                title: '版本号',
                dataIndex: 'versionNumber',
                width: 15 + '%',
                render(versionNumber) {
                    return {
                        '0': '2016.3.2',
                        '1': '1.3.5',
                    }[versionNumber]
                }
            }, {
                title: '运用操作系统',
                dataIndex: 'operatingSystem',
                width: 20 + '%',
                render(versionNumber) {
                    return {
                        '0': 'aix6',
                        '1': 'windows',
                        '2': 'contons6,redhat6',
                        '3': 'contons7,redhat7',
                    }[versionNumber]
                }
            }, {
                title: '大小',
                dataIndex: 'size',
                width: 15 + '%',
                render(size) {
                    return size + "MB"
                }
                
            }, {
                title: '安装文档下载',
                dataIndex: 'wdDownload',
                width: 15 + '%',
                render(){
                    return <Button onClick={() => { _this.handleWDDownload() }} >下载</Button>
                }
            }, {
                title: '介质下载',
                dataIndex: 'jzDownload',
                width: 15 + '%',
                render(){
                    return <Button onClick={() => { _this.handleJZDownload() }} >下载</Button>
                }
            },
        ]
        let selectedRowKeys = this.state.selectedRowKeys;
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
        return(
            <div>
                <Card>
                    <Button type="primary" icon="sync" style={{marginRight:20}} >刷新</Button>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}