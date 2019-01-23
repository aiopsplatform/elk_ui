import React, { Component } from 'react'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "arrows-alt"
        }
    }
    render() {
        let type = this.state.type;
        return (
            <div className="cont_box" ref="cont_box">
                <div className="cont_box_header">
                    <span className="data_show_txt">数据展示</span>
                    <span className="blow_up" onClick={this.handleBlowUp.bind(this)}><Icon type={type} /></span>
                </div>
                <div className="cont_box_body"></div>
                {/* <Icon type="shrink" /> */}
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
                                    width:100%;
                                    height:100%;
                                    z-inde:10;
                                `
        } else {
            this.setState({
                type: "arrows-alt"
            })
            this.refs.cont_box.style = `
                                    width: 96%;
                                    height: 400px;
                                `
        }
    }
}

export default Show;