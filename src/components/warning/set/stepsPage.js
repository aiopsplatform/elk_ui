import React, { Component } from 'react'
import { Input, Select, Button, Icon, Radio, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import Observer from "../../packaging/observer"
const Option = Select.Option;
const RadioGroup = Radio.Group;
class StepsPage extends Component {
    constructor(props) {
        super(props);
        this.num = 0;
        this.state = {
            value: 1,
            num : 0
        }

    }
    render() {
        let num = this.state.num;
        // console.log(num)
        return (
            <div className="stepspage_box">
                {/* 一 */}
                <div style={{ display: num === 0 ? 'block' : 'none' }}>
                    <div className="one_name">
                        <span style={{ fontSize: 16, marginRight: 30 }}>名称 : </span>
                        <Input
                            placeholder="请输入名称"
                            className="baibashi"
                        />
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
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
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
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
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
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="节点一">节点一</Option>
                            <Option value="节点二">节点二</Option>
                            <Option value="节点三">节点三</Option>
                            <Option value="节点四">节点四</Option>
                        </Select>
                    </div>
                    <div className="one_button">
                        <Button onClick={this.handleMove.bind(this)} >取消</Button>
                        <Button type="primary" onClick={this.handleNext.bind(this)} >下一步</Button>
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
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
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
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
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
                            <span style={{color:'blue'}}>CPU利用率</span>=所有容器实例占用CPU总和/CPU资源总量<br />
                            <span style={{color:'blue'}}>内存使用率</span>=所有容器实例占用内存总和/容器实例数量
                        </p>
                    </div>
                    <div className="one_button">
                        <Button type="primary" onClick={this.handleOn.bind(this)}>上一步</Button>
                        <Button type="primary" onClick={this.handleNext.bind(this)}  >下一步</Button>
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
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
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
                        <Button type="primary" onClick={this.handleOn.bind(this)} >上一步</Button>
                        <Button type="primary">提交</Button>
                    </div>
                </div>
            </div>
        )
    }
    handleNext() {
        if (this.num < 2) {
            this.num += 1;
            this.setState({
                num : this.num
            })
            Observer.$emit("handle", this.state.num)
        } else {
            return;
        }

    }
    handleOn() {
        if (this.num > 0) {
            this.num -= 1;
            this.setState({
                num : this.num
            })
            Observer.$emit("handle1", this.state.num)
        } else {
            return;
        }

    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }
    onChange(value) {
        console.log('changed', value);
    }


    handleMove(e) {
        this.props.onSubmit(false)
    }

}

export default StepsPage;