import React, { Component } from 'react'
import { Form, Select, InputNumber, Icon, Button } from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;
let id = 0
export default class Steps2 extends Component {
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
            return;
        }

        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        form.setFieldsValue({
            keys: nextKeys,
        });
    }
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k) => (
            <div className="divFlex"
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                // style={{ marginLeft: index === 0 ? 0 : 69 }}
                key={k}
            >
                <FormItem style={{ width: 110 }} >
                    {
                        getFieldDecorator(`queryCondition[${k}]symbol`, {
                            initialValue: 0
                        })(
                            <Select style={{ width: 110 }} >
                                <Option value={0}>日志容量</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem style={{ width: 80 }} >
                    {
                        getFieldDecorator(`queryCondition[${k}]number`, {
                            initialValue: 0
                        })(
                            <Select style={{ width: 80 }}>
                                <Option value={0}><Icon type="right" /></Option>
                                <Option value={1}><Icon type="left" /></Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator(`queryCondition[${k}]shownumber`)(
                            <InputNumber
                                min={4}
                                max={20}
                                step={2}
                                placeholder="选择数量"
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                        {
                            getFieldDecorator(`queryCondition[${k}]company`, {
                                initialValue: 0
                            })(
                                <Select style={{ width: 90 }}>
                                    <Option value={0}>M</Option>
                                    <Option value={1}>G</Option>
                                    <Option value={2}>T</Option>
                                    <Option value={3}>P</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                <FormItem>
                    <Button onClick={() => this.remove(k)} style={{ marginLeft: 10 }} ><Icon type="close" /></Button>
                </FormItem>
            </div>
        ));
        return (
            <div>
                <Form layout="inline">
                    <FormItem style={{ width: 110 }} >
                        {
                            getFieldDecorator('Utilization', {
                                initialValue: 0
                            })(
                                <Select style={{ width: 110 }} >
                                    <Option value={0}>日志容量</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem style={{ width: 80 }} >
                        {
                            getFieldDecorator('size', {
                                initialValue: 0
                            })(
                                <Select style={{ width: 80 }}>
                                    <Option value={0}><Icon type="right" /></Option>
                                    <Option value={1}><Icon type="left" /></Option>
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
                    <FormItem>
                        {
                            getFieldDecorator('company', {
                                initialValue: 0
                            })(
                                <Select style={{ width: 90 }}>
                                    <Option value={0}>M</Option>
                                    <Option value={1}>G</Option>
                                    <Option value={2}>T</Option>
                                    <Option value={3}>P</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.add} ><Icon type="plus" /></Button>
                        {/* <Button style={{ marginLeft: 10 }} ><Icon type="close" /></Button> */}
                    </FormItem>
                    {formItems}
                </Form>
                {/* <div className="two_wz">
                    <p><Icon type="exclamation-circle" /> </p>
                    <p>
                        <span style={{ color: 'blue' }}>CPU利用率</span>=所有容器实例占用CPU总和/CPU资源总量<br />
                        <span style={{ color: 'blue' }}>内存使用率</span>=所有容器实例占用内存总和/容器实例数量
                    </p>
                </div> */}
            </div>
        )
    }
}
Steps2 = Form.create({})(Steps2);