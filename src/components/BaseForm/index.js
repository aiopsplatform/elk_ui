import React from 'react'
import { Input, Select, Form, Checkbox, DatePicker , Button  } from 'antd'
import Utils from '../../utils/utils';
const FormItem = Form.Item;

class FilterForm extends React.Component {

    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
        this.props.setState({
            flag:true
        })
        console.log(fieldsValue)
    }

    reset = () => {
        this.props.form.resetFields();
    }

    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length > 0) {
            formList.forEach((item, i) => {
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                let marginTop = item.marginTop;
                // if (item.type == '城市') {

                //     const city = <FormItem label="城市" key={field}>
                //         {
                //             getFieldDecorator('city',{
                //                 initialValue:initialValue
                //             })(
                //                 <Select
                //                     style={{width:80}}
                //                     placeholder={placeholder}
                //                 >
                //                     {Utils.getOptionList([{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '天津' }, { id: '4', name: '杭州' }])}
                //                 </Select>
                //             )
                //         }
                //     </FormItem>;
                //     formItemList.push(city)
                // }else 
                if (item.type === '时间查询') {
                    const begin_time = <FormItem label="开始时间" key='begin_time'>
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker
                                    showTime={true}
                                    placeholder={placeholder}
                                    format="YYYY-MM-DD HH:mm:ss"
                                />
                            )
                        }
                    </FormItem>;
                    formItemList.push(begin_time)
                    const end_time = <FormItem style={{ marginTop: marginTop }} label="结束时间" key='end_time'>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker
                                    showTime={true}
                                    placeholder={placeholder}
                                    format="YYYY-MM-DD HH:mm:ss"
                                />
                            )
                        }
                    </FormItem>;
                    formItemList.push(end_time)
                } else if (item.type === 'INPUT') {
                    const INPUT = <FormItem style={{ marginTop: marginTop }} label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Input
                                    type="text"
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                />
                            )
                        }
                    </FormItem>;
                    formItemList.push(INPUT)
                } else if (item.type === 'SELECT') {
                    const SELECT = <FormItem style={{ marginTop: marginTop }} label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                defaultValue: initialValue
                            })(
                                <Select
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                >
                                    {Utils.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>;
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue //true | false
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>;
                    formItemList.push(CHECKBOX)
                } else if (item.type === 'DATE') {
                    const Date = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field])(
                                <DatePicker
                                    showTime={true}
                                    placeholder={placeholder}
                                    format="YYYY-MM-DD HH:mm:ss"
                                />
                            )
                        }
                    </FormItem>;
                    formItemList.push(Date)
                }
            })
        }
        return formItemList;
    }
    render() {
        return (
            <Form layout="inline">
                {this.initFormList()}
                <FormItem>
                    {/* <Button type='primary' icon='search' onClick={this.handleFilterSubmit} style={{marginTop:35}} >立即查询</Button> */}
                    <Button type="primary" style={{ marginRight: 20,marginTop:35 }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset} style={{marginTop:35 }} >重置</Button>
                </FormItem>
            </Form>
        );
    }
}
export default Form.create({})(FilterForm);