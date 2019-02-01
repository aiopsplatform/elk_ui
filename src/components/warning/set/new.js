import React, { Component } from 'react'
import { Icon } from 'antd';
import StepsPage from "./stepsPage"
import 'antd/dist/antd.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        }
    }
    render() {
        return (
            <div className="new_mask" ref="new_mask" style={{ display: this.state.flag ? 'block' : 'none' }}>
                <div className="new_big_box">
                    <div className="new_header">
                        <span className="new_left">创建告警策略</span>
                        <span className="new_right" onClick={this._click.bind(this)}><Icon type="close" /></span>
                    </div>
                    <div className="new_body">
                        <StepsPage onSubmit={this.submit.bind(this)} />
                    </div>

                </div>
            </div>
        )
    }

    _click() {
        this.setState({
            flag: false
        })
    }
    submit(e){
        this.setState({
            flag : e
        })
    }
}


export default News;