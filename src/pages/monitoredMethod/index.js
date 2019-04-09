import React, { Component } from 'react';
import { Card, Form, Input, Select, Button, Table } from 'antd'
import "./index.less"
const Option = Select.Option;
const FormItem = Form.Item;
class MonitoredMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

   

    componentDidMount() {
        var now=new Date().getTime();
        var dom_load = now - performance.timing.navigationStart;
        console.log('页面加载时间为：' + dom_load);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: <div className="meth" >方法名称</div>,
                dataIndex: 'methodName',
                width: 100 + '%',
            },
        ]
        const data = [{
            key: '1',
            methodName: <div className="Tabledata" ><span className="comApm" >com.demo.apm</span><span className="middle" >.User</span><span className="blues" >.buyTicket</span><span className="last" >(com.demo.apm.Fish)</span></div>,
        }, {
            key: '2',
            methodName: <div className="Tabledata" ><span className="comApm" >com.demo.apm</span><span className="middle" >.User</span><span className="blues" >.commitDB</span><span className="last" >()</span></div>,
        }, {
            key: '3',
            methodName: <div className="Tabledata" ><span className="comApm" >com.demo.apm</span><span className="middle" >.User</span><span className="blues" >.login</span><span className="last" >()</span></div>,
        }]

        return (
            <div>
                <Card title="监控方法列表" >
                    <Form layout="inline">
                        <FormItem label="服务">
                            {
                                getFieldDecorator('serve', {
                                    initialValue: '0'
                                })(
                                    <Select
                                        placeholder='请选择服务'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='0'>ecp_service_0232</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="关键字" >

                            {
                                getFieldDecorator('keyWord')(
                                    <Input placeholder="请输入关键字" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleFilterSubmit}>查询</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <Table
                        // rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}
MonitoredMethod = Form.create({})(MonitoredMethod);
export default MonitoredMethod;