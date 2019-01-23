import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = TreeSelect.TreeNode;
class Serve extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serveValue: ""
        }
    }
    render() {
        return (
            <div className="select_box">
                <span className="spanall">服务 ：</span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.serveValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择服务类型"
                    allowClear
                    treeDefaultExpandAll
                    dropdownClassName="xxss"
                    onChange={this.onChangeServe.bind(this)}
                >
                    <TreeNode value="parent 3" title="parent 1" key="0-3">

                    </TreeNode>
                </TreeSelect>
            </div>
        )
    }
    onChangeServe = (serveValue) => {
        console.log(serveValue);
        this.setState({ serveValue });
    }
}

export default Serve;