import React, { Component } from 'react'
import { Icon, Tree } from 'antd';
import 'antd/dist/antd.css'
const { TreeNode } = Tree;
class Alert extends Component {
    constructor(props){
        super(props);
        this.state={
            flag : false
        }
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    render() {
        return (
            <div className='alert_mask' style={{ display: this.state.flag ? 'block' : 'none' }}>
                <div className="alert_cont">
                    <div className="alert_header">
                        <span className="alert_span1">login 链路详情</span>
                        <span className="alert_span2" onClick={this.handleShow.bind(this)} ><Icon type="close" /></span>
                    </div>
                    <div className="alert_body">
                        <Tree
                            showLine = {false}
                            defaultExpandedKeys={['0-0-0']}
                            onSelect={this.onSelect}
                        >
                            <TreeNode title="parent 1" key="0-0">
                                <TreeNode title="parent 1-0" key="0-0-0">
                                    <TreeNode title="leaf" key="0-0-0-0" />
                                    <TreeNode title="leaf" key="0-0-0-1" />
                                    <TreeNode title="leaf" key="0-0-0-2" />
                                    
                                </TreeNode>
                                <TreeNode title="parent 1-1" key="0-0-1">
                                    <TreeNode title="leaf" key="0-0-1-0" />
                                </TreeNode>
                                <TreeNode title="parent 1-2" key="0-0-2">
                                    <TreeNode title="leaf" key="0-0-2-0" />
                                    <TreeNode title="leaf" key="0-0-2-1" />
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
                </div>

            </div>
        )
    }
    handleShow(){
        this.setState({
            flag : false
        })
    }
}

export default Alert;