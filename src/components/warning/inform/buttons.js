import React, { Component } from 'react'
import { Button, Menu, Dropdown, Icon, } from 'antd';
import 'antd/dist/antd.css';

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">删除</Menu.Item>
        <Menu.Item key="1">修改</Menu.Item>
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
                        删除<Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        )
    }

}

export default Buttons;