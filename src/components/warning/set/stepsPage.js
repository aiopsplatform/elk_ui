import React, { Component } from 'react'
import { Input, Select, Button, Icon, Radio, InputNumber, Steps } from 'antd';
import 'antd/dist/antd.css';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
class StepsPage extends Component {
    constructor(props) {
        super(props);
        this.num = 0;

        this.state = {
            value: 1,
            num: 0,
            oneOne: '',
            oneTwo: ''
        }

    }
    render() {
        let num = this.state.num;
        return (
            <div className="stepspage_box">
                <div>
                    <Steps current={num}>
                        <Step title="参数设置" />
                        <Step title="告警规则" />
                        <Step title="告警行为" />
                    </Steps>
                </div>
                {/* 一 */}
                <div style={{ display: num === 0 ? 'block' : 'none' }}>
                    <div className="one_name">
                        <span style={{ fontSize: 16, marginRight: 30 }}>名称 : </span>
                        <Input
                            placeholder="请输入名称"
                            className="baibashi"
                            onChange={this.handleOneOne.bind(this)}
                        />
                        <p id="oneOne_html" style={{ color: 'red' }} ></p>
                    </div>
                    <div className="one_type">
                        <div>
                            <span className="span_a">类型 : </span>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                optionFilterProp="children"
                                defaultValue="节点"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="节点">节点</Option>
                            </Select>
                        </div>
                        <div>
                            <span className="span_a">监控周期 : </span>
                            <Select
                                showSearch
                                // style={{ width: 200 }}
                                optionFilterProp="children"
                                defaultValue="5分钟"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="5分钟">5分钟</Option>
                                <Option value="10分钟">10分钟</Option>
                                <Option value="15分钟">15分钟</Option>
                                <Option value="20分钟">20分钟</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="one_obj">
                        <span style={{ fontSize: 16, marginRight: 30 }}>监控对象 : </span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            placeholder="请选择节点"
                            className="baibashi"
                            onChange={this.handleOneTwo.bind(this)}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="节点一">节点一</Option>
                            <Option value="节点二">节点二</Option>
                            <Option value="节点三">节点三</Option>
                            <Option value="节点四">节点四</Option>
                        </Select>
                        <p id="oneTwo_html" style={{ color: 'red' }} ></p>
                    </div>
                    <div className="one_button">
                        <Button onClick={this.handleMove.bind(this)} >取消</Button>
                        <Button type="primary" onClick={this.handleOneNext.bind(this)} >下一步</Button>
                    </div>
                </div>

                {/* 二 */}
                <div className="two_big_box" style={{ paddingTop: 30, display: num === 1 ? 'block' : 'none' }}>
                    <div className="two_box">
                        <div>
                            <Select
                                showSearch
                                optionFilterProp="children"
                                defaultValue="CPU利用率"
                                className="two_cpulyl"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="CPU利用率">CPU利用率</Option>
                                <Option value="内存使用率">内存使用率</Option>
                                <Option value="上传流量">上传流量</Option>
                                <Option value="下载流量">下载流量</Option>
                            </Select>
                        </div>
                        <div>
                            <Select
                                showSearch
                                optionFilterProp="children"
                                defaultValue=">"
                                className="two_dx"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value=">"><Icon type="right" /></Option>
                                <Option value="<"><Icon type="left" /></Option>
                            </Select>
                        </div>
                        <div>
                            <InputNumber
                                className="two_num"
                                min={80}
                                max={800}
                                step={10}
                                defaultValue={80}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                        <div>
                            <Input
                                className="two_MB"
                                placeholder="MB"
                            />
                        </div>
                        <div className="two_buttons">
                            <Button type="primary"><Icon type="plus" /></Button>
                            <Button><Icon type="close" /></Button>
                        </div>

                    </div>
                    <div className="two_wz">
                        <p><Icon type="exclamation-circle" /> </p>
                        <p>
                            <span style={{ color: 'blue' }}>CPU利用率</span>=所有容器实例占用CPU总和/CPU资源总量<br />
                            <span style={{ color: 'blue' }}>内存使用率</span>=所有容器实例占用内存总和/容器实例数量
                        </p>
                    </div>
                    <div className="one_button">
                        <Button type="primary" onClick={this.handleOneOn.bind(this)}>上一步</Button>
                        <Button type="primary" onClick={this.handleTwoNext.bind(this)}  >下一步</Button>
                    </div>
                </div>

                {/* 三 */}

                <div className="three_big_box" style={{ paddingTop: 40, display: num === 2 ? 'block' : 'none' }}>
                    <div className="three_fstz">
                        <span className="span_fstz">发送通知 : </span>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                        </RadioGroup>
                    </div>
                    <p style={{ paddingTop: 10 }}>
                        <Icon type="exclamation-circle" />
                        <span>选择'是',我们会向您发送监控信息和告警信息,选择'否',我们将不会向您发送告警信息</span>
                    </p>
                    <div className="three_gjtzz" style={{ paddingTop: 30 }}>
                        <span className="span_gjtzz">告警通知组 : </span>
                        <Select
                            showSearch
                            optionFilterProp="children"
                            defaultValue="zhangsan"
                            className="three_tzz"
                            onChange={this.handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="zhangsan">zhangsan</Option>
                            <Option value="lisi">lisi</Option>
                            <Option value="wangwu">wangwu</Option>
                            <Option value="zhaoliu">zhaoliu</Option>
                        </Select>
                    </div>
                    <div style={{ paddingTop: 20, paddingLeft: 50, fontSize: 16 }}>
                        <Button type="primary"><Icon type="plus" />新建组</Button>
                    </div>
                    <div className="one_button">
                        <Button type="primary" onClick={this.handleTwoOn.bind(this)} >上一步</Button>
                        <Button type="primary" onClick={this.handleTJ.bind(this)} >提交</Button>
                    </div>
                </div>
            </div>
        )
    }

    handleOn() {
        if (this.num > 0) {
            this.num -= 1;
            this.setState({
                num: this.num
            })
        } else {
            return;
        }

    }
    handleOneOne(e) {
        var oneOneHint = document.getElementById('oneOne_html')
        this.setState({
            oneOne: e.target.value
        })
        if (e.target.value !== '') {
            oneOneHint.innerHTML = ('')
        }
    }
    handleOneTwo(value) {
        var oneTwoHint = document.getElementById('oneTwo_html')
        this.setState({
            oneTwo: `${value}`
        })
        if (`${value}` !== '') {
            oneTwoHint.innerHTML = ('')
        }
    }


    handleOneNext() {
        console.log(this.refs.oneOne)
        var oneOneHint = document.getElementById('oneOne_html')
        var oneTwoHint = document.getElementById('oneTwo_html')
        if (this.state.oneOne !== '' && this.state.oneTwo !== '') {
            this.setState({
                num: 1
            })
        } else {
            oneOneHint.innerHTML = ('此处不能为空!!')
            oneTwoHint.innerHTML = ('此处不能为空!!')
        }
    }
    handleTwoNext() {
        this.setState({
            num: 2
        })
    }
    handleOneOn(){
        this.setState({
            num : 0
        })
    }
    handleTwoOn(){
        this.setState({
            num : 1
        })
    }
    handleTJ(){
        alert("提交成功")
    }
    onChange(value) {
        console.log('changed', value);
    }


    handleMove(e) {
        this.props.onSubmit(false)
    }

}

export default StepsPage;