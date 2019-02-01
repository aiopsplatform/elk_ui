import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'
class StartButton extends Component {
    state = {
        loading: false,
        iconLoading: false,
    }
    render() {
        return (
            <div className="abnormal_module_button">
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                    统计
                </Button>
            </div>
        )
    }
    enterLoading () {
        this.setState({ loading: true});
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }

}

export default StartButton;