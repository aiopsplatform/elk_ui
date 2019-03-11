import React, { Component } from "react"
import { Card, Form, Select, Button , Empty} from 'antd'
import "./index.less"
import Line from "./line.js"
// import Loading from "./../../components/loading"
const Option = Select.Option;
const FormItem = Form.Item;

export default class BaselinePrediction extends Component {
    constructor(props){
        super(props);
        this.state={
            loading : true
        }
    }
    handleStart = () =>{
        this.setState({
            loading : false
        })
    }
    reset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let {loading} = this.state;
        return (
            <div>
                <Card className="BaselinePrediction_card" >
                    <Form layout="inline">
                        <FormItem label="服务" >
                            {
                                getFieldDecorator('serve')(
                                    <Select
                                        placeholder='请选择服务'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>服务一</Option>
                                        <Option value='2'>服务二</Option>
                                        <Option value='3'>服务三</Option>
                                        <Option value='4'>服务四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="设备IP" >
                            {
                                getFieldDecorator('equipmentIP')(
                                    <Select
                                        placeholder="请选择设备IP"
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>10086</Option>
                                        <Option value='2'>10087</Option>
                                        <Option value='3'>10000</Option>
                                        <Option value='4'>66666</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="性能指标" >
                            {
                                getFieldDecorator('performanceIndex')(
                                    <Select
                                        placeholder="请选择指标"
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>CPU</Option>
                                        <Option value='2'>log</Option>
                                        <Option value='3'>吞吐量</Option>
                                    </Select>
                                )

                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20 }} onClick={this.handleStart} >获取数据</Button>
                            <Button onClick={this.reset} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div>
                  {  loading ? <Empty className="emptyStyle" description= '暂无数据，请获取数据...' /> : <Line /> }
                </div>
            </div>
        )
    }
}
BaselinePrediction = Form.create({})(BaselinePrediction);