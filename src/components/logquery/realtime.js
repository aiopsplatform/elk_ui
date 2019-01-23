import React, { Component } from 'react'
import Queryidx from "./realtimeInputs/queryidx"
import Types from "./realtimeInputs/types"
import Rank from "./realtimeInputs/rank"
import Serve from "./realtimeInputs/serve"
import  Project from "./realtimeInputs/project"
import StartButton from "./realtimeInputs/startbutton"
import ShowBox from "./realtimeInputs/showbox"
import "../../css/query.css"
class RealTime extends Component {
    render() {
        return (
            <div className="big_box">
                <div className="small_query_box">
                    <Queryidx />
                    <Types />
                    <Rank />
                    <Serve />
                    <Project />
                    <StartButton />
                </div>
                <ShowBox />
            </div>
        )
    }
}

export default RealTime;