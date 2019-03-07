import React, { Component } from "react"
import {Modal , Empty} from 'antd'
import { fetch } from "whatwg-fetch"
import Loading from "./../../components/loading"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LogContent: '',
            loading: false
        }
    }
    //向后台发送数据
    requers(data) {
        let url = "/index/selectRealTimeQuery"
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.status !== 200) {
                    Modal.info({
                        title: res.status,
                        content: res.status
                    })
                    return
                } else {
                    this.setState({
                        loading: true
                    })
                    return res.json()
                }
            })
            .then((data) => {
                this.setState({
                    LogContent: JSON.parse(JSON.stringify(data)),
                    loading: false
                })
            }).catch(error => {
                console.log('error is', error)
                this.setState({
                    loading: false
                })
            });
    }

    render() {
        let { LogContent, loading } = this.state;
        return (<div className="content_box">
            <div className="realtime_header">
                <span className="data_show_txt">数据展示</span>
            </div>
            <div className="realtime_body">
                {
                    LogContent.length > 0 ? LogContent.map((item, i) => {
                        return <p key={i} style={{ color: 'red' }}>{item}</p>
                    }) : loading ? <Loading /> : <Empty className="emptyStyle" description= '暂无数据，请查询...' />
                }
            </div>
        </div>)
    }
}

