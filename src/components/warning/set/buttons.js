import React, { Component } from 'react'
import { Button, Menu, Dropdown, Icon, } from 'antd';
import 'antd/dist/antd.css';

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">删除</Menu.Item>
        <Menu.Item key="2">修改</Menu.Item>
        <Menu.Item key="3">停用</Menu.Item>
        <Menu.Item key="4">启用</Menu.Item>
        <Menu.Item key="5">查看记录</Menu.Item>
        <Menu.Item key="6">清除记录</Menu.Item>
    </Menu>
);
function handleMenuClick(e) {
    console.log('click', e);
}

class Buttons extends Component {
    render() {
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Button>
                        忽略<Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        )
    }

}

export default Buttons;