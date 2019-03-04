import React , {Component} from 'react'
import {Form , Radio , Select , Icon } from 'antd'
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;
export default class Steps3 extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 19 }
        }
        return(
            <Form layout="horizontal">
            <FormItem label="发送通知" {...formItemLayout}>
                {
                    getFieldDecorator('yesOrNo', {
                        initialValue: 1
                    })(
                        <RadioGroup>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                        </RadioGroup>
                    )
                }
            </FormItem>
            <p>
                <Icon type="exclamation-circle" />
                <span>选择'是',我们会向您发送监控信息和告警信息,选择'否',我们将不会向您发送告警信息</span>
            </p>
            <FormItem label="告警通知组" {...formItemLayout}>
                {
                    getFieldDecorator('period', {
                        initialValue: 1
                    })(
                        <Select>
                            <Option value={1}>5分钟</Option>
                            <Option value={2}>10分钟</Option>
                            <Option value={3}>15分钟</Option>
                            <Option value={4}>20分钟</Option>
                        </Select>
                    )
                }
            </FormItem>
        </Form>
        )
    }
}
Steps3 = Form.create({})(Steps3);
