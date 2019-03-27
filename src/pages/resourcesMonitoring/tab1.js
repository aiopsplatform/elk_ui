import React, { Component } from 'react'
import { Card, Form, Button, Select, Empty } from "antd"
import Line from "./line"
const FormItem = Form.Item;
const Option = Select.Option;
class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    handleFilterSubmit = () => {
        this.setState({
            loading: true
        })
    }

    reset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { loading } = this.state;
        let  {inputBoxData}  = this.props;
        return (
            <div>
                <Card className="resourcesm_card" >
                    <Form layout="inline">
                        <FormItem label="节点名">
                            {
                                getFieldDecorator('servicename')(
                                    <Select
                                        placeholder='请选择节点名'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>节点一</Option>
                                        <Option value='2'>节点二</Option>
                                        <Option value='3'>节点三</Option>
                                        <Option value='4'>节点四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="类型">
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择类型'
                                        style={{ width: 200 }}
                                    >
                                        {
                                            inputBoxData.length > 0 ? inputBoxData.map((item, i) => {
                                                return <Option key={i} value={item.id}>{item.describe}</Option>
                                            }) : ""
                                        }
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
                    {loading ? <Line /> : <Empty className="emptyStyle" description='暂无数据，请查询...' />}
                </div>
            </div>
        )
    }
}
export default Form.create()(Tab1);