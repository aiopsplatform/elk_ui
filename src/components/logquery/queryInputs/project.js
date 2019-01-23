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
                    placeholder="请选择实例"
                    allowClear
                    treeDefaultExpandAll
                    dropdownClassName="xxss"
                    onChange={this.onChangeProject.bind(this)}
                >
                    <TreeNode value="parent 4" title="parent 1" key="0-4">

                    </TreeNode>
                </TreeSelect>
            </div>
        )
    }
    onChangeProject = (projectValue) => {
        console.log(projectValue);
        this.setState({ projectValue });
    }
}

export default Project;