import React, { Component } from 'react';
import { Card, Form, Input, Select, Button, Table } from 'antd'
import "./index.less"
const Option = Select.Option;
const FormItem = Form.Item;
class ApplicationMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: <div className="meth" >方法名称</div>,
                dataIndex: 'methodName',
                width: 80 + '%',
            },{
                title: <div className="meth" >操作</div>,
                dataIndex: 'operate',
                width: 20 + '%',
                render() {
                    return <span className="applicationMethod_edit" >监控该方法</span>
                }
            },
        ]
        const data = [{
            key: '1',
            methodName: <div className="Tabledata" ><span className="comApm" >com.demo.apm</span><span className="middle" >.User</span><span className="blues" >.buyTicket</span><span className="last" >(com.demo.apm.Fish)</span></div>,
        }, {
            key: '2',
            methodName: <div className="Tabledata" ><span className="comApm" >com.demo.apm</span><span className="middle" >.User</span><span className="blues" >.commitDB</span><span className="last" >()</span></div>,
        }, {
            key: '2',
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
                        columns={columns}
                        dataSource={data}
                        pagination={this.state.pagination}
                    />

                </Card>
                <Card>
                    <Button type="primary" style={{marginRight:30}} >监控剩余方法</Button>
                    <Button type="primary" >取消所有监控</Button>
                </Card>
            </div>
        );
    }
}
ApplicationMethod = Form.create({})(ApplicationMethod);
export default ApplicationMethod;