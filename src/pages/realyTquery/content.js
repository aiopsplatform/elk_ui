import React, { Component } from "react"
import { fetch } from "whatwg-fetch"
import Loading from "./../../components/loading"

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            LogContent : undefined,
            loading : false
        }
    }
    //向后台发送数据
    requers(data){
        let url = "/index/selectRealTimeQuery"
        this.setState({
            loadind : true
        })
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({
                LogContent: JSON.parse(JSON.stringify(data)),
                loadind : false
            })
        }).catch(error => console.log('error is', error));
    }

    render() {
        let { LogContent , loading } = this.state;
        return (<div className="content_box">
            <div className="realtime_header">
                <span className="data_show_txt">数据展示</span>
            </div>
            <div className="realtime_body">
                {
                    LogContent ? LogContent.map((item,i)=>{
                        return <p key={i} style={{color:'red'}}>{item}</p>
                    }) : loading ? <Loading /> : <p className="noneData" >暂无数据，请查询...</p>
                }
            </div>
        </div>)
    }
}

