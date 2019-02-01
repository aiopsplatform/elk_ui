import React, { Component } from 'react'
import Queryidx from "./realtimeInputs/queryidx"
import Types from "./realtimeInputs/types"
import Rank from "./realtimeInputs/rank"
import Serve from "./realtimeInputs/serve"
import Project from "./realtimeInputs/project"
import ShowBox from "./realtimeInputs/showbox"
import { Button } from 'antd';
import 'antd/dist/antd.css'
import "../../css/query.css"
class RealTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false
        }
    }
    render() {
        return (
            <div className="big_box">
                <div className="small_query_box">
                    <Queryidx />
                    <Types />
                    <Rank />
                    <Serve />
                    <Project />
                    <div className="abnormal_module_button">
                        <Button ref="startButton" type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                            START
                        </Button>
                    </div>
                </div>
                <ShowBox />
            </div>
        )
    }
    enterLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }
}

export default RealTime;