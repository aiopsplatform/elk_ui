import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import StartTime from "./inputs/startTime"
import EndTime from "./inputs/endTime"
import Number from "./inputs/number"
import Bar from "./inputs/bar"
class Most extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            flag: false
        }
    }
    render() {
        return (
            <div className="abnormal_box">
                <div className="top_box">
                    <StartTime />
                    <EndTime />
                    <Number />
                    <div className="abnormal_module_button" style={{ marginLeft: 30 }}>
                        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                            统计
                        </Button>
                    </div>
                    <div className="bottom_box" style={{ marginTop: 80 }}>
                        {this.state.flag ? <Bar /> : ''}
                    </div>
                </div>
            </div>
        )
    }

    enterLoading() {
        this.setState({ loading: true, flag: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }
}

export default Most;