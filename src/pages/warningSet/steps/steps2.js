import React, { Component } from 'react'
import { Form, Select, Input , InputNumber , Icon , Button } from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;
export default class Steps2 extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline">
                    <FormItem style={{ width: 110 }} >
                        {
                            getFieldDecorator('Utilization', {
                                initialValue: 1
                            })(
                                <Select style={{ width: 110 }} >
                                    <Option value={1}>5分钟</Option>
                                    <Option value={2}>10分钟</Option>
                                    <Option value={3}>15分钟</Option>
                                    <Option value={4}>20分钟</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 80 }} >
                        {
                            getFieldDecorator('size', {
                                initialValue: 1
                            })(
                                <Select style={{ width: 80 }}>
                                    <Option value={1}><Icon type="right" /></Option>
                                    <Option value={2}><Icon type="left" /></Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('shownumber')(
                                <InputNumber
                                    min={4}
                                    max={20}
                                    step={2}
                                    placeholder="选择数量"
                                />
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 90 }}  >
                        {
                            getFieldDecorator('mb')(
                                <Input type="text" width="100" placeholder="MB" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary"><Icon type="plus" /></Button>
                        <Button style={{ marginLeft: 10 }} ><Icon type="close" /></Button>
                    </FormItem>
                </Form>
                <div className="two_wz">
                    <p><Icon type="exclamation-circle" /> </p>
                    <p>
                        <span style={{ color: 'blue' }}>CPU利用率</span>=所有容器实例占用CPU总和/CPU资源总量<br />
                        <span style={{ color: 'blue' }}>内存使用率</span>=所有容器实例占用内存总和/容器实例数量
                    </p>
                </div>
            </div>
        )
    }
}
Steps2 = Form.create({})(Steps2);