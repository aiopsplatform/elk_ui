import React, { Component } from 'react'
import { Form , Select , Input} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;
export default class Steps1 extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 19 }
        }
        return (
            <div>
                <Form layout="horizontal">
                    <FormItem label="名称" {...formItemLayout}>
                        {
                            getFieldDecorator('user_name')(
                                <Input type="text" placeholder="请输入名称" />
                            )
                        }
                    </FormItem>
                    <div className="typesBox" >
                        <div className="typesOne">
                            <span>类型 : </span>
                            <FormItem style={{ width: 160 }} >
                                {
                                    getFieldDecorator('types')(
                                        <Select placeholder="请选择节点" >
                                            <Option value={1}>节点</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </div>
                        <div className="typesOne">
                            <span>监控周期 : </span>
                            <FormItem style={{ width: 160 }} >
                                {
                                    getFieldDecorator('period')(
                                        <Select placeholder="请选择周期" >
                                            <Option value={1}>5分钟</Option>
                                            <Option value={2}>10分钟</Option>
                                            <Option value={3}>15分钟</Option>
                                            <Option value={4}>20分钟</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </div>

                    </div>
                    <FormItem label="监控对象" {...formItemLayout}>
                        {
                            getFieldDecorator('object')(
                                <Select>
                                    <Option value={1}>节点一</Option>
                                    <Option value={2}>节点二</Option>
                                    <Option value={3}>节点三</Option>
                                    <Option value={4}>节点四</Option>
                                    <Option value={5}>节点五</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                </Form>
            </div>
        )
    }
}
Steps1 = Form.create({})(Steps1);