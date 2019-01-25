import React, { Component } from 'react'
import { Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const { TextArea } = Input;
class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag :false
        }
      }
    render() {
        return (
            <div className="new_mask" ref="new_mask" style={{display:this.state.flag?'block' : 'none'}}>
                <div className="new_big_box">
                    <div className="new_header">
                        <span className="new_left">创建告警策略</span>
                        <span className="new_right" onClick={this.handleClick.bind(this)}><Icon type="close" /></span>
                    </div>
                    <div className="new_body">
                        <div className="one_name" style={{paddingTop:10}}>
                            <span style={{ fontSize: 16, marginRight: 30 }}>名称 : </span>
                            <Input
                                placeholder="请输入名称"
                                className="baibashi"
                            />
                        </div>
                        <div className="describe" style={{paddingTop:20}}>
                            <span style={{ fontSize: 16, marginRight: 35 }}>描述 : </span>
                            <TextArea
                                autosize={{ minRows: 2, maxRows: 10 }}
                                className="baibashi"
                            />
                        </div>
                        <div className="xxxbox">
                            <span style={{ fontSize: 16, marginRight: 30 }}>邮箱 : </span>
                            <Input 
                            placeholder="邮箱" 
                            className="email_ipt"
                            />
                            <Input 
                            placeholder="备注" 
                            className="beizhu"
                            />
                            <Button type="primary">验证邮件</Button>
                            <Button>取消</Button>
                        </div>
                        <div style={{fontSize:16,paddingTop:20}}>
                            <p style={{color:'blue',marginLeft:40,cursor:'pointer'}}><Icon type="plus-circle" /> 添加邮箱</p>
                        </div>
                        <div className="one_button">
                            <Button style={{marginRight:30}} onClick={this.handleClick.bind(this)}>取消</Button>
                            <Button type="primary">保存</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
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
    handleClick() {
        this.setState({
            flag : false
        })
    }
}


export default News;