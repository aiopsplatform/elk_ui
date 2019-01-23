import React, { Component } from 'react'
import QueryIndex from "./inputs/queryIndex"
import StartTime from "./inputs/startTime"
import EndTime from "./inputs/endTime"
import StartButton from "./inputs/startButton"
import BottomShow from "./inputs/bottomShow"
class SlowRequest extends Component {
    render() {
        return (
            <div className="abnormal_box">
                <div className="top_box">
                    <QueryIndex />
                    <StartTime />
                    <EndTime />
                    <StartButton />
                </div>
                <div className="bottom_box">
                    <BottomShow />
                </div>
            </div>
        )
    }
}

export default SlowRequest;