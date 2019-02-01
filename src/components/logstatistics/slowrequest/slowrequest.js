import React, { Component } from 'react'
import QueryIndex from "./inputs/queryIndex"
import StartTime from "./inputs/startTime"
import EndTime from "./inputs/endTime"
import Bar from "./inputs/bar"
import { Button } from 'antd';
import 'antd/dist/antd.css'
class SlowRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            flag : false
        }
    }
    render() {
        return (
            <div className="abnormal_box">
                <div className="top_box">
                    <QueryIndex />
                    <StartTime />
                    <EndTime />
                    <div className="abnormal_module_button">
                        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                            统计
                        </Button>
                    </div>
                </div>
                <div className="bottom_box">
                    {this.state.flag ? < Bar /> : ''}
                </div>
            </div>
        )
    }
    enterLoading () {
        this.setState({ loading: true , flag : true});
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }
}

export default SlowRequest;