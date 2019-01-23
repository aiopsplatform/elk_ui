import React, { Component } from "react"
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
class Buttons extends Component {
    render() {
        return (
            <div className="select_box buttons">
                <Button.Group>
                    <Button type="primary">
                        <Icon type="search" />
                        <span>立即查询</span>
                    </Button>
                    <Button type="primary">
                        <Icon type="download" />
                        <span>立即下载</span>
                    </Button>
                </Button.Group>
            </div>
        )
    }
}

export default Buttons;