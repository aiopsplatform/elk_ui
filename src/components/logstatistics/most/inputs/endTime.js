import React, { Component } from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
class EndTime extends Component {
    render() {
        return (
            <div className="abnormal_module">
                <span className="spanall">结束时间 ：</span>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="请选择结束时间"
                    onChange={this.onChangeTime.bind(this)}
                    onOk={this.onOk}
                />
            </div>
        )
    }
    onChangeTime = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk = (value) => {
        console.log('onOk: ', value);
    }
}

export default EndTime;