import React, { Component } from "react"
import { fetch } from "whatwg-fetch"
export default class Content extends Component {
    state={
        LogContent : undefined
    }
    //向后台发送数据
    requers = (data) => {
        let url = "/index/selectByIndex"
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            this.setState({
                LogContent: res
            })
        }).catch(error => console.log('error is', error));
    }

    render() {
        return (<div>
            <div className="realtime_header">
                <span className="data_show_txt">数据展示</span>
            </div>
            <div className="realtime_body">

            </div>
        </div>)
    }
}

