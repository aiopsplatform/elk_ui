import React, { Component } from 'react'
import { Card, DatePicker, Select, Button, Icon, Form } from 'antd'
// import BaseForm from "../../components/BaseForm"
import { fetch } from "whatwg-fetch"
import { connect } from "react-redux"
import "./index.less"
import { getData_locast } from "../../action/actioncreator"
const Option = Select.Option;
const FormItem = Form.Item;
class TJQuery extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        disabled: false,
        type: "arrows-alt",
        list: []
    }

    componentDidMount() {
        this.props.getList();
    }


    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        console.log(fieldsValue)
        this.requers(fieldsValue);
        // let url ="/index/selectByIndex"
        // fetch(url, {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(fieldsValue)
        //   }).then((res)=>{
        //       this.setState({
        //         LogContent : res
        //       })
        //   }).catch(error => console.log('error is', error));
    }

    requers =(data) =>{
        let url ="/index/selectByIndex"
        fetch(url, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res)=>{
              this.setState({
                LogContent : res
              })
          }).catch(error => console.log('error is', error));
    }

    reset = () => {
        this.props.form.resetFields();
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    render() {
        let { mallDemoList } = this.props;
        // console.log(mallDemoList)
        let { type } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="tiquery_big_box">
                <Card className="tjquery_cards" >
                    <Form layout="inline">
                        <FormItem label="索引">
                            {
                                getFieldDecorator('indexes')(
                                    <Select
                                        placeholder='请选择索引'
                                        style={{ width: 200 }}
                                    >
                                        {
                                            mallDemoList.length > 0 ? mallDemoList.map((item, i) => {
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
                        <FormItem label="开始时间" >
                            {
                                getFieldDecorator('begin_time')(
                                    <DatePicker
                                        showTime={true}
                                        placeholder="请选择时间"
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="结束时间" >
                            {
                                getFieldDecorator('end_time')(
                                    <DatePicker
                                        showTime={true}
                                        placeholder="请选择时间"
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
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
                <div className="cont_box" ref="cont_box">
                    <div className="cont_box_header">
                        <span className="data_show_txt">数据展示</span>
                        <span className="blow_up" onClick={this.handleBlowUp.bind(this)}><Icon type={type} /></span>
                    </div>
                    <div className="cont_box_body">
                            {/* {
                                this.state.LogContent.length>0? this.state.LogContent.map((item,i)=>{
                                    return <p key={i}>

                                    </p>
                                }) : "暂无数据"
                            } */}
                    </div>
                </div>
            </div>
        )
    }
    handleBlowUp() {
        if (this.state.type === "arrows-alt") {
            this.setState({
                type: "shrink"
            })
            this.refs.cont_box.style = `
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    bottom:0;
                                    width:100%;
                                    height:100%;
                                    z-inde:10;
                                `
        } else {
            this.setState({
                type: "arrows-alt"
            })
            this.refs.cont_box.style = `
                                    width: 98%;
                                    height: 75%;
                                `
        }
    }
}
const mapStateToProps = (state) => ({
    mallDemoList: state.conditionquery.mallDemoList
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})
TJQuery = Form.create({})(TJQuery);
export default connect(mapStateToProps, mapDispatchToProps)(TJQuery)