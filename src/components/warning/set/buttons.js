import React, { Component } from 'react'
import { Button, Menu, Dropdown, Icon, } from 'antd';
import 'antd/dist/antd.css';

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">忽略</Menu.Item>
        <Menu.Item key="1">删除</Menu.Item>
        <Menu.Item key="2">修改</Menu.Item>
        <Menu.Item key="3">停用</Menu.Item>
        <Menu.Item key="4">启用</Menu.Item>
        <Menu.Item key="5">查看记录</Menu.Item>
        <Menu.Item key="6">清除记录</Menu.Item>
    </Menu>
);
function handleMenuClick(e){
    // console.log(e.key)
    // console.log(e.item.props.children);
    // alert(e.key)
    if(e.key==0){
        alert('忽略')
    }else if(e.key==1){
        alert('删除')
    }else if(e.key==2){
        alert('修改')
    }else if(e.key==3){
        alert('停用')
    }else if(e.key==4){
        alert('启用')
    }else if(e.key==5){
        alert('查看记录')
    }else if(e.key==6){
        alert('清除记录')
    }

}

class Buttons extends Component {
    render() {
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Button>
                       忽略 <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        )
    }
}

export default Buttons;