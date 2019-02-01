import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css'
class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            flag: false,
            num: '',
            disabled : true
        }
    }
    render() {
        return (
            <div className="statistics_input">
                <span className="span_statis">图标类型 : </span>
                <Button.Group>
                    <Button ref="startButton" type="primary" onClick={this.handleSendPie.bind(this)}>
                        <Icon type="pie-chart" />
                        <span>饼状图</span>
                    </Button>
                    <Button type="primary" onClick={this.handleSendBar.bind(this)}>
                        <Icon type="bar-chart" />
                        <span>柱状图</span>
                    </Button>
                </Button.Group>

                <div style={{ marginTop: 30, marginLeft: 60 }}>
                    <Button
                        ref="startButton"
                        type="primary"
                        loading={this.state.loading}
                        onClick={this.enterLoading.bind(this)}
                        disabled={this.state.disabled}
                        icon="caret-right"
                    >
                        START
                    </Button>
                </div>

            </div>
        )
    }
    handleSendPie() {
        this.setState({
            num: 1,
            disabled : false
        })
        
    }
    handleSendBar() {
        this.setState({
            num: 2
        })
    }

    enterLoading () {
            this.setState({ loading: true, flag: true });
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000)
        
    }
}

export default Buttons;