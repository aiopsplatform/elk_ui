import React, { Component } from 'react'
import { Button ,Icon } from 'antd';
import 'antd/dist/antd.css';
class Buttons extends Component {
    render() {
        return (
            <div>
                <Button type="primary"><Icon type="file-search" />立即查询</Button>
                <Button><Icon type="delete" />清空所有记录</Button>
            </div>
        )
    }
}

export default Buttons;