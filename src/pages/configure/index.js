import React, { Component } from 'react'
import { Form, Button , Input } from 'antd'
import "./index.less"
const FormItem = Form.Item;
const { TextArea } = Input;
export default class Configure extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 8 }
        }
        return (
            <div>
                <Form layout="horizontal">
                    <FormItem label="日志类型" {...formItemLayout} >
                        {
                            getFieldDecorator('types')(
                                <Input
                                    placeholder="请输入日志类型"
                                />
                            )
                        }
                    </FormItem>
                    <FormItem label="grok规则" {...formItemLayout} >
                        {
                            getFieldDecorator('rule ')(
                                <TextArea rows={8} />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style={{ marginLeft: 430 }} >保存</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="primary"  style={{ marginLeft: 420 }} >grok规则</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
Configure = Form.create({})(Configure);