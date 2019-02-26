import React, { Component } from "react"
import { fetch } from "whatwg-fetch"
export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            LogContent : undefined
        }
    }
    //向后台发送数据
    requers(data){
        let url = "/index/selectRealTimeQuery"
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            this.setState({
                LogContent: res
            })
        }).catch(error => console.log('error is', error));
    }

    render() {
        return (<div className="content_box">
            <div className="realtime_header">
                <span className="data_show_txt">数据展示</span>
            </div>
            <div className="realtime_body">
                {
                    this.state.LogContent ? this.state.LogContent.map((item,i)=>{
                        return <p key={i} style={{color:'red'}}>{item}</p>
                    }) : <p style={{color:'red'}} >暂无数据，请查询</p>
                }
            </div>
        </div>)
    }
}

