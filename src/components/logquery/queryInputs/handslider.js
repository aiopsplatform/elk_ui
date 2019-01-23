import React, { Component } from 'react'
import { Slider } from 'antd';
import 'antd/dist/antd.css';
class HandSlider extends Component {
    render() {
        return (
            <div className="select_box slider">
                <span className="spanall">详细 ：</span>
                <Slider defaultValue={30} />
            </div>
        )
    }
}

export default HandSlider;