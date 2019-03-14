import React, { Component } from "react"
import { Modal, Empty, Icon } from 'antd'
import { fetch } from "whatwg-fetch"
import Loading from "./../../components/loading"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LogContent: '',
            loading: false,
            type: "arrows-alt"
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
                    // Modal.info({
                    //     title: res.status,
                    //     content: res.status
                    // })
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
        let { LogContent, loading, type } = this.state;
        return (<div className="content_box" ref="cont_box" >
            <div className="realtime_header">
                <span className="data_show_txt">数据展示</span>
                <span className="blow_up" onClick={this.handleBlowUp.bind(this)}><Icon type={type} /></span>
            </div>
            <div className="realtime_body">
                {
                    LogContent.length > 0 ? LogContent.map((item, i) => {
                        return <p key={i} style={{ color: 'red' }}>{item}</p>
                    }) : loading ? <Loading /> : <Empty className="emptyStyle" description='暂无数据，请查询...' />
                }
            </div>
        </div>)
    }
    handleBlowUp() {
        if (this.state.type === "arrows-alt") {
            this.setState({
                type: "shrink"
            })
            this.refs.cont_box.style = `
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    bottom:0;
                                    width:100%;
                                    height:93.8%;
                                    z-inde:10;
                                `
        } else {
            this.setState({
                type: "arrows-alt"
            })
            this.refs.cont_box.style = `
                                    width: 100%;
                                    height: 100%;
                                `
        }
    }
}


