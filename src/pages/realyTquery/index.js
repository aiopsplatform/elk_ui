import React, { Component } from 'react'
import { Card, Select, Form, Button } from 'antd'
import { connect } from "react-redux"
import Content from "./content"
import "./index.less"
import { getData_locast } from "../../action/actioncreator"
const Option = Select.Option;
const FormItem = Form.Item;
class RealyTQuery extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: null
        }
    }

    //获取input框数据
    componentDidMount() {
        this.props.getList();
    }

    //点击查询按钮
    handleFilterSubmit = () => {
        this.refs.content.setState({
            loading : true
        })
        let that = this;
        let fieldsValue = this.props.form.getFieldsValue();
        clearInterval(that.timer)
        that.timer = setInterval(() => {
            this.refs.content.requers(fieldsValue)
        }, 5000)
    }

    componentWillUnmount(){
        let that = this;
        clearInterval(that.timer)
    }

    //重置
    reset = () => {
        this.props.form.resetFields();
        let that = this;
        clearInterval(that.timer)
    }

    render() {
        let { inputBoxData } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="realyT_big_box" >
                <Card className="realyT_card">
                    <Form layout="inline">
                        <FormItem label="索引">
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择索引'
                                        style={{ width: 200 }}
                                    >
                                        {
                                            inputBoxData.length > 0 ? inputBoxData.map((item, i) => {
                                                return <Option key={i} value={item.id}>{item.name}</Option>
                                            }) : ""
                                        }
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
                        <FormItem label="级别">
                            {
                                getFieldDecorator('rank')(
                                    <Select
                                        placeholder='请选择级别'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>级别一</Option>
                                        <Option value='2'>级别二</Option>
                                        <Option value='3'>级别三</Option>
                                        <Option value='4'>级别四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="服务">
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
                        <FormItem label="实例">
                            {
                                getFieldDecorator('projects')(
                                    <Select
                                        placeholder='请选择实例'
                                        style={{ width: 200 }}
                                    >
                                        <Option value='1'>实例一</Option>
                                        <Option value='2'>实例二</Option>
                                        <Option value='3'>实例三</Option>
                                        <Option value='4'>实例四</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ marginRight: 20, marginTop: 5 }} onClick={this.handleFilterSubmit}>查询</Button>
                            <Button onClick={this.reset} style={{ marginTop: 5 }} >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <div className="realtime_cont_box">
                    <Content ref={'content'} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    inputBoxData: state.query.inputBoxData
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})
RealyTQuery = Form.create({})(RealyTQuery);
export default connect(mapStateToProps, mapDispatchToProps)(RealyTQuery)