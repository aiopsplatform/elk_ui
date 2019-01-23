import React, { Component } from 'react'
import { Input, Button } from 'antd';

import 'antd/dist/antd.css';
import "../../css/configure.css"
const { TextArea } = Input;
class Configure extends Component {
    render() {
        return (
            <div className="big_box">
                <div className="small_box">


                    <div className="configure_input">
                        <span className="span_txt">日志类型 : </span>
                        <Input placeholder="请输入日志类型" />
                    </div>
                    <div className="configure_input more_inputTxt">
                        <span className="span_txt">grok规则 : </span>
                        <TextArea rows={8} />
                    </div>
                    <div className="configure_input save_button">
                        <Button type="primary">
                            <span className="span_txt">保存</span>
                        </Button>
                    </div>
                    <div className="configure_input save_button">
                        <Button type="primary">
                            <span className="span_txt">grok规则查询</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
}

export default Configure;