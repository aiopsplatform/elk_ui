import React, { Component } from 'react'
import { Select , Button} from 'antd';
import Line from "./mnoComponent/line"
import 'antd/dist/antd.css'
const Option = Select.Option;
class Monito extends Component {
    constructor(props){
        super(props);
        this.state={
            flag : false
        }
    }
    render() {
        return (
            <div className="mno_box">
                <div className="mno_header">
                    <div className="mno_search">
                        <span style={{ fontSize: 16 }}>服务名 : </span>
                        <Select
                            showSearch
                            placeholder="请选择服务名"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                        >
                            <Option value="one">服务名 1</Option>
                            <Option value="two">服务名 2</Option>
                            <Option value="three">服务名 3</Option>
                            <Option value="four">服务名 4</Option>
                        </Select>
                    </div>
                    <div className="mno_search">
                        <span style={{ fontSize: 16 }}>资源类型 : </span>
                        <Select
                            showSearch
                            placeholder="请选择资源类型"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                        >
                            <Option value="neicun">内存</Option>
                            <Option value="cpu">CPU</Option>
                        </Select>
                    </div>
                    <Button type="primary" onClick={this.handleShow.bind(this)} >开始</Button>
                </div>
                <div className="mno_body">
                    {this.state.flag ? <Line /> : '' }  
                </div>
            </div>
        )
    }
    handleShow(){
        this.setState({
            flag : true
        })
    }
}

export default Monito;