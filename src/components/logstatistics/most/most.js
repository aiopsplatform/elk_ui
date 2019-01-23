import React, { Component } from 'react'
import StartTime from "./inputs/startTime"
import EndTime from "./inputs/endTime"
import Number from "./inputs/number"
import StartBtn from "./inputs/startBtn"
import ShowBar from "./inputs/showBar"
class Most extends Component {
    render() {
        return (
            <div className="abnormal_box">
                <div className="top_box">
                    <StartTime />
                    <EndTime />
                    <Number />
                    <StartBtn />
                    <div className="bottom_box" style={{marginTop:80}}>
                        <ShowBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Most;