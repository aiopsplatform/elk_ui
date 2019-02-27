import React, { Component } from 'react'
import { Card, Form, Button, Select } from "antd"
// import Loading from "./../../components/loading"
import "./index.less"
import Line from "./line"
const FormItem = Form.Item;
const Option = Select.Option;
class ResourcesM extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="resourcesm_bigBox" >
                <Card className="resourcesm_card" >
                    <Form layout="inline">
                        <FormItem label="服务名s">
                            {
                                getFieldDecorator('servicename')(
                                    <Select
                                        placeholder='请选择服务名'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>服务名一</Option>
                                        <Option value='2'>服务名二</Option>
                                        <Option value='3'>服务名三</Option>
                                        <Option value='4'>服务名四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="类型">
                            {
                                getFieldDecorator('types')(
                                    <Select
                                        placeholder='请选择类型'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>类型一</Option>
                                        <Option value='2'>类型二</Option>
                                        <Option value='3'>类型三</Option>
                                        <Option value='4'>类型四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem >
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleFilterSubmit} >统计</Button>
                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.reset} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div>
                    <Line />
                </div>
            </div>
        )
    }
}
export default Form.create()(ResourcesM);