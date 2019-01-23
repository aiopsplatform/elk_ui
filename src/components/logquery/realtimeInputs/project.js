import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = TreeSelect.TreeNode;
class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectValue: ""
        }
    }
    render() {
        return (
            <div className="select_box">
                <span className="spanall">实例 ：</span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.projectValue}
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
    onChangeServe = (projectValue) => {
        console.log(projectValue);
        this.setState({ projectValue });
    }
}

export default Project;